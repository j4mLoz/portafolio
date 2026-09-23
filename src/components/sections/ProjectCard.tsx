import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  translatedNote?: string;
}

interface ProjectCardProps {
  index: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  demo?: string;
  github?: string;
  telegram?: string;
  comingSoon?: boolean;
  isPrivate?: boolean;
  privateLabel?: string;
  viewProjectLabel: string;
  followUpdatesLabel: string;
  transmissionLabel?: string;
  testimonial?: Testimonial;
}

export default function ProjectCard({
  index,
  title,
  description,
  tags,
  image,
  demo,
  github,
  telegram,
  comingSoon,
  isPrivate,
  privateLabel,
  viewProjectLabel,
  followUpdatesLabel,
  transmissionLabel,
  testimonial,
}: ProjectCardProps) {
  return (
    <div className="border-b border-line py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <span className="font-heading text-3xl font-bold text-brand-accent">
            {index}
          </span>
          <h3 className="mt-2 font-heading text-3xl font-bold uppercase leading-tight tracking-[-0.01em] text-ink">
            {title}
          </h3>

          {image ? (
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden border border-line">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover [filter:saturate(0.7)_contrast(1.05)]"
                priority
              />
            </div>
          ) : (
            <div className="mt-6 flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 border border-line bg-brand-soft p-6 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink/60">
                {privateLabel}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-text-secondary">
              {description}
            </p>

            {tags && (
              <div>
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="border-b border-line py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink/70"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {testimonial && (
              <div className="border-l-2 border-brand-accent pl-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-brand-accent">
                  {transmissionLabel}
                </p>
                <p className="italic leading-relaxed text-text-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 font-heading text-base font-semibold text-ink">
                  {testimonial.author}
                  {testimonial.translatedNote && (
                    <span className="ml-2 font-sans text-sm font-normal text-text-secondary">
                      {testimonial.translatedNote}
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>

          {!isPrivate && (
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {!comingSoon ? (
                <>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link font-mono text-sm uppercase tracking-[0.14em] text-ink"
                  >
                    {viewProjectLabel} →
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-link font-mono text-sm uppercase tracking-[0.14em] text-ink"
                  >
                    GitHub →
                  </a>
                </>
              ) : (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link font-mono text-sm uppercase tracking-[0.14em] text-ink"
                >
                  {followUpdatesLabel} →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
