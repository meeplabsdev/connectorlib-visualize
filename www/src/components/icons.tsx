import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 28,
  height,
  ...props
}) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || height}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
    <path d="M12 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
    <path d="M12 5v-2" />
  </svg>
);

// https://lucide.dev

export const MoonIcon = ({
  size = 22,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    stroke="currentColor"
    role="presentation"
    focusable="false"
    aria-hidden="true"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path
      d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    />
  </svg>
);

export const SunIcon = ({
  size = 22,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    stroke="currentColor"
    role="presentation"
    focusable="false"
    aria-hidden="true"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const LogoutIcon = ({
  size = 22,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    stroke="currentColor"
    role="presentation"
    focusable="false"
    aria-hidden="true"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path d="m7 15 5 5 5-5" />
    <path d="m7 9 5-5 5 5" />
  </svg>
);
