import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { getRepos } from "@/lib/github";

const featured = [
  {
    repoName: "portafolio",
    image: "/projects/saas.png",
    label: "FullStack Architecture",
  },
  {
    repoName: "analytics-dashboard",
    image: "/projects/dashboard.png",
    label: "Data Platform",
  },
];

export default async function FeaturedProjects() {
  const repos = await getRepos();

  const selectedRepos = featured.map((item) => {
    const repoData = repos.find((repo: any) => repo.name === item.repoName);

    return {
      ...item,
      ...repoData,
    };
  });

  return (
    <section
      id="projects"
      className="border-t border-border py-32 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-20">
            <p className="text-sm text-text-secondary mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-16">
            {selectedRepos.map((project: any, index: number) => (
              <div
                key={index}
                className="group border border-border rounded-2xl overflow-hidden
                           transition-all duration-300 ease-out
                           hover:border-brand hover:-translate-y-1"
              >
                {/* Image Preview */}
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.repoName}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <span className="text-xs text-brand font-medium">
                    {project.label}
                  </span>

                  <h3 className="text-xl font-semibold">{project.name}</h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description || "No description available."}
                  </p>

                  <div className="border-t border-border pt-4 flex items-center justify-between text-sm">
                    <a
                      href={project.html_url}
                      target="_blank"
                      className="hover:text-brand transition-colors duration-200"
                    >
                      GitHub →
                    </a>

                    <span className="text-text-secondary">
                      ⭐ {project.stargazers_count || 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
