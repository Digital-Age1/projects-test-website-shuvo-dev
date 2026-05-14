import { Link } from 'react-router-dom';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import ServiceDetails from './components/ServiceDetails';
import ServicesFAQ from './components/ServicesFAQ';
import ServicesIncludes from './components/ServicesIncludes';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Lawn Care & Landscaping Services | Trimming Edge Western Massachusetts',
    description: 'Full-service lawn care and landscaping in Westfield, Huntington, Russell & Montgomery MA. Lawn mowing, landscape design, tree care, mulching, seasonal cleanups & commercial services. Free estimates.',
    keywords: 'lawn care services Western MA, landscaping services Massachusetts, lawn mowing Westfield, tree trimming Huntington, mulching Russell MA, seasonal cleanup Montgomery MA',
    canonical: '/services',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/services`,
      url: `${SITE_URL}/services`,
      name: 'Lawn Care & Landscaping Services',
      description: 'Full-service lawn care and landscaping services across Western Massachusetts.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        ],
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <ServicesHero />

        {/* Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
                Why Choose Our Lawn Care Services?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine professional-grade equipment with personal attention to deliver results that consistently earn 5-star reviews across Western Massachusetts.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'ri-calendar-check-line',
                  title: 'Consistent Scheduling',
                  desc: 'We show up on the day we promise — every time. No ghosting, no rescheduling without notice.',
                },
                {
                  icon: 'ri-tools-line',
                  title: 'Professional Equipment',
                  desc: 'Commercial-grade mowers, trimmers, and blowers for clean, efficient results on every property.',
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'Licensed & Insured',
                  desc: 'Full Massachusetts licensing and insurance coverage for your peace of mind on every visit.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-2xl text-primary-600`}></i>
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid />
        <ServiceDetails />
        <ServicesIncludes />
        <ServicesFAQ />

        {/* Trust Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <i className="ri-star-fill text-2xl text-primary-600"></i>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-900">5.0 · All Google Reviews</span>
                  <p className="text-sm text-gray-600">Every review is 5 stars. That is not luck — it is consistency.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+14135519653"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call (413) 551-9653
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}