"use client";

import { motion } from "motion/react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export function Avatar({ src, alt, size = 160 }: AvatarProps) {
  return (
    <motion.div
      className="relative rounded-full p-2"
      whileHover="hover"
      initial="initial"
    >
      {/* Outer subtle ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-neutral-300 dark:border-neutral-700 pointer-events-none"
        variants={{
          initial: { scale: 1, opacity: 0 },
          hover: { scale: 1.05, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {/* Inner ring */}
      <motion.div
        className="absolute inset-1 rounded-full border border-neutral-400 dark:border-neutral-500 pointer-events-none"
        variants={{
          initial: { scale: 1, opacity: 0 },
          hover: { scale: 1.02, opacity: 1 },
        }}
        transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
      />
      <div 
        className="relative overflow-hidden rounded-full shadow-lg"
        style={{ width: size, height: size }}
      >
        {/* Placeholder if src is empty; useful before real image is loaded */}
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
            No Image
          </div>
        )}
      </div>
    </motion.div>
  );
}
