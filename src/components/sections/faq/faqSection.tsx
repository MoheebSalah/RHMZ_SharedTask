import { useLayoutEffect, useRef, useState } from "react"
import { FAQ_ITEMS, FEATURE_THREE } from "../../../lib/constants"
import SectionContainer from "../../layout/SectionContainer"

// All non-display text uses Outfit @400 (loaded in index.html). Set once on the
// <section> so every child inherits it; serif elements override inline.
const FONT_SANS = "'Outfit', 'Inter', sans-serif"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(1)

  // Reserve every answer panel the height of the tallest answer so the box
  // stays one fixed size no matter which question is open. Measured (not a
  // magic number) so it adapts to viewport width / font wrapping.
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const equalize = () => {
      const els = answerRefs.current.filter(Boolean) as HTMLDivElement[]
      if (!els.length) return
      // Reset to natural height first, then lock all to the tallest.
      els.forEach(el => (el.style.minHeight = "0px"))
      const max = Math.max(...els.map(el => el.scrollHeight))
      els.forEach(el => (el.style.minHeight = `${max}px`))
    }

    equalize()
    window.addEventListener("resize", equalize)
    // Re-measure once the web font has loaded (changes wrapping/height).
    document.fonts?.ready.then(equalize)
    return () => window.removeEventListener("resize", equalize)
  }, [])

  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: FONT_SANS }}
    >
      <SectionContainer>
        {/* Header Section */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-[560px]">
            <p className="text-section-eyebrow mb-3">{FEATURE_THREE.eyebrow}</p>
            <h2 className="text-section-title">
              Answers to Common <br></br>Questions
            </h2>
          </div>
          <p className="max-w-[340px] text-section-description text-subtext md:pb-1">
            {FEATURE_THREE.description}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col rounded-md overflow-hidden border border-gray-100">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = i === openIndex
            return (
              <div
                key={item.id}
                className={`transition-colors duration-300 ease-in-out ${
                  isOpen ? "bg-[#e23b3b]" : "bg-[#f8f9fa] hover:bg-gray-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between px-6 py-4 md:px-8 md:py-5 text-left text-[16px] md:text-[18px] leading-[25px] transition-colors duration-300 ${
                    isOpen ? "text-[#F5F3F4]/70" : "text-black"
                  }`}
                >
                  {item.question}
                </button>

                {/* Smooth expansion animation using CSS Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      ref={el => {
                        answerRefs.current[i] = el
                      }}
                      className="px-6 pb-5 md:px-8 md:pb-6 text-[16px] leading-[23px] text-[#F5F3F4]"
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}

export default FaqSection
