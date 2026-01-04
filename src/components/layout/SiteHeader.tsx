import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MapPin, Menu as MenuIcon, Phone, X } from "lucide-react";
import { cn } from "../../lib/cn";
import mark from "../../assets/sesame-mark.png";
import word from "../../assets/sesame-word.png";
import { Button } from "../ui/Button";
import { BRANCHES } from "../../data/branches";
import { useBranch } from "../../state/branch";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
];

function NavPill({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "rounded-full px-4 py-2 text-sm font-medium transition",
          isActive ? "bg-sesame-900 text-cream-100" : "text-sesame-900/80 hover:bg-sesame-900/5",
        )
      }
    >
      {label}
    </NavLink>
  );
}

export function Header() {
  const { branch, branchId, setBranchId } = useBranch();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 80], [0, -4]);
  const bg = useTransform(scrollY, [0, 80], ["rgba(247,241,228,0.55)", "rgba(247,241,228,0.9)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(11,36,29,0.10)", "rgba(11,36,29,0.18)"]);

  const callHref = useMemo(() => `tel:${branch.phone.replace(/\s+/g, "")}`, [branch.phone]);

  return (
    <motion.header
      style={{ y, backgroundColor: bg, borderColor: border }}
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={mark} alt="Sesame" className="h-9 w-9" />
          <img
            src={word}
            alt="Sesame"
            className="hidden h-6 w-auto opacity-90 sm:block"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-sesame-900/15 bg-cream-50/70 p-1 sm:flex">
          {navItems.map((n) => (
            <NavPill key={n.to} to={n.to} label={n.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <div className="relative">
            <select
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              className="h-11 cursor-pointer appearance-none rounded-full border border-sesame-900/15 bg-cream-50/70 pl-11 pr-10 text-sm font-medium text-sesame-900 shadow-soft transition hover:bg-cream-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
              aria-label="Choose branch"
            >
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sesame-900/55" />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-sesame-900/55">
              ▾
            </span>
          </div>

          <a href={callHref}>
            <Button className="h-11" size="md">
              <Phone className="h-4 w-4" />
              Call
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 sm:hidden">
          <a href={callHref} className="rounded-full border border-sesame-900/15 bg-cream-50/70 p-2">
            <Phone className="h-5 w-5 text-sesame-900/80" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-sesame-900/15 bg-cream-50/70 p-2"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-sesame-900/10 bg-cream-100 sm:hidden"
          >
            <div className="mx-auto max-w-6xl space-y-3 px-4 py-4">
              <div className="rounded-2xl border border-sesame-900/10 bg-cream-50 p-3">
                <div className="mb-2 text-xs font-semibold tracking-[0.18em] text-gold-600">
                  BRANCH
                </div>
                <select
                  value={branchId}
                  onChange={(e) => setBranchId(e.target.value)}
                  className="h-11 w-full rounded-xl border border-sesame-900/15 bg-white/70 px-3 text-sm font-medium"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                {navItems.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="rounded-2xl border border-sesame-900/10 bg-cream-50 px-4 py-3 text-sm font-semibold text-sesame-900"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>

              <a href={callHref} className="block">
                <Button className="w-full">Call for reservation</Button>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
