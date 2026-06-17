import { useState } from "react";

// Display serif — "Default Lingo" with web-safe fallbacks (DM Serif Display is
// loaded in index.html). Used only for the "title" style (the section heading),
// per the design's typography spec.
const FONT_SERIF = "'Default Lingo', 'DM Serif Display', Georgia, serif";

// All non-display text uses Outfit @400 (loaded in index.html). Set once on the
// <section> so every child inherits it; serif elements override inline.
const FONT_SANS = "'Outfit', 'Inter', sans-serif";

const FAQS = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, small businesses, and established companies across a wide range of industries — from early-stage founders to mature organizations looking to scale.",
  },
  {
    q: "How does the consulting process work?",
    a: "We begin with a discovery session to understand your challenges, followed by a customized strategy and ongoing support during implementation.",
  },
  {
    q: "Do you offer remote consulting services?",
    a: "Yes. We work with clients worldwide and run our entire engagement remotely through video calls, shared documents, and collaborative tools.",
  },
  {
    q: "How long does a consulting project usually take?",
    a: "It depends on scope, but most engagements run between four and twelve weeks, with options for ongoing advisory support afterward.",
  },
  {
    q: "Can you help improve internal operations?",
    a: "Absolutely. Operational efficiency is one of our core focus areas — we help streamline processes, reduce waste, and improve team performance.",
  },
  {
    q: "How do I get started?",
    a: "Simply book a free consultation. We'll discuss your goals, assess your needs, and outline how we can help you move forward.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    // We add a min-height so that opening an item doesn't cause the entire page to jump (fixed section height).
    <section
      className="py-10 sm:py-12 bg-white w-full min-h-[520px] flex flex-col justify-center"
      style={{ fontFamily: FONT_SANS }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
          <div className="max-w-2xl">
            <h3 className="text-[14px] leading-[21px] text-black mb-3">
              Frequently Asked Questions
            </h3>
            <h2
              className="text-[32px] md:text-[40px] leading-[1.05] text-black"
              style={{ fontFamily: FONT_SERIF }}
            >
              Answers to Common Questions
            </h2>
          </div>
          <div className="max-w-md text-black/70 text-[14px] leading-[21px] md:pb-1">
            Everything you need to know before working with our consulting team.
          </div>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col rounded-md overflow-hidden shadow-sm border border-gray-100">
          {FAQS.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={item.q}
                className={`transition-colors duration-300 ease-in-out ${
                  isOpen ? "bg-[#e23b3b]" : "bg-[#f8f9fa] hover:bg-gray-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between px-6 py-4 md:px-8 md:py-5 text-left text-[16px] md:text-[18px] leading-[25px] transition-colors duration-300 ${
                    isOpen ? "text-[#F5F3F4]" : "text-black"
                  }`}
                >
                  {item.q}
                </button>
                
                {/* Smooth expansion animation using CSS Grid */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 md:px-8 md:pb-6 text-[16px] leading-[23px] text-[#F5F3F4]">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
