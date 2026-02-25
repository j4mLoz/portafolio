import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-20">
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
        <div className="relative hidden md:flex justify-center">
          <div className="relative w-[340px] h-[420px] rounded-2xl overflow-hidden border border-neutral-800 shadow-xl shadow-black/40">
            {/* Glow background */}
            <div className="absolute -inset-4 bg-brand-800/20 blur-3xl rounded-3xl -z-10" />

            {/* Replace src with your image */}
            <Image
              src="/profile.jpg"
              alt="Juan Lozano"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
