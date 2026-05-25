import type { SVGProps } from "react";

const baseSvgProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function MagnifierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16" y2="16" />
    </svg>
  );
}

export function TreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <circle cx="12" cy="4" r="2" />
      <circle cx="5" cy="20" r="2" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="19" cy="20" r="2" />
      <path d="M12 6 V12 M5 18 V14 H19 V18 M12 14 V18" />
    </svg>
  );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function CloudStackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M21 12c0 5-9 9-9 9s-9-4-9-9V5l9-3 9 3z" />
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
}
