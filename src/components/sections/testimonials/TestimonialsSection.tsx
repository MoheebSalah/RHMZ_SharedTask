import { useCallback, useEffect, useRef, useState } from "react";
import {
  TESTIMONIAL_QUOTE_MARK,
  TESTIMONIALS,
  TESTIMONIALS_SECTION,
  type TestimonialId,
} from "../../../lib/constants";
import SectionHeader from "../../shared/SectionHeader";
import SectionContainer from "../../layout/SectionContainer";
import TestimonialMobileCard from "./TestimonialMobileCard";
import TestimonialPhoto from "./TestimonialPhoto";

const MOBILE_MEDIA_QUERY = "(max-width: 1023px)";

function getCenteredTestimonialId(
  scrollEl: HTMLDivElement,
  slideEls: Partial<Record<TestimonialId, HTMLElement | null>>,
): TestimonialId | null {
  const scrollCenter =
    scrollEl.getBoundingClientRect().left + scrollEl.clientWidth / 2;

  let closestId: TestimonialId | null = null;
  let closestDistance = Infinity;

  for (const person of TESTIMONIALS) {
    const slideEl = slideEls[person.id];
    if (!slideEl) continue;

    const rect = slideEl.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const distance = Math.abs(slideCenter - scrollCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestId = person.id;
    }
  }

  return closestId;
}

export default function TestimonialsSection() {
  const [activeId, setActiveId] = useState<TestimonialId>("left");
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Partial<Record<TestimonialId, HTMLElement | null>>>(
    {},
  );

  const activeTestimonial =
    TESTIMONIALS.find((item) => item.id === activeId) ?? TESTIMONIALS[0];

  const syncActiveFromScroll = useCallback(() => {
    const isMobile = window.matchMedia(MOBILE_MEDIA_QUERY).matches;
    const scrollEl = isMobile
      ? mobileScrollRef.current
      : desktopScrollRef.current;

    if (!scrollEl || !isMobile) return;

    const centeredId = getCenteredTestimonialId(scrollEl, slideRefs.current);
    if (centeredId) {
      setActiveId(centeredId);
    }
  }, []);

  useEffect(() => {
    const scrollEl = mobileScrollRef.current;
    if (!scrollEl) return;

    let scrollTimer: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncActiveFromScroll, 80);
    };

    scrollEl.addEventListener("scroll", handleScroll, { passive: true });
    scrollEl.addEventListener("scrollend", syncActiveFromScroll);

    syncActiveFromScroll();

    return () => {
      window.clearTimeout(scrollTimer);
      scrollEl.removeEventListener("scroll", handleScroll);
      scrollEl.removeEventListener("scrollend", syncActiveFromScroll);
    };
  }, [syncActiveFromScroll]);

  const scrollToSlide = (id: TestimonialId) => {
    const slideEl = slideRefs.current[id];
    slideEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveId(id);
  };

  return (
    <section aria-label="Client testimonials" className="bg-white py-0 lg:py-0">
      <SectionContainer className="flex flex-col gap-[var(--testimonials-outer-gap)]">
        <SectionHeader
          eyebrow={TESTIMONIALS_SECTION.eyebrow}
          title={TESTIMONIALS_SECTION.title}
          description={TESTIMONIALS_SECTION.description}
        />

        {/* Mobile: horizontal carousel with overlay text on image */}
        <div className="flex flex-col gap-4 lg:hidden">
          <div
            ref={mobileScrollRef}
            className="-mx-[var(--section-padding-x-sm)] flex snap-x snap-mandatory flex-row gap-[var(--testimonials-mobile-carousel-gap)] overflow-x-auto overscroll-x-contain scroll-pl-[var(--section-padding-x-sm)] scroll-pr-[var(--section-padding-x-sm)] px-[var(--section-padding-x-sm)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((person) => (
              <TestimonialMobileCard
                key={person.id}
                ref={(el) => {
                  slideRefs.current[person.id] = el;
                }}
                id={person.id}
                image={person.image}
                imageAlt={person.imageAlt}
                name={person.name}
                company={person.company}
                quote={person.quote}
                objectPosition={person.objectPosition}
                onActivate={() => scrollToSlide(person.id)}
              />
            ))}
          </div>

          <div
            className="flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {TESTIMONIALS.map((person) => (
              <button
                key={person.id}
                type="button"
                role="tab"
                aria-selected={activeId === person.id}
                aria-label={`Go to ${person.name}`}
                onClick={() => scrollToSlide(person.id)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeId === person.id ? "w-6 bg-text" : "w-2 bg-text/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: photo row + quote card */}
        <div className="hidden w-full flex-col gap-[var(--testimonials-section-gap)] lg:flex">
          <div
            ref={desktopScrollRef}
            className="flex w-full flex-row items-stretch gap-[var(--testimonials-photos-gap)] lg:h-[var(--testimonials-photos-height)] lg:min-h-[var(--testimonials-photos-height)]"
          >
            {TESTIMONIALS.map((person) => (
              <TestimonialPhoto
                key={person.id}
                id={person.id}
                image={person.image}
                imageAlt={person.imageAlt}
                name={person.name}
                objectPosition={person.objectPosition}
                isActive={activeId === person.id}
                onActivate={() => setActiveId(person.id)}
              />
            ))}
          </div>

          <div className="whitespace-pre-line relative isolate flex w-full min-h-[var(--testimonials-frame-height)] flex-col justify-between gap-2 overflow-hidden rounded-[var(--radius-md)] bg-white-2 p-[var(--testimonials-frame-padding)]">
            <img
              src={TESTIMONIAL_QUOTE_MARK}
              alt=""
              aria-hidden="true"
              width={271}
              height={214}
              className="pointer-events-none absolute -left-3 -top-2 z-[1] h-[var(--testimonials-quote-height)] w-[var(--testimonials-quote-width)] object-contain opacity-90"
            />
            <img
              src={TESTIMONIAL_QUOTE_MARK}
              alt=""
              aria-hidden="true"
              width={271}
              height={214}
              className="pointer-events-none absolute -bottom-1 -right-1 z-[2] h-[var(--testimonials-quote-height)] w-[var(--testimonials-quote-width)] rotate-180 object-contain opacity-90"
            />

            <div className="relative z-0 mx-auto flex w-full max-w-[var(--testimonials-content-width)] flex-col items-start gap-[214px] ml-[250px]">
              <blockquote className="w-full text-testimonial-quote text-text transition-opacity duration-300">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </blockquote>

              <div className="flex w-full max-w-[var(--testimonials-attribution-width)] flex-col items-start gap-[var(--testimonials-attribution-gap)]">
                <p className="font-outfit font-normal .text-body-2 text-title">
                  {activeTestimonial.name}
                </p>
                <p className="font-outfit font-normal  .text-body-2 text-quote-subtext">
                  {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
