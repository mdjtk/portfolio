"use client";

import { motion } from "motion/react";
import { Avatar } from "@/components/ui/avatar";
import { SocialFlipButton } from "@/components/ui/social-flip-button";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function AboutSection() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 bg-transparent border-t border-[var(--p-border)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Avatar 
              src="https://github.com/mdjtk.png" 
              alt="Midlaj Thonikkadavan"
              size={200}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I'm <span className="text-black dark:text-white font-semibold">Midlaj Thonikkadavan</span>, 
                a Full Stack Developer from Kerala. I build high-performance web applications 
                using Next.js, TypeScript, and modern AI tools.
              </p>
              <p>
                With 3+ years in the industry, I focus on clean code and exceptional UX. 
                I'm passionate about open source and continuous learning.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
              <SocialFlipButton name="GitHub" href="https://github.com/mdjtk" icon={<div className="w-5 h-5"><GithubIcon /></div>} />
              <SocialFlipButton name="LinkedIn" href="https://linkedin.com/in/midlajthonikkadavan" icon={<div className="w-5 h-5"><LinkedinIcon /></div>} />
              <SocialFlipButton name="Mail" href="mailto:midlajthonikkadavan01@gmail.com" icon={<Mail className="w-5 h-5" />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
