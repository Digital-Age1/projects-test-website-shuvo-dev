import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  slug: string;
  clientType?: string;
}

interface ServicesSectionProps {
  heading?: string;
  subheading?: string;
  services: Service[];
}

export default function ServicesSection({
  heading = 'Elite Executive Protection Services',
  subheading = 'Every capability is intelligence-driven, delivered by former law enforcement professionals — and built around the highest standard of discretion.',
  services,
}: ServicesSectionProps) {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#0D0D0D] py-28 px-6 lg:px-16" id="services">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 section-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-base font-medium tracking-[4px] uppercase">What We Do</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="font-heading text-white font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {heading}
            </h2>
            <p className="text-white/45 text-lg leading-relaxed max-w-sm lg:text-right">{subheading}</p>
          </div>
        </div>

        {/* Intro Text */}
        <div className={`mb-16 section-reveal ${headerVisible ? 'visible' : ''}`}>
          <div className="space-y-5 text-white/55 text-base lg:text-[15px] leading-[1.9]">
            <p>
              Today&apos;s global executives and high-profile individuals are faced with unprecedented risks that require not only immediate on-the-ground protection, but also a high level of thorough security planning, coordination and management. JNB Protection Group provides intelligence-based protection services supported by intelligence information, situational awareness, emergency response coordination, and security concierge services to clients around the country.
            </p>
            <p>
              We specialize in personal risk assessment, threat analysis, secure transportation, discreet operations and protecting not only people, but those people&apos;s private information and reputations.
            </p>
            <p>
              JNB Protection Groups&apos; protection and secure transportation services are consistent with the rigorous security standards used by the world&apos;s best agencies. The goal of all assignments is to deploy the most threat-appropriate protective measures while minimizing intrusions into the clients schedule and, when necessary, minimizing public exposure. We work with our clients to identify their own personal threat profile and develop a customized strategic security plan that includes logistics and operations.
            </p>
            <p>
              Our team will formulate advance site survey reports, or more in depth risk assessments in anticipation of your arrival. Our advance personnel are specifically trained in this subject matter and are prepared to identify, investigate and report events that could hinder your ability to achieve your objectives.
            </p>
            <p>
              Our clients include Fortune 50 companies, C-Suite executives representing multinational companies and high-profile/ultra-high net-worth individuals and their families who rely on our discreet, personal, professional and confidential protection services to facilitate their business careers, public appearances, social activities and private lives, all while protecting their property, assets, information and reputation.
            </p>
            <p>
              JNB Protection Group is comprised of and supported by a network of former U.S. Secret Service Agents with deep ties to current Secret Service, former U.S Special Forces personnel and other former career law enforcement personnel from across the country.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E] section-reveal ${gridVisible ? 'visible' : ''}`}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group bg-[#0D0D0D] hover:bg-[#141414] p-9 flex flex-col transition-colors duration-300 relative overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Number */}
              <span
                className="absolute top-6 right-8 font-heading font-bold text-[#C9A84C]/6 leading-none pointer-events-none select-none"
                style={{ fontSize: '7rem' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Gold left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 flex items-center justify-center bg-[#C9A84C]/10 mb-6 group-hover:bg-[#C9A84C]/20 transition-colors">
                <i className={`${service.icon} text-[#C9A84C] text-xl`} />
              </div>

              <h3 className="font-heading text-white font-semibold text-2xl mb-2 group-hover:text-[#C9A84C] transition-colors leading-tight">
                {service.title}
              </h3>
              {service.clientType && (
                <p className="text-[#C9A84C]/60 text-base font-medium tracking-wider uppercase mb-3">{service.clientType}</p>
              )}
              <p className="text-white/45 text-lg leading-relaxed flex-1 mb-6">{service.description}</p>

              <Link
                to={service.slug}
                className="flex items-center gap-2 text-[#C9A84C] text-base font-heading font-semibold tracking-widest uppercase group-hover:gap-3 transition-all whitespace-nowrap"
                onClick={(e) => e.stopPropagation()}
              >
                Learn More <i className="ri-arrow-right-line" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
