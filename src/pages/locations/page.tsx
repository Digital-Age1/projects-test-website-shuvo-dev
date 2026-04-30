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
import ServicesSection from "../../components/feature/sections/ServicesSection";
import { SERVICES, PROCESS_STEPS, WHY_FEATURES } from "../../mocks/siteData";

const LOCATION_FAQS = [
  {
    q: "Who provides HVAC service near me in Etobicoke?",
    a: "Park Lawn Heating and Cooling Inc. is your local HVAC contractor for Etobicoke and surrounding areas. Based at 246 Park Lawn Road in Toronto, our licensed team provides furnace repair, AC installation, condo HVAC service, and 24/7 emergency response across the entire Etobicoke region.",
  },
  {
    q: "Do you service HVAC systems in Mimico and New Toronto?",
    a: "Yes. Park Lawn Heating regularly services Mimico, New Toronto, Long Branch, and Lakeshore communities. These neighborhoods fall within our primary service territory and our technicians are familiar with the housing types, building ages, and HVAC systems common in these areas.",
  },
  {
    q: "Can you repair my condo HVAC system in Etobicoke?",
    a: "Absolutely. We are in-suite condo specialists with extensive experience servicing fan coils, heat pumps, and other HVAC systems in Etobicoke condo buildings. We coordinate with building management when needed and work efficiently to minimize any disruption to you or your neighbors.",
  },
  {
    q: "How do I find a trusted HVAC contractor in Etobicoke?",
    a: "Look for a licensed, insured contractor with verified Google reviews and a long track record in your community. Park Lawn Heating has served Etobicoke for nearly a decade with consistent 5-star reviews. Call (416) 832-5842 or submit a request online to get started.",
  },
  {
    q: "What is the closest HVAC contractor to Humber Bay?",
    a: "Park Lawn Heating at 246 Park Lawn Road, Toronto is one of the closest HVAC contractors to Humber Bay, Mimico, and Etobicoke. Our proximity means faster response times, especially for emergency calls. We are available 24/7 for urgent heating and cooling issues.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="Local HVAC Service — Etobicoke &amp; Toronto"
          headline="Serving Etobicoke &amp; Surrounding Toronto Communities"
          subheadline="Park Lawn Heating and Cooling Inc. is based at 246 Park Lawn Road, Toronto — right in the heart of the community we serve. Fast local response, expert HVAC service, and a team that knows your neighborhood."
          primaryCTA={{ label: "Book Local Service", href: "/contact" }}
          secondaryCTA={{ label: "View Service Areas", href: "#service-areas" }}
        />
        <TrustBar />

        {/* Primary location card */}
        <section className="bg-[#FAF8F5] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                Our Location
                <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
              </p>
              <h2
                className="font-serif text-[#1A1A1A] leading-tight"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Based in Etobicoke, Toronto
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Info card */}
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#EAE8E3] flex flex-col justify-between">
                <div>
                  <h3
                    className="font-serif text-[#1A1A1A] text-2xl mb-6"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Park Lawn Heating and Cooling Inc.
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10 shrink-0">
                        <i className="ri-map-pin-line text-[#C4902A]"></i>
                      </div>
                      <div>
                        <p className="text-xs text-[#8A8A8A] uppercase tracking-wide mb-1">Address</p>
                        <p className="text-[#1A1A1A] font-medium text-sm">
                          246 Park Lawn Road<br />Toronto, Ontario M8Y<br />Canada
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10 shrink-0">
                        <i className="ri-phone-line text-[#C4902A]"></i>
                      </div>
                      <div>
                        <p className="text-xs text-[#8A8A8A] uppercase tracking-wide mb-1">Phone</p>
                        <a href="tel:4168325842" className="text-[#1A1A1A] font-semibold hover:text-[#C4902A] transition-colors">
                          (416) 832-5842
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10 shrink-0">
                        <i className="ri-mail-line text-[#C4902A]"></i>
                      </div>
                      <div>
                        <p className="text-xs text-[#8A8A8A] uppercase tracking-wide mb-1">Email</p>
                        <a href="mailto:parklawnheating@gmail.com" className="text-[#1A1A1A] font-semibold hover:text-[#C4902A] transition-colors text-sm">
                          parklawnheating@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4902A]/10 shrink-0">
                        <i className="ri-time-line text-[#C4902A]"></i>
                      </div>
                      <div>
                        <p className="text-xs text-[#8A8A8A] uppercase tracking-wide mb-1">Hours</p>
                        <p className="text-[#1A1A1A] text-sm">Mon–Fri: 8:00 AM – 5:00 PM</p>
                        <p className="text-[#1A1A1A] text-sm">Sat–Sun: By Appointment</p>
                        <p className="text-[#C4902A] text-sm font-semibold">24/7 Emergency Available</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:4168325842"
                    className="flex-1 bg-[#C4902A] text-white text-center font-semibold py-3.5 rounded-full hover:bg-[#b07e20] transition-colors text-sm whitespace-nowrap"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://maps.app.goo.gl/wgKeWdZFxEKpkq1MA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#1A1A1A] text-[#1A1A1A] text-center font-semibold py-3.5 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-colors text-sm whitespace-nowrap"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#EAE8E3] h-[400px] lg:h-auto min-h-[400px]">
                <iframe
                  title="Park Lawn Heating Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.994!2d-79.4944745!3d43.6326876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37847bcf38af%3A0x3370562159ff9a6!2sPark%20Lawn%20Heating%20inc!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection
          headline="HVAC Services Available Across Etobicoke"
          eyebrow="What We Offer Locally"
          services={SERVICES}
          bg="bg-[#F0EDE8]"
        />

        <AIAnswerBlock
          headline="HVAC Services in Etobicoke &amp; Toronto — Who to Call"
          intro="If you are searching for reliable HVAC service in Etobicoke, Mimico, Humber Bay, or the surrounding Toronto communities, Park Lawn Heating and Cooling Inc. is your local expert. We are based at 246 Park Lawn Road, Toronto, and have served this community for nearly 10 years."
          whatWeDo="We provide furnace repair, AC service, emergency HVAC, condo fan coil and heat pump service, hot water repairs, and indoor air quality solutions. Our technicians know the homes, buildings, and systems throughout the Etobicoke area and deliver fast, reliable results."
          services={[
            "Same-day service in Etobicoke",
            "Condo HVAC service across Etobicoke",
            "Emergency furnace repair — all areas",
            "Mimico &amp; New Toronto HVAC service",
            "Humber Bay AC installation",
            "Lakeshore &amp; Long Branch heating service",
          ]}
          benefits={[
            "Locally based — faster response times",
            "Familiarity with local building types",
            "Long-standing community reputation",
            "Google verified 5-star service",
            "24/7 availability for Etobicoke emergencies",
          ]}
          area="We serve all of Etobicoke and South Toronto including: Etobicoke, Mimico, New Toronto, Long Branch, Lakeshore, Humber Bay, Islington, Alderwood, Rexdale, Stonegate-Queensway, The Kingsway, and more."
        />

        <ProcessSection
          headline="Local Service, Premium Process"
          subheadline="When you call Park Lawn Heating in Etobicoke, here is exactly what happens."
          steps={PROCESS_STEPS}
        />

        <WhyChooseUs
          headline="Why Etobicoke Residents Choose Park Lawn Heating"
          intro="Being local means more than proximity. It means we care about our community, our reputation, and the families we serve every day."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />

        <TestimonialsSection />

        <FAQSection
          faqs={LOCATION_FAQS}
          headline="HVAC Service Areas — FAQ"
          subheadline="Local heating and cooling questions answered"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Need HVAC Service in Etobicoke? We&apos;re Right Here."
          subheadline="Local, fast, and fully licensed. Park Lawn Heating is your neighborhood HVAC expert — ready when you need us most."
          ctaLabel="Book Local Service Now"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
