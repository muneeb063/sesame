import React from "react";
import { Page } from "../components/layout/Page";
import { SectionTitle } from "../components/ui/SectionTitle";
import { BRANCHES } from "../data/branches";
import { Button } from "../components/ui/Button";
import { MapPin, Phone } from "lucide-react";
import { useBranch } from "../state/branch";

export function LocationsPage() {
  const { branchId, setBranchId } = useBranch();

  return (
    <Page>
      <section className="border-b border-sesame-900/10 bg-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <SectionTitle
            eyebrow="LOCATIONS"
            title="Multiple branches. One standard."
            subtitle="Select a branch for quick call and map access. Update addresses and numbers in src/data/branches.ts."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {BRANCHES.map((b) => {
            const callHref = `tel:${b.phone.replace(/\s+/g, "")}`;
            return (
              <div
                key={b.id}
                className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-3xl leading-tight">{b.name}</div>
                    <div className="mt-2 flex items-start gap-2 text-sm text-sesame-900/70">
                      <MapPin className="mt-0.5 h-4 w-4" />
                      <span>{b.addressLine}</span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setBranchId(b.id)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        branchId === b.id
                          ? "border-sesame-900 bg-sesame-900 text-cream-100"
                          : "border-sesame-900/15 bg-white/60 hover:bg-white"
                      }`}
                    >
                      {branchId === b.id ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-sesame-900/10 bg-white/60 p-4">
                  <div className="text-xs font-semibold tracking-[0.18em] text-gold-600">HOURS</div>
                  <div className="mt-2 space-y-2">
                    {b.hours.map((h) => (
                      <div key={h.label} className="flex items-center justify-between text-sm">
                        <span className="text-sesame-900/70">{h.days}</span>
                        <span className="font-semibold">
                          {h.open} – {h.close}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={callHref}>
                    <Button variant="outline">
                      <Phone className="h-4 w-4" /> Call
                    </Button>
                  </a>
                  {b.mapsUrl ? (
                    <a href={b.mapsUrl} target="_blank" rel="noreferrer">
                      <Button>
                        <MapPin className="h-4 w-4" /> Open map
                      </Button>
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
