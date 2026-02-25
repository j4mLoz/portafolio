import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-bg-secondary">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Left - Text */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Building <span className="text-brand-800">scalable systems</span>{" "}
            with clean architecture.
          </h1>

          <p className="text-neutral-400 text-lg max-w-lg">
            FullStack Developer focused on structure, performance and real
            impact.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="px-7 py-3 bg-brand-800 hover:bg-brand-700 transition-all duration-300 text-white font-medium rounded-lg"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="px-7 py-3 border border-neutral-700 hover:border-brand-800 hover:text-brand-800 transition-all duration-300 rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Right - Floating Image */}
        <div className="relative flex justify-center mt-10 md:mt-0">
          <div
            className="relative w-[300px] sm:w-[340px] md:w-[360px] h-[380px] md:h-[440px] 
                  rounded-2xl border border-neutral-700 
                  bg-neutral-900/40 backdrop-blur-sm
                  shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
                  transition-transform duration-500 ease-out
                  hover:-translate-y-2"
          >
            <Image
              src="/Juan.png"
              alt="Juan Lozano"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
