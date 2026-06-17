import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/about/AboutSection";
import ProjectsSection from "@/features/projects/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}