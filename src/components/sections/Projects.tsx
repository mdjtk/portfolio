"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExpandableBentoGrid, BentoCard } from "@/components/ui/expandable-bento-grid";
import { FolderPreview, FileNode } from "@/components/ui/folder-preview";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  wide: boolean;
  github: string;
  live?: string;
  structure?: FileNode[];
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://api.github.com/users/mdjtk/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        if (!Array.isArray(data)) {
          throw new Error(data.message || 'Failed to fetch projects');
        }

        const fetchedProjects: Project[] = data.map((repo: any, index: number) => ({
          id: String(index + 1).padStart(2, '0'),
          title: repo.name.replace(/-/g, ' '),
          desc: repo.description || 'No description provided.',
          tags: repo.language ? [repo.language] : ['Code'],
          wide: index === 0 || index === 3,
          github: repo.html_url,
          live: repo.homepage || undefined,
        }));
        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="px-6 md:px-12 py-32 border-t border-[var(--p-border)] bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-4xl font-black text-neutral-200 dark:text-neutral-800">02</span>
          <h2 className="text-3xl font-bold tracking-tight">Work & Projects</h2>
          <div className="h-[1px] bg-neutral-200 dark:border-neutral-800 flex-1" />
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === tag 
                ? "bg-black text-white dark:bg-white dark:text-black shadow-lg" 
                : "bg-white text-neutral-500 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-500 dark:border-neutral-800 hover:border-neutral-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-neutral-500 py-12">Loading projects from GitHub...</div>
        ) : (
          <ExpandableBentoGrid>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <BentoCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={p.desc}
                  tags={p.tags}
                  wide={p.wide}
                  expanded={expandedId === p.id}
                  onClick={() => setExpandedId(expandedId === p.id ? null : p.id)}
                >
                  <div className="grid md:grid-cols-2 gap-8 mt-4">
                     <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map(t => (
                            <span key={t} className="px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-mono">{t}</span>
                          ))}
                        </div>
                        <div className="flex gap-4 pt-4">
                          {p.live && (
                            <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                              <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                          )}
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
                            <div className="w-4 h-4"><GithubIcon /></div> Source Code
                          </a>
                        </div>
                     </div>
                     {p.structure && (
                       <div className="space-y-4">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Project Architecture</h4>
                          <FolderPreview data={p.structure} className="border-none shadow-none bg-transparent p-0" />
                       </div>
                     )}
                  </div>
                </BentoCard>
              ))}
            </AnimatePresence>
          </ExpandableBentoGrid>
        )}
      </div>
    </section>
  );
}
