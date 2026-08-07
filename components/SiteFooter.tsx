export function SiteFooter() {
  return (
    <footer data-shot="footer" className="px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-sm text-[var(--ink)]/60 sm:flex-row sm:items-center sm:justify-between">
        <p>Nebula Meshgate. Every unit purchased at retail, no loaners kept.</p>
        <nav aria-label="Footer" className="flex gap-6">
          <a href="#verdicts" className="hover:text-[var(--ink)]">
            Verdicts
          </a>
          <a href="#method" className="hover:text-[var(--ink)]">
            Method
          </a>
          <a href="#subscribe" className="hover:text-[var(--ink)]">
            Subscribe
          </a>
        </nav>
      </div>
    </footer>
  );
}
