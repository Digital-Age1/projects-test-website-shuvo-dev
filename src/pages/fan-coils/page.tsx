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

const FAN_COIL_GALLERY = [
  {
    image: "https://readdy.ai/api/search-image?query=vertical%20fan%20coil%20unit%20installed%20in%20condominium%20closet%2C%20white%20cabinet%2C%20clean%20installation%2C%20modern%20condo%20interior%2C%20professional%20HVAC%20work&width=400&height=500&seq=fc1&orientation=portrait",
    caption: "Vertical Fan Coil Unit",
  },
  {
    image: "https://readdy.ai/api/search-image?query=fan%20coil%20unit%20replacement%20in%20condo%20suite%2C%20HVAC%20technician%20working%2C%20compact%20space%2C%20professional%20installation%2C%20Toronto%20condominium&width=400&height=500&seq=fc2&orientation=portrait",
    caption: "In-Suite Replacement",
  },
  {
    image: "https://readdy.ai/api/search-image?query=fan%20coil%20unit%20control%20panel%20and%20thermostat%20in%20modern%20condominium%2C%20clean%20white%20wall%2C%20digital%20thermostat%2C%20professional%20installation&width=400&height=500&seq=fc3&orientation=portrait",
    caption: "Thermostat & Controls",
  },
  {
    image: "https://readdy.ai/api/search-image?query=HVAC%20technician%20servicing%20fan%20coil%20unit%20in%20condo%20building%2C%20professional%20tools%2C%20compact%20mechanical%20space%2C%20expert%20repair%20work&width=400&height=500&seq=fc4&orientation=portrait",
    caption: "Professional Servicing",
  },
  {
    image: "https://readdy.ai/api/search-image?query=new%20fan%20coil%20unit%20installation%20in%20condominium%20utility%20closet%2C%20clean%20pipes%20and%20connections%2C%20professional%20HVAC%20installation%2C%20modern%20condo&width=400&height=500&seq=fc5&orientation=portrait",
    caption: "New Unit Installation",
  },
  {
    image: "https://readdy.ai/api/search-image?query=fan%20coil%20unit%20maintenance%20and%20filter%20cleaning%2C%20HVAC%20technician%2C%20condo%20building%2C%20professional%20tools%2C%20clean%20work%20area&width=400&height=500&seq=fc6&orientation=portrait",
    caption: "Annual Maintenance",
  },
  {
    image: "https://readdy.ai/api/search-image?query=horizontal%20fan%20coil%20unit%20installed%20above%20ceiling%20in%20condominium%2C%20concealed%20installation%2C%20professional%20HVAC%20work%2C%20clean%20ceiling&width=400&height=500&seq=fc7&orientation=portrait",
    caption: "Horizontal Ceiling Unit",
  },
  {
    image: "https://readdy.ai/api/search-image?query=fan%20coil%20unit%20water%20connections%20and%20piping%20in%20condo%20building%2C%20professional%20plumbing%2C%20clean%20mechanical%20room%2C%20copper%20pipes&width=400&height=500&seq=fc8&orientation=portrait",
    caption: "Water Loop Connections",
  },
  {
    image: "https://readdy.ai/api/search-image?query=completed%20fan%20coil%20installation%20in%20Toronto%20condo%20suite%2C%20clean%20closet%2C%20professional%20finish%2C%20new%20equipment%2C%20modern%20condominium&width=400&height=500&seq=fc9&orientation=portrait",
    caption: "Completed Installation",
  },
];

const FAN_COIL_SERVICES = [
  {
    icon: "ri-tools-line",
    title: "Fan Coil Repair",
    description: "Fast diagnosis and repair of all fan coil issues including motor failures, coil leaks, control board problems, and water damage.",
  },
  {
    icon: "ri-refresh-line",
    title: "Fan Coil Replacement",
    description: "Complete fan coil unit replacement with minimal disruption. We handle removal, installation, connections, and testing.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Annual Maintenance",
    description: "Preventative maintenance programs to keep your fan coil running efficiently and prevent costly breakdowns.",
  },
  {
    icon: "ri-alert-line",
    title: "Emergency Service",
    description: "24/7 emergency response for fan coil failures. We understand the urgency — condo HVAC failures can affect multiple units.",
  },
];

const FC_FAQS = [
  {
    q: "What is a fan coil unit?",
    a: "A fan coil unit (FCU) is the primary heating and cooling system in most Toronto and Etobicoke condominiums. It consists of a coil (connected to the building's central hot and chilled water loops) and a fan that circulates air through your suite. When it fails, your entire suite loses heating or cooling.",
  },
  {
    q: "How do I know if my fan coil needs repair or replacement?",
    a: "Signs your fan coil needs attention include: no heating or cooling, weak airflow, unusual noises, water leaks, or the unit running constantly without reaching temperature. Call Park Lawn Heating at (416) 832-5842 for a fast diagnosis — we will tell you honestly whether repair or replacement is the better option.",
  },
  {
    q: "Can a fan coil breakdown cause water damage?",
    a: "Yes. Fan coil units are connected to the building's water loops, and a failure can result in water leaks that damage your unit and the units above and below. This is why prompt attention to any fan coil issue is critical. Call us immediately at (416) 832-5842 if you suspect a water leak.",
  },
  {
    q: "How long does fan coil replacement take?",
    a: "A standard fan coil replacement in a condo suite typically takes 4–8 hours and is completed in a single visit. We coordinate with building management as needed and work efficiently to minimize disruption to you and your neighbors.",
  },
  {
    q: "Do you service all condo buildings in Etobicoke?",
    a: "Yes. We service condo buildings throughout Etobicoke and Toronto. We are familiar with the fan coil systems used in most Etobicoke and Toronto condo buildings and can work within your building's specific requirements. Call (416) 832-5842 to confirm service availability.",
  },
];

export default function FanCoilsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="Fan Coil Service — Etobicoke & Toronto Condos"
          headline="Fan Coil Repair &amp;<br />Replacement Specialists"
          subheadline="Condominium fan coil breakdowns can be a major inconvenience for residents and can result in uncomfortable living conditions. Possible water damage to either your unit or the units above and below as they are all interconnected. Any breakdown in a condominium should be taken care of right away."
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
                  Fan Coil Specialists
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Etobicoke&apos;s Trusted Condo HVAC Experts
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed text-sm">
                  <p>
                    Condominium fan coil breakdowns can be a major inconvenience for residents and can result in uncomfortable living conditions. Possible water damage to either your unit or the units above and below as they are all interconnected.
                  </p>
                  <p>
                    Park Lawn Heating is your certified in-suite condo specialist for fan coil repair, replacement, and maintenance across Etobicoke and Toronto. We work within your building&apos;s regulations and coordinate with property management to ensure a smooth, professional service experience.
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
              <div className="grid grid-cols-2 gap-4">
                {FAN_COIL_SERVICES.map((s) => (
                  <div key={s.title} className="bg-white rounded-2xl border border-[#EAE8E3] p-6 hover:border-[#C4902A]/30 transition-colors">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10 mb-3">
                      <i className={`${s.icon} text-[#C4902A] text-lg`}></i>
                    </div>
                    <h3 className="font-semibold text-[#1A1A1A] text-sm mb-2">{s.title}</h3>
                    <p className="text-[#6B6B6B] text-xs leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="text-center mb-12">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Our Work
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Fan Coil Installations &amp; Replacements
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {FAN_COIL_GALLERY.map((item) => (
                <div key={item.caption} className="group relative rounded-xl overflow-hidden">
                  <div className="w-full h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-xs font-medium">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency callout */}
        <div className="bg-[#0D0D0D] py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Don&apos;t Risk Water Damage</p>
              <h3
                className="text-white font-serif"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Fan coil issue? Call us immediately — 24/7
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
          headline="Why Condo Residents Trust Park Lawn Heating"
          intro="Certified in-suite specialists with deep experience in Etobicoke and Toronto condo buildings."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />
        <TestimonialsSection />

        <FAQSection
          faqs={FC_FAQS}
          headline="Fan Coil — Frequently Asked Questions"
          subheadline="Answers to common fan coil questions from Etobicoke condo residents"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Fan Coil Issue? We&apos;re Ready to Help."
          subheadline="Certified condo HVAC specialists available 24/7. Fast response, building coordination, and guaranteed workmanship."
          ctaLabel="Call (416) 832-5842"
          ctaHref={`tel:${SITE.phonePlain}`}
        />
      </main>
      <Footer />
    </>
  );
}
