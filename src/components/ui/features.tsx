"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Feature({ icon, title, description, className }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-8 rounded-3xl bg-[var(--p-bg2)] dark:bg-[var(--p-bg2)] border border-[var(--p-border)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[var(--p-border2)]",
        className
      )}
    >
      <div className="mb-6 inline-flex p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-[var(--p-accent)] transition-colors group-hover:bg-[var(--p-accent)] group-hover:text-black">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-[var(--p-accent)] transition-colors">
        {title}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function Features({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {children}
    </div>
  );
}
