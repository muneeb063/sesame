import React from "react";
import { Page } from "../components/layout/Page";
import { Hero } from "../components/home/Hero";
import { SignaturePreview } from "../components/home/SignaturePreview";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, MapPin } from "lucide-react";

export function HomePage() {
  return (
    <Page>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="HOW IT WORKS"
              title="Scan. Browse. Call."
              subtitle="This site is designed for QR menus: fast, readable, and mobile-first—without needing a backend."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                to="/menu"
                className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-5 shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift"
              >
                <div className="text-xs font-semibold tracking-[0.18em] text-gold-600">01</div>
                <img src="/assets/menu/placeholders/breakfast_eggs.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 opacity-[0.10] blur-[0.3px]" />
                <div className="mt-2 font-display text-2xl">Menu</div>
                <div className="mt-2 text-sm text-sesame-900/70">Search, filters, and big readable cards.</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  Open <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <a
                href="./menu.pdf"
                className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-5 shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift"
              >
                <div className="text-xs font-semibold tracking-[0.18em] text-gold-600">02</div>
                <img src="/assets/menu/placeholders/sweet.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 opacity-[0.10] blur-[0.3px]" />
                <div className="mt-2 font-display text-2xl">PDF</div>
                <div className="mt-2 text-sm text-sesame-900/70">One-tap menu PDF fallback.</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  View <FileText className="h-4 w-4" />
                </div>
              </a>

              <Link
                to="/locations"
                className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-5 shadow-soft transition hover:-translate-y-[1px] hover:shadow-lift"
              >
                <div className="text-xs font-semibold tracking-[0.18em] text-gold-600">03</div>
                <img src="/assets/menu/placeholders/coffee_hot.png" alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-12 opacity-[0.10] blur-[0.3px]" />
                <div className="mt-2 font-display text-2xl">Branches</div>
                <div className="mt-2 text-sm text-sesame-900/70">Addresses, hours, and map links.</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  Open <MapPin className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SignaturePreview />
    </Page>
  );
}
