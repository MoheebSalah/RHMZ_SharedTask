import { FEATURE_TWO, FEATURE_TWO_CARDS } from "../../../lib/constants"
import SectionContainer from "../../layout/SectionContainer";

// Display serif — "Default Lingo" with web-safe fallbacks (DM Serif Display is
// loaded in index.html). Used only for the "title" style (big numbers + the
// section heading), per the design's typography spec.
const FONT_SERIF = "'Default Lingo', 'DM Serif Display', Georgia, serif";

// All non-display text uses Outfit @400 (loaded in index.html). Set once on the
// <section> so every child inherits it; serif elements override inline.
const FONT_SANS = "'Outfit', 'Inter', sans-serif";

/** Responsive card heights — layout only, not copy */
const IMPACT_CARD_HEIGHT_CLASSES = [
  "md:min-h-[clamp(360px,50vh,520px)]",
  "md:min-h-[clamp(420px,58vh,600px)]",
  "md:min-h-[clamp(480px,66vh,680px)]",
] as const;

export function ImpactSection2() {
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
          <p className="max-w-[340px] text-body-2 text-subtext md:pb-1">
            {FEATURE_TWO.description}
          </p>
        </div>

        {/* 
          Cards Container:
          - Mobile: Horizontal scroll (flex-row, overflow-x-auto, snap scrolling)
          - Desktop: Top-aligned, no gap, increasing heights
        */}
        <div className="flex flex-row md:flex-row items-stretch md:items-start gap-4 md:gap-0 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {FEATURE_TWO_CARDS.map((card, i) => {
            const heightClass = IMPACT_CARD_HEIGHT_CLASSES[i];

            // Define dynamic border radius based on position
            let borderClasses = "rounded-lg"; // Default for mobile (8px)

            if (i === 0) {
              // Left Card: Desktop bottom-left and top-left rounded (8px). Right edges square.
              borderClasses += " md:rounded-none md:rounded-l-lg";
            } else if (i === 1) {
              // Middle Card: Desktop top-left, top-right, bottom-right square. Bottom-left rounded (8px) because it hangs below Card 1.
              borderClasses += " md:rounded-none md:rounded-bl-lg";
            } else if (i === FEATURE_TWO_CARDS.length - 1) {
              // Right Card: Desktop right edges rounded (8px). Top-left square. Bottom-left rounded (8px) because it hangs below Card 2.
              borderClasses +=
                " md:rounded-none md:rounded-r-lg md:rounded-bl-lg";
            }

            return (
              <div
                key={card.label}
                className={`group relative flex flex-col justify-between p-8 shrink-0 snap-center text-white
                  [container-type:inline-size]
                  w-[85vw] sm:w-[60vw] md:w-full md:flex-1
                  min-h-[350px] ${heightClass}
                  ${borderClasses}
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.01] hover:z-10 hover:shadow-lg hover:shadow-black/10
                `}
                style={{
                  backgroundColor: card.background,
                }}
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

                {/* Number + label/description grouped at bottom */}
                <div className="flex flex-col gap-6 md:gap-8 mt-auto">
                  {/* Number sized relative to the card via container queries
                      (cqw = % of the card's content box). Bumped to 44cqw so the
                      figure reads large like the design while still scaling with
                      the card width. */}
                  <p
                    className="text-[44cqw] leading-none tracking-tight"
                    style={{ color: "#F5F3F4", fontFamily: FONT_SERIF }}
                  >
                    {card.stat}
                  </p>

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
      </SectionContainer>
    </section>
  );
}

export default ImpactSection2;
