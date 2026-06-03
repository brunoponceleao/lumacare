type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";
  const titleColor = tone === "dark" ? "text-white" : "text-[#1e2420]";
  const descriptionColor =
    tone === "dark" ? "text-white/72" : "text-[#68736d]";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#bf8677]">
        {eyebrow}
      </p>
      <h2 className={`font-[var(--font-playfair)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-8 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
