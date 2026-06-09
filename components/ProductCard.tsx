import type { Product } from "../lib/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 text-sm font-semibold text-[#39B54A]">
          {product.category}
        </div>

        <h3 className="text-2xl font-bold text-[#1E1E1E]">{product.name}</h3>

        <p className="mt-3 flex-1 text-gray-600">{product.description}</p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Starting Price
            </div>
            <div className="mt-1 text-lg font-bold text-[#1E1E1E]">
              {product.price}
            </div>
          </div>

          <a
            href={`/products/${product.slug}`}
            className="rounded-lg bg-[#39B54A] px-5 py-3 font-semibold text-black transition hover:bg-[#2d9a3c]"
          >
            View Details
          </a>
        </div>
      </div>
    </article>
  );
}
