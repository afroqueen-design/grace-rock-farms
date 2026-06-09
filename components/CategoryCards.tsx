export default function CategoryCards() {
  const categories = [
    {
      title: "Vegetable Seedlings",
      description: "Healthy, vigorous seedlings for commercial and small-scale farmers.",
      image:
        "https://images.unsplash.com/photo-1597362925123-77861d3fbac7",
    },
    {
      title: "Fruit Trees",
      description: "Grafted and certified fruit tree seedlings for profitable orchards.",
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
    },
    {
      title: "Seed Potatoes",
      description: "Certified seed potato systems designed for maximum yield.",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#1E1E1E]">
            Browse By Category
          </h2>

          <p className="mt-4 text-gray-600">
            Find the right planting material for your farm.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1E1E1E]">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {category.description}
                </p>

                <button className="mt-6 rounded-lg bg-[#39B54A] px-5 py-3 font-semibold text-black">
                  Explore Category
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}