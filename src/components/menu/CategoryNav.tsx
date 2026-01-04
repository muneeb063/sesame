import React from "react";
import { cn } from "../../lib/cn";
import type { MenuCategory } from "../../data/types";

export function CategorySidebar({
  categories,
  activeId,
  setActiveId,
}: {
  categories: MenuCategory[];
  activeId: string;
  setActiveId: (id: string) => void;
}) {
  return (
    <div className="sticky top-[92px] hidden max-h-[calc(100vh-120px)] overflow-auto pr-2 lg:block">
      <div className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-3 shadow-soft">
        <button
          onClick={() => setActiveId("all")}
          className={cn(
            "w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
            activeId === "all" ? "bg-sesame-900 text-cream-100" : "hover:bg-sesame-900/5",
          )}
        >
          All categories
        </button>

        <div className="mt-2 space-y-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={cn(
                "w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",
                activeId === c.id ? "bg-sesame-900 text-cream-100" : "hover:bg-sesame-900/5",
              )}
            >
              {c.title}
              {c.subtitle ? <div className="mt-1 text-xs font-normal opacity-75">{c.subtitle}</div> : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CategoryChips({
  categories,
  activeId,
  setActiveId,
}: {
  categories: MenuCategory[];
  activeId: string;
  setActiveId: (id: string) => void;
}) {
  return (
    <div className="lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Chip active={activeId === "all"} onClick={() => setActiveId("all")}>
          All
        </Chip>
        {categories.map((c) => (
          <Chip key={c.id} active={activeId === c.id} onClick={() => setActiveId(c.id)}>
            {c.title.replace("Breakfast — ", "").replace("Hand‑Tossed ", "")}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold shadow-soft transition",
        active
          ? "border-sesame-900 bg-sesame-900 text-cream-100"
          : "border-sesame-900/15 bg-cream-50 text-sesame-900 hover:bg-cream-100",
      )}
    >
      {children}
    </button>
  );
}
