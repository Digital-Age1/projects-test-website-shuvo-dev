import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Why is Trimming Edge so popular?',
    answer: 'Trimming Edge is a locally operated landscaping company based in Montgomery, MA. Our customers love us because we treat every property as if it were our own — showing up on time, communicating clearly, and consistently delivering high-quality results. Our 5-star Google rating reflects the trust and satisfaction of our community.',
  },
  {
    id: 2,
    question: 'What services does Trimming Edge offer in Montgomery?',
    answer: 'We offer a full range of lawn and landscape services in Montgomery, MA and the surrounding areas including lawn mowing, landscape design and installation, tree and shrub care, seasonal cleanups, mulching and bed maintenance, and commercial landscaping. Contact us at (413) 551-9653 for a free estimate.',
  },
  {
    id: 3,
    question: 'How does seasonal clean-up work with Trimming Edge?',
    answer: 'Our seasonal cleanup services include spring and fall property cleanups. In the spring, we clear winter debris, prep garden beds, and get your property ready for the growing season. In the fall, we handle leaf removal, cut back perennials, clean up beds, and prepare your landscape for winter. We schedule visits at your convenience and leave your property looking immaculate.',
  },
  {
    id: 4,
    question: 'Are lawn mowing services customizable at Trimming Edge?',
    answer: 'Absolutely! We customize our lawn mowing schedules to match your lawn\'s specific needs and your preferences. We offer weekly, bi-weekly, or custom frequency mowing. Every mowing visit includes edging, string trimming, and blowing off hard surfaces — so your lawn always looks completely finished.',
  },
  {
    id: 5,
    question: 'Why choose Trimming Edge for commercial landscaping?',
    answer: 'Commercial properties require reliability, professionalism, and consistency — and that\'s exactly what Trimming Edge delivers. We work with property managers, business owners, and HOAs throughout Western Massachusetts, offering flexible scheduling, customized maintenance plans, and a dedicated crew that knows your property inside and out.',
  },
];

export default function BlogFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm">
            Feel free to reach out to us if you don&apos;t see the answer you need.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-200 ${openId === faq.id ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
