import { Link } from "react-router-dom";
import { contactDetails, navigationItems, socialPlaceholders } from "../../data/site";
import { BrandMark } from "../ui/BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <div className="container-shell py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <BrandMark tone="dark" />
            <span className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white">Diego Carreras</span>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {navigationItems.map((item) => (
              <Link key={item.href} className="text-[0.66rem] uppercase tracking-[0.14em] text-white/70 hover:text-white" to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 text-[0.66rem] uppercase tracking-[0.14em] text-white/70">
            {socialPlaceholders.map((social) => (
              <span key={social.label}>{social.label}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-[0.66rem] uppercase tracking-[0.12em] text-white/54 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Diego Carreras. All rights reserved.</p>
          <p>
            <a className="hover:text-white" href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
