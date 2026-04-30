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

const MAINTENANCE_ITEMS = [
  {
    icon: "ri-fire-line",
    title: "Furnaces",
    description: "Furnaces are great for homeowners who experience cold winters with consistently low temperatures to get the heat they need quickly.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20annual%20furnace%20maintenance%20inspection%2C%20checking%20filters%20and%20components%2C%20clean%20basement%20utility%20room%2C%20professional%20tools&width=600&height=400&seq=maint1&orientation=landscape",
  },
  {
    icon: "ri-temp-cold-line",
    title: "Air Conditioning Units",
    description: "Explore our selection of air conditioning units for large and small spaces to find the best air conditioner for you.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20annual%20air%20conditioner%20maintenance%2C%20cleaning%20condenser%20coils%2C%20outdoor%20unit%2C%20professional%20tools%2C%20residential%20backyard&width=600&height=400&seq=maint2&orientation=landscape",
  },
  {
    icon: "ri-water-flash-line",
    title: "Boilers",
    description: "A boiler uses hot water or steam running through pipes to distribute heat throughout your home. Call us today.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20boiler%20maintenance%20and%20inspection%2C%20checking%20pressure%20and%20valves%2C%20clean%20mechanical%20room%2C%20professional%20tools&width=600&height=400&seq=maint3&orientation=landscape",
  },
  {
    icon: "ri-sun-line",
    title: "Ductless Mini Split",
    description: "Ductless mini split systems are heating and cooling devices that do not require ductwork to function.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20cleaning%20and%20maintaining%20ductless%20mini%20split%20air%20conditioner%2C%20removing%20filter%2C%20indoor%20wall%20unit%2C%20professional%20maintenance&width=600&height=400&seq=maint4&orientation=landscape",
  },
  {
    icon: "ri-drop-line",
    title: "Water Heaters & Tankless",
    description: "Water heaters heat and store extra water, while tankless heaters heat water on demand without storing it.",
    image: "https://readdy.ai/api/search-image?query=plumber%20performing%20annual%20water%20heater%20maintenance%2C%20flushing%20tank%2C%20checking%20anode%20rod%2C%20utility%20room%2C%20professional%20tools&width=600&height=400&seq=maint5&orientation=landscape",
  },
  {
    icon: "ri-contrast-2-line",
    title: "Heat Pumps",
    description: "Heat pumps are versatile, efficient cooling and heating systems — call us for all heat pump maintenance.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20heat%20pump%20maintenance%2C%20cleaning%20outdoor%20unit%2C%20checking%20refrigerant%2C%20professional%20tools%2C%20residential%20property&width=600&height=400&seq=maint6&orientation=landscape",
  },
  {
    icon: "ri-gas-station-line",
    title: "Gas Lines",
    description: "Gas piping is a piping system in your house used to carry natural gas from the supply directly to your heating system.",
    image: "https://readdy.ai/api/search-image?query=licensed%20gas%20technician%20inspecting%20and%20testing%20residential%20gas%20line%20connections%2C%20leak%20detection%2C%20professional%20tools%2C%20safety%20equipment&width=600&height=400&seq=maint7&orientation=landscape",
  },
  {
    icon: "ri-flow-chart",
    title: "Ductwork",
    description: "Ductwork is a system of ducts, just a pipe tube or channel that conveys a substance — call us today.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20inspecting%20and%20cleaning%20ductwork%2C%20air%20duct%20cleaning%2C%20professional%20equipment%2C%20attic%20or%20basement%2C%20clean%20utility%20space&width=600&height=400&seq=maint8&orientation=landscape",
  },
  {
    icon: "ri-temp-hot-line",
    title: "Radiators",
    description: "Radiators are heating devices used to provide warmth and comfort during cold weather.",
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20bleeding%20and%20maintaining%20radiator%20heating%20system%2C%20professional%20tools%2C%20residential%20home%2C%20clean%20interior&width=600&height=400&seq=maint9&orientation=landscape",
  },
  {
    icon: "ri-leaf-line",
    title: "UV Air Purifiers",
    description: "We reviewed the best UV lights for HVAC systems. We regularly update our products as new models are released each year.",
    image: "https://readdy.ai/api/search-image?query=UV%20air%20purifier%20maintenance%20and%20bulb%20replacement%20inside%20HVAC%20system%2C%20technician%20working%2C%20clean%20mechanical%20room%2C%20professional%20equipment&width=600&height=400&seq=maint10&orientation=landscape",
  },
  {
    icon: "ri-water-percent-line",
    title: "Pool Heaters",
    description: "An electric heat pump pool heater works just like an air conditioning unit in reverse.",
    image: "https://readdy.ai/api/search-image?query=pool%20heat%20pump%20heater%20maintenance%20and%20inspection%2C%20technician%20checking%20equipment%2C%20backyard%20pool%20area%2C%20professional%20HVAC%20work&width=600&height=400&seq=maint11&orientation=landscape",
  },
  {
    icon: "ri-fire-fill",
    title: "Fireplaces",
    description: "A fireplace makes a home a home. Shop our top selection of gas fireplaces, wood burning fireplaces, electric fireplaces.",
    image: "https://readdy.ai/api/search-image?query=gas%20fireplace%20annual%20maintenance%20and%20cleaning%20by%20HVAC%20technician%2C%20modern%20living%20room%20fireplace%2C%20professional%20tools%2C%20inspection&width=600&height=400&seq=maint12&orientation=landscape",
  },
];

const MAINTENANCE_BENEFITS = [
  {
    icon: "ri-shield-check-line",
    title: "Prevent Costly Breakdowns",
    description: "Regular maintenance catches small issues before they become expensive emergency repairs. Save money and avoid the stress of unexpected failures.",
  },
  {
    icon: "ri-leaf-line",
    title: "Improve Indoor Air Quality",
    description: "Clean filters, coils, and components mean cleaner air circulating through your home — reducing allergens, dust, and bacteria.",
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Lower Energy Bills",
    description: "A well-maintained HVAC system runs more efficiently, consuming less energy and reducing your monthly utility costs.",
  },
  {
    icon: "ri-time-line",
    title: "Extend Equipment Life",
    description: "Proper maintenance can add years to the life of your HVAC equipment, protecting your investment and delaying costly replacements.",
  },
  {
    icon: "ri-award-line",
    title: "Maintain Warranty Coverage",
    description: "Many HVAC manufacturers require annual maintenance to keep warranties valid. Our service keeps you covered.",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Annual Maintenance Plans",
    description: "Sign up for our annual maintenance plan and never worry about scheduling again. We remind you, show up, and keep your system running perfectly.",
  },
];

const MAINTENANCE_FAQS = [
  {
    q: "How often should I schedule HVAC maintenance?",
    a: "We recommend annual maintenance for most HVAC systems — ideally in spring for your cooling system and fall for your heating system. Homes with pets, allergies, or heavy use may benefit from more frequent service. Call Park Lawn Heating at (416) 832-5842 to set up your annual plan.",
  },
  {
    q: "What does HVAC maintenance actually do?",
    a: "A professional maintenance visit includes cleaning coils and components, checking refrigerant levels, inspecting electrical connections, lubricating moving parts, testing safety controls, replacing filters, and identifying any developing issues before they become failures. It keeps your system running efficiently and safely.",
  },
  {
    q: "Can you offer a complete heating and cooling service?",
    a: "Yes. Park Lawn Heating provides comprehensive maintenance for all HVAC systems including furnaces, air conditioners, heat pumps, ductless mini splits, boilers, fan coils, and more. We service all major brands across Etobicoke and Toronto.",
  },
  {
    q: "How often should I schedule furnace repair?",
    a: "Schedule furnace maintenance annually — ideally before the heating season begins in fall. If you notice any issues like unusual noises, reduced heat, or higher energy bills, call us immediately at (416) 832-5842 rather than waiting for your scheduled visit.",
  },
  {
    q: "What are common signs I need AC repair?",
    a: "Signs your AC needs attention include warm air from vents, weak airflow, unusual noises, ice on the unit, or higher energy bills. Annual maintenance helps prevent these issues. Call (416) 832-5842 for a fast diagnosis.",
  },
];

export default function MaintenancePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="HVAC Maintenance in Etobicoke"
          headline="Keep Your HVAC Running<br />All Year Long"
          subheadline="Need reliable HVAC maintenance in Etobicoke? Park Lawn Heating keeps your heating and cooling systems running smoothly with thorough inspections and routine service. Regular maintenance helps prevent breakdowns, improve efficiency, and extend the life of your equipment year-round."
          primaryCTA={{ label: "Book Maintenance", href: "/contact" }}
          secondaryCTA={{ label: "Call (416) 832-5842", href: `tel:${SITE.phonePlain}` }}
        />

        <TrustBar />

        {/* Intro + benefits */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  Etobicoke HVAC Maintenance
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Why Regular Maintenance Matters
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  <p>
                    Heating and air conditioning systems are essential for maintaining a comfortable temperature in your home or workplace, especially during extreme weather conditions. Regular maintenance of these systems is crucial to prevent breakdowns and ensure they operate safely. Neglecting maintenance of systems, such as furnaces and boilers, can lead to dangerous situations, including carbon monoxide leaks.
                  </p>
                  <p>
                    Proper maintenance can improve indoor air quality, reduce the risk of breakdowns, and ensure the safety of your family or employees. Schedule your annual maintenance with Park Lawn Heating today.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
                  >
                    Book Maintenance
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
                  src="https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20annual%20maintenance%20on%20residential%20heating%20and%20cooling%20system%2C%20professional%20inspection%2C%20clean%20utility%20room%2C%20tools%20and%20equipment%2C%20confident%20expert&width=700&height=500&seq=mainthero&orientation=landscape"
                  alt="HVAC maintenance in Etobicoke"
                  className="w-full h-[380px] object-cover object-top"
                />
              </div>
            </div>

            {/* Benefits grid */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Benefits of Regular Maintenance
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Protect Your Investment
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {MAINTENANCE_BENEFITS.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl border border-[#EAE8E3] p-7">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#C4902A]/10 mb-4">
                    <i className={`${b.icon} text-[#C4902A] text-xl`}></i>
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] text-base mb-2">{b.title}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>

            {/* Systems we maintain */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Systems We Maintain
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
              {MAINTENANCE_ITEMS.map((item) => (
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

        <WhyChooseUs
          headline="Why Etobicoke Homeowners Trust Park Lawn Heating"
          intro="Consistent, professional maintenance from a team that knows your system and your home."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={MAINTENANCE_FAQS}
          headline="HVAC Maintenance — Frequently Asked Questions"
          subheadline="Everything you need to know about keeping your system in top shape"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Schedule Your Annual HVAC Maintenance Today"
          subheadline="Don't wait for a breakdown. Keep your system running efficiently with professional maintenance from Park Lawn Heating."
          ctaLabel="Book Maintenance Now"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
