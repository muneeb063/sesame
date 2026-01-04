import React from "react";
import type { MenuItem } from "../../data/types";
import { Pill } from "../ui/Pill";
import { getMenuImage } from "../../lib/menuImage";

export function MenuItemCard({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-3xl border border-sesame-900/10 bg-cream-50 p-5 shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-sesame-900/10 bg-white/60">
          <img
            src={getMenuImage(item)}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-display text-xl md:text-2xl leading-tight text-sesame-900 line-clamp-2">
                {item.name}
              </div>
            </div>
            <div className="shrink-0 text-right text-base font-semibold text-sesame-900">
              {item.price.currency} {item.price.amount.toLocaleString()}
            </div>
          </div>

          {item.description ? (
            <p className="mt-2 line-clamp-2 text-[14px] md:text-sm leading-relaxed text-sesame-900/70">
              {item.description}
            </p>
          ) : null}

          {(item.tags?.length ?? 0) > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags!.slice(0, 3).map((t) => (
                <Pill key={t} tone={t === "Signature" ? "gold" : t === "Veg" ? "veg" : "default"}>
                  {t}
                </Pill>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  );
}
