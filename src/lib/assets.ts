import footerBackground from "../assets/footer/background.png";
import footerLogoMark from "../assets/footer/logo-mark.svg";
import heroImage from "../assets/hero/hero-image.png";
import navbarLogo from "../assets/navbar/Union.svg";

export const ASSETS = {
  hero: {
    image: heroImage,
  },
  navbar: {
    logo: navbarLogo,
  },
  footer: {
    background: footerBackground,
    logoMark: footerLogoMark,
  },
} as const;
