import Link from "next/link";
import { site } from "@/lib/site";

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function Button({
  children = site.cta,
  href = site.demoHref,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#bf8677]/40 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-[#2f4a3c] text-white shadow-[0_18px_45px_rgba(47,74,60,0.22)] hover:-translate-y-0.5 hover:bg-[#263f33]",
    secondary:
      "border border-[#2f4a3c]/15 bg-white/70 text-[#2f4a3c] hover:-translate-y-0.5 hover:bg-white",
    light:
      "bg-white text-[#2f4a3c] shadow-[0_18px_45px_rgba(9,22,16,0.18)] hover:-translate-y-0.5 hover:bg-[#fffaf7]",
  };

  return (
    <Link className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
