"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const CMD_ITEMS = [
  { group: 'Navigate', icon: '🏠', label: 'Hero', sub: 'Back to top', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { group: 'Navigate', icon: '👤', label: 'About Me', sub: 'Learn more', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { group: 'Navigate', icon: '💼', label: 'Projects', sub: 'See my work', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { group: 'Navigate', icon: '⚡', label: 'Skills', sub: 'Tech stack', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { group: 'Navigate', icon: '📝', label: 'Blog', sub: 'Articles', action: () => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }) },
  { group: 'Projects', icon: '🤖', label: 'AI Dashboard', sub: 'Next.js · TypeScript · Claude API', action: () => { } },
  { group: 'Projects', icon: '🔧', label: 'React Hooks Toolkit', sub: 'TypeScript · OSS · 187 stars', action: () => { } },
  { group: 'Projects', icon: '🛒', label: 'E-commerce Platform', sub: 'Next.js · Stripe · PostgreSQL', action: () => { } },
  { group: 'Links', icon: '📄', label: 'Download CV', sub: 'PDF resume', action: () => { } },
  { group: 'Links', icon: '📧', label: 'Send Email', sub: 'Get in touch', action: () => window.location.href = 'mailto:midlajthonikkadavan01@gmail.com' },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
      setQuery("");
      setActiveIndex(0);
    }
  }, [isOpen]);

  const filteredItems = query 
    ? CMD_ITEMS.filter(i => 
        i.label.toLowerCase().includes(query.toLowerCase()) || 
        i.sub.toLowerCase().includes(query.toLowerCase())
      )
    : CMD_ITEMS;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filteredItems[activeIndex];
      if (item) {
        item.action();
        setIsOpen(false);
      }
    }
  };

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {} as Record<string, typeof CMD_ITEMS>);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[1000] flex items-start justify-center pt-[15vh]"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18 }}
            className="bg-[var(--p-bg2)] border border-[var(--p-border2)] rounded-xl w-full max-w-[560px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--p-border)]">
              <span className="text-[var(--p-muted)] text-sm">⌘</span>
              <input 
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search projects, sections, links..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-[var(--p-text)] placeholder:text-[var(--p-muted)]"
              />
            </div>

            <div className="max-h-[360px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-[var(--p-border2)]">
              {Object.entries(groupedItems).map(([group, items]) => (
                <div key={group}>
                  <div className="text-[10px] text-[var(--p-muted)] tracking-widest uppercase px-3 py-2 mt-2">{group}</div>
                  {items.map((item) => {
                    const globalIdx = filteredItems.indexOf(item);
                    return (
                      <div 
                        key={item.label}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${globalIdx === activeIndex ? "bg-[var(--p-bg3)]" : ""}`}
                        onMouseEnter={() => setActiveIndex(globalIdx)}
                        onClick={() => { item.action(); setIsOpen(false); }}
                      >
                        <div className="w-7 h-7 rounded-md bg-[var(--p-bg3)] flex items-center justify-center text-xs shrink-0 border border-[var(--p-border)]">{item.icon}</div>
                        <div className="flex-1">
                          <div className="text-sm text-[var(--p-text)]">{item.label}</div>
                          <div className="text-[11px] text-[var(--p-muted)]">{item.sub}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
              {filteredItems.length === 0 && (
                <div className="p-8 text-center text-[var(--p-muted)] text-sm">No results found for &quot;{query}&quot;</div>
              )}
            </div>

            <div className="px-4 py-2 border-t border-[var(--p-border)] flex gap-6 text-[11px] text-[var(--p-muted)]">
              <span className="flex items-center gap-1"><kbd className="bg-[var(--p-bg3)] border border-[var(--p-border)] rounded px-1.5 py-0.5 text-[10px]">↑↓</kbd> navigate</span>
              <span className="flex items-center gap-1"><kbd className="bg-[var(--p-bg3)] border border-[var(--p-border)] rounded px-1.5 py-0.5 text-[10px]">↵</kbd> select</span>
              <span className="flex items-center gap-1"><kbd className="bg-[var(--p-bg3)] border border-[var(--p-border)] rounded px-1.5 py-0.5 text-[10px]">Esc</kbd> close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
