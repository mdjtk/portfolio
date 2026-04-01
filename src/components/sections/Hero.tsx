"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FlipFadeText } from "@/components/ui/flip-fade-text";

import AnimatedButton from "@/components/ui/animated-button";

const JOB_TITLES = [
  "Full Stack Developer",
  "Next.js Expert",
  "AI Integration",
  "UI/UX Designer"
];

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100vh] sm:min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden bg-white dark:bg-[#030303]"
    >
      <div className="hero-grid-bg opacity-30 dark:opacity-20" />

      <motion.div
        style={{ y, scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-[var(--p-accent)]/5 rounded-full blur-[100px] sm:blur-[120px] -z-10"
      />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 300]) }}
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--p-accent2)]/5 rounded-full blur-[80px] -z-10 hidden sm:block"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ opacity }}
        className="max-w-4xl relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[var(--p-accent)] mb-4 sm:mb-6 block"
        >
          Based in Kerala, India
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] sm:tracking-[-0.08em] mb-6 sm:mb-8 leading-[0.85] sm:leading-[0.8] font-display uppercase"
        >
          MIDLAJ <br className="hidden sm:block" />
          <span className="text-neutral-800 dark:text-neutral-800">THONIKKADAVAN</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-6 sm:gap-8"
        >
          <FlipFadeText
            words={JOB_TITLES}
            className="min-h-[32px] sm:min-h-[40px] md:min-h-[60px]"
            textClassName="text-base sm:text-xl md:text-3xl font-mono text-neutral-500 dark:text-neutral-400"
          />

          <p className="text-neutral-500 max-w-sm sm:max-w-lg text-xs sm:text-sm md:text-base leading-relaxed px-4 sm:px-0">
            Crafting high-performance digital experiences with a focus on modern
            architectures and AI-integrated workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
            <AnimatedButton
              as="a"
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-[var(--p-accent)] text-[#0a0a0a] font-bold text-xs sm:text-sm shadow-lg shadow-[var(--p-accent)]/20"
            >
              View Projects
            </AnimatedButton>
            <AnimatedButton
              as="a"
              href="mailto:midlajthonikkadavan01@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-transparent border border-[var(--p-border2)] text-[var(--p-text)] font-bold text-xs sm:text-sm"
            >
              Let&apos;s Talk
            </AnimatedButton>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--p-accent)]/30"
            initial={{
              x: `${20 + i * 15}%`,
              y: `${30 + i * 10}%`
            }}
            animate={{
              y: [`${30 + i * 10}%`, `${20 + (i * 12) % 60}%`, `${30 + i * 10}%`],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}
