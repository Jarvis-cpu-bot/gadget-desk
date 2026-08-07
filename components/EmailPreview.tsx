function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M10 2.5l2.2 4.9 5.3.5-4 3.6 1.2 5.2L10 13.9l-4.7 2.8 1.2-5.2-4-3.6 5.3-.5L10 2.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
      <rect x="2.5" y="4" width="15" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3.5 7.5V16a1 1 0 001 1h11a1 1 0 001-1V7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 10.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function EmailPreview() {
  return (
    <section
      id="subscribe"
      data-shot="newsletter"
      className="border-b border-[var(--line)]/60 bg-[var(--bg-raised)] px-6 py-20 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[42fr_58fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--flag)]">
            The Debrief
          </p>
          <h2 className="mt-4 max-w-md text-balance font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold uppercase leading-[1.05] tracking-[-0.01em]">
            One verdict, every Thursday, before the sale ends.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-[var(--ink)]/80">
            No round-ups of ten products we glanced at. One thing we bought,
            broke, and measured — with the number you&rsquo;d actually want
            before you spend the money.
          </p>

          <form
            action="#"
            method="post"
            className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            aria-label="Subscribe to The Debrief newsletter"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full flex-1 border border-[var(--ink)]/30 bg-[var(--bg)] px-4 py-3 text-sm placeholder:text-[var(--ink)]/45 focus-visible:border-[var(--flag)]"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.04em] text-[var(--bg)] transition-colors hover:bg-[var(--flag)]"
            >
              Get the verdict
            </button>
          </form>
          <p className="mt-3 text-xs text-[var(--ink)]/55">
            Free. Unsubscribe in one click. 38,412 readers as of this week.
          </p>
        </div>

        {/* Realistic email client mockup */}
        <div className="flex items-center">
          <div className="w-full overflow-hidden border border-[var(--line)] bg-[var(--bg)] shadow-[0_20px_50px_-20px_rgba(20,23,26,0.25)]">
            {/* Client chrome: list row */}
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-5 py-3 text-sm">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[var(--flag)]"
                aria-label="Unread"
                role="img"
              />
              <span className="font-semibold">The Gadget Desk</span>
              <span className="truncate text-[var(--ink)]/55">
                &lt;debrief@thegadgetdesk.example&gt;
              </span>
              <span className="ml-auto shrink-0 text-xs text-[var(--ink)]/50">
                8:02 AM
              </span>
            </div>
            <div className="flex items-center gap-4 border-b border-[var(--line)] px-5 py-3">
              <p className="flex-1 truncate text-sm font-medium">
                The case matters more than the driver
              </p>
              <button
                type="button"
                aria-label="Star this email"
                className="text-[var(--ink)]/45 hover:text-[var(--flag)]"
              >
                <StarIcon />
              </button>
              <button
                type="button"
                aria-label="Archive this email"
                className="text-[var(--ink)]/45 hover:text-[var(--ink)]"
              >
                <ArchiveIcon />
              </button>
            </div>

            {/* Body */}
            <div className="mx-auto max-w-[46ch] px-6 py-8">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-[var(--ink)]/50">
                Issue 47 · 5 min read
              </p>
              <p className="mt-5 text-[0.95rem] leading-[1.7] text-[var(--ink)]/90">
                Every earbud case we opened this month claimed 30 hours of
                combined playback. We drained six of them to zero. Only two
                cleared 24.
              </p>
              <blockquote className="my-6 border-l-2 border-[var(--flag)] pl-4 text-[0.95rem] italic leading-[1.7] text-[var(--ink)]/85">
                &ldquo;The spec sheet is a starting offer. Ours is what you
                actually get at checkout.&rdquo;
              </blockquote>
              <ul className="mt-5 space-y-2 text-[0.9rem] leading-relaxed text-[var(--ink)]/85">
                <li>— Case charges the buds at 0.4C, slower than claimed</li>
                <li>— IPX4 seal held after 6 drops from 1.2 m</li>
                <li>— Two of five review units shipped with a rattling hinge</li>
              </ul>
              <p className="mt-6 text-[0.95rem] leading-[1.7] text-[var(--ink)]/90">
                Full teardown and the two models worth your money, below.
              </p>
              <p className="mt-6 text-[0.9rem] text-[var(--ink)]/80">
                Measured and written by
                <br />
                <span className="font-semibold text-[var(--ink)]">
                  Priya Nandakumar
                </span>
                , Test Lead
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
