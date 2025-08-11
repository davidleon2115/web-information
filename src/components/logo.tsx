import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8c0 7.3-8 11.8-8 11.8z" />
      <circle cx="12" cy="10" r="3" />
      <line x1="12" y1="1" x2="12" y2="4" />
      <line x1="12" y1="16" x2="12" y2="23" />
      <line x1="1" y1="10" x2="4" y2="10" />
      <line x1="20" y1="10" x2="23" y2="10" />
    </svg>
  );
}
