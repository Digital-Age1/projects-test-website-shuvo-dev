import { SITE, SERVICE_AREAS } from "../../../mocks/siteData";
import { useRef, useEffect } from "react";

const PRIMARY_AREAS = ["Etobicoke", "Mimico", "New Toronto", "Long Branch", "Humber Bay", "Lakeshore"];
const SECONDARY_AREAS = SERVICE_AREAS.filter((a) => !PRIMARY_AREAS.includes(a));

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateX(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function ServiceAreasSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useReveal(headRef as React.RefObject<HTMLElement>, 0);
  useReveal(mapRef as React.RefObject<HTMLElement>, 150);
  useReveal(card1Ref as React.RefObject<HTMLElement>, 100);
  useReveal(card2Ref as React.RefObject<HTMLElement>, 200);
  useReveal(card3Ref as React.RefObject<HTMLElement>, 300);

  return (
    <section className="bg-[#0C0C0C] py-28 lg:py-36 overflow-hidden" id="service-areas">
      {/* Section top transition */}
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6"
          style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Service Territory</p>
            </div>
            <h2
              className="font-serif text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Proudly Serving Etobicoke
              <br />
              <span className="text-[#C4902A]">&amp; Greater Toronto</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-sm leading-relaxed lg:text-right">
            Based at {SITE.addressShort} — fast local response across Etobicoke and surrounding communities.
          </p>
        </div>

        {/* Map — full width dominant */}
        <div
          ref={mapRef}
          className="w-full rounded-2xl overflow-hidden border border-white/[0.07] mb-8"
          style={{ height: "500px", opacity: 0, transform: "translateY(24px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <iframe
            title="Park Lawn Heating Location Map — Etobicoke, Toronto"
            src={SITE.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* 3-column below map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Location card */}
          <div
            ref={card1Ref}
            className="bg-[#C4902A] rounded-2xl p-8 text-white"
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <div className="w-10 h-10 flex items-center justify-center mb-6">
              <i className="ri-map-pin-2-fill text-white text-2xl"></i>
            </div>
            <h3
              className="font-serif font-bold text-xl mb-3 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Our Home Base
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-5">{SITE.address}</p>
            <div className="space-y-2 mb-6 text-sm">
              <p className="text-white/65 flex items-center gap-2">
                <i className="ri-phone-fill text-white/50 shrink-0"></i>
                <a href={`tel:${SITE.phonePlain}`} className="hover:text-white transition-colors font-medium">{SITE.phone}</a>
              </p>
              <p className="text-white/65 flex items-start gap-2">
                <i className="ri-time-line text-white/50 shrink-0 mt-0.5"></i>
                <span>{SITE.hours.emergency}</span>
              </p>
            </div>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-semibold text-xs border-b border-white/40 hover:border-white pb-0.5 transition-colors"
            >
              Get Directions
              <i className="ri-external-link-line text-xs"></i>
            </a>
          </div>

          {/* Primary areas */}
          <div
            ref={card2Ref}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8"
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <h3 className="text-white font-semibold text-xs tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#C4902A] rounded-full shrink-0"></span>
              Primary Service Area
            </h3>
            <div className="space-y-3 mb-6">
              {PRIMARY_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] shrink-0"></div>
                  <span className="text-white/70 text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/[0.07] pt-5">
              <p className="text-white/60 text-xs leading-relaxed">
                Fastest response times, deepest local knowledge.
              </p>
            </div>
          </div>

          {/* Extended areas */}
          <div
            ref={card3Ref}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8"
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <h3 className="text-white font-semibold text-xs tracking-[0.25em] uppercase mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#C4902A]/50 rounded-full shrink-0"></span>
              Extended Coverage
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
              {SECONDARY_AREAS.slice(0, 12).map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <i className="ri-map-pin-2-line text-[#C4902A]/50 text-[10px] shrink-0"></i>
                  <span className="text-white/40 text-xs">{area}</span>
                </div>
              ))}
            </div>
            <a
              href="#service-areas"
              onClick={(e) => { e.preventDefault(); document.getElementById("service-areas")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-1.5 text-[#C4902A] text-xs font-semibold hover:text-[#d4a030] transition-colors cursor-pointer"
            >
              View full service map
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
