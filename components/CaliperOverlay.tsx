"use client";

import { useEffect, useRef, useState } from "react";

type Line = {
  /** Endpoints as % of the overlay's own box, so the dimension line tracks
   * the product regardless of viewport size. */
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  value: string;
  /** Which side the witness ticks + value slot point away from the line. */
  side: "top" | "bottom" | "left" | "right";
};

const LINES: Line[] = [
  {
    // Spans the width of the case, drawn just above it.
    x1: 12,
    y1: 32,
    x2: 82,
    y2: 32,
    label: "Case width",
    value: "52.4 mm",
    side: "top",
  },
  {
    // Spans the height of the open earbud pod on the right, drawn just
    // inside its right edge so the line reads as measuring the pod rather
    // than floating in the background.
    x1: 91,
    y1: 20,
    x2: 91,
    y2: 58,
    label: "Case height",
    value: "24.1 mm",
    side: "right",
  },
];

const TICK_COUNT = 14;

/**
 * The signature element: dimension lines that measure the product in the
 * photograph, like a caliper readout laid over a spec sheet. Each line spans
 * the object's extent with witness end-caps, regular tick marks, and a
 * monospaced value slot breaking the line. Draws on (stroke-dashoffset) once
 * the hero scrolls into view — the build's one permitted extra motion beat,
 * layered on top of the parallax-lite image drift.
 */
export function CaliperOverlay() {
  const ref = useRef<SVGSVGElement>(null);
  // Lazy initializer reads the media query once, before first paint, so the
  // reduced-motion case never needs a setState call inside the effect body.
  const [drawn, setDrawn] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (drawn) return; // already resolved synchronously (reduced motion)
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [drawn]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      {LINES.map((line, i) => (
        <DimensionLine key={i} line={line} drawn={drawn} delay={i * 0.25} />
      ))}
    </svg>
  );
}

function DimensionLine({
  line,
  drawn,
  delay,
}: {
  line: Line;
  drawn: boolean;
  delay: number;
}) {
  const { x1, y1, x2, y2, label, value, side } = line;
  const horizontal = side === "top" || side === "bottom";
  const capHalf = horizontal ? 1.4 : 1.4;
  const length = horizontal ? Math.abs(x2 - x1) : Math.abs(y2 - y1);
  const mid = { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };

  const ticks = Array.from({ length: TICK_COUNT + 1 }, (_, i) => {
    const t = i / TICK_COUNT;
    const major = i % 7 === 0;
    const cx = x1 + (x2 - x1) * t;
    const cy = y1 + (y2 - y1) * t;
    const h = major ? capHalf : capHalf * 0.55;
    return horizontal
      ? { x1: cx, y1: y1 - h, x2: cx, y2: y1 + h }
      : { x1: x1 - h, y1: cy, x2: x1 + h, y2: cy };
  });

  // Vector-effect keeps stroke width constant despite non-uniform viewBox
  // scaling from preserveAspectRatio="none".
  const strokeProps = {
    stroke: "white",
    strokeWidth: 0.6,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <g
      style={{
        transition: `opacity 0.5s ease ${delay}s`,
        opacity: drawn ? 1 : 0,
      }}
    >
      {/* witness lines extending from the measured edges into the rule */}
      <line
        x1={horizontal ? x1 : x1 - capHalf * 1.8}
        y1={horizontal ? y1 - capHalf * 1.8 : y1}
        x2={horizontal ? x1 : x1 + capHalf * 1.8}
        y2={horizontal ? y1 + capHalf * 1.8 : y1}
        {...strokeProps}
        strokeOpacity={0.85}
      />
      <line
        x1={horizontal ? x2 : x2 - capHalf * 1.8}
        y1={horizontal ? y2 - capHalf * 1.8 : y2}
        x2={horizontal ? x2 : x2 + capHalf * 1.8}
        y2={horizontal ? y2 + capHalf * 1.8 : y2}
        {...strokeProps}
        strokeOpacity={0.85}
      />

      {/* the dimension line itself, drawing on across its span */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        {...strokeProps}
        pathLength={100}
        strokeDasharray={100}
        strokeDashoffset={drawn ? 0 : 100}
        style={{ transition: `stroke-dashoffset 1.1s ease ${delay}s` }}
      />

      {/* tick marks at regular intervals, longer at major increments */}
      {ticks.map((t, i) => (
        <line key={i} {...t} {...strokeProps} strokeWidth={0.4} />
      ))}

      {/* value slot breaking the line, monospaced. Vertical lines always
          park their slot on the INSIDE (left) of the line — the overlay
          only spans a 42%-width column, so a slot hung off the right of a
          line near the column's right edge got clipped by the column's own
          overflow-hidden. Inside placement is safe regardless of how close
          the line sits to the image edge. Label sits well clear above the
          value slot (vertical) or above the rule (horizontal) so the two
          never collide. */}
      <foreignObject
        x={horizontal ? mid.x - 9 : x1 - 19}
        y={horizontal ? (side === "top" ? y1 - 6.4 : y1 + 1.6) : mid.y - 2.2}
        width={horizontal ? 18 : 19}
        height={4.4}
      >
        <div
          className="flex h-full items-center justify-center whitespace-nowrap bg-black/60 px-1 font-[family-name:var(--font-mono)] leading-none text-white backdrop-blur-[1px]"
          style={{ fontSize: "2.6px", letterSpacing: "0.01em" }}
        >
          {value}
        </div>
      </foreignObject>

      {/* label, small caps, offset from the line with clear separation
          from the value slot. Vertical-line labels share the value chip's
          right edge (x1) so neither ever sits further right than the
          chip that's already confirmed on-image. */}
      <foreignObject
        x={horizontal ? x1 : x1 - 19}
        y={horizontal ? (side === "top" ? y1 - 10.4 : y1 + 6.6) : y1 - 4.6}
        width={horizontal ? Math.max(length, 20) : 19}
        height={3.4}
      >
        <div
          className={`whitespace-nowrap uppercase text-white/85 ${
            horizontal ? "" : "text-right"
          }`}
          style={{ fontSize: "1.9px", letterSpacing: "0.06em" }}
        >
          {label}
        </div>
      </foreignObject>
    </g>
  );
}
