import { useRef, useEffect, useState } from "react";
import { TESTIMONIALS } from "../../../mocks/testimonials";

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

function RevealDiv({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref as React.RefObject<HTMLElement>, delay);
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(28px)", transition: `opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)` }}
    >
      {children}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const featured = TESTIMONIALS[activeIdx];
  const all = TESTIMONIALS;

  const headRef = useRef<HTMLDivElement>(null);
  useReveal(headRef as React.RefObject<HTMLElement>, 0);

  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      id="testimonials"
      style={{ background: "linear-gradient(160deg, #0F0F0F 0%, #171717 100%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 0, transparent 40%)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* Gold top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(196,144,42,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Client Reviews</p>
            </div>
            <h2
              className="text-white font-serif leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1,2,3,4,5].map(i => <i key={i} className="ri-star-fill text-[#C4902A] text-base"></i>)}
            </div>
            <p className="text-white/35 text-sm">Google Verified · 5.0 Rating</p>
          </div>
        </div>

        {/* Featured large testimonial */}
        <RevealDiv delay={100} className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden">

            {/* Image side */}
            <div className="lg:col-span-4 relative h-64 lg:h-auto">
              <img
                src="https://public.readdy.ai/ai/img_res/edited_6be33b10c1fecb049f73f4f33c142d4e_5daea021.jpg"
                alt="Satisfied Park Lawn Heating client in Etobicoke"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent lg:to-[#C4902A] to-transparent opacity-40 lg:opacity-100" />
            </div>

            {/* Quote side */}
            <div
              className="lg:col-span-8 relative overflow-hidden p-10 lg:p-14 flex flex-col justify-between"
              style={{ background: "#C4902A" }}
            >
              {/* Giant quote mark */}
              <div
                className="absolute top-0 right-6 text-white/10 select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "16rem", lineHeight: 0.9 }}
              >
                &ldquo;
              </div>

              <div className="relative z-10">
                <div className="flex gap-0.5 mb-7">
                  {[1,2,3,4,5].map(i => <i key={i} className="ri-star-fill text-white text-lg"></i>)}
                </div>
                <blockquote
                  className="text-white font-serif leading-relaxed mb-9"
                  style={{ fontSize: "clamp(1.1rem, 1.9vw, 1.45rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  &ldquo;{featured.snippet}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={featured.avatar}
                      alt={featured.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/40 shrink-0"
                    />
                    <div>
                      <p className="text-white font-bold text-base leading-none mb-1">{featured.name}</p>
                      <a
                        href={featured.googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/65 text-xs hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <i className="ri-google-line text-xs"></i>
                        View on Google
                      </a>
                    </div>
                  </div>
                  {/* Switcher dots */}
                  <div className="flex gap-2">
                    {all.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`rounded-full transition-all cursor-pointer ${i === activeIdx ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
                        aria-label={`Review ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealDiv>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {all.filter((_, i) => i !== activeIdx).slice(0, 6).map((t, idx) => (
            <RevealDiv key={t.name} delay={100 + idx * 80}>
              <article
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 flex flex-col hover:border-[#C4902A]/30 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                onClick={() => setActiveIdx(all.indexOf(t))}
              >
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(s => <i key={s} className="ri-star-fill text-[#C4902A] text-xs"></i>)}
                </div>

                {/* Opening quote */}
                <p className="text-[#C4902A]/40 font-serif text-4xl leading-none mb-2 font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  &ldquo;
                </p>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-7">{t.snippet}</p>

                <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover ring-1 ring-white/10 shrink-0"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm leading-none mb-1">{t.name}</p>
                      <a
                        href={t.googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-white/25 hover:text-[#C4902A] transition-colors flex items-center gap-1"
                        onClick={e => e.stopPropagation()}
                      >
                        <i className="ri-google-line"></i>
                        Verified
                      </a>
                    </div>
                  </div>
                  <button
                    className="w-7 h-7 flex items-center justify-center rounded-full border border-white/10 text-white/25 hover:border-[#C4902A]/50 hover:text-[#C4902A] transition-colors shrink-0"
                    aria-label="View this review"
                  >
                    <i className="ri-expand-diagonal-line text-xs"></i>
                  </button>
                </div>
              </article>
            </RevealDiv>
          ))}
        </div>

      </div>
    </section>
  );
}
