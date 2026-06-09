export default function TrustStrip() {
  const stats = [
    {
      number: "10,000+",
      label: "Farmers Served",
    },
    {
      number: "15+",
      label: "Years Experience",
    },
    {
      number: "100%",
      label: "Certified Seed Systems",
    },
    {
      number: "Kenya-Wide",
      label: "Delivery Available",
    },
  ];

  return (
    <section className="bg-[#39B54A] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-black md:text-4xl">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium text-black/80 md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
