"use client";

import { ReactNode } from "react";

interface SocialFlipButtonProps {
  icon: ReactNode;
  href: string;
  name: string;
}

export function SocialFlipButton({ icon, href, name }: SocialFlipButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex h-12 w-32 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-white px-4 font-medium text-neutral-600 transition-all hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-700"
    >
      <span className="sr-only">{name}</span>
      <div
        className="relative flex flex-col transition-transform duration-500 group-hover:-translate-y-[24px]"
      >
        <div className="flex h-[24px] items-center justify-center gap-2">
           {icon}
           <span>{name}</span>
        </div>
        <div className="flex h-[24px] items-center justify-center gap-2 text-primary">
           {icon}
           <span>{name}</span>
        </div>
      </div>
    </a>
  );
}
