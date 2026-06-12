"use client";

type ProductCategoryFiltersProps = {
  activeCategory: string | null;
  categories: string[];
  onCategoryChange: (category: string | null) => void;
  onSearchChange: (searchText: string) => void;
  searchText: string;
};

export default function ProductCategoryFilters({
  activeCategory,
  categories,
  onCategoryChange,
  onSearchChange,
  searchText,
}: ProductCategoryFiltersProps) {
  return (
    <div className="sticky top-[72px] z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            type="search"
            value={searchText}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search tomatoes, avocado, cabbage, Shangi..."
            className="min-h-12 flex-1 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-[#1E1E1E] outline-none transition placeholder:text-gray-400 focus:border-[#39B54A] focus:ring-4 focus:ring-[#39B54A]/20"
            aria-label="Search products"
          />

          {searchText ? (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="min-h-12 whitespace-nowrap rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-[#1E1E1E] transition hover:border-[#39B54A] hover:text-[#39B54A]"
            >
              Clear
            </button>
          ) : null}
        </div>

        <div className="flex gap-3 overflow-x-auto">
          <button
            type="button"
            onClick={() => onCategoryChange(null)}
            className={`whitespace-nowrap rounded-lg px-5 py-3 text-sm font-semibold transition ${
              activeCategory === null
                ? "bg-[#1E1E1E] text-white hover:bg-black"
                : "border border-gray-300 text-[#1E1E1E] hover:border-[#39B54A] hover:text-[#39B54A]"
            }`}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap rounded-lg px-5 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-[#1E1E1E] text-white hover:bg-black"
                  : "border border-gray-300 text-[#1E1E1E] hover:border-[#39B54A] hover:text-[#39B54A]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
