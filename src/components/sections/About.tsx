import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-border py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t.about.title}
            </h2>

            {/* Contenedor de texto con espaciado entre ideas */}

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-3xl">
              {t.about.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <p>
                {t.about.agencyLine.prefix}{" "}
                <span className="text-text-primary font-medium">
                  {t.about.agencyLine.highlight}
                </span>
                {t.about.agencyLine.suffix}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
