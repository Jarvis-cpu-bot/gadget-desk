type CaliperRuleProps = {
  label: string;
  value: string;
  orientation?: "horizontal" | "vertical";
  /** "on-image" swaps ink-on-bg for a white readout with a scrim, for use
   * over photography instead of the flat studio ground. */
  tone?: "ink" | "on-image";
  className?: string;
};

/**
 * The signature element: a dimension line with tick marks, like a caliper
 * readout on a spec sheet, terminated by a monospaced value slot.
 */
export function CaliperRule({
  label,
  value,
  orientation = "horizontal",
  tone = "ink",
  className = "",
}: CaliperRuleProps) {
  const onImage = tone === "on-image";
  const lineColor = onImage ? "bg-white" : "bg-[var(--ink)]";
  const textColor = onImage ? "text-white" : "text-[var(--ink)]";
  const labelColor = onImage ? "text-white/75" : "text-[var(--ink)]/60";
  const ruleStyle = onImage
    ? {
        backgroundImage:
          "repeating-linear-gradient(to right, #fff 0, #fff 1px, transparent 1px, transparent 12px)",
      }
    : undefined;

  if (orientation === "vertical") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="flex h-full flex-col items-center gap-2">
          <span className={`h-2 w-px ${lineColor}`} />
          <span
            className="w-px flex-1 bg-[repeating-linear-gradient(to_bottom,var(--ink)_0,var(--ink)_1px,transparent_1px,transparent_10px)]"
            aria-hidden
          />
          <span className={`h-2 w-px ${lineColor}`} />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className={`font-[family-name:var(--font-mono)] tabular text-sm font-medium ${textColor}`}>
            {value}
          </span>
          <span className={`text-[0.65rem] uppercase tracking-[0.08em] ${labelColor}`}>
            {label}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-1.5 ${onImage ? "bg-black/25 px-3 py-2.5 backdrop-blur-[2px]" : ""} ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`h-2 w-px ${lineColor}`} aria-hidden />
        <span
          className={`${onImage ? "" : "caliper-rule"} h-px flex-1`}
          style={ruleStyle}
          aria-hidden
        />
        <span className={`h-2 w-px ${lineColor}`} aria-hidden />
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <span className={`text-[0.65rem] uppercase tracking-[0.08em] ${labelColor}`}>
          {label}
        </span>
        <span className={`font-[family-name:var(--font-mono)] tabular text-sm font-medium ${textColor}`}>
          {value}
        </span>
      </div>
    </div>
  );
}
