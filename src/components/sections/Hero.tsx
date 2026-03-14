"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { logEvent } from "@/lib/logger";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="py-40 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <Reveal>
            <div className="space-y-10 max-w-2xl">
              {/* Label profesional */}
              <p className="text-sm tracking-widest text-text-secondary uppercase">
                FullStack Developer
              </p>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-text-primary">
                Building <span className="text-brand">scalable systems</span>{" "}
                with clean architecture.
              </h1>

              {/* Description */}
              <p className="text-text-secondary text-lg max-w-md leading-relaxed">
                I focus on building structured digital products where
                architecture, performance and product thinking come first.
              </p>

              {/* CTA */}
              <div className="flex gap-5 pt-6">
                <Link
                  href="/#projects"
                  className="px-8 py-3 bg-brand hover:bg-brand-hover transition-colors duration-200 text-white rounded-lg"
                  onClick={() =>
                    logEvent({
                      section: "hero",
                      action: "click",
                      label: "projects",
                    })
                  }
                >
                  Projects
                </Link>

                <button
                  onClick={() => {
                    logEvent({
                      section: "hero",
                      action: "click",
                      label: "Contact",
                    });

                    onContactClick();
                  }}
                  className="px-8 py-3 border border-border rounded-lg hover:border-brand hover:text-brand transition-all duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[360px] h-[460px] group">
                <Image
                  src="/Juan.svg"
                  alt="Juan Lozano"
                  fill
                  className="
                  object-cover 
                  rounded-2xl 
                  shadow-xl
                  transition-all duration-500 
                  group-hover:scale-[1.03]
                  "
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
