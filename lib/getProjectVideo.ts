import fs from "fs";
import path from "path";

const imagesFolderMap: Record<string, string> = {
  "lay-off": "Lay_Off_images",
  "catatonic": "Catatonic_images",
  "stick-dots": "StickDots_images",
  "softbound": "Softbound_images",
  "broheat": "BroHeat_images",
};

export function getProjectVideo(slug: string): string | null {
  const folderName = imagesFolderMap[slug];

  if (!folderName) {
    return null;
  }

  const videosPath = path.join(process.cwd(), "public", "projects", folderName);

  try {
    if (!fs.existsSync(videosPath)) {
      return null;
    }

    const files = fs.readdirSync(videosPath);
    const videoExtensions = [".mp4", ".webm", ".mov", ".avi"];

    const videoFile = files.find((file) =>
      videoExtensions.some((ext) => file.toLowerCase().endsWith(ext))
    );

    return videoFile ? `/projects/${folderName}/${videoFile}` : null;
  } catch (error) {
    console.error(`Error reading video for ${slug}:`, error);
    return null;
  }
}
