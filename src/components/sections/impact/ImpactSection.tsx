import type { CSSProperties } from "react";
import { FEATURE_TWO, FEATURE_TWO_CARDS } from "../../../lib/constants";

interface ImpactCardProps {
  icon: string;
  iconAlt: string;
  stat: string;
  label: string;
  description: string;
  /** width / height ratio for lg+ — keeps the design proportions at any width */
  aspect: string;
  /** CSS var string, e.g. "var(--color-impact-short)" */
  background: string;
}

/** Card aspect ratios (width / height) from the Figma frame: 442.67 × 500/600/700 */
const CARD_ASPECT = ["442.67 / 500", "442.67 / 600", "442.67 / 700"];

function ImpactCard({
  icon,
  iconAlt,
  stat,
  label,
  description,
  aspect,
  background,
}: ImpactCardProps) {
  return (
    <article
      style={{ background, "--card-ar": aspect } as CSSProperties}
      className={[
        // shape + spacing (spec: padding 32, bottom-left radius 8, space-between)
        "flex flex-col justify-between rounded-bl-lg p-8 text-white",
        // stat scales with the card's own width via container queries
        "[container-type:inline-size]",
        // mobile/tablet: one centered card in a swipe carousel (peeks each side)
        "h-[clamp(360px,60vh,520px)] w-[80vw] shrink-0 snap-center sm:w-[58vw]",
        // lg+: fluid columns, height tracks width to preserve the staircase ratio
        "lg:aspect-[var(--card-ar)] lg:h-auto lg:w-auto lg:flex-1 lg:shrink lg:snap-align-none",
      ].join(" ")}
    >
      <img
        src={icon}
        alt={iconAlt}
        className="h-12 w-12 object-contain [filter:brightness(0)_invert(1)]"
      />

      <div>
        <p className="font-serif leading-[0.8] text-[clamp(3.25rem,38cqw,10rem)]">
          {stat}
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6">
          <span className="shrink-0 text-base font-medium sm:w-24">{label}</span>
          <p className="text-sm leading-snug text-white/85 sm:max-w-[210px]">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ImpactSection() {
  return (
    <section className="mx-auto w-full max-w-[1328px] px-4 py-12 sm:px-6 lg:py-16">
      <header className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
        <div className="max-w-[640px]">
          <p className="text-sm text-text">{FEATURE_TWO.eyebrow}</p>
          <h2 className="mt-3 font-serif leading-[1.08] text-text text-[clamp(2rem,4vw,3rem)]">
            {FEATURE_TWO.title}
          </h2>
        </div>
        <p className="max-w-[360px] text-base leading-relaxed text-subtext lg:self-end">
          {FEATURE_TWO.description}
        </p>
      </header>

      {/* One centered card + swipe on small screens; staggered staircase on lg+ */}
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[10vw] lg:mt-12 lg:items-start lg:gap-0 lg:overflow-visible lg:px-0 lg:[scroll-snap-type:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FEATURE_TWO_CARDS.map((card, i) => (
          <ImpactCard
            key={card.label}
            icon={card.icon}
            iconAlt={card.iconAlt}
            stat={card.stat}
            label={card.label}
            description={card.description}
            background={card.background}
            aspect={CARD_ASPECT[i]}
          />
        ))}
      </div>

      {/* Swipe affordance — small screens only */}
      <div className="mt-5 flex items-center justify-center gap-2 text-sm text-subtext lg:hidden">
        <span>Swipe to explore</span>
        <svg
          className="h-4 w-4 [animation:nudge-x_1.2s_ease-in-out_infinite]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </section>
  );
}
