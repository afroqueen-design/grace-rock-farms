export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  spacing: string;
  maturity: string;
  expectedYield: string;
  growingNotes: string[];
};

export const categories = [
  "Vegetable Seedlings",
  "Fruit Trees",
  "Seed Potatoes",
];

export const products: Product[] = [
  {
    slug: "tomato",
    name: "Tomato",
    category: "Vegetable Seedlings",
    description:
      "Vigorous tomato seedlings raised for strong establishment, uniform growth and reliable field performance.",
    price: "From KSh 10",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa",
    spacing: "60 cm between rows, 45 cm between plants",
    maturity: "75 to 90 days after transplanting",
    expectedYield: "20 to 35 tonnes per acre with good management",
    growingNotes: [
      "Transplant into well-drained soil with enough organic matter.",
      "Stake plants early and keep the crop consistently watered.",
      "Scout regularly for blight, whiteflies and bacterial wilt symptoms.",
    ],
  },
  {
    slug: "onion",
    name: "Onion",
    category: "Vegetable Seedlings",
    description:
      "Healthy onion seedlings prepared for transplanting into commercial and small-scale production systems.",
    price: "From KSh 8",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    spacing: "30 cm between rows, 10 cm between plants",
    maturity: "90 to 120 days after transplanting",
    expectedYield: "12 to 20 tonnes per acre under good crop care",
    growingNotes: [
      "Use loose, fertile soil and avoid fresh manure at planting.",
      "Keep weeds controlled because onions compete poorly early on.",
      "Reduce watering as bulbs mature to improve curing quality.",
    ],
  },
  {
    slug: "cabbage",
    name: "Cabbage",
    category: "Vegetable Seedlings",
    description:
      "Hardy cabbage seedlings selected for dependable crop stands and consistent head formation.",
    price: "From KSh 8",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f",
    spacing: "60 cm between rows, 45 cm between plants",
    maturity: "75 to 100 days after transplanting",
    expectedYield: "18,000 to 25,000 heads per acre",
    growingNotes: [
      "Transplant hardened seedlings in moist soil late in the day.",
      "Maintain regular feeding for strong vegetative growth.",
      "Monitor for diamondback moth, aphids and black rot.",
    ],
  },
  {
    slug: "broccoli",
    name: "Broccoli",
    category: "Vegetable Seedlings",
    description:
      "Quality broccoli seedlings for farmers targeting premium brassica production and market-ready heads.",
    price: "From KSh 12",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    spacing: "60 cm between rows, 45 cm between plants",
    maturity: "65 to 85 days after transplanting",
    expectedYield: "4 to 7 tonnes per acre depending on variety",
    growingNotes: [
      "Grow in cool conditions where possible for compact heads.",
      "Keep soil moisture even during head development.",
      "Harvest before florets loosen or begin flowering.",
    ],
  },
  {
    slug: "capsicum",
    name: "Capsicum",
    category: "Vegetable Seedlings",
    description:
      "Strong capsicum seedlings propagated for productive greenhouse and open-field planting programs.",
    price: "From KSh 15",
    image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba",
    spacing: "60 cm between rows, 45 cm between plants",
    maturity: "75 to 95 days after transplanting",
    expectedYield: "8 to 15 tonnes per acre with good nutrition",
    growingNotes: [
      "Plant in warm, well-drained soil with steady irrigation.",
      "Support plants where fruit load becomes heavy.",
      "Manage thrips, aphids and fungal leaf spots early.",
    ],
  },
  {
    slug: "hass-avocado",
    name: "Hass Avocado",
    category: "Fruit Trees",
    description:
      "Popular grafted avocado seedlings suited for profitable orchards and export-focused production.",
    price: "From KSh 250",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad",
    spacing: "7 m by 7 m orchard spacing",
    maturity: "First commercial harvest from 3 to 4 years",
    expectedYield: "300 to 800 fruits per mature tree per season",
    growingNotes: [
      "Plant in deep, well-drained soils and avoid waterlogged sites.",
      "Mulch young trees and protect them from strong wind.",
      "Prune lightly to shape the canopy and remove diseased branches.",
    ],
  },
  {
    slug: "fuerte-avocado",
    name: "Fuerte Avocado",
    category: "Fruit Trees",
    description:
      "Reliable grafted avocado seedlings for farmers building diversified, long-term fruit production.",
    price: "From KSh 250",
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704",
    spacing: "7 m by 7 m orchard spacing",
    maturity: "First commercial harvest from 3 to 4 years",
    expectedYield: "250 to 700 fruits per mature tree per season",
    growingNotes: [
      "Use windbreaks in exposed locations to protect flowers and fruit.",
      "Maintain consistent moisture during flowering and fruit set.",
      "Apply compost and balanced fertilizer based on tree stage.",
    ],
  },
  {
    slug: "purple-passion",
    name: "Purple Passion",
    category: "Fruit Trees",
    description:
      "Productive passion fruit seedlings for trellised farms seeking strong vines and consistent yields.",
    price: "From KSh 80",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e",
    spacing: "3 m between rows, 2 m between plants",
    maturity: "8 to 12 months after planting",
    expectedYield: "8 to 12 tonnes per acre under good management",
    growingNotes: [
      "Install trellising before vines begin rapid growth.",
      "Keep the root zone mulched and evenly watered.",
      "Prune old vines to improve airflow and fruiting wood renewal.",
    ],
  },
  {
    slug: "pixie-orange",
    name: "Pixie Orange",
    category: "Fruit Trees",
    description:
      "Grafted citrus seedlings for compact, high-value orchards and fresh fruit market production.",
    price: "From KSh 220",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9",
    spacing: "5 m by 5 m orchard spacing",
    maturity: "First harvest from 2.5 to 3 years",
    expectedYield: "20 to 40 kg per mature tree per season",
    growingNotes: [
      "Plant with the graft union above soil level.",
      "Irrigate during dry spells to reduce fruit drop.",
      "Monitor for citrus psyllids, scales and nutrient deficiencies.",
    ],
  },
  {
    slug: "strawberry",
    name: "Strawberry",
    category: "Fruit Trees",
    description:
      "Clean strawberry planting material for farmers establishing table fruit and value-add production.",
    price: "From KSh 20",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    spacing: "30 cm between rows, 30 cm between plants",
    maturity: "60 to 90 days after transplanting",
    expectedYield: "6 to 10 tonnes per acre with intensive care",
    growingNotes: [
      "Use raised beds with mulch to keep fruit clean.",
      "Maintain drip irrigation for steady moisture without wet foliage.",
      "Remove old leaves and runners when they reduce productivity.",
    ],
  },
  {
    slug: "shangi",
    name: "Shangi",
    category: "Seed Potatoes",
    description:
      "Certified seed potato variety favored for early maturity, market demand and dependable tuber set.",
    price: "Available on request",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
    spacing: "75 cm between ridges, 30 cm between seed tubers",
    maturity: "75 to 90 days after planting",
    expectedYield: "8 to 14 tonnes per acre depending on field management",
    growingNotes: [
      "Use certified seed and rotate away from solanaceous crops.",
      "Earth up early to protect developing tubers from greening.",
      "Manage late blight preventively during cool, wet periods.",
    ],
  },
  {
    slug: "wanjiku",
    name: "Wanjiku",
    category: "Seed Potatoes",
    description:
      "Certified seed potatoes for farmers looking for strong crop establishment and reliable productivity.",
    price: "Available on request",
    image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780",
    spacing: "75 cm between ridges, 30 cm between seed tubers",
    maturity: "90 to 110 days after planting",
    expectedYield: "10 to 16 tonnes per acre under good management",
    growingNotes: [
      "Prepare deep, friable ridges before planting.",
      "Avoid over-irrigation because tubers are sensitive to rot.",
      "Harvest after skin set for better handling and storage.",
    ],
  },
  {
    slug: "unica",
    name: "Unica",
    category: "Seed Potatoes",
    description:
      "Quality seed potato stock suited for commercial production and consistent farm performance.",
    price: "Available on request",
    image: "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3",
    spacing: "75 cm between ridges, 30 cm between seed tubers",
    maturity: "90 to 120 days after planting",
    expectedYield: "12 to 18 tonnes per acre with strong agronomy",
    growingNotes: [
      "Plant in fields with good drainage and low disease pressure.",
      "Use balanced nutrition to support tuber bulking.",
      "Grade and cure harvested tubers before marketing or storage.",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
