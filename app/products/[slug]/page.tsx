import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { contactDetails } from "../../../lib/contact";
import { getProductBySlug, products } from "../../../lib/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Grace Rock Farms",
    };
  }

  return {
    title: `${product.name} | Grace Rock Farms`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Grace Rock Farms, I would like to enquire about ${product.name}.`,
  );

  return (
    <main className="min-h-screen bg-[#f8f8f8] text-[#1E1E1E]">
      <Navbar />

      <section className="bg-[#1E1E1E] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <a
              href="/products"
              className="mb-8 inline-flex text-sm font-semibold text-[#39B54A] transition hover:text-white"
            >
              Back to products
            </a>

            <div className="mb-4 inline-flex rounded-lg bg-[#39B54A]/10 px-4 py-2 text-sm font-semibold text-[#39B54A]">
              {product.category}
            </div>

            <h1 className="text-5xl font-bold md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300">
              {product.description}
            </p>

            <div className="mt-8 text-lg font-bold text-[#39B54A]">
              {product.price}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold">Crop Details</h2>

          <div className="mt-8 space-y-6">
            <DetailItem
              label="Recommended Spacing"
              value={product.spacing}
            />
            <DetailItem label="Maturity Period" value={product.maturity} />
            <DetailItem label="Expected Yield" value={product.expectedYield} />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold">Growing Notes</h2>

          <ul className="mt-8 space-y-4">
            {product.growingNotes.map((note) => (
              <li key={note} className="flex gap-3 text-gray-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#39B54A]" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-2xl bg-[#1E1E1E] p-8 text-white shadow-lg md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Ready to order?</h2>
            <p className="mt-3 max-w-2xl text-gray-300">
              Talk to Grace Rock Farms for current availability, planting
              guidance and delivery options for {product.name}.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={contactDetails.phones[0].href}
              className="rounded-lg bg-[#39B54A] px-6 py-4 text-center font-semibold text-black transition hover:bg-[#2d9a3c]"
            >
              Call Grace Rock
            </a>
            <a
              href={`${contactDetails.phones[0].whatsapp}?text=${whatsappMessage}`}
              className="rounded-lg border border-white px-6 py-4 text-center font-semibold text-white transition hover:border-[#39B54A] hover:text-[#39B54A]"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
      <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className="mt-2 text-xl font-bold text-[#1E1E1E]">{value}</div>
    </div>
  );
}
