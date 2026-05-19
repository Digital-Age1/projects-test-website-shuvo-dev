import { useState } from 'react';
import blogContent from '@/content/blog/posts.json';
import blogPage from '@/content/blog/blog.json';

export default function BlogFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const page = (blogPage || (blogContent && blogContent.page) || {}) as any;
  const faqs = page.faq || [];
  const title = page.faqTitle || 'Frequently Asked Questions';
  const subtitle = page.faqSubtitle || "Feel free to reach out to us if you don't see the answer you need.";

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-500 text-sm">
            {subtitle}
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq: any, idx: number) => (
            <div
              key={faq.id ?? idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === (faq.id ?? idx) ? null : (faq.id ?? idx))}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-200 ${openId === (faq.id ?? idx) ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              {openId === (faq.id ?? idx) && (
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
