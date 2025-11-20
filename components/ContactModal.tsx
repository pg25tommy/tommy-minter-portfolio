"use client";

import { useState, FormEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honeypot: "", // Honeypot field to catch bots
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData._honeypot) {
      // Bot detected, silently fail
      setStatus("success");
      setTimeout(() => {
        onClose();
        resetForm();
      }, 2000);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
        resetForm();
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      _honeypot: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-grey-light border border-moss/20 rounded-lg shadow-xl max-w-md w-full p-6 relative my-8 z-[101]"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close"
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
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <h2 className="text-2xl font-bold text-text-primary mb-2">Get in Touch</h2>
              <p className="text-text-secondary mb-6">
                Send me a message and I'll get back to you as soon as possible.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-grey-dark border border-moss/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-mint transition-colors"
                    placeholder="Your name"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-grey-dark border border-moss/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-mint transition-colors"
                    placeholder="your.email@example.com"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-grey-dark border border-moss/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-mint transition-colors resize-none"
                    placeholder="Your message..."
                    disabled={status === "loading"}
                  />
                </div>

                {/* Honeypot Field (hidden from users) */}
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                  className="absolute opacity-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Message */}
                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-sm text-red-400">{errorMessage}</p>
                  </div>
                )}

                {/* Success Message */}
                {status === "success" && (
                  <div className="p-3 bg-mint/10 border border-mint/20 rounded-lg">
                    <p className="text-sm text-mint">Message sent successfully!</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full px-6 py-3 bg-mint text-grey-dark rounded-lg hover:bg-mint-light transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
