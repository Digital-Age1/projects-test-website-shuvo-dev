import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const springBenefits = [
  'Leaf and debris removal',
  'Bed cleanup and edging',
  'Lawn dethatching',
  'First mow of the season',
  'Mulch refresh and top-up',
  'Pruning winter-damaged plants',
];

const fallBenefits = [
  'Complete leaf removal',
  'Gutter clearing (add-on)',
  'Bed cutback and cleanup',
  'Final mow and edging',
  'Lawn aeration available',
  'Property winterization prep',
];

const faqs = [
  {
    q: 'What does a spring cleanup include?',
    a: 'Our spring cleanup covers leaf and debris removal, bed cleanup and edging, pruning of winter-damaged plants, first mow of the season, and mulch refresh. We get your property looking great for the growing season.',
  },
  {
    q: 'What does a fall cleanup include?',
    a: 'Fall cleanup includes complete leaf removal, bed cutback, final mow and edging, and general property cleanup to prepare for winter. We can also add gutter clearing as an optional service.',
  },
  {
    q: 'When should I schedule my spring cleanup?',
    a: 'We recommend scheduling spring cleanup in late March through April, once the ground has thawed and before heavy growth begins. Booking early ensures you get your preferred date — our schedule fills up fast in spring.',
  },
  {
    q: 'Do you haul away the debris?',
    a: 'Yes — all leaves, clippings, and debris are removed from your property as part of the cleanup service. We leave your yard completely clean.',
  },
];

export default function SeasonalCleanupsPage() {
  useSEO({
    title: 'Seasonal Cleanups | Spring & Fall Yard Cleanup Western Massachusetts',
    description: 'Professional spring and fall seasonal cleanups in Westfield, Huntington, Russell & Montgomery MA. Leaf removal, bed cleanup, lawn prep & winterization. Book early — spots fill fast.',
    keywords: 'spring cleanup Westfield MA, fall cleanup Huntington MA, seasonal yard cleanup Western Massachusetts, leaf removal Russell MA',
    canonical: '/services/seasonal-cleanups',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/seasonal-cleanups`,
      name: 'Seasonal Cleanups',
      description: 'Professional spring and fall seasonal cleanups in Western Massachusetts.',
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

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden bg-gray-900">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20seasonal%20yard%20cleanup%20service%20with%20crew%20raking%20and%20removing%20large%20piles%20of%20autumn%20leaves%20from%20a%20beautiful%20residential%20property%2C%20colorful%20fall%20foliage%20trees%20in%20background%2C%20New%20England%20autumn%20scene%2C%20orange%20and%20red%20leaves%2C%20clean%20tidy%20yard%20emerging%20from%20cleanup%2C%20bright%20fall%20daylight&width=1400&height=600&seq=seasonal_hero02&orientation=landscape"
          alt="Seasonal Cleanups"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]"></div>
        <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className="ri-recycle-line text-white"></i>
            <span className="text-sm font-semibold text-white">Seasonal Services</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Seasonal Cleanups
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Spring and fall property cleanups that get your yard ready for every season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact-us"
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
              Get a Free Estimate
            </a>
            <a href="tel:+14135519653"
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              (413) 551-9653
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link to="/services" className="hover:text-primary-600 transition-colors">Services</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900 font-medium">Seasonal Cleanups</span>
          </nav>
        </div>
      </div>

      {/* Spring & Fall Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Spring &amp; Fall Cleanup Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive seasonal cleanups twice a year to keep your property looking its best through every season.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Spring */}
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <div className="relative h-56 w-full">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20spring%20yard%20cleanup%20result%20with%20fresh%20green%20lawn%20emerging%2C%20cleared%20garden%20beds%20with%20fresh%20dark%20mulch%2C%20blooming%20spring%20flowers%2C%20clean%20property%20after%20professional%20spring%20cleanup%20service%2C%20New%20England%20residential%20yard%2C%20bright%20spring%20morning%20light&width=700&height=400&seq=spring_cleanup02&orientation=landscape"
                  alt="Spring cleanup"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">Spring Cleanup</div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Spring Property Refresh</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Start the growing season right. We clear winter debris, prep your beds, and get your lawn ready for a healthy, beautiful summer.</p>
                <ul className="space-y-2">
                  {springBenefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <i className="ri-checkbox-circle-fill text-green-500"></i>
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Fall */}
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <div className="relative h-56 w-full">
                <img
                  src="https://readdy.ai/api/search-image?query=pristine%20yard%20after%20professional%20fall%20cleanup%20service%2C%20all%20leaves%20removed%2C%20clean%20lawn%20visible%2C%20well%20maintained%20property%2C%20autumn%20season%20New%20England%2C%20orange%20and%20gold%20trees%20in%20background%2C%20tidy%20residential%20yard%20ready%20for%20winter%2C%20bright%20fall%20afternoon&width=700&height=400&seq=fall_cleanup02&orientation=landscape"
                  alt="Fall cleanup"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-sm font-semibold rounded-full">Fall Cleanup</div>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Fall Winterization Cleanup</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Prepare your property for winter with a thorough fall cleanup. We remove all leaves, cut back beds, and leave your yard clean and ready.</p>
                <ul className="space-y-2">
                  {fallBenefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <i className="ri-checkbox-circle-fill text-amber-500"></i>
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <i className="ri-add-line text-xl text-primary-600 group-open:hidden flex-shrink-0 ml-4"></i>
                  <i className="ri-subtract-line text-xl text-primary-600 hidden group-open:block flex-shrink-0 ml-4"></i>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Book Your Seasonal Cleanup Today</h2>
          <p className="text-white/80 text-lg mb-8">Spots fill up fast — especially in spring. Reserve your date early.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us"
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Request Free Estimate
            </a>
            <a href="tel:+14135519653"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
              (413) 551-9653
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
