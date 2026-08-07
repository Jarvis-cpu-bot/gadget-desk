import { CaliperOverlay } from "./CaliperOverlay";
import { ParallaxImage } from "./ParallaxImage";

export function Hero() {
  return (
    <section
      id="top"
      data-shot="hero"
      className="relative overflow-hidden border-b border-[var(--line)]/60"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[58fr_42fr]">
        {/* Copy column — 58% */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-24 lg:py-28">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--flag)]">
            Verdict №118 — wireless earbuds, sub-$150
          </p>
          <h1 className="mt-5 max-w-xl text-balance font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold uppercase leading-[1.02] tracking-[-0.01em]">
            Buy the case,
            <br />
            not the marketing.
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-[var(--ink)]/85">
            We measured, dropped, and drained forty pairs of earbuds this quarter.
            Most of the category is the same driver in a different shell. A few
            are not. We tell you which is which before you click buy — not in a
            round-up written after the fact.
          </p>

          <form
            action="#"
            method="post"
            className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
            aria-label="Subscribe to The Debrief newsletter"
          >
            <label htmlFor="hero-email" className="sr-only">
              Email address
            </label>
            <input
              id="hero-email"
              name="email"
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full flex-1 border border-[var(--ink)]/30 bg-transparent px-4 py-3 text-sm placeholder:text-[var(--ink)]/45 focus-visible:border-[var(--flag)]"
            />
            <button
              type="submit"
              data-shot-cta
              className="whitespace-nowrap bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-[var(--bg)] transition-colors hover:bg-[var(--flag)]"
            >
              Get the verdict
            </button>
          </form>
          <p className="mt-3 text-xs text-[var(--ink)]/55">
            One email, every Thursday. No sponsor placements — we buy every unit
            we test.
          </p>

          <dl className="caliper-rule mt-14 grid max-w-md grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col">
              <dt className="flex h-8 items-end text-[0.65rem] uppercase leading-tight tracking-[0.08em] text-[var(--ink)]/55">
                Units tested
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-mono)] tabular text-2xl font-medium">
                214
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex h-8 items-end text-[0.65rem] uppercase leading-tight tracking-[0.08em] text-[var(--ink)]/55">
                Returned to sender
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-mono)] tabular text-2xl font-medium">
                61
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex h-8 items-end text-[0.65rem] uppercase leading-tight tracking-[0.08em] text-[var(--ink)]/55">
                Readers
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-mono)] tabular text-2xl font-medium">
                38.4k
              </dd>
            </div>
          </dl>
        </div>

        {/* Image column — 42%, parallax-lite */}
        <div className="relative min-h-[420px] bg-[var(--bg-raised)] lg:min-h-full">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1400&auto=format&fit=crop"
            alt="Wireless earbud charging case, matte white shell, photographed close on a seamless studio sweep."
          />
          <CaliperOverlay />
        </div>
      </div>
    </section>
  );
}
