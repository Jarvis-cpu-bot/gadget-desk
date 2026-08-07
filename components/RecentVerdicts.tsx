import Image from "next/image";

type Verdict = {
  product: string;
  category: string;
  score: string;
  verdict: string;
  image: string;
  alt: string;
  call: "Buy" | "Skip" | "Wait";
};

const verdicts: Verdict[] = [
  {
    product: "Fjord 12 Pro trail runner",
    category: "Footwear",
    score: "7.8",
    verdict:
      "The lugs bite on wet rock the way the marketing claims. The upper is last year's mesh with a new print. Buy for the tread, ignore the copy about the upper.",
    image:
      "https://images.unsplash.com/photo-1683860296286-6fd067d4a4a6?q=80&w=1200&auto=format&fit=crop",
    alt: "Trail running shoe sole, close macro on the knurled rubber tread and ridged midsole.",
    call: "Buy",
  },
  {
    product: "Vantage MX travel mouse",
    category: "Peripherals",
    score: "6.1",
    verdict:
      "The scroll wheel free-spins on two of three review units within a week. When it's tight, it's the best pocket mouse we've tested. Odds aren't in your favor yet.",
    image:
      "https://images.unsplash.com/photo-1772531606450-0dd023c265d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Black wireless travel mouse photographed at a three-quarter angle on a seamless white studio background.",
    call: "Wait",
  },
  {
    product: "Orbital 4K action camera",
    category: "Imaging",
    score: "8.4",
    verdict:
      "Stabilization beats a gimbal-mounted rival costing twice as much. Battery still dies at 38 minutes in cold water. Pack a spare.",
    image:
      "https://images.unsplash.com/photo-1678599694391-577120277db9?q=80&w=1200&auto=format&fit=crop",
    alt: "Macro of a camera's top-plate mode dial, shutter button, and hot shoe against a white background.",
    call: "Buy",
  },
];

const callColor: Record<Verdict["call"], string> = {
  Buy: "text-[var(--flag)]",
  Skip: "text-[var(--ink)]/45",
  Wait: "text-[var(--ink)]/70",
};

export function RecentVerdicts() {
  return (
    <section
      id="verdicts"
      data-shot="verdicts"
      className="border-b border-[var(--line)]/60 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-[-0.01em]">
            Recent verdicts
          </h2>
          <p className="max-w-sm text-sm text-[var(--ink)]/65">
            Scored out of 10 against price, not against the category average.
            A 6 that costs $40 can outrank an 8 that costs $200.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-3">
          {verdicts.map((v) => (
            <li key={v.product} className="flex flex-col bg-[var(--bg)]">
              <div className="relative aspect-[4/5] w-full bg-[var(--bg-raised)]">
                <Image
                  src={v.image}
                  alt={v.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover studio-grade"
                />
                <span className="absolute right-3 top-3 bg-[var(--bg)] px-2 py-1 font-[family-name:var(--font-mono)] tabular text-xs font-medium">
                  {v.score}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.08em] text-[var(--ink)]/55">
                      {v.category}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold leading-tight">
                      {v.product}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.06em] ${callColor[v.call]}`}
                  >
                    {v.call}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--ink)]/80">
                  {v.verdict}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
