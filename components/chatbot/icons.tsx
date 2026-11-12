import { Cloud, LayoutGrid, Network, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import type { CategoryIcon } from "./config";

/**
 * Inline SVG avatar so the launcher paints with the first HTML response.
 * Support agent with headset, in TrueLine navy / cyan / green.
 */
export function AgentAvatar({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label="TrueConnect" focusable="false">
      <defs>
        <linearGradient id="tl-cb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#03abd7" />
          <stop offset="100%" stopColor="#05508b" />
        </linearGradient>
        <clipPath id="tl-cb-clip">
          <circle cx="60" cy="60" r="60" />
        </clipPath>
      </defs>
      <g clipPath="url(#tl-cb-clip)">
        <circle cx="60" cy="60" r="60" fill="url(#tl-cb-bg)" />
        {/* shoulders — shirt with green collar accent */}
        <path d="M18 120c0-21 19-33 42-33s42 12 42 33z" fill="#F4F8FB" />
        <path d="M60 87c-7 0-13 1-19 4l19 29 19-29c-6-3-12-4-19-4z" fill="#05508b" />
        <path d="M49 89l11 14 11-14" stroke="#93bf40" strokeWidth="3" fill="none" strokeLinejoin="round" />
        {/* neck + head */}
        <rect x="52" y="60" width="16" height="18" rx="8" fill="#D9A27C" />
        <circle cx="60" cy="48" r="21" fill="#EBB892" />
        {/* hair */}
        <path d="M39 46c0-14 9-23 21-23s21 9 21 23c-4-6-10-10-21-11-9 1-16 5-21 11z" fill="#2B2420" />
        {/* eyes + smile */}
        <circle cx="52" cy="48" r="2.4" fill="#2A2722" />
        <circle cx="68" cy="48" r="2.4" fill="#2A2722" />
        <path d="M54 57a8 8 0 0 0 12 0" stroke="#2A2722" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* headset */}
        <path d="M35 50a25 25 0 0 1 50 0" stroke="#0b2f4f" strokeWidth="5" strokeLinecap="round" fill="none" />
        <rect x="29" y="46" width="12" height="20" rx="6" fill="#0b2f4f" />
        <rect x="79" y="46" width="12" height="20" rx="6" fill="#0b2f4f" />
        <path d="M79 62v6a6 6 0 0 1-6 6h-7" stroke="#0b2f4f" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="64" cy="74" r="4" fill="#93bf40" stroke="#0b2f4f" strokeWidth="2" />
      </g>
    </svg>
  );
}

export const CATEGORY_ICONS: Record<CategoryIcon, LucideIcon> = {
  network: Network,
  wrench: Wrench,
  shield: ShieldCheck,
  layout: LayoutGrid,
  cloud: Cloud,
};
