import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const capabilities = [
  { icon: 'ri-shield-user-fill', title: 'Close Protection Details', desc: 'Plainclothes and uniformed protective details tailored to your threat environment and lifestyle. Discreet presence without drawing attention.' },
  { icon: 'ri-car-fill', title: 'Secure Transportation', desc: 'Armored and non-armored vehicle coordination with trained protective drivers. Route planning, counter-surveillance, and motorcade management.' },
  { icon: 'ri-global-fill', title: 'International Travel Security', desc: 'End-to-end protection for domestic and international travel through a global partner network spanning 100+ countries.' },
  { icon: 'ri-eye-fill', title: 'Threat Assessment', desc: 'Personal risk assessments identifying specific threats to your safety, reputation, and assets — before they materialize.' },
  { icon: 'ri-calendar-event-fill', title: 'Event & Appearance Security', desc: 'Full-scope security planning for public appearances, corporate events, and private gatherings of any scale.' },
  { icon: 'ri-user-settings-fill', title: 'Security Concierge', desc: 'Seamless, white-glove security coordination integrated into your daily schedule without disruption to your routine.' },
];

function CapabilitiesGrid() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-[5px] uppercase">Capabilities</span>
        </div>
        <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-10">What We Provide</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {capabilities.map((c) => (
            <div key={c.title} className="bg-[#080808] hover:bg-[#0C0C0C] p-7 group transition-all border-l-2 border-transparent hover:border-[#C9A84C]/60">
              <div className="w-8 h-8 flex items-center justify-center mb-4">
                <i className={`${c.icon} text-[#C9A84C] text-xl`} />
              </div>
              <h3 className="font-heading text-white font-semibold text-base mb-2">{c.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            Today&apos;s global executives and high-profile individuals are faced with unprecedented risks that require not only immediate on-the-ground protection, but also a high level of thorough security planning, coordination and management. JNB Protection Group provides intelligence-based protection services supported by intelligence information, situational awareness, emergency response coordination, and security concierge services to clients around the country.
          </p>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            We specialize in personal risk assessment, threat analysis, secure transportation, discreet operations and protecting not only people, but those people&apos;s private information and reputations.
          </p>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            JNB Protection Groups&apos; protection and secure transportation services are consistent with the rigorous security standards used by the world&apos;s best agencies. The goal of all assignments is to deploy the most threat-appropriate protective measures while minimizing intrusions into the clients schedule and, when necessary, minimizing public exposure. We work with our clients to identify their own personal threat profile and develop a customized strategic security plan that includes logistics and operations.
          </p>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            Our team will formulate advance site survey reports, or more in depth risk assessments in anticipation of your arrival. Our advance personnel are specifically trained in this subject matter and are prepared to identify, investigate and report events that could hinder your ability to achieve your objectives.
          </p>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            Our clients include Fortune 50 companies, C-Suite executives representing multinational companies and high-profile/ultra-high net-worth individuals and their families who rely on our discreet, personal, professional and confidential protection services to facilitate their business careers, public appearances, social activities and private lives, all while protecting their property, assets, information and reputation.
          </p>
          <p className="text-white/55 text-base leading-relaxed">
            JNB Protection Group is comprised of and supported by a network of former U.S. Secret Service Agents with deep ties to current Secret Service, former U.S. Special Forces personnel and other former career law enforcement personnel from across the country.
          </p>
        </div>

      </div>
    </section>
  );
}

export default function ExecutiveVIPProtectionPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Executive & VIP Protection."
        subheadline="Former U.S. Secret Service professionals providing discreet, intelligence-led close protection tailored to your specific threat environment."
        badge="Executive & VIP Protection"
        ctaPrimary={{ label: 'Request Protection', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <ContentSection />
      <CapabilitiesGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
