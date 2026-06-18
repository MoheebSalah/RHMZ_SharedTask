import { useEffect, useRef, useState } from "react";
import { FEATURE_TWO, FEATURE_TWO_CARDS } from "../../../lib/constants";
import SectionContainer from "../../layout/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
const FONT_SANS = "'Outfit', 'Inter', sans-serif";

const IMPACT_CARD_HEIGHT_CLASSES = [
  "md:min-h-[clamp(360px,50vh,520px)]",
  "md:min-h-[clamp(420px,58vh,600px)]",
  "md:min-h-[clamp(480px,66vh,680px)]",
] as const

export function ImpactSection2() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handleScroll = () => {
      const cardWidth = el.scrollWidth / FEATURE_TWO_CARDS.length
      setActiveIndex(Math.round(el.scrollLeft / cardWidth))
    }
    el.addEventListener("scroll", handleScroll, { passive: true })
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="w-full overflow-hidden bg-white "
      style={{ fontFamily: FONT_SANS }}
    >
      <SectionContainer className="flex flex-col gap-[var(--testimonials-outer-gap)]">
        {/* Heading row */}
        <SectionHeader
          eyebrow={FEATURE_TWO.eyebrow}
          title={FEATURE_TWO.title}
          description={FEATURE_TWO.description}
        />

        {/*
          Cards Container:
          - Mobile: One full-width card per screen (snap scrolling) + dots below
          - Desktop: Top-aligned, no gap, increasing heights
        */}
        <div
          ref={scrollRef}
          className="flex flex-row items-stretch md:items-start gap-0 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {FEATURE_TWO_CARDS.map((card, i) => {
            const heightClass = IMPACT_CARD_HEIGHT_CLASSES[i]

            let borderClasses = "rounded"
            if (i === 0) {
              borderClasses += " md:rounded-none md:rounded-l"
            } else if (i === 1) {
              borderClasses += " md:rounded-none md:rounded-bl"
            } else if (i === FEATURE_TWO_CARDS.length - 1) {
              borderClasses += " md:rounded-none md:rounded-r md:rounded-bl";
            }

            return (
              <div
                key={card.label}
                className={`group relative flex flex-col justify-between p-5 md:p-8 shrink-0 snap-center text-white
                  [container-type:inline-size]
                  w-[calc(100vw-40px)] md:w-full md:flex-1
                  min-h-[300px] sm:min-h-[350px] ${heightClass}
                  ${borderClasses}
                `}
                style={{ backgroundColor: card.background }}
              >
                {/* Icon top-left */}
                <div className="mb-12">
                  <img
                    src={card.icon}
                    alt={card.iconAlt}
                    className="size-[40px] md:size-[48px] object-contain opacity-90"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>

                {/* Number PNG + label/description at bottom */}
                <div className="flex flex-col gap-6 md:gap-8 mt-auto">
                  <img
                    src={card.statImg}
                    alt={card.stat}
                    className="w-fit max-w-[90cqw] h-auto object-contain mx-auto"
                  />
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
                    <p
                      className="text-[18px] leading-[25px]"
                      style={{ color: "#F5F3F4" }}
                    >
                      {card.label}
                    </p>
                    <p
                      className="md:max-w-[170px] md:text-left text-[14px] leading-[21px] opacity-90"
                      style={{ color: "#F5F3F4" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Dots — mobile only, pill style matching Latest Insights */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-5">
          {FEATURE_TWO_CARDS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to card ${i + 1}`}
              onClick={() => {
                const el = scrollRef.current
                if (!el) return
                const cardWidth = el.scrollWidth / FEATURE_TWO_CARDS.length
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" })
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 bg-[#E5383B]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export default ImpactSection2
