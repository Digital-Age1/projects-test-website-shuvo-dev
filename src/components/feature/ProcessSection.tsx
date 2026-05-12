import { useInView } from '../../hooks/useInView';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  heading?: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  heading = 'How Our Security Process Works',
  steps,
}: ProcessSectionProps) {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [stepsRef, stepsVisible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#0D0D0D] py-28 px-6 lg:px-16 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto">

        <div
          ref={headerRef}
          className={`mb-16 section-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-[2px] bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">Our Approach</span>
          </div>
          <h2
            className="font-heading text-white font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {heading}
          </h2>
        </div>

        <div
          ref={stepsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A] section-reveal ${stepsVisible ? 'visible' : ''}`}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group bg-[#0D0D0D] hover:bg-[#111111] p-9 relative overflow-hidden transition-colors duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Oversized number background decoration */}
              <span
                className="absolute -right-4 -bottom-6 font-heading font-bold text-[#C9A84C] leading-none pointer-events-none select-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                style={{ fontSize: '10rem' }}
              >
                {step.number}
              </span>

              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Step number badge */}
              <div className="inline-flex items-center justify-center border border-[#C9A84C]/30 bg-[#C9A84C]/8 w-12 h-12 mb-7">
                <span className="font-heading text-[#C9A84C] font-bold text-lg">{step.number}</span>
              </div>

              <h3 className="font-heading text-white font-bold text-xl mb-4 group-hover:text-[#C9A84C] transition-colors leading-tight">
                {step.title}
              </h3>
              <div className="w-8 h-[2px] bg-[#C9A84C]/30 mb-4 group-hover:bg-[#C9A84C]/60 transition-colors" />
              <p className="text-white/45 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
