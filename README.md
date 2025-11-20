# Tommy Minter - Portfolio Site

A modern, interactive portfolio web application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, dark design aesthetic with forest green and mint accents
- Responsive navigation with mobile menu
- Dynamic project pages loaded from Markdown
- Smooth animations with Framer Motion
- Optimized for performance and SEO

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Content:** Markdown with gray-matter
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
Tommy_Portfolio_Site/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── projects/          # Dynamic project routes
│   └── resume/            # Resume page
├── components/            # React components
│   ├── Navigation.tsx     # Top navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── ProjectCard.tsx   # Project card component
│   ├── AboutTeaser.tsx   # About section
│   └── ContactTeaser.tsx # Contact section
├── content/              # Markdown content
│   └── projects/         # Project specifications
│       ├── softbound.md
│       ├── lay-off.md
│       ├── stick-dots.md
│       ├── catatonic.md
│       └── broheat.md
├── lib/                  # Utility functions
│   └── projects.ts       # Project data fetching
└── public/              # Static assets

```

## Adding New Projects

1. Create a new Markdown file in `content/projects/` with the project slug as the filename (e.g., `my-project.md`)
2. Follow the existing format with these sections:
   - Project Summary
   - Roles
   - Technologies
   - Detailed sections
   - Outcome

The project will automatically appear on the home page and have its own detail page at `/projects/[slug]`.

## Customization

### Colors

Edit the color palette in `tailwind.config.ts` and `app/globals.css`. Current theme:

- Forest Green: `#04110B` / `#061710`
- Dark Grey: `#101317` / `#15181D`
- Mint Accent: `#34D399` / `#6EE7B7`
- Muted Moss: `#3F5C4A` / `#4B7A5A`

### Navigation Links

Update the navigation links in `components/Navigation.tsx`:
- GitHub URL
- LinkedIn URL
- Contact email

### Resume

Place your resume PDF in the `public/` folder as `resume.pdf`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

All rights reserved.
