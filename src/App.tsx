import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { SkillsSection } from "@/components/sections/Skills";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { BlogPreviewSection, Footer } from "@/components/sections/BlogPreview";
import { ChatWidget } from "@/components/ChatWidget";
import { CommandPalette } from "@/components/ui/command-palette";
import { GlassDock } from "@/components/ui/glass-dock";
import { Home, User, Briefcase, Code, BookOpen } from "lucide-react";

export default function App() {
  const navItems = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "About", icon: User, href: "#about" },
    { title: "Projects", icon: Briefcase, href: "#projects" },
    { title: "Skills", icon: Code, href: "#skills" },
    { title: "Blog", icon: BookOpen, href: "#blog" },
  ];

  return (
    <div className="min-h-screen bg-[var(--p-bg)] text-[var(--p-text)] selection:bg-[var(--p-accent)]/30">
      <CommandPalette />
      
      <div className="fixed bottom-0 lg:bottom-8 left-1/2 -translate-x-1/2 z-[5000] w-full lg:w-auto flex justify-center pb-4 lg:pb-0">
        <GlassDock items={navItems} />
      </div>
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <GithubActivity />
        <BlogPreviewSection />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}
