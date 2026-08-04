import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Github, ArrowUpRight, Send, Store, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.items.restaurante.title,
      description: t.projects.items.restaurante.description,
      tags: t.projects.items.restaurante.tags,
      private: true,
      featured: true,
      testimonial: {
        quote: t.projects.testimonial.quote,
        author: t.projects.testimonial.author,
        translatedNote: t.projects.testimonial.translatedNote,
      },
    },
    {
      title: t.projects.items.miyo.title,
      description: t.projects.items.miyo.description,
      image: "/projects/miyo.png",
      demo: "https://miyo-web.vercel.app/",
      github: "https://github.com/j4mLoz/miyo",
    },
    {
      title: t.projects.items.bots.title,
      description: t.projects.items.bots.description,
      image: "/projects/mendor.png",
      telegram: "https://t.me/+Ya1LP7W-iRgyNmFh",
      comingSoon: true,
    },
  ];

  return (
    <section id="projects" className="border-t border-border py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            {t.projects.title}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className={`
                group
                h-full
                border border-border
                rounded-xl
                overflow-hidden
                flex flex-col
                transition-all duration-300
                hover:border-brand
                hover:-translate-y-1
                hover:shadow-xl
                ${project.featured ? "md:col-span-2 md:flex-row" : ""}
                `}
              >
                {/* Preview */}
                {project.image ? (
                  <div
                    className={`relative h-[300px] w-full overflow-hidden ${
                      project.featured ? "md:w-2/5 md:h-auto" : ""
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                      "
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative h-[220px] md:h-auto md:w-2/5 w-full overflow-hidden bg-surface flex flex-col items-center justify-center gap-3 text-text-secondary">
                    <Store size={40} />
                    <span className="text-xs uppercase tracking-widest">
                      {t.projects.privateLabel}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  {/* Top content */}
                  <div className="space-y-5">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {project.tags && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium border border-border rounded-full text-text-secondary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.testimonial && (
                      <blockquote className="border-l-2 border-brand pl-4 py-1 text-text-secondary italic leading-relaxed">
                        <Quote
                          size={16}
                          className="inline-block mb-1 text-brand not-italic"
                        />{" "}
                        {project.testimonial.quote}
                        <footer className="mt-2 text-sm not-italic text-text-primary font-medium">
                          — {project.testimonial.author}
                          {project.testimonial.translatedNote && (
                            <span className="text-text-secondary font-normal">
                              {" "}
                              {project.testimonial.translatedNote}
                            </span>
                          )}
                        </footer>
                      </blockquote>
                    )}
                  </div>

                  {/* Actions */}
                  {!project.private && (
                    <div className="flex items-center justify-between pt-8">
                      {!project.comingSoon ? (
                        <>
                          <a
                            href={project.demo}
                            target="_blank"
                            className="
                            inline-flex items-center gap-2
                            text-sm font-medium
                            text-text-primary
                            hover:text-brand
                            transition-colors duration-200
                            "
                          >
                            {t.projects.viewProject}
                            <ArrowUpRight size={16} />
                          </a>

                          <a
                            href={project.github}
                            target="_blank"
                            className="
                            text-text-secondary
                            hover:text-brand
                            transition-colors duration-200
                            "
                          >
                            <Github size={20} />
                          </a>
                        </>
                      ) : (
                        <a
                          href={project.telegram}
                          target="_blank"
                          className="
                          inline-flex items-center gap-2
                          text-sm font-medium
                          text-text-primary
                          hover:text-brand
                          transition-colors duration-200
                          "
                        >
                          {t.projects.followUpdates}
                          <Send size={16} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
