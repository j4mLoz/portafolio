import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FeaturedProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.items.restaurante.title,
      description: t.projects.items.restaurante.description,
      tags: t.projects.items.restaurante.tags,
      isPrivate: true,
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
    <section id="projects" className="border-b border-line py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
            {t.projects.index}
          </p>
          <h2 className="mb-16 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-ink md:text-5xl">
            {t.projects.title}
          </h2>
        </Reveal>

        <div>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <ProjectCard
                {...project}
                index={String(index + 1).padStart(2, "0")}
                privateLabel={t.projects.privateLabel}
                viewProjectLabel={t.projects.viewProject}
                followUpdatesLabel={t.projects.followUpdates}
                transmissionLabel={t.projects.transmissionLabel}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
