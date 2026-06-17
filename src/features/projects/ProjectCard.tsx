type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: { label: string; url: string };
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      
      {/* Header */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-sm text-blue-600 font-medium mb-3">{project.subtitle}</p>
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
      </div>

      {/* Footer */}
      <div className="mt-5">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-medium hover:underline"
        >
          🔗 {project.link.label} ↗
        </a>
      </div>
    </div>
  );
}