"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scrollAttempts = 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 10;

      if (isAtBottom) {
        scrollAttempts++;

        if (scrollAttempts >= 3) {
          setVisible(true);
        }
      } else {
        scrollAttempts = 0;
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
      fixed bottom-8 right-8 z-50
      w-12 h-12
      flex items-center justify-center
      rounded-full
      bg-bg-secondary
      border border-border
      shadow-lg
      text-text-primary
      backdrop-blur-sm
      
      transition-all duration-300 ease-out
      
      hover:scale-110
      hover:border-brand
      hover:text-brand
      
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <ArrowUp size={18} />
    </button>
  );
}
