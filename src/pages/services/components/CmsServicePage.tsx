import { Link } from 'react-router-dom';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import servicePages from '@/content/servicePages.json';

type ServicePage = (typeof servicePages.pages)[number];

const iconClass: Record<string, string> = {
  building: 'ri-building-2-line',
  calendar: 'ri-calendar-check-line',
  community: 'ri-community-line',
  discuss: 'ri-discuss-line',
  draft: 'ri-draft-line',
  drop: 'ri-drop-line',
  eye: 'ri-eye-line',
  homeOffice: 'ri-home-office-line',
  phone: 'ri-phone-line',
  plant: 'ri-plant-line',
  scissors: 'ri-scissors-cut-line',
  shield: 'ri-shield-line',
  star: 'ri-star-line',
  store: 'ri-store-2-line',
  temperature: 'ri-temp-cold-line',
  tree: 'ri-tree-line',
  wind: 'ri-windy-line',
};

const heroIconClass: Record<string, string> = {
  'commercial-landscaping': 'ri-building-line',
  'landscape-design': 'ri-seedling-line',
  'lawn-mowing': 'ri-plant-line',
  'mulching-bed-maintenance': 'ri-contrast-drop-line',
  'seasonal-cleanups': 'ri-recycle-line',
  'tree-shrub-care': 'ri-leaf-line',
};

const reversedOverview = new Set(['tree-shrub-care', 'commercial-landscaping']);

function getService(slug: string): ServicePage {
  const service = servicePages.pages.find((page) => page.slug === slug);
  if (!service) {
    throw new Error(`Missing service page content for slug: ${slug}`);
  }
  return service;
}

function cardGridClass(count: number) {
  if (count === 4) return 'grid md:grid-cols-2 lg:grid-cols-4 gap-6';
  return 'grid md:grid-cols-3 gap-8';
}

function iconBoxClass(service: ServicePage) {
  const sizeClass = service.processSteps.length === 4 ? 'w-14 h-14' : 'w-16 h-16';
  const alignClass = service.processSteps.length === 3 && service.slug !== 'tree-shrub-care' ? 'mx-auto ' : '';
  return `${sizeClass} flex items-center justify-center bg-primary-100 rounded-2xl ${alignClass}mb-4`;
}

export default function CmsServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  const isSeasonal = service.slug === 'seasonal-cleanups';
  const isReversed = reversedOverview.has(service.slug);

  useSEO({
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.seoKeywords,
    canonical: `/services/${service.slug}`,
    ogImage: `${SITE_URL}${service.ogImage}`,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/${service.slug}`,
      name: service.title,
      description: service.seoDescription,
      provider: { '@type': 'LocalBusiness', name: 'Trimming Edge', telephone: '+14135519653', url: `${SITE_URL}/` },
      areaServed: [
        { '@type': 'City', name: 'Westfield', addressRegion: 'MA' },
        { '@type': 'City', name: 'Huntington', addressRegion: 'MA' },
        { '@type': 'City', name: 'Russell', addressRegion: 'MA' },
        { '@type': 'City', name: 'Montgomery', addressRegion: 'MA' },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden bg-gray-900">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]"></div>
        <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className={`${heroIconClass[service.slug] || 'ri-leaf-line'} text-white`}></i>
            <span className="text-sm font-semibold text-white">{service.eyebrow}</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            {service.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            {service.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={service.heroPrimaryHref}
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
              {service.heroPrimaryLabel}
            </a>
            <a href={service.heroSecondaryHref}
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              {service.heroSecondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/services" className="hover:text-primary-600 transition-colors">Services</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {isSeasonal ? (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                {service.overviewTitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {service.overviewText[0]}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              {service.includes.map((item, index) => (
                <div key={item.title} className="rounded-2xl overflow-hidden border border-gray-200">
                  <div className="relative h-56 w-full">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 ${index === 0 ? 'bg-green-500' : 'bg-amber-500'} text-white text-sm font-semibold rounded-full`}>{item.badge}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.items.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-2">
                          <i className={`ri-checkbox-circle-fill ${index === 0 ? 'text-green-500' : 'text-amber-500'}`}></i>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={isReversed ? 'lg:order-2' : ''}>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  {service.overviewTitle}
                </h2>
                {service.overviewText.map((paragraph, index) => (
                  <p key={paragraph} className={`text-gray-600 leading-relaxed ${index === service.overviewText.length - 1 ? 'mb-8' : 'mb-4'}`}>
                    {paragraph}
                  </p>
                ))}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-2">
                      <i className="ri-checkbox-circle-fill text-primary-600 mt-0.5 flex-shrink-0"></i>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.overviewCtaHref}
                  className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
                  <i className="ri-phone-line mr-2"></i>
                  {service.overviewCtaLabel}
                </a>
              </div>
              <div className={`relative rounded-2xl overflow-hidden h-96 ${isReversed ? 'lg:order-1' : ''}`}>
                <img
                  src={service.detailImage}
                  alt={service.detailImageAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {service.processSteps.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-12">{service.processTitle}</h2>
            <div className={cardGridClass(service.processSteps.length)}>
              {service.processSteps.map((step) => (
                <div key={step.title} className={`${service.processSteps.length === 3 && service.slug !== 'tree-shrub-care' ? 'text-center ' : ''}bg-white rounded-2xl ${service.processSteps.length === 4 ? 'p-6' : 'p-8'} border border-gray-100`}>
                  <div className={iconBoxClass(service)}>
                    <i className={`${iconClass[step.iconKey] || 'ri-leaf-line'} ${service.processSteps.length === 4 ? 'text-2xl' : 'text-3xl'} text-primary-600`}></i>
                  </div>
                  <h3 className={`font-display font-bold ${service.processSteps.length === 4 ? 'text-base' : 'text-lg'} text-gray-900 mb-2`}>{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-16 ${isSeasonal ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-10">{service.faqTitle}</h2>
          <div className="space-y-4">
            {service.faq.map((faq) => (
              <details key={faq.question} className={`group border border-gray-200 rounded-xl overflow-hidden ${isSeasonal ? 'bg-white' : ''}`}>
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

      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">{service.ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-8">{service.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={service.ctaPrimaryHref}
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              {service.ctaPrimaryLabel}
            </a>
            <a href={service.ctaSecondaryHref}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
              {service.ctaSecondaryLabel}
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
