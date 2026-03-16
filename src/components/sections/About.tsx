import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              PERFIL PROFESIONAL
            </h2>

            {/* Contenedor de texto con espaciado entre ideas */}

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-3xl">
              <p>
                Soy Full Stack Engineer con más de 6 años construyendo sistemas
                reales de forma independiente, enfocado en el desarrollo de
                productos SaaS escalables y sostenibles en el tiempo.
              </p>

              <p>
                Mi enfoque va más allá de implementar funcionalidades. Trabajo
                diseñando arquitecturas claras, tomando decisiones técnicas
                fundamentadas y construyendo sistemas que puedan evolucionar sin
                perder estabilidad.
              </p>

              <p>
                A lo largo de mi trayectoria, he construido múltiples proyectos
                end-to-end, incluyendo herramientas de automatización y
                productos enfocados en resolver problemas reales.
              </p>

              <p>
                Esto me ha permitido desarrollar una fuerte mentalidad de
                producto y una visión técnica orientada a impacto.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
