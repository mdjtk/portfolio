import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Hero", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-100 dark:border-neutral-900" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
          Midlaj<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/mdjtk" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors">
              <Github size={18} />
            </a>
            <a href="mailto:contact@midlaj.com" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-b border-neutral-100 dark:border-neutral-900 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4">
                <a href="https://github.com/mdjtk" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:contact@midlaj.com" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
