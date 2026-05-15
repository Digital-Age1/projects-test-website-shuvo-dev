import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const benefits = [
  'Weekly or bi-weekly scheduled service',
  'Edging along driveways, sidewalks & beds',
  'Trimming around fences, trees & structures',
  'Cleanup and blowing of all clippings',
  'Height adjustment by season & grass type',
  'Commercial-grade zero-turn equipment',
  'Consistent crew — same team every visit',
  'No contracts required',
];

const faqs = [
  {
    q: 'How often should I have my lawn mowed?',
    a: 'During peak growing season (spring and early summer), weekly mowing keeps your lawn at its healthiest. In slower growth periods, bi-weekly service is usually sufficient. We tailor the schedule to your lawn\'s specific needs.',
  },
  {
    q: 'Do you mow in the rain?',
    a: 'We avoid mowing wet grass as it can damage turf and leave clumps. If weather forces a reschedule, we\'ll notify you promptly and get you back on track as soon as conditions allow.',
  },
  {
    q: 'What cutting height do you use?',
    a: 'We adjust cutting height based on grass type, season, and current conditions. Proper height promotes healthy root growth and reduces stress — we never scalp your lawn.',
  },
  {
    q: 'Do I need to be home during service?',
    a: 'No — most of our customers aren\'t home during service. Just make sure gates are unlocked and pets are secured. We\'ll take care of everything and leave your property looking great.',
  },
];

export default function LawnMowingPage() {
  useSEO({
    title: 'Lawn Mowing & Maintenance | Trimming Edge Western Massachusetts',
    description: 'Professional lawn mowing and maintenance for residential and commercial properties in Westfield, Huntington, Russell & Montgomery MA. Weekly or bi-weekly service. Free estimates.',
    keywords: 'lawn mowing Westfield MA, lawn maintenance Huntington MA, residential lawn mowing Western Massachusetts, commercial lawn mowing Russell MA',
    canonical: '/services/lawn-mowing',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/lawn-mowing`,
      name: 'Lawn Mowing & Maintenance',
      description: 'Professional lawn mowing and maintenance for residential and commercial properties in Western Massachusetts.',
      provider: { '@type': 'LocalBusiness', name: 'Trimming Edge', telephone: '+14135519653', url: `${SITE_URL}/` },
      areaServed: [
        { '@type': 'City', name: 'Westfield', addressRegion: 'MA' },
        { '@type': 'City', name: 'Huntington', addressRegion: 'MA' },
        { '@type': 'City', name: 'Russell', addressRegion: 'MA' },
        { '@type': 'City', name: 'Montgomery', addressRegion: 'MA' },
      ],
      offers: { '@type': 'Offer', description: 'Free estimate for lawn mowing service', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD' } },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden bg-gray-900">
        <img
          src="/uploads/hero-lawn-mowing.jpg"
          alt="Lawn Mowing & Maintenance"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]"></div>
        <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className="ri-plant-line text-white"></i>
            <span className="text-sm font-semibold text-white">Lawn Care Services</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Lawn Mowing &amp; Maintenance
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Professional, reliable lawn mowing for residential and commercial properties across Western Massachusetts.
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
            <span className="text-gray-900 font-medium">Lawn Mowing &amp; Maintenance</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Consistent, Professional Lawn Care You Can Count On
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular lawn mowing is the foundation of a beautiful property. Our professional crew arrives on a consistent schedule — weekly or bi-weekly — with commercial-grade equipment that delivers clean, precise cuts every time. We mow, edge, trim around obstacles, and blow off all clippings so your property looks immaculate when we leave.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We adjust our cutting height based on grass type and season to promote healthy growth, reduce stress, and prevent disease. Whether you have a small residential yard in Montgomery or a large commercial property in Westfield, our team has the equipment and expertise to handle it efficiently.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <i className="ri-checkbox-circle-fill text-primary-600 mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+14135519653"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
                <i className="ri-phone-line mr-2"></i>
                Call for a Free Quote
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96">
              <img
                src="/uploads/detail-lawn-mowing.jpg"
                alt="Perfect lawn stripes after professional mowing"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-phone-line', title: 'Request a Quote', desc: 'Call or fill out our form. We respond quickly and schedule a free property visit.' },
              { icon: 'ri-calendar-check-line', title: 'Set Your Schedule', desc: 'Choose weekly or bi-weekly service. We lock in your preferred day and stick to it.' },
              { icon: 'ri-scissors-cut-line', title: 'Sit Back & Enjoy', desc: 'Our crew arrives, mows, edges, trims, and cleans up — leaving your lawn looking perfect.' },
            ].map((step, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-4">
                  <i className={`${step.icon} text-3xl text-primary-600`}></i>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready for a Perfectly Mowed Lawn?</h2>
          <p className="text-white/80 text-lg mb-8">Serving Huntington, Westfield, Russell, Montgomery &amp; surrounding areas.</p>
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
