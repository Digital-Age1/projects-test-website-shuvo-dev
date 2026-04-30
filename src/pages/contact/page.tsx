import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "../../components/feature/sections/HeroSection";
import TrustBar from "../../components/feature/sections/TrustBar";
import ServicesSection from "../../components/feature/sections/ServicesSection";
import AIAnswerBlock from "../../components/feature/sections/AIAnswerBlock";
import ProcessSection from "../../components/feature/sections/ProcessSection";
import WhyChooseUs from "../../components/feature/sections/WhyChooseUs";
import ServiceAreasSection from "../../components/feature/sections/ServiceAreasSection";
import TestimonialsSection from "../../components/feature/sections/TestimonialsSection";
import FAQSection from "../../components/feature/sections/FAQSection";
import FinalCTA from "../../components/feature/sections/FinalCTA";
import LeadFormSection from "../../components/feature/sections/LeadFormSection";
import { SERVICES, PROCESS_STEPS, WHY_FEATURES, SITE } from "../../mocks/siteData";

const CONTACT_FAQS = [
  {
    q: "How quickly will Park Lawn Heating respond to my request?",
    a: "For emergency calls, we respond as quickly as possible — we offer 24/7 service and prioritize urgent situations. For scheduled service requests submitted online, a team member will typically follow up within one business day. Call (416) 832-5842 directly for the fastest response to any urgent HVAC need.",
  },
  {
    q: "What information should I have ready when I call?",
    a: "It helps to know your HVAC system type (furnace, AC, heat pump, fan coil), the brand or model if possible, a brief description of the issue or symptoms, and your address in the Etobicoke area. Having this ready helps our technicians arrive fully prepared to diagnose and resolve the issue on the first visit.",
  },
  {
    q: "Do you offer free estimates for HVAC service or installation?",
    a: "Yes. Park Lawn Heating provides free, no-obligation estimates for HVAC installations and larger service jobs across Etobicoke. Call (416) 832-5842 or submit a request using our contact form. A licensed technician will assess your situation and provide a fully transparent quote with no hidden fees before work begins.",
  },
  {
    q: "Is Park Lawn Heating available for same-day emergency HVAC service?",
    a: "Yes. We offer 24/7 emergency HVAC service across Etobicoke and surrounding Toronto communities. Whether your furnace stops working on a cold night or your AC fails in summer, call (416) 832-5842 immediately. Our licensed team will respond as fast as possible to restore your home comfort.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. HERO */}
        <HeroSection
          eyebrow="Contact Park Lawn Heating"
          headline="Get in Touch With Our Expert HVAC Team"
          subheadline="Request service, ask a question, or get a free estimate. We respond promptly and are available 24/7 for emergencies across Etobicoke and Toronto."
          primaryCTA={{ label: "Call (416) 832-5842", href: `tel:${SITE.phonePlain}` }}
          secondaryCTA={{ label: "Send a Message", href: "#contact" }}
        />

        {/* 2. TRUST BAR */}
        <TrustBar />

        {/* 3. SERVICES */}
        <ServicesSection
          headline="What We Can Help You With"
          eyebrow="Our Services"
          services={SERVICES}
        />

        {/* 4. AI ANSWER BLOCK */}
        <AIAnswerBlock
          headline="Why Contact Park Lawn Heating?"
          intro="Park Lawn Heating and Cooling Inc. at 246 Park Lawn Road, Toronto, is Etobicoke licensed HVAC contractor for furnace repair, AC service, emergency HVAC, condo systems, hot water heaters, and indoor air quality. We respond fast, price fairly, and guarantee every job."
          whatWeDo="Whether you have an urgent heating emergency, need a free quote on a new system, or want to schedule routine maintenance, our team is ready to help. Contact us by phone, email, or the form on this page."
          services={[
            "Emergency furnace &amp; AC repair",
            "Free estimates for installations",
            "Condo fan coil &amp; heat pump service",
            "Hot water heater repair",
            "Annual maintenance plans",
            "Indoor air quality consultations",
          ]}
          benefits={[
            "24/7 availability — including emergencies",
            "Fully licensed &amp; insured technicians",
            "Transparent quotes before any work",
            "Consistent 5-star Google reputation",
            "Nearly 10 years in Etobicoke",
          ]}
          area="Serving 246 Park Lawn Road and all surrounding communities: Etobicoke, Mimico, Humber Bay, New Toronto, Long Branch, Islington, Rexdale, and greater Toronto west end."
        />

        {/* 5. PROCESS */}
        <ProcessSection
          headline="What Happens When You Contact Us"
          subheadline="Fast, transparent, and completely on your terms."
          steps={PROCESS_STEPS}
        />

        {/* 6. WHY CHOOSE US */}
        <WhyChooseUs
          headline="Why Etobicoke Homeowners Call Us First"
          intro="Trusted by homeowners and condo residents across Etobicoke for nearly a decade. Here is what makes the difference."
          features={WHY_FEATURES}
        />

        {/* 7. SERVICE AREAS */}
        <ServiceAreasSection />

        {/* 8. TESTIMONIALS */}
        <TestimonialsSection />

        {/* 9. FAQ */}
        <FAQSection
          faqs={CONTACT_FAQS}
          headline="Contact &amp; Booking FAQ"
          subheadline="Quick answers before you reach out"
        />

        {/* LEAD FORM — primary contact */}
        <LeadFormSection />

        {/* 10. FINAL CTA */}
        <FinalCTA
          headline="Prefer to Call? We&apos;re Ready."
          subheadline="Our licensed team is standing by for your heating and cooling needs — call now for immediate assistance or emergency service."
          ctaLabel="Call (416) 832-5842"
          ctaHref={`tel:${SITE.phonePlain}`}
          promoNote={true}
        />
      </main>
      <Footer />
    </>
  );
}
