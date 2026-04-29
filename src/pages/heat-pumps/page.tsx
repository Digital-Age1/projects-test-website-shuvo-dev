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
import BrandsBar from "@/components/feature/sections/BrandsBar";
import { SITE, WHY_FEATURES } from "@/mocks/siteData";

const HEAT_PUMP_TYPES = [
  {
    title: "Central Heat Pumps",
    description: "Full-home central heat pump systems that replace your existing furnace and AC with a single, highly efficient unit. Ideal for whole-home comfort.",
    image: "https://readdy.ai/api/search-image?query=modern%20central%20heat%20pump%20outdoor%20unit%20installed%20at%20residential%20home%2C%20clean%20backyard%2C%20professional%20installation%2C%20new%20equipment%2C%20clear%20sky%20background&width=600&height=400&seq=hp1&orientation=landscape",
  },
  {
    title: "Ductless Mini Split Heat Pumps",
    description: "Zone-by-zone heating and cooling without ductwork. Perfect for room additions, homes without ducts, or targeted comfort upgrades.",
    image: "https://readdy.ai/api/search-image?query=ductless%20mini%20split%20heat%20pump%20indoor%20and%20outdoor%20unit%20installation%2C%20modern%20home%20interior%2C%20white%20wall%20unit%2C%20professional%20installation%2C%20clean%20setting&width=600&height=400&seq=hp2&orientation=landscape",
  },
  {
    title: "Cold-Climate Heat Pumps",
    description: "Advanced heat pumps engineered to operate efficiently down to -25°C — perfect for Canadian winters in Etobicoke and Toronto.",
    image: "https://readdy.ai/api/search-image?query=cold%20climate%20heat%20pump%20outdoor%20unit%20in%20winter%20snow%2C%20residential%20home%2C%20Etobicoke%20Toronto%2C%20efficient%20heating%20system%2C%20professional%20installation&width=600&height=400&seq=hp3&orientation=landscape",
  },
  {
    title: "In-Suite Condo Heat Pumps",
    description: "Specialized heat pump systems for condominium suites. We work within building regulations and coordinate with property management.",
    image: "https://readdy.ai/api/search-image?query=in-suite%20condo%20heat%20pump%20installation%2C%20compact%20unit%20in%20condominium%2C%20professional%20HVAC%20technician%2C%20modern%20condo%20interior%2C%20clean%20installation&width=600&height=400&seq=hp4&orientation=landscape",
  },
];

const HEAT_PUMP_BENEFITS = [
  {
    icon: "ri-money-dollar-circle-line",
    title: "Up to $7,500 in Rebates",
    description: "Federal and provincial rebate programs can significantly offset the cost of a new heat pump. We guide you through the application process.",
  },
  {
    icon: "ri-leaf-line",
    title: "Heating & Cooling in One",
    description: "A heat pump replaces both your furnace and air conditioner — one system, one installation, year-round comfort.",
  },
  {
    icon: "ri-flashlight-line",
    title: "Highly Energy Efficient",
    description: "Heat pumps move heat rather than generate it, making them 2–4x more efficient than traditional heating systems.",
  },
  {
    icon: "ri-temp-cold-line",
    title: "Works to -25°C",
    description: "Modern cold-climate heat pumps are engineered for Canadian winters and maintain efficiency even in extreme cold.",
  },
  {
    icon: "ri-award-line",
    title: "Premium Brands",
    description: "We install Panasonic, Bosch, American Standard, York, and other top-rated heat pump brands with full warranty support.",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Same-Week Estimates",
    description: "Get a free, no-obligation estimate within the same week. Most installations are scheduled 1–2 weeks after estimate approval.",
  },
];

const HP_FAQS = [
  {
    q: "What is a heat pump and how does it work?",
    a: "A heat pump is an all-in-one heating and cooling system that moves heat rather than generating it. In winter, it extracts heat from outdoor air (even at -25°C) and transfers it inside. In summer, it reverses the process to cool your home. This makes heat pumps 2–4x more efficient than traditional furnaces.",
  },
  {
    q: "Are heat pumps effective in Etobicoke winters?",
    a: "Yes. Modern cold-climate heat pumps are specifically engineered for Canadian winters and operate efficiently down to -25°C. Park Lawn Heating installs cold-climate models from top brands that are proven performers in Etobicoke and Toronto weather conditions.",
  },
  {
    q: "What rebates are available for heat pump installation in Ontario?",
    a: "The Canada Greener Homes Grant offers up to $5,000 for heat pump installations, and additional provincial programs can bring total rebates to $7,500 or more. Eligibility depends on your current system and the equipment installed. Call Park Lawn Heating at (416) 832-5842 and we will walk you through available programs.",
  },
  {
    q: "Can a heat pump replace my furnace and AC?",
    a: "Yes. A heat pump provides both heating and cooling in a single system, effectively replacing both your furnace and air conditioner. This is one of the most cost-effective upgrades for Etobicoke homeowners — especially when combined with available rebates.",
  },
  {
    q: "How long does heat pump installation take?",
    a: "Most heat pump installations are completed in a single day — typically 6–10 hours depending on system complexity. Ductless mini split heat pump installations are often faster, typically 4–6 hours. We provide a clear timeline before starting any work.",
  },
];

export default function HeatPumpsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="Heat Pump Installation — Etobicoke & Toronto"
          headline="Heat Pump Installation<br />Heating & Cooling in One"
          subheadline="Condominium heat pump, radiator, and fan coil breakdowns can be a major inconvenience for residents and can result in uncomfortable living conditions. Park Lawn Heating installs and services all types of heat pumps for homes, condos, and businesses across Etobicoke."
          primaryCTA={{ label: "Get a Free Estimate", href: "/contact" }}
          secondaryCTA={{ label: "Call (416) 832-5842", href: `tel:${SITE.phonePlain}` }}
        />

        <TrustBar />

        {/* Rebate banner */}
        <div className="bg-[#C4902A] py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <i className="ri-money-dollar-circle-line text-white text-xl shrink-0"></i>
              <p className="text-white text-sm font-semibold text-center sm:text-left">
                <strong>Save up to $7,500 in Heat Pump Rebates!</strong> — Federal &amp; provincial programs available.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#C4902A] font-bold px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-sm shrink-0"
            >
              Learn More
              <i className="ri-arrow-right-line text-sm"></i>
            </Link>
          </div>
        </div>

        {/* Main content */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  Heat Pump Specialists
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  The Smart Upgrade for Etobicoke Homes
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  <p>
                    Heat pumps deliver both heating and cooling in a single, highly efficient system — making them one of the smartest investments for Etobicoke homes. A heat pump can replace your aging furnace and A/C simultaneously, operating efficiently down to -25°C.
                  </p>
                  <p>
                    Eligible for federal and provincial rebates of up to $7,500. Most installs booked 1–2 weeks out — secure your slot today. Park Lawn Heating is your trusted heat pump installer in Etobicoke.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
                  >
                    Get a Free Estimate
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                  <a
                    href={`tel:${SITE.phonePlain}`}
                    className="inline-flex items-center justify-center gap-2 border border-[#1A1A1A]/20 text-[#1A1A1A] font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A]/5 transition-colors whitespace-nowrap text-sm"
                  >
                    <i className="ri-phone-line text-[#C4902A]"></i>
                    {SITE.phone}
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20heat%20pump%20outdoor%20unit%20installed%20at%20Etobicoke%20residential%20home%2C%20professional%20installation%2C%20clean%20backyard%2C%20new%20equipment%2C%20clear%20sky%2C%20premium%20brand&width=700&height=500&seq=hphero&orientation=landscape"
                  alt="Heat pump installation in Etobicoke"
                  className="w-full h-[380px] object-cover object-top"
                />
              </div>
            </div>

            {/* Benefits */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Why Choose a Heat Pump
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The Benefits of Heat Pump Technology
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {HEAT_PUMP_BENEFITS.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl border border-[#EAE8E3] p-7">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#C4902A]/10 mb-4">
                    <i className={`${b.icon} text-[#C4902A] text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">{b.title}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>

            {/* Types */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Types We Install
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Heat Pump Solutions for Every Property
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {HEAT_PUMP_TYPES.map((t) => (
                <article
                  key={t.title}
                  className="bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden hover:border-[#C4902A]/30 transition-colors group"
                >
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-semibold text-[#1A1A1A] text-lg mb-3">{t.title}</h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{t.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <BrandsBar />

        <WhyChooseUs
          headline="Why Etobicoke Homeowners Choose Park Lawn Heating"
          intro="Expert heat pump installation with rebate guidance, premium brands, and guaranteed workmanship."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={HP_FAQS}
          headline="Heat Pump — Frequently Asked Questions"
          subheadline="Everything you need to know about heat pump installation in Etobicoke"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Ready to Upgrade to a Heat Pump? Get a Same-Week Estimate."
          subheadline="Save up to $7,500 in rebates. Licensed installation. Premium brands. Guaranteed workmanship. Call or book online today."
          ctaLabel="Request a Free Estimate"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
