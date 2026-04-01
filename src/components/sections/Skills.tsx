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
          className="flex items-center gap-4 mb-24"
        >
          <span className="text-4xl font-black text-neutral-200 dark:text-neutral-800">03</span>
          <h2 className="text-3xl font-bold tracking-tight">Capabilities & Tech Stack</h2>
          <div className="h-[1px] bg-neutral-200 dark:border-neutral-800 flex-1" />
        </motion.div>

        {/* Features: What I Do */}
        <div className="mb-32">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-12">What I Do</h3>
          <Features>
            <Feature 
              icon={<Layout className="w-6 h-6" />}
              title="Frontend Development"
              description="Building high-performance, accessible, and responsive user interfaces with Next.js, Framer Motion, and Tailwind CSS."
            />
            <Feature 
              icon={<Server className="w-6 h-6" />}
              title="Backend Architecture"
              description="Designing scalable server-side systems and APIs using Node.js, PostgreSQL, and efficient database ORMs like Prisma."
            />
            <Feature 
              icon={<Cpu className="w-6 h-6" />}
              title="AI Integration"
              description="Integrating modern AI capabilities like Claude or OpenAI into web applications to create smarter user experiences."
            />
          </Features>
        </div>

        <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-12">Tech Stack</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {SKILLS_DATA.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 dark:border-neutral-900 pb-2">
                {group.group}
              </h3>
              <div className="flex flex-col gap-3">
                {group.items.map(skill => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary transition-colors" />
                    <span className="text-neutral-600 dark:text-neutral-400 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats with Animated Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 mb-24">
           <div className="text-center px-4">
              <div className="text-3xl font-black mb-1 flex items-center justify-center">
                <AnimatedNumber value={98} /> %
              </div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Project Uptime</div>
           </div>
           <div className="text-center px-4 border-l border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl font-black mb-1 flex items-center justify-center">
                <AnimatedNumber value={40} /> +
              </div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">GitHub Repos</div>
           </div>
           <div className="text-center px-4 border-l border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl font-black mb-1 flex items-center justify-center">
                <AnimatedNumber value={15} /> +
              </div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Certifications</div>
           </div>
           <div className="text-center px-4 border-l border-neutral-200 dark:border-neutral-800">
              <div className="text-3xl font-black mb-1 flex items-center justify-center">
                <AnimatedNumber value={100} /> %
              </div>
              <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Client Satisfaction</div>
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
