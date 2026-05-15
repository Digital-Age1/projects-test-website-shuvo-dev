import { useInView } from '../../hooks/useInView';

interface WhyItem {
  icon: string;
  title?: string;
  text: string;
}

interface WhyChooseUsProps {
  heading?: string;
  items: WhyItem[];
  imageSrc?: string;
}

export default function WhyChooseUs({
  heading = 'Why Discerning Clients Choose JNB',
  items,
  imageSrc = '/uploads/hero-lawn-care.jpg',
}: WhyChooseUsProps) {
  const [leftRef, leftVisible] = useInView<HTMLDivElement>();
  const [rightRef, rightVisible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#080808] py-28 px-6 lg:px-16 border-t border-[#1A1A1A]" id="why-us">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div
            ref={leftRef}
            className={`section-reveal ${leftVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">Our Advantage</span>
            </div>

            <h2
              className="font-heading text-white font-bold leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              {heading}
            </h2>

            {/* Differentiator quote */}
            <div className="border-l-[3px] border-[#C9A84C] pl-5 mb-10">
              <p className="text-white/55 text-base leading-relaxed italic">
                &ldquo;We don&apos;t just provide presence — we engineer controlled environments where every variable has been assessed, every contingency planned, every exit known.&rdquo;
              </p>
            </div>

            <div className="space-y-5">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 pb-5 border-b border-[#1A1A1A] last:border-0 last:pb-0"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-[#C9A84C]/20 bg-[#C9A84C]/6 group-hover:bg-[#C9A84C]/15 transition-colors mt-0.5">
                    <i className={`${item.icon} text-[#C9A84C] text-lg`} />
                  </div>
                  <div className="pt-1">
                    {item.title && (
                      <p className="font-heading text-white font-semibold text-base mb-1">{item.title}</p>
                    )}
                    <p className="text-white/55 text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={rightRef}
            className={`section-reveal ${rightVisible ? 'visible' : ''}`}
          >
            <div className="relative" style={{ height: '620px' }}>
              <img
                src={imageSrc}
                alt="JNB Protection Group close protection specialists"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />

              {/* Stats grid overlay */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/10">
                {[
                  { value: '100+', label: 'Countries' },
                  { value: '24/7', label: 'Coverage' },
                  { value: 'Zero', label: 'Compromise' },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`bg-black/75 backdrop-blur-sm px-5 py-5 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}
                  >
                    <p className="font-heading text-[#C9A84C] font-bold text-2xl">{stat.value}</p>
                    <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-[#C9A84C]" />
              <div className="absolute left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-[#C9A84C]" style={{ bottom: '68px' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}