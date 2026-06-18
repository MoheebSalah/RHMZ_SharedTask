import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "outline" | "solid" | "soft" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  outline:
    "border border-obsidian bg-transparent text-text hover:border-red-1 hover:bg-red-1 hover:text-white",
  solid:
    "border border-obsidian bg-obsidian text-white hover:border-red-1 hover:bg-red-1 hover:text-white",
  soft: "border border-transparent bg-white-2 text-red-1 hover:border-red-1 hover:bg-red-1 hover:text-white",
  light: "border border-white bg-white text-text hover:border-red-1 hover:bg-red-1 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-btn-3",
  md: "px-6 py-2.5 text-btn-2",
  lg: "px-8 py-3 text-btn-1",
};

export default function Button({
  variant = "outline",
  size = "md",
  icon,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-[var(--spacing-stack-sm)] whitespace-nowrap rounded-[var(--radius-sm)] font-normal transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
