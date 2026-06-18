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
      className="w-full overflow-x-clip min-h-0 py-[var(--hero-section-padding-y-sm)] lg:py-[var(--hero-section-padding-y)]"
    >
      <SectionContainer className="flex flex-col">
        <div className="mx-auto flex w-full min-w-0 max-w-[var(--hero-title-max-width)] flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-5">
            <p className="text-hero-eyebrow text-[var(--color-quote-subtext)]">
              {HERO_EYEBROW}
            </p>

            <h1 id="hero-heading" className="text-hero-title break-words">
              Strategic Business Consulting That <br></br>Drives Real Growth
            </h1>

            <p className="text-hero-description max-w-[var(--hero-title-max-width)] break-words text-[var(--color-quote-subtext)]">
              We help startups, small businesses, and established companies
              overcome challenges, improve<br></br> operations, and unlock new
              opportunities through expert consulting and data-driven
              strategies.
            </p>
          </div>
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
          className="mx-auto mt-[var(--spacing-stack-2xl)] aspect-[1328/460] w-full max-w-[var(--hero-image-width)] rounded-[var(--hero-image-radius)] object-cover"
        />
      </SectionContainer>
    </section>
  )
}
