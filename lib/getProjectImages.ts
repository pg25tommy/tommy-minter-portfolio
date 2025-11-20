import fs from "fs";
import path from "path";

const imagesFolderMap: Record<string, string> = {
  "lay-off": "Lay_Off_images",
  "catatonic": "Catatonic_images",
  "stick-dots": "StickDots_images",
  "softbound": "Softbound_images",
  "broheat": "BroHeat_images",
};

export function getProjectImages(slug: string): string[] {
  const folderName = imagesFolderMap[slug];

  if (!folderName) {
    return [];
  }

  const imagesPath = path.join(process.cwd(), "public", "projects", folderName);

  try {
    if (!fs.existsSync(imagesPath)) {
      return [];
    }

    const files = fs.readdirSync(imagesPath);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

    return files
      .filter((file) =>
        imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
      )
      .map((file) => `/projects/${folderName}/${file}`);
  } catch (error) {
    console.error(`Error reading images for ${slug}:`, error);
    return [];
  }
}
