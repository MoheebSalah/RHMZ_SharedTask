interface LogoProps {
  invert?: boolean;
  variant?: "default" | "footer";
}

export default function Logo({ invert, variant = "default" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <a
      href="#home"
      className={`inline-flex shrink-0 items-center ${
        isFooter
          ? "h-[44px] gap-3 sm:h-[58.8px] sm:gap-[18.2px]"
          : "h-[var(--navbar-logo-height)] gap-[var(--navbar-logo-gap)]"
      }`}
      aria-label="BussinesFlex home"
    >
      <img
        src="/logo.png"
        alt=""
        width={isFooter ? 47.46641159057617 : 40}
        height={isFooter ? 56.001365661621094 : 40}
        className={`shrink-0 ${isFooter ? "h-[42px] w-[35.6px] rounded-[2.11px] sm:h-[56.001px] sm:w-[47.466px]" : "h-[var(--navbar-logo-height)] w-auto"} ${invert ? 'brightness-0 invert' : ''}`}
        aria-hidden="true"
      />
      <span
        className={`whitespace-nowrap ${
          isFooter
            ? "font-outfit text-[32px] font-normal leading-[44px] sm:text-[44.8px] sm:leading-[58.8px]"
            : "text-body-1 font-bold leading-[var(--text-body-1--line-height)]"
        } ${invert ? 'text-white' : 'text-text'}`}
      >
        BussinesFlex
      </span>
    </a>
  );
}
