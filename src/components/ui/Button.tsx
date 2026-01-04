import React from "react";
import { cn } from "../../lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "solid", size = "md", ...props }: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:opacity-60 disabled:pointer-events-none";
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  }[size];

  const variants = {
    solid:
      "bg-sesame-900 text-cream-100 shadow-soft hover:shadow-lift hover:-translate-y-[1px] active:translate-y-0",
    outline:
      "border border-sesame-900/20 bg-cream-50 text-sesame-900 hover:bg-cream-100 hover:border-sesame-900/30",
    ghost: "bg-transparent text-sesame-900 hover:bg-sesame-900/5",
  }[variant];

  return <button className={cn(base, sizes, variants, className)} {...props} />;
}
