import type { Metadata } from "next";
import ContactCTA from "../../components/ContactCTA";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WhyGraceRock from "../../components/WhyGraceRock";

export const metadata: Metadata = {
  title: "About | Grace Rock Farms",
  description:
    "Learn about Grace Rock Farms, a commercial propagation nursery established in 2015.",
};

const milestones = [
  "Started commercial propagation in 2015",
  "Expanded into seed potato production in 2021",
  "Produces vegetable seedlings, fruit tree seedlings and certified seed potatoes",
];

const stats = [
  {
    number: "2015",
    label: "Commercial propagation established",
  },
  {
    number: "2021",
    label: "Seed potato production expanded",
  },
  {
    number: "3",
    label: "Core planting material categories",
  },
  {
    number: "Kenya",
    label: "Focused farmer support",
  },
];

const focusAreas = [
  "Food security",
  "Sustainable agriculture",
  "Controlled-environment propagation",
  "Farmer success",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
            About Grace Rock Farms
          </p>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl">
            Commercial propagation built for stronger farms and better harvests.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300">
            Grace Rock Farms is a commercial propagation nursery established in
            2015, producing quality vegetable seedlings, fruit tree seedlings
            and certified seed potatoes for farmers.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Company Story
            </p>
            <h2 className="mt-3 text-4xl font-bold">Growing with farmers.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Since 2015, Grace Rock Farms has focused on producing reliable
              planting material under nursery conditions that support healthy
              establishment in the field. The farm expanded into seed potato
              production in 2021, strengthening its role in Kenya&apos;s food
              production chain.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f8f8] p-8 shadow-lg">
            <h3 className="text-2xl font-bold">Key Milestones</h3>
            <ul className="mt-6 space-y-4">
              {milestones.map((milestone) => (
                <li key={milestone} className="flex gap-3 text-gray-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#39B54A]" />
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#39B54A] px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-black">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-semibold text-black/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold">Mission</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              To provide farmers with dependable, high-quality planting
              material that supports food security, farm productivity and
              sustainable agricultural growth.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold">Vision</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              To become a trusted propagation partner for farmers seeking
              healthier seedlings, stronger crop starts and more successful
              harvests.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Focus Areas
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Built around practical farmer outcomes.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#1E1E1E]">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyGraceRock />
      <ContactCTA />
      <Footer />
    </main>
  );
}
