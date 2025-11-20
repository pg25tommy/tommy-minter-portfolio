"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-grey-dark/80 backdrop-blur-md border-b border-moss/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="text-xl font-bold text-mint hover:text-mint-light transition-colors">
            TM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-text-primary hover:text-mint transition-colors">
              Home
            </Link>
            <a
              href="https://github.com/pg25tommy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-mint transition-colors"
            >
              GitHub
            </a>
            <Link href="/resume" className="text-text-primary hover:text-mint transition-colors">
              Resume
            </Link>
            <Link href="/about" className="text-text-primary hover:text-mint transition-colors">
              About
            </Link>
            <a
              href="https://www.linkedin.com/in/thomas-minter-0a258220b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-mint transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-mint text-grey-dark rounded-lg hover:bg-mint-light transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-text-primary hover:text-mint transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="https://github.com/pg25tommy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-mint transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/resume"
              className="text-text-primary hover:text-mint transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="/about"
              className="text-text-primary hover:text-mint transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://www.linkedin.com/in/thomas-minter-0a258220b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-mint transition-colors"
            >
              LinkedIn
            </a>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-mint text-grey-dark rounded-lg hover:bg-mint-light transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
