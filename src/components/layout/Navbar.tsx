import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navigationItems } from "../../data/site";
import { getLocalizedText } from "../../i18n";
import { useLanguage } from "../../i18n/LanguageProvider";
import { cn } from "../../lib/utils";
import { BrandMark } from "../ui/BrandMark";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal">
      <div className="container-shell">
        <div className="flex min-h-14 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            <BrandMark tone="dark" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white">Diego Carreras</span>
          </Link>

          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center border border-white/20 px-3 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
          >
            Menu
          </button>

          <div
            id="site-navigation"
            className={cn(
              "absolute left-0 top-full w-full border-b border-white/10 bg-charcoal px-4 py-4 lg:static lg:w-auto lg:border-none lg:px-0 lg:py-0",
              isOpen ? "block" : "hidden lg:block"
            )}
          >
            <nav aria-label="Primary navigation" className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "text-[0.66rem] font-medium uppercase tracking-[0.14em] text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal",
                      isActive && "text-white"
                    )
                  }
                >
                  {getLocalizedText(item.label, language)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
