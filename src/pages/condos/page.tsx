import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSection from "@/components/feature/sections/HeroSection";
import TrustBar from "@/components/feature/sections/TrustBar";
import WhyChooseUs from "@/components/feature/sections/WhyChooseUs";
import TestimonialsSection from "@/components/feature/sections/TestimonialsSection";
import FAQSection from "@/components/feature/sections/FAQSection";
import LeadFormSection from "@/components/feature/sections/LeadFormSection";
import FinalCTA from "@/components/feature/sections/FinalCTA";
import ServiceAreasSection from "@/components/feature/sections/ServiceAreasSection";
import { SITE, WHY_FEATURES } from "@/mocks/siteData";

const CONDO_SERVICES = [
  {
    icon: "ri-building-2-line",
    title: "Fan Coil Replacement",
    description:
      "Complete fan coil unit replacement in condo suites. We handle all aspects from removal of the old unit to installation, testing, and commissioning of the new system.",
  },
  {
    icon: "ri-tools-line",
    title: "Fan Coil Repair",
    description:
      "Fast, expert repair of fan coil units in condo buildings. We diagnose and fix all fan coil issues including motor failures, coil leaks, and control problems.",
  },
  {
    icon: "ri-contrast-2-line",
    title: "In-Suite Heat Pump Service",
    description:
      "Installation, repair, and maintenance of in-suite heat pump systems. We work within your building's specifications and coordinate with property management.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Preventative Maintenance",
    description:
      "Annual maintenance programs for condo HVAC systems. Regular service prevents costly breakdowns and keeps your suite comfortable year-round.",
  },
  {
    icon: "ri-group-line",
    title: "Building Management Coordination",
    description:
      "We coordinate directly with your building's property management team to ensure all work meets building requirements and minimizes disruption.",
  },
  {
    icon: "ri-water-flash-line",
    title: "Flood Prevention & Safety",
    description:
      "Condo HVAC breakdowns can cause water damage to multiple units. We respond quickly to prevent flooding and protect your investment and your neighbors.",
  },
];

const CONDO_FAQS = [
  {
    q: "What is a fan coil unit in a condo?",
    a: "A fan coil unit (FCU) is the primary heating and cooling system in most Toronto and Etobicoke condominiums. It connects to the building's central chilled and hot water loops to provide heating and cooling to your individual suite. When your fan coil fails, your entire suite loses heating or cooling — which is why fast, expert service is critical.",
  },
  {
    q: "How quickly can you respond to a condo HVAC emergency?",
    a: "We offer 24/7 emergency service for condo HVAC issues. Condo breakdowns are particularly urgent because they can affect neighboring units through water damage. Call (416) 832-5842 immediately for any condo HVAC emergency and we will dispatch a technician as quickly as possible.",
  },
  {
    q: "Do you coordinate with building management?",
    a: "Yes. We have extensive experience working within condo building regulations and coordinating with property management teams. We understand the unique requirements of in-suite work including access procedures, insurance requirements, and building-specific equipment specifications.",
  },
  {
    q: "Can you replace a fan coil in a condo?",
    a: "Yes. Fan coil replacement is one of our core condo services. We handle the full process including removal of the old unit, installation of the new fan coil, all connections to the building's water loops, testing, and commissioning. We work efficiently to minimize disruption to you and your neighbors.",
  },
  {
    q: "Do you service condo buildings across Etobicoke?",
    a: "Yes. We service condo buildings throughout Etobicoke and Toronto including Mimico, Humber Bay, Islington, and surrounding communities. Call (416) 832-5842 to confirm service availability for your building.",
  },
];

export default function CondosPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="Condo HVAC Specialists — Etobicoke & Toronto"
          headline="Expert Condo HVAC Service<br />Fan Coils & Heat Pumps"
          subheadline="Condominium heat pump, radiator, and fan coil breakdowns can be a major inconvenience for residents and can result in uncomfortable living conditions. Possible water damage to either your unit or the units above and below as they are all interconnected. Any breakdown in a condominium should be taken care of right away."
          primaryCTA={{ label: "Get Emergency Service", href: `tel:${SITE.phonePlain}` }}
          secondaryCTA={{ label: "Book a Service", href: "/contact" }}
        />

        <TrustBar />

        {/* Main content */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  Condo HVAC Experts
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  In-Suite Condo Specialists You Can Trust
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  <p>
                    Condo HVAC is a different challenge entirely. Space constraints, building corporation rules, and central loop systems require specialized expertise. As certified in-suite condo specialists, we replace and service fan coil units and in-suite heat pumps while working within your building's restrictions.
                  </p>
                  <p>
                    We are your go-to local HVAC contractor in the Etobicoke area. Specializing in both residential and commercial services, Park Lawn Heating is here to support YOU. Live in a condo building? Not a problem — we are in-suite condo specialists and experts in small homes to large office buildings.
                  </p>
                  <p>
                    Do you have any questions? Call us at{" "}
                    <a href={`tel:${SITE.phonePlain}`} className="text-[#C4902A] font-semibold hover:underline">
                      {SITE.phone}
                    </a>
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${SITE.phonePlain}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
                  >
                    <i className="ri-phone-fill"></i>
                    Call {SITE.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A]/5 transition-colors whitespace-nowrap text-sm"
                  >
                    Book Online
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=large%20modern%20condominium%20building%20exterior%20in%20Toronto%20Etobicoke%2C%20multiple%20floors%2C%20glass%20and%20concrete%20architecture%2C%20clear%20sky%2C%20urban%20setting%2C%20professional%20photography&width=700&height=500&seq=condohero&orientation=landscape"
                  alt="Condo HVAC service in Etobicoke"
                  className="w-full h-[380px] object-cover object-top"
                />
                <div className="absolute bottom-5 left-5 bg-[#C4902A] text-white px-5 py-3 rounded-xl">
                  <p className="text-xs font-bold tracking-wide uppercase">24/7 Emergency Service</p>
                  <p className="text-lg font-bold">{SITE.phone}</p>
                </div>
              </div>
            </div>

            {/* Services grid */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Our Condo Services
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Complete In-Suite HVAC Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {CONDO_SERVICES.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl border border-[#EAE8E3] p-7 hover:border-[#C4902A]/30 transition-colors">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#C4902A]/10 mb-4">
                    <i className={`${s.icon} text-[#C4902A] text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">{s.title}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>

            {/* Warning callout */}
            <div className="bg-[#1A1A1A] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#C4902A]/20 shrink-0">
                <i className="ri-alert-line text-[#C4902A] text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3
                  className="text-white font-serif mb-3"
                  style={{ fontSize: "1.4rem", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Don&apos;t Delay Condo HVAC Repairs
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Condominium heat pump, radiator, and fan coil breakdowns can result in water damage to your unit and the units above and below — as they are all interconnected. Any breakdown in a condominium should be taken care of right away or at least inspected to confirm the unit is in safe condition from flooding.
                </p>
              </div>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm shrink-0"
              >
                <i className="ri-phone-fill"></i>
                Call Now
              </a>
            </div>
          </div>
        </section>

        <WhyChooseUs
          headline="Why Condo Residents Choose Park Lawn Heating"
          intro="Specialized expertise, building coordination, and fast response — exactly what condo HVAC requires."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={CONDO_FAQS}
          headline="Condo HVAC — Frequently Asked Questions"
          subheadline="Answers to common questions from Etobicoke condo residents"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Condo HVAC Issue? Call Us Now."
          subheadline="Certified in-suite condo specialists available 24/7. Fast response, building coordination, and guaranteed workmanship."
          ctaLabel="Call (416) 832-5842"
          ctaHref={`tel:${SITE.phonePlain}`}
        />
      </main>
      <Footer />
    </>
  );
}
