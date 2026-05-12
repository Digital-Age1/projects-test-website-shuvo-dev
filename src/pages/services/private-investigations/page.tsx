import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/feature/HeroSection';
import ContactSection from '@/components/feature/ContactSection';
import { useInView } from '@/hooks/useInView';

const investigationTypes = [
  { icon: 'ri-file-search-fill', title: 'Background Investigations', desc: 'Deep-dive background checks including employment history, educational credentials, creditworthiness, financial history, and public profile analysis.' },
  { icon: 'ri-eye-2-fill', title: 'Physical Surveillance', desc: 'Professional covert surveillance operations for all types of investigations — domestic, corporate, insurance, and legal matters.' },
  { icon: 'ri-computer-fill', title: 'Digital & Social Media', desc: 'Social media investigations, computer forensics, electronic (bug) sweeps, and technical surveillance countermeasures (TSCM).' },
  { icon: 'ri-building-2-fill', title: 'Corporate Investigations', desc: 'Internal investigations, asset investigations, corruption investigations, and due diligence backgrounds for multinational corporations.' },
  { icon: 'ri-scales-fill', title: 'Legal Support', desc: 'Civil and criminal litigation support, allegation evidence gathering, and expert witness coordination for law firms and legal teams.' },
  { icon: 'ri-truck-fill', title: 'Cargo & Logistics Security', desc: 'Cargo theft investigations, logistics security assessments, and undercover operations for supply chain integrity.' },
];

function InvestigationGrid() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-7 h-[2px] bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-[5px] uppercase">Investigation Services</span>
        </div>
        <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-10">What We Investigate</h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#181818] transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {investigationTypes.map((item) => (
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
          <p className="text-white/55 text-base leading-relaxed mb-6">
            Through our national network of investigators, proprietary technologies and decades of combined experience, JNB Protection Group handles investigations of all types in all 50 States, Canada and Central America. Our investigations encompass any type of investigation needed. Our team conducts investigations for a myriad of various entities, such as individuals, insurance companies, law firms, multinational corporations and businesses of many types. Here is a list of investigative services we provide for our clients:
          </p>
          <ul className="text-white/55 text-sm leading-relaxed space-y-2">
            {[
              'Various levels of background checks, including deep dive background checks',
              'Due diligence backgrounds',
              'Physical surveillance of all types',
              'Professional and personal backgrounds of individuals',
              'Employment history',
              'Social media investigations',
              'Press coverage',
              'Educational credentials',
              'Creditworthiness / credit history / financial investigations',
              'Public profile',
              'Regulatory sanctions',
              'Civil and criminal litigation support',
              'Trouble with current/previous employers',
              'Licensing and credentialing',
              'Fraud / theft / loss investigations',
              'Allegation evidence gathering',
              'Internal investigations',
              'Assets investigations',
              'Identity verification',
              'Corruption investigations',
              'Domestic & infidelity',
              'Computer and internet forensics',
              'Undercover operations',
              'Electronic (bug) sweeps / technical surveillance counter measures (TSCM)',
              'Cargo theft investigations & logistics security',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[5px] w-3 h-3 flex items-center justify-center shrink-0">
                  <i className="ri-checkbox-blank-circle-fill text-[#C9A84C] text-[5px]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function PrivateInvestigationsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="Nationwide Private Investigations."
        subheadline="Professional, discreet investigations for law firms, insurers, corporations, and private individuals — delivered as actionable intelligence."
        badge="Private Investigations"
        ctaPrimary={{ label: 'Request Investigation', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <ContentSection />
      <InvestigationGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
