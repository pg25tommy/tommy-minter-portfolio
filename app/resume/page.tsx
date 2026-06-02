import Link from "next/link";
import PrintButton from "@/components/PrintButton";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-widest text-[#3f5c4a] mb-4 pb-2 border-b border-gray-200">
      {children}
    </h2>
  );
}

interface ExperienceEntryProps {
  title: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

function ExperienceEntry({ title, role, location, dates, bullets }: ExperienceEntryProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-sm text-gray-500 shrink-0">{dates}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 mb-2">
        <span className="text-sm font-medium text-[#3f5c4a]">{role}</span>
        <span className="hidden sm:inline text-gray-300 mx-1">·</span>
        <span className="text-sm text-gray-500">{location}</span>
      </div>
      <ul className="space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-gray-700 flex gap-2">
            <span className="text-[#3f5c4a] mt-1 shrink-0">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Controls */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mint hover:text-mint-light transition-colors"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <PrintButton />
        </div>

        {/* Resume Document */}
        <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-10 print:shadow-none print:rounded-none print:p-0">

          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">Tommy Minter</h1>
            <p className="text-base text-gray-500 mb-4">Game Developer · Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
              <span>Vancouver, BC</span>
              <a href="mailto:tommy@knocktwice.ca" className="hover:text-[#34d399] transition-colors">tommy@knocktwice.ca</a>
              <a href="https://tommyminter.com" className="hover:text-[#34d399] transition-colors">Portfolio</a>
              <a href="https://linkedin.com/in/tommy-minter" className="hover:text-[#34d399] transition-colors">LinkedIn</a>
              <a href="https://github.com/pg25tommy" className="hover:text-[#34d399] transition-colors">GitHub</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <SectionHeading>Summary</SectionHeading>
            <p className="text-sm text-gray-700 leading-relaxed">
              Motivated programmer and full-stack developer with strong foundations in C++, C#, Unity, Unreal Engine,
              and modern web technologies including Next.js and TypeScript. Experienced in shader programming, asset optimization,
              and building production web applications. Passionate about delivering polished, accessible experiences across both
              games and web — from multiplayer networked gameplay to full-featured client websites.
            </p>
          </div>

          {/* Work Experience */}
          <section className="mb-8">
            <SectionHeading>Work Experience</SectionHeading>

            <ExperienceEntry
              title="Burger Heaven — Restaurant Website"
              role="Full-Stack Developer (Freelance)"
              location="New Westminster, BC"
              dates="2025"
              bullets={[
                "Built and shipped a production restaurant website with Next.js 14 and TypeScript featuring a retro diner aesthetic.",
                "Implemented contact forms, job application system with resume uploads, and Google Maps integration.",
                "Integrated Resend API for server-side email delivery with comprehensive input validation and HTML sanitization.",
              ]}
            />

            <ExperienceEntry
              title='"LayOff" — Student Project'
              role="Programmer / Technical Artist"
              location="Vancouver, BC"
              dates="Feb 2024 – Aug 2024"
              bullets={[
                "Delivered a high-quality 3rd-person, 4-player networked multiplayer trap placement game from pre-production to final over 6 months.",
                "Developed shaders using HLSL and Shader Graph, creating VFX that enhanced the gameplay experience.",
                "Focused on optimization for smooth networked gameplay.",
              ]}
            />

            <ExperienceEntry
              title='"StickDots" — Student Project'
              role="Project Manager / Programmer"
              location="Vancouver, BC (Remote)"
              dates="Mar 2024 – Jun 2024"
              bullets={[
                "Delivered an online multiplayer-ready game with a team of 9 programmers over 4 months.",
                "Managed the team, oversaw project tasks, conducted code reviews, and ensured quality.",
                "Programmed core game mechanics and focused on networking for smooth multiplayer interactions.",
              ]}
            />

            <ExperienceEntry
              title='"CataTonic" — Student Project'
              role="Programmer"
              location="Vancouver, BC (Remote)"
              dates="Jan 2024 – Feb 2024"
              bullets={[
                "Delivered an end-to-end isometric adventure game with a team of 5 over 2 months.",
                "Led architecture and implementation of gameplay systems, UI, HUD, and event systems.",
              ]}
            />

            <ExperienceEntry
              title='"Bro-Heat BrickBreaker" — Student Project'
              role="Programmer"
              location="Vancouver, BC (Remote)"
              dates="Jan 2024 – Feb 2024"
              bullets={[
                "Delivered a brick breaker game built on a custom C++ engine with a team of 2.",
                "Implemented factory pattern for entity creation and custom collision detection systems.",
              ]}
            />
          </section>

          {/* Education */}
          <section className="mb-8">
            <SectionHeading>Education</SectionHeading>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <p className="font-semibold text-gray-900">Vancouver Film School (VFS)</p>
                <p className="text-sm text-gray-600">Programming for Games, Web and Mobile</p>
              </div>
              <span className="text-sm text-gray-500 shrink-0">Aug 2023 – Aug 2024</span>
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionHeading>Technical Skills</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "Web Development", value: "Next.js, TypeScript, React, Tailwind CSS, Node.js" },
                { label: "Game Programming", value: "Unity, Unreal Engine, C#, C++" },
                { label: "Shader Programming", value: "HLSL, Shader Graph, VFX Creation" },
                { label: "Networking", value: "Multiplayer Sync & Performance Optimization" },
                { label: "Languages", value: "TypeScript, C#, C++, JavaScript, Python" },
                { label: "APIs & Tools", value: "Resend, Google Maps API, Git" },
              ].map(({ label, value }) => (
                <div key={label} className="text-sm">
                  <span className="font-semibold text-gray-900">{label}: </span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
