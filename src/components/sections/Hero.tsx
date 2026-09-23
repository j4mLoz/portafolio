"use client";

import Link from "next/link";
import Image from "next/image";
import { logEvent } from "@/lib/logger";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface HeroProps {
  onContactClick: () => void;
}

const STACK = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Vercel",
];

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-line pb-14">
      {/* Vertical kicker pinned to the screen edge */}
      <div className="pointer-events-none absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <p className="origin-center -rotate-90 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-ink/55">
          {t.hero.verticalKicker}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[65%_1fr]">
        {/* Main column */}
        <div className="border-line px-6 py-20 lg:border-r lg:py-28 lg:pl-20 lg:pr-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
            {t.hero.roleKicker}
          </p>

          <h1 className="font-heading text-[15vw] font-bold uppercase leading-[1.2] tracking-[-0.01em] text-ink sm:text-[11vw] lg:text-[clamp(3.25rem,5.5vw,6rem)]">
            {t.hero.headline.prefix}{" "}
            <span className="highlight-block">
              {t.hero.headline.highlight}
            </span>
          </h1>

          <p className="mt-8 max-w-[520px] text-lg leading-relaxed text-text-secondary">
            {t.hero.subheadline}
          </p>

          {/* Stack: numbered index rows */}
          <div className="mt-12 max-w-[420px]">
            {STACK.map((tech, i) => (
              <div
                key={tech}
                className="flex items-center gap-4 border-b border-line py-3"
              >
                <span className="font-heading text-sm font-semibold text-brand-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-sm uppercase tracking-[0.14em] text-ink">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Action links */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <Link
              href="/#projects"
              className="editorial-link font-mono text-sm uppercase tracking-[0.14em] text-ink"
              onClick={() =>
                logEvent({
                  section: "hero",
                  action: "click",
                  label: "projects",
                })
              }
            >
              {t.hero.ctaProjects} →
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
              className="editorial-link font-mono text-sm uppercase tracking-[0.14em] text-ink"
            >
              {t.hero.ctaContact} →
            </button>

            <a
              href="https://www.linkedin.com/in/juanlozano-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link font-mono text-sm uppercase tracking-[0.14em] text-ink"
            >
              {t.hero.linkedin} →
            </a>
          </div>
        </div>

        {/* Side column: duotone photo strip + "JL" watermark */}
        <div className="relative h-[380px] overflow-hidden border-t border-line lg:h-auto lg:border-t-0">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-heading text-[14rem] font-bold text-ink/5"
          >
            <span className="-rotate-90">JL</span>
          </span>
          <div className="relative mx-auto h-full w-full max-w-xs lg:max-w-none">
            <Image
              src="/Juan.svg"
              alt="Juan Lozano"
              fill
              className="object-cover [filter:saturate(0.5)_contrast(1.05)]"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Editorial index, bottom-left corner */}
      <div className="absolute bottom-0 left-6 lg:left-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
          {t.hero.index}
        </p>
      </div>
    </section>
  );
}
