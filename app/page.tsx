import Link from "next/link";
import WhyGraceRock from "../components/WhyGraceRock";
import CategoryCards from "../components/CategoryCards";
import FeaturedProducts from "../components/FeaturedProducts";
import Navbar from "../components/Navbar";
import TrustStrip from "../components/TrustStrip";
import TrainingEvents from "../components/TrainingEvents";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <img
          src="/logo.png"
          alt="Grace Rock Farms"
          className="mb-8 max-w-md"
        />

        <h1 className="mb-4 text-5xl font-bold">
          Quality Seedlings.
          <br />
          Better Harvests.
        </h1>

        <p className="mb-8 max-w-2xl text-xl text-gray-300">
          Premium vegetable seedlings, fruit trees and certified seed potatoes
          propagated under controlled nursery conditions.
        </p>

        <div className="flex gap-4">
          <Link
            href="/products"
            className="rounded-lg bg-[#39B54A] px-6 py-3 font-semibold text-black"
          >
            Shop Now
          </Link>

          <Link
            href="/contact"
            className="rounded-lg border border-white px-6 py-3 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <TrustStrip />
      <FeaturedProducts />
      <CategoryCards />
      <WhyGraceRock />
      <TrainingEvents />
      <ContactCTA />
      <Footer />
    </main>
  );
}
