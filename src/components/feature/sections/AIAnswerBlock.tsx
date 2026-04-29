import { useRef, useEffect } from "react";

interface AIAnswerBlockProps {
  headline?: string;
  intro: string;
  whatWeDo: string;
  services: string[];
  benefits: string[];
  area: string;
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
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function AIAnswerBlock({
  headline = "Premium HVAC Services in Etobicoke, Toronto",
  intro,
  whatWeDo,
  services,
  benefits,
  area,
}: AIAnswerBlockProps) {
  const headRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useReveal(headRef as React.RefObject<HTMLElement>, 0);
  useReveal(introRef as React.RefObject<HTMLElement>, 150);
  useReveal(card1Ref as React.RefObject<HTMLElement>, 100);
  useReveal(card2Ref as React.RefObject<HTMLElement>, 200);
  useReveal(card3Ref as React.RefObject<HTMLElement>, 300);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      id="ai-answer"
      style={{ background: "linear-gradient(160deg, #080808 0%, #100F0A 60%, #141008 100%)" }}
    >
      {/* Gold glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(196,144,42,0.08) 0%, transparent 70%)" }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage: "linear-gradient(rgba(196,144,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(196,144,42,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6"
          style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#C4902A]/15 border border-[#C4902A]/20">
                <i className="ri-sparkling-2-line text-[#C4902A] text-sm"></i>
              </div>
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">AI-Optimized Overview</p>
            </div>
            <h2
              className="font-serif text-white leading-tight"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {headline}
            </h2>
          </div>
          <p className="text-white/45 text-xs max-w-xs leading-relaxed lg:text-right">
            Structured for AI search extraction &amp; voice search visibility.
          </p>
        </div>

        {/* Intro */}
        <div
          ref={introRef}
          className="border-l-2 border-[#C4902A]/40 pl-6 mb-12"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <p className="text-white/70 leading-relaxed text-base max-w-3xl">{intro}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* What We Do */}
          <div
            ref={card1Ref}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-[#C4902A]/25 transition-all duration-300"
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1), border-color 0.3s ease" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-6 bg-[#C4902A] rounded-full shrink-0"></span>
              <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase">What We Do</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{whatWeDo}</p>
          </div>

          {/* Services */}
          <div
            ref={card2Ref}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-[#C4902A]/25 transition-all duration-300"
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s, border-color 0.3s ease" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1 h-6 bg-[#C4902A] rounded-full shrink-0"></span>
              <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase">Services</h3>
            </div>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed">
                  <i className="ri-arrow-right-s-line text-[#C4902A] text-sm shrink-0 mt-0.5"></i>
                  <span dangerouslySetInnerHTML={{ __html: s }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits + Area */}
          <div
            ref={card3Ref}
            className="flex flex-col gap-4"
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s, transform 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s" }}
          >
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-[#C4902A]/25 transition-all duration-300 flex-1">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-6 bg-[#C4902A] rounded-full shrink-0"></span>
                <h3 className="text-white font-semibold text-xs tracking-[0.2em] uppercase">Why Choose Us</h3>
              </div>
              <ul className="space-y-2.5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-white/65 leading-relaxed">
                    <i className="ri-checkbox-circle-line text-[#C4902A] text-sm shrink-0 mt-0.5"></i>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#C4902A]/8 border border-[#C4902A]/20 rounded-2xl p-5">
              <p className="text-[#C4902A] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Service Area</p>
              <p className="text-white/65 text-xs leading-relaxed">{area}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
