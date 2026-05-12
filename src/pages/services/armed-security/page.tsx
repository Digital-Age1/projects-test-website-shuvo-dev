import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import HeroSection from '../../../components/feature/HeroSection';
import TrustBar from '../../../components/feature/TrustBar';
import ServicesSection from '../../../components/feature/ServicesSection';
import MidPageCTA from '../../../components/feature/MidPageCTA';
import AIAnswerBlock from '../../../components/feature/AIAnswerBlock';
import ProcessSection from '../../../components/feature/ProcessSection';
import WhyChooseUs from '../../../components/feature/WhyChooseUs';
import ServiceAreasSection from '../../../components/feature/ServiceAreasSection';
import TestimonialsSection from '../../../components/feature/TestimonialsSection';
import FAQSection from '../../../components/feature/FAQSection';
import FinalCTASection from '../../../components/feature/FinalCTASection';
import { testimonials, locations, armedSecurityFaqs } from '../../../mocks/security';

const epServices = [
  { id: 'ep-ground', icon: 'ri-user-star-fill', title: 'On-Ground Close Protection', description: 'Immediate physical protection by former law enforcement agents — trained, vetted, and deployed to match your specific threat level.', slug: '/services/armed-security' },
  { id: 'ep-advance', icon: 'ri-radar-fill', title: 'Protective Advance Work', description: 'Agents conduct thorough security advances of all locations and routes before your principal arrives — zero surprises.', slug: '/services/armed-security' },
  { id: 'ep-route', icon: 'ri-map-pin-2-fill', title: 'Route & Venue Assessment', description: 'Detailed analysis of all travel routes, venues, and transit points — identifying and mitigating vulnerabilities proactively.', slug: '/services/armed-security' },
  { id: 'ep-intel', icon: 'ri-spy-fill', title: 'Threat Intelligence Gathering', description: 'Pre-deployment intelligence gathering to identify known or potential threats — enabling a proactive rather than reactive posture.', slug: '/services/armed-security' },
  { id: 'ep-event', icon: 'ri-calendar-event-fill', title: 'Event & Venue Security', description: 'Comprehensive protection for high-profile events, galas, corporate functions, and entertainment industry engagements.', slug: '/services/armed-security' },
  { id: 'ep-travel', icon: 'ri-flight-takeoff-fill', title: 'International Travel Protection', description: 'End-to-end protection for international travel — coordinating with a global partner network spanning 100+ countries.', slug: '/services/armed-security' },
];

const epProcess = [
  { number: '01', title: 'Threat Assessment', description: 'Comprehensive evaluation of the principal\'s threat environment, exposure level, and risk factors — domestic and international.' },
  { number: '02', title: 'Protective Advance', description: 'Agents visit and assess all locations, routes, and venues in advance — identifying vulnerabilities before arrival.' },
  { number: '03', title: 'Team Briefing', description: 'Full operational briefing: protocols, emergency procedures, communication channels, and escalation procedures.' },
  { number: '04', title: 'Active Protection', description: 'Real-time close protection with constant situational awareness — discrete, professional, and always prepared.' },
];

const epWhyItems = [
  { icon: 'ri-government-fill', title: 'Former Law Enforcement Professionals', text: 'Every agent is a former Federal, State, or Local Law Enforcement professional — real credentials, real field experience, real results.' },
  { icon: 'ri-global-fill', title: 'Proven in 100+ Countries', text: 'Our global partner network enables close protection and advance threat work across 100+ countries — international protection is a core competency.' },
  { icon: 'ri-eye-off-fill', title: 'Discretion as Standard', text: 'Plainclothes or professional deployment calibrated to your environment — our agents blend in, never stand out. Protection without attention.' },
  { icon: 'ri-brain-fill', title: 'De-escalation First', text: 'Force is the absolute last option. We resolve tension, control environments, and protect reputations through expert situational management.' },
  { icon: 'ri-medal-fill', title: 'Thorough Advance Work', text: 'Every venue, route, and access point is physically advanced by our agents before your principal arrives — zero surprises, zero improvisation.' },
  { icon: 'ri-file-text-fill', title: 'Full Reporting & Debrief', text: 'Complete incident documentation, post-engagement debrief, and ongoing threat monitoring available for all executive protection engagements.' },
];

export default function ArmedSecurityPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />

      {/* 1. Hero */}
      <HeroSection
        h1="Executive &amp; Close Protection Services Worldwide"
        subheadline="Discreet, intelligence-led protection for C-suite executives, public figures, and high-net-worth individuals. JNB Protection Group's Close Protection Specialists are former law enforcement professionals — trained to prevent incidents, not just respond to them."
        imageSrc="https://readdy.ai/api/search-image?query=elite%20close%20protection%20specialist%20in%20impeccable%20charcoal%20suit%20with%20discreet%20earpiece%20walking%20alongside%20VIP%20principal%20through%20luxury%20hotel%20corridor%20warm%20golden%20ambient%20lighting%20low%20profile%20professional%20discreet%20executive%20protection%20high-end%20environment%20natural%20cinematic&width=1920&height=1080&seq=hero-ep-service-v2&orientation=landscape"
        badge="Close Protection Specialists"
        ctaPrimary={{ label: 'Request a Private Consultation', href: '/#contact' }}
        ctaSecondary={{ label: 'Call 713.906.8273', href: 'tel:+17139068273' }}
      />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services — "What's Included" */}
      <ServicesSection
        services={epServices}
        heading="Executive Protection: Full Scope of Service"
        subheading="Comprehensive close protection for executives, VIPs, and high-profile individuals — every detail managed by former law enforcement professionals."
      />

      {/* 4. Mid CTA */}
      <MidPageCTA
        headline="Request a Confidential EP Consultation"
        sub="Speak directly with a Close Protection Specialist — discreet, no obligation, rapid response."
        ctaLabel="Speak With a Specialist"
      />

      {/* 5. AI Answer Block */}
      <AIAnswerBlock
        question="What Is Executive Close Protection?"
        answer="Executive close protection involves trained former law enforcement professionals providing on-the-ground security for high-profile individuals and global executives. JNB Protection Group's EP services include thorough protective advances, threat intelligence, route assessment, and real-time close protection — delivered with absolute discretion and the highest professional standards."
        label="Executive Protection Explained"
        bullets={[
          'On-ground close protection by former Federal, State, and Local Law Enforcement agents',
          'Protective advance work: all locations and routes assessed before principal arrives',
          'Intelligence-based threat identification before deployment',
          'Available for domestic US engagements and international travel in 100+ countries',
          'Plainclothes or uniformed deployment based on environment and principal preference',
        ]}
      />

      {/* 6. Process */}
      <ProcessSection steps={epProcess} heading="Our Executive Protection Process" />

      {/* 7. Why Choose Us */}
      <WhyChooseUs
        items={epWhyItems}
        heading="Why Discerning Clients Choose JNB"
        imageSrc="https://readdy.ai/api/search-image?query=two%20close%20protection%20agents%20in%20premium%20tailored%20dark%20suits%20with%20earpieces%20flanking%20VIP%20principal%20walking%20through%20glass%20corporate%20building%20atrium%20natural%20light%20professional%20discreet%20high-end%20executive%20protection%20low%20profile%20team&width=800&height=900&seq=why-ep-service-v2&orientation=portrait"
      />

      {/* 8. Service Areas */}
      <ServiceAreasSection
        locations={locations}
        heading="Executive Protection Available Worldwide"
        subheading="Based in League City, TX — JNB deploys EP teams throughout the US and internationally across 100+ countries."
      />

      {/* 9. Testimonials */}
      <TestimonialsSection testimonials={testimonials} heading="What Clients Say About Our Protection" />

      {/* 10. Mid CTA #2 */}
      <MidPageCTA
        headline="Trusted by High-Profile Clients Across Industries"
        sub="Entertainment executives, corporate leadership, private individuals — JNB delivers elite protection with absolute discretion."
        ctaLabel="Request Consultation"
      />

      {/* 11. FAQ */}
      <FAQSection faqs={armedSecurityFaqs} heading="Executive Protection Questions" />

      {/* 12. Final CTA */}
      <FinalCTASection
        heading="Protect What Matters — Start With a Private Consultation"
        subheading="Confidential. Professional. No Obligation. Our Close Protection Specialists respond within 2 business hours."
      />

      <Footer />
    </div>
  );
}
