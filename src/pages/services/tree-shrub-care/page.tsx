import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const benefits = [
  'Seasonal pruning and shaping',
  'Hedge and shrub trimming',
  'Dead branch removal',
  'Crown thinning and shaping',
  'Storm damage cleanup',
  'Ornamental tree care',
  'Proper pruning techniques',
  'Year-round availability',
];

const faqs = [
  {
    q: 'When is the best time to trim trees and shrubs?',
    a: 'Most trees and shrubs benefit from late winter or early spring pruning before new growth begins. However, flowering shrubs are best trimmed right after they bloom. We\'ll advise the best timing for your specific plants.',
  },
  {
    q: 'Can improper trimming damage my trees?',
    a: 'Yes — incorrect cuts can introduce disease, cause structural weakness, and permanently damage trees. Our team is trained in proper pruning techniques that promote healthy growth and long-term plant health.',
  },
  {
    q: 'Do you handle storm-damaged trees?',
    a: 'Yes. We offer storm damage cleanup including removal of broken branches and debris. If a tree poses a safety risk, we\'ll assess the situation and recommend the safest course of action.',
  },
  {
    q: 'How often should hedges be trimmed?',
    a: 'Most hedges benefit from 2–3 trims per season to maintain their shape and density. Fast-growing species may need more frequent attention. We can set up a regular schedule that keeps your hedges looking sharp all season.',
  },
];

export default function TreeShrubCarePage() {
  useSEO({
    title: 'Tree & Shrub Care | Pruning & Trimming Services Western Massachusetts',
    description: 'Expert tree and shrub pruning, trimming, and shaping in Westfield, Huntington, Russell & Montgomery MA. Storm damage cleanup. Proper pruning techniques for healthy plants. Free estimates.',
    keywords: 'tree trimming Westfield MA, shrub pruning Huntington MA, hedge trimming Western Massachusetts, tree care Russell MA',
    canonical: '/services/tree-shrub-care',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/tree-shrub-care`,
      name: 'Tree & Shrub Care',
      description: 'Expert tree and shrub pruning, trimming, and shaping in Western Massachusetts.',
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
          src="/uploads/hero-tree-shrub-care.jpg"
          alt="Tree & Shrub Care"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]"></div>
        <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className="ri-leaf-line text-white"></i>
            <span className="text-sm font-semibold text-white">Tree &amp; Shrub Services</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Tree &amp; Shrub Care
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Expert pruning, trimming, and shaping to keep your trees and shrubs healthy and beautiful.
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
            <span className="text-gray-900 font-medium">Tree &amp; Shrub Care</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Healthy Trees &amp; Shrubs Start with Proper Care
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Healthy trees and shrubs require regular attention — improper trimming can damage plants and create safety hazards. Our team is trained in proper pruning techniques that promote healthy growth, improve structure, and enhance the natural beauty of your trees and shrubs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We service all types of trees and ornamental shrubs throughout Huntington, Russell, Westfield, and Montgomery, MA. Whether it's routine maintenance trimming or shaping overgrown hedges, we handle every job with care and precision.
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
            <div className="relative rounded-2xl overflow-hidden h-96 lg:order-1">
              <img
                src="/uploads/detail-tree-shrub-care.jpg"
                alt="Professional tree and shrub trimming"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-12">What We Trim &amp; Prune</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'ri-tree-line', title: 'Ornamental Trees', desc: 'Crown shaping, dead branch removal, and structural pruning to keep your trees healthy and beautiful.' },
              { icon: 'ri-plant-line', title: 'Hedges & Shrubs', desc: 'Precise shaping and trimming of hedges, boxwoods, arborvitae, and all ornamental shrubs.' },
              { icon: 'ri-windy-line', title: 'Storm Cleanup', desc: 'Fast response to storm-damaged branches and debris — keeping your property safe after severe weather.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center bg-primary-100 rounded-2xl mb-4">
                  <i className={`${item.icon} text-2xl text-primary-600`}></i>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Keep Your Trees &amp; Shrubs Looking Their Best</h2>
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
