import { Link } from "react-router-dom";
import { SITE, SERVICES } from "../../mocks/siteData";

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer trust band */}
      <div
        className="py-16 lg:py-20"
        style={{
          background: "linear-gradient(135deg, #C4902A 0%, #b07e20 60%, #8a6118 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div>
              <p className="text-white/65 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Your Comfort Experts</p>
              <h3
                className="text-white font-serif text-2xl lg:text-3xl leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Etobicoke Most Trusted HVAC Team
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { val: "10+", lbl: "Years Serving" },
                { val: "5★", lbl: "Google Rated" },
                { val: "24/7", lbl: "Emergency" },
              ].map((s) => (
                <div key={s.lbl}>
                  <p
                    className="text-white font-serif font-bold text-3xl leading-none mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-white/60 text-[11px] tracking-wide uppercase">{s.lbl}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-end">
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#C4902A] font-bold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill text-base"></i>
                {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 hover:border-white/70 transition-colors whitespace-nowrap text-sm"
              >
                Book Service
                <i className="ri-arrow-right-line text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div
        className="text-white pt-16 pb-0"
        style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #141414 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/[0.07]">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src={SITE.logoFooter}
                alt={SITE.name}
                className="h-12 w-auto object-contain mb-5"
                style={{ mixBlendMode: "screen" }}
              />
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                Etobicoke trusted HVAC contractor. Residential, commercial, and condo specialists for over a decade.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/45 hover:text-white hover:border-white/40 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-sm"></i>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "All Services", href: "/services" },
                  { label: "Repair Services", href: "/repair-services" },
                  { label: "Installation", href: "/installation" },
                  { label: "Maintenance", href: "/maintenance" },
                  { label: "Heat Pumps", href: "/heat-pumps" },
                  { label: "Condo HVAC", href: "/condos" },
                  { label: "Fan Coils", href: "/fan-coils" },
                ].map((s) => (
                  <li key={s.href}>
                    <Link
                      to={s.href}
                      className="text-white/40 text-sm hover:text-[#C4902A] transition-colors leading-relaxed"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact Us", href: "/contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-white/40 text-sm hover:text-[#C4902A] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-[0.2em] uppercase mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${SITE.phonePlain}`} className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group">
                    <i className="ri-phone-line mt-0.5 text-[#C4902A] shrink-0"></i>
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors">
                    <i className="ri-mail-line mt-0.5 text-[#C4902A] shrink-0"></i>
                    <span>{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors">
                    <i className="ri-map-pin-line mt-0.5 text-[#C4902A] shrink-0"></i>
                    <span>{SITE.address}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/40 text-sm">
                  <i className="ri-time-line mt-0.5 text-[#C4902A] shrink-0"></i>
                  <div>
                    <p>{SITE.hours.weekday}</p>
                    <p>{SITE.hours.weekend}</p>
                    <p className="text-[#C4902A] font-medium">{SITE.hours.emergency}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 text-xs">
            <p>
              Copyright &copy; {new Date().getFullYear()} Park Lawn Heating and Cooling Inc. — All Rights Reserved.
            </p>
            <div className="flex gap-5">
              <span className="hover:text-white/50 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white/50 transition-colors cursor-pointer">Terms &amp; Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
