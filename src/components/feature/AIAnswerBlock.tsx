import { useInView } from '../../hooks/useInView';

interface AIAnswerBlockProps {
  question: string;
  answer: string;
  label?: string;
  bullets?: string[];
}

export default function AIAnswerBlock({
  question,
  answer,
  label = 'About JNB Protection Group',
  bullets,
}: AIAnswerBlockProps) {
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#080808] py-28 px-6 lg:px-16 border-t border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center section-reveal ${visible ? 'visible' : ''}`}
        >
          {/* Left: Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">{label}</span>
            </div>

            <h2
              className="font-heading text-white font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              {question}
            </h2>

            <div className="w-12 h-[2px] bg-[#C9A84C]/40 mb-7" />

            <p className="text-white/58 text-base leading-relaxed mb-8">{answer}</p>

            {bullets && bullets.length > 0 && (
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/55 text-sm">
                    <i className="ri-arrow-right-s-line text-[#C9A84C] text-base mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right: Info card */}
          <div className="lg:col-span-2">
            <div className="border border-[#1E1E1E] bg-[#0D0D0D] p-8">
              <p className="text-[#C9A84C] text-xs font-medium tracking-[3px] uppercase mb-6">Company Facts</p>
              <div className="space-y-5">
                {[
                  { icon: 'ri-map-pin-line', label: 'Headquarters', value: 'League City, TX 77573' },
                  { icon: 'ri-phone-line', label: 'Direct Line', value: '713.906.8273' },
                  { icon: 'ri-mail-line', label: 'Email', value: 'jbeegle@jnbprotectiongroup.com' },
                  { icon: 'ri-government-line', label: 'TX State License', value: 'C12684701' },
                  { icon: 'ri-global-line', label: 'Operations', value: 'US + 100+ Countries' },
                  { icon: 'ri-time-line', label: 'Availability', value: '24 / 7 / 365' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <i className={`${item.icon} text-[#C9A84C] text-base`} />
                    </div>
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white text-sm font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
