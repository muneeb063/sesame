import React from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/Home";
import { MenuPage } from "./pages/Menu";
import { LocationsPage } from "./pages/Locations";
import { NotFoundPage } from "./pages/NotFound";
import { BranchProvider } from "./state/branch";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <HashRouter>
      <BranchProvider>
        <SiteLayout>
          <AnimatedRoutes />
        </SiteLayout>
      </BranchProvider>
    </HashRouter>
  );
}
