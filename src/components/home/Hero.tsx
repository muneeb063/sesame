import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { SITE } from "../../data/site";
import { useBranch } from "../../state/branch";

const slides = [
  {
    kicker: "Breakfast",
    title: "Crafted with calm precision.",
    copy: "Warm plates, clean flavors, and the kind of morning you remember.",
  },
  {
    kicker: "Brunch",
    title: "Slow, bright, and beautifully balanced.",
    copy: "Signature bowls, melts, and a menu designed for sharing.",
  },
  {
    kicker: "Coffee",
    title: "Espresso with intention.",
    copy: "House lattes, iced specials, and a quiet place to reset.",
  },
];

export function Hero() {
  const { branch } = useBranch();
  const callHref = useMemo(() => `tel:${branch.phone.replace(/\s+/g, "")}`, [branch.phone]);

  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % slides.length), 5200);
    return () => window.clearInterval(id);
  }, []);

  const s = slides[i];

  return (
    <section className="relative overflow-hidden border-b border-sesame-900/10 bg-cream-100">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sesame-900/10 bg-cream-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-sesame-900/70">
              {SITE.brand.toUpperCase()} · {branch.city.toUpperCase()}
            </div>

            <div className="mt-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={s.kicker}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  <div className="text-sm font-semibold tracking-[0.22em] text-gold-600">
                    {s.kicker.toUpperCase()}
                  </div>
                  <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] text-sesame-900 sm:text-6xl">
                    {s.title}
                  </h1>
                  <p className="max-w-xl text-base leading-relaxed text-sesame-900/75 sm:text-lg">
                    {s.copy} Scan, browse, and call to reserve.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/menu">
                <Button size="lg">
                  View menu <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href={callHref}>
                <Button size="lg" variant="outline">
                  <Phone className="h-4 w-4" />
                  Call for reservation
                </Button>
              </a>
              <Link to="/locations">
                <Button size="lg" variant="ghost">
                  <MapPin className="h-4 w-4" />
                  Locations
                </Button>
              </Link>
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                <Button size="lg" variant="ghost">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Button>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className="group rounded-full p-1"
                >
                  <span
                    className={`block h-1.5 w-7 rounded-full transition ${
                      idx === i ? "bg-sesame-900" : "bg-sesame-900/20 group-hover:bg-sesame-900/35"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl border border-sesame-900/10 bg-gradient-to-b from-sesame-900 to-sesame-800 shadow-soft">
              <div className="absolute inset-0 opacity-95" />
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold-500/30 blur-3xl" />
              <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-cream-50/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between p-7 text-cream-100">
                <div className="space-y-3">
                  <div className="text-xs font-semibold tracking-[0.22em] text-cream-100/70">
                    TODAY
                  </div>
                  <div className="font-display text-3xl leading-tight">
                    {branch.name}
                  </div>
                  <p className="text-sm leading-relaxed text-cream-100/70">{branch.addressLine}</p>
                </div>

                <div className="mt-6 rounded-2xl border border-cream-100/15 bg-black/20 p-4">
                  <div className="text-xs font-semibold tracking-[0.22em] text-cream-100/70">
                    HOURS
                  </div>
                  <div className="mt-2 space-y-2">
                    {branch.hours.slice(0, 2).map((h) => (
                      <div key={h.label} className="flex items-center justify-between text-sm">
                        <span className="text-cream-100/75">{h.days}</span>
                        <span className="font-semibold">
                          {h.open} – {h.close}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={callHref} className="flex-1">
                      <Button className="w-full bg-cream-100 text-sesame-900 hover:bg-cream-200">
                        Call
                      </Button>
                    </a>
                    <a
                      href={branch.mapsUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full" variant="outline">
                        Map
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="mt-6 text-xs text-cream-100/55">
                  Tip: For QR menus on GitHub Pages, link directly to <span className="font-semibold">#/menu</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative baseline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sesame-900/20 to-transparent" />
    </section>
  );
}
