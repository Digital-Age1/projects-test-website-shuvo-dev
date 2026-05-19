import about from '@/content/about.json';

export default function AboutFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
            {about.faqTitle}
          </h2>
          <p className="text-gray-600">
            {about.faqSubtitle}
          </p>
        </div>
        <div className="space-y-4">
          {about.faq.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 text-sm">{faq.question}</span>
                  <i className="ri-add-line text-gray-400 group-open:ri-subtract-line group-open:text-primary-600 transition-colors"></i>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
