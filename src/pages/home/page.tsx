import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "../../components/feature/sections/HeroSection";
import TrustBar from "../../components/feature/sections/TrustBar";
import BrandsBar from "../../components/feature/sections/BrandsBar";
import HomeServicesGrid from "./components/HomeServicesGrid";
import AIAnswerBlock from "../../components/feature/sections/AIAnswerBlock";
import ProcessSection from "../../components/feature/sections/ProcessSection";
import WhyChooseUs from "../../components/feature/sections/WhyChooseUs";
import ServiceAreasSection from "../../components/feature/sections/ServiceAreasSection";
import TestimonialsSection from "../../components/feature/sections/TestimonialsSection";
import FAQSection from "../../components/feature/sections/FAQSection";
import FinalCTA from "../../components/feature/sections/FinalCTA";
import LeadFormSection from "../../components/feature/sections/LeadFormSection";
import DuctlessSection from "./components/DuctlessSection";
import { PROCESS_STEPS, WHY_FEATURES, HOME_FAQS } from "../../mocks/siteData";
import { useRef, useEffect } from "react";

const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function useReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function Home() {
  const postSvcRef = useRef<HTMLDivElement>(null);
  const postTestiRef = useRef<HTMLDivElement>(null);
  useReveal(postSvcRef as React.RefObject<HTMLElement>, 0);
  useReveal(postTestiRef as React.RefObject<HTMLElement>, 0);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="Etobicoke HVAC furnace, A/C & Heat Pump Specialists"
          headline="Furnace &amp; AC<br />Installs Done Right"
          subheadline="Park Lawn Heating is Etobicoke go-to team for ductless mini split and heat pump installations completed in one day, fully licensed, with same-week estimates. We also handle furnace repair, condo HVAC, and 24/7 emergencies."
          urgencyLine="Limited install availability this month — next openings filling quickly"
          primaryCTA={{ label: "Get a Quote for Next Available Install", href: "#lead-form" }}
          secondaryCTA={{ label: "Explore Services", href: "#our-services" }}
        />
        <TrustBar />
        <BrandsBar />
        <HomeServicesGrid />
        <DuctlessSection />

        {/* POST-SERVICES CTA */}
        <div ref={postSvcRef} className="relative overflow-hidden" style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}>
          <div className="absolute inset-0">
            <img src="https://public.readdy.ai/ai/img_res/edited_c3dd45033656a23b2ea842b0b3791c3e_33df6d44.jpg" alt="Premium home comfort by Park Lawn Heating" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/97 via-[#0A0A0A]/85 to-[#0A0A0A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#C4902A]" />
                <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase">Emergency or Routine — We Cover It All</p>
              </div>
              <h3 className="text-white font-serif leading-tight mb-4" style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}>
                Let Etobicoke Most Trusted Specialists Handle It
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">Same-day response. Transparent pricing before work begins. Licensed and insured for your peace of mind.</p>
              <div className="flex items-center gap-2.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] shrink-0 animate-pulse" />
                <p className="text-[#C4902A] text-xs font-bold tracking-wide uppercase">Most installs booked 7–10 days out — book before peak season demand</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center justify-center gap-2.5 bg-[#C4902A] text-white font-bold px-9 py-4 rounded-full hover:bg-[#d4a030] transition-all whitespace-nowrap text-sm tracking-wide shadow-xl shadow-[#C4902A]/30 cursor-pointer">
                Check Availability Today <i className="ri-arrow-right-line"></i>
              </a>
              <a href="tel:4168325842" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-9 py-4 rounded-full hover:bg-white/[0.07] hover:border-white/40 transition-all whitespace-nowrap text-sm">
                <i className="ri-phone-fill text-[#C4902A]"></i> Call (416) 832-5842
              </a>
            </div>
          </div>
        </div>

        <AIAnswerBlock
          headline="Ductless A/C & Heat Pump Specialists in Etobicoke, Toronto"
          intro="Park Lawn Heating and Cooling Inc. is Etobicoke leading ductless mini split and heat pump installer. Fully licensed and insured, our team serves residential homes, condo units, and commercial properties across Etobicoke and Toronto with expert installations, repairs, and maintenance."
          whatWeDo="We specialize in ductless A/C and heat pump systems — installing, servicing, and maintaining all major brands. We also handle furnace repair and installation, condo fan coil service, hot water systems, and 24/7 emergency HVAC for the full Etobicoke area."
          services={["Ductless Mini Split A/C Installation","Heat Pump Installation &amp; Service","Furnace Repair &amp; Installation","24/7 Emergency HVAC","Condo Fan Coil Service","Hot Water Heater Repair","Indoor Air Quality Solutions","Annual Maintenance Plans"]}
          benefits={["Fully licensed &amp; insured technicians","Upfront, transparent quotes","24/7 emergency availability","10+ years in Etobicoke","Premium brand installations","Same-week estimates available"]}
          area="246 Park Lawn Road, Toronto, Ontario M8Y. Serving Etobicoke, Mimico, New Toronto, Long Branch, Humber Bay, Islington, Rexdale, and surrounding communities."
        />
        <ProcessSection steps={PROCESS_STEPS} />
        <WhyChooseUs features={WHY_FEATURES} />
        <ServiceAreasSection />
        <TestimonialsSection />

        {/* POST-TESTIMONIALS CTA */}
        <div ref={postTestiRef} className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1A160A 100%)", opacity: 0, transform: "translateY(16px)", transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,144,42,0.07) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="flex gap-0.5 justify-center mb-5">
              {[1,2,3,4,5].map(i => <i key={i} className="ri-star-fill text-[#C4902A] text-lg"></i>)}
            </div>
            <p className="text-white font-serif mb-2 leading-tight" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontFamily: "'Playfair Display', Georgia, serif" }}>
              Join Hundreds of Satisfied Etobicoke Homeowners
            </p>
            <p className="text-white/40 text-sm mb-2">Book your service today and save $50 on your first visit.</p>
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C4902A] shrink-0 animate-pulse" />
              <p className="text-[#C4902A] text-xs font-bold tracking-wide uppercase">Next available openings filling quickly — request your estimate now</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#lead-form" onClick={(e) => { e.preventDefault(); scroll("lead-form"); }} className="inline-flex items-center gap-2.5 bg-[#C4902A] text-white font-bold px-10 py-4 rounded-full hover:bg-[#d4a030] transition-all whitespace-nowrap text-sm tracking-wide shadow-xl shadow-[#C4902A]/25 cursor-pointer">
                Request Your Estimate — $50 Off First Visit <i className="ri-arrow-right-line"></i>
              </a>
              <a href="tel:4168325842" className="inline-flex items-center gap-2.5 border border-white/20 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/[0.06] hover:border-white/40 transition-all whitespace-nowrap text-sm">
                <i className="ri-phone-fill text-[#C4902A]"></i> Call Now
              </a>
            </div>
          </div>
        </div>

        <FAQSection faqs={HOME_FAQS} />
        <LeadFormSection />
        <FinalCTA
          headline="Secure Your Install Slot Before It&apos;s Gone"
          subheadline="Etobicoke ductless A/C and heat pump specialists — available 24/7. Most installs booked 7–10 days out. Same-week estimates. Book now and save $50 on your first service."
          ctaLabel="Get a Quote for Next Available Install"
          ctaHref="#lead-form"
        />
      </main>
      <Footer />
    </>
  );
}