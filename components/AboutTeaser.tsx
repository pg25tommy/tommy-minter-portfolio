"use client";

import { motion } from "framer-motion";

export default function AboutTeaser() {
  const skills = [
    "Full-Stack Web Development with Next.js & TypeScript",
    "Game Development & Multiplayer Systems",
    "Custom Graphics Engines & Rendering",
    "Shader Programming & Technical Art",
    "Systems Architecture & Design",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            What I Do
          </h2>
          <p className="text-text-secondary text-lg">
            Bridging the gap between technical implementation and creative vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-grey-light/50 rounded-lg border border-moss/20"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-mint/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-text-primary">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
