import { useInView } from '../../hooks/useInView';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

interface TestimonialsSectionProps {
  heading?: string;
  testimonials: Testimonial[];
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="ri-star-fill text-[#C9A84C] text-sm" />
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  heading = 'Trusted by Clients Who Value Safety',
  testimonials,
}: TestimonialsSectionProps) {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [featuredRef, featuredVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>();

  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="bg-[#080808] py-28 px-6 lg:px-16 border-t border-[#1A1A1A]" id="testimonials">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 section-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">Client Testimonials</span>
          </div>
          <h2
            className="font-heading text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {heading}
          </h2>
        </div>

        {/* Featured testimonial */}
        {featured && (
          <div
            ref={featuredRef}
            className={`relative bg-[#0D0D0D] border border-[#1E1E1E] p-10 lg:p-14 mb-6 overflow-hidden section-reveal ${featuredVisible ? 'visible' : ''}`}
          >
            {/* Decorative quote mark */}
            <span
              className="absolute top-4 right-8 font-heading text-[#C9A84C] leading-none pointer-events-none select-none opacity-[0.06]"
              style={{ fontSize: '15rem', lineHeight: 1 }}
            >
              &ldquo;
            </span>

            <div className="relative z-10 max-w-4xl">
              <StarRow count={featured.rating} />
              <p className="font-heading text-white text-2xl lg:text-3xl font-medium leading-snug mt-6 mb-8 italic">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#C9A84C]/15 border border-[#C9A84C]/30 font-heading text-[#C9A84C] font-bold text-base">
                  {featured.avatar}
                </div>
                <div>
                  <p className="font-heading text-white font-semibold text-lg">{featured.name}</p>
                  <p className="text-white/40 text-sm">{featured.role}</p>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[3px] border-r-[3px] border-[#C9A84C]/20" />
          </div>
        )}

        {/* Rest of testimonials */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A] section-reveal ${gridVisible ? 'visible' : ''}`}
        >
          {rest.map((t, i) => (
            <div
              key={t.id}
              className="bg-[#0D0D0D] hover:bg-[#0F0F0F] p-8 flex flex-col transition-colors"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <StarRow count={t.rating} />
              <p className="text-white/55 text-base leading-relaxed mt-4 mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#1A1A1A]">
                <div className="w-9 h-9 flex items-center justify-center bg-[#C9A84C]/10 font-heading text-[#C9A84C] font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-base">{t.name}</p>
                  <p className="text-white/35 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
