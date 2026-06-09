export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E1E]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold text-white">
          Grace Rock Farms
        </div>

        <div className="hidden md:flex gap-8 text-white">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="#">Training</a>
          <a href="/contact">Contact</a>
        </div>

        <a
          href="/products"
          className="rounded-lg bg-[#39B54A] px-4 py-2 font-semibold text-black"
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}
