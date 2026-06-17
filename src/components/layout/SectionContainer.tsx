import type { ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  className?: string
}

/** Shared max-width + horizontal padding for stacked landing sections */
export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--section-max-width)] px-[var(--section-padding-x-sm)] md:px-[var(--section-padding-x)] ${className}`}
    >
      {children}
    </div>
  )
}
