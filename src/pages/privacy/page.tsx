import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import legalContent from '../../content/legal.json';

export default function PrivacyPolicyPage() {
  const privacy = legalContent.privacy;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: `${privacy.heroTitle} | Trimming Edge Lawn Care`,
    description: privacy.heroSubtitle,
    keywords: 'privacy policy, Trimming Edge, data protection, lawn care privacy',
    canonical: '/privacy-policy',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/privacy-policy`,
      url: `${SITE_URL}/privacy-policy`,
      name: privacy.heroTitle,
      description: privacy.heroSubtitle,
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <div className="bg-primary-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {privacy.heroTitle}
            </h1>
            <p className="text-gray-600">
              {privacy.heroSubtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
            <div className="space-y-4 text-base leading-relaxed">
              {privacy.sections.map((section, index) => (
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
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {privacy.lastUpdated}. For questions about this privacy policy, contact us at{' '}
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
      </main>
      <PageFooter />
    </div>
  );
}
