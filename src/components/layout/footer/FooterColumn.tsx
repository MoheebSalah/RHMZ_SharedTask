import type { FooterColumnData } from "../../../lib/constants";

interface FooterColumnProps {
  column: FooterColumnData;
}

export default function FooterColumn({ column }: FooterColumnProps) {
  return (
    <nav aria-label={column.title}>
      <h3 className="font-outfit text-header-4 font-normal text-gray">
        {column.title}
      </h3>
      <ul className="mt-[var(--footer-column-gap)] flex flex-col gap-[var(--footer-column-gap)]">
        {column.links.map((link) => (
          <li key={`${column.title}-${link.label}-${link.href}`}>
            <a
              href={link.href}
              className="font-outfit text-header-4 font-normal text-white transition-opacity hover:opacity-80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
