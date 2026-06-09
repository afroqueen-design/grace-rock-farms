import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { contactDetails } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Contact | Grace Rock Farms",
  description:
    "Contact Grace Rock Farms for quality seedlings, fruit trees and certified seed potatoes in Limuru, Kenya.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
            Contact Grace Rock Farms
          </p>
          <h1 className="max-w-3xl text-5xl font-bold md:text-6xl">
            Talk to us about seedlings, orders and farm support.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300">
            Reach our Limuru team for current availability, product guidance,
            delivery questions and training enquiries.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <ContactCard title="Call Us">
            <div className="space-y-3">
              {contactDetails.phones.map((phone) => (
                <a
                  key={phone.label}
                  href={phone.href}
                  className="block rounded-lg bg-[#39B54A] px-5 py-4 text-center font-semibold text-black transition hover:bg-[#2d9a3c]"
                >
                  {phone.label}
                </a>
              ))}
            </div>
          </ContactCard>

          <ContactCard title="Email Us">
            <a
              href={contactDetails.email.href}
              className="block rounded-lg border border-gray-300 px-5 py-4 text-center font-semibold text-[#1E1E1E] transition hover:border-[#39B54A] hover:text-[#39B54A]"
            >
              {contactDetails.email.label}
            </a>
          </ContactCard>

          <ContactCard title="Visit Us">
            <address className="not-italic text-gray-600">
              {contactDetails.location.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={contactDetails.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 block rounded-lg bg-[#1E1E1E] px-5 py-4 text-center font-semibold text-white transition hover:bg-black"
            >
              Open Google Maps
            </a>
          </ContactCard>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactDetails.phones.map((phone) => (
            <a
              key={phone.whatsapp}
              href={`${phone.whatsapp}?text=${encodeURIComponent(
                "Hello Grace Rock Farms, I would like to make an enquiry.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#39B54A] bg-white px-5 py-4 text-center font-semibold text-[#2d9a3c] transition hover:bg-[#39B54A] hover:text-black"
            >
              WhatsApp {phone.label}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
              Send a message
            </p>
            <h2 className="mt-3 text-4xl font-bold">Contact Form</h2>
            <p className="mt-5 text-gray-600">
              Share what you need and the Grace Rock Farms team can follow up
              with product availability, pricing and planting guidance.
            </p>
          </div>

          <form
            action={contactDetails.email.href}
            method="post"
            encType="text/plain"
            className="grid gap-5 rounded-2xl bg-[#f8f8f8] p-6 shadow-lg md:grid-cols-2"
          >
            <label className="grid gap-2 text-sm font-semibold text-[#1E1E1E]">
              Full Name
              <input
                type="text"
                name="name"
                className="rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-[#39B54A]"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#1E1E1E]">
              Phone Number
              <input
                type="tel"
                name="phone"
                className="rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-[#39B54A]"
                placeholder="0712 345 678"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#1E1E1E] md:col-span-2">
              Email Address
              <input
                type="email"
                name="email"
                className="rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-[#39B54A]"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[#1E1E1E] md:col-span-2">
              Message
              <textarea
                name="message"
                rows={6}
                className="rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-[#39B54A]"
                placeholder="Tell us what seedlings or support you need"
              />
            </label>

            <button
              type="submit"
              className="rounded-lg bg-[#39B54A] px-6 py-4 font-semibold text-black transition hover:bg-[#2d9a3c] md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold">{title}</h2>
      {children}
    </article>
  );
}
