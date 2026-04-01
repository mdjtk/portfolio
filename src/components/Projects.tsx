import SectionHeader from './SectionHeader';

const filters = ['All', 'Next.js', 'TypeScript', 'Prisma', 'Claude API', 'React', 'OSS', 'Stripe', 'PostgreSQL', 'Node.js', 'CLI', 'Framer Motion'];

const projects = [
  {
    num: '01',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'PRISMA'],
    title: 'AI-Powered Dashboard',
    desc: 'A full-stack analytics dashboard with real-time data visualization, natural language querying via Claude, and role-based access control.',
  },
  {
    num: '02',
    tags: ['TYPESCRIPT', 'REACT', 'OSS'],
    title: 'React Hooks Toolkit',
    desc: '187 stars on GitHub. Production-ready hooks for auth, data fetching, and animations.',
  },
  {
    num: '03',
    tags: ['NEXT.JS', 'STRIPE', 'POSTGRESQL'],
    title: 'E-commerce Platform',
    desc: 'Multi-vendor marketplace with Stripe Connect and real-time tracking.',
  },
  {
    num: '04',
    tags: ['NODE.JS', 'CLAUDE API', 'CLI'],
    title: 'AI Commit CLI',
    desc: 'Generates conventional commit messages from your git diff using Claude.',
  },
  {
    num: '05',
    tags: ['NEXT.JS', 'FRAMER MOTION', 'CLAUDE API'],
    title: 'Developer Portfolio',
    desc: 'This very site. Built with Next.js, VengeanceUI, and a custom AI assistant.',
    colSpan: 2
  }
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <SectionHeader number="02" title="Work & Projects" />
      
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((f, i) => (
          <button 
            key={i}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${
              i === 0 ? 'bg-zinc-200 text-black' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className={`bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8 group hover:border-zinc-700 transition-colors flex flex-col min-h-[300px] ${
              p.colSpan === 2 ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-16">
              <span className="text-5xl font-bold text-zinc-900 font-mono tracking-tighter">{p.num}</span>
              <div className="flex gap-2 flex-wrap justify-end">
                {p.tags.map((t, j) => (
                  <span key={j} className="text-[10px] font-mono tracking-wider px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ccff00] transition-colors">{p.title}</h3>
              <p className="text-zinc-400 leading-relaxed max-w-xl font-mono text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
