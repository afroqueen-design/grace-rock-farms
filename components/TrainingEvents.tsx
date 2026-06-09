export default function TrainingEvents() {
  const programs = [
    {
      title: "Seedling Care Workshop",
      description:
        "Learn best practices for transplanting, watering, and nurturing seedlings for optimal growth and establishment.",
      icon: "🌱",
    },
    {
      title: "Potato Farming Masterclass",
      description:
        "Comprehensive training on certified seed potato systems, planting techniques, and disease management strategies.",
      icon: "🥔",
    },
    {
      title: "Fruit Tree Management",
      description:
        "Expert guidance on grafted fruit tree care, pruning techniques, and orchard establishment for maximum yield.",
      icon: "🌳",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#1E1E1E]">
            Training & Farmer Support
          </h2>

          <p className="mt-4 text-gray-600">
            Empowering farmers with knowledge and technical expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 text-5xl">{program.icon}</div>

              <h3 className="mb-3 text-2xl font-bold text-[#1E1E1E]">
                {program.title}
              </h3>

              <p className="mb-6 text-gray-600">{program.description}</p>

              <button className="rounded-lg bg-[#39B54A] px-5 py-3 font-semibold text-black transition hover:bg-[#2d9a3c]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
