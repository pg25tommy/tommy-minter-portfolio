# Project: Portfolio Site — Design Spike
version: 0.3
owner: Tommy Minter
status: Design Exploration

---

## 1. Purpose

Create a modern, interactive portfolio web application that:

- Showcases my projects (SoftBound, Lay-Off, Stick Dots, CataTonic, BroHeat)
- Demonstrates my strengths as a developer, technical artist, technical designer, and systems thinker
- Feels like a real product, not a static resume site
- Reuses some of SoftBound's design DNA (interactivity, craft, texture) in a lighter, more maintainable form
- Avoids ALL AI branding (no assistant names in UI, metadata, or commit messages)

---

## 2. Target Stack (SoftBound-Adjacent)

- **Framework:** Next.js (latest stable)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (preferred), or CSS Modules
- **Animation Library:** Framer Motion
- **Optional Graphics:** PixiJS OR a lightweight HTML5 Canvas feature for the hero area
- **Content Source:** Markdown/MDX spec files (one per project)
- **Hosting / Deployment:** Vercel
- **Tooling:** ESLint + Prettier

**Hard Constraint:**
No visible or hidden AI branding anywhere in the project.

---

## 3. Visual Design Direction

### Color Palette — Dark, Modern, High-End

- **Forest Green:** `#04110B` / `#061710`
- **Dark Grey:** `#101317` / `#15181D`
- **Mint Accent:** `#34D399` / `#6EE7B7`
- **Muted Moss:** `#3F5C4A` / `#4B7A5A`
- **Text Primary:** `#F9FAFB`
- **Text Secondary:** `#9CA3AF`

### Style Principles

- Super modern developer portfolio aesthetic
- Clean grid + heavy negative space
- Crisp typography, medium-large headings
- Soft shadows, smooth hover interactions
- Smooth but restrained micro-animations
- No unnecessary clutter

---

## 4. Navigation Requirements

A fixed top navigation bar containing:

- **Home**
- **GitHub**
- **Resume**
- **LinkedIn**

*Desktop:* inline
*Mobile:* collapsible minimal menu

Left side: Name or simple monogram logo
Right side: Nav links + optional CTA ("Contact" or "Hire Me")

---

## 5. Information Architecture

### 5.1 Pages / Routes

- `/` — Home
- `/projects/[slug]` — Dynamic project pages
- `/resume` — PDF or internal page
- `/about` — Optional
- `/contact` — Optional

### 5.2 Home Page Layout

The home page contains **snippets for each project**, each with a **CTA** that links to that project's full page.

#### Sections:

1. **Hero**
   - Name + title
   - 1–2 sentence intro/tagline
   - Hero CTA: "View Projects ↓"
   - Optional light interaction (PixiJS or Canvas), subtle only

2. **Projects Overview**
   - A snippet card for EACH project:
     - Title
     - Roles
     - Short 1–2 sentence blurb
     - Technologies (short list)
     - Thumbnail image
     - **Call-to-action under the blurb:**
       "View Project →"
       linking to `/projects/[slug]`
   - Grid layout (2–3 columns depending on screen width)

3. **About Teaser**
   - 3–5 bullets about what I do (Web Dev, Game Dev, Networking, Shaders, Systems Design)
   - Optional "Read More →" link

4. **Contact Teaser**
   - Short "Work With Me" message + CTA button

---

## 6. Project Detail Pages

Each project has its own dedicated page, loaded from Markdown.

### Structure of a Project Page

- Title
- Subtitle/tagline
- Roles
- Technologies
- Summary paragraph
- Major contributions (structured sections pulled from spec)
- Outcome section
- **Photos / gallery block (carousel or grid)**
- Back CTA: "← Back to Home"

### Content Source

Each project page must load from:
- `/content/projects/[slug].md` — Individual markdown files per project
- Supported slugs: `softbound`, `lay-off`, `stick-dots`, `catatonic`, `broheat`

### Markdown Structure

Each project markdown file should contain:
- Metadata (version, owner, status)
- Project Summary
- Roles
- Technologies
- Detailed contribution sections
- Outcome
- Photos placeholder

---

## 7. Next Steps

1. Initialize Next.js project with TypeScript
2. Configure Tailwind CSS
3. Install Framer Motion and PixiJS (optional)
4. Set up markdown/MDX parsing
5. Create base layout and navigation component
6. Build home page sections
7. Implement dynamic project routing
8. Add styling and animations
9. Deploy to Vercel
