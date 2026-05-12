import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

interface Location {
  city: string;
  state: string;
  slug: string;
}

interface ServiceAreasSectionProps {
  heading?: string;
  subheading?: string;
  locations: Location[];
}

export default function ServiceAreasSection({
  heading = 'Executive Protection — Local Roots. Global Reach.',
  subheading = 'Close protection services anchored in League City, TX — with deployments spanning the United States and 100+ countries. Wherever you need protection, we deliver it.',
  locations,
}: ServiceAreasSectionProps) {
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#0D0D0D] py-28 px-6 lg:px-16" id="service-areas">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`section-reveal ${visible ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Map side (left) */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="relative border border-[#1E1E1E] overflow-hidden" style={{ height: '520px' }}>
                <iframe
                  title="JNB Protection Group Service Area"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '520px', border: 'none', filter: 'grayscale(30%) contrast(1.05)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110875.21!2d-95.09!3d29.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f73cfb7cb5011%3A0x7d83f0bdeef77fe6!2sLeague%20City%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[#C9A84C] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[3px] border-r-[3px] border-[#C9A84C] pointer-events-none" />
              </div>
            </div>

            {/* Content side (right) */}
            <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[2px] bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">Coverage</span>
              </div>

              <h2
                className="font-heading text-white font-bold leading-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                {heading}
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-6">{subheading}</p>

              {/* EP keyword callout */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Executive Protection', 'Close Protection', 'Corporate Security', 'Private Client', 'Travel Security'].map((tag) => (
                  <span key={tag} className="text-[#C9A84C]/70 text-sm border border-[#C9A84C]/20 px-3 py-1 tracking-wider uppercase">{tag}</span>
                ))}
              </div>

              <div className="space-y-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.city}
                    to={loc.slug}
                    className="group flex items-center justify-between bg-[#111111] hover:bg-[#161616] border border-[#1E1E1E] hover:border-[#C9A84C]/30 px-5 py-4 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-7 h-7 flex items-center justify-center shrink-0">
                        <i className="ri-map-pin-2-fill text-[#C9A84C] text-base" />
                      </div>
                      <div>
                        <p className="font-heading text-white font-semibold text-lg">{loc.city}</p>
                        <p className="text-white/30 text-sm">{loc.state}</p>
                      </div>
                    </div>
                    <i className="ri-arrow-right-line text-[#C9A84C] text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
