import {
  categories as fallbackCategories,
  getProductBySlug as getFallbackProductBySlug,
  products as fallbackProducts,
  type Product,
} from "./products";
import {
  getOrderedProductCategories,
  normalizeProductCategory,
} from "./product-categories";
import { getProductImageUrl, supabase } from "./supabase";

type ProductRow = {
  id: number | string;
  slug: string;
  category: string | null;
  crop: string | null;
  variety: string | null;
  name: string;
  selling_price: number | string | null;
  stock_status: string | null;
  image_filename: string | null;
  description: string | null;
  featured: boolean | null;
  active: boolean | null;
};

export type CatalogueProduct = Product & {
  id: number | string;
  crop: string;
  variety: string;
  stockStatus: string;
  featured: boolean;
  active: boolean;
  source: "supabase" | "fallback";
};

type ProductQueryResult<T> = {
  data: T;
  error: string | null;
  source: "supabase" | "fallback";
};

const productColumns =
  "id, slug, category, crop, variety, name, selling_price, stock_status, image_filename, description, featured, active";

function formatPrice(value: ProductRow["selling_price"]) {
  if (value === null || value === undefined || value === "") {
    return "Available on request";
  }

  if (typeof value === "number") {
    return `KSh ${value.toLocaleString("en-KE")}`;
  }

  return value;
}

function buildDetailValue(value: string | null, fallback: string) {
  return value && value.trim().length > 0 ? value : fallback;
}

function mapRowToProduct(row: ProductRow): CatalogueProduct {
  const crop = buildDetailValue(row.crop, row.name);
  const variety = buildDetailValue(row.variety, "Available on request");
  const category = normalizeProductCategory(row.category) ?? "";
  const stockStatus = buildDetailValue(
    row.stock_status,
    "Contact for availability",
  );

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category,
    description: row.description ?? "",
    price: formatPrice(row.selling_price),
    image: getProductImageUrl(row.image_filename),
    spacing: crop,
    maturity: variety,
    expectedYield: stockStatus,
    growingNotes: [
      `Crop: ${crop}`,
      `Variety: ${variety}`,
      `Current stock status: ${stockStatus}`,
    ],
    crop,
    variety,
    stockStatus,
    featured: Boolean(row.featured),
    active: Boolean(row.active),
    source: "supabase",
  };
}

function mapFallbackProduct(product: Product): CatalogueProduct {
  return {
    ...product,
    category: normalizeProductCategory(product.category) ?? product.category,
    id: product.slug,
    crop: product.name,
    variety: product.name,
    stockStatus: "Contact for availability",
    featured: true,
    active: true,
    source: "fallback",
  };
}

async function getFirstActiveProductsFromSupabase() {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("products")
    .select(productColumns)
    .eq("active", true)
    .order("category", { ascending: true })
    .order("name", { ascending: true })
    .limit(4);

  if (error) {
    throw error;
  }

  return (data ?? []).map(mapRowToProduct);
}

function fallbackResult<T>(data: T, error: string | null): ProductQueryResult<T> {
  return {
    data,
    error,
    source: "fallback",
  };
}

function getFallbackProducts() {
  return fallbackProducts.map(mapFallbackProduct);
}

function getFallbackProduct(slug: string) {
  const product = getFallbackProductBySlug(slug);

  return product ? mapFallbackProduct(product) : null;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unable to load products.";
}

export async function getProducts(): Promise<
  ProductQueryResult<CatalogueProduct[]>
> {
  if (!supabase) {
    return fallbackResult(getFallbackProducts(), "Supabase is not configured.");
  }

  try {
    const { data, error } = await supabase
      .from("products")
      .select(productColumns)
      .eq("active", true)
      .order("category", { ascending: true })
      .order("name", { ascending: true });

    if (error) {
      return fallbackResult(getFallbackProducts(), error.message);
    }

    return {
      data: (data ?? []).map(mapRowToProduct),
      error: null,
      source: "supabase",
    };
  } catch (error) {
    return fallbackResult(getFallbackProducts(), getErrorMessage(error));
  }
}

export async function getFeaturedProducts(): Promise<
  ProductQueryResult<CatalogueProduct[]>
> {
  if (!supabase) {
    return fallbackResult(
      getFallbackProducts().slice(0, 4),
      "Supabase is not configured.",
    );
  }

  try {
    const { data, error } = await supabase
      .from("products")
      .select(productColumns)
      .eq("active", true)
      .eq("featured", true)
      .order("name", { ascending: true })
      .limit(4);

    if (error) {
      return fallbackResult(getFallbackProducts().slice(0, 4), error.message);
    }

    if (!data || data.length === 0) {
      const activeProducts = await getFirstActiveProductsFromSupabase();

      return {
        data: activeProducts ?? getFallbackProducts().slice(0, 4),
        error: null,
        source: "supabase",
      };
    }

    return {
      data: (data ?? []).map(mapRowToProduct),
      error: null,
      source: "supabase",
    };
  } catch (error) {
    return fallbackResult(
      getFallbackProducts().slice(0, 4),
      getErrorMessage(error),
    );
  }
}

export async function getProductBySlug(
  slug: string,
): Promise<ProductQueryResult<CatalogueProduct | null>> {
  if (!supabase) {
    return fallbackResult(
      getFallbackProduct(slug),
      "Supabase is not configured.",
    );
  }

  try {
    const { data, error } = await supabase
      .from("products")
      .select(productColumns)
      .eq("active", true)
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      return fallbackResult(getFallbackProduct(slug), error.message);
    }

    return {
      data: data ? mapRowToProduct(data) : null,
      error: null,
      source: "supabase",
    };
  } catch (error) {
    return fallbackResult(getFallbackProduct(slug), getErrorMessage(error));
  }
}

export async function getProductCategories(): Promise<ProductQueryResult<string[]>> {
  const productsResult = await getProducts();
  const categories = getOrderedProductCategories(
    productsResult.data.map((product) => product.category),
  );

  return {
    data:
      categories.length > 0
        ? categories
        : getOrderedProductCategories(fallbackCategories),
    error: productsResult.error,
    source: productsResult.source,
  };
}

export async function getProductSlugs() {
  const productsResult = await getProducts();

  return productsResult.data.map((product) => ({
    slug: product.slug,
  }));
}
