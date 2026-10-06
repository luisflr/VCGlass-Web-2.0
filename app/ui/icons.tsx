import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export const ArrowRight = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const Menu = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    {...p}
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Whatsapp = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a8 8 0 0 0-6.93 12L4 20l4.16-1.05A8 8 0 0 0 12 20a8 8 0 0 0 5.6-13.68zM12 18.5a6.5 6.5 0 0 1-3.31-.91l-.24-.14-2.46.62.66-2.4-.16-.25A6.5 6.5 0 1 1 12 18.5zm3.6-4.86c-.2-.1-1.17-.58-1.35-.65-.18-.07-.31-.1-.45.1s-.51.65-.63.79c-.12.13-.23.15-.43.05-.2-.1-.83-.31-1.59-.98a6 6 0 0 1-1.1-1.37c-.12-.2-.01-.31.09-.4.1-.1.2-.23.3-.35.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.7.69-.7 1.67 0 .98.71 1.93.81 2.06.1.13 1.4 2.13 3.4 2.99.47.2.85.32 1.14.41.48.15.92.13 1.26.08.39-.06 1.17-.48 1.34-.94.16-.46.16-.86.12-.94-.05-.08-.18-.13-.38-.23z" />
  </svg>
);

export const Mail = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const Pin = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);

export const Clock = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx={12} cy={12} r={10} />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Check = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...p}
  >
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.39 0 4.56.93 6.18 2.45" />
  </svg>
);

export const Shield = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...p}
  >
    <path d="M12 2L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-5z" />
  </svg>
);

export const Grid = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...p}
  >
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h18M9 3v18" />
  </svg>
);

export const Verified = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...p}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

export const Target = (p: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    {...p}
  >
    <circle cx={12} cy={12} r={10} />
    <circle cx={12} cy={12} r={3} />
  </svg>
);

export const FEAT_ICONS = {
  check: Check,
  shield: Shield,
  grid: Grid,
  verified: Verified,
  target: Target,
} as const;

export const BrandMark = (p: Props) => (
  <svg viewBox="0 0 40 40" fill="none" {...p}>
    <defs>
      <linearGradient id="gp-bg" x1="0" y1="0" x2="40" y2="40">
        <stop offset="0%" stopColor="#2dd4c5" />
        <stop offset="100%" stopColor="#0fa89a" />
      </linearGradient>
    </defs>
    <rect width={40} height={40} rx={9} fill="url(#gp-bg)" />
    <path
      d="M10 11 L20 8 L30 11 L30 24 Q20 33 10 24 Z"
      stroke="#0a0e0f"
      strokeWidth={1.8}
      fill="none"
      strokeLinejoin="round"
    />
    <path
      d="M14 14 L20 12 L26 14 L26 23 Q20 28 14 23 Z"
      stroke="#0a0e0f"
      strokeWidth={1.2}
      fill="none"
      strokeLinejoin="round"
      opacity={0.7}
    />
    <line
      x1={20}
      y1={9}
      x2={20}
      y2={30}
      stroke="#0a0e0f"
      strokeWidth={1}
      opacity={0.6}
    />
  </svg>
);
