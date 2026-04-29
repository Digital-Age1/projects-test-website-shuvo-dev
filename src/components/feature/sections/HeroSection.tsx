import { useState, useEffect, useRef } from "react";
import { SITE } from "../../../mocks/siteData";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  urgencyLine?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function HeroSection({ eyebrow, headline, subheadline, urgencyLine, primaryCTA, secondaryCTA }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [phase, setPhase] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 500);
    const t3 = setTimeout(() => setPhase(3), 900);
    const t4 = setTimeout(() => setPhase(4), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const renderCTALink = (cta: { label: string; href: string }, primary: boolean) => {
    const primaryCls = "inline-flex items-center justify-center gap-3 bg-[#C4902A] text-white font-bold px-9 py-4 rounded-full hover:bg-[#d4a030] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-sm tracking-wider shadow-2xl shadow-[#C4902A]/40 cursor-pointer";
    const secondaryCls = "inline-flex items-center justify-center gap-2.5 border border-white/30 text-white font-semibold px-9 py-4 rounded-full hover:bg-white/[0.08] hover:border-white/55 transition-all duration-300 whitespace-nowrap text-sm tracking-wide backdrop-blur-sm cursor-pointer";
    const cls = primary ? primaryCls : secondaryCls;
    const handleClick = cta.href.startsWith("#") ? (e: React.MouseEvent) => { e.preventDefault(); document.getElementById(cta.href.slice(1))?.scrollIntoView({ behavior: "smooth" }); } : undefined;
    return <a href={cta.href} onClick={handleClick} className={cls}>{cta.label}{primary && <i className="ri-arrow-right-line text-sm"></i>}</a>;
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Parallax background image */}
      <div
        className="absolute inset-0 w-full h-[115%] -top-[7%]"
        style={{ transform: `translateY(${scrollY * 0.22}px)`, willChange: "transform" }}
      >
        <img
          src="https://readdy.ai/api/search-image?query=licensed%20HVAC%20technician%20in%20premium%20dark%20branded%20uniform%20with%20professional%20tool%20belt%2C%20kneeling%20beside%20a%20high-efficiency%20modern%20furnace%20in%20a%20beautifully%20finished%20Toronto%20home%20basement%2C%20dramatic%20chiaroscuro%20lighting%20with%20warm%20amber%20workshop%20glow%20illuminating%20the%20equipment%20and%20technician%20hands%2C%20deep%20cinematic%20shadows%2C%20ultra-realistic%20editorial%20photography%20style%2C%20shallow%20depth%20of%20field%2C%20premium%20service%20brand%20photography%2C%20no%20text%20overlays&width=1920&height=1200&seq=hero2026a&orientation=landscape"
          alt="Park Lawn Heating professional HVAC service"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Primary dark gradient — left-heavy for text legibility */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/97 via-black/85 to-black/50" />
      {/* Vertical vignette */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/20 to-black/50" />
      {/* Warm gold atmospheric glow — right side */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 80% at 78% 55%, rgba(196,144,42,0.13) 0%, transparent 65%)" }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Vertical rule — decorative */}
      <div
        className="absolute left-[50px] lg:left-[60px] top-0 bottom-0 w-px z-[3] hidden xl:block"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(196,144,42,0.18) 30%, rgba(196,144,42,0.18) 70%, transparent)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-44 pb-28 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-end">

          {/* Left: Primary copy — takes most of the width */}
          <div className="xl:col-span-8">

            {/* Eyebrow */}
            {eyebrow && (
              <div
                className="flex items-center gap-4 mb-9"
                style={{
                  opacity: phase >= 1 ? 1 : 0,
                  transform: phase >= 1 ? "translateY(0)" : "translateY(14px)",
                  transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <span
                  className="block h-px bg-[#C4902A] shrink-0"
                  style={{ width: phase >= 1 ? "40px" : "0", transition: "width 0.9s cubic-bezier(0.4,0,0.2,1) 0.2s" }}
                />
                <p className="text-[#E8A830] text-[11px] font-black tracking-[0.35em] uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                  {eyebrow}
                </p>
              </div>
            )}

            {/* Headline */}
            <h1
              className="text-white font-serif leading-[1.02] mb-8"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 5.6rem)",
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "-0.025em",
                textShadow: "0 2px 60px rgba(0,0,0,0.6)",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1)",
              }}
              dangerouslySetInnerHTML={{ __html: headline }}
            />

            {/* Gold horizontal rule */}
            <div
              className="mb-8"
              style={{
                opacity: phase >= 2 ? 1 : 0,
                transition: "opacity 0.6s ease 0.3s",
              }}
            >
              <span
                className="block h-px bg-gradient-to-r from-[#C4902A] to-transparent"
                style={{ width: phase >= 2 ? "160px" : "0", transition: "width 1.1s cubic-bezier(0.4,0,0.2,1) 0.3s" }}
              />
            </div>

            {/* Subheadline */}
            <p
              className="text-white font-semibold leading-[1.7] mb-7"
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.08rem)",
                maxWidth: "560px",
                textShadow: "0 1px 12px rgba(0,0,0,0.9)",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {subheadline}
            </p>

            {/* Urgency line */}
            {urgencyLine && (
              <div
                className="flex items-center gap-3 mb-8"
                style={{
                  opacity: phase >= 3 ? 1 : 0,
                  transform: phase >= 3 ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1) 0.05s, transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.05s",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] shrink-0 animate-pulse" />
                <p className="text-[#E8A830] text-xs font-black tracking-[0.18em] uppercase" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>{urgencyLine}</p>
              </div>
            )}

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-14"
              style={{
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }}
            >
              {renderCTALink(primaryCTA, true)}
              {secondaryCTA && renderCTALink(secondaryCTA, false)}
            </div>

            {/* Bottom strip */}
            <div
              className="flex flex-wrap items-center gap-6 lg:gap-10"
              style={{
                opacity: phase >= 4 ? 1 : 0,
                transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <a href={`tel:${SITE.phonePlain}`} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-11 h-11 flex items-center justify-center rounded-full border border-[#C4902A]/40 bg-[#C4902A]/8 group-hover:bg-[#C4902A] group-hover:border-[#C4902A] transition-all duration-300 shrink-0">
                  <i className="ri-phone-fill text-[#C4902A] group-hover:text-white text-sm transition-colors"></i>
                </div>
                <div>
                  <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-medium mb-0.5">24/7 Emergency Line</p>
                  <p className="text-white font-bold text-lg leading-none tracking-wide">{SITE.phone}</p>
                </div>
              </a>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <i key={i} className="ri-star-fill text-[#C4902A] text-xs"></i>)}
                </div>
                <div>
                  <p className="text-white/65 text-[11px] font-semibold leading-none mb-0.5">5-Star Google Rating</p>
                  <p className="text-white/30 text-[10px] leading-none">Etobicoke Verified</p>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden lg:block" />

              <div className="hidden lg:flex items-center gap-2.5">
                <i className="ri-shield-check-line text-[#C4902A] text-lg"></i>
                <div>
                  <p className="text-white/65 text-[11px] font-semibold leading-none mb-0.5">Licensed &amp; Insured</p>
                  <p className="text-white/30 text-[10px] leading-none">Ontario Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Floating stats card — desktop only */}
          <div
            className="xl:col-span-4 hidden xl:block"
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 1s cubic-bezier(0.4,0,0.2,1) 0.2s",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border border-white/[0.08] backdrop-blur-md"
              style={{ background: "rgba(10,10,10,0.75)" }}
            >
              {/* Card header */}
              <div className="px-6 pt-6 pb-5 border-b border-white/[0.07]">
                <p className="text-[#C4902A] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
                  Why Choose Us
                </p>
                <p className="text-white font-semibold text-sm leading-snug">
                  Etobicoke Most Trusted HVAC Team
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.05]">
                {[
                  { val: "10+", lbl: "Years in Etobicoke", icon: "ri-calendar-check-line" },
                  { val: "5★", lbl: "Google Rating", icon: "ri-star-line" },
                  { val: "24/7", lbl: "Emergency Service", icon: "ri-time-line" },
                  { val: "$50", lbl: "Off First Service", icon: "ri-price-tag-3-line" },
                ].map(s => (
                  <div key={s.lbl} className="bg-[#0D0D0D] px-5 py-4">
                    <div className="w-6 h-6 flex items-center justify-center mb-3">
                      <i className={`${s.icon} text-[#C4902A] text-base`}></i>
                    </div>
                    <p className="text-white font-bold text-xl leading-none mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {s.val}
                    </p>
                    <p className="text-white/30 text-[10px] leading-tight">{s.lbl}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 py-5">
                <a
                  href={`tel:${SITE.phonePlain}`}
                  className="w-full flex items-center justify-center gap-2.5 bg-[#C4902A] text-white font-bold py-3.5 rounded-full hover:bg-[#d4a030] transition-colors text-sm tracking-wide whitespace-nowrap"
                >
                  <i className="ri-phone-fill text-sm"></i>
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom section bleed */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[3] pointer-events-none"
        style={{ background: "linear-gradient(to top, #111111 0%, transparent 100%)" }}
      />

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-[60px] z-10 hidden xl:flex flex-col items-center gap-2"
        style={{ opacity: phase >= 4 ? 0.45 : 0, transition: "opacity 1s ease 1.5s" }}
      >
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#C4902A]" style={{ animation: "pulse 2.5s ease-in-out infinite" }} />
        <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</p>
      </div>
    </section>
  );
}
