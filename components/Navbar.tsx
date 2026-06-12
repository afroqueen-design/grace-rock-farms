import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold text-white">
          Grace Rock Farms
        </div>

        <div className="hidden md:flex gap-8 text-white">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/training">Training</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/products"
          className="rounded-lg bg-[#39B54A] px-4 py-2 font-semibold text-black"
        >
          Shop Now
        </Link>
      </div>
    </nav>
  );
}
