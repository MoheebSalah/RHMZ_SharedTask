import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--spacing-container-x-sm)] sm:px-[var(--spacing-container-x)] ${className}`}
    >
      {children}
    </div>
  )
}
