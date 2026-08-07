"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Parallax-lite: the product image drifts at 0.85x scroll speed against the
 * static spec column beside it. This is the page's one motion effect —
 * nothing else moves on scroll.
 */
export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // Distance scrolled through the element's own travel range.
      const progress = (vh - rect.top) / (vh + rect.height);
      const drift = (progress - 0.5) * rect.height * 0.15; // 0.85x speed
      img.style.transform = `translate3d(0, ${drift.toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <div ref={imgRef} className="absolute inset-[-6%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover studio-grade"
        />
      </div>
    </div>
  );
}
