import Button from "../../ui/Button"
import SectionContainer from "../../layout/SectionContainer"
import { ASSETS } from "../../../lib/assets"

const HERO_EYEBROW = "Trusted by Growing Businesses"
const HERO_TITLE = "Strategic Business Consulting That Drives Real Growth"
const HERO_DESCRIPTION =
  "We help startups, small businesses, and established companies overcome challenges, improve operations, and unlock new opportunities through expert consulting and data-driven strategies."

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="w-full overflow-x-clip py-[var(--hero-section-padding-y-sm)] lg:py-[var(--hero-section-padding-y)]"
    >
      <SectionContainer>
        <div className="mx-auto flex w-full min-w-0 max-w-[var(--hero-title-max-width)] flex-col items-center gap-[var(--hero-title-gap)] text-center">
          <p className="text-body-3 text-subtext">{HERO_EYEBROW}</p>

          <h1 id="hero-heading" className="text-hero-title break-words">
            {HERO_TITLE}
          </h1>

          <p className="max-w-[var(--hero-title-max-width)] break-words text-body-1 text-subtext">
            {HERO_DESCRIPTION}
          </p>

          <div className="flex flex-col gap-[var(--spacing-stack-md)] sm:flex-row sm:flex-wrap sm:justify-center">
            <Button variant="solid" size="md">
              Get Started
            </Button>
            <Button variant="soft" size="md">
              Book a Consultation
            </Button>
          </div>
        </div>

        <img
          src={ASSETS.hero.image}
          alt="Team collaborating around a conference table in a modern office"
          width={1328}
          height={460}
          loading="eager"
          decoding="async"
          className="mx-auto mt-[var(--spacing-stack-3xl)] aspect-[1328/460] w-full max-w-[var(--hero-image-width)] rounded-[var(--hero-image-radius)] object-cover"
        />
      </SectionContainer>
    </section>
  )
}
