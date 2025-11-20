"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import ContactTeaser from "./ContactTeaser";
import AboutTeaser from "./AboutTeaser";

export default function HomeClient() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <AboutTeaser />
      <ContactTeaser onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
