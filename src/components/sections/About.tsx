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
              I’m Juan, a FullStack developer who enjoys building things that
              actually work in the real world. I like understanding how systems
              behave, how products grow and how technology can support ideas
              that start small but aim to become something bigger.
            </p>{" "}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
