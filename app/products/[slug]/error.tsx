"use client";

import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../../../components/Navbar";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Link
              href="/products"
              className="mb-8 inline-flex text-sm font-semibold text-[#39B54A] transition hover:text-white"
            >
              Back to products
            </Link>
            <h1 className="text-5xl font-bold md:text-6xl">
              We could not load this product.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Please try again to refresh the product details.
            </p>
            <button
              type="button"
              onClick={() => unstable_retry()}
              className="mt-8 rounded-lg bg-[#39B54A] px-6 py-4 font-semibold text-black transition hover:bg-[#2d9a3c]"
            >
              Try again
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
