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

const REPAIR_TYPES = [
  {
    icon: "ri-fire-line",
    title: "Furnace Repair",
    description:
      "Furnaces are essential for homeowners who experience cold winters with consistently low temperatures. Our technicians diagnose and fix all furnace issues quickly.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20repairing%20a%20residential%20gas%20furnace%20in%20a%20basement%2C%20professional%20tools%2C%20clean%20utility%20room%2C%20warm%20lighting%2C%20detailed%20mechanical%20work&width=600&height=400&seq=repair1&orientation=landscape",
  },
  {
    icon: "ri-temp-cold-line",
    title: "Air Conditioning Units",
    description:
      "Explore our selection of air conditioning units for large and small spaces to find the best air conditioner for you.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20servicing%20outdoor%20air%20conditioning%20condenser%20unit%2C%20professional%20repair%2C%20residential%20backyard%2C%20clear%20sky%20background%2C%20tools%20visible&width=600&height=400&seq=repair2&orientation=landscape",
  },
  {
    icon: "ri-water-flash-line",
    title: "Boilers",
    description:
      "A boiler uses hot water or steam running through pipes to distribute heat throughout your home. Call us today.",
    image: "https://readdy.ai/api/search-image?query=professional%20HVAC%20technician%20inspecting%20and%20repairing%20a%20residential%20boiler%20system%2C%20pipes%20and%20valves%2C%20clean%20mechanical%20room%2C%20detailed%20close-up%20work&width=600&height=400&seq=repair3&orientation=landscape",
  },
  {
    icon: "ri-sun-line",
    title: "Ductless Mini Split",
    description:
      "Ductless mini split systems are heating and cooling devices that do not require ductwork to function.",
    image: "https://readdy.ai/api/search-image?query=technician%20installing%20and%20servicing%20ductless%20mini%20split%20air%20conditioner%20wall%20unit%20indoors%2C%20white%20wall%2C%20professional%20HVAC%20work%2C%20clean%20modern%20interior&width=600&height=400&seq=repair4&orientation=landscape",
  },
  {
    icon: "ri-drop-line",
    title: "Water Heaters & Tankless",
    description:
      "Water heaters heat and store extra water, while tankless heaters heat water on demand without storing it.",
    image: "https://readdy.ai/api/search-image?query=plumber%20technician%20repairing%20residential%20water%20heater%20tank%20in%20utility%20room%2C%20pipes%20and%20valves%2C%20professional%20tools%2C%20clean%20background&width=600&height=400&seq=repair5&orientation=landscape",
  },
  {
    icon: "ri-temp-hot-line",
    title: "Radiators",
    description:
      "Radiators are heating devices used to provide warmth and comfort during cold weather.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20bleeding%20and%20servicing%20a%20cast%20iron%20radiator%20in%20a%20home%2C%20professional%20repair%2C%20vintage%20radiator%2C%20warm%20interior%20lighting&width=600&height=400&seq=repair6&orientation=landscape",
  },
  {
    icon: "ri-fire-fill",
    title: "Fireplaces",
    description:
      "A fireplace makes a home a home. Shop our top selection of gas fireplaces, wood burning fireplaces, electric fireplaces.",
    image: "https://readdy.ai/api/search-image?query=gas%20fireplace%20repair%20and%20servicing%20by%20HVAC%20technician%2C%20modern%20living%20room%20fireplace%2C%20professional%20tools%2C%20clean%20interior%2C%20warm%20ambiance&width=600&height=400&seq=repair7&orientation=landscape",
  },
  {
    icon: "ri-flow-chart",
    title: "Ductwork",
    description:
      "Ductwork is a system of ducts, just a pipe tube or channel that conveys a substance — call us today.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20inspecting%20and%20sealing%20ductwork%20in%20attic%20or%20basement%2C%20professional%20tools%2C%20metal%20ducts%2C%20clean%20utility%20space&width=600&height=400&seq=repair8&orientation=landscape",
  },
  {
    icon: "ri-contrast-2-line",
    title: "Heat Pumps",
    description:
      "Heat pumps are versatile, efficient cooling and heating systems — call us for all heat pump repairs.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20servicing%20outdoor%20heat%20pump%20unit%2C%20professional%20repair%20work%2C%20residential%20property%2C%20tools%20and%20equipment%20visible%2C%20clear%20background&width=600&height=400&seq=repair9&orientation=landscape",
  },
  {
    icon: "ri-leaf-line",
    title: "UV Air Purifiers",
    description:
      "We reviewed the best UV lights for HVAC systems. We regularly update our products as new models are released each year.",
    image: "https://readdy.ai/api/search-image?query=UV%20air%20purifier%20installation%20inside%20HVAC%20system%20ductwork%2C%20technician%20installing%20UV%20light%2C%20clean%20mechanical%20room%2C%20professional%20equipment&width=600&height=400&seq=repair10&orientation=landscape",
  },
  {
    icon: "ri-water-percent-line",
    title: "Pool Heaters",
    description:
      "An electric heat pump pool heater works just like an air conditioning unit in reverse.",
    image: "https://readdy.ai/api/search-image?query=pool%20heat%20pump%20heater%20installation%20and%20repair%2C%20technician%20working%20on%20pool%20equipment%2C%20backyard%20pool%20area%2C%20professional%20HVAC%20work&width=600&height=400&seq=repair11&orientation=landscape",
  },
  {
    icon: "ri-gas-station-line",
    title: "Gas Lines",
    description:
      "Gas piping is a piping system in your house used to carry natural gas from the supply directly to your heating system.",
    image: "https://readdy.ai/api/search-image?query=licensed%20gas%20technician%20inspecting%20and%20testing%20residential%20gas%20lines%20and%20connections%2C%20professional%20tools%2C%20safety%20equipment%2C%20utility%20room&width=600&height=400&seq=repair12&orientation=landscape",
  },
];

const REPAIR_FAQS = [
  {
    q: "When should I call for HVAC repair instead of waiting?",
    a: "Call immediately if your system stops working entirely, makes unusual noises, produces strange smells, or if you notice ice forming on your unit. Delaying repairs often leads to more costly damage. Park Lawn Heating offers 24/7 emergency service — call (416) 832-5842 any time.",
  },
  {
    q: "What does HVAC repair include for a broken AC or furnace?",
    a: "Our repair service includes a full diagnostic assessment, identification of the root cause, transparent quote before any work begins, and professional repair using quality parts. We repair all major brands of furnaces, air conditioners, heat pumps, boilers, and ductless systems.",
  },
  {
    q: "How long does HVAC repair usually take?",
    a: "Most standard HVAC repairs are completed in 1–3 hours. Complex issues or parts that need to be ordered may take longer. We always provide a clear timeline before starting work so you know exactly what to expect.",
  },
  {
    q: "When should I schedule furnace repair?",
    a: "Schedule furnace repair as soon as you notice reduced heating performance, unusual sounds, frequent cycling, or higher energy bills. Don't wait until your furnace fails completely — early repair is almost always less expensive than emergency replacement.",
  },
  {
    q: "What are common signs I need AC repair?",
    a: "Common signs include warm air blowing from vents, weak airflow, unusual noises or odors, frequent on/off cycling, ice on the unit, or higher than normal energy bills. Call Park Lawn Heating at (416) 832-5842 for a fast diagnosis.",
  },
];

export default function RepairPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="HVAC Repair in Etobicoke"
          headline="Fast, Expert HVAC Repair<br />You Can Count On"
          subheadline="Need fast HVAC repair in Etobicoke? Park Lawn Heating fixes heating and cooling problems quickly and reliably. From furnaces to air conditioners, our local technicians respond with clear pricing, honest advice, and service you can trust when it matters most."
          primaryCTA={{ label: "Get Emergency Service", href: `tel:${SITE.phonePlain}` }}
          secondaryCTA={{ label: "Book a Repair", href: "/contact" }}
        />

        <TrustBar />

        {/* Intro */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  HVAC Emergency Repair Services
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Homes? Condos? Business?<br />We Fix All Your HVAC Problems
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  <p>
                    Our most trusted emergency repair services provide comprehensive solutions for any heating, ventilation, or air conditioning (HVAC) system issues you may be experiencing. At a breakdown, our team of experienced and trained technicians can quickly diagnose the issue and restore comfort as quickly as possible, which is why we prioritize fast and efficient repair services.
                  </p>
                  <p>
                    Our same-day emergency repair services cover a wide range of issues, including broken thermostats, refrigerant leaks, compressor failures, clogged air filters, and more. We have all types of HVAC systems, including central air conditioning, heat pumps, ductless systems, boilers, and more. Our goal is to fix your conditioning efficiently and effectively.
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
                  src="https://readdy.ai/api/search-image?query=professional%20HVAC%20technician%20in%20uniform%20repairing%20outdoor%20air%20conditioning%20unit%2C%20Etobicoke%20residential%20home%2C%20tools%20and%20equipment%2C%20confident%20expert%2C%20clear%20sky%20background&width=700&height=500&seq=repairhero&orientation=landscape"
                  alt="HVAC repair technician in Etobicoke"
                  className="w-full h-[380px] object-cover object-top"
                />
                <div className="absolute bottom-5 left-5 bg-[#C4902A] text-white px-5 py-3 rounded-xl">
                  <p className="text-xs font-bold tracking-wide uppercase">24/7 Emergency Service</p>
                  <p className="text-lg font-bold">{SITE.phone}</p>
                </div>
              </div>
            </div>

            {/* Repair types grid */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                What We Repair
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                All HVAC Systems, All Brands
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REPAIR_TYPES.map((item) => (
                <article
                  key={item.title}
                  className="bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden hover:border-[#C4902A]/30 transition-colors group"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#C4902A]/10 shrink-0">
                        <i className={`${item.icon} text-[#C4902A] text-base`}></i>
                      </div>
                      <h3 className="font-semibold text-[#1A1A1A] text-base">{item.title}</h3>
                    </div>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency CTA strip */}
        <div className="bg-[#0D0D0D] py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Available 24 Hours a Day</p>
              <h3
                className="text-white font-serif"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                HVAC emergency? Don&apos;t wait — call us now
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill"></i>
                {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/[0.07] transition-colors whitespace-nowrap text-sm"
              >
                Book Online
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <WhyChooseUs
          headline="Why Etobicoke Trusts Park Lawn Heating for Repairs"
          intro="Fast response, honest pricing, and licensed technicians — every repair, every time."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={REPAIR_FAQS}
          headline="HVAC Repair — Frequently Asked Questions"
          subheadline="Answers to common repair questions from Etobicoke homeowners"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Need HVAC Repair in Etobicoke? We&apos;re Ready."
          subheadline="Licensed technicians available 24/7. Transparent pricing before work begins. Call now or book online."
          ctaLabel="Call (416) 832-5842"
          ctaHref={`tel:${SITE.phonePlain}`}
        />
      </main>
      <Footer />
    </>
  );
}
