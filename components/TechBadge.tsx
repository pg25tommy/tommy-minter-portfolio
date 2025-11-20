"use client";

import { getTechIcon, parseTechName } from "@/lib/techIcons";

interface TechBadgeProps {
  tech: string;
  size?: "sm" | "md";
}

export default function TechBadge({ tech, size = "md" }: TechBadgeProps) {
  const techName = parseTechName(tech);
  const Icon = getTechIcon(techName);

  const sizeClasses = {
    sm: "text-xs px-2 py-1 gap-1.5",
    md: "text-sm px-3 py-1 gap-2",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
  };

  return (
    <span
      className={`flex items-center ${sizeClasses[size]} bg-moss/30 text-text-secondary rounded`}
    >
      {Icon && <Icon className={iconSizes[size]} />}
      {tech.trim()}
    </span>
  );
}