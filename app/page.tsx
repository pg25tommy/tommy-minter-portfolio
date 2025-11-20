import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import HomeClient from "@/components/HomeClient";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await Promise.resolve(getAllProjects());

  return (
    <>
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-text-secondary text-lg">
              A selection of work spanning web development, game systems, and technical art
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project.metadata}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeClient />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-moss/20">
        <div className="max-w-7xl mx-auto text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Tommy Minter. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
