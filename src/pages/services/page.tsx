import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const services = [
  {
    icon: 'ri-vip-crown-fill',
    category: 'PROTECTION',
    title: 'Executive & Close Protection',
    description: 'Former law enforcement professionals providing discreet, intelligence-led close protection tailored to your specific threat environment. Deployed in plainclothes or professional attire — presence without attention.',
  },
  {
    icon: 'ri-radar-fill',
    category: 'ADVANCE WORK',
    title: 'Security Advances',
    description: 'Comprehensive advance work at every venue, route, hotel, and transit point before your arrival. Every variable assessed, every contingency established — before you walk in the door.',
  },
  {
    icon: 'ri-spy-fill',
    category: 'INTELLIGENCE',
    title: 'Intelligence-Based Protection',
    description: 'Proactive threat identification and neutralization before incidents occur. Our intelligence-first methodology means we are always ahead of the threat — never responding to it.',
  },
  {
    icon: 'ri-shield-check-fill',
    category: 'ASSESSMENT',
    title: 'Vulnerability Assessments',
    description: 'Physical and site security assessments for estates, corporate campuses, events, and high-value properties. Conducted by specialists with experience securing major global events.',
  },
  {
    icon: 'ri-flight-takeoff-fill',
    category: 'TRAVEL',
    title: 'International Travel Protection',
    description: 'End-to-end protection for domestic and international travel. Coordinated through a global partner network spanning 100+ countries — every airport, hotel, and transit point covered.',
  },
  {
    icon: 'ri-search-eye-fill',
    category: 'INVESTIGATIONS',
    title: 'Private Investigations',
    description: 'Discreet, professional investigations for law firms, insurers, businesses, and private individuals. Confidential by default — delivered as actionable, documented intelligence.',
  },
  {
    icon: 'ri-calendar-event-fill',
    category: 'EVENTS',
    title: 'High-Profile Event Security',
    description: 'Full-scope security planning and execution for events of any scale — from intimate private gatherings to major industry engagements. Complete environmental control and principal safety.',
  },
  {
    icon: 'ri-alert-fill',
    category: 'CRISIS',
    title: 'Crisis Management',
    description: 'Rapid strategic guidance and controlled-environment resolution for complex, high-stakes situations. Experience managing real crises under real pressure — without compromise.',
  },
  {
    icon: 'ri-building-4-fill',
    category: 'CONSULTING',
    title: 'Security Consulting',
    description: 'Strategic security consulting for organizations navigating complex threat environments. From enterprise-level program design to workplace violence prevention protocols.',
  },
];

function ServicesGrid() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-[10px] font-medium tracking-[5px] uppercase">Capabilities</span>
        </div>
        <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-10">All Services</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#080808] hover:bg-[#0C0C0C] p-7 group transition-all cursor-default border-l-2 border-transparent hover:border-[#C9A84C]/60"
            >
              <span className="text-[#C9A84C] text-sm font-medium tracking-[0.35em] uppercase block mb-2.5">{s.category}</span>
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <i className={`${s.icon} text-[#C9A84C] text-base`} />
                </div>
                <h3 className="font-heading text-white font-semibold text-base leading-tight">{s.title}</h3>
              </div>
              <p className="text-white/38 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Protection Services."
        subheadline="Intelligence-led protection, advance work, investigations, and consulting — delivered by former law enforcement professionals."
        imageSrc="https://public.readdy.ai/ai/img_res/edited_7b9e08c633aad3321501519a1b4ae268_aa794ca6.jpg"
        badge="Services"
        ctaPrimary={{ label: 'Contact Us', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <ServicesGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
