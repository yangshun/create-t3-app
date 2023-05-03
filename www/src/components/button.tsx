import type { ReactNode } from "react";

import { cn } from "~/utils/cn";

export function Button(props: {
  href?: string;
  openInNewTab?: boolean;
  rounded?: "full" | "md" | "none";
  variant?: "primary" | "secondary";
  specialHover?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const {
    href = "",
    rounded = "md",
    variant = "primary",
    openInNewTab = false,
    className = "",
    specialHover = false,
  } = props;

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={cn(
        "inline-flex cursor-pointer items-center px-3 py-2 text-sm font-semibold transition-colors hover:no-underline md:px-5 md:text-base lg:px-4 lg:py-3",
        rounded === "full"
          ? "rounded-full"
          : rounded === "md"
          ? "rounded-md"
          : "rounded-none",
        variant === "primary"
          ? "bg-t3-purple-100 text-slate-800 hover:bg-t3-purple-200"
          : "bg-white/10 text-white hover:bg-white/20",
        specialHover ? "duration-500 hover:shadow hover:shadow-[#300171]" : "",
        className,
      )}
    >
      {props.children}
    </a>
  );
}
