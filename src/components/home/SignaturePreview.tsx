import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MENU_ITEMS } from "../../data/menu";
import { getMenuImage } from "../../lib/menuImage";
import { Pill } from "../ui/Pill";
import { SectionTitle } from "../ui/SectionTitle";

export function SignaturePreview() {
  const picks = useMemo(() => {
    const priority = ["Signature", "Popular"];
    const filtered = MENU_ITEMS.filter((i) => i.tags?.some((t) => priority.includes(t)));
    return filtered.slice(0, 6);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="flex items-end justify-between gap-6">
        <SectionTitle
          eyebrow="THE MENU"
          title="A few signature picks."
          subtitle="A curated preview. Browse the full menu by category, search, and filters."
        />
        <Link
          to="/menu"
          className="hidden items-center gap-2 rounded-full border border-sesame-900/15 bg-cream-50 px-4 py-2 text-sm font-semibold text-sesame-900 shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift sm:inline-flex"
        >
          Full menu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl border border-sesame-900/10 bg-cream-50 p-5 shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-sesame-100">
              <img
                src={getMenuImage(item)}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sesame-950/5 to-transparent" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-2xl leading-tight">{item.name}</div>
                {item.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-sesame-900/70">{item.description}</p>
                ) : null}
              </div>
              <div className="text-right text-sm font-semibold">
                {item.price.currency} {item.price.amount.toLocaleString()}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {(item.tags || []).slice(0, 2).map((t) => (
                <Pill key={t} tone={t === "Signature" ? "gold" : t === "Veg" ? "veg" : "default"}>
                  {t}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:hidden">
        <Link
          to="/menu"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sesame-900/15 bg-cream-50 px-4 py-3 text-sm font-semibold text-sesame-900 shadow-soft"
        >
          Full menu <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
