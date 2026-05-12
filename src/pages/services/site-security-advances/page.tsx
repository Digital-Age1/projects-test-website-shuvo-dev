import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const advanceServices = [
  { icon: 'ri-map-pin-2-fill', title: 'Venue Advance Work', desc: 'Comprehensive pre-arrival assessment of every venue, hotel, restaurant, and facility — identifying threats, vulnerabilities, and contingency routes before you arrive.' },
  { icon: 'ri-route-fill', title: 'Route Planning & Analysis', desc: 'Primary and alternate route identification, traffic pattern analysis, and counter-surveillance route protocols for all ground movements.' },
  { icon: 'ri-hotel-fill', title: 'Hotel & Lodging Security', desc: 'Full hotel advance including room selection, floor security, staff vetting, access control, and emergency egress planning.' },
  { icon: 'ri-flight-takeoff-fill', title: 'Airport & Transit Security', desc: 'Advance coordination at all airports, private terminals, and transit points — ensuring seamless, secure arrivals and departures.' },
  { icon: 'ri-team-fill', title: 'Liaison & Coordination', desc: 'Direct coordination with local law enforcement, venue security, and event staff to establish unified security protocols.' },
  { icon: 'ri-file-list-3-fill', title: 'Advance Survey Reports', desc: 'Detailed written advance survey reports documenting all findings, threat assessments, and recommended security measures for each location.' },
];

function AdvanceGrid() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-[5px] uppercase">Advance Services</span>
        </div>
        <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-10">Comprehensive Advance Coverage</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {advanceServices.map((item) => (
            <div key={item.title} className="bg-[#080808] hover:bg-[#0C0C0C] p-7 group transition-all border-l-2 border-transparent hover:border-[#C9A84C]/60">
              <div className="w-8 h-8 flex items-center justify-center mb-4">
                <i className={`${item.icon} text-[#C9A84C] text-xl`} />
              </div>
              <h3 className="font-heading text-white font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
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
            Our team will formulate advance site survey reports, or more in depth risk assessments ahead of all your movements and in anticipation of your arrival. Our advance personnel are specifically trained in this subject matter and are prepared to identify, investigate and report events that could hinder your ability to achieve your objectives.
          </p>


        </div>
      </div>
    </section>
  );
}

export default function SiteSecurityAdvancesPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Site Security Advances & Advance Threat Protection."
        subheadline="Comprehensive advance work at every venue, route, hotel, and transit point — every variable assessed before you arrive."
        badge="Site Security Advances"
        ctaPrimary={{ label: 'Request Advance Work', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <ContentSection />
      <AdvanceGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
