export default function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-4 whitespace-nowrap">
        <span className="text-zinc-600 font-mono text-xl md:text-2xl">{number}</span> {title}
      </h2>
      <div className="h-[1px] bg-zinc-800 flex-1"></div>
    </div>
  );
}
