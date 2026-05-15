import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import HeroSection from '../../../components/feature/HeroSection';
import ContactSection from '../../../components/feature/ContactSection';
import { useInView } from '../../../hooks/useInView';

const coverage = [
  { city: 'League City', note: 'Headquarters' },
  { city: 'Houston Metro', note: 'Full coverage' },
  { city: 'Galveston & Gulf Coast', note: 'Texas' },
  { city: 'Dallas / Fort Worth', note: 'Texas' },
  { city: 'National Coverage', note: 'United States' },
  { city: 'International', note: '100+ Countries' },
];

const services = [
  { icon: 'ri-vip-crown-fill', title: 'Executive & Close Protection' },
  { icon: 'ri-radar-fill', title: 'Security Advances' },
  { icon: 'ri-spy-fill', title: 'Intelligence-Based Protection' },
  { icon: 'ri-shield-check-fill', title: 'Vulnerability Assessments' },
  { icon: 'ri-search-eye-fill', title: 'Private Investigations' },
  { icon: 'ri-alert-fill', title: 'Crisis Management' },
];

function CoverageSection() {
  const [ref, visible] = useInView<HTMLDivElement>();
  return (
    <section className="bg-[#080808] py-16 px-6 lg:px-16 border-t border-[#1A1A1A]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-medium tracking-[5px] uppercase">Coverage</span>
            </div>
            <h2 className="font-heading text-white font-bold text-xl lg:text-2xl mb-5 leading-tight">
              League City, TX &amp; Beyond
            </h2>
            <p className="text-white/48 text-sm leading-relaxed mb-3">
              Headquartered at 2951 Marina Bay Dr., League City, TX — serving the Houston metro, Gulf Coast, and all of Texas, with deployments available nationwide and internationally.
            </p>
            <p className="text-white/30 text-xs mb-7">Texas State License C12684701</p>

            {/* Services list */}
            <div className="space-y-0">
              {services.map((s, i) => (
                <div key={s.title} className={`flex items-center gap-3.5 py-3 ${i < services.length - 1 ? 'border-b border-[#161616]' : ''}`}>
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <i className={`${s.icon} text-[#C9A84C] text-xs`} />
                  </div>
                  <span className="text-white/65 text-xs font-heading">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — coverage areas */}
          <div>
            <div className="border border-[#1C1C1C] overflow-hidden mb-5" style={{ height: '280px' }}>
              <iframe
                title="JNB Protection Group — League City TX"
                width="100%"
                height="100%"
                style={{ border: 'none', filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110875.21!2d-95.09!3d29.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f73cfb7cb5011%3A0x7d83f0bdeef77fe6!2sLeague%20City%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              />
            </div>
            <div className="space-y-1.5">
              {coverage.map((area) => (
                <div
                  key={area.city}
                  className="flex items-center justify-between px-4 py-3 border border-[#1C1C1C] hover:border-[#C9A84C]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                      <i className="ri-map-pin-2-fill text-[#C9A84C] text-xs" />
                    </div>
                    <span className="text-white/70 font-heading font-semibold text-xs">{area.city}</span>
                  </div>
                  <span className="text-white/25 text-[11px]">{area.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ColoradoSpringsPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <HeroSection
        h1="League City &amp; Houston, TX."
        subheadline="Executive protection and security services throughout Texas — with global deployments available on request."
        imageSrc="/uploads/hero-lawn-care.jpg"
        badge="League City & Houston, TX"
        ctaPrimary={{ label: 'Contact Us', href: '#contact' }}
        ctaSecondary={{ label: '713.906.8273', href: 'tel:+17139068273' }}
        compact
      />
      <CoverageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
