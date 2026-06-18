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
      <p className="text-section-eyebrow text-[20px]">{eyebrow}</p>

      <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-3 md:items-end md:gap-8">
        <h2 className="text-section-title text-[48px] md:col-span-2">{title}</h2>
        <p className="text-section-description text-subtext text-[18px] md:col-span-1 md:pb-1">
          {description}
        </p>
      </div>
    </div>
  );
}
