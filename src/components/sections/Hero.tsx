import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
export default function Hero() {
  return (
    <section className="py-36 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <Reveal>
            <div className="space-y-8 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
                Building <span className="text-brand">scalable systems</span>{" "}
                with clean architecture.
              </h1>

              <p className="text-text-secondary text-lg max-w-md">
                FullStack Developer focused on structure, performance and real
                product impact.
              </p>

              <div className="flex gap-5 pt-6">
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-brand hover:bg-brand-hover transition-colors duration-200 text-white rounded-lg"
                >
                  Projects
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-3 border border-border hover:border-brand hover:text-brand transition-colors duration-200 rounded-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[360px] h-[460px]">
                <Image
                  src="/Juan.png"
                  alt="Juan Lozano"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
