"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  wide?: boolean;
  children?: React.ReactNode;
  className?: string;
  expanded?: boolean;
  onClick?: () => void;
}

export function ExpandableBentoGrid({ 
  children,
  className
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[25rem]", className)}>
      {children}
    </div>
  );
}

export function BentoCard({ 
  id, 
  title, 
  description, 
  tags, 
  wide, 
  children,
  className,
  expanded,
  onClick
}: BentoCardProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 group cursor-pointer overflow-hidden",
        wide ? "md:col-span-2" : "md:col-span-1",
        expanded ? "md:col-span-3 h-auto" : "h-full",
        className
      )}
      transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-neutral-100/50 via-transparent to-neutral-200/20 dark:from-neutral-800/20" />
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="text-4xl font-black text-neutral-100 dark:text-neutral-800/50 group-hover:text-primary transition-colors duration-500">{id}</span>
          <div className="flex gap-2">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-3xl font-black mb-3 group-hover:translate-x-1 transition-transform duration-300 tracking-tight">{title}</h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          {expanded ? (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
               {children}
             </motion.div>
          ) : (
             <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
               <span>VIEW PROJECT</span>
               <span className="text-lg">→</span>
             </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
