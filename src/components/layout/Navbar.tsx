import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-lg">JL</span>

        <div className="flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
