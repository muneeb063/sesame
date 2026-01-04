import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { MenuItem } from "../../data/types";
import { Pill } from "../ui/Pill";
import { getMenuImage } from "../../lib/menuImage";

export function MenuItemModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl overflow-hidden rounded-3xl border border-sesame-900/10 bg-cream-50 shadow-lift"
          >
            <div className="relative h-44 w-full overflow-hidden bg-white/60">
              <img
                src={getMenuImage(item)}
                alt={item.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-sesame-900/10 p-6">
              <div>
                <div className="font-display text-3xl leading-tight">{item.name}</div>
                <div className="mt-2 text-sm text-sesame-900/70">
                  {item.price.currency} {item.price.amount.toLocaleString()}
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-sesame-900/10 bg-white/60 p-2 transition hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 p-6">
              {item.description ? (
                <p className="text-sm leading-relaxed text-sesame-900/75">{item.description}</p>
              ) : null}

              {item.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <Pill key={t} tone={t === "Signature" ? "gold" : t === "Veg" ? "veg" : "default"}>
                      {t}
                    </Pill>
                  ))}
                </div>
              ) : null}

              {item.note ? (
                <div className="rounded-2xl border border-sesame-900/10 bg-white/60 p-4 text-sm text-sesame-900/70">
                  {item.note}
                </div>
              ) : null}

              <div className="text-xs text-sesame-900/55">
                Online ordering can be added later. For now, call to reserve or confirm availability.
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
