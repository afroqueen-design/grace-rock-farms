"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[#1E1E1E]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Grace Rock Farms home"
          className="relative h-12 w-36 shrink-0 sm:h-14 sm:w-44"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Grace Rock Farms"
            fill
            priority
            sizes="(max-width: 640px) 144px, 176px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-8 text-white md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-lg bg-[#39B54A] px-4 py-2 text-sm font-semibold text-black sm:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Order Now
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-[#39B54A] hover:text-[#39B54A] focus:outline-none focus:ring-2 focus:ring-[#39B54A] md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="grid gap-1">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-[#1E1E1E] px-4 pb-5 pt-2 text-white shadow-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-semibold transition hover:bg-white/10 hover:text-[#39B54A]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
