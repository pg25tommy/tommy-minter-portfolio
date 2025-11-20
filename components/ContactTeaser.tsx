"use client";

import { motion } from "framer-motion";

export default function ContactTeaser() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-grey-light to-forest-light border border-moss/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Looking for a developer who can bring technical depth and creative thinking to your project?
            Let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tommy@knocktwice.ca"
              className="px-8 py-4 bg-mint text-grey-dark rounded-lg hover:bg-mint-light transition-all hover:scale-105 font-medium"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/pg25tommy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-grey-dark border border-moss text-text-primary rounded-lg hover:border-mint transition-all hover:scale-105 font-medium"
            >
              View GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
