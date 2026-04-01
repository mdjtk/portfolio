"use client";

import { motion } from "motion/react";
import { LogoSlider } from "@/components/ui/logo-slider";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Layout, Server, Globe, Cpu } from "lucide-react";
import { Features, Feature } from "@/components/ui/features";

const SKILLS_DATA = [
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { group: 'Backend', items: ['Node.js', 'PostgreSQL', 'Prisma', 'Drizzle', 'REST APIs'] },
  { group: 'DevOps', items: ['Git / GitHub', 'Vercel', 'Docker', 'CI/CD'] },
  { group: 'Tools', items: ['Figma', 'Postman', 'VS Code', 'Claude AI'] },
];

const LOGOS = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 
  'PostgreSQL', 'Prisma', 'Vercel', 'Docker', 'Stripe', 
  'Claude AI', 'MDX', 'Figma', 'Git', 'Radix UI'
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 py-32 border-t border-[var(--p-border)] bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-8 mb-24"
        >
          <span className="text-8xl sm:text-[10rem] font-black text-white/5 font-display leading-none">03</span>
          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter font-display uppercase leading-none -ml-[4vw] sm:-ml-[6vw]">Capabilities</h2>
          <div className="h-[1px] bg-white/5 flex-1" />
        </motion.div>

        {/* Features: What I Do */}
        <div className="mb-32">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--p-accent)] mb-12">What I Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[var(--p-accent)]/20 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[var(--p-accent)]/10 flex items-center justify-center text-[var(--p-accent)] mb-6 group-hover:scale-110 transition-transform">
                <Layout className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Frontend Development</h4>
              <p className="text-sm text-white/40 leading-relaxed">Building high-performance, accessible, and responsive user interfaces with Next.js, Framer Motion, and Tailwind CSS.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[var(--p-accent)]/20 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[var(--p-accent)]/10 flex items-center justify-center text-[var(--p-accent)] mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">Backend Architecture</h4>
              <p className="text-sm text-white/40 leading-relaxed">Designing scalable server-side systems and APIs using Node.js, PostgreSQL, and efficient database ORMs like Prisma.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[var(--p-accent)]/20 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[var(--p-accent)]/10 flex items-center justify-center text-[var(--p-accent)] mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4">AI Integration</h4>
              <p className="text-sm text-white/40 leading-relaxed">Integrating modern AI capabilities like Claude or OpenAI into web applications to create smarter user experiences.</p>
            </div>
          </div>
        </div>

        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--p-accent)] mb-12">Tech Stack</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {SKILLS_DATA.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 border-b border-white/5 pb-2">
                {group.group}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map(skill => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-[var(--p-accent)] transition-colors" />
                    <span className="text-sm text-white/40 font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats with Animated Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-12 rounded-3xl bg-[#080808] border border-white/5 mb-32">
           <div className="text-center px-4">
              <div className="text-5xl font-black mb-2 flex items-center justify-center tracking-tighter">
                <AnimatedNumber value={98} /> %
              </div>
              <div className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">Project Uptime</div>
           </div>
           <div className="text-center px-4 border-l border-white/5">
              <div className="text-5xl font-black mb-2 flex items-center justify-center tracking-tighter">
                <AnimatedNumber value={40} /> +
              </div>
              <div className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">GitHub Repos</div>
           </div>
           <div className="text-center px-4 border-l border-white/5">
              <div className="text-5xl font-black mb-2 flex items-center justify-center tracking-tighter">
                <AnimatedNumber value={15} /> +
              </div>
              <div className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">Certifications</div>
           </div>
           <div className="text-center px-4 border-l border-white/5">
              <div className="text-5xl font-black mb-2 flex items-center justify-center tracking-tighter">
                <AnimatedNumber value={100} /> %
              </div>
              <div className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em]">Client Satisfaction</div>
           </div>
        </div>

        {/* Continuous Slider */}
        <div className="pt-12 border-t border-neutral-100 dark:border-neutral-900">
          <LogoSlider speed={50} direction="left" className="py-4">
            {LOGOS.map((l, i) => (
              <span 
                key={i} 
                className="text-3xl font-bold text-neutral-200 dark:text-neutral-800 hover:text-black dark:hover:text-white transition-colors cursor-default whitespace-nowrap px-4"
              >
                {l}
              </span>
            ))}
          </LogoSlider>
        </div>
      </div>
    </section>
  );
}
