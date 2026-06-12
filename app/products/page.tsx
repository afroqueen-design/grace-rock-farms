import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCatalogue from "../../components/ProductCatalogue";
import {
  getOrderedProductCategories,
  normalizeProductCategory,
} from "../../lib/product-categories";
import { getProducts } from "../../lib/supabase-products";

export const metadata: Metadata = {
  title: "Products | Grace Rock Farms",
  description:
    "Browse Grace Rock Farms vegetable seedlings, fruit trees and certified seed potatoes.",
};

export default async function ProductsPage() {
  const productsResult = await getProducts();
  const products = productsResult.data;
  const displayProducts = products.filter((product) =>
    normalizeProductCategory(product.category),
  );
  const categories = getOrderedProductCategories(
    displayProducts.map((product) => product.category),
  );
  const errorMessage = productsResult.error;

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

      <ProductCatalogue
        categories={categories}
        errorMessage={errorMessage}
        products={displayProducts}
      />

      <Footer />
    </main>
  );
}
