type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "section-heading text-center" : "section-heading"}>
      <p className={`eyebrow ${light ? "text-teal-200" : ""}`}>{eyebrow}</p>
      <h2 className={light ? "text-white" : ""}>{title}</h2>
      {description ? (
        <p className={`section-copy ${light ? "text-white/70" : ""}`}>{description}</p>
      ) : null}
    </div>
  );
}
