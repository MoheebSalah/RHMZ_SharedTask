export default function Logo() {
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
        className="h-[var(--navbar-logo-height)] w-auto shrink-0"
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-body-1 font-bold leading-[var(--text-body-1--line-height)] text-text">
        BussinesFlex
      </span>
    </a>
  );
}
