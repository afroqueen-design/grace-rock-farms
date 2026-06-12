import { contactDetails } from "../lib/contact";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-[#39B54A] to-[#2d9a3c] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold text-black md:text-5xl">
          Ready to Grow Your Farm?
        </h2>

        <p className="mt-6 text-lg text-black/80 md:text-xl">
          Get started with quality seedlings and expert support. Our team is
          ready to help you achieve better harvests.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="w-full rounded-lg bg-black px-8 py-4 font-semibold text-white transition hover:bg-black/90 sm:w-auto"
          >
            Contact Us Today
          </a>

          <a
            href={contactDetails.phones[0].href}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-black px-8 py-4 font-semibold text-black transition hover:bg-black/10 sm:w-auto"
          >
            <span>Call: {contactDetails.phones[0].label}</span>
          </a>
        </div>

        <p className="mt-8 text-sm text-black/70">
          Available Monday - Saturday, 8:00am - 5:00pm EAT
        </p>
      </div>
    </section>
  );
}
