"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LogoSlider({
  children,
  speed = 40,
  direction = "left",
  className,
}: {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex w-max shrink-0 items-center justify-around gap-12 px-6"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex w-max shrink-0 items-center justify-around gap-12 px-6"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  );
}
