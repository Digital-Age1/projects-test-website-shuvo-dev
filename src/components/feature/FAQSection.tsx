import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading?: string;
  faqs: FAQItem[];
}

export default function FAQSection({
  heading = 'Frequently Asked Questions',
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#0D0D0D] py-28 px-6 lg:px-16 border-t border-[#1A1A1A]" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

          {/* Left sticky header */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-[4px] uppercase">FAQs</span>
            </div>
            <h2
              className="font-heading text-white font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              {heading}
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-8">
              Voice &amp; AI search optimized answers to the most common questions about JNB Protection Group.
            </p>
            <div className="border-l-[3px] border-[#C9A84C]/30 pl-5">
              <p className="text-white/35 text-sm leading-relaxed italic">
                &ldquo;The best security is prevention — not confrontation. We prepare so you never have to react.&rdquo;
              </p>
              <p className="text-[#C9A84C] text-sm mt-3 font-medium">— John Beegle, Founder</p>
            </div>
          </div>

          {/* Right accordion */}
          <div
            ref={ref}
            className={`lg:col-span-2 space-y-2 section-reveal ${visible ? 'visible' : ''}`}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border transition-all duration-300 ${isOpen ? 'border-[#C9A84C]/30 bg-[#111111]' : 'border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#2A2A2A]'}`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className={`font-heading font-semibold text-lg leading-tight pr-4 ${isOpen ? 'text-[#C9A84C]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 flex items-center justify-center shrink-0 border transition-all duration-200 ${isOpen ? 'border-[#C9A84C] bg-[#C9A84C]' : 'border-[#2A2A2A]'}`}>
                      <i className={`text-sm transition-transform duration-200 ${isOpen ? 'ri-subtract-line text-black' : 'ri-add-line text-white/50'}`} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-7 pb-6">
                      <div className="w-8 h-[2px] bg-[#C9A84C]/40 mb-4" />
                      <p className="text-white/52 text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
