import { portfolioData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          A collection of real-world backends and platforms I&apos;ve built as a sole backend developer.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}