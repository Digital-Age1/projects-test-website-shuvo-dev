import { useState } from 'react';

const faqs = [
  {
    q: 'Do you offer lawn care services near me in Westfield, MA?',
    a: 'Yes! Westfield is one of our primary service areas. We provide weekly and bi-weekly lawn mowing, edging, trimming, mulching, seasonal cleanups, and more throughout Westfield, MA. Call (413) 551-9653 to schedule a free estimate.',
  },
  {
    q: 'Is Trimming Edge available in Huntington, MA?',
    a: 'Absolutely. We regularly service properties in Huntington, MA including residential lawns and larger rural lots. Our team is familiar with the area and provides reliable scheduled service throughout the season.',
  },
  {
    q: 'Do you serve Russell, MA for landscaping and lawn care?',
    a: 'Yes, Russell, MA is part of our regular service route. We offer full lawn care and landscaping services in Russell including mowing, shrub trimming, seasonal cleanup, and more.',
  },
  {
    q: 'Where is Trimming Edge located?',
    a: 'Trimming Edge is based in Montgomery, MA 01050 and serves the surrounding Western Massachusetts communities of Westfield, Huntington, and Russell.',
  },
  {
    q: 'How far do you travel for lawn care service?',
    a: 'We primarily focus on Westfield, Huntington, Russell, and Montgomery, MA. If you\'re outside these areas, give us a call at (413) 551-9653 and we\'ll let you know if we can accommodate your location.',
  },
  {
    q: 'Can I get same-week lawn care service in Western Massachusetts?',
    a: 'Availability depends on our current schedule. Call or text us at (413) 551-9653 and we\'ll do our best to fit you in quickly. We prioritize being responsive to our local community.',
  },
];

export default function LocationsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-question-answer-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Location FAQ</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Common Questions About Our Service Areas
          </h2>
          <p className="text-lg text-gray-600">
            Answers to the most common questions about where we provide lawn care and landscaping in Western MA.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                <i className={`${openIndex === i ? 'ri-subtract-line' : 'ri-add-line'} text-xl text-primary-600 flex-shrink-0`}></i>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
