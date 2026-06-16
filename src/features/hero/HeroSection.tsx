import { portfolioData } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm {portfolioData.name}</h1>
      <p className="text-xl text-gray-500 mb-6">{portfolioData.title}</p>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        View My Work
      </a>
    </section>
  );
}