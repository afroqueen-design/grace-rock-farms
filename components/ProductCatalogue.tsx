"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCategoryFilters from "./ProductCategoryFilters";
import type { CatalogueProduct } from "../lib/supabase-products";

type ProductCatalogueProps = {
  products: CatalogueProduct[];
  categories: string[];
  errorMessage: string | null;
};

function productMatchesSearch(product: CatalogueProduct, searchText: string) {
  const query = searchText.trim().toLowerCase();

  if (!query) {
    return true;
  }

  return [
    product.name,
    product.crop,
    product.variety,
    product.category,
    product.description,
  ].some((value) => value.toLowerCase().includes(query));
}

export default function ProductCatalogue({
  products,
  categories,
  errorMessage,
}: ProductCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (!activeCategory || product.category === activeCategory) &&
          productMatchesSearch(product, searchText),
      ),
    [activeCategory, products, searchText],
  );

  const visibleCategories = activeCategory
    ? categories.filter((category) => category === activeCategory)
    : categories;

  return (
    <>
      <ProductCategoryFilters
        activeCategory={activeCategory}
        categories={categories}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchText}
        searchText={searchText}
      />

      <section id="all-products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold">Product Catalogue</h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              Browse currently active Grace Rock Farms products. Prices are
              starting points and can be confirmed when placing an order.
            </p>
            {errorMessage ? (
              <p className="mt-3 max-w-2xl text-sm font-semibold text-[#b45309]">
                Live catalogue data is temporarily unavailable, so fallback
                product information is being shown.
              </p>
            ) : null}
          </div>

          <div className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-600 shadow-sm">
            {filteredProducts.length} products available
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="space-y-20">
            {visibleCategories.map((category) => {
              const categoryProducts = filteredProducts.filter(
                (product) => product.category === category,
              );

              if (categoryProducts.length === 0) {
                return null;
              }

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
        ) : (
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold">
              No products found. Try another crop or variety.
            </h2>
          </div>
        )}
      </section>
    </>
  );
}
