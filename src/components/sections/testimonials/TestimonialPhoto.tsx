import { forwardRef } from "react";
import type { TestimonialId } from "../../../lib/constants";

interface TestimonialPhotoProps {
  id: TestimonialId;
  image: string;
  imageAlt: string;
  name: string;
  objectPosition: string;
  isActive: boolean;
  onActivate: () => void;
}

const TestimonialPhoto = forwardRef<HTMLButtonElement, TestimonialPhotoProps>(
  function TestimonialPhoto(
    { id, image, imageAlt, name, objectPosition, isActive, onActivate },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        data-testimonial-id={id}
        aria-pressed={isActive}
        aria-label={`${name}. ${isActive ? "Selected" : "Show testimonial"}`}
        onClick={onActivate}
        className={`relative h-[var(--testimonials-photos-height)] shrink-0 snap-center self-stretch overflow-hidden rounded-[var(--radius-md)] transition-[flex-grow,flex-basis,width] duration-[var(--testimonials-panel-transition)] ease-in-out ${
          isActive
            ? "w-full min-w-full lg:min-w-0 lg:w-auto lg:flex-[1_1_0]"
            : "w-[var(--testimonials-photo-inactive-width)] lg:flex-[0_0_var(--testimonials-photo-inactive-width)]"
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          style={{ objectPosition }}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-[var(--testimonials-panel-transition)] ease-in-out ${
            isActive ? "scale-[1.05]" : "scale-100"
          }`}
          loading="lazy"
          decoding="async"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-[var(--testimonials-panel-transition)] ease-in-out"
          style={{
            backgroundColor: "var(--testimonials-inactive-overlay)",
            opacity: isActive
              ? 0
              : "var(--testimonials-inactive-overlay-opacity)",
          }}
        />
      </button>
    );
  },
);

export default TestimonialPhoto;
