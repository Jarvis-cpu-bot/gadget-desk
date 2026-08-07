import Image from "next/image";
import { CaliperRule } from "./CaliperRule";

export function SpecMethod() {
  return (
    <section
      id="method"
      data-shot="method"
      className="border-b border-[var(--line)]/60 px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[42fr_58fr] lg:gap-16">
        <div className="relative order-2 aspect-[4/5] bg-[var(--bg-raised)] lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1755182529034-189a6051faae?q=80&w=1200&auto=format&fit=crop"
            alt="Unbranded true-wireless earbuds and open charging case on a light studio surface."
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover studio-grade"
          />
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--flag)]">
            How we test
          </p>
          <h2 className="mt-4 max-w-lg text-balance font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-[-0.01em]">
            Every unit gets measured, not described.
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-[var(--ink)]/80">
            Manufacturer spec sheets round in their own favor. We put calipers,
            a scale, and a discharge rig on everything that comes through the
            door and publish what we actually get — including the numbers
            that make a product look worse than its box.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            <CaliperRule label="Claimed battery life" value="30h 00m" />
            <CaliperRule label="Measured at 70% volume" value="21h 40m" />
            <CaliperRule label="Claimed weight (pair)" value="4.4 g" />
            <CaliperRule label="Measured weight (pair)" value="4.9 g" />
            <CaliperRule label="IP rating tested" value="IPX4 pass" />
            <CaliperRule label="Drop test, 1.2 m concrete" value="6 / 6 survived" />
          </div>
        </div>
      </div>
    </section>
  );
}
