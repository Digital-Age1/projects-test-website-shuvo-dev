import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const benefits = [
  'Reliable scheduled maintenance',
  'Commercial-grade equipment',
  'Flexible scheduling options',
  'HOA and property management',
  'Office and retail properties',
  'Consistent crew every visit',
  'Fully licensed and insured',
  'Seasonal service packages',
];

const clientTypes = [
  { icon: 'ri-building-2-line', title: 'Office Buildings', desc: 'Professional grounds maintenance that makes a great first impression on clients and employees.' },
  { icon: 'ri-store-2-line', title: 'Retail Properties', desc: 'Curb appeal that drives foot traffic — clean, well-maintained grounds attract customers.' },
  { icon: 'ri-community-line', title: 'HOAs & Condos', desc: 'Consistent, reliable service for homeowner associations and condominium communities.' },
  { icon: 'ri-home-office-line', title: 'Property Managers', desc: 'We work directly with property managers to keep multiple properties looking their best.' },
];

const faqs = [
  {
    q: 'Do you offer contracts for commercial properties?',
    a: 'Yes — we offer seasonal and annual service agreements for commercial clients. Contracts ensure priority scheduling, consistent pricing, and reliable service throughout the season.',
  },
  {
    q: 'Can you service multiple properties?',
    a: 'Absolutely. We work with property management companies and HOAs that need consistent service across multiple locations. We\'ll coordinate scheduling to make it seamless for you.',
  },
  {
    q: 'Do you work around business hours?',
    a: 'Yes — we can schedule service during off-hours or early morning to minimize disruption to your business operations. Just let us know your preferences during the consultation.',
  },
  {
    q: 'Are you insured for commercial work?',
    a: 'Yes — Trimming Edge is fully licensed, bonded, and insured with comprehensive liability coverage appropriate for commercial properties. We can provide certificates of insurance upon request.',
  },
];

export default function CommercialLandscapingPage() {
  useSEO({
    title: 'Commercial Landscaping | Business Grounds Maintenance Western Massachusetts',
    description: 'Reliable commercial landscaping for businesses, HOAs & property managers in Westfield, Huntington, Russell & Montgomery MA. Licensed & insured. Flexible scheduling. Free estimates.',
    keywords: 'commercial landscaping Westfield MA, business lawn care Huntington MA, HOA landscaping Western Massachusetts, property maintenance Russell MA',
    canonical: '/services/commercial-landscaping',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/commercial-landscaping`,
      name: 'Commercial Landscaping',
      description: 'Reliable commercial landscaping for businesses, HOAs and property managers in Western Massachusetts.',
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
          src="/uploads/hero-lawn-care.jpg"
          alt="Commercial Landscaping"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]"></div>
        <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className="ri-building-line text-white"></i>
            <span className="text-sm font-semibold text-white">Commercial Services</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Commercial Landscaping
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Reliable, professional grounds maintenance for businesses, HOAs, and property managers.
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
            <span className="text-gray-900 font-medium">Commercial Landscaping</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Professional Grounds Maintenance That Reflects Your Business
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your property's exterior is the first thing clients, customers, and employees see. A well-maintained landscape communicates professionalism, attention to detail, and pride in your business. Trimming Edge provides reliable commercial landscaping services that keep your grounds looking impressive all season long.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We have extensive experience with commercial properties including office buildings, retail centers, HOAs, and property management companies. We offer flexible scheduling to minimize disruption to your business and consistent crews so you always know who's on your property.
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
                Call for a Commercial Quote
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96 lg:order-1">
              <img
                src="/uploads/hero-lawn-care.jpg"
                alt="Commercial property landscaping"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center bg-primary-100 rounded-2xl mb-4">
                  <i className={`${item.icon} text-2xl text-primary-600`}></i>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Let's Talk About Your Commercial Property</h2>
          <p className="text-white/80 text-lg mb-8">Serving businesses across Westfield, Huntington, Russell, Montgomery &amp; surrounding areas.</p>
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
