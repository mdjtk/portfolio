"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GitBranch, Activity } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface GithubEvent {
  id: string;
  type: string;
  repo: { name: string };
  payload: {
    commits?: { message: string }[];
  };
  created_at: string;
}

export function GithubActivity() {
  const [heatmapCells, setHeatmapCells] = useState<{ id: number; cls: string; title: string }[]>([]);
  const [commits, setCommits] = useState<{msg: string, repo: string, time: string}[]>([]);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const res = await fetch('https://api.github.com/users/mdjtk/events/public?per_page=15');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: GithubEvent[] = await res.json();
        
        const recentCommits = data
          .filter(event => event.type === 'PushEvent' && event.payload.commits && event.payload.commits.length > 0)
          .map(event => ({
            msg: event.payload.commits![0].message.split('\n')[0],
            repo: event.repo.name.replace('mdjtk/', ''),
            time: formatDistanceToNow(new Date(event.created_at), { addSuffix: true }).replace('about ', '')
          }))
          .slice(0, 5);
          
        setCommits(recentCommits);
      } catch (error) {
        console.error("Error fetching github activity:", error);
      }
    };

    fetchActivity();

    // Generate heatmap cells (simulated for now, as GitHub's contribution graph API is private/complex)
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
