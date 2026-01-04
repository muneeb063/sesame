import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";

export type TagFilter = "All" | "Signature" | "Popular" | "Veg" | "New";

export function FiltersBar({
  query,
  setQuery,
  tag,
  setTag,
  className,
}: {
  query: string;
  setQuery: (v: string) => void;
  tag: TagFilter;
  setTag: (v: TagFilter) => void;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-[1fr_auto_auto]", className)}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sesame-900/45" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search menu…"
          className="h-12 w-full rounded-2xl border border-sesame-900/10 bg-cream-50 pl-11 pr-4 text-sm shadow-soft outline-none transition focus:border-sesame-900/20 focus:ring-2 focus:ring-gold-500/30"
        />
      </div>

      <div className="relative">
        <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sesame-900/45" />
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value as TagFilter)}
          className="h-12 w-full cursor-pointer appearance-none rounded-2xl border border-sesame-900/10 bg-cream-50 pl-11 pr-10 text-sm font-medium shadow-soft outline-none transition hover:bg-cream-100 focus:border-sesame-900/20 focus:ring-2 focus:ring-gold-500/30 sm:w-48"
          aria-label="Filter"
        >
          <option value="All">All items</option>
          <option value="Signature">Signature</option>
          <option value="Popular">Popular</option>
          <option value="Veg">Veg</option>
          <option value="New">New</option>
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-sesame-900/55">
          ▾
        </span>
      </div>

      <a href="./menu.pdf" className="sm:justify-self-end">
        <Button variant="outline" className="h-12 w-full sm:w-auto">
          View PDF
        </Button>
      </a>
    </div>
  );
}
