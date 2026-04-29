import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import LeadFormSection from "@/components/feature/sections/LeadFormSection";
import FinalCTA from "@/components/feature/sections/FinalCTA";
import { SITE } from "@/mocks/siteData";

const FAQ_CATEGORIES = [
  {
    id: "general",
    label: "General",
    icon: "ri-question-line",
    faqs: [
      {
        q: "When should I call for HVAC repair instead of waiting?",
        a: "Call immediately if your system stops working entirely, makes unusual noises, produces strange smells, or if you notice ice forming on your unit. Delaying repairs often leads to more costly damage. Park Lawn Heating offers 24/7 emergency service — call (416) 832-5842 any time.",
      },
      {
        q: "What is included in a standard HVAC installation?",
        a: "A standard HVAC installation includes a full assessment of your home or building, system sizing and selection, removal of old equipment, installation of the new system, all necessary connections, testing and commissioning, and a walkthrough of your new system.",
      },
      {
        q: "How long does HVAC installation usually take?",
        a: "Most standard furnace or AC installations take 4–8 hours and are completed in a single day. Ductless mini split installations typically take 4–6 hours. More complex systems may take 1–2 days.",
      },
      {
        q: "What does HVAC maintenance actually do?",
        a: "A professional maintenance visit includes cleaning coils and components, checking refrigerant levels, inspecting electrical connections, lubricating moving parts, testing safety controls, replacing filters, and identifying any developing issues before they become failures.",
      },
      {
        q: "Do you offer free estimates for HVAC service or installation?",
        a: "Yes. Park Lawn Heating provides free, no-obligation estimates for HVAC installations across Etobicoke. Call (416) 832-5842 or submit a request online. Same-week estimates are available.",
      },
    ],
  },
  {
    id: "repair",
    label: "Repair",
    icon: "ri-tools-line",
    faqs: [
      {
        q: "What does HVAC repair include for a broken AC or furnace?",
        a: "Our repair service includes a full diagnostic assessment, identification of the root cause, transparent quote before any work begins, and professional repair using quality parts. We repair all major brands of furnaces, air conditioners, heat pumps, boilers, and ductless systems.",
      },
      {
        q: "How long does HVAC repair usually take?",
        a: "Most standard HVAC repairs are completed in 1–3 hours. Complex issues or parts that need to be ordered may take longer. We always provide a clear timeline before starting work.",
      },
      {
        q: "When should I schedule furnace repair?",
        a: "Schedule furnace repair as soon as you notice reduced heating performance, unusual sounds, frequent cycling, or higher energy bills. Don't wait until your furnace fails completely — early repair is almost always less expensive than emergency replacement.",
      },
      {
        q: "What are common signs I need AC repair?",
        a: "Common signs include warm air blowing from vents, weak airflow, unusual noises or odors, frequent on/off cycling, ice on the unit, or higher than normal energy bills. Call Park Lawn Heating at (416) 832-5842 for a fast diagnosis.",
      },
      {
        q: "Is Park Lawn Heating available for same-day emergency HVAC service?",
        a: "Yes. We offer 24/7 emergency HVAC service across Etobicoke and surrounding Toronto communities. Call (416) 832-5842 immediately for any HVAC emergency.",
      },
    ],
  },
  {
    id: "installation",
    label: "Installation",
    icon: "ri-settings-3-line",
    faqs: [
      {
        q: "What brands do you install?",
        a: "We install all major HVAC brands including American Standard, York, Panasonic, Bosch, Keeprite, Raypak, and more. Our technicians are trained and certified on all major equipment lines.",
      },
      {
        q: "Can you install HVAC in a condo?",
        a: "Yes. We are certified in-suite condo specialists with extensive experience installing fan coil units and heat pumps in Etobicoke and Toronto condo buildings. We coordinate with building management and work within all building regulations.",
      },
      {
        q: "How much does ductless A/C installation cost in Etobicoke?",
        a: "Ductless mini split installation costs vary based on the number of zones, equipment brand, and installation complexity. Park Lawn Heating provides transparent upfront quotes with no hidden fees. Call (416) 832-5842 for a free in-home estimate.",
      },
      {
        q: "How quickly can you install a ductless system in Etobicoke?",
        a: "Most ductless mini split installations in Etobicoke are scheduled within 1–2 weeks of your estimate. The installation itself typically takes 4–8 hours. Same-week estimates are available.",
      },
    ],
  },
  {
    id: "heatpumps",
    label: "Heat Pumps",
    icon: "ri-contrast-2-line",
    faqs: [
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
        a: "The Canada Greener Homes Grant offers up to $5,000 for heat pump installations, and additional provincial programs can bring total rebates to $7,500 or more. Call Park Lawn Heating at (416) 832-5842 and we will walk you through available programs.",
      },
      {
        q: "Can a heat pump replace my furnace and AC?",
        a: "Yes. A heat pump provides both heating and cooling in a single system, effectively replacing both your furnace and air conditioner. This is one of the most cost-effective upgrades for Etobicoke homeowners — especially when combined with available rebates.",
      },
    ],
  },
  {
    id: "condos",
    label: "Condos",
    icon: "ri-building-2-line",
    faqs: [
      {
        q: "What is a fan coil unit in a condo?",
        a: "A fan coil unit (FCU) is the primary heating and cooling system in most Toronto and Etobicoke condominiums. It connects to the building's central chilled and hot water loops to provide heating and cooling to your individual suite.",
      },
      {
        q: "How quickly can you respond to a condo HVAC emergency?",
        a: "We offer 24/7 emergency service for condo HVAC issues. Condo breakdowns are particularly urgent because they can affect neighboring units through water damage. Call (416) 832-5842 immediately for any condo HVAC emergency.",
      },
      {
        q: "Do you coordinate with building management?",
        a: "Yes. We have extensive experience working within condo building regulations and coordinating with property management teams. We understand the unique requirements of in-suite work including access procedures, insurance requirements, and building-specific equipment specifications.",
      },
      {
        q: "Do you service condo buildings across Etobicoke?",
        a: "Yes. We service condo buildings throughout Etobicoke and Toronto including Mimico, Humber Bay, Islington, and surrounding communities. Call (416) 832-5842 to confirm service availability for your building.",
      },
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: "ri-shield-check-line",
    faqs: [
      {
        q: "How often should I schedule HVAC maintenance?",
        a: "We recommend annual maintenance for most HVAC systems — ideally in spring for your cooling system and fall for your heating system. Homes with pets, allergies, or heavy use may benefit from more frequent service.",
      },
      {
        q: "Can you offer a complete heating and cooling service?",
        a: "Yes. Park Lawn Heating provides comprehensive maintenance for all HVAC systems including furnaces, air conditioners, heat pumps, ductless mini splits, boilers, fan coils, and more. We service all major brands across Etobicoke and Toronto.",
      },
      {
        q: "Do you offer HVAC maintenance plans?",
        a: "Yes. We offer annual maintenance plans that include scheduled inspections, priority service, and discounts on repairs. Call (416) 832-5842 to learn about our current maintenance plan options.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EAE8E3] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="text-[#1A1A1A] font-medium text-sm leading-relaxed group-hover:text-[#C4902A] transition-colors">
          {q}
        </span>
        <span className={`w-6 h-6 flex items-center justify-center rounded-full border border-[#EAE8E3] shrink-0 mt-0.5 transition-all ${open ? "bg-[#C4902A] border-[#C4902A]" : "group-hover:border-[#C4902A]"}`}>
          <i className={`text-xs transition-transform duration-200 ${open ? "ri-subtract-line text-white" : "ri-add-line text-[#6B6B6B] group-hover:text-[#C4902A]"}`}></i>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-[#6B6B6B] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");

  const current = FAQ_CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <div
          className="relative pt-[110px] pb-20 lg:pb-28"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1A160A 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(196,144,42,0.08) 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              Frequently Asked Questions
              <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
            </p>
            <h1
              className="text-white font-serif leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              HVAC Questions Answered
            </h1>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Clear, honest answers to the most common HVAC questions from Etobicoke homeowners and condo residents.
            </p>
          </div>
        </div>

        {/* FAQ content */}
        <section className="bg-[#FAF8F5] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-[#EAE8E3] p-5 sticky top-[120px]">
                  <p className="text-[#8A8A8A] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Categories</p>
                  <nav className="space-y-1">
                    {FAQ_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer text-left ${
                          activeCategory === cat.id
                            ? "bg-[#C4902A] text-white"
                            : "text-[#6B6B6B] hover:bg-[#FAF8F5] hover:text-[#1A1A1A]"
                        }`}
                      >
                        <i className={`${cat.icon} text-base shrink-0`}></i>
                        {cat.label}
                        <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${activeCategory === cat.id ? "bg-white/20 text-white" : "bg-[#F0EDE8] text-[#8A8A8A]"}`}>
                          {FAQ_CATEGORIES.find((c) => c.id === cat.id)?.faqs.length}
                        </span>
                      </button>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-[#EAE8E3]">
                    <p className="text-[#1A1A1A] font-semibold text-sm mb-2">Still have questions?</p>
                    <p className="text-[#6B6B6B] text-xs mb-4">Our team is ready to help — call or book online.</p>
                    <a
                      href={`tel:${SITE.phonePlain}`}
                      className="w-full flex items-center justify-center gap-2 bg-[#C4902A] text-white font-bold py-3 rounded-full hover:bg-[#d4a030] transition-colors text-sm"
                    >
                      <i className="ri-phone-fill text-sm"></i>
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ list */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-[#EAE8E3] p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10">
                      <i className={`${current.icon} text-[#C4902A] text-lg`}></i>
                    </div>
                    <div>
                      <h2
                        className="font-serif text-[#1A1A1A]"
                        style={{ fontSize: "1.4rem", fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {current.label} Questions
                      </h2>
                      <p className="text-[#8A8A8A] text-xs">{current.faqs.length} questions</p>
                    </div>
                  </div>
                  <div>
                    {current.faqs.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div
                  className="mt-6 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                  style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2C2010 100%)" }}
                >
                  <div>
                    <p className="text-[#C4902A] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Need More Help?</p>
                    <h3
                      className="text-white font-serif"
                      style={{ fontSize: "1.2rem", fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      Talk to a licensed HVAC technician
                    </h3>
                    <p className="text-white/50 text-xs mt-1">Available 24/7 for emergencies across Etobicoke</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href={`tel:${SITE.phonePlain}`}
                      className="inline-flex items-center gap-2 bg-[#C4902A] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#d4a030] transition-colors whitespace-nowrap text-sm"
                    >
                      <i className="ri-phone-fill"></i>
                      Call Now
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/[0.07] transition-colors whitespace-nowrap text-sm"
                    >
                      Book Online
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeadFormSection />

        <FinalCTA
          headline="Still Have Questions? We&apos;re Here to Help."
          subheadline="Our licensed HVAC team is available 24/7 for emergencies and ready to answer any questions about your heating and cooling system."
          ctaLabel="Contact Us Today"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
