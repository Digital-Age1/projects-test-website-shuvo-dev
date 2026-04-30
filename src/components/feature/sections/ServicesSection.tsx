import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  image: string;
}

interface ServicesSectionProps {
  headline?: string;
  eyebrow?: string;
  services: Service[];
  bg?: string;
}

const IMG_FALLBACK = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const t = e.currentTarget;
  t.style.display = "none";
  const parent = t.parentElement;
  if (parent) parent.style.backgroundColor = "#2a2a2a";
};

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function RevealCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Set initial state via JS so it can be cleanly reversed (avoids inline-style vs CSS specificity issue)
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.75s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.75s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;
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

  return (
    <div ref={ref} className={`${className}`}>
      {children}
    </div>
  );
}

export default function ServicesSection({
  headline = "Comprehensive HVAC Services Tailored to You",
  eyebrow = "What We Offer",
  services,
  bg = "bg-[#F5F3EF]",
}: ServicesSectionProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  useReveal(headerRef);

  const featured = services[0];
  const secondary = services.slice(1, 3);
  const remaining = services.slice(3);

  return (
    <section className={`${bg} pt-16 pb-28 lg:pt-20 lg:pb-36`} id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#C4902A]" />
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">{eyebrow}</p>
            </div>
            <h2
              className="font-serif text-[#1A1A1A] leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {headline}
            </h2>
          </div>
          <Link
            to="/services"
            className="self-start lg:self-auto inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase border border-[#1A1A1A]/20 px-7 py-3.5 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all whitespace-nowrap"
          >
            View All Services
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        {/* Featured top row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">

          {/* Large featured card */}
          <RevealCard delay={0} className="lg:col-span-7">
            <article className="group relative rounded-2xl overflow-hidden h-[460px] lg:h-[520px] cursor-pointer">
              <img
                src={featured.image}
                alt={featured.title}
                onError={IMG_FALLBACK}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

              {/* Service number */}
              <div className="absolute top-7 right-7 w-10 h-10 flex items-center justify-center">
                <span
                  className="text-white/15 font-serif font-bold text-4xl"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >01</span>
              </div>

              {/* Icon badge */}
              <div className="absolute top-7 left-7 w-11 h-11 flex items-center justify-center rounded-xl bg-[#C4902A] shadow-lg">
                <i className={`${featured.icon} text-white text-base`}></i>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#C4902A] text-[10px] font-bold tracking-[0.25em] uppercase mb-2">{featured.tagline}</p>
                <h3
                  className="text-white font-serif leading-snug mb-3"
                  style={{ fontSize: "1.6rem", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {featured.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm">{featured.description}</p>
                <Link
                  to={featured.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/25 hover:border-[#C4902A] hover:text-[#C4902A] pb-0.5 transition-all"
                >
                  Learn More
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </article>
          </RevealCard>

          {/* Two stacked medium cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {secondary.map((service, idx) => (
              <RevealCard key={service.id} delay={120 * (idx + 1)} className="flex-1">
                <article className="group relative rounded-2xl overflow-hidden h-[220px] lg:h-auto lg:flex-1 cursor-pointer" style={{ minHeight: "220px" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={IMG_FALLBACK}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />

                  <div className="absolute top-5 left-5 w-9 h-9 flex items-center justify-center rounded-xl bg-[#C4902A]">
                    <i className={`${service.icon} text-white text-sm`}></i>
                  </div>

                  <span
                    className="absolute top-5 right-5 text-white/10 font-serif font-bold text-2xl"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >0{idx + 2}</span>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#C4902A] text-[9px] font-bold tracking-[0.25em] uppercase mb-1">{service.tagline}</p>
                    <h3 className="text-white font-serif text-lg leading-snug mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {service.title}
                    </h3>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/55 hover:text-[#C4902A] transition-colors"
                    >
                      Learn More
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        {remaining.length > 0 && (
          <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(remaining.length, 3)}`}>
            {remaining.map((service, idx) => (
              <RevealCard key={service.id} delay={80 * idx} className="">
                <article className="group bg-white rounded-2xl overflow-hidden border border-[#EAE8E3] hover:border-[#C4902A]/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={IMG_FALLBACK}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-9 h-9 flex items-center justify-center rounded-xl bg-[#C4902A] shadow-lg">
                      <i className={`${service.icon} text-white text-sm`}></i>
                    </div>
                    <span
                      className="absolute top-4 right-4 text-white/15 font-serif font-bold text-3xl leading-none"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >0{idx + 4}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#C4902A] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">{service.tagline}</p>
                    <h3
                      className="font-serif font-bold text-[#1A1A1A] mb-3 leading-snug text-[1.1rem]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1 mb-5">{service.description}</p>
                    <Link
                      to={service.href}
                      className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1A1A] group-hover:text-[#C4902A] transition-colors"
                    >
                      Learn More
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
