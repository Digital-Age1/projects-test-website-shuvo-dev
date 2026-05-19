import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { landing, cities, services, serviceIcons } from './serviceAreaData';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const cityIcons: Record<string, string> = {
  'agawam-ma': 'ri-building-2-line',
  'huntington-ma': 'ri-landscape-line',
  'westfield-ma': 'ri-building-line',
  'russell-ma': 'ri-home-heart-line',
  'montgomery-ma': 'ri-map-pin-2-line',
  'southwick-ma': 'ri-tree-line',
};

export default function ServiceAreasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: landing.seoTitle,
    description: landing.seoDescription,
    keywords: landing.seoKeywords,
    canonical: '/service-areas',
    ogImage: `${SITE_URL}${landing.ogImage}`,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/service-areas`,
      url: `${SITE_URL}/service-areas`,
      name: 'Trimming Edge Service Areas',
      description: landing.seoDescription,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
        ],
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <img
              src={landing.heroImage}
              alt="Trimming Edge Service Areas - Western Massachusetts"
              className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-map-2-line text-white text-sm"></i>
              <span className="text-sm font-semibold text-white">{landing.heroEyebrow}</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              {landing.heroTitle}
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
              {landing.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-colors whitespace-nowrap border border-white/20"
                >
                  {city.name}, {city.state}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
                <i className="ri-map-pin-line text-primary-600"></i>
                <span className="text-sm font-semibold text-primary-600">{landing.introEyebrow}</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                {landing.introTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {landing.introText}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl border border-gray-200 group-hover:border-primary-300 group-hover:bg-primary-100 transition-all mb-4">
                    <i className={`${cityIcons[city.slug] || 'ri-map-pin-line'} text-2xl text-primary-600`}></i>
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-primary-700 transition-colors mb-1">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{city.state}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {city.description}
                  </p>
                  <div className="flex items-center text-primary-600 text-sm font-semibold">
                    <span>View {city.services.length} Services</span>
                    <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 border border-gray-100">
                <i className="ri-list-check-2 text-primary-600"></i>
                <span className="text-sm font-semibold text-primary-600">{landing.servicesEyebrow}</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                {landing.servicesTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {landing.servicesText}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <div key={service.slug} className="bg-white rounded-2xl p-5 border border-gray-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-xl flex-shrink-0">
                      <i className={`${serviceIcons[service.slug] || 'ri-leaf-line'} text-lg text-primary-600`}></i>
                    </div>
                    <h3 className="font-semibold text-gray-900">{service.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cities.slice(0, 4).map((city) => (
                      <Link
                        key={city.slug}
                        to={`/service-areas/${city.slug}/${service.slug}`}
                        className="text-xs px-3 py-1 bg-gray-50 hover:bg-primary-50 text-gray-600 hover:text-primary-700 rounded-full border border-gray-200 hover:border-primary-200 transition-all whitespace-nowrap cursor-pointer"
                      >
                        {city.name}
                      </Link>
                    ))}
                    {cities.length > 4 && (
                      <span className="text-xs px-3 py-1 bg-gray-50 text-gray-400 rounded-full border border-gray-200">
                        +{cities.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              {landing.ctaTitle}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {landing.ctaText}
            </p>
            <a
              href={landing.ctaPrimaryHref}
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              {landing.ctaPrimaryLabel}
            </a>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
