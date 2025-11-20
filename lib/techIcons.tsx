import {
  SiUnity,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiDotnet,
} from "react-icons/si";
import { IconType } from "react-icons";

// Map technology names to their icons
const techIconMap: Record<string, IconType> = {
  // Game engines and frameworks
  unity: SiUnity,
  "unity 2023.x": SiUnity,

  // Programming languages
  "c#": SiDotnet, // Using .NET icon for C#
  csharp: SiDotnet,
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  "c++": SiCplusplus,
  hlsl: SiCplusplus, // Using C++ icon as fallback for HLSL

  // Web frameworks
  react: SiReact,
  "next.js": SiNextdotjs,
  nextjs: SiNextdotjs,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,

  // Libraries and tools
  tailwindcss: SiTailwindcss,
  tailwind: SiTailwindcss,
  pixijs: SiJavascript, // Using JS icon as fallback for PixiJS

  // Networking
  mirror: SiUnity, // Using Unity icon for Mirror
  "mirror 96.8.1": SiUnity,
  photon: SiUnity, // Using Unity icon for Photon
  "photon (pun2)": SiUnity,
  pun2: SiUnity,

  // Unity specific
  "shader graph": SiUnity,
  urp: SiUnity,
  "unity game services (ugs)": SiUnity,
  ugs: SiUnity,

  // Build/deployment
  pc: SiUnity,
  platform: SiUnity,

  // Generic fallbacks
  engine: SiUnity,
  language: SiDotnet,
  rendering: SiUnity,
  networking: SiNodedotjs,
  server: SiNodedotjs,
  deployment: SiNodedotjs,
};

/**
 * Get the icon component for a given technology name
 * Returns undefined if no icon is found
 */
export function getTechIcon(techName: string): IconType | undefined {
  const normalizedName = techName.toLowerCase().trim();

  // First try exact match
  if (techIconMap[normalizedName]) {
    return techIconMap[normalizedName];
  }

  // Try to find a partial match
  for (const [key, icon] of Object.entries(techIconMap)) {
    if (normalizedName.includes(key) || key.includes(normalizedName)) {
      return icon;
    }
  }

  return undefined;
}

/**
 * Parse a technology string (which may include labels like "Engine: Unity")
 * and return just the technology name
 */
export function parseTechName(techString: string): string {
  // Check if it has a label (e.g., "Engine: Unity")
  const colonIndex = techString.indexOf(":");
  if (colonIndex !== -1) {
    return techString.substring(colonIndex + 1).trim();
  }
  return techString.trim();
}