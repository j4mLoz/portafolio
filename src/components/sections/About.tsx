import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              About Me
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Soy Full Stack Engineer con más de 6 años construyendo sistemas
              reales de forma independiente, enfocado en el desarrollo de
              productos SaaS escalables y sostenibles en el tiempo. Mi enfoque
              va más allá de implementar funcionalidades. Trabajo diseñando
              arquitecturas claras, tomando decisiones técnicas fundamentadas y
              construyendo sistemas que puedan evolucionar sin perder
              estabilidad.
            </p>{" "}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
