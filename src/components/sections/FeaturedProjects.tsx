import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Github, ArrowUpRight, Send } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "MIYO",
      description: "Finance App.",
      image: "/projects/miyo.png",
      demo: "https://financemiyo.com",
      github: "https://github.com/j4mLoz/miyo",
    },
    {
      title: "Bot Services",
      description:
        "Automation bots ecosystem currently in development. Follow the Telegram channel to stay updated with new releases and tools.",
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
            Proyectos
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className="
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
                "
              >
                {/* Preview */}
                <div className="relative h-[300px] w-full overflow-hidden">
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
                  </div>

                  {/* Actions */}
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
                          Ver Proyecto
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
                        Seguir Actualizaciones
                        <Send size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
