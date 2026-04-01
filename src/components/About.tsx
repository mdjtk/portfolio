import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        </div>
        <div className="md:w-2/3 space-y-6 text-zinc-400 text-lg">
          <p>
            I'm <span className="text-white font-medium">Midlaj Thonikkadavan</span>, a Full Stack Developer from Kerala. I build high-performance web applications using Next.js, TypeScript, and modern AI tools.
          </p>
          <p>
            With 3+ years in the industry, I focus on clean code and exceptional UX. I'm passionate about open source and continuous learning.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-sm text-white font-mono">
              <Github size={16} /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-sm text-white font-mono">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors text-sm text-white font-mono">
              <Mail size={16} /> Mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
