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
    <div className="flex w-full flex-col gap-5">
      <p className="text-section-eyebrow">{eyebrow}</p>

      <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-8">
        <h2 className="max-w-[560px] text-section-title">{title}</h2>
        <p className="max-w-[318px] text-section-description text-subtext md:pb-1">
          {description}
        </p>
      </div>
    </div>
  );
}
