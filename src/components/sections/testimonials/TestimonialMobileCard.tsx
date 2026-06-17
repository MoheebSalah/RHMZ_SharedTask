import { forwardRef } from "react";
import type { TestimonialId } from "../../../lib/constants";

interface TestimonialMobileCardProps {
  id: TestimonialId;
  image: string;
  imageAlt: string;
  name: string;
  company: string;
  quote: string;
  objectPosition: string;
  onActivate: () => void;
}

const TestimonialMobileCard = forwardRef<
  HTMLDivElement,
  TestimonialMobileCardProps
>(function TestimonialMobileCard(
  {
    id,
    image,
    imageAlt,
    name,
    company,
    quote,
    objectPosition,
    onActivate,
  },
  ref,
) {
  return (
    <div
      ref={ref}
      data-testimonial-id={id}
      role="group"
      aria-roledescription="slide"
      aria-label={`${name}, ${company}`}
      className="relative h-[var(--testimonials-mobile-card-height)] w-[var(--testimonials-mobile-card-width)] shrink-0 snap-center overflow-hidden rounded-[var(--testimonials-mobile-card-radius)]"
    >
      <img
        src={image}
        alt={imageAlt}
        style={{ objectPosition }}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <button
        type="button"
        onClick={onActivate}
        className="absolute inset-0 z-[1] cursor-pointer"
        aria-label={`View testimonial from ${name}`}
      />

      <div className="absolute inset-x-[var(--testimonials-mobile-overlay-inset)] bottom-[var(--testimonials-mobile-overlay-inset)] z-[2] flex flex-col gap-3 rounded-[var(--radius-md)] border border-white/20 bg-white/15 p-4 backdrop-blur-md">
        <div className="flex flex-col gap-0.5">
          <p className="font-outfit text-base font-normal text-white">{name}</p>
          <p className="font-outfit text-sm text-white/75">{company}</p>
        </div>

        <img
          src="/testimonials/quote-mark.png"
          alt=""
          aria-hidden="true"
          width={40}
          height={32}
          className="h-6 w-8 object-contain opacity-80 brightness-200"
        />

        <blockquote className="font-outfit text-sm leading-relaxed text-white/95">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
});

export default TestimonialMobileCard;
