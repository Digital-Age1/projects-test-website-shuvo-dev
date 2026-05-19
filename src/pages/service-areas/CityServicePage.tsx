import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { getCity, getCityService, getService, services, serviceIcons } from './serviceAreaData';

const benefitIcons: Record<string, string> = {
  star: 'ri-star-fill',
  heart: 'ri-heart-line',
  shield: 'ri-shield-check-line',
  time: 'ri-time-line',
};

export default function CityServicePage() {
  const { citySlug, serviceSlug } = useParams<{ citySlug: string; serviceSlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug, serviceSlug]);

  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  const content = getCityService(citySlug, serviceSlug);

  useSEO({
    title: content?.seoTitle ?? 'Lawn Care Services | Trimming Edge Western Massachusetts',
    description: content?.seoDescription ?? 'Professional lawn care and landscaping in Western Massachusetts.',
    keywords: city && service
      ? `${service.label.toLowerCase()} ${city.name} MA, ${service.label.toLowerCase()} ${city.name} Massachusetts, lawn care ${city.name} MA`
      : 'lawn care Western Massachusetts',
    canonical: city && service ? `/service-areas/${city.slug}/${service.slug}` : '/service-areas',
    ogImage: content ? `${SITE_URL}${content.ogImage}` : undefined,
    schemaJson: city && service
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${SITE_URL}/service-areas/${city.slug}/${service.slug}`,
          name: `${service.label} in ${city.name}, MA`,
          description: content?.seoDescription ?? `Professional ${service.label.toLowerCase()} services in ${city.name}, MA by Trimming Edge.`,
          provider: { '@type': 'LocalBusiness', name: 'Trimming Edge', telephone: '+14135519653', url: `${SITE_URL}/` },
          areaServed: { '@type': 'City', name: city.name, addressRegion: 'MA' },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
              { '@type': 'ListItem', position: 3, name: `${city.name}, MA`, item: `${SITE_URL}/service-areas/${city.slug}` },
              { '@type': 'ListItem', position: 4, name: service.label, item: `${SITE_URL}/service-areas/${city.slug}/${service.slug}` },
            ],
          },
        }
      : undefined,
  });

  if (!city || !service || !content) {
    return (
      <div className="min-h-screen bg-white">
        <PageHeader />
        <div className="flex flex-col items-center justify-center py-40 text-center px-4">
          <i className="ri-map-pin-line text-6xl text-gray-300 mb-4"></i>
          <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">Page Not Found</h1>
          <Link to="/service-areas" className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
            View All Service Areas
          </Link>
        </div>
        <PageFooter />
      </div>
    );
  }

  const icon = serviceIcons[service.slug] || 'ri-leaf-line';
  const otherServices = services.filter((s) => s.slug !== serviceSlug).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero Banner */}
        <section className="relative min-h-[480px] flex items-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <img
              src={content.heroImage}
              alt={`${service.label} in ${city.name}, ${city.state}`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 rounded-2xl mb-6 mx-auto">
              <i className={`${icon} text-3xl text-white`}></i>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
              {content.heroTitle}
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {content.heroSubtitle}
            </p>
            <a
              href={content.ctaPrimaryHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              {content.ctaPrimaryLabel}
            </a>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 flex-wrap gap-y-1">
              <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link to="/service-areas" className="hover:text-primary-600 transition-colors">Service Areas</Link>
              <i className="ri-arrow-right-s-line"></i>
              <Link to={`/service-areas/${city.slug}`} className="hover:text-primary-600 transition-colors">{city.name}, {city.state}</Link>
              <i className="ri-arrow-right-s-line"></i>
              <span className="text-gray-900 font-medium">{service.label}</span>
            </nav>
          </div>
        </div>

        {content.sections.map((section, index) => (
          <section key={section.title} className={`py-16 ${index === 1 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index !== 1 ? 'lg:order-2' : ''}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-72 object-cover object-top rounded-2xl"
                  />
                </div>
                <div className={index !== 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{section.body}</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Main Content Block */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-6">
                  {content.overviewTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">{content.overviewText}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={content.ctaPrimaryHref}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                  >
                    {content.ctaPrimaryLabel}
                  </a>
                  <a
                    href={content.ctaSecondaryHref}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors whitespace-nowrap"
                  >
                    {content.ctaSecondaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
                    {content.ctaSecondaryLabel}
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="font-display font-bold text-lg text-gray-900 mb-6">Why Choose Trimming Edge?</h3>
                <ul className="space-y-4">
                  {content.benefits.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-9 h-9 flex items-center justify-center bg-primary-50 rounded-lg flex-shrink-0">
                        <i className={`${benefitIcons[item.iconKey] || 'ri-star-line'} text-primary-600`}></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {content.includes.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-10">What's Included</h2>
              <div className="grid gap-3">
                {content.includes.map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <i className="ri-checkbox-circle-fill text-primary-600"></i>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {content.faq.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {content.faq.map((faq, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                      {faq.question}
                      <i className="ri-add-line text-xl text-primary-600 group-open:hidden flex-shrink-0 ml-4"></i>
                      <i className="ri-subtract-line text-xl text-primary-600 hidden group-open:block flex-shrink-0 ml-4"></i>
                    </summary>
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl mx-auto mb-4">
                  <i className="ri-time-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-3">Time of Operation</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-3">Office Phone</h3>
                <a href="tel:4135519653" className="text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors">
                  (413) 551-9653
                </a>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl mx-auto mb-4">
                  <i className="ri-calendar-check-line text-2xl text-primary-600"></i>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-3">Ready to Begin?</h3>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-5 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap text-sm"
                >
                  Request Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other services in this city */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">
              More Services in {city.name}, {city.state}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/service-areas/${city.slug}/${s.slug}`}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group cursor-pointer"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-white rounded-lg border border-gray-200 group-hover:border-primary-300 flex-shrink-0">
                    <i className={`${serviceIcons[s.slug] || 'ri-leaf-line'} text-primary-600`}></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700 transition-colors">{s.label}</span>
                  <i className="ri-arrow-right-s-line text-gray-400 group-hover:text-primary-600 ml-auto transition-colors"></i>
                </Link>
              ))}
            </div>
            <Link
              to={`/service-areas/${city.slug}`}
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View all services in {city.name}
              <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {content.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={content.ctaPrimaryHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {content.ctaPrimaryLabel}
              </a>
              <a
                href={content.ctaSecondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {content.ctaSecondaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
                {content.ctaSecondaryLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
