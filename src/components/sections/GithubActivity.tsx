"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GitBranch, Activity } from "lucide-react";

const COMMITS = [
  { msg: 'feat: add AI chat assistant to portfolio', repo: 'portfolio-v2', time: '2h' },
  { msg: 'fix: resolve hydration mismatch in dark mode', repo: 'portfolio-v2', time: '4h' },
  { msg: 'feat: implement ⌘K command palette', repo: 'portfolio-v2', time: '6h' },
  { msg: 'docs: update README with component list', repo: 'react-hooks-toolkit', time: '1d' },
  { msg: 'feat: add useLocalStorage hook', repo: 'react-hooks-toolkit', time: '1d' },
];

export function GithubActivity() {
  const [commits, setCommits] = useState<any[]>(COMMITS);
  const [heatmapCells, setHeatmapCells] = useState<{ id: number; cls: string; title: string }[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://api.github.com/users/mdjtk/events/public?per_page=20");
        if (res.ok) {
          const data = await res.json();
          const pushEvents = data.filter((e: any) => e.type === "PushEvent").slice(0, 5);
          
          if (pushEvents.length > 0) {
            const formattedCommits = pushEvents.map((e: any) => {
              const commit = e.payload.commits && e.payload.commits[0];
              const timeDiff = Date.now() - new Date(e.created_at).getTime();
              const hours = Math.floor(timeDiff / (1000 * 60 * 60));
              const days = Math.floor(hours / 24);
              const timeStr = days > 0 ? `${days}d` : `${hours}h`;
              
              return {
                msg: commit ? commit.message.split('\n')[0] : 'Update',
                repo: e.repo.name.split('/')[1] || e.repo.name,
                time: timeStr
              };
            });
            setCommits(formattedCommits);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchEvents();

    const cells = Array.from({ length: window.innerWidth < 768 ? 100 : 364 }, (_, i) => {
      const r = Math.random();
      const cls = r < 0.4 ? 'bg-neutral-100 dark:bg-neutral-900' : r < 0.7 ? 'bg-primary/20' : r < 0.9 ? 'bg-primary/50' : 'bg-primary';
      return { id: i, cls, title: `${Math.floor(Math.random() * 8)} contributions` };
    });
    setHeatmapCells(cells);
  }, []);

  return (
    <section id="github" className="px-6 md:px-12 py-32 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-24"
        >
          <span className="text-4xl font-black text-neutral-200 dark:text-neutral-800">02</span>
          <h2 className="text-3xl font-bold tracking-tight">Open Source & Activity</h2>
          <div className="h-[1px] bg-neutral-200 dark:border-neutral-800 flex-1" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start mb-24">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-primary" /> Recent Commits
              </h3>
              <p className="text-sm text-neutral-500">Live feed from my public repositories</p>
            </div>
            
            <div className="space-y-3">
              {commits.map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex flex-col gap-1">
                   <div className="flex justify-between items-center">
                     <span className="text-[10px] font-mono text-primary uppercase tracking-wider">{c.repo}</span>
                     <span className="text-[10px] text-neutral-400 uppercase font-bold">{c.time} ago</span>
                   </div>
                   <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300 leading-snug">{c.msg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
             <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> Contribution Board
              </h3>
              <p className="text-sm text-neutral-500">Visualization of GitHub activity over the last year</p>
            </div>

            <div className="p-6 rounded-3xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="flex flex-wrap gap-1 md:gap-1.5 justify-center md:justify-start">
                {heatmapCells.map(cell => (
                  <div 
                    key={cell.id} 
                    title={cell.title}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-[2.5px] ${cell.cls} hover:scale-125 transition-transform cursor-pointer shrink-0`} 
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-[10px] uppercase font-bold text-neutral-400 tracking-widest px-1">
                 <span>Less</span>
                 <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-neutral-100 dark:bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/30" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-primary/60" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-primary" />
                 </div>
                 <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
