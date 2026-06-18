import { FiArrowUpRight } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import Container from "../Container"
import Logo from "../Logo"
import Button from "../../ui/Button"
import footerImg2 from "../../../assets/images/footer.png"

const COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "Our Services", "Case Studies", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Insights", "FAQ", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
]

const SOCIALS = [
  {
    label: "Facebook",
    type: "facebook",
  },
  {
    label: "Instagram",
    type: "instagram",
  },
  {
    label: "X",
    type: "x",
  },
]

/** The wide outlined "footer button" — white by default, orange on hover. */
function StartJourneyButton() {
  return (
    <a
      href="#contact"
      className="footer-journey-button group inline-flex h-16 w-full items-center justify-center gap-[18px] rounded-lg border border-white px-8 py-5 !text-white hover:border-red-1 hover:bg-white/5 hover:!text-red-1 hover:opacity-80"
    >
      <span className="footer-journey-arrow-wrap relative inline-flex size-5 items-center justify-center">
        <FiArrowUpRight
          aria-hidden="true"
          className="footer-journey-arrow size-5 stroke-[1.8]"
        />
      </span>
      <span className="footer-journey-button-text font-outfit text-[18px] font-medium">
        Start Your Journey
      </span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="site-footer relative mt-20 sm:mt-32">
      {/* ── Part 1 — black CTA with oversized brand mark ───────────── */}
      <div className="footer-top-cta relative overflow-hidden bg-text sm:overflow-visible">
        <Container className="relative pt-8 pb-8 sm:pt-10 sm:pb-12">
          <div className="relative z-10 max-w-full sm:max-w-xl">
            <span className="text-sm font-medium text-white">
              Ready to Grow?
            </span>
            <h2 className="mt-3 font-display text-[34px] leading-tight text-white sm:text-[42px] lg:text-[46px]">
              Take the Next Step <br /> Toward Business Success
            </h2>
            <p className="mt-5 max-w-[560px] font-outfit text-[18px] font-normal leading-[26px] tracking-normal text-white sm:text-[20px] sm:leading-[27px]">
              <span className="md:inline-block md:whitespace-nowrap">
                Partner with experienced consultants who can help you
              </span>
              <br />
              <span className="md:inline-block md:whitespace-nowrap">
                solve challenges, seize opportunities, and achieve your
              </span>
              <br />
              goals faster.
            </p>
            <Button
              variant="light"
              className="mt-12 h-[56px] w-full max-w-[267px] px-[20px] gap-[20px] !bg-[#FFFFFF] !text-[#BA181B] !font-normal !rounded-[2px] hover:!bg-[#FFFFFF]/90 border-transparent sm:mt-20"
            >
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Oversized logo mark that pokes up into the section above and down below */}
          <svg
            viewBox="0 0 34 40"
            className="footer-brand-shape pointer-events-none absolute -bottom-12 right-[-80px] z-0 w-[260px] opacity-75 sm:-bottom-24 sm:right-4 sm:w-[480px] sm:opacity-100 lg:-bottom-32 lg:right-12 lg:w-[580px]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M33.7004 17.1472C34.2819 18.1531 33.556 19.4112 32.3941 19.4112H13.7932C12.6313 19.4112 11.9054 20.6693 12.4869 21.6752L21.7717 37.7361C22.3532 38.742 21.6273 40.0001 20.4654 40.0001H1.51109C0.349181 40.0001 -0.376707 38.7419 0.204857 37.736L10.9825 19.0947C10.9852 19.09 10.9919 19.0901 10.9945 19.0948C10.9971 19.0995 11.0038 19.0996 11.0065 19.095L21.611 0.753609C22.192 -0.251242 23.6426 -0.251194 24.2235 0.753697L33.7004 17.1472Z"
              fill="#E5383B"
            />
          </svg>
        </Container>
      </div>

      {/* ── Parts 2 & 3 share one background image ─────────────────── */}
      <div className="footer-image-section relative overflow-hidden bg-text">
        <img
          src={footerImg2}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Part 2 — sharp image, headline + CTA */}
        <Container className="relative flex flex-col gap-4 pt-10 pb-20 sm:pt-4 sm:pb-[176px]">
          <div className="footer-cta-row grid gap-10 md:grid-cols-2 md:items-start">
            <div className="footer-journey-block w-fit max-w-full">
              <h3 className="font-display text-[30px] leading-tight !text-white sm:text-[38px]">
                Helping Businesses Make <br className="hidden sm:block" /> Better Decisions Every Day
              </h3>
              <div className="mt-8 w-full">
                <StartJourneyButton />
              </div>
            </div>
            <div className="sm:pt-2 md:pl-8">
              <p className="max-w-[560px] text-[18px] font-outfit font-normal leading-[26px] !text-white sm:text-[20px] sm:leading-[27px]">
                <span className="md:inline-block md:whitespace-nowrap">
                  Expert consulting services focused on growth,
                </span>
                <br />
                efficiency, and long-term success.
              </p>
              <div className="my-6 h-px w-full max-w-sm bg-white/30" />
              <p className="text-[20px] font-outfit font-normal text-white">
                Your partner in business growth.
              </p>
            </div>
          </div>
        </Container>

        {/* Part 3 — same image but blurred + greyed behind the link grid */}
        <div className="footer-links-panel relative bg-obsidian/60 backdrop-blur-lg">
          <Container className="py-12 sm:py-14">
            <div className="footer-links-grid grid grid-cols-1 gap-10 sm:grid-cols-3 sm:justify-items-center">
              {COLUMNS.map((col, i) => (
                <div key={`${col.title}-${i}`} className="footer-link-column w-full sm:w-fit">
                  <h4 className="text-sm font-semibold text-[#D3D3D3]">
                    {col.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-white transition-colors hover:text-white/80"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-white/15 pt-8 sm:mt-14">
              <div className="footer-bottom-row flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                <Logo invert variant="footer" />
                <div className="footer-social-block flex w-full max-w-[205px] flex-col items-start sm:items-end">
                  <div className="footer-social-row flex w-full items-center justify-start gap-[18px] text-[#D3D3D3] sm:justify-end">
                    {SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="inline-flex size-8 items-center justify-center text-[#D3D3D3] transition-colors duration-300 ease-out hover:text-[#D3D3D3]"
                      >
                        {social.type === "facebook" ? (
                          <svg
                            viewBox="0 0 32 32"
                            className="size-[28px]"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0H32V32H0V0ZM3.5 3.5V28.5H13.1V17.15H9.75V12.95H13.1V10.2C13.1 6.65 15.3 4.65 18.55 4.65C20.1 4.65 21.45 4.78 21.85 4.85V8.7H19.6C17.85 8.7 17.55 9.5 17.55 10.72V12.95H21.65L20.95 17.15H17.55V28.5H28.5V3.5H3.5Z"
                            />
                            <path
                              fill="currentColor"
                              d="M20.55 4.65V8.65H18.55C16.75 8.65 16 9.95 16 11.5V13.45H20.35L19.75 17.45H16V26.8H12V17.45H8.8V13.45H12V10.9C12 7.05 14.35 4.65 18.05 4.65H20.55Z"
                            />
                          </svg>
                        ) : social.type === "instagram" ? (
                          <svg
                            viewBox="0 0 32 32"
                            className="size-[28px]"
                            aria-hidden="true"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0H32V32H0V0ZM3.5 3.5V28.5H28.5V3.5H3.5Z"
                            />
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.9 9.45C19.7 9.45 22.75 12.5 22.75 16.3C22.75 20.1 19.7 23.15 15.9 23.15C12.1 23.15 9.05 20.1 9.05 16.3C9.05 12.5 12.1 9.45 15.9 9.45ZM15.9 13.7C17.35 13.7 18.5 14.85 18.5 16.3C18.5 17.75 17.35 18.9 15.9 18.9C14.45 18.9 13.3 17.75 13.3 16.3C13.3 14.85 14.45 13.7 15.9 13.7Z"
                            />
                            <circle cx="22.9" cy="9.25" r="2.25" fill="currentColor" />
                          </svg>
                        ) : (
                          <FaXTwitter aria-hidden="true" className="size-[28px]" />
                        )}
                      </a>
                    ))}
                  </div>
                  <div className="mt-[14px] h-px w-full bg-[#D3D3D3]" />
                  <p className="mt-[13px] w-full text-left font-outfit text-[18px] font-normal leading-[25px] !text-[#D3D3D3] sm:text-right">
                    @2026 all rights reserved
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  )
}
