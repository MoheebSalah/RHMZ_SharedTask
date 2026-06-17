import { FiArrowUpRight, FiArrowRight } from "react-icons/fi"
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
    title: "Resources",
    links: ["Blog", "Insights", "FAQ", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
]

const SOCIALS: { label: string; path: string }[] = [
  {
    label: "Facebook",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z",
  },
  {
    label: "Instagram",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.88 5.88 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.12-1.38c.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.12A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
  {
    label: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
]

/** The wide outlined "footer button" — white by default, orange on hover. */
function StartJourneyButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex h-16 w-full items-center justify-center gap-[18px] rounded-lg border border-white px-8 py-5 text-white transition-all duration-500 ease-out hover:border-red-1 hover:text-red-1 hover:bg-white/5"
    >
      <span className="relative inline-flex size-6 items-center justify-center -translate-y-[2px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500 ease-out group-hover:translate-x-1">
          <rect width="20" height="20" fill="currentColor"/>
        </svg>
      </span>
      <span className="text-[18px] font-medium font-outfit">Start Your Journey</span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-12 sm:mt-16">
      {/* ── Part 1 — black CTA with oversized brand mark ───────────── */}
      <div className="relative overflow-visible bg-text">
        <Container className="relative pt-12 pb-8 sm:pt-16 sm:pb-12">
          <div className="relative z-10 max-w-xl">
            <span className="text-sm font-medium text-white">
              Ready to Grow?
            </span>
            <h2 className="mt-3 font-display text-[34px] leading-tight text-white sm:text-[46px]">
              Take the Next Step <br /> Toward Business Success
            </h2>
            <p className="mt-5 max-w-md font-outfit font-normal text-[20px] leading-[27px] tracking-normal text-white">
              Partner with experienced consultants who can help you solve
              challenges, seize opportunities, and achieve your goals faster.
            </p>
            <Button
              variant="light"
              className="mt-20 w-[245px] h-[56px] px-[20px] gap-[20px] !bg-[#FFFFFF] !text-[#BA181B] !font-normal !rounded-[2px] hover:!bg-[#FFFFFF]/90 border-transparent"
            >
              Schedule a Free Consultation
            </Button>
          </div>

          {/* Oversized logo mark that pokes up into the section above and down below */}
          <svg
            viewBox="0 0 34 40"
            className="pointer-events-none absolute -bottom-12 right-0 z-0 w-[280px] sm:-bottom-24 sm:right-4 sm:w-[480px] lg:-bottom-32 lg:right-12 lg:w-[580px]"
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
      <div className="relative overflow-hidden bg-text">
        <img
          src={footerImg2}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Part 2 — sharp image, headline + CTA */}
        <Container className="relative pt-0 pb-[144px] sm:pt-4 sm:pb-[176px] flex flex-col sm:flex-col gap-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="w-fit">
              <h3 className="font-display text-[30px] leading-tight text-white sm:text-[38px]">
                Helping Businesses Make <br className="hidden sm:block" /> Better Decisions Every Day
              </h3>
              <div className="mt-8 w-full">
                <StartJourneyButton />
              </div>
            </div>
            <div className="md:pl-8 sm:pt-2">
              <p className="max-w-sm text-[20px] font-outfit font-normal leading-[27px] text-white">
                Expert consulting services focused on growth, efficiency, and
                long-term success.
              </p>
              <div className="my-6 h-px w-full max-w-sm bg-white/30" />
              <p className="text-[20px] font-outfit font-normal text-white">
                Your partner in business growth.
              </p>
            </div>
          </div>
        </Container>

        {/* Part 3 — same image but blurred + greyed behind the link grid */}
        <div className="relative bg-obsidian/60 backdrop-blur-lg">
          <Container className="py-14">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {COLUMNS.map((col, i) => (
                <div key={`${col.title}-${i}`}>
                  <h4 className="text-sm font-semibold text-white">
                    {col.title}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-white/65 transition-colors hover:text-white"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-white/15 pt-8">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <Logo invert />
                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <div className="flex items-center gap-3">
                    {SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        aria-label={social.label}
                        className="inline-flex size-9 items-center justify-center rounded-md border border-white/40 text-white/80 transition-colors hover:border-white hover:text-white"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="size-4"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-white/55">
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
