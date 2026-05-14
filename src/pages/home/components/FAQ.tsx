import { useState } from 'react';
import { faqItems } from '../../../mocks/services';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-question-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">FAQ</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our <strong>lawn care</strong> and <strong>landscaping services</strong>.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 pr-4">{item.question}</h4>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-primary-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+15555296227"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}