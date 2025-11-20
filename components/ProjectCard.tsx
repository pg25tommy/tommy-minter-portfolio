"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ProjectMetadata } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectMetadata;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-grey-light border border-moss/20 rounded-lg overflow-hidden hover:border-mint/40 transition-all hover:shadow-lg hover:shadow-mint/10"
    >
      <div className="p-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            project.status === "Active"
              ? "bg-mint/20 text-mint"
              : "bg-moss/20 text-moss-light"
          }`}>
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          {project.title}
        </h3>

        {/* Roles */}
        {project.roles && (
          <p className="text-sm text-mint mb-4">
            {project.roles}
          </p>
        )}

        {/* Summary */}
        {project.summary && (
          <p className="text-text-secondary mb-4 line-clamp-3">
            {project.summary}
          </p>
        )}

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.split(",").slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-moss/30 text-text-secondary rounded"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-mint hover:text-mint-light transition-colors font-medium"
        >
          View Project
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
