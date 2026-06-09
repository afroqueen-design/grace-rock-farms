type ProductCategoryFiltersProps = {
  categories: string[];
};

export default function ProductCategoryFilters({
  categories,
}: ProductCategoryFiltersProps) {
  return (
    <div className="sticky top-[72px] z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4">
        <a
          href="#all-products"
          className="whitespace-nowrap rounded-lg bg-[#1E1E1E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          All Products
        </a>

        {categories.map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
            className="whitespace-nowrap rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-[#1E1E1E] transition hover:border-[#39B54A] hover:text-[#39B54A]"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}
