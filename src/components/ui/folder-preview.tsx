"use client";

import { motion } from "motion/react";
import { Folder, FileCode, ChevronRight } from "lucide-react";
import { useState } from "react";

export type FileNode = {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

export function FolderPreview({ data, className }: { data: FileNode[]; className?: string }) {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set(["src", "app"]));

  const toggleFolder = (name: string) => {
    const newSet = new Set(openFolders);
    if (newSet.has(name)) newSet.delete(name);
    else newSet.add(name);
    setOpenFolders(newSet);
  };

  const renderNodes = (nodes: FileNode[], depth = 0) => {
    return nodes.map((node) => (
      <div key={node.name} style={{ paddingLeft: `${depth * 16}px` }} className="text-sm font-mono mt-1">
        {node.type === "folder" ? (
          <div>
            <div 
              className="flex items-center gap-1.5 cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              onClick={() => toggleFolder(node.name)}
            >
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${openFolders.has(node.name) ? "rotate-90" : ""}`} />
              <Folder className="w-4 h-4 text-sky-500 fill-sky-500/20" />
              <span>{node.name}</span>
            </div>
            {node.children && openFolders.has(node.name) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
              >
                {renderNodes(node.children, depth + 1)}
              </motion.div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300 ml-5 py-0.5">
            <FileCode className="w-4 h-4 text-neutral-400" />
            <span className="truncate">{node.name}</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={`p-4 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-inner overflow-y-auto max-h-[300px] ${className}`}>
      {renderNodes(data)}
    </div>
  );
}
