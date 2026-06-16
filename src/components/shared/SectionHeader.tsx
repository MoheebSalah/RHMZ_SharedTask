interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex w-full max-w-[var(--testimonials-header-width)] flex-col gap-[var(--testimonials-header-gap)]">
      <p className="w-full text-header-4 text-text">{eyebrow}</p>

      <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-end lg:gap-6">
        <h2 className="max-w-[var(--testimonials-title-width)] text-header-1 text-text">
          {title}
        </h2>
        <p className="max-w-[var(--testimonials-description-width)] text-body-1 text-subtext">
          {description}
        </p>
      </div>
    </div>
  );
}
