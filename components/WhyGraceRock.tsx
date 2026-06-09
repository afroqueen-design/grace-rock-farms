export default function WhyGraceRock() {
  const reasons = [
    {
      title: "Controlled Environment Propagation",
      text: "Seedlings are raised under carefully managed nursery conditions for strong establishment and healthy growth.",
    },
    {
      title: "Certified Seed Systems",
      text: "Quality planting material designed to improve productivity, consistency and farm profitability.",
    },
    {
      title: "Technical Support",
      text: "Our team supports farmers with planting guidance and crop management recommendations.",
    },
    {
      title: "Trusted By Farmers",
      text: "Thousands of farmers across Kenya have used Grace Rock seedlings to establish successful crops.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#1E1E1E]">
            Why Farmers Choose Grace Rock
          </h2>

          <p className="mt-4 text-gray-600">
            Quality planting materials backed by experience and technical expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <h3 className="mb-3 text-2xl font-bold text-[#39B54A]">
                {reason.title}
              </h3>

              <p className="text-gray-600">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}