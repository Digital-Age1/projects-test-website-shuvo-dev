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

const INSTALL_TYPES = [
  {
    icon: "ri-fire-line",
    title: "Furnaces",
    description:
      "Furnaces are great for homeowners who experience cold winters with consistently low temperatures to get the heat they need quickly.",
    image: "https://readdy.ai/api/search-image?query=professional%20HVAC%20technician%20installing%20a%20new%20high-efficiency%20gas%20furnace%20in%20a%20residential%20basement%2C%20clean%20utility%20room%2C%20professional%20tools%2C%20new%20equipment&width=600&height=400&seq=install1&orientation=landscape",
  },
  {
    icon: "ri-temp-cold-line",
    title: "Air Conditioning Units",
    description:
      "Explore our selection of air conditioning units for large and small spaces to find the best air conditioner for you.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20installing%20new%20central%20air%20conditioning%20outdoor%20condenser%20unit%20at%20residential%20home%2C%20professional%20installation%2C%20clean%20backyard%2C%20new%20equipment&width=600&height=400&seq=install2&orientation=landscape",
  },
  {
    icon: "ri-water-flash-line",
    title: "Boilers",
    description:
      "A boiler uses hot water or steam running through pipes to distribute heat throughout your home. Call us today.",
    image: "https://readdy.ai/api/search-image?query=professional%20installation%20of%20new%20residential%20boiler%20system%2C%20clean%20mechanical%20room%2C%20pipes%20and%20connections%2C%20new%20equipment%2C%20HVAC%20technician%20working&width=600&height=400&seq=install3&orientation=landscape",
  },
  {
    icon: "ri-temp-hot-line",
    title: "Radiators",
    description:
      "Radiators are heating devices used to provide warmth and comfort during cold weather.",
    image: "https://readdy.ai/api/search-image?query=installation%20of%20modern%20radiator%20heating%20system%20in%20residential%20home%2C%20clean%20interior%2C%20professional%20plumber%2C%20new%20radiator%2C%20white%20walls&width=600&height=400&seq=install4&orientation=landscape",
  },
  {
    icon: "ri-drop-line",
    title: "Water Heaters & Tankless",
    description:
      "Water heaters heat and store extra water, while tankless heaters heat water on demand without storing it.",
    image: "https://readdy.ai/api/search-image?query=plumber%20installing%20new%20tankless%20water%20heater%20on%20wall%2C%20professional%20installation%2C%20utility%20room%2C%20new%20equipment%2C%20pipes%20and%20connections&width=600&height=400&seq=install5&orientation=landscape",
  },
  {
    icon: "ri-sun-line",
    title: "Ductless Mini Split",
    description:
      "Ductless mini split systems are heating and cooling devices that do not require ductwork to function.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20installing%20ductless%20mini%20split%20air%20conditioner%20wall%20unit%20in%20modern%20home%2C%20professional%20installation%2C%20white%20wall%2C%20clean%20interior&width=600&height=400&seq=install6&orientation=landscape",
  },
  {
    icon: "ri-gas-station-line",
    title: "Gas Lines",
    description:
      "Gas piping is a piping system in your house used to carry natural gas from the supply directly to your heating system.",
    image: "https://readdy.ai/api/search-image?query=licensed%20gas%20technician%20installing%20and%20testing%20residential%20gas%20line%20connections%2C%20professional%20tools%2C%20safety%20equipment%2C%20utility%20room%2C%20new%20piping&width=600&height=400&seq=install7&orientation=landscape",
  },
  {
    icon: "ri-fire-fill",
    title: "Fireplaces",
    description:
      "A fireplace makes a home a home. Shop our top selection of gas fireplaces, wood burning fireplaces, electric fireplaces.",
    image: "https://readdy.ai/api/search-image?query=professional%20installation%20of%20modern%20gas%20fireplace%20in%20living%20room%2C%20clean%20interior%2C%20technician%20working%2C%20new%20fireplace%20insert%2C%20warm%20ambiance&width=600&height=400&seq=install8&orientation=landscape",
  },
  {
    icon: "ri-flow-chart",
    title: "Ductwork",
    description:
      "Ductwork is a system of ducts, just a pipe tube or channel that conveys a substance — call us today.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20installing%20new%20sheet%20metal%20ductwork%20in%20attic%20or%20basement%2C%20professional%20installation%2C%20clean%20utility%20space%2C%20new%20ducts&width=600&height=400&seq=install9&orientation=landscape",
  },
  {
    icon: "ri-contrast-2-line",
    title: "Heat Pumps",
    description:
      "Heat pumps are versatile, efficient cooling and heating systems — call us for all heat pump installations.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20installing%20new%20heat%20pump%20outdoor%20unit%20at%20residential%20home%2C%20professional%20installation%2C%20clean%20backyard%2C%20new%20equipment%2C%20clear%20sky&width=600&height=400&seq=install10&orientation=landscape",
  },
  {
    icon: "ri-leaf-line",
    title: "UV Air Purifiers",
    description:
      "We reviewed the best UV lights for HVAC systems. We regularly update our products as new models are released each year.",
    image: "https://readdy.ai/api/search-image?query=UV%20air%20purifier%20installation%20inside%20HVAC%20air%20handler%2C%20technician%20installing%20UV%20light%20system%2C%20clean%20mechanical%20room%2C%20professional%20equipment&width=600&height=400&seq=install11&orientation=landscape",
  },
  {
    icon: "ri-water-percent-line",
    title: "Pool Heaters",
    description:
      "An electric heat pump pool heater works just like an air conditioning unit in reverse.",
    image: "https://readdy.ai/api/search-image?query=pool%20heat%20pump%20heater%20installation%20by%20technician%2C%20backyard%20pool%20area%2C%20new%20equipment%2C%20professional%20HVAC%20installation%2C%20clean%20outdoor%20setting&width=600&height=400&seq=install12&orientation=landscape",
  },
];

const INSTALL_FAQS = [
  {
    q: "What is included in a standard HVAC installation?",
    a: "A standard HVAC installation includes a full assessment of your home or building, system sizing and selection, removal of old equipment, installation of the new system, all necessary connections (electrical, gas, refrigerant), testing and commissioning, and a walkthrough of your new system. Park Lawn Heating handles everything from start to finish.",
  },
  {
    q: "How long does HVAC installation usually take?",
    a: "Most standard furnace or AC installations take 4–8 hours and are completed in a single day. Ductless mini split installations typically take 4–6 hours. More complex systems or full HVAC replacements may take 1–2 days. We always provide a clear timeline before starting.",
  },
  {
    q: "Do you offer free estimates for HVAC installation?",
    a: "Yes. Park Lawn Heating provides free, no-obligation estimates for all HVAC installations across Etobicoke. Call (416) 832-5842 or submit a request online. Same-week estimates are available.",
  },
  {
    q: "What brands do you install?",
    a: "We install all major HVAC brands including American Standard, York, Panasonic, Bosch, Keeprite, Raypak, and more. Our technicians are trained and certified on all major equipment lines to ensure proper installation and warranty compliance.",
  },
  {
    q: "Can you install HVAC in a condo?",
    a: "Yes. We are certified in-suite condo specialists with extensive experience installing fan coil units and heat pumps in Etobicoke and Toronto condo buildings. We coordinate with building management and work within all building regulations.",
  },
];

export default function InstallationPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="HVAC Installation in Etobicoke"
          headline="Expert HVAC Installation<br />Done Right the First Time"
          subheadline="Looking for HVAC installation in Etobicoke? Park Lawn Heating installs heating and cooling systems that fit your space and budget. From condos to commercial buildings, we focus on proper setup, efficient operation, and long-term reliability."
          primaryCTA={{ label: "Get a Free Estimate", href: "/contact" }}
          secondaryCTA={{ label: "Call (416) 832-5842", href: `tel:${SITE.phonePlain}` }}
        />

        <TrustBar />

        {/* Intro section */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  Etobicoke HVAC Installation
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Homes? Condos? Business?<br />We Fix All Your HVAC Problems
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  <p>
                    Park Lawn Heating Inc. is dedicated to providing the best HVAC installation services for homeowners and businesses throughout Etobicoke. We start by performing a thorough assessment of your property to determine the best solution for your HVAC needs. We then provide you with a detailed proposal that outlines the recommended system and the installation process.
                  </p>
                  <p>
                    At Park Lawn Heating, you get personal service from a computer that cares about its customers and strives to bring you the best experience and price possible. We are happy to provide information on housing and walk you through the steps to save with the new Canada Greener Homes Grant.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
                  >
                    Get a Free Quote
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
                  src="https://readdy.ai/api/search-image?query=professional%20HVAC%20technician%20installing%20new%20furnace%20and%20air%20conditioning%20system%20in%20Etobicoke%20home%2C%20clean%20basement%20utility%20room%2C%20professional%20tools%2C%20new%20equipment%2C%20confident%20expert&width=700&height=500&seq=installhero&orientation=landscape"
                  alt="HVAC installation in Etobicoke"
                  className="w-full h-[380px] object-cover object-top"
                />
                <div className="absolute bottom-5 left-5 bg-[#C4902A] text-white px-5 py-3 rounded-xl">
                  <p className="text-xs font-bold tracking-wide uppercase">Same-Week Estimates</p>
                  <p className="text-lg font-bold">{SITE.phone}</p>
                </div>
              </div>
            </div>

            {/* Installation types grid */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                What We Install
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                All Systems, All Brands, All Properties
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSTALL_TYPES.map((item) => (
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

        {/* Rebates banner */}
        <div
          className="py-14"
          style={{ background: "linear-gradient(135deg, #C4902A 0%, #b07e20 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/70 text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Canada Greener Homes Grant</p>
              <h3
                className="text-white font-serif"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Save up to $7,500 in Heat Pump Rebates
              </h3>
              <p className="text-white/70 text-sm mt-2">Ask us about federal and provincial rebate programs available for your installation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#C4902A] font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap text-sm"
              >
                Get Rebate Info
                <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap text-sm"
              >
                <i className="ri-phone-fill"></i>
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        <BrandsBar />

        <WhyChooseUs
          headline="Why Choose Park Lawn Heating for Your Installation"
          intro="Proper installation is the foundation of a reliable, efficient HVAC system. Here is what sets us apart."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={INSTALL_FAQS}
          headline="HVAC Installation — Frequently Asked Questions"
          subheadline="Everything you need to know before booking your installation"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Ready to Install? Get a Same-Week Estimate."
          subheadline="Licensed HVAC installation across Etobicoke. Transparent pricing, premium brands, and guaranteed workmanship."
          ctaLabel="Request a Free Estimate"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
