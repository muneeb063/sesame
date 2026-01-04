import React, { useMemo, useState } from "react";
import { Page } from "../components/layout/Page";
import { SectionTitle } from "../components/ui/SectionTitle";
import { FiltersBar, type TagFilter } from "../components/menu/FiltersBar";
import { CategoryChips, CategorySidebar } from "../components/menu/CategoryNav";
import { MenuGrid } from "../components/menu/MenuGrid";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menu";
import type { MenuItem } from "../data/types";
import { MenuItemModal } from "../components/menu/MenuItemModal";
import { Button } from "../components/ui/Button";
import { Phone } from "lucide-react";
import { useBranch } from "../state/branch";

function matchesTag(item: MenuItem, tag: TagFilter) {
  if (tag === "All") return true;
  return item.tags?.includes(tag) ?? false;
}

export function MenuPage() {
  const { branch } = useBranch();
  const callHref = `tel:${branch.phone.replace(/\s+/g, "")}`;

  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<TagFilter>("All");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter((i) => {
      const text = `${i.name} ${i.description ?? ""}`.toLowerCase();
      const okQ = q.length === 0 || text.includes(q);
      const okTag = matchesTag(i, tag);
      const okCat = activeCategoryId === "all" || i.categoryId === activeCategoryId;
      return okQ && okTag && okCat;
    });
  }, [activeCategoryId, query, tag]);

  return (
    <Page>
      <section className="border-b border-sesame-900/10 bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-7 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <SectionTitle
                eyebrow="MENU"
                title="Designed for QR. Built for readability."
                subtitle="Browse by category, search, and open any item for details. Pricing is in PKR."
              />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-sesame-900/10 bg-cream-50 px-4 py-2 text-sm text-sesame-900/70">
                  {branch.name} · {branch.city}
                </div>
                <a href={callHref}>
                  <Button variant="outline">
                    <Phone className="h-4 w-4" /> Call for reservation
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-sesame-900/10 bg-gradient-to-b from-sesame-900 to-sesame-800 p-6 text-cream-100 shadow-soft">
                <div className="text-xs font-semibold tracking-[0.22em] text-cream-100/70">BRANCH</div>
                <div className="mt-2 font-display text-2xl">{branch.name}</div>
                <div className="mt-2 text-sm text-cream-100/70">{branch.addressLine}</div>

                <div className="mt-5 rounded-2xl border border-cream-100/15 bg-black/20 p-4">
                  <div className="text-xs font-semibold tracking-[0.22em] text-cream-100/70">HOURS</div>
                  <div className="mt-2 space-y-2">
                    {branch.hours.map((h) => (
                      <div key={h.label} className="flex items-center justify-between text-sm">
                        <span className="text-cream-100/70">{h.days}</span>
                        <span className="font-semibold">
                          {h.open} – {h.close}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 text-xs text-cream-100/55">
                  Prices and availability may vary by branch.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <FiltersBar query={query} setQuery={setQuery} tag={tag} setTag={setTag} />
          </div>

          <div className="mt-6">
            <CategoryChips
              categories={MENU_CATEGORIES}
              activeId={activeCategoryId}
              setActiveId={setActiveCategoryId}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <CategorySidebar
              categories={MENU_CATEGORIES}
              activeId={activeCategoryId}
              setActiveId={setActiveCategoryId}
            />
          </div>

          <div className="lg:col-span-8">
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-8 text-sm text-sesame-900/70 shadow-soft">
                No items match your search. Try removing filters.
              </div>
            ) : (
              <MenuGrid
                categories={activeCategoryId === "all" ? MENU_CATEGORIES : MENU_CATEGORIES.filter((c) => c.id === activeCategoryId)}
                items={filtered}
                activeCategoryId={activeCategoryId}
                onItemClick={(item) => setSelected(item)}
              />
            )}
          </div>
        </div>
      </section>

      <MenuItemModal item={selected} onClose={() => setSelected(null)} />
    </Page>
  );
}
