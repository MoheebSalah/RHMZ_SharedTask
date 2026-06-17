interface LogoProps {
  invert?: boolean;
}

export default function Logo({ invert }: LogoProps) {
  return (
    <a
      href="#home"
      className="inline-flex h-[var(--navbar-logo-height)] shrink-0 items-center gap-[var(--navbar-logo-gap)]"
      aria-label="BussinesFlex home"
    >
      <img
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        className={`h-[var(--navbar-logo-height)] w-auto shrink-0 ${invert ? 'brightness-0 invert' : ''}`}
        aria-hidden="true"
      />
      <span className={`whitespace-nowrap text-body-1 font-bold leading-[var(--text-body-1--line-height)] ${invert ? 'text-white' : 'text-text'}`}>
        BussinesFlex
      </span>
    </a>
  );
}
