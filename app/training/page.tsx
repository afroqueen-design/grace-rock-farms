import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { contactDetails } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Training & Events | Grace Rock Farms",
  description:
    "Farmer field days, demonstration plots, seed potato classes, agronomy support and partner events at Grace Rock Farms.",
};

const programmes = [
  {
    title: "Farmer Field Days",
    description:
      "Hands-on sessions where farmers observe crop performance, nursery practices and practical management methods in the field.",
  },
  {
    title: "Demonstration Plots",
    description:
      "Side-by-side learning plots for seed potatoes, vegetable seedlings and crop care practices that farmers can compare directly.",
  },
  {
    title: "Farmer Trainings",
    description:
      "Structured training for groups covering crop establishment, transplanting, nutrition, irrigation and routine crop management.",
  },
  {
    title: "Agronomy Support",
    description:
      "Practical guidance from planting through crop care, helping farmers make timely decisions for stronger harvest outcomes.",
  },
  {
    title: "Seed Potato Classes",
    description:
      "Focused classes on certified seed potato handling, planting, spacing, disease prevention and production planning.",
  },
  {
    title: "Partner Events",
    description:
      "Collaborative learning events with institutions, agribusiness partners, farmer groups and development organisations.",
  },
];

const upcomingEvents = [
  {
    date: "Every month",
    title: "Farmer Field Day",
    detail:
      "A practical farm visit for learning nursery handling, field establishment and crop care basics.",
    audience: "Farmers and farmer groups",
  },
  {
    date: "By request",
    title: "Seed Potato Class",
    detail:
      "A focused session for farmers planning seed potato production or improving potato crop performance.",
    audience: "Potato growers",
  },
  {
    date: "Partner calendar",
    title: "Demonstration Plot Tour",
    detail:
      "A guided look at demonstration plots for training groups, partners and extension teams.",
    audience: "Partners and institutions",
  },
];

const partnerTypes = [
  "County agriculture teams",
  "Farmer cooperatives",
  "NGOs and development programmes",
  "Agribusiness partners",
];

const registrationMessage =
  "Hello Grace Rock Farms, I would like to register for a training or upcoming event.";

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Training & Events
            </p>
            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl">
              Practical farmer learning for better crop decisions.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-300">
              Grace Rock Farms supports farmers through field days,
              demonstration plots, seed potato classes, agronomy support and
              partner-led events.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#registration"
                className="rounded-lg bg-[#39B54A] px-6 py-4 text-center font-semibold text-black transition hover:bg-[#2d9a3c]"
              >
                Register Interest
              </a>
              <a
                href="#events"
                className="rounded-lg border border-white px-6 py-4 text-center font-semibold text-white transition hover:border-[#39B54A] hover:text-[#39B54A]"
              >
                View Events
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <Image
              src="/logo.png"
              alt="Grace Rock Farms"
              width={320}
              height={160}
              className="mb-8 max-w-64"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Field learning",
                "Crop demonstrations",
                "Seed potato skills",
                "Partner training",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 p-5"
                >
                  <span className="block h-2 w-12 rounded-full bg-[#39B54A]" />
                  <p className="mt-4 font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Training Programmes
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Built for farmers who learn best by seeing and doing.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Programmes are designed around real farm decisions, from
              selecting planting material to managing crops through the season.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.title}
                className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-7 shadow-sm transition hover:shadow-lg"
              >
                <span className="mb-6 block h-2 w-14 rounded-full bg-[#39B54A]" />
                <h3 className="text-2xl font-bold">{programme.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">
                  {programme.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
                Upcoming Events
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                Join the next practical farm session.
              </h2>
            </div>
            <a
              href="#registration"
              className="rounded-lg bg-[#1E1E1E] px-6 py-4 text-center font-semibold text-white transition hover:bg-black"
            >
              Ask About Dates
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl bg-white p-7 shadow-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#39B54A]">
                  {event.date}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{event.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{event.detail}</p>
                <div className="mt-6 rounded-xl bg-[#f8f8f8] p-4 text-sm font-semibold text-gray-700">
                  Best for: {event.audience}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="bg-[#39B54A] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
              Registration CTA
            </p>
            <h2 className="mt-3 text-4xl font-bold text-black md:text-5xl">
              Register your interest in the next training.
            </h2>
            <p className="mt-5 text-lg leading-8 text-black/75">
              Tell us whether you are joining as an individual farmer, farmer
              group or partner organisation. The team will share available
              dates and session details.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactDetails.phones.map((phone) => (
              <a
                key={phone.whatsapp}
                href={`${phone.whatsapp}?text=${encodeURIComponent(
                  registrationMessage,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-black px-6 py-4 text-center font-semibold text-white transition hover:bg-black/90"
              >
                WhatsApp {phone.label}
              </a>
            ))}
            <a
              href={contactDetails.email.href}
              className="rounded-lg border-2 border-black px-6 py-4 text-center font-semibold text-black transition hover:bg-black/10 sm:col-span-2"
            >
              Email {contactDetails.email.label}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Partner Events
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Host practical farmer learning with Grace Rock Farms.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              We collaborate on demonstration days, technical trainings and
              farmer outreach events that connect quality planting material
              with hands-on agronomy knowledge.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {partnerTypes.map((partner) => (
              <div
                key={partner}
                className="rounded-2xl border border-gray-200 bg-[#f8f8f8] p-6 shadow-sm"
              >
                <span className="mb-5 block h-2 w-12 rounded-full bg-[#39B54A]" />
                <h3 className="text-xl font-bold">{partner}</h3>
              </div>
            ))}
            <a
              href="/contact"
              className="rounded-2xl bg-[#1E1E1E] p-6 font-semibold text-white transition hover:bg-black sm:col-span-2"
            >
              Discuss a partner event
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
