import { portfolioData } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        About <span className="text-blue-600">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <img
              src="/profile.jpg"      
              alt={portfolioData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            Hi, I&apos;m {portfolioData.name} 👋
          </h3>
          <p className="text-gray-500 leading-relaxed">
            {portfolioData.about}
          </p>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
              📍 {portfolioData.location}
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
              💼 {portfolioData.title}
            </span>
            <span className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium">
              ✅ Available for hire
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Download Resume
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              className="border border-blue-600 text-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}