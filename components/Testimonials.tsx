type Note = {
  name: string;
  role: string;
  quote: string;
};

const notes: Note[] = [
  {
    name: "Marcus Oduya",
    role: "IT procurement, 40-person office",
    quote:
      "The battery drain numbers on the standing-desk review saved us from a bulk order we would have regretted in a year. Nobody else runs that test.",
  },
  {
    name: "Ren Takahashi",
    role: "Freelance video editor",
    quote:
      "I skip the review and go straight to the caliper numbers now. Told me the SSD enclosure ran 6°C hotter than the one it replaced. That's the whole review, honestly.",
  },
  {
    name: "Delphine Wray",
    role: "Reads it over coffee, buys maybe once a quarter",
    quote:
      "It's the only newsletter I haven't muted. Short, opinionated, and it told me to skip a $400 blender I was about to buy.",
  },
];

export function Testimonials() {
  return (
    <section
      data-shot="testimonials"
      className="border-b border-[var(--line)]/60 px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 className="max-w-xl font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold uppercase leading-[1.05] tracking-[-0.01em]">
          What readers do with it
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {notes.map((n, i) => (
            <li
              key={n.name}
              className={`flex flex-col gap-4 ${i === 1 ? "sm:mt-8" : ""}`}
            >
              <p className="text-[1.05rem] leading-relaxed text-[var(--ink)]/90">
                &ldquo;{n.quote}&rdquo;
              </p>
              <p className="mt-auto text-sm">
                <span className="font-semibold">{n.name}</span>
                <span className="text-[var(--ink)]/55"> — {n.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
