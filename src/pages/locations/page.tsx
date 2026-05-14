import { useEffect } from 'react';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import LocationsHero from './components/LocationsHero';
import LocationsCities from './components/LocationsCities';
import LocationsMap from './components/LocationsMap';
import LocationsFAQ from './components/LocationsFAQ';
import { Link } from 'react-router-dom';
import LocationsServices from './components/LocationsServices';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

function CoverageStatsBar() {
  const stats = [
    { icon: 'ri-map-pin-line', value: '6', label: 'Towns Served' },
    { icon: 'ri-feedback-line', value: '5.0', label: 'Star Rating' },
    { icon: 'ri-star-fill', value: '5.0', label: 'Google Rating' },
    { icon: 'ri-calendar-line', value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="bg-primary-600 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-2">
              <i className={`${s.icon} text-2xl text-white/70 mb-1`}></i>
              <div className="text-xl font-display font-bold text-white">{s.value}</div>
              <div className="text-xs text-primary-100 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-5 shadow-sm">
              <i className="ri-map-2-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Coverage Overview</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Professional Lawn Care Across Western Massachusetts
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trimming Edge is a locally owned, family-operated lawn care company based in Montgomery, MA. We provide full-service lawn maintenance, landscaping, and seasonal cleanup throughout Hampden County — serving Westfield, Huntington, Russell, Montgomery, Agawam, and Southwick with the same reliable, 5-star quality on every visit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { city: 'Westfield', state: 'MA', icon: 'ri-building-2-line' },
              { city: 'Huntington', state: 'MA', icon: 'ri-landscape-line' },
              { city: 'Russell', state: 'MA', icon: 'ri-home-heart-line' },
              { city: 'Montgomery', state: 'MA (Home Base)', icon: 'ri-map-pin-2-line' },
              { city: 'Agawam', state: 'MA', icon: 'ri-building-line' },
              { city: 'Southwick', state: 'MA', icon: 'ri-tree-line' },
            ].map((c) => (
              <div key={c.city} className="bg-white rounded-2xl p-4 border border-gray-100 text-center">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-xl mx-auto mb-2">
                  <i className={`${c.icon} text-lg text-primary-600`}></i>
                </div>
                <div className="font-bold text-sm text-gray-900">{c.city}</div>
                <div className="text-xs text-gray-500">{c.state}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NearMeSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=bird%20eye%20view%20of%20a%20quiet%20residential%20neighborhood%20with%20green%20lawns%20and%20trees%2C%20New%20England%20town%2C%20summer%2C%20aerial%20perspective%2C%20blue%20sky%2C%20Massachusetts&width=1920&height=700&seq=te319_10&orientation=landscape"
          alt="Western Massachusetts service area aerial view"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-primary-900/80"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-search-eye-line text-white"></i>
              <span className="text-sm font-semibold text-white">Near Me Searches</span>
            </div>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Looking for "Lawn Care Near Me" in Western MA?
            </h2>
            <p className="text-lg text-primary-100 mb-4 leading-relaxed">
              If you're searching for reliable lawn care near you in Westfield, Huntington, Russell, Montgomery, Agawam, or Southwick, MA — you found us. Trimming Edge is your local, trusted lawn care company right in the neighborhood.
            </p>
            <p className="text-lg text-primary-100 leading-relaxed">
              We're a locally operated business with a perfect 5.0 Google rating. Call or text us to confirm we service your exact location and get a free estimate today.
            </p>
            <a
              href="tel:+14135519653"
              className="inline-flex items-center mt-6 px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              (413) 551-9653
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'ri-map-pin-line', label: 'Serving 6+ Communities', sub: 'Westfield · Huntington · Russell · Montgomery · Agawam · Southwick' },
              { icon: 'ri-star-fill', label: '5.0 Google Rating', sub: 'All Five-Star Reviews' },
              { icon: 'ri-heart-line', label: 'Locally Owned Business', sub: 'Family &amp; Proud' },
              { icon: 'ri-shield-check-line', label: 'Licensed & Insured', sub: 'Full Coverage MA' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20">
                <i className={`${item.icon} text-3xl text-white mb-2 block`}></i>
                <span className="text-sm font-bold text-white block">{item.label}</span>
                <span className="text-xs text-primary-200 mt-1 block" dangerouslySetInnerHTML={{ __html: item.sub }}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationsCTA() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          {[1,2,3,4,5].map((s) => <i key={s} className="ri-star-fill text-accent-400 text-xl"></i>)}
        </div>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
          Your Neighborhood Lawn Care Experts
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Proudly serving Westfield, Huntington, Russell, Montgomery, Agawam &amp; Southwick, MA with 5-star lawn care and landscaping.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+14135519653"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Call (413) 551-9653
          </a>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function LocationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'Service Areas | Lawn Care Near Me Westfield Huntington Russell Montgomery MA',
    description: 'Trimming Edge serves Westfield, Huntington, Russell, Montgomery, Agawam & Southwick MA. Professional lawn care and landscaping near you in Western Massachusetts.',
    keywords: 'lawn care near me Western MA, landscaping Westfield MA, lawn service Huntington MA, lawn care Russell MA, Montgomery MA landscaping',
    canonical: '/locations',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/locations`,
      url: `${SITE_URL}/locations`,
      name: 'Trimming Edge Service Areas — Western Massachusetts',
      description: 'Professional lawn care and landscaping serving Westfield, Huntington, Russell, Montgomery, Agawam & Southwick MA.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
        ],
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <LocationsHero />
        <CoverageStatsBar />
        <ServiceAreaIntro />
        <LocationsCities />
        <LocationsServices />
        <NearMeSection />
        <LocationsMap />
        <LocationsFAQ />
        <LocationsCTA />
      </main>
      <PageFooter />
    </div>
  );
}