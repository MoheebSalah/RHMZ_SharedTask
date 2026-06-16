import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ASSETS } from "../../../lib/assets";
import {
  FOOTER_COLUMNS,
  FOOTER_COPYRIGHT,
  SOCIAL_LINKS,
} from "../../../lib/constants";
import FooterColumn from "./FooterColumn";
import FooterHero from "./FooterHero";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  x: FaXTwitter,
} as const;

export default function Footer() {
  return (
    <footer
      className="footer-section relative w-full"
      style={{
        backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)), url(${ASSETS.footer.background})`,
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[var(--footer-section-max-width)] flex-col items-center gap-[var(--spacing-stack-3xl)] pt-[var(--footer-section-padding-top)] lg:min-h-[var(--footer-section-height)] lg:gap-[var(--footer-section-gap)]">
        <FooterHero />

        <div className="footer-blur-panel w-full lg:min-h-[var(--footer-blur-height)]">
          <div className="mx-auto flex w-full max-w-[var(--footer-links-max-width)] flex-col gap-[var(--footer-blur-gap)] px-[var(--spacing-container-x-sm)] py-[var(--footer-blur-padding-y)] md:px-[var(--spacing-container-x)] lg:px-[var(--footer-blur-padding-x)]">
            <div className="grid grid-cols-2 gap-x-[var(--spacing-stack-3xl)] gap-y-[var(--spacing-stack-2xl)] sm:grid-cols-2 lg:grid-cols-4 lg:justify-between lg:gap-[var(--footer-links-columns-gap)]">
              {FOOTER_COLUMNS.map((column, index) => (
                <FooterColumn
                  key={`${column.title}-${index}`}
                  column={column}
                />
              ))}
            </div>

            <hr className="w-full border-white" />

            <div className="flex flex-col gap-[var(--footer-copyright-gap)] lg:h-[var(--footer-bottom-height)] lg:flex-row lg:items-center lg:justify-between">
              <a
                href="#home"
                className="inline-flex items-center gap-[var(--footer-brand-gap)]"
                aria-label="BussinesFlex home"
              >
                <img
                  src={ASSETS.footer.logoMark}
                  alt=""
                  width={48}
                  height={56}
                  aria-hidden
                  className="h-14 w-auto shrink-0"
                />
                <span className="font-outfit text-[44.8px] leading-[59px] text-white">
                  BussinesFlex
                </span>
              </a>

              <div className="flex flex-col items-start gap-[var(--footer-copyright-gap)] lg:items-end">
                <div className="flex items-center gap-[var(--footer-social-gap)]">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="inline-flex size-8 items-center justify-center text-gray transition-colors hover:text-white"
                      >
                        <Icon aria-hidden className="size-8" />
                      </a>
                    );
                  })}
                </div>
                <hr className="hidden w-[243px] border-white lg:block" />
                <p className="font-sans text-[20px] leading-6 text-gray">
                  {FOOTER_COPYRIGHT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
