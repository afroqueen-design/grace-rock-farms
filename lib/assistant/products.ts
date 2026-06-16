import { getProducts } from "../supabase-products";
import type {
  AssistantProductContext,
  AssistantProductSummary,
} from "./types";

const MAX_PRODUCTS_FOR_ASSISTANT = 40;

export async function getAssistantProductContext(): Promise<AssistantProductContext> {
  const productsResult = await getProducts();

  if (productsResult.source !== "supabase") {
    return {
      productDataAvailable: false,
      productDataError: productsResult.error,
      products: [],
    };
  }

  const products: AssistantProductSummary[] = productsResult.data
    .slice(0, MAX_PRODUCTS_FOR_ASSISTANT)
    .map((product) => ({
      name: product.name,
      category: product.category,
      price: product.price,
      stockStatus: product.stockStatus,
      description: product.description,
      url: `/products/${product.slug}`,
    }));

  return {
    productDataAvailable: true,
    productDataError: null,
    products,
  };
}

export function formatProductContext(context: AssistantProductContext) {
  if (!context.productDataAvailable) {
    return [
      "Supabase product data is currently unavailable.",
      "Do not state product availability, prices, stock status, or product-specific details.",
      "For product availability and prices, ask users to contact Grace Rock Farms directly.",
      context.productDataError
        ? `Internal product data error: ${context.productDataError}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  if (context.products.length === 0) {
    return [
      "Supabase product data loaded, but no active products were returned.",
      "Do not invent products or prices. Ask users to contact Grace Rock Farms for current availability.",
    ].join("\n");
  }

  return context.products
    .map((product) =>
      [
        `Name: ${product.name}`,
        `Category: ${product.category}`,
        `Price: ${product.price}`,
        `Stock status: ${product.stockStatus}`,
        `Page: ${product.url}`,
        product.description ? `Description: ${product.description}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n\n");
}
