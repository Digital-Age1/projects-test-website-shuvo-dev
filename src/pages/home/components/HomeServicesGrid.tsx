import { useRef, useEffect } from "react";

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const FURNACE_SERVICES = [
  { label: "Furnace installation & replacement", tag: "install" },
  { label: "High-efficiency furnace upgrades", tag: "install" },
  { label: "Furnace repair & diagnostics", tag: "repair" },
  { label: "24/7 emergency furnace service", tag: "repair" },
  { label: "Annual furnace maintenance", tag: "maintenance" },
  { label: "Boiler installation & repair", tag: "install" },
];

const AC_SERVICES = [
  { label: "Central A/C installation", tag: "install" },
  { label: "A/C repair & troubleshooting", tag: "repair" },
  { label: "Annual A/C tune-up & maintenance", tag: "maintenance" },
  { label: "24/7 emergency A/C service", tag: "repair" },
  { label: "A/C system replacement", tag: "install" },
];

const HOTWATER_SERVICES = [
  { label: "Hot water tank repair & replacement", tag: "repair" },
  { label: "Tankless water heater service", tag: "repair" },
  { label: "Boiler repair & maintenance", tag: "repair" },
  { label: "Annual boiler inspections", tag: "maintenance" },
  { label: "Hot water system installation", tag: "install" },
];

const DUCTLESS_SERVICES = [
  { label: "Ductless mini split A/C", tag: "install" },
  { label: "Heat pump installation & service", tag: "install" },
  { label: "Condo fan coil replacement", tag: "repair" },
  { label: "In-suite HVAC (building-code compliant)", tag: "install" },
  { label: "Multi-zone system design", tag: "install" },
  { label: "Annual heat pump maintenance", tag: "maintenance" },
];

const TAG_STYLES: Record<string, string> = {
  install: "bg-[#C4902A]/12 text-[#A07020] border border-[#C4902A]/25",
  repair: "bg-[#1A1A1A]/08 text-[#444] border border-[#1A1A1A]/15",
  maintenance: "bg-emerald-50 text-emerald-700 border border-emerald-200",
};

const TAG_LABELS: Record<string, string> = {
  install: "Install",
  repair: "Repair",
  maintenance: "Maintenance",
};

function ServiceTag({ type, dark = false }: { type: string; dark?: boolean }) {
  const darkStyles: Record<string, string> = {
    install: "bg-[#C4902A]/20 text-[#E0B050] border border-[#C4902A]/35",
    repair: "bg-white/10 text-white/60 border border-white/15",
    maintenance: "bg-emerald-900/30 text-emerald-400 border border-emerald-700/40",
  };
  const cls = dark ? darkStyles[type] : TAG_STYLES[type];
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${cls}`}>
      {TAG_LABELS[type]}
    </span>
  );
}

export default function HomeServicesGrid() {
  const headRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useReveal(headRef as React.RefObject<HTMLElement>, 0);
  useReveal(featuredRef as React.RefObject<HTMLElement>, 100);
  useReveal(row2Ref as React.RefObject<HTMLElement>, 200);

  return (
    <section className="py-20 lg:py-32" style={{ background: "#F5F3EF" }} id="our-services">
      <div className="max-w-7xl mx-auto px-6">

        <div
          ref={headRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Our Services</p>
            </div>
            <h2 className="font-serif text-[#1A1A1A] leading-tight mb-3" style={{ fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Residential HVAC Services
            </h2>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Fully licensed &amp; insured across Etobicoke and Toronto — furnace, air-conditioning, hot water, and ductless heat pump specialists.
            </p>
          </div>
          <a
            href="#lead-form"
            onClick={(e) => { e.preventDefault(); scroll("lead-form"); }}
            className="self-start lg:self-auto inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase border border-[#1A1A1A]/20 px-7 py-3.5 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            Get a Quote
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        {/* FEATURED: Furnace */}
        <div
          ref={featuredRef}
          className="rounded-2xl overflow-hidden mb-5"
          style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.85s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.85s cubic-bezier(0.4,0,0.2,1) 0.1s", background: "#141410", boxShadow: "0 20px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-between p-8 lg:p-10 xl:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="bg-[#C4902A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full">Primary Service</span>
                </div>
                <h3 className="text-white font-serif leading-[1.1] mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Furnace Installation &amp; Repair
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-sm">
                  Etobicoke trusted furnace specialists — from high-efficiency installations and full system replacements to same-day emergency repairs. Licensed, insured, and available 24/7.
                </p>
                <ul className="space-y-3 mb-8">
                  {FURNACE_SERVICES.map((s) => (
                    <li key={s.label} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C4902A]/20 shrink-0">
                        <i className="ri-check-line text-[#C4902A] text-[10px]"></i>
                      </div>
                      <span className="text-white/70 text-sm flex-1">{s.label}</span>
                      <ServiceTag type={s.tag} dark />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm whitespace-nowrap cursor-pointer">
                  Get a Furnace Quote <i className="ri-arrow-right-line"></i>
                </a>
                <a href="#ductless-right-for-you" onClick={(e) => { e.preventDefault(); scroll("ductless-right-for-you"); }} className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 font-semibold px-7 py-3.5 rounded-full hover:bg-white/[0.07] hover:text-white transition-all text-sm whitespace-nowrap cursor-pointer">
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[540px] overflow-hidden">
              <img src="https://public.readdy.ai/ai/img_res/edited_fca3ce5ced54e9d943f29c907479a534_a6f6e5bc.jpg" alt="Furnace installation and repair in Etobicoke Toronto" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141410]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141410]/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[#C4902A]/30" style={{ background: "rgba(14,13,8,0.82)", backdropFilter: "blur(12px)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] animate-pulse shrink-0" />
                <div>
                  <p className="text-white text-xs font-bold leading-none mb-0.5">24/7 emergency service available</p>
                  <p className="text-white/40 text-[10px]">Same-day response for urgent repairs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: A/C + Hot Water */}
        <div ref={row2Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5" style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.85s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.85s cubic-bezier(0.4,0,0.2,1) 0.2s" }}>
          <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE7E0] hover:border-[#C4902A]/25 transition-all duration-300" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)" }}>
            <div className="relative h-[280px] overflow-hidden">
              <img src="https://readdy.ai/api/search-image?query=HVAC%20technician%20kneeling%20beside%20outdoor%20central%20air%20conditioning%20condenser%20unit%20during%20installation%2C%20residential%20backyard%2C%20professional%20uniform%2C%20tools%20on%20ground%2C%20sunny%20day%2C%20clean%20suburban%20home%20exterior%2C%20photorealistic%2C%20high%20quality&width=700&height=280&seq=ac-install-etobicoke-01&orientation=landscape" alt="Air conditioning installation and repair in Etobicoke Toronto" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                <h3 className="text-white font-serif" style={{ fontSize: "1.3rem", fontFamily: "'Playfair Display', Georgia, serif" }}>Air-Conditioning</h3>
              </div>
            </div>
            <div className="p-6 lg:p-7 flex flex-col flex-1">
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">Central A/C installation, repair, and annual maintenance for Etobicoke and Toronto homeowners — keeping you cool all summer long.</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {AC_SERVICES.map((s) => (
                  <li key={s.label} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C4902A]/10 shrink-0"><i className="ri-check-line text-[#C4902A] text-[10px]"></i></div>
                    <span className="text-[#3A3A3A] text-sm flex-1">{s.label}</span>
                    <ServiceTag type={s.tag} />
                  </li>
                ))}
              </ul>
              <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#C4902A] transition-all duration-300 whitespace-nowrap text-sm w-full cursor-pointer">
                Book A/C Service <i className="ri-arrow-right-line text-sm"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EAE7E0] hover:border-[#C4902A]/25 transition-all duration-300" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)" }}>
            <div className="relative h-[280px] overflow-hidden">
              <img src="https://public.readdy.ai/ai/img_res/edited_c3dd45033656a23b2ea842b0b3791c3e_1cc6e374.jpg" alt="Hot water heater and boiler repair in Etobicoke Toronto" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                <h3 className="text-white font-serif" style={{ fontSize: "1.3rem", fontFamily: "'Playfair Display', Georgia, serif" }}>Hot Water</h3>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">Fast, reliable hot water tank and boiler repairs across Etobicoke — restoring your hot water with minimal disruption.</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {HOTWATER_SERVICES.map((s) => (
                  <li key={s.label} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C4902A]/10 shrink-0"><i className="ri-check-line text-[#C4902A] text-[10px]"></i></div>
                    <span className="text-[#3A3A3A] text-sm flex-1">{s.label}</span>
                    <ServiceTag type={s.tag} />
                  </li>
                ))}
              </ul>
              <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#C4902A] transition-all duration-300 whitespace-nowrap text-sm w-full cursor-pointer">
                Book Hot Water Service <i className="ri-arrow-right-line text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ROW 3: Ductless & Heat Pump */}
        <div className="rounded-2xl overflow-hidden mb-5" style={{ background: "#141410", boxShadow: "0 20px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col justify-between p-8 lg:p-10 xl:p-12">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-6">
                  <span className="bg-white/10 text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-white/15">Ductless Specialists</span>
                </div>
                <h3 className="text-white font-serif leading-[1.1] mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Ductless A/C &amp; Heat Pump
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-sm">
                  Ductless mini splits and heat pumps for homes adding zones, upgrading without ductwork, or condo units needing in-suite solutions. Energy-efficient, whisper-quiet, typically completed in one day.
                </p>
                <ul className="space-y-3 mb-8">
                  {DUCTLESS_SERVICES.map((s) => (
                    <li key={s.label} className="flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#C4902A]/20 shrink-0"><i className="ri-check-line text-[#C4902A] text-[10px]"></i></div>
                      <span className="text-white/70 text-sm flex-1">{s.label}</span>
                      <ServiceTag type={s.tag} dark />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm whitespace-nowrap cursor-pointer">
                  Get a Ductless Quote <i className="ri-arrow-right-line"></i>
                </a>
                <a href="#ductless-right-for-you" onClick={(e) => { e.preventDefault(); scroll("ductless-right-for-you"); }} className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 font-semibold px-7 py-3.5 rounded-full hover:bg-white/[0.07] hover:text-white transition-all text-sm whitespace-nowrap cursor-pointer">
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[480px] overflow-hidden">
              <img src="https://public.readdy.ai/ai/img_res/edited_eee8a5d2b32adfe2572093e42812e177_d8652855.jpg" alt="Ductless mini split and heat pump installation in Etobicoke Toronto" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141410]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141410]/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[#C4902A]/30" style={{ background: "rgba(14,13,8,0.82)", backdropFilter: "blur(12px)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] animate-pulse shrink-0" />
                <div>
                  <p className="text-white text-xs font-bold leading-none mb-0.5">Installs booked 7–10 days out</p>
                  <p className="text-white/40 text-[10px]">Same-week estimates available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend + Urgency */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 py-5 rounded-2xl border border-[#E0DDD5] bg-white" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-[#6B6B6B] text-xs font-semibold tracking-wide uppercase">Key:</p>
            <div className="flex items-center gap-1.5"><ServiceTag type="install" /><span className="text-[#6B6B6B] text-xs">New system installs</span></div>
            <div className="flex items-center gap-1.5"><ServiceTag type="repair" /><span className="text-[#6B6B6B] text-xs">Repair &amp; emergency</span></div>
            <div className="flex items-center gap-1.5"><ServiceTag type="maintenance" /><span className="text-[#6B6B6B] text-xs">Annual maintenance</span></div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] animate-pulse shrink-0" />
            <span className="text-[#3A3A3A] text-xs font-semibold">Most slots booked 7–10 days out</span>
            <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center gap-1.5 bg-[#C4902A] text-white font-bold px-5 py-2.5 rounded-full hover:bg-[#d4a030] transition-colors text-xs whitespace-nowrap cursor-pointer">
              Book Now <i className="ri-arrow-right-line text-xs"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
