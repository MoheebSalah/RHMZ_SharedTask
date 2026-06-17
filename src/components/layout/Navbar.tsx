import { useState } from "react";
import { NAV_LINKS } from "../../lib/constants";
import Button from "../ui/Button";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full max-w-[100vw] overflow-x-clip bg-white-2">
      <div className=" relative mx-auto flex h-[var(--navbar-height)] w-full min-w-0 max-w-[var(--navbar-max-width)] items-center justify-between gap-2 px-[var(--spacing-container-x-sm)] py-[var(--navbar-padding-y)] md:gap-4 md:px-[var(--spacing-container-x)] xl:px-[var(--navbar-padding-x)]">
        <div className="min-w-0 flex-1">
          <Logo />
        </div>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:h-[var(--navbar-nav-height)] lg:items-center"
        >
          <ul className="flex items-center gap-[var(--navbar-nav-gap)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-1 leading-[var(--text-body-1--line-height)] text-text transition-colors hover:text-obsidian"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button
            variant="solid"
            size="sm"
            className="h-[var(--navbar-btn-height)] px-[var(--navbar-btn-padding-x)] py-[var(--navbar-btn-padding-y)]"
          >
            Get Started
          </Button>
        </div>

        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center text-text"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-text transition-transform ${isMenuOpen ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 bg-text transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-text transition-transform ${isMenuOpen ? "top-2 -rotate-45" : "top-4"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="border-t border-gray bg-white-2 px-[var(--spacing-container-x-sm)] py-[var(--spacing-stack-lg)] md:px-[var(--spacing-container-x)] lg:hidden"
        >
          <ul className="flex flex-col gap-[var(--spacing-stack-lg)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-body-2 outfit-bold text-text"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
