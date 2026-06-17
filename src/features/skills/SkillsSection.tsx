import { portfolioData } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Technologies and tools I work with to build production-ready backend systems.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((group) => (
            <div
              key={group.category}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-base font-semibold text-gray-800">
                  {group.category}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}