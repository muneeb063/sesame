import React from "react";
import { Instagram, MapPin, Phone } from "lucide-react";
import { SITE } from "../../data/site";
import { useBranch } from "../../state/branch";

export function Footer() {
  const { branch } = useBranch();
  const callHref = `tel:${branch.phone.replace(/\s+/g, "")}`;

  return (
    <footer className="border-t border-sesame-900/10 bg-cream-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div className="space-y-3">
          <div className="font-display text-2xl text-sesame-900">{SITE.brand}</div>
          <p className="text-sm leading-relaxed text-sesame-900/70">{SITE.tagline}</p>
          <p className="text-xs text-sesame-900/50">© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</p>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold tracking-[0.18em] text-gold-600">BRANCH</div>
          <div className="text-sm font-semibold">{branch.name}</div>
          <div className="flex items-start gap-2 text-sm text-sesame-900/70">
            <MapPin className="mt-0.5 h-4 w-4" />
            <span>{branch.addressLine}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold tracking-[0.18em] text-gold-600">CONTACT</div>
          <a href={callHref} className="flex items-center gap-2 text-sm font-semibold hover:underline">
            <Phone className="h-4 w-4" /> {branch.phone}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:underline"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>

          <div className="text-xs text-sesame-900/55">
            Reservations are currently on call. Online ordering can be added later.
          </div>
        </div>
      </div>
    </footer>
  );
}
