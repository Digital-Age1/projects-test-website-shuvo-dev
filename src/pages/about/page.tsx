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
import { SITE, PROCESS_STEPS, WHY_FEATURES } from "../../mocks/siteData";

const ABOUT_FAQS = [
  {
    q: "How long has Park Lawn Heating been in business?",
    a: "Park Lawn Heating and Cooling Inc. has been proudly serving the Etobicoke and greater Toronto community for nearly 10 years. We have grown steadily by maintaining a commitment to quality workmanship, honest pricing, and exceptional customer service on every job we complete.",
  },
  {
    q: "Is Park Lawn Heating licensed and insured?",
    a: "Yes. All Park Lawn Heating technicians are fully licensed and insured to perform HVAC work in Ontario. We maintain all required certifications and insurance coverage so that your home and your investment are fully protected on every service call or installation we perform.",
  },
  {
    q: "What areas does Park Lawn Heating serve?",
    a: "We serve Etobicoke and the surrounding Toronto communities including Mimico, New Toronto, Long Branch, Humber Bay, Islington, Alderwood, Rexdale, Lakeshore, Stonegate-Queensway, The Kingsway, and many more. Call (416) 832-5842 to confirm service availability in your area.",
  },
  {
    q: "Do you offer both residential and commercial HVAC services?",
    a: "Yes. Park Lawn Heating provides heating, cooling, and air quality services for residential homes, condo buildings, and commercial properties. As in-suite condo specialists, we have particular expertise in fan coil and heat pump systems for condominium buildings across Etobicoke.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          eyebrow="About Park Lawn Heating"
          headline="Nearly a Decade of Trusted HVAC Service in Etobicoke"
          subheadline="Park Lawn Heating and Cooling Inc. was built on a simple belief: every homeowner deserves honest, expert HVAC service at a fair price. For nearly 10 years, we have delivered exactly that."
          primaryCTA={{ label: "Get in Touch", href: "/contact" }}
          secondaryCTA={{ label: "View Our Services", href: "/services" }}
        />
        <TrustBar />

        {/* Our Story */}
        <section className="bg-[#FAF8F5] py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#C4902A] text-xs font-semibold tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
                  <span className="inline-block w-8 h-px bg-[#C4902A]"></span>
                  Our Story
                </p>
                <h2
                  className="font-serif text-[#1A1A1A] leading-tight mb-6"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  Welcome to Park Lawn Heating and Cooling Inc.
                </h2>
                <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
                  <p>
                    We are your go-to local HVAC contractor in the Etobicoke area.
                    Specializing in both residential and commercial services, Park Lawn Heating
                    is here to support YOU.
                  </p>
                  <p>
                    Live in a condo building? Have a house with a boiler or furnace? Not a
                    problem — we are in-suite condo specialists and experts in small homes to
                    large office buildings. No matter the situation, Park Lawn Heating has
                    you covered.
                  </p>
                  <p>
                    Proudly servicing the Etobicoke area for nearly 10 years, Park Lawn Heating
                    continues to grow and expand with the area, providing service and
                    installation of furnaces, boilers, air conditioners, plumbing fixtures,
                    and so much more.
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "10+", label: "Years in Etobicoke", icon: "ri-calendar-line" },
                  { value: "5★", label: "Google Rating", icon: "ri-star-line" },
                  { value: "24/7", label: "Emergency Service", icon: "ri-time-line" },
                  { value: "7", label: "Premium Brands", icon: "ri-medal-line" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl p-7 border border-[#EAE8E3] text-center"
                  >
                    <i className={`${stat.icon} text-[#C4902A] text-3xl mb-3 block`}></i>
                    <p
                      className="font-serif font-bold text-[#1A1A1A] text-3xl mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#8A8A8A] text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-[#1A1A1A] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <i className="ri-sparkling-line text-[#C4902A] text-3xl mb-6 block"></i>
            <blockquote
              className="text-white font-serif leading-relaxed mb-6"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              &ldquo;At Park Lawn Heating, we strive to be in constant communication with our
              customers until the job is done. If you have questions about any of our heating
              and air conditioning services or require emergency assistance, please give us a
              call.&rdquo;
            </blockquote>
            <p className="text-[#C4902A] text-sm font-semibold tracking-wide">
              — Park Lawn Heating Team
            </p>
          </div>
        </section>

        {/* Contact ribbon */}
        <div className="bg-[#C4902A] py-5 text-white text-center">
          <p className="text-sm font-medium">
            Questions? We&apos;re here to help. &nbsp;
            <a href={`tel:${SITE.phonePlain}`} className="font-bold underline whitespace-nowrap">
              {SITE.phone}
            </a>
            &nbsp;|&nbsp;
            <a href={`mailto:${SITE.email}`} className="underline whitespace-nowrap">
              {SITE.email}
            </a>
          </p>
        </div>

        <AIAnswerBlock
          headline="About Park Lawn Heating and Cooling Inc."
          intro="Park Lawn Heating and Cooling Inc. is a locally owned and operated HVAC contractor based at 246 Park Lawn Road in Toronto, Ontario. We have served the Etobicoke community for nearly a decade with licensed, insured, and fully transparent heating and cooling services."
          whatWeDo="We specialize in both residential and commercial HVAC including furnace and AC repair, boiler service, condo fan coil systems, heat pumps, hot water heaters, and indoor air quality products. Every technician is fully licensed and trained to industry standards."
          services={[
            "Established local contractor — nearly 10 years",
            "Fully licensed &amp; insured technicians",
            "Residential, commercial &amp; condo specialists",
            "7 premium HVAC brands serviced",
            "Transparent pricing with no hidden fees",
            "5-star Google rated service",
          ]}
          benefits={[
            "Community-focused, locally owned",
            "Long-term relationships over one-time transactions",
            "Honest assessment before recommendation",
            "24/7 emergency availability",
            "Constant communication throughout every job",
          ]}
          area="246 Park Lawn Road, Toronto, Ontario M8Y, Canada. Serving Etobicoke, Mimico, Humber Bay, Islington, Rexdale, and the greater Toronto west end."
        />

        <ProcessSection
          headline="Our Commitment to You"
          subheadline="Every service call follows the same standard of excellence."
          steps={PROCESS_STEPS}
        />

        <WhyChooseUs
          headline="The Values Behind Every Service Call"
          intro="Our company was built on honesty, expertise, and genuine care for our community. These are the principles that drive our work."
          features={WHY_FEATURES}
        />

        <ServiceAreasSection />

        <TestimonialsSection />

        <FAQSection
          faqs={ABOUT_FAQS}
          headline="About Park Lawn Heating — FAQ"
          subheadline="Get to know your local Etobicoke HVAC specialists"
        />

        <LeadFormSection />

        <FinalCTA
          headline="Let\u2019s Work Together — Get in Touch Today"
          subheadline="Etobicoke trusted heating and cooling team is ready to help. Call, email, or request service online."
          ctaLabel="Contact Us Today"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
