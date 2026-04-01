import { MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-center md:text-left">
          © 2026 MIDLAJ THONIKKADAVAN · BUILT WITH NEXT.JS & VENGEANCEUI · DEPLOYED ON VERCEL
        </p>
        <div className="flex gap-6 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
          <a href="#" className="hover:text-white transition-colors">Github</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#ccff00] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105 transition-transform z-50">
        <MessageSquare size={24} />
      </button>
    </footer>
  );
}
