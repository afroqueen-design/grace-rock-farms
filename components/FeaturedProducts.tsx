import { getFeaturedProducts } from "../lib/supabase-products";

export default async function FeaturedProducts() {
  const { data: products } = await getFeaturedProducts();

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#1E1E1E]">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-600">
            Popular choices among Kenyan farmers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#1E1E1E]">
                  {product.name}
                </h3>

                <p className="mt-2 text-[#39B54A] font-semibold">
                  {product.price}
                </p>

                <a
                  href={`/products/${product.slug}`}
                  className="mt-4 block w-full rounded-lg bg-[#39B54A] py-3 text-center font-semibold text-black"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
