import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { SITE } from "../../mocks/siteData";

interface ServiceLink { label: string; slug: string; }
interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; icon?: string }[];
  megaMenu?: boolean;
}

const CITY_SERVICES: ServiceLink[] = [
  { label: "AC Repair", slug: "air-conditioning-repair" },
  { label: "Furnace Repair", slug: "furnace-repair" },
  { label: "Heating & Cooling", slug: "heating-and-cooling-service" },
  { label: "Residential HVAC", slug: "residential-hvac-services" },
  { label: "Commercial HVAC", slug: "commercial-hvac-services" },
  { label: "Boiler Services", slug: "boiler-services" },
  { label: "Water Heater", slug: "water-heater-services" },
  { label: "Gas Line", slug: "gas-line-services" },
  { label: "Pool Heater", slug: "pool-heater-services" },
];

const CITIES = [
  { name: "Etobicoke", slug: "etobicoke", icon: "ri-map-pin-2-line", note: "Primary Area" },
  { name: "Toronto", slug: "toronto", icon: "ri-building-4-line", note: "Full Coverage" },
  { name: "Mississauga", slug: "mississauga", icon: "ri-map-pin-line", note: "Extended Area" },
];

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services", icon: "ri-list-check" },
      { label: "Repair Services", href: "/repair-services", icon: "ri-tools-line" },
      { label: "Installation", href: "/installation", icon: "ri-settings-3-line" },
      { label: "Maintenance", href: "/maintenance", icon: "ri-shield-check-line" },
      { label: "Heat Pumps", href: "/heat-pumps", icon: "ri-contrast-2-line" },
    ],
  },
  {
    label: "Condos",
    href: "/condos",
    children: [
      { label: "Condo HVAC", href: "/condos", icon: "ri-building-2-line" },
      { label: "Fan Coils", href: "/fan-coils", icon: "ri-cpu-line" },
    ],
  },
  { label: "Service Areas", href: "/service-areas", megaMenu: true },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const PROMO_HEIGHT = 34;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileCityExpanded, setMobileCityExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      {/* Promo strip */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#C4902A] text-white text-xs py-2 text-center tracking-wide font-medium">
        <strong>Save up to $7,500 in Heat Pump Rebates!*</strong> —&nbsp;
        <a
          href={`tel:${SITE.phonePlain}`}
          className="underline font-bold whitespace-nowrap hover:text-white/80 transition-colors"
        >
          Call {SITE.phone}
        </a>
      </div>

      {/* Main header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0C0C0C] backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/40"
            : "bg-gradient-to-b from-black/70 via-black/40 to-transparent"
        }`}
        style={{ top: `${PROMO_HEIGHT}px` }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px] lg:h-[76px]">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src={SITE.logoFooter}
              alt={SITE.name}
              className="h-12 lg:h-14 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
              style={{ mixBlendMode: "screen" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              const hasChildren = item.children && item.children.length > 0;
              const isMega = item.megaMenu;
              const isOpen = openDropdown === item.label;

              return (
                <div key={item.label} className="relative">
                  {(hasChildren || isMega) ? (
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-bold tracking-wide transition-all duration-200 rounded-full whitespace-nowrap cursor-pointer ${
                        active || isOpen
                          ? "text-[#C4902A]"
                          : scrolled
                          ? "text-white hover:text-[#C4902A] hover:bg-white/[0.06]"
                          : "text-white hover:text-[#C4902A] hover:bg-white/[0.08]"
                      }`}
                    >
                      {item.label}
                      <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}></i>
                      {active && <span className="absolute bottom-0.5 left-4 right-4 h-px bg-[#C4902A] rounded-full" />}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-4 py-2 text-[13px] font-bold tracking-wide transition-all duration-200 rounded-full whitespace-nowrap block ${
                        active
                          ? "text-[#C4902A]"
                          : scrolled
                          ? "text-white hover:text-[#C4902A] hover:bg-white/[0.06]"
                          : "text-white hover:text-[#C4902A] hover:bg-white/[0.08]"
                      }`}
                    >
                      {item.label}
                      {active && <span className="absolute bottom-0.5 left-4 right-4 h-px bg-[#C4902A] rounded-full" />}
                    </Link>
                  )}

                  {/* Standard dropdown */}
                  {hasChildren && isOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#1A1A1A] backdrop-blur-xl border border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="flex items-center gap-3 px-5 py-3.5 text-[13px] font-semibold text-white hover:text-[#C4902A] hover:bg-white/[0.07] transition-colors border-b border-white/[0.06] last:border-0"
                        >
                          {child.icon && <i className={`${child.icon} text-[#C4902A] text-sm shrink-0`}></i>}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mega menu for Service Areas */}
                  {isMega && isOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-[#1A1A1A] border border-white/[0.15] rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
                      style={{ width: "680px" }}
                    >
                      {/* Header */}
                      <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold text-sm">Service Areas</p>
                          <p className="text-white/40 text-xs">Etobicoke · Toronto · Mississauga</p>
                        </div>
                        <Link
                          to="/service-areas"
                          className="text-[#C4902A] text-xs font-semibold hover:underline whitespace-nowrap flex items-center gap-1"
                        >
                          View All Areas
                          <i className="ri-arrow-right-line"></i>
                        </Link>
                      </div>

                      {/* City columns */}
                      <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
                        {CITIES.map((city) => (
                          <div key={city.slug} className="p-4">
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.08]">
                              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                                <i className={`${city.icon} text-[#C4902A] text-sm`}></i>
                              </div>
                              <div>
                                <p className="text-white font-bold text-xs">{city.name}</p>
                                <p className="text-white/30 text-[10px]">{city.note}</p>
                              </div>
                            </div>
                            <div className="space-y-0.5">
                              {CITY_SERVICES.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/${city.slug}/${service.slug}`}
                                  className="block px-2 py-1.5 text-[12px] text-white/70 hover:text-[#C4902A] hover:bg-white/[0.05] rounded-lg transition-colors"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phonePlain}`}
              className={`flex items-center gap-2 text-[14px] font-bold hover:text-[#C4902A] transition-colors whitespace-nowrap group ${scrolled ? "text-white" : "text-white"}`}
            >
              <i className="ri-phone-fill text-[#C4902A] text-base group-hover:scale-110 transition-transform"></i>
              {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="bg-[#C4902A] text-white text-[12px] font-bold px-6 py-3 rounded-full hover:bg-[#d4a030] hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 whitespace-nowrap tracking-[0.12em] shadow-lg shadow-[#C4902A]/20"
            >
              BOOK SERVICE
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden w-10 h-10 flex items-center justify-center hover:text-[#C4902A] transition-colors ${scrolled ? "text-white" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <i className={`text-xl transition-all duration-200 ${mobileOpen ? "ri-close-line" : "ri-menu-3-line"}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[300px] h-full flex flex-col border-l border-white/[0.07] transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "#0C0C0C", paddingTop: `${PROMO_HEIGHT + 76}px` }}
        >
          <div className="px-7 flex-1 pb-4">
            {NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isMega = item.megaMenu;
              const isExpanded = mobileExpanded === item.label;

              if (isMega) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                      className="w-full flex items-center justify-between py-4 border-b border-white/[0.07] text-sm font-medium tracking-wide transition-colors text-white/65 hover:text-white cursor-pointer"
                    >
                      {item.label}
                      <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#C4902A]" : ""}`}></i>
                    </button>
                    {isExpanded && (
                      <div className="pb-2">
                        <Link
                          to="/service-areas"
                          className="flex items-center gap-2 py-2.5 px-3 text-xs text-[#C4902A] font-semibold border-b border-white/[0.04]"
                        >
                          <i className="ri-map-pin-line text-sm"></i>
                          View All Service Areas
                        </Link>
                        {CITIES.map((city) => {
                          const isCityExpanded = mobileCityExpanded === city.slug;
                          return (
                            <div key={city.slug}>
                              <button
                                onClick={() => setMobileCityExpanded(isCityExpanded ? null : city.slug)}
                                className="w-full flex items-center justify-between py-2.5 px-3 text-xs text-white/60 hover:text-white transition-colors border-b border-white/[0.04] cursor-pointer"
                              >
                                <span className="font-semibold">{city.name}</span>
                                <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${isCityExpanded ? "rotate-180 text-[#C4902A]" : ""}`}></i>
                              </button>
                              {isCityExpanded && (
                                <div className="pl-4 pb-1">
                                  {CITY_SERVICES.map((service) => (
                                    <Link
                                      key={service.slug}
                                      to={`/${city.slug}/${service.slug}`}
                                      className="flex items-center py-2 text-[11px] text-white/40 hover:text-[#C4902A] transition-colors border-b border-white/[0.03]"
                                    >
                                      {service.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between py-4 border-b border-white/[0.07] text-sm font-medium tracking-wide transition-colors text-white/65 hover:text-white cursor-pointer"
                      >
                        {item.label}
                        <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${isExpanded ? "rotate-180 text-[#C4902A]" : ""}`}></i>
                      </button>
                      {isExpanded && (
                        <div className="pl-4 pb-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="flex items-center gap-2.5 py-3 text-xs text-white/50 hover:text-[#C4902A] transition-colors border-b border-white/[0.04]"
                            >
                              {child.icon && <i className={`${child.icon} text-[#C4902A] text-sm`}></i>}
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center justify-between py-4 border-b border-white/[0.07] text-sm font-medium tracking-wide transition-colors ${
                        isActive(item.href) ? "text-[#C4902A]" : "text-white/65 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <i className={`ri-arrow-right-line text-xs ${isActive(item.href) ? "text-[#C4902A]" : ""}`}></i>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="px-7 py-8 space-y-3">
            <a
              href={`tel:${SITE.phonePlain}`}
              className="w-full flex items-center justify-center gap-2.5 bg-[#C4902A] text-white font-bold py-4 rounded-full hover:bg-[#d4a030] transition-colors text-sm tracking-wide shadow-lg shadow-[#C4902A]/20"
            >
              <i className="ri-phone-fill text-sm"></i>
              Call {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 border border-white/15 text-white/70 font-semibold py-4 rounded-full hover:bg-white/[0.05] hover:text-white hover:border-white/30 transition-colors text-sm"
            >
              Book a Service
              <i className="ri-arrow-right-line text-xs"></i>
            </Link>
            <p className="text-center text-white/20 text-[10px] tracking-wider pt-2">{SITE.hours.emergency}</p>
          </div>
        </div>
      </div>
    </>
  );
}
