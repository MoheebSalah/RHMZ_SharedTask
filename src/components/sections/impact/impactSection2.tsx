// Display serif — "Default Lingo" with web-safe fallbacks (DM Serif Display is
// loaded in index.html). Used only for the "title" style (big numbers + the
// section heading), per the design's typography spec.
const FONT_SERIF = "'Default Lingo', 'DM Serif Display', Georgia, serif"

// All non-display text uses Outfit @400 (loaded in index.html). Set once on the
// <section> so every child inherits it; serif elements override inline.
const FONT_SANS = "'Outfit', 'Inter', sans-serif"

const STATS = [
  {
    icon: "/icons/impact/hand-click.png",
    value: "95%",
    label: "Retention",
    description: "Clients continue working with us year after year.",
    bg: "#A4161A",
    // We use tailwind classes for height to make it responsive
    // (fixed height on mobile, staggered + viewport-capped on desktop so the
    // whole section fits in one screenful while the cards stay tall).
    heightClass: "md:min-h-[clamp(360px,50vh,520px)]",
  },
  {
    icon: "/icons/impact/shield-dollar.png",
    value: "12M+",
    label: "Revenue",
    description: "Generated through strategies implemented.",
    bg: "#BA181B",
    heightClass: "md:min-h-[clamp(420px,58vh,600px)]",
  },
  {
    icon: "/icons/impact/lightbulb-dollar.png",
    value: "250+",
    label: "Businesses",
    description: "Successfully supported across various industries.",
    bg: "#E5383B",
    heightClass: "md:min-h-[clamp(480px,66vh,680px)]",
  },
]

export function ImpactSection2() {
  return (
    <section
      className="py-12 bg-white overflow-hidden md:min-h-screen md:flex md:flex-col md:justify-center"
      style={{ fontFamily: FONT_SANS }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading row */}
        <div className="grid items-start gap-8 md:grid-cols-3 mb-10">
          <div className="md:col-span-2 md:pr-16">
            <span className="text-[14px] leading-[21px] text-black block mb-4">
              Our Impact
            </span>
            <h2
              className="mt-2 text-[36px] md:text-[42px] leading-[1.05] text-black"
              style={{ fontFamily: FONT_SERIF }}
            >
              Helping Businesses Achieve <br className="hidden md:block" />{" "}
              Measurable Results
            </h2>
          </div>
          <div className="md:col-span-1 flex items-start md:pt-12">
            <p className="text-[14px] leading-[21px] text-black/70">
              Our consulting solutions have helped companies
              <br />
              improve performance, increase efficiency, and
              <br />
              accelerate growth.
            </p>
          </div>
        </div>

        {/* 
          Cards Container:
          - Mobile: Horizontal scroll (flex-row, overflow-x-auto, snap scrolling)
          - Desktop: Top-aligned, no gap, increasing heights
        */}
        <div className="flex flex-row md:flex-row items-stretch md:items-start gap-4 md:gap-0 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {STATS.map((stat, i) => {
            const iconSrc = stat.icon

            // Define dynamic border radius based on position
            let borderClasses = "rounded-lg" // Default for mobile (8px)

            if (i === 0) {
              // Left Card: Desktop bottom-left and top-left rounded (8px). Right edges square.
              borderClasses += " md:rounded-none md:rounded-l-lg"
            } else if (i === 1) {
              // Middle Card: Desktop top-left, top-right, bottom-right square. Bottom-left rounded (8px) because it hangs below Card 1.
              borderClasses += " md:rounded-none md:rounded-bl-lg"
            } else if (i === STATS.length - 1) {
              // Right Card: Desktop right edges rounded (8px). Top-left square. Bottom-left rounded (8px) because it hangs below Card 2.
              borderClasses +=
                " md:rounded-none md:rounded-r-lg md:rounded-bl-lg"
            }

            return (
              <div
                key={stat.label}
                className={`group relative flex flex-col justify-between p-8 shrink-0 snap-center text-white
                  [container-type:inline-size]
                  w-[85vw] sm:w-[60vw] md:w-full md:flex-1
                  min-h-[350px] ${stat.heightClass}
                  ${borderClasses}
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.01] hover:z-10 hover:shadow-lg hover:shadow-black/10
                `}
                style={{
                  backgroundColor: stat.bg,
                }}
              >
                {/* Icon top-left */}
                <div className="mb-12">
                  <img
                    src={iconSrc}
                    alt=""
                    aria-hidden="true"
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
                    {stat.value}
                  </p>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
                    <p
                      className="text-[18px] leading-[25px]"
                      style={{ color: "#F5F3F4" }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="md:max-w-[170px] md:text-left text-[14px] leading-[21px] opacity-90"
                      style={{ color: "#F5F3F4" }}
                    >
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactSection2
