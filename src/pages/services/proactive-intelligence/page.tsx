import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const intelligenceServices = [
  { icon: 'ri-radar-fill', title: 'Threat Intelligence Gathering', desc: 'Systematic collection and analysis of information identifying threats and assessing the level of risk associated with those threats before they materialize.' },
  { icon: 'ri-spy-fill', title: 'Proactive Threat Neutralization', desc: 'Active measures to neutralize identified threats before incidents occur — always ahead of the threat, never responding to it.' },
  { icon: 'ri-bar-chart-fill', title: 'Risk Level Assessment', desc: 'Quantified risk assessments providing clear, actionable intelligence on threat levels across all environments and activities.' },
  { icon: 'ri-shield-check-fill', title: 'Security Concierge Services', desc: 'White-glove security coordination seamlessly integrated into your daily schedule — protection that works around your life, not against it.' },
  { icon: 'ri-alarm-warning-fill', title: 'Real-Time Threat Monitoring', desc: 'Continuous monitoring of threat indicators with real-time intelligence updates and immediate response protocols when threats are identified.' },
  { icon: 'ri-file-chart-fill', title: 'Actionable Intelligence Reports', desc: 'Detailed intelligence reports with specific, actionable recommendations — not just data, but decisions you can act on immediately.' },
];

function IntelligenceGrid() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-[5px] uppercase">Intelligence Capabilities</span>
        </div>
        <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-10">Intelligence-First Methodology</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {intelligenceServices.map((item) => (
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
        className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div>
          <p className="text-white/55 text-base leading-relaxed mb-5">
            JNB Protection Groups proactive intelligence based protection is an in depth process we utilize to gather information that identifies threats and assesses the level of risk associated with those threats. Taking this proactive posture assists us in mitigating the risk to an acceptable level. We want to have the real-time information necessary to deal with potential threat events by developing actionable plans that help us both avoid and deter those threats before they ever develop, therefore helping us maintain our clients safety and security.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ProactiveIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Proactive Intelligence-Based Protection & Security Concierge."
        subheadline="Intelligence-first methodology that identifies and neutralizes threats before incidents occur — always ahead, never reacting."
        badge="Proactive Intelligence"
        ctaPrimary={{ label: 'Request Intelligence Services', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <ContentSection />
      <IntelligenceGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
