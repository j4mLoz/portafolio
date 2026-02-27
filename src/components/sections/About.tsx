import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-32">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Declaración */}
            <div className="space-y-8 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                About
              </h2>

              <p className="text-text-secondary text-lg">
                I approach development as system design. Every interface,
                database structure and architecture decision is made with
                scalability and clarity in mind.
              </p>

              <p className="text-text-secondary text-lg">
                My focus is not just writing code — but building structured
                digital products that solve real problems.
              </p>
            </div>

            {/* Principios modulares */}
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="border border-border p-6 rounded-xl space-y-3">
                <h3 className="font-medium">Architecture First</h3>
                <p className="text-sm text-text-secondary">
                  Clean system design before implementation.
                </p>
              </div>

              <div className="border border-border p-6 rounded-xl space-y-3">
                <h3 className="font-medium">Performance Focused</h3>
                <p className="text-sm text-text-secondary">
                  Optimized experiences with efficient backend logic.
                </p>
              </div>

              <div className="border border-border p-6 rounded-xl space-y-3">
                <h3 className="font-medium">Scalable Systems</h3>
                <p className="text-sm text-text-secondary">
                  Solutions built to evolve, not to break.
                </p>
              </div>

              <div className="border border-border p-6 rounded-xl space-y-3">
                <h3 className="font-medium">Product Mindset</h3>
                <p className="text-sm text-text-secondary">
                  Code aligned with business impact.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
