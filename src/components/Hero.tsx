import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <p className="text-[#ccff00] text-xs font-bold tracking-[0.2em] uppercase mb-6 font-mono">Based in Kerala, India</p>
      
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-white">
          MIDLAJ
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-zinc-900">
          THONIKKADAVAN
        </h1>
      </div>
      
      <p className="max-w-xl text-zinc-400 text-lg md:text-xl mb-10 font-mono text-sm leading-relaxed">
        Crafting high-performance digital experiences with a focus on modern architectures and AI-integrated workflows.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-3 bg-[#ccff00] text-black font-bold rounded-full hover:bg-[#b3e600] transition-colors text-sm">
          View Projects
        </button>
        <button className="px-8 py-3 bg-transparent text-white border border-zinc-700 font-bold rounded-full hover:bg-zinc-800 transition-colors text-sm">
          Let's Talk
        </button>
      </div>
    </section>
  );
}
