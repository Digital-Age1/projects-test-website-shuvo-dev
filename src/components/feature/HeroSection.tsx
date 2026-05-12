import { Link } from 'react-router-dom';
import { useInView } from '../../hooks/useInView';

interface HeroSectionProps {
  h1: string;
  subheadline: string;
  imageSrc?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badge?: string;
  compact?: boolean;
}

export default function HeroSection({
  h1,
  subheadline,
  imageSrc = '',
  ctaPrimary = { label: 'Request Service', href: '/#contact' },
  ctaSecondary = { label: '713.906.8273', href: 'tel:+17139068273' },
  badge,
  compact = false,
}: HeroSectionProps) {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  const minH = compact ? '55vh' : '82vh';
  const paddingTop = compact ? '180px' : '200px';
  const paddingBottom = compact ? '60px' : '80px';

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: minH }}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808] overflow-hidden">
        {imageSrc ? (
          <>
            {/* Photo background */}
            <img
              src={imageSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Dark overlays for readability */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </>
        ) : (
          <>
            {/* Subtle grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
            {/* Large diagonal accent lines */}
            <div className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px)',
              }}
            />
            {/* Radial glow — top left */}
            <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)' }}
            />
            {/* Radial glow — bottom right */}
            <div className="absolute -bottom-60 -right-40 w-[800px] h-[800px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
            />
            {/* Horizontal scan line */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
            {/* Corner bracket — top right */}
            <div className="absolute top-12 right-12 w-16 h-16 border-t border-r border-[#C9A84C]/20" />
            {/* Corner bracket — bottom left */}
            <div className="absolute bottom-12 left-12 w-16 h-16 border-b border-l border-[#C9A84C]/20" />
            {/* Vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          </>
        )}
      </div>

      {/* Left gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-80" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 w-full px-6 lg:px-16 flex flex-col justify-center"
        style={{ minHeight: minH, paddingTop, paddingBottom }}
      >
        <div
          className={`max-w-xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {badge && (
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-[10px] font-medium tracking-[5px] uppercase">{badge}</span>
            </div>
          )}

          <h1
            className="font-heading text-white font-bold leading-[0.92] tracking-tight mb-5"
            style={{ fontSize: compact ? 'clamp(2rem, 3.5vw, 3.5rem)' : 'clamp(2.4rem, 4.5vw, 4.5rem)' }}
            dangerouslySetInnerHTML={{ __html: h1 }}
          />

          <div className="w-12 h-[2px] bg-[#C9A84C] mb-8" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to={ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-heading font-bold px-7 py-3.5 text-sm tracking-widest uppercase transition-colors cursor-pointer whitespace-nowrap"
            >
              {ctaPrimary.label}
            </Link>
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#C9A84C] text-sm tracking-widest uppercase transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill text-[#C9A84C]" />
              {ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
