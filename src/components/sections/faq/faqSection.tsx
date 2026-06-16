import React, { useState } from "react";

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
    <section className="py-16 sm:py-24 bg-white w-full min-h-[700px] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-4">
              Frequently Asked Questions
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Answers to Common Questions
            </h2>
          </div>
          <div className="max-w-md text-gray-500 text-lg leading-relaxed md:pb-2">
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
                  className={`flex w-full items-center justify-between px-6 py-5 md:px-8 md:py-6 text-left text-base md:text-lg font-medium transition-colors duration-300 ${
                    isOpen ? "text-[#F5F3F4]" : "text-gray-800"
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
                    <div className="px-6 pb-6 md:px-8 md:pb-8 text-base md:text-lg text-[#F5F3F4] leading-relaxed">
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
