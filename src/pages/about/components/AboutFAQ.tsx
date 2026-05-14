const faqs = [
  {
    q: 'How long has Trimming Edge been in business?',
    a: 'We have been serving the Western Massachusetts community for several years, building a loyal customer base and a perfect 5.0 Google rating with all five-star reviews. Our reputation is built entirely on word-of-mouth from happy neighbors.',
  },
  {
    q: 'What makes Trimming Edge different from other lawn care companies?',
    a: 'We are locally owned and operated — not a franchise. When you hire us, you work directly with David and Amanda, not a call center. We show up on time, communicate proactively, and treat your property like it\'s our own. That personal accountability is what has earned us a perfect 5-star rating.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes! We provide completely free, no-obligation estimates for all lawn care and landscaping services. Call (413) 551-9653 or fill out our online form and we will get back to you promptly.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Absolutely. Trimming Edge is fully licensed, bonded, and insured in Massachusetts to protect both our team and your property.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We proudly serve Westfield, Huntington, Russell, Montgomery, Agawam, and Southwick in Western Massachusetts.',
  },
];

export default function AboutFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about working with Trimming Edge.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                  <i className="ri-add-line text-gray-400 group-open:ri-subtract-line group-open:text-primary-600 transition-colors"></i>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}