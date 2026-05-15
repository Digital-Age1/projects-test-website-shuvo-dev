import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const benefits = [
  'Fresh mulch installation',
  'Mulch top-up and refresh',
  'Crisp bed edging',
  'Weed removal from beds',
  'Bed reshaping and expansion',
  'Perennial cutback',
  'Seasonal color planting',
  'Debris and old mulch removal',
];

const faqs = [
  {
    q: 'How often should mulch be replaced?',
    a: 'Most beds benefit from a fresh layer of mulch once a year — typically in spring. Over time, mulch breaks down and loses its effectiveness at suppressing weeds and retaining moisture. A 2–3 inch layer is ideal.',
  },
  {
    q: 'What type of mulch do you use?',
    a: 'We typically use premium shredded hardwood mulch, which looks great and breaks down slowly. We can also source other types based on your preference — just let us know during your consultation.',
  },
  {
    q: 'Does mulch really help with weeds?',
    a: 'Yes — a proper layer of mulch significantly reduces weed germination by blocking sunlight. Combined with clean bed edging, it\'s one of the most effective ways to keep your beds looking tidy with minimal maintenance.',
  },
  {
    q: 'Can you reshape or expand my existing beds?',
    a: 'Absolutely. We can redefine existing bed edges, expand beds to include more planting area, or create entirely new beds as part of a landscape refresh. Just let us know what you have in mind.',
  },
];

export default function MulchingBedMaintenancePage() {
  useSEO({
    title: 'Mulching & Bed Maintenance | Garden Bed Services Western Massachusetts',
    description: 'Professional mulch installation and garden bed maintenance in Westfield, Huntington, Russell & Montgomery MA. Fresh mulch, crisp edging, weed removal & bed reshaping. Free estimates.',
    keywords: 'mulching services Westfield MA, garden bed maintenance Huntington MA, mulch installation Western Massachusetts, bed edging Russell MA',
    canonical: '/services/mulching-bed-maintenance',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/mulching-bed-maintenance`,
      name: 'Mulching & Bed Maintenance',
      description: 'Professional mulch installation and garden bed maintenance in Western Massachusetts.',
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
          alt="Mulching & Bed Maintenance"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]"></div>
        <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className="ri-contrast-drop-line text-white"></i>
            <span className="text-sm font-semibold text-white">Bed &amp; Mulch Services</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Mulching &amp; Bed Maintenance
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Fresh mulch and clean bed edges that give your landscape a polished, professional look.
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
            <span className="text-gray-900 font-medium">Mulching &amp; Bed Maintenance</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                The Finishing Touch That Makes Your Landscape Pop
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fresh mulch installation and garden bed maintenance are some of the most impactful improvements you can make to your property's appearance. A clean layer of dark mulch with crisp edges instantly elevates the look of any landscape — and it's not just cosmetic.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Mulch suppresses weeds, retains soil moisture, regulates temperature, and protects plant roots. Our team installs mulch properly — the right depth, the right type, and with clean edges that make your beds look sharp all season long.
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
                src="/uploads/hero-lawn-care.jpg"
                alt="Fresh mulch and clean bed edges"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-12">Why Mulch Matters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-shield-line', title: 'Weed Suppression', desc: 'A proper mulch layer blocks sunlight and dramatically reduces weed growth in your beds.' },
              { icon: 'ri-drop-line', title: 'Moisture Retention', desc: 'Mulch slows evaporation, keeping soil moist longer and reducing how often you need to water.' },
              { icon: 'ri-temp-cold-line', title: 'Root Protection', desc: 'Insulates plant roots from temperature extremes — both summer heat and winter cold.' },
              { icon: 'ri-eye-line', title: 'Curb Appeal', desc: 'Fresh dark mulch with clean edges is one of the fastest ways to improve your property\'s appearance.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-4">
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Give Your Beds a Fresh Look This Season</h2>
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
