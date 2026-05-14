import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

const benefits = [
  'Custom design consultation included',
  'Plants native to Western MA climate',
  'Garden bed creation & installation',
  'Stone pathways and hardscaping',
  'Seasonal color planting',
  'Mulch installation & edging',
  'Irrigation-friendly planning',
  'Satisfaction guaranteed',
];

const faqs = [
  {
    q: 'Do you offer a design consultation before starting?',
    a: 'Yes — every landscape project starts with a free consultation. We visit your property, discuss your vision and budget, and create a customized plan before any work begins.',
  },
  {
    q: 'What plants do you recommend for Western Massachusetts?',
    a: 'We specialize in plants native to the Western MA climate — species that thrive in our soil, survive our winters, and require minimal maintenance once established. We\'ll guide you through the best options for your specific yard.',
  },
  {
    q: 'How long does a landscape installation take?',
    a: 'Most residential landscape installations are completed in 1–3 days depending on scope. Larger projects with hardscaping may take longer. We\'ll give you a clear timeline during your consultation.',
  },
  {
    q: 'Do you handle both design and installation?',
    a: 'Absolutely — we handle everything from initial design through final installation. You work with one team from start to finish, which ensures the vision is executed exactly as planned.',
  },
];

export default function LandscapeDesignPage() {
  useSEO({
    title: 'Landscape Design & Installation | Trimming Edge Western Massachusetts',
    description: 'Custom landscape design and installation for Western Massachusetts homes. Native plants, garden beds, stone pathways & more. Free consultation. Serving Westfield, Huntington, Russell & Montgomery MA.',
    keywords: 'landscape design Westfield MA, landscape installation Huntington MA, custom landscaping Western Massachusetts, garden design Russell MA',
    canonical: '/services/landscape-design',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/services/landscape-design`,
      name: 'Landscape Design & Installation',
      description: 'Custom landscape design and installation for Western Massachusetts properties.',
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
      <section className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=beautifully%20designed%20front%20yard%20residential%20landscape%20with%20colorful%20blooming%20shrubs%20and%20perennials%20stone%20edged%20garden%20beds%20filled%20with%20fresh%20dark%20mulch%20native%20flowering%20plants%20winding%20stone%20path%20elegant%20New%20England%20colonial%20home%20exterior%20bright%20natural%20daylight%20vibrant%20greens%20and%20reds%20and%20yellows%2C%20professional%20landscape%20installation&width=1400&height=600&seq=landscape_hero01&orientation=landscape"
          alt="Landscape Design & Installation"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <i className="ri-seedling-line text-white"></i>
            <span className="text-sm font-semibold text-white">Landscaping Services</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-4 drop-shadow-lg">
            Landscape Design &amp; Installation
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow">
            Transform your outdoor space with custom landscape design built for Western Massachusetts.
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
            <span className="text-gray-900 font-medium">Landscape Design &amp; Installation</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                Custom Landscapes Designed to Thrive in Western MA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A professionally designed landscape dramatically increases your property's curb appeal and market value. Our design process starts with understanding your vision, budget, and how you use your outdoor space. We then create a customized plan featuring plants native to Western Massachusetts that thrive in our climate.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From planting trees and shrubs to installing stone pathways and decorative beds, our installation team brings the design to life with precision and care. We source quality plants and materials and back our work with a satisfaction guarantee.
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
                Call for a Free Consultation
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96">
              <img
                src="https://readdy.ai/api/search-image?query=stunning%20completed%20landscape%20installation%20with%20layered%20garden%20beds%20colorful%20perennials%20ornamental%20grasses%20stone%20border%20edging%20fresh%20dark%20mulch%20in%20front%20of%20beautiful%20New%20England%20home%2C%20professional%20landscaping%20result%2C%20bright%20summer%20afternoon%20light&width=800&height=600&seq=landscape_detail01&orientation=landscape"
                alt="Completed landscape installation"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-gray-900 text-center mb-12">Our Design Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'ri-discuss-line', title: 'Consultation', desc: 'We visit your property and discuss your goals, style preferences, and budget.' },
              { icon: 'ri-draft-line', title: 'Custom Plan', desc: 'We design a landscape plan tailored to your property and Western MA climate.' },
              { icon: 'ri-plant-line', title: 'Installation', desc: 'Our crew installs everything with precision — plants, beds, paths, and more.' },
              { icon: 'ri-star-line', title: 'Final Walkthrough', desc: 'We walk through the finished project with you to ensure your complete satisfaction.' },
            ].map((step, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-primary-600`}></i>
                </div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-2">{step.title}</h3>
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
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Ready to Transform Your Outdoor Space?</h2>
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
