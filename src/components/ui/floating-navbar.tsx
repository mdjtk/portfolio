"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, BookOpen } from "lucide-react";

export function FloatingNavbar({
  className,
}: {
  className?: string;
}) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeSegment, setActiveSegment] = useState("home");

  useMotionValueEvent(scrollY, "change", (current) => {
    // Only hide if we've scrolled a bit
    if (typeof current === "number") {
      let direction = current - (scrollY.getPrevious() ?? 0);

      if (current < 100) {
        setVisible(true);
      } else {
        if (direction > 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
    }
  });

  const navItems = [
    { label: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { label: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { label: "Projects", href: "#projects", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Skills", href: "#skills", icon: <Code className="w-5 h-5" /> },
    { label: "Blog", href: "#blog", icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-full md:max-w-fit fixed bottom-0 md:bottom-8 inset-x-0 mx-auto border-t md:border border-neutral-200 dark:border-white/10 md:rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-4 md:py-3 items-center justify-center space-x-8 md:space-x-12",
          className
        )}
      >
        {navItems.map((item, idx) => (
          <a
            key={`link=${idx}`}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.href.replace('#', ''));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setActiveSegment(item.href.replace('#', ''));
              }
            }}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors group",
              activeSegment === item.href.replace('#', '') ? "text-black dark:text-white" : ""
            )}
          >
            <span className="block md:hidden">{item.icon}</span>
            <span className="hidden md:block text-xs font-bold uppercase tracking-widest">{item.label}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
