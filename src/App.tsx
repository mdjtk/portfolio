import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { SkillsSection } from "@/components/sections/Skills";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { BlogPreviewSection, Footer } from "@/components/sections/BlogPreview";
import { ChatWidget } from "@/components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--p-bg)] text-[var(--p-text)] selection:bg-[var(--p-accent)]/30">
      <FloatingNavbar />
      
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
