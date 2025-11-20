import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectMetadata {
  slug: string;
  title: string;
  version: string;
  owner: string;
  status: string;
  roles?: string;
  technologies?: string;
  summary?: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

export function getAllProjectSlugs(): string[] {
  return ['softbound', 'lay-off', 'stick-dots', 'catatonic', 'broheat'];
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Extract title from the first heading in content
  const titleMatch = content.match(/^#\s+(.+?)(?:\s+—|\n)/m);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  // Extract roles section
  const rolesMatch = content.match(/##\s+Roles?\s*\n([\s\S]*?)(?=\n##|\n---|$)/i);
  let roles = "";
  if (rolesMatch) {
    roles = rolesMatch[1]
      .split("\n")
      .filter((line) => line.trim().startsWith("-"))
      .map((line) => line.replace(/^-\s*/, "").trim())
      .join(", ");
  }

  // Extract technologies section
  const techMatch = content.match(/##\s+Technologies?\s*\n([\s\S]*?)(?=\n##|\n---|$)/i);
  let technologies = "";
  if (techMatch) {
    technologies = techMatch[1]
      .split("\n")
      .filter((line) => line.trim().startsWith("-"))
      .map((line) => line.replace(/^-\s*/, "").trim())
      .join(", ");
  }

  // Extract summary
  const summaryMatch = content.match(/##\s+Project Summary\s*\n([\s\S]*?)(?=\n##|\n---|$)/i);
  const summary = summaryMatch ? summaryMatch[1].trim() : "";

  return {
    slug,
    metadata: {
      slug,
      title,
      version: data.version || "1.0",
      owner: data.owner || "Tommy Minter",
      status: data.status || "Active",
      roles,
      technologies,
      summary,
    },
    content,
  };
}

export function getAllProjects(): Project[] {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => getProjectBySlug(slug));
}
