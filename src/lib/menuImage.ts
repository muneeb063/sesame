import type { MenuItem } from "../data/types";

/**
 * Resolve the best image for a menu item.
 * - If the item provides an explicit image, use it.
 * - Otherwise, fall back to a category placeholder.
 */
export function getMenuImage(item: MenuItem): string {
  return item.image ?? `/assets/menu/placeholders/${item.categoryId}.png`;
}
