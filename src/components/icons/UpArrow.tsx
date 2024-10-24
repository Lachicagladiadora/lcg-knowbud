import React from "react";
import type { SVGProps } from "react";

export function UpArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m14.5 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0"
      ></path>
      <path
        fill="currentColor"
        d="m11.043 10.457l1.414-1.414L8 4.586L3.543 9.043l1.414 1.414L8 7.414z"
      ></path>
    </svg>
  );
}
