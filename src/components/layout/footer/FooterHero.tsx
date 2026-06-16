import { HiArrowUpRight } from "react-icons/hi2";
import { FOOTER_HERO } from "../../../lib/constants";

export default function FooterHero() {
  return (
    <div className="flex w-full flex-col gap-[var(--spacing-stack-3xl)] px-[var(--spacing-container-x-sm)] md:px-[var(--spacing-container-x)] lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--footer-hero-gap)] lg:px-[var(--footer-hero-padding-x)]">
      <div className="flex w-full max-w-[var(--footer-hero-left-width)] flex-col items-start gap-[var(--footer-hero-content-gap)]">
        <h2 className="font-display text-header-1 font-normal text-white">
          {FOOTER_HERO.title}
        </h2>

        <button
          type="button"
          className="inline-flex h-16 w-full items-center justify-center gap-[18px] rounded-[var(--radius-md)] border border-white px-8 py-5 font-sans text-[20px] leading-6 text-white transition-colors hover:bg-white/10"
        >
          <HiArrowUpRight aria-hidden className="size-5 shrink-0" />
          {FOOTER_HERO.buttonLabel}
        </button>
      </div>

      <div className="flex w-full max-w-[var(--footer-hero-right-width)] flex-col items-start gap-[var(--footer-hero-content-gap)]">
        <p className="font-sans text-[24px] leading-[29px] text-white">
          {FOOTER_HERO.summary}
        </p>
        <hr className="w-full border-white" />
        <p className="font-sans text-[24px] leading-[29px] text-white">
          {FOOTER_HERO.tagline}
        </p>
      </div>
    </div>
  );
}
