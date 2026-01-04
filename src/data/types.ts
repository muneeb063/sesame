export type Money = {
  currency: "PKR";
  amount: number;
};

export type MenuTag = "Signature" | "Popular" | "New" | "Veg";

export type MenuCategoryId =
  | "breakfast_eggs"
  | "breakfast_bowls"
  | "soups"
  | "salads"
  | "bagels_croissants"
  | "sandwiches_burgers"
  | "sweet"
  | "small_plates"
  | "bowls"
  | "main_entrees"
  | "pizza"
  | "pasta"
  | "coffee_hot"
  | "coffee_cold"
  | "smoothies"
  | "juices"
  | "chef_special";

export type MenuCategory = {
  id: MenuCategoryId;
  title: string;
  subtitle?: string;
};

export type MenuItem = {
  id: string;
  categoryId: MenuCategoryId;
  name: string;
  description?: string;
  price: Money;
  tags?: MenuTag[];
  note?: string;
  /** Optional image url (public path). If omitted, UI falls back to category placeholder. */
  image?: string;
  /** Optional: for future ordering rules (e.g., only some branches carry an item) */
  branchIds?: string[];
};
