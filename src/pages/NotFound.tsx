import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../components/layout/Page";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <Page>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-sesame-900/10 bg-cream-50 p-10 shadow-soft">
          <div className="font-display text-4xl">Page not found</div>
          <p className="mt-3 text-sm text-sesame-900/70">
            If you're scanning a QR for the menu, make sure it points to <span className="font-semibold">#/menu</span>.
          </p>
          <div className="mt-6">
            <Link to="/menu">
              <Button>Open menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
}
