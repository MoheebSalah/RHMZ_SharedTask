import { useEffect, useRef, useState } from "react";
import { FEATURE_TWO, FEATURE_TWO_CARDS } from "../../../lib/constants";
import SectionContainer from "../../layout/SectionContainer";

const FONT_SANS = "'Outfit', 'Inter', sans-serif";

const IMPACT_CARD_HEIGHT_CLASSES = [
  "md:min-h-[clamp(360px,50vh,520px)]",
  "md:min-h-[clamp(420px,58vh,600px)]",
  "md:min-h-[clamp(480px,66vh,680px)]",
] as const;

export function ImpactSection2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardWidth = el.scrollWidth / FEATURE_TWO_CARDS.length;
      setActiveIndex(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
      style={{ fontFamily: FONT_SANS }}
    >
      <SectionContainer>
        {/* Heading row */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-[560px]">
            <p className="text-section-eyebrow mb-3">{FEATURE_TWO.eyebrow}</p>
            <h2 className="text-section-title">{FEATURE_TWO.title}</h2>
          </div>
          <p className="max-w-[340px] text-section-description text-subtext md:pb-1">
            {FEATURE_TWO.description}
          </p>
        </div>

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
            const heightClass = IMPACT_CARD_HEIGHT_CLASSES[i];

            let borderClasses = "rounded-md";
            if (i === 0) {
              borderClasses += " md:rounded-none md:rounded-l-md";
            } else if (i === 1) {
              borderClasses += " md:rounded-none md:rounded-bl-md";
            } else if (i === FEATURE_TWO_CARDS.length - 1) {
              borderClasses +=
                " md:rounded-none md:rounded-r-md md:rounded-bl-md";
            }

            return (
              <div
                key={card.label}
                className={`group relative flex flex-col justify-between p-8 shrink-0 snap-center text-white
                  [container-type:inline-size]
                  w-[100vw] md:w-full md:flex-1
                  min-h-[350px] ${heightClass}
                  ${borderClasses}
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.01] hover:z-10 hover:shadow-lg hover:shadow-black/10
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
                    className="w-[90cqw] h-auto object-contain object-left"
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
            );
          })}
        </div>

        {/* Dots — mobile only, matches the "Why Choose Us" carousel style */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-5">
          {FEATURE_TWO_CARDS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to card ${i + 1}`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.scrollWidth / FEATURE_TWO_CARDS.length;
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
              }}
              className="size-2 rounded-full transition-all duration-200"
              style={{
                backgroundColor: i === activeIndex ? "#000000" : "#d3d3d3",
                transform: i === activeIndex ? "scale(1.2)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default ImpactSection2;
