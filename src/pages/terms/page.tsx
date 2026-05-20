import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import legalContent from '../../content/legal.json';

export default function TermsPage() {
  const terms = legalContent.terms;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: `${terms.heroTitle} | Trimming Edge Lawn Care`,
    description: terms.heroSubtitle,
    keywords: 'terms of service, Trimming Edge, lawn care terms, service agreement Western MA, landscaping contract Massachusetts',
    canonical: '/terms-and-conditions',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/terms-and-conditions`,
      url: `${SITE_URL}/terms-and-conditions`,
      name: terms.heroTitle,
      description: terms.heroSubtitle,
    },
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {terms.heroTitle}
          </h1>
          <p className="text-gray-600">
            {terms.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
          <section>
            <div className="space-y-4 text-base leading-relaxed">
              {terms.sections.map((section, index) => (
                <section key={section.title}>
                  {index === 0 ? (
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  ) : (
                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">{section.title}</h3>
                  )}
                  <div
                    className="[&_a]:text-primary-600 [&_a]:hover:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </section>
              ))}
            </div>
          </section>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-600">
              For our full <Link to="/privacy-policy" className="text-primary-600 font-semibold hover:underline">Privacy Policy</Link>, including details on data collection, cookies, embedded content, and your rights, please visit our dedicated privacy page.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: {terms.lastUpdated}. For questions about these terms, contact us at{' '}
            <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a>.
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
