import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import ProductCategoryFilters from "../../components/ProductCategoryFilters";
import { categories, products } from "../../lib/products";

export const metadata: Metadata = {
  title: "Products | Grace Rock Farms",
  description:
    "Browse Grace Rock Farms vegetable seedlings, fruit trees and certified seed potatoes.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Grace Rock Catalogue
            </p>
            <h1 className="text-5xl font-bold md:text-6xl">
              Quality planting material for better harvests.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Browse vegetable seedlings, fruit trees and certified seed
              potatoes propagated for healthy establishment and dependable farm
              performance.
            </p>
          </div>
        </div>
      </section>

      <ProductCategoryFilters categories={categories} />

      <section id="all-products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold">Product Catalogue</h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              Local mock data for V1. Prices are starting points and can be
              confirmed when placing an order.
            </p>
          </div>

          <div className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-600 shadow-sm">
            {products.length} products available
          </div>
        </div>

        <div className="space-y-20">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (product) => product.category === category,
            );

            return (
              <section
                id={category.toLowerCase().replaceAll(" ", "-")}
                key={category}
                className="scroll-mt-36"
              >
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
                  <h2 className="text-3xl font-bold">{category}</h2>
                  <span className="rounded-lg bg-[#39B54A]/10 px-4 py-2 text-sm font-semibold text-[#2d9a3c]">
                    {categoryProducts.length} items
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
