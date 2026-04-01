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
    <section id="about" className="px-6 md:px-12 py-32 bg-transparent border-t border-[var(--p-border)]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12"
        >
          <h2 className="text-6xl sm:text-7xl font-black tracking-tighter font-display uppercase leading-none">About Me</h2>
          
          <div className="space-y-8 text-lg sm:text-xl text-neutral-400 leading-relaxed font-medium">
            <p>
              I'm <span className="text-white font-black">Midlaj Thonikkadavan</span>, 
              a Full Stack Developer from Kerala. I build high-performance web applications 
              using Next.js, TypeScript, and modern AI tools.
            </p>
            <p className="opacity-40">
              With 3+ years in the industry, I focus on clean code and exceptional UX. 
              I'm passionate about open source and continuous learning.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="https://github.com/mdjtk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-white/5 text-xs font-bold text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              <div className="w-4 h-4"><GithubIcon /></div> GitHub
            </a>
            <a 
              href="https://linkedin.com/in/midlajthonikkadavan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-white/5 text-xs font-bold text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              <div className="w-4 h-4"><LinkedinIcon /></div> LinkedIn
            </a>
            <a 
              href="mailto:midlajthonikkadavan01@gmail.com"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-white/5 text-xs font-bold text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              <Mail className="w-4 h-4" /> Mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
