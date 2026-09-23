import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function Step({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-8 border-b border-line py-10">
      <span className="w-14 shrink-0 font-heading text-4xl font-bold text-brand-accent sm:w-16 sm:text-5xl">
        {number}
      </span>
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  const titleWords = t.about.title.split(" ");
  const titleLast = titleWords.pop();

  return (
    <section id="about" className="border-b border-line py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
            {t.about.index}
          </p>
          <h2 className="mb-8 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-[-0.01em] text-ink md:text-5xl">
            {titleWords.join(" ")}{" "}
            <span className="highlight-block">{titleLast}</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
            {t.about.intro}
          </p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <Step number="01" label={t.about.beatLabels.problem}>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
                {t.about.caseProblem}
              </p>
            </Step>
          </Reveal>

          <Reveal delay={0.05}>
            <Step number="02" label={t.about.beatLabels.solution}>
              <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
                {t.about.caseSolution}
              </p>
            </Step>
          </Reveal>

          <Reveal delay={0.1}>
            <Step number="03" label={t.about.beatLabels.result}>
              <div className="max-w-2xl space-y-8">
                <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
                  <div className="flex-1 border border-line p-5">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink/60">
                      {t.about.beforeLabel}
                    </p>
                    <p className="font-heading text-lg font-semibold leading-snug text-ink">
                      {t.about.caseBefore}
                    </p>
                  </div>

                  <span className="flex shrink-0 items-center justify-center px-4 font-mono text-brand-accent">
                    →
                  </span>

                  <div className="flex-1 border border-line bg-brand-soft p-5">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-brand-accent">
                      {t.about.afterLabel}
                    </p>
                    <p className="font-heading text-lg font-semibold leading-snug text-ink">
                      {t.about.caseAfter}
                    </p>
                  </div>
                </div>

                <p className="font-heading text-2xl font-semibold leading-snug text-ink md:text-3xl">
                  {t.about.pullQuote}
                </p>
              </div>
            </Step>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 max-w-2xl space-y-6 text-lg leading-relaxed text-text-secondary">
            <p>{t.about.closing}</p>
            <p>
              {t.about.agencyLine.prefix}{" "}
              <span className="editorial-link font-medium text-ink">
                {t.about.agencyLine.highlight}
              </span>
              {t.about.agencyLine.suffix}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
