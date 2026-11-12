import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * The theme's two button styles: cyan filled (".butn-bg main-colorbg3") that
 * inverts to outline on hover, and the navy outline (".butn-bord") that fills
 * navy on hover.
 */
export default function Button({ href, children, variant = "solid", className = "" }: Props) {
  const base =
    "inline-flex items-center gap-2.5 rounded-[5px] border px-9 py-[15px] text-[14px] font-medium transition-all duration-300";
  const styles =
    variant === "solid"
      ? "border-cyan bg-cyan text-white hover:bg-transparent hover:text-cyan"
      : "rounded-[5px] border-navy text-navy hover:bg-navy hover:text-white";
  const cls = `${base} ${styles} ${className}`;
  const inner = (
    <>
      {children}
      {variant === "solid" && <ArrowUpRight size={15} strokeWidth={1.75} />}
    </>
  );
  const external = /^(https?:|tel:|mailto:)/.test(href);
  return external || href.startsWith("#") ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
