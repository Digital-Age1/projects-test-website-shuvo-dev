import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "../../components/feature/sections/HeroSection";
import TrustBar from "../../components/feature/sections/TrustBar";
import AIAnswerBlock from "../../components/feature/sections/AIAnswerBlock";
import ProcessSection from "../../components/feature/sections/ProcessSection";
import WhyChooseUs from "../../components/feature/sections/WhyChooseUs";
import ServiceAreasSection from "../../components/feature/sections/ServiceAreasSection";
import TestimonialsSection from "../../components/feature/sections/TestimonialsSection";
import FAQSection from "../../components/feature/sections/FAQSection";
import FinalCTA from "../../components/feature/sections/FinalCTA";
import LeadFormSection from "../../components/feature/sections/LeadFormSection";
import BrandsBar from "../../components/feature/sections/BrandsBar";
import DuctlessSection from "@/pages/home/components/DuctlessSection";
import { PROCESS_STEPS, WHY_FEATURES, SITE } from "../../mocks/siteData";
import { Link } from "react-router-dom";

const DETAILED_SERVICES = [
  {
    id: "ductless",
    icon: "ri-sun-line",
    badge: "Primary Revenue Service",
    title: "Ductless Mini Split A/C Installation",
    description:
      "Ductless mini split systems are the smart upgrade for Etobicoke homes that want zoned comfort without ductwork. Ideal as an add-on to your existing HVAC system \u2014 perfect for room additions, finished basements, garages, sunrooms, or any space your central system can\u2019t reach. Energy-efficient inverter technology cools in summer and heats in winter.",
    includes: [
      "Single &amp; multi-zone mini split installation",
      "Zoned room-by-room climate control",
      "Add-on to existing HVAC systems",
      "New room &amp; addition installations",
      "Inverter heat pump (heating + cooling)",
      "All major brands \u2014 Panasonic, Bosch &amp; more",
    ],
    note: "Ideal for: Homeowners upgrading comfort, large homes, additions, spaces without ductwork.",
  },
  {
    id: "heatpump",
    icon: "ri-contrast-2-line",
    badge: "Primary Revenue Service",
    title: "Heat Pump Installation",
    description:
      "Heat pumps deliver both heating and cooling in a single, highly efficient system \u2014 making them one of the smartest investments for Etobicoke homes. A heat pump can replace your aging furnace and A/C simultaneously, operating efficiently down to \u221225\u00b0C. Eligible for federal and provincial rebates. Most installs booked 1\u20132 weeks out \u2014 secure your slot today.",
    includes: [
      "Central &amp; ductless heat pump installation",
      "Full system replacement (furnace + A/C)",
      "Cold-climate heat pumps to \u221225\u00b0C",
      "Federal &amp; provincial rebate guidance",
      "Load calculations &amp; system sizing",
      "Post-installation commissioning &amp; testing",
    ],
    note: "Ideal for: Homeowners replacing aging systems, energy upgraders, rebate seekers.",
  },
  {
    id: "condos",
    icon: "ri-building-2-line",
    badge: "Condo Specialist",
    title: "Condo Fan Coil & In-Suite HVAC",
    description:
      "Condo HVAC is a different challenge entirely. Space constraints, building corporation rules, and central loop systems require specialized expertise. As certified in-suite condo specialists, we replace and service fan coil units and in-suite heat pumps while working within your building\u2019s restrictions. This is the primary comfort system solution for Etobicoke condo residents \u2014 not a supplemental add-on.",
    includes: [
      "Fan coil repair &amp; full replacement",
      "In-suite heat pump service",
      "Building management coordination",
      "Space-constrained installations",
      "Preventative maintenance programs",
      "Single units to large condo complexes",
    ],
    note: "Ideal for: Condo owners replacing primary HVAC \u2014 fan coil or in-suite heat pump units.",
  },
  {
    id: "emergency",
    icon: "ri-flashlight-line",
    badge: null,
    title: "Repair & Emergency Services",
    description:
      "Our HVAC technicians are fully licensed and will examine all repair options before recommending replacement. If you need furnace repair, AC troubleshooting, or emergency HVAC service anywhere in Etobicoke, don\u2019t hesitate \u2014 we\u2019re available 24 hours a day.",
    includes: [
      "Same-day emergency response",
      "Furnace &amp; boiler repair",
      "AC repair &amp; troubleshooting",
      "Gas fireplace repair",
      "Thermostat diagnosis &amp; repair",
      "System diagnostics &amp; tune-up",
    ],
    note: null,
  },
  {
    id: "installation",
    icon: "ri-settings-3-line",
    badge: null,
    title: "Furnace & HVAC Installation",
    description:
      "Whether replacing an old furnace or installing a complete new HVAC system, our team works quickly and efficiently to find the best solution for your home or business. We install all major brands and handle new builds, replacements, and upgrades.",
    includes: [
      "High-efficiency furnace installation",
      "Central air conditioner installation",
      "Boiler installation",
      "Commercial HVAC installation",
      "Full system design &amp; sizing",
      "Post-installation testing",
    ],
    note: null,
  },
  {
    id: "maintenance",
    icon: "ri-shield-check-line",
    badge: null,
    title: "HVAC Maintenance",
    description:
      "Scheduled yearly maintenance extends equipment life, reduces breakdowns, and protects your indoor air quality. Our annual plans cover HEPA filtration, UV light servicing, and full system inspections across all HVAC types.",
    includes: [
      "Annual maintenance plans",
      "HEPA filtration service",
      "UV bacteria-killing light service",
      "Mold &amp; odor elimination",
      "Filter replacement",
      "Full system inspection",
    ],
    note: null,
  },
  {
    id: "hotwater",
    icon: "ri-drop-line",
    badge: null,
    title: "Hot Water Repairs",
    description:
      "From boiler repairs to hot water heater replacements, our team restores your hot water fast. We service all major brands and systems across Etobicoke homes and commercial buildings.",
    includes: [
      "Hot water tank repair",
      "Boiler repair &amp; maintenance",
      "Tankless water heater service",
      "Waterline connections",
      "Hot water system replacement",
      "Annual boiler inspections",
    ],
    note: null,
  },
];

const SERVICES_FAQS = [
  {
    q: "What is the difference between a ductless system and a condo HVAC system?",
    a: "A ductless mini split is typically used as a supplemental or add-on system in houses \u2014 ideal for new rooms, homes without ductwork, or zoned comfort upgrades. A condo HVAC system (fan coil or in-suite heat pump) is the primary comfort system for condominium units. Park Lawn Heating specializes in both, but they serve very different needs. Call (416) 832-5842 and we\u2019ll help you identify which solution fits your situation.",
  },
  {
    q: "Is a ductless mini split A/C worth it for an Etobicoke home?",
    a: "Yes \u2014 especially if you\u2019re adding a room, finishing a basement, have an older home without ductwork, or want to stop paying to heat and cool the whole house when you\u2019re only using certain rooms. Ductless systems are energy-efficient, whisper-quiet, and most Etobicoke installations are completed in a single day. Call (416) 832-5842 for a free estimate.",
  },
  {
    q: "How quickly can you install a ductless system in Etobicoke?",
    a: "Most ductless mini split installations in Etobicoke are scheduled within 1\u20132 weeks of your estimate. The installation itself typically takes 4\u20138 hours. Same-week estimates are available. To secure your preferred installation date, call Park Lawn Heating at (416) 832-5842 as soon as possible \u2014 install slots fill quickly during peak seasons.",
  },
  {
    q: "What HVAC services does Park Lawn Heating offer in Etobicoke?",
    a: "Park Lawn Heating offers a full range of HVAC services including ductless mini split installation, heat pump installation and service, furnace repair and installation, AC service, 24/7 emergency HVAC repair, condo fan coil service, hot water heater repair, and indoor air quality solutions. We serve residential, commercial, and condo clients across Etobicoke and Toronto.",
  },
  {
    q: "How quickly can you respond to an HVAC emergency?",
    a: "We offer 24/7 emergency HVAC service across Etobicoke and Toronto. Emergency response times vary, but our team prioritizes urgent calls and dispatches technicians as quickly as possible. Call (416) 832-5842 immediately for any HVAC emergency and we will get someone to you fast.",
  },
  {
    q: "Do you offer free estimates for HVAC installation?",
    a: "Yes. We provide free, no-obligation estimates for HVAC and ductless installations across Etobicoke. Contact us by phone at (416) 832-5842 or submit a request online. A licensed technician will assess your needs and provide a transparent, detailed quote with no hidden fees before any work begins. Same-week estimates available.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="Licensed HVAC Services \u2014 Ductless &amp; Heat Pump Specialists"
          headline="Expert Ductless A/C &amp; Heat Pump<br />Installation in Etobicoke"
          subheadline="From ductless mini split installations and heat pump upgrades to emergency furnace repair and condo HVAC \u2014 Park Lawn Heating delivers premium service across Etobicoke and Toronto. Same-week estimates available. Install slots are limited."
          primaryCTA={{ label: "Request a Free Quote", href: "/contact" }}
          secondaryCTA={{ label: "Call Now: (416) 832-5842", href: "tel:4168325842" }}
        />

        <TrustBar />

        {/* Urgency banner */}
        <div className="bg-[#C4902A] py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <i className="ri-time-line text-white text-base shrink-0"></i>
              <p className="text-white text-sm font-semibold text-center sm:text-left">
                Install slots are filling quickly this season \u2014 most installations booked 1\u20132 weeks out.
              </p>
            </div>
            <a
              href={`tel:${SITE.phonePlain}`}
              className="inline-flex items-center gap-2 bg-white text-[#C4902A] font-bold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-sm shrink-0"
            >
              <i className="ri-phone-fill text-sm"></i>
              Same-Week Estimate
            </a>
          </div>
        </div>

        {/* Detailed Services */}
        <section className="bg-[#FAF8F5] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Our Services
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Comprehensive HVAC Services for Etobicoke
              </h2>
              <p className="text-[#6B6B6B] text-sm max-w-xl mx-auto">
                Ductless A/C and heat pump specialists first \u2014 plus the full range of heating, cooling, and condo HVAC services.
              </p>
            </div>

            <div className="space-y-6">
              {DETAILED_SERVICES.map((service, idx) => (
                <article
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-2xl p-8 lg:p-12 border border-[#EAE8E3] ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F7F5F2]"
                  }`}
                >
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C4902A]/10 shrink-0">
                        <i className={`${service.icon} text-[#C4902A] text-xl`}></i>
                      </div>
                      {service.badge && (
                        <span className="inline-flex items-center gap-1.5 bg-[#C4902A]/10 text-[#C4902A] text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full">
                          <i className="ri-star-fill text-[9px]"></i>
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3
                      className="font-serif text-[#1A1A1A] mb-4"
                      style={{ fontSize: "1.6rem", fontFamily: "'Playfair Display', Georgia, serif" }}
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                    <p className="text-[#6B6B6B] leading-relaxed mb-4">{service.description}</p>
                    {service.note && (
                      <p className="text-[#C4902A] text-xs font-semibold mb-5 flex items-start gap-2">
                        <i className="ri-arrow-right-circle-line text-sm shrink-0 mt-0.5"></i>
                        {service.note}
                      </p>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#2C2C2C] transition-colors whitespace-nowrap"
                      >
                        Book This Service
                        <i className="ri-arrow-right-line"></i>
                      </Link>
                      <a
                        href={`tel:${SITE.phonePlain}`}
                        className="inline-flex items-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#1A1A1A]/5 transition-colors whitespace-nowrap"
                      >
                        <i className="ri-phone-line text-[#C4902A]"></i>
                        Get a Quote
                      </a>
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 bg-[#FAF8F5] rounded-xl px-4 py-3 text-sm text-[#2C2C2C]"
                          dangerouslySetInnerHTML={{
                            __html: `<i class="ri-checkbox-circle-line text-[#C4902A] text-base shrink-0"></i><span>${item}</span>`,
                          }}
                        />
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page CTA strip */}
        <div className="bg-[#0D0D0D] py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Limited Availability This Season</p>
              <h3
                className="text-white font-serif"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Get a same-week estimate and secure your install slot
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
              >
                Free Estimate
                <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/[0.07] transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill text-[#C4902A]"></i>
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Ductless Educational Section */}
        <DuctlessSection />

        <AIAnswerBlock
          headline="Ductless A/C, Heat Pump &amp; HVAC Services in Etobicoke"
          intro="Park Lawn Heating and Cooling Inc. is Etobicoke full-service HVAC contractor, specializing in ductless mini split A/C and heat pump installations. We handle everything from add-on ductless systems for houses to primary fan coil replacements in condo units \u2014 as well as emergency furnace repairs and annual maintenance programs."
          whatWeDo="Our licensed technicians install and service all types of heating and cooling systems, with a focus on ductless mini splits and heat pumps as primary revenue services. Condo fan coil specialists. Emergency HVAC available 24/7."
          services={[
            "Ductless Mini Split A/C Installation",
            "Heat Pump Installation &amp; Service",
            "24/7 Emergency Furnace &amp; AC Repair",
            "Condo Fan Coil &amp; In-Suite HVAC",
            "Annual Maintenance Plans",
            "Hot Water Heater Service",
            "Indoor Air Quality Systems",
            "Commercial HVAC Service",
          ]}
          benefits={[
            "Same-day and emergency availability",
            "Same-week estimates available",
            "7 premium brands installed",
            "Transparent flat-rate quotes",
            "Residential, condo &amp; commercial",
          ]}
          area="Park Lawn Heating serves Etobicoke, Mimico, Humber Bay, Islington, Rexdale, Lakeshore, New Toronto, Long Branch, Alderwood, and all surrounding Toronto communities."
        />

        <ProcessSection
          headline="How Our HVAC Service Works"
          subheadline="Simple, transparent, professional \u2014 every time."
          steps={PROCESS_STEPS}
        />

        <WhyChooseUs
          headline="The Park Lawn Heating Difference"
          intro="Not all HVAC contractors are equal. Here\u2019s what separates Park Lawn Heating from the rest of Etobicoke HVAC options."
          features={WHY_FEATURES}
        />

        {/* Mid-page CTA strip 2 */}
        <div
          className="py-14"
          style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1A160A 100%)" }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase mb-3">Don\u2019t Wait</p>
            <h3
              className="text-white font-serif mb-3"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Most install slots are booked 1\u20132 weeks out during peak season
            </h3>
            <p className="text-white/40 text-sm mb-7">Call today or submit a request for a same-week free estimate.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-[#C4902A] text-white font-bold px-10 py-4 rounded-full hover:bg-[#d4a030] transition-all whitespace-nowrap text-sm tracking-wide"
            >
              Request a Free Estimate \u2014 Same Week Available
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>

        <BrandsBar />
        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={SERVICES_FAQS}
          headline="HVAC Services \u2014 Frequently Asked Questions"
          subheadline="Clear answers about ductless, heat pump, and HVAC services in Etobicoke"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Ready for Expert HVAC Service in Etobicoke?"
          subheadline="Our licensed technicians are standing by. Book your service today and enjoy $50 off your first visit. Same-week estimates available."
          ctaLabel="Request a Free Estimate"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}