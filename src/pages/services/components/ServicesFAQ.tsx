import { useState } from 'react';

const faqs = [
  {
    q: 'How much does lawn care cost in Westfield, MA?',
    a: 'Pricing depends on your lawn size, services needed, and frequency. Most residential lawn mowing in Western Massachusetts starts around $40–$60 per visit. We offer free, no-obligation estimates — call (413) 551-9653 to get an exact quote for your property.',
  },
  {
    q: 'Do you offer lawn care services near me in Huntington, MA?',
    a: 'Yes! We proudly serve Huntington, Montgomery, Russell, and Westfield, MA. If you\'re located in the surrounding area, call us and we\'ll confirm service availability for your address.',
  },
  {
    q: 'How often should I get my lawn mowed?',
    a: 'During peak growing season (May through September), weekly mowing keeps your lawn looking its best. In spring and fall shoulder seasons, bi-weekly is often sufficient. We\'ll recommend a schedule that matches your lawn\'s growth rate.',
  },
  {
    q: 'What lawn care services do you offer?',
    a: 'We offer lawn mowing and maintenance, landscape design and installation, tree and shrub care, seasonal cleanups, mulching and bed maintenance, and commercial landscaping — all serving Western Massachusetts.',
  },
  {
    q: 'Are you licensed and insured in Massachusetts?',
    a: 'Absolutely. Trimming Edge is fully licensed, bonded, and insured in Massachusetts. Every crew member on your property is covered, giving you complete peace of mind.',
  },
  {
    q: 'Can you handle commercial lawn care properties?',
    a: 'Yes. We service commercial properties including office buildings, retail locations, HOAs, and multi-unit properties throughout Westfield and surrounding towns. We offer flexible scheduling to minimize business disruption.',
  },
  {
    q: 'How do I get a free lawn care estimate?',
    a: 'Getting a free estimate is easy. Call or text us at (413) 551-9653, or fill out our online form. We\'ll schedule a quick walkthrough of your property and provide a detailed, no-obligation quote.',
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-question-answer-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Common Questions About Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Answers to the questions Western MA homeowners ask most about lawn care and landscaping.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
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

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Still have questions? We're happy to help.</p>
          <a
            href="tel:+14135519653"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Call (413) 551-9653
          </a>
        </div>
      </div>
    </section>
  );
}
