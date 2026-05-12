import { Link } from 'react-router-dom';

interface MidPageCTAProps {
  headline?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function MidPageCTA({
  headline = 'Request a Confidential Security Consultation',
  sub = 'Speak with a Close Protection Specialist — discreet, no obligation, rapid response.',
  ctaLabel = 'Speak With a Specialist',
  ctaHref = '/#contact',
}: MidPageCTAProps) {
  return (
    <section className="bg-[#C9A84C] py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-bold text-black text-2xl lg:text-3xl leading-tight">{headline}</p>
          <p className="text-black/60 text-base mt-1">{sub}</p>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <a
            href="tel:+17139068273"
            className="flex items-center gap-2 font-heading font-bold text-black text-xl hover:text-black/70 transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill text-2xl" />
            713.906.8273
          </a>
          <Link
            to={ctaHref}
            className="bg-black hover:bg-[#1A1A1A] text-[#C9A84C] font-heading font-bold px-7 py-3 text-sm tracking-widest uppercase transition-colors cursor-pointer whitespace-nowrap"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
