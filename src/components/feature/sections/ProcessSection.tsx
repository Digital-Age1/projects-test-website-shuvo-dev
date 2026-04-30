import { useRef, useEffect } from "react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessSectionProps {
  headline?: string;
  subheadline?: string;
  steps: Step[];
}

function useRevealOnScroll(ref: React.RefObject<HTMLElement | null>, delay = 0) {
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
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useRevealOnScroll(ref as React.RefObject<HTMLElement>, delay);
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)`,
      }}
    >
      {children}
    </div>
  );
}

export default function ProcessSection({
  headline = "Our Seamless 4-Step Process",
  subheadline = "From first call to final inspection — HVAC service made completely effortless.",
  steps,
}: ProcessSectionProps) {
  const headRef = useRef<HTMLDivElement>(null);
  useRevealOnScroll(headRef as React.RefObject<HTMLElement>, 0);

  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      id="process"
      style={{ background: "linear-gradient(160deg, #0C0C0C 0%, #181818 60%, #1D190D 100%)" }}
    >
      {/* Background gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 45% at 50% 100%, rgba(196,144,42,0.09) 0%, transparent 65%)" }}
      />
      {/* Subtle horizontal scan line */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(196,144,42,1) 0px, rgba(196,144,42,1) 1px, transparent 0px, transparent 80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="text-center mb-20 lg:mb-28"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#C4902A]/50" />
            <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.35em] uppercase">How It Works</p>
            <span className="w-12 h-px bg-[#C4902A]/50" />
          </div>
          <h2
            className="text-white font-serif leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {headline}
          </h2>
          <p className="text-white/60 text-base max-w-lg mx-auto leading-relaxed">{subheadline}</p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Connecting gold line — desktop only */}
          <div className="hidden lg:block absolute top-[54px] left-[12.5%] right-[12.5%] h-px z-0">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C4902A]/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isFinal = idx === steps.length - 1;
              return (
                <AnimatedCard key={step.num} delay={idx * 130}>
                  <div className={`group relative flex flex-col items-center text-center`}>

                    {/* Step icon circle */}
                    <div
                      className={`relative w-[108px] h-[108px] rounded-full flex items-center justify-center mb-8 shrink-0 border-2 transition-all duration-300 ${
                        isFinal
                          ? "bg-[#C4902A] border-[#C4902A] shadow-2xl shadow-[#C4902A]/30"
                          : "bg-white/[0.04] border-white/[0.12] group-hover:border-[#C4902A]/50 group-hover:bg-white/[0.07]"
                      }`}
                    >
                      {/* Step number — outer badge */}
                      <div
                        className={`absolute -top-3 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                          isFinal
                            ? "bg-white text-[#C4902A] border-white/50"
                            : "bg-[#C4902A] text-white border-[#C4902A]"
                        }`}
                      >
                        {step.num}
                      </div>
                      <i
                        className={`${step.icon} text-2xl ${isFinal ? "text-white" : "text-[#C4902A]"}`}
                      ></i>
                    </div>

                    {/* Large serif number — watermark */}
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none font-serif font-bold"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "7rem",
                        color: isFinal ? "rgba(196,144,42,0.06)" : "rgba(255,255,255,0.03)",
                        zIndex: -1,
                      }}
                    >
                      {step.num}
                    </div>

                    {/* Content */}
                    <h3
                      className={`font-semibold text-base mb-3 leading-snug ${isFinal ? "text-[#C4902A]" : "text-white/90"}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
                      {step.description}
                    </p>

                    {/* Bottom accent for final step */}
                    {isFinal && (
                      <div className="mt-5 inline-flex items-center gap-1.5 bg-[#C4902A]/15 border border-[#C4902A]/30 rounded-full px-4 py-1.5">
                        <i className="ri-check-line text-[#C4902A] text-xs"></i>
                        <span className="text-[#C4902A] text-[10px] font-bold tracking-wide uppercase">Guaranteed</span>
                      </div>
                    )}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-20 text-center"
          style={{ opacity: 0, transform: "translateY(16px)", animation: "none" }}
          ref={(el) => {
            if (!el) return;
            const obs = new IntersectionObserver(([entry]) => {
              if (entry.isIntersecting) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s";
                obs.disconnect();
              }
            }, { threshold: 0.2 });
            obs.observe(el);
          }}
        >
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
            Same-week estimates available &mdash; install slots go fast
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#C4902A] text-white font-bold px-10 py-4 rounded-full hover:bg-[#d4a030] transition-all whitespace-nowrap text-sm tracking-wider shadow-xl shadow-[#C4902A]/25"
            >
              Check Availability Today
              <i className="ri-arrow-right-line text-sm"></i>
            </a>
            <a
              href="tel:4168325842"
              className="inline-flex items-center gap-2.5 border border-white/15 text-white/65 font-semibold px-10 py-4 rounded-full hover:bg-white/[0.06] hover:text-white hover:border-white/30 transition-all whitespace-nowrap text-sm"
            >
              <i className="ri-phone-fill text-[#C4902A] text-sm"></i>
              (416) 832-5842
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
