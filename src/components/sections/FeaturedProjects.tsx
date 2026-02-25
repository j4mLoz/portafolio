export default function FeaturedProjects() {
  const projects = [
    {
      title: "Scalable SaaS Architecture",
      description:
        "Fullstack platform designed with modular architecture and performance-first approach.",
    },
    {
      title: "Analytics Dashboard System",
      description:
        "Data-driven dashboard built with scalability and clean system design principles.",
    },
  ];

  return (
    <section className="mt-32 space-y-12">
      <h2 className="text-3xl font-bold">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-neutral-800 p-8 rounded-xl hover:border-neutral-700 transition-colors"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-neutral-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
