import React, { useEffect, useMemo, useRef } from "react";
import type { MenuCategory, MenuItem } from "../../data/types";
import { MenuItemCard } from "./MenuItemCard";

export function MenuGrid({
  categories,
  items,
  activeCategoryId,
  onItemClick,
}: {
  categories: MenuCategory[];
  items: MenuItem[];
  activeCategoryId: string;
  onItemClick: (item: MenuItem) => void;
}) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (activeCategoryId === "all") return;
    const el = sectionRefs.current[activeCategoryId];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeCategoryId]);

  const itemsByCat = useMemo(() => {
    const map = new Map<string, MenuItem[]>();
    for (const c of categories) map.set(c.id, []);
    for (const item of items) {
      if (!map.has(item.categoryId)) map.set(item.categoryId, []);
      map.get(item.categoryId)!.push(item);
    }
    return map;
  }, [categories, items]);

  return (
    <div className="space-y-12">
      {categories.map((c) => {
        const list = itemsByCat.get(c.id) || [];
        if (list.length === 0) return null;

        return (
          <div
            key={c.id}
            ref={(el) => {
              sectionRefs.current[c.id] = el;
            }}
            className="scroll-mt-28"
          >
            <div className="mb-5">
              <div className="font-display text-3xl leading-tight">{c.title}</div>
              {c.subtitle ? <div className="mt-1 text-sm text-sesame-900/70">{c.subtitle}</div> : null}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {list.map((item) => (
                <MenuItemCard key={item.id} item={item} onClick={() => onItemClick(item)} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
