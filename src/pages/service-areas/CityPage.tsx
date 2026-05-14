import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import CityHero from './components/CityHero';
import CityAbout from './components/CityAbout';
import CityServiceGrid from './components/CityServiceGrid';
import { cities } from '@/mocks/serviceAreas';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug]);

  const city = cities.find((c) => c.slug === citySlug);

  useSEO({
    title: city
      ? `Lawn Care & Landscaping ${city.name} MA | Trimming Edge`
      : 'Lawn Care & Landscaping | Trimming Edge Western Massachusetts',
    description: city
      ? `Professional lawn care and landscaping services in ${city.name}, MA. Mowing, trimming, mulching, seasonal cleanups & more. Call Trimming Edge at (413) 551-9653 for a free estimate.`
      : 'Professional lawn care and landscaping in Western Massachusetts.',
    keywords: city
      ? `lawn care ${city.name} MA, landscaping ${city.name} Massachusetts, lawn mowing ${city.name}, ${city.name} lawn service`
      : 'lawn care Western Massachusetts',
    canonical: city ? `/service-areas/${city.slug}` : '/service-areas',
    schemaJson: city
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${SITE_URL}/service-areas/${city.slug}`,
          url: `${SITE_URL}/service-areas/${city.slug}`,
          name: `Lawn Care & Landscaping in ${city.name}, MA`,
          description: `Professional lawn care and landscaping services in ${city.name}, MA by Trimming Edge.`,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
              { '@type': 'ListItem', position: 3, name: `${city.name}, MA`, item: `${SITE_URL}/service-areas/${city.slug}` },
            ],
          },
        }
      : undefined,
  });

  if (!city) {
    return (
      <div className="min-h-screen bg-white">
        <PageHeader />
        <div className="flex flex-col items-center justify-center py-40 text-center px-4">
          <i className="ri-map-pin-line text-6xl text-gray-300 mb-4"></i>
          <h1 className="font-display font-bold text-3xl text-gray-900 mb-2">City Not Found</h1>
          <p className="text-gray-500 mb-6">We couldn&apos;t find that service area. Check out all our locations below.</p>
          <Link to="/service-areas" className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
            View All Service Areas
          </Link>
        </div>
        <PageFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <CityHero cityName={city.name} state={city.state} />
        <CityAbout
          cityName={city.name}
          state={city.state}
          description={city.description}
          highlights={city.highlights}
        />
        <CityServiceGrid citySlug={city.slug} cityName={city.name} state={city.state} />

        {/* CTA */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready for a Greener {city.name}?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Call or text us today for a free estimate. Same-week scheduling available.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+14135519653"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                (413) 551-9653
              </a>
              <Link
                to="/service-areas"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white text-lg font-bold rounded-lg hover:bg-primary-800 transition-colors whitespace-nowrap"
              >
                All Service Areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
