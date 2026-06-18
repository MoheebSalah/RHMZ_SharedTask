import { PARTNER_LOGOS } from "../../../lib/constants";

function PartnerLogo({ name, src }: { name: string; src: string }) {
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

const trackGroupClassName =
  "partners-track-group flex shrink-0 items-center gap-[var(--partners-section-gap-mobile)] pr-[var(--partners-section-gap-mobile)] sm:gap-[var(--partners-section-gap)] sm:pr-[var(--partners-section-gap)]";

function PartnerTrack({
  duplicate = false,
}: {
  duplicate?: boolean;
}) {
  return (
    <div
      className={trackGroupClassName}
      role={duplicate ? undefined : "list"}
      aria-hidden={duplicate || undefined}
    >
      {PARTNER_LOGOS.map((partner) => (
        <div
          key={duplicate ? `dup-${partner.name}` : partner.name}
          role={duplicate ? undefined : "listitem"}
          className="shrink-0"
        >
          <PartnerLogo name={partner.name} src={partner.src} />
        </div>
      ))}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <div className="partners-viewport relative h-[var(--partners-track-height)] w-full min-w-0 max-w-full overflow-hidden sm:flex-1 lg:max-w-[var(--partners-track-width)]">
      <div
        className="partners-track flex w-max items-center opacity-[var(--partners-track-opacity)] grayscale"
        aria-label="Partner companies"
      >
        <PartnerTrack />
        <PartnerTrack duplicate />
      </div>
    </div>
  );
}
