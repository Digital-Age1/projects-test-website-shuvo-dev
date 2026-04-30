import { SITE } from "../../../mocks/siteData";
import { useRef, useEffect } from "react";

interface FinalCTAProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  promoNote?: boolean;
}

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function FinalCTA({
  headline = "Ready to Experience Premium HVAC Service?",
  subheadline = "Don\u2019t wait for a breakdown. Call Etobicoke most trusted heating and cooling specialists today.",
  ctaLabel = "Book Your Service Now",
  ctaHref = "/contact",
  promoNote = true,
}: FinalCTAProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  useReveal(contentRef as React.RefObject<HTMLElement>, 0);

  const isExternalLink = true; // all links are anchors or tel: on single-page site

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center" id="final-cta">

      {/* Full-bleed background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://public.readdy.ai/ai/img_res/edited_c3dd45033656a23b2ea842b0b3791c3e_43cb903d.jpg"
          alt="Premium home comfort — Park Lawn Heating and Cooling Etobicoke"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Layered dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

      {/* Gold atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 25% 60%, rgba(196,144,42,0.14) 0%, transparent 60%)" }}
      />

      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4902A]/20 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Main content */}
          <div
            ref={contentRef}
            className="lg:col-span-7"
            style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1)" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-7">
              <span className="w-12 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.35em] uppercase">Get Started Today</p>
            </div>

            {/* Headline */}
            <h2
              className="text-white font-serif leading-[1.03] mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontFamily: "'Playfair Display', Georgia, serif",
                textShadow: "0 2px 40px rgba(0,0,0,0.5)",
              }}
            >
              {headline}
            </h2>

            {/* Gold rule */}
            <div className="w-24 h-px bg-gradient-to-r from-[#C4902A] to-transparent mb-7" />

            {/* Subheadline */}
            <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg">
              {subheadline}
            </p>

            {/* Promo badge */}
            {promoNote && (
              <div className="inline-flex items-center gap-2 bg-[#C4902A]/12 border border-[#C4902A]/30 rounded-full px-6 py-2.5 mb-10 backdrop-blur-sm">
                <i className="ri-price-tag-3-line text-[#C4902A] text-sm"></i>
                <span className="text-[#C4902A] text-xs font-semibold">{SITE.promo}</span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {isExternalLink ? (
                <a
                  href={ctaHref}
                  onClick={ctaHref.startsWith("#") ? (e) => { e.preventDefault(); document.getElementById(ctaHref.slice(1))?.scrollIntoView({ behavior: "smooth" }); } : undefined}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C4902A] text-white font-bold px-11 py-[1.1rem] rounded-full hover:bg-[#d4a030] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-sm tracking-wider shadow-2xl shadow-[#C4902A]/30 cursor-pointer"
                >
                  {ctaLabel}
                  <i className="ri-arrow-right-line text-sm"></i>
                </a>
              ) : (
                <Link
                  to={ctaHref}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#C4902A] text-white font-bold px-11 py-[1.1rem] rounded-full hover:bg-[#d4a030] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-sm tracking-wider shadow-2xl shadow-[#C4902A]/30"
                >
                  {ctaLabel}
                  <i className="ri-arrow-right-line text-sm"></i>
                </Link>
              )}
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-3 border-2 border-white/22 text-white font-semibold px-10 py-[1.1rem] rounded-full hover:bg-white/[0.08] hover:border-white/45 transition-all duration-300 whitespace-nowrap text-sm tracking-wide backdrop-blur-sm"
              >
                <i className="ri-phone-fill text-[#C4902A] text-sm"></i>
                {SITE.phone}
              </a>
            </div>

            <p className="text-white/20 text-xs tracking-widest">{SITE.hours.emergency}</p>
          </div>

          {/* Right — Credential card */}
          <div
            className="lg:col-span-5 hidden lg:flex items-center justify-center lg:justify-end"
            ref={(el) => {
              if (!el) return;
              const obs = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                  setTimeout(() => {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                  }, 250);
                  obs.disconnect();
                }
              }, { threshold: 0.06 });
              obs.observe(el);
              el.style.opacity = "0";
              el.style.transform = "translateY(28px)";
              el.style.transition = "opacity 1s cubic-bezier(0.4,0,0.2,1) 0.25s, transform 1s cubic-bezier(0.4,0,0.2,1) 0.25s";
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.08] w-full max-w-sm"
              style={{ background: "rgba(10,10,10,0.82)", backdropFilter: "blur(20px)" }}
            >
              <div className="p-7 border-b border-white/[0.07]">
                <img
                  src={SITE.logoHeader}
                  alt={SITE.name}
                  className="h-10 w-auto object-contain brightness-0 invert mb-5"
                />
                <p className="text-white/65 text-sm leading-relaxed">
                  Etobicoke most trusted HVAC contractor — licensed, insured, and available 24/7.
                </p>
              </div>

              {/* Trust grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.05]">
                {[
                  { icon: "ri-star-fill", val: "5-Star", lbl: "Google Rated" },
                  { icon: "ri-calendar-check-line", val: "10+ Yrs", lbl: "Etobicoke" },
                  { icon: "ri-shield-check-line", val: "Licensed", lbl: "& Insured" },
                  { icon: "ri-time-line", val: "24/7", lbl: "Emergency" },
                ].map(item => (
                  <div key={item.lbl} className="flex flex-col items-center justify-center py-5 px-3 text-center">
                    <i className={`${item.icon} text-[#C4902A] text-lg mb-2`}></i>
                    <p className="text-white font-bold text-sm leading-none mb-0.5">{item.val}</p>
                    <p className="text-white/30 text-[10px]">{item.lbl}</p>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <a
                  href={`tel:${SITE.phonePlain}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm tracking-wide whitespace-nowrap"
                >
                  <i className="ri-phone-fill text-sm"></i>
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
