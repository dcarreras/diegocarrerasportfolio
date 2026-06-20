import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
