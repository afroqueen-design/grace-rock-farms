export const orderedProductCategories = [
  "Vegetable Seedlings",
  "Fruit Tree",
  "Potato",
];

const categoryAliases = new Map(
  [
    ["Vegetable", "Vegetable Seedlings"],
    ["Vegetable Seedlings", "Vegetable Seedlings"],
    ["Fruit Tree", "Fruit Tree"],
    ["Fruit Trees", "Fruit Tree"],
    ["Potato", "Potato"],
    ["Seed Potatoes", "Potato"],
  ].map(([alias, category]) => [alias.toLowerCase(), category]),
);

export function normalizeProductCategory(
  category: string | null | undefined,
) {
  if (typeof category !== "string") {
    return null;
  }

  const trimmedCategory = category.trim();

  if (!trimmedCategory || trimmedCategory.toLowerCase() === "nan") {
    return null;
  }

  return categoryAliases.get(trimmedCategory.toLowerCase()) ?? trimmedCategory;
}

export function getOrderedProductCategories(categories: string[]) {
  const categorySet = new Set(
    categories
      .map((category) => normalizeProductCategory(category))
      .filter((category): category is string => Boolean(category)),
  );
  const orderedCategories = orderedProductCategories.filter((category) =>
    categorySet.has(category),
  );
  const extraCategories = Array.from(categorySet)
    .filter((category) => !orderedProductCategories.includes(category))
    .sort((firstCategory, secondCategory) =>
      firstCategory.localeCompare(secondCategory),
    );

  return [...orderedCategories, ...extraCategories];
}
