import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-white dark:bg-[#030303] border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Midlaj <span className="text-orange-500">Thonikkadavan</span>
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs text-center md:text-left leading-relaxed">
              Crafting high-performance digital experiences with a focus on modern architectures and AI-integrated workflows.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/mdjtk" target="_blank" rel="noopener noreferrer" className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@midlaj.com" className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-100 dark:border-neutral-900">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            © {currentYear} Midlaj Thonikkadavan. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#hero" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-widest font-medium">Back to Top</a>
            <a href="#projects" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-widest font-medium">Projects</a>
            <a href="#about" className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-widest font-medium">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
