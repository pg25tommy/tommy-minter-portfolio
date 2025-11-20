import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { getProjectImages } from "@/lib/getProjectImages";
import { getProjectVideo } from "@/lib/getProjectVideo";
import ProjectGallery from "@/components/ProjectGallery";
import ReactMarkdown from "react-markdown";
import TechBadge from "@/components/TechBadge";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project;
  let images: string[] = [];
  let video: string | null = null;

  try {
    project = getProjectBySlug(slug);
    images = getProjectImages(slug);
    video = getProjectVideo(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-mint hover:text-mint-light transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                project.metadata.status === "Active"
                  ? "bg-mint/20 text-mint"
                  : "bg-moss/20 text-moss-light"
              }`}
            >
              {project.metadata.status}
            </span>
            <span className="text-text-secondary text-sm">
              v{project.metadata.version}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {project.metadata.title}
          </h1>

          {project.metadata.roles && (
            <p className="text-xl text-mint mb-4">{project.metadata.roles}</p>
          )}

          {project.metadata.technologies && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.metadata.technologies.split(",").map((tech, i) => (
                <TechBadge key={i} tech={tech} size="md" />
              ))}
            </div>
          )}
        </div>

        {/* Project Video */}
        {video && (
          <div className="mb-12">
            <div className="bg-grey-light border border-moss/20 rounded-lg overflow-hidden">
              <video
                controls
                className="w-full"
                preload="metadata"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Project Content */}
        <div className="prose prose-invert prose-mint max-w-none">
          <div className="text-text-secondary leading-relaxed space-y-6">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-text-primary mt-8 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-mint mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-text-secondary mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-text-secondary">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-text-secondary">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-text-secondary">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-mint font-semibold">{children}</strong>
                ),
                hr: () => <hr className="border-moss/30 my-8" />,
              }}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Project Gallery */}
        <ProjectGallery images={images} projectName={project.metadata.title} />

        {/* Back Button (Bottom) */}
        <div className="mt-12 pt-8 border-t border-moss/20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mint hover:text-mint-light transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
