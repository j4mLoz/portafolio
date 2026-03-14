"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactModal from "@/components/ui/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Hero onContactClick={() => setIsContactOpen(true)} />

      <About />
      <FeaturedProjects />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
