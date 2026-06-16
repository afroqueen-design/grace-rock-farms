import WhyGraceRock from "../components/WhyGraceRock";
import CategoryCards from "../components/CategoryCards";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroCarousel from "../components/HeroCarousel";
import Navbar from "../components/Navbar";
import TrustStrip from "../components/TrustStrip";
import TrainingEvents from "../components/TrainingEvents";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-white">
      <Navbar />

      <HeroCarousel />
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
