import Link from "next/link";
import { contactDetails } from "../lib/contact";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-2xl font-bold">Grace Rock Farms</div>
            <p className="text-sm text-gray-400">
              Quality seedlings and certified seed systems for better harvests.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition hover:text-[#39B54A]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 transition hover:text-[#39B54A]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition hover:text-[#39B54A]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-gray-400 transition hover:text-[#39B54A]"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition hover:text-[#39B54A]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">Contact Us</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              {contactDetails.phones.map((phone) => (
                <li key={phone.label}>
                  <a
                    href={phone.href}
                    className="transition hover:text-[#39B54A]"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contactDetails.email.href}
                  className="transition hover:text-[#39B54A]"
                >
                  {contactDetails.email.label}
                </a>
              </li>
              <li>
                <a
                  href={contactDetails.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#39B54A]"
                >
                  {contactDetails.location.join(", ")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold">WhatsApp</h2>
            <div className="flex flex-col gap-3">
              {contactDetails.phones.map((phone) => (
                <a
                  key={phone.whatsapp}
                  href={`${phone.whatsapp}?text=${encodeURIComponent(
                    "Hello Grace Rock Farms, I would like to make an enquiry.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-gray-700 px-4 py-3 text-center text-sm font-semibold text-gray-300 transition hover:border-[#39B54A] hover:text-[#39B54A]"
                >
                  WhatsApp {phone.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          (C) 2026 Grace Rock Farms. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
