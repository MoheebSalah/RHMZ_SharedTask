import { PARTNER_LOGOS } from "../../../lib/constants";

function PartnerLogo({ name, src }: { name: string; src: string }) {
  if (name === "OpenAI") {
    return (
      <span
        className="flex h-[var(--partners-track-height)] items-center text-[22px] font-semibold leading-none text-text sm:text-[28px]"
        aria-hidden="true"
      >
        OpenAI
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      height={52}
      className="h-[var(--partners-track-height)] w-auto max-w-[120px] object-contain sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
  );
}

const MARQUEE_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export default function PartnersMarquee() {
  return (
    <div className="partners-viewport relative h-[var(--partners-track-height)] w-full min-w-0 max-w-full overflow-hidden sm:flex-1 lg:max-w-[var(--partners-track-width)]">
      <div
        className="partners-track flex w-max items-center gap-[var(--partners-section-gap-mobile)] opacity-[var(--partners-track-opacity)] grayscale sm:gap-[var(--partners-section-gap)]"
        role="list"
        aria-label="Partner companies"
      >
        {MARQUEE_LOGOS.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            role="listitem"
            className="shrink-0"
            aria-hidden={index >= PARTNER_LOGOS.length ? true : undefined}
          >
            <PartnerLogo name={partner.name} src={partner.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
