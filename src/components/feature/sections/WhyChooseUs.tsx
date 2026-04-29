import { SITE } from "../../../mocks/siteData";
import { useRef, useEffect } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  headline?: string;
  intro?: string;
  features: Feature[];
}

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

export default function WhyChooseUs({
  headline = "Why Etobicoke Trusts Park Lawn Heating",
  intro = "For nearly a decade, homeowners and condo residents across Etobicoke have relied on our team for honest, expert HVAC service. Here\u2019s what sets us apart.",
  features,
}: WhyChooseUsProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useReveal(imgRef as React.RefObject<HTMLElement>, 0);
  useReveal(contentRef as React.RefObject<HTMLElement>, 200);

  return (
    <section className="bg-[#FAF8F5] py-28 lg:py-36 overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Image column */}
          <div
            ref={imgRef}
            className="lg:col-span-5 relative"
            style={{ opacity: 0, transform: "translateX(-28px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
          >
            {/* Primary large image */}
            <div className="relative rounded-2xl overflow-hidden h-[480px] lg:h-[640px] w-full">
              <img
                src="https://public.readdy.ai/ai/img_res/edited_a0766e7ed43cc514a15acd51f81df19f_d340f4ed.jpg"
                alt="Park Lawn Heating licensed technician serving Etobicoke"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              {/* Bottom location tag */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-white/10 flex items-center gap-3">
                  <i className="ri-map-pin-fill text-[#C4902A] text-base shrink-0"></i>
                  <div>
                    <p className="text-white font-semibold text-sm leading-none mb-0.5">{SITE.addressShort}</p>
                    <p className="text-white/40 text-xs">Our Home Base</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5-Star floating card */}
            <div className="absolute -right-4 lg:-right-8 top-14 bg-[#1A1A1A] rounded-2xl p-5 shadow-2xl border border-white/[0.08] w-52">
              <div className="flex items-center gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => <i key={i} className="ri-star-fill text-[#C4902A] text-sm"></i>)}
              </div>
              <p className="text-white font-semibold text-sm leading-snug mb-1">Google Verified</p>
              <p className="text-white/40 text-xs leading-relaxed">5-Star rated in Etobicoke, Toronto</p>
            </div>

            {/* Years badge */}
            <div className="absolute -left-4 lg:-left-6 bottom-32 bg-[#C4902A] rounded-2xl p-5 shadow-xl text-center w-28">
              <p
                className="text-white font-serif font-bold text-3xl leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                10+
              </p>
              <p className="text-white/80 text-[10px] tracking-wide uppercase mt-1">Years in Etobicoke</p>
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={contentRef}
            className="lg:col-span-7"
            style={{ opacity: 0, transform: "translateY(28px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Why Choose Us</p>
            </div>
            <h2
              className="font-serif text-[#1A1A1A] leading-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {headline}
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-10 text-base max-w-xl">{intro}</p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="group bg-white rounded-xl p-5 border border-[#EAE8E3] hover:border-[#C4902A]/25 hover:shadow-md transition-all flex gap-4"
                  style={{
                    opacity: 0,
                    transform: "translateY(16px)",
                    transition: `opacity 0.6s ease ${i * 80 + 300}ms, transform 0.6s ease ${i * 80 + 300}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const obs = new IntersectionObserver(([entry]) => {
                      if (entry.isIntersecting) {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                        obs.disconnect();
                      }
                    }, { threshold: 0.1 });
                    obs.observe(el);
                  }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#C4902A]/8 group-hover:bg-[#C4902A]/15 transition-colors shrink-0">
                    <i className={`${f.icon} text-[#C4902A] text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-[#8A8A8A] text-xs leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2C2C2C] transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill text-[#C4902A]"></i>
                Call {SITE.phone}
              </a>
              <a
                href="#lead-form"
                onClick={(e) => { e.preventDefault(); document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/25 text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors whitespace-nowrap text-sm cursor-pointer"
              >
                Book a Service
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
