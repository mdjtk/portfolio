import { GitCommit, Activity as ActivityIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

const commits = [
  { repo: 'PORTFOLIO-V2', msg: 'feat: add AI chat assistant to portfolio', time: '2H AGO' },
  { repo: 'PORTFOLIO-V2', msg: 'fix: resolve hydration mismatch in dark mode', time: '4H AGO' },
  { repo: 'PORTFOLIO-V2', msg: 'feat: implement CMD+K command palette', time: '6H AGO' },
  { repo: 'REACT-HOOKS-TOOLKIT', msg: 'docs: update README with component list', time: '1D AGO' },
  { repo: 'REACT-HOOKS-TOOLKIT', msg: 'feat: add useLocalStorage hook', time: '1D AGO' },
];

export default function Activity() {
  // Generate random contribution data
  const weeks = 52;
  const days = 7;
  const contributions = Array.from({ length: weeks * days }, () => Math.floor(Math.random() * 4));

  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <SectionHeader number="01" title="Open Source & Activity" />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <GitCommit className="text-zinc-400" size={20} />
            <h3 className="text-xl font-bold">Recent Commits</h3>
          </div>
          <p className="text-zinc-500 text-sm mb-6 font-mono">Live feed from my public repositories</p>
          
          <div className="space-y-3">
            {commits.map((commit, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-zinc-800/50 p-4 rounded-xl flex justify-between items-start group hover:border-zinc-700 transition-colors">
                <div>
                  <p className="text-xs font-mono text-zinc-500 mb-1">{commit.repo}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors font-mono">{commit.msg}</p>
                </div>
                <span className="text-[10px] font-mono text-zinc-600 whitespace-nowrap ml-4 mt-1">{commit.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ActivityIcon className="text-zinc-400" size={20} />
            <h3 className="text-xl font-bold">Contribution Board</h3>
          </div>
          <p className="text-zinc-500 text-sm mb-6 font-mono">Visualization of GitHub activity over the last year</p>
          
          <div className="bg-[#0a0a0a] border border-zinc-800/50 p-6 rounded-xl overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-rows-7 grid-flow-col gap-1.5">
                {contributions.map((level, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-sm ${
                      level === 0 ? 'bg-zinc-900' : 
                      level === 1 ? 'bg-zinc-700' : 
                      level === 2 ? 'bg-zinc-500' : 'bg-zinc-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-zinc-600">
                <span>LESS</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-zinc-900"></div>
                  <div className="w-3 h-3 rounded-sm bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-sm bg-zinc-500"></div>
                  <div className="w-3 h-3 rounded-sm bg-zinc-300"></div>
                </div>
                <span>MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
