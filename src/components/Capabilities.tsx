import { Layout, Server, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const whatIDo = [
  {
    icon: <Layout className="text-[#ccff00]" size={24} />,
    title: 'Frontend Development',
    desc: 'Building high-performance, accessible, and responsive user interfaces with Next.js, Framer Motion, and Tailwind CSS.'
  },
  {
    icon: <Server className="text-[#ccff00]" size={24} />,
    title: 'Backend Architecture',
    desc: 'Designing scalable server-side systems and APIs using Node.js, PostgreSQL, and efficient database ORMs like Prisma.'
  },
  {
    icon: <Cpu className="text-[#ccff00]" size={24} />,
    title: 'AI Integration',
    desc: 'Integrating modern AI capabilities like Claude or OpenAI into web applications to create smarter user experiences.'
  }
];

const techStack = {
  'FRONTEND': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  'BACKEND': ['Node.js', 'PostgreSQL', 'Prisma', 'Drizzle', 'REST APIs'],
  'DEVOPS': ['Git / GitHub', 'Vercel', 'Docker', 'CI/CD'],
  'TOOLS': ['Figma', 'Postman', 'VS Code', 'Claude AI']
};

const stats = [
  { value: '98%', label: 'PROJECT UPTIME' },
  { value: '40+', label: 'GITHUB REPOS' },
  { value: '15+', label: 'CERTIFICATIONS' },
  { value: '100%', label: 'CLIENT SATISFACTION' },
];

export default function Capabilities() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 overflow-hidden">
      <SectionHeader number="03" title="Capabilities & Tech Stack" />
      
      <h3 className="text-sm font-bold tracking-widest uppercase mb-8 font-mono">What I Do</h3>
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {whatIDo.map((item, i) => (
          <div key={i} className="bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-zinc-400 leading-relaxed text-sm font-mono">{item.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-sm font-bold tracking-widest uppercase mb-8 font-mono">Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-xs font-mono text-zinc-500 mb-6">{category}</h4>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="text-sm text-zinc-300 flex items-center gap-3 font-mono">
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8 md:p-12 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800/50">
          {stats.map((stat, i) => (
            <div key={i} className={i === 0 || i === 2 ? 'border-none md:border-solid' : 'border-none'}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-[100vw] left-1/2 right-1/2 -mx-[50vw] overflow-hidden py-10 border-y border-zinc-900 bg-[#050505]">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-6xl md:text-8xl font-black text-zinc-900">React</span>
              <span className="text-6xl md:text-8xl font-black text-zinc-900">Node.js</span>
              <span className="text-6xl md:text-8xl font-black text-zinc-900">Tailwind</span>
              <span className="text-6xl md:text-8xl font-black text-zinc-900">PostgreSQL</span>
              <span className="text-6xl md:text-8xl font-black text-zinc-900">Prisma</span>
              <span className="text-6xl md:text-8xl font-black text-zinc-900">Vercel</span>
              <span className="text-6xl md:text-8xl font-black text-zinc-900">Docker</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
