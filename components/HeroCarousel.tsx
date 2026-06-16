"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageSrc?: string;
  imageAlt?: string;
};

const imageSlides: HeroSlide[] = [
  {
    eyebrow: "Business Overview",
    title: "Quality Seedlings. Better Harvests.",
    description:
      "Grace Rock Farms produces premium vegetable seedlings, fruit tree seedlings and certified seed potatoes to help Kenyan farmers start strong and grow with confidence.",
    primaryCtaLabel: "Contact Us",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "More About Us",
    secondaryCtaHref: "/about",
    imageSrc: "/hero/greenhouse-seedlings.jpg",
    imageAlt: "Seedlings growing inside a Grace Rock Farms greenhouse",
  },
  {
    eyebrow: "Farmer Transformation",
    title: "Transforming Farmer Livelihoods",
    description:
      "We support farmers with reliable planting material, practical guidance and dependable crop establishment so they can improve productivity, reduce losses and build more profitable farms.",
    primaryCtaLabel: "View Products",
    primaryCtaHref: "/products",
    secondaryCtaLabel: "Talk to Our Team",
    secondaryCtaHref: "/contact",
    imageSrc: "/hero/farmers-transplanting-seedlings.jpg",
    imageAlt: "Grace Rock Farms team handling seedlings in the nursery",
  },
  {
    eyebrow: "Seed Potatoes Focus",
    title: "Better Potato Seed. Better Yields.",
    description:
      "Our seed potato programme focuses on giving farmers access to quality potato seed systems, including Shangi seed potatoes, apical cuttings and mini-tubers for stronger production.",
    primaryCtaLabel: "Explore Seed Potatoes",
    primaryCtaHref: "/products",
    secondaryCtaLabel: "Contact Us",
    secondaryCtaHref: "/contact",
    imageSrc: "/hero/apical-potato-cuttings.jpg",
    imageAlt: "Shangi potato apical cuttings in nursery pots",
  },
  {
    eyebrow: "Partners",
    title: "Growing Through Strong Partnerships",
    description:
      "We work with farmers, aggregators, farmer groups and ecosystem partners to make quality planting material, training and market linkages more accessible.",
    primaryCtaLabel: "Training & Events",
    primaryCtaHref: "/training",
    secondaryCtaLabel: "Contact Us",
    secondaryCtaHref: "/contact",
    imageSrc: "/hero/cabbage-demo-field.jpg",
    imageAlt: "Grace Rock Farms team in a cabbage demonstration field",
  },
  {
    eyebrow: "Quality & Certification",
    title: "Built on Quality Systems",
    description:
      "From controlled-environment propagation to certified seed systems, our focus is on healthy, uniform and reliable planting material that farmers can trust.",
    primaryCtaLabel: "Browse Catalogue",
    primaryCtaHref: "/products",
    secondaryCtaLabel: "More About Us",
    secondaryCtaHref: "/about",
    imageSrc: "/hero/potato-harvest.jpg",
    imageAlt: "Potato crop field representing seed potato production",
  },
];

const fallbackSlides: HeroSlide[] = imageSlides;

export default function HeroCarousel() {
  const slides = useMemo(
    () => (imageSlides.length > 0 ? imageSlides : fallbackSlides),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    if (slides.length < 2 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#1E1E1E] px-4 pb-20 pt-32 text-white sm:px-6 lg:min-h-screen"
    >
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-black/20" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
            {activeSlide.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            {activeSlide.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-xl sm:leading-8 lg:mx-0">
            {activeSlide.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href={activeSlide.primaryCtaHref}
              className="rounded-lg bg-[#39B54A] px-6 py-3 text-center font-semibold text-black transition hover:bg-[#2d9a3c]"
            >
              {activeSlide.primaryCtaLabel}
            </Link>

            <Link
              href={activeSlide.secondaryCtaHref}
              className="rounded-lg border border-white px-6 py-3 text-center font-semibold text-white transition hover:border-[#39B54A] hover:text-[#39B54A]"
            >
              {activeSlide.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-[#111111] shadow-2xl">
            {activeSlide.imageSrc ? (
              <>
                <Image
                  src={activeSlide.imageSrc}
                  alt={activeSlide.imageAlt ?? "Grace Rock Farms nursery"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </>
            ) : (
              <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#39B54A]">
                      Nursery Ready
                    </p>
                    <h2 className="mt-3 max-w-md text-3xl font-bold sm:text-4xl">
                      Healthy starts for serious growers.
                    </h2>
                  </div>
                  <div className="hidden rounded-lg border border-[#39B54A]/40 px-4 py-3 text-sm font-semibold text-[#39B54A] sm:block">
                    Since 2015
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Seedlings", "Fruit Trees", "Seed Potatoes"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <span className="mb-4 block h-1.5 w-10 rounded-full bg-[#39B54A]" />
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
            {slides.map((slide, index) => (
              <button
                key={`${slide.eyebrow}-${index}`}
                type="button"
                aria-label={`Show hero slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "w-9 bg-[#39B54A]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
