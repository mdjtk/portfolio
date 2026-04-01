"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const POSTS = [
  { id: 1, title: 'Building a Real-Time GitHub Activity Feed', excerpt: 'How I built a live contribution heatmap and commit ticker for my portfolio — no third-party services needed.', tag: 'Next.js', date: 'Mar 28, 2026', read: '8 min' },
  { id: 2, title: 'Embedding Claude in Your Portfolio: A Practical Guide', excerpt: 'A step-by-step walkthrough of adding a context-aware AI assistant to any website using the Anthropic API.', tag: 'AI', date: 'Mar 15, 2026', read: '12 min' },
  { id: 3, title: 'Why Every Developer Site Needs a ⌘K Command Palette', excerpt: 'The command palette is the highest-impact, lowest-effort UX addition you can make to your portfolio.', tag: 'DX', date: 'Feb 22, 2026', read: '6 min' },
];

export function BlogPreviewSection() {
  return (
    <section id="blog" className="px-6 md:px-12 py-32 border-t border-[var(--p-border)] bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-24"
        >
          <span className="text-4xl font-black text-neutral-200 dark:text-neutral-800">04</span>
          <h2 className="text-3xl font-bold tracking-tight">Writing & Thoughts</h2>
          <div className="h-[1px] bg-[var(--p-border)] flex-1" />
          <a href="#blog" className="text-sm font-bold text-[var(--p-accent)] flex items-center gap-2 hover:underline">
            View all articles <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col p-8 rounded-3xl bg-[var(--p-bg2)] border border-[var(--p-border)] cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] px-2.5 py-1 rounded-md bg-[var(--p-accent)]/10 text-[var(--p-accent)] border border-[var(--p-accent)]/20 font-mono tracking-wider uppercase">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-[var(--p-accent)] transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-[var(--p-border)] text-[10px] uppercase tracking-widest font-black text-neutral-400">
                <div className="flex gap-4">
                  <span>{post.date}</span>
                  <span>{post.read}</span>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/mdjtk' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/midlajthonikkadavan' },
    { name: 'Instagram', href: 'https://instagram.com/midlaj.thonikkadavan' },
    { name: 'Email', href: 'mailto:midlajthonikkadavan01@gmail.com' }
  ];

  return (
    <footer className="px-6 md:px-12 py-12 border-t border-[var(--p-border)] bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 text-center md:text-left">
          © {new Date().getFullYear()} MIDLAJ THONIKKADAVAN · Built with React & VengeanceUI
        </div>
        <div className="flex gap-8">
          {socialLinks.map(s => (
            <a 
              key={s.name} 
              href={s.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
