export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)]/60">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-display text-[1.05rem] font-semibold uppercase tracking-[0.01em]"
        >
          The Gadget Desk
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm sm:flex">
          <a href="#verdicts" className="hover:text-[var(--flag)] transition-colors">
            Verdicts
          </a>
          <a href="#method" className="hover:text-[var(--flag)] transition-colors">
            How we test
          </a>
          <a href="#subscribe" className="hover:text-[var(--flag)] transition-colors">
            The Debrief
          </a>
        </nav>
        <a
          href="#subscribe"
          className="border border-[var(--ink)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--flag)] hover:text-[var(--flag)]"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
