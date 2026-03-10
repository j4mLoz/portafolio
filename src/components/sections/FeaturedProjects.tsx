import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const project = {
    title: "MIYO",
    description: "Finance App.",
    image: "/projects/miyo.png",
    demo: "https://financemiyo.com",
    github: "https://github.com/j4mLoz/miyo",
  };

  return (
    <section id="projects" className="border-t border-border py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">
            Featured Project
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="
            group
            border border-border
            rounded-xl
            overflow-hidden
            transition-all duration-300
            hover:border-brand
            hover:-translate-y-1
            hover:shadow-xl
            "
          >
            {/* Preview */}
            <div className="relative h-[340px] w-full overflow-hidden">
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
            <div className="p-8 space-y-5">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="text-text-secondary leading-relaxed max-w-2xl">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4">
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
                  View Project
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
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
