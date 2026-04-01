import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const articles = [
  {
    tag: 'NEXT.JS',
    title: 'Building a Real-Time GitHub Activity Feed',
    desc: 'How I built a live contribution heatmap and commit ticker for my portfolio - no third-party services needed.',
    date: 'MAR 28, 2026',
    readTime: '8 MIN'
  },
  {
    tag: 'AI',
    title: 'Embedding Claude in Your Portfolio: A Practical Guide',
    desc: 'A step-by-step walkthrough of adding a context-aware AI assistant to any website using the Anthropic API.',
    date: 'MAR 15, 2026',
    readTime: '12 MIN'
  },
  {
    tag: 'UX',
    title: 'Why Every Developer Site Needs a CMD+K Command Palette',
    desc: 'The command palette is the highest-impact, lowest-effort UX addition you can make to your portfolio.',
    date: 'FEB 22, 2026',
    readTime: '6 MIN'
  }
];

export default function Writing() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <div className="flex justify-between items-end mb-12">
        <div className="flex-1">
          <SectionHeader number="04" title="Writing & Thoughts" />
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 text-[#ccff00] text-sm font-bold hover:underline mb-12 ml-8 whitespace-nowrap font-mono">
          View all articles <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8 group hover:border-zinc-700 transition-colors flex flex-col cursor-pointer">
            <span className="text-[10px] font-mono tracking-wider px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[#ccff00] w-fit mb-6">
              {article.tag}
            </span>
            <h3 className="text-xl font-bold mb-4 group-hover:text-[#ccff00] transition-colors">{article.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1 font-mono">{article.desc}</p>
            
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-6 border-t border-zinc-800/50">
              <span>{article.date} &nbsp;&nbsp; {article.readTime}</span>
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ccff00]" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <a href="#" className="inline-flex items-center gap-2 text-[#ccff00] text-sm font-bold hover:underline font-mono">
          View all articles <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
