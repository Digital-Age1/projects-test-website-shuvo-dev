import { useRef, useEffect } from "react";
import { SITE } from "@/mocks/siteData";

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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

const PERSONAS = [
  {
    icon: "ri-building-2-line",
    title: "Condo Owners",
    desc: "Replacing an aging fan coil or in-suite heat pump with a modern, quiet system that fits building regulations.",
  },
  {
    icon: "ri-home-4-line",
    title: "Homeowners Adding Space",
    desc: "Finishing a basement, converting a garage, or building a sunroom that your existing system can\u2019t reach.",
  },
  {
    icon: "ri-layout-2-line",
    title: "Homes Without Ductwork",
    desc: "Older Etobicoke homes that rely on radiators or electric baseboard heat and want efficient A/C without costly ductwork.",
  },
  {
    icon: "ri-leaf-line",
    title: "Energy-Conscious Homeowners",
    desc: "Switching from gas to an electric heat pump to reduce bills, lower emissions, and take advantage of rebates.",
  },
];

const ELIGIBILITY = [
  "You have rooms that are too hot in summer or too cold in winter",
  "You\u2019re adding a new room, garage suite, or sunroom",
  "Your home has no existing ductwork",
  "You want to heat and cool specific zones independently",
  "You\u2019re looking for a quieter, more energy-efficient option",
  "You\u2019re a condo owner replacing your primary HVAC unit",
];

const TIMELINE = [
  { step: "1", label: "Free Estimate", time: "Same week" },
  { step: "2", label: "Equipment Order", time: "2\u20133 business days" },
  { step: "3", label: "Installation Day", time: "4\u20138 hours" },
  { step: "4", label: "Running & Tested", time: "Same visit" },
];

const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function DuctlessSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const personasRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useReveal(headRef as React.RefObject<HTMLElement>, 0);
  useReveal(leftRef as React.RefObject<HTMLElement>, 100);
  useReveal(rightRef as React.RefObject<HTMLElement>, 200);
  useReveal(personasRef as React.RefObject<HTMLElement>, 100);
  useReveal(timelineRef as React.RefObject<HTMLElement>, 0);

  return (
    <section className="bg-[#0D0D0D] py-24 lg:py-32 overflow-hidden" id="ductless-right-for-you">
      {/* Ambient gold glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(196,144,42,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="text-center mb-16"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#C4902A]" />
            <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Ductless & Heat Pump Guide</p>
            <span className="w-10 h-px bg-[#C4902A]" />
          </div>
          <h2
            className="text-white font-serif leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Is a Ductless System Right for Your Home?
          </h2>
          <p className="text-white/45 text-sm max-w-xl mx-auto leading-relaxed">
            Most Etobicoke homeowners are surprised how simple the switch is. Here's how to know if you're a good candidate.
          </p>
        </div>

        {/* Main two-column block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Left — Eligibility checklist */}
          <div
            ref={leftRef}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 lg:p-10"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/15 border border-[#C4902A]/25 shrink-0">
                <i className="ri-checkbox-circle-line text-[#C4902A] text-lg"></i>
              </div>
              <h3 className="text-white font-semibold text-base">Signs a ductless system is right for you</h3>
            </div>
            <ul className="space-y-4">
              {ELIGIBILITY.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#C4902A]/15 shrink-0 mt-0.5">
                    <i className="ri-check-line text-[#C4902A] text-xs"></i>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — What to expect + CTA */}
          <div
            ref={rightRef}
            className="flex flex-col gap-6"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s" }}
          >
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/15 border border-[#C4902A]/25 shrink-0">
                  <i className="ri-information-line text-[#C4902A] text-lg"></i>
                </div>
                <h3 className="text-white font-semibold text-base">What makes ductless different?</h3>
              </div>
              <div className="space-y-5">
                {[
                  { icon: "ri-home-line", title: "No ductwork needed", desc: "Installed directly in the room being conditioned. Ideal for additions, condos, and older homes." },
                  { icon: "ri-focus-3-line", title: "Zoned comfort control", desc: "Heat or cool specific rooms independently \u2014 stop paying to condition space you\u2019re not using." },
                  { icon: "ri-sun-line", title: "Heating & cooling in one unit", desc: "A heat pump does both \u2014 efficient cooling in summer, reliable heating down to \u221225\u00b0C." },
                  { icon: "ri-volume-mute-line", title: "Whisper-quiet operation", desc: "Indoor units operate as low as 19dB. You\u2019ll forget it\u2019s running." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#C4902A]/10 shrink-0">
                      <i className={`${item.icon} text-[#C4902A] text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-white/85 text-sm font-semibold mb-1">{item.title}</p>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency CTA box */}
            <div
              className="rounded-2xl p-6 border border-[#C4902A]/30"
              style={{ background: "linear-gradient(135deg, rgba(196,144,42,0.10) 0%, rgba(196,144,42,0.05) 100%)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] shrink-0 animate-pulse" />
                <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.25em] uppercase">Book Before Peak Season Demand</p>
              </div>
              <p className="text-white font-semibold text-base mb-1 leading-snug">Most installs booked 7 days out</p>
              <p className="text-white/40 text-xs mb-5">Same-week estimates available \u2014 secure your opening today.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }}
                  className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm whitespace-nowrap cursor-pointer"
                >
                  Get a Quote for Next Available Install
                  <i className="ri-arrow-right-line"></i>
                </a>
                <a
                  href={`tel:${SITE.phonePlain}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/75 font-semibold px-7 py-3.5 rounded-full hover:bg-white/[0.06] hover:text-white transition-all text-sm whitespace-nowrap"
                >
                  <i className="ri-phone-line text-[#C4902A]"></i>
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Who this is for — personas */}
        <div
          ref={personasRef}
          className="mb-12"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-[#C4902A]" />
            <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Who This Is For</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERSONAS.map((p) => (
              <div key={p.title} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-[#C4902A]/30 transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/12 mb-4">
                  <i className={`${p.icon} text-[#C4902A] text-base`}></i>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{p.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Install timeline strip */}
        <div
          ref={timelineRef}
          className="rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="px-8 py-5 border-b border-white/[0.06]">
            <p className="text-white/50 text-xs font-bold tracking-[0.25em] uppercase">Typical Install Timeline — Etobicoke Ductless Installs</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
            {TIMELINE.map((t) => (
              <div key={t.step} className="px-8 py-6 flex items-center gap-5">
                <span
                  className="text-[#C4902A] font-serif font-bold text-3xl leading-none shrink-0"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {t.step}
                </span>
                <div>
                  <p className="text-white/70 font-semibold text-sm">{t.label}</p>
                  <p className="text-[#C4902A] text-xs">{t.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}