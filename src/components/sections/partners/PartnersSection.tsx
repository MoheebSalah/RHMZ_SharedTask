import Container from "../../layout/Container";
import { PARTNERS_HEADING } from "../../../lib/constants";
import PartnersMarquee from "./PartnersMarquee";

export default function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="w-full overflow-x-clip bg-white"
    >
      <Container className="overflow-x-clip">
        <div
          className="mx-auto flex w-full min-w-0 max-w-[var(--partners-section-max-width)] flex-col items-start gap-[var(--partners-section-gap-mobile)] overflow-hidden py-[var(--partners-section-padding)] sm:flex-row sm:items-center sm:gap-[var(--partners-section-gap)]"
          style={{ minHeight: "var(--partners-section-height)" }}
        >
          <h2
            id="partners-heading"
            className="shrink-0 text-body-2 leading-[var(--text-body-2--line-height)] text-subtext"
          >
            {PARTNERS_HEADING.line1}
            <br />
            {PARTNERS_HEADING.line2}
          </h2>

          <PartnersMarquee />
        </div>
      </Container>
    </section>
  );
}
