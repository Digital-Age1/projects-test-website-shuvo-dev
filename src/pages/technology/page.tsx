import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import technology from '@/content/technology.json';
import site from '@/content/site.json';

export default function TechnologyPage() {
  useSEO({
    title: technology.seoTitle,
    description: technology.seoDescription,
    keywords: technology.seoKeywords,
    canonical: '/technology',
    ogImage: `${SITE_URL}${technology.ogImage || technology.hero.image}`,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/technology`,
      url: `${SITE_URL}/technology`,
      name: technology.seoTitle,
      description: technology.seoDescription,
    },
  });
  return (
    <>
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <img
              src={technology.hero.image}
              alt="Technology & IT Solutions — Trimming Edge"
              className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            <p className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-3">
              Serving Clients Throughout Western Massachusetts
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {technology.hero.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={site.clientLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-user-line text-lg"></i>
                <span>Customer Login</span>
              </a>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calendar-line text-lg"></i>
                <span>Book Appointment</span>
              </a>
            </div>
          </div>
        </section>

        {/* Unleashing Excellence */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {technology.sections[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>{technology.sections[0].body}</strong>
                </p>
                <a
                  href={site.phoneHref}
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden">
                <img
                  src={technology.sections[0].image}
                  alt="IT Computer Solutions"
                  className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* IT Networking */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 rounded-xl overflow-hidden order-2 lg:order-1">
                <img
                  src="/uploads/technology-network-setup.jpg"
                  alt="Business Network Setup"
                  className="w-full h-full object-cover object-top" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  I.T. Networking and Computer Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We design our I.T. networking and computer solutions to meet a wide range of technical needs for both individual and business clients. We specialize in troubleshooting and resolving issues related to computers, phones, tablets, and networks. Our expert team can tackle any problem, be it a slow-running desktop, a malfunctioning smartphone, or connectivity issues. Our services extend to printer setups and maintenance, ensuring your printing resources are always operational without disruption.
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-6">
                  Starting Price: $80uhour Remote &nbsp;|&nbsp; $100uhour On Site
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={site.phoneHref}
                    className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Reach Us
                  </a>
                  <Link
                    to="/speedtest"
                    className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-speed-line mr-2"></i>
                    Network Speed Test
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Network */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {technology.sections[1].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>{technology.sections[1].body}</strong>
                </p>
                <a
                  href={site.phoneHref}
                  className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>
              <div className="w-full h-80 rounded-xl overflow-hidden">
                <img
                  src={technology.sections[1].image}
                  alt="Business Network Solutions"
                  className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        {/* Remote Troubleshooting */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full h-80 rounded-xl overflow-hidden order-2 lg:order-1">
                <img
                  src="/uploads/technology-remote-support.jpg"
                  alt="Remote IT Troubleshooting"
                  className="w-full h-full object-cover object-top" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Remote Troubleshooting and Installation Services
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Understanding the need for quick and efficient service, we offer remote troubleshooting to address your issues without the need for an onsite visit. Remote access resolves urgent problems, saving you time and reducing downtime. For hardware installations, our technicians provide thorough setup services for a wide range of devices, including printers, network equipment, and more. Whether it's upgrading your home office setup or overhauling a corporate network, our professionals ensure a seamless integration and setup process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line text-lg"></i>
              <span>Reach Us</span>
            </a>
            <a
              href="https://dnalawn.com/service/technology"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Learn More</span>
              <i className="ri-external-link-line text-lg"></i>
            </a>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Get in Touch with us Today!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-time-line text-3xl text-primary-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Time of Operation</h3>
                <p className="text-sm text-gray-600">Mon - Fri: 8:00 am – 6:00 pm</p>
                <p className="text-sm text-gray-600">Saturday: 9:00 am – 5:00 pm</p>
                <p className="text-sm text-gray-600">Sunday: Closed</p>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-phone-line text-3xl text-primary-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Office Phone</h3>
                <a href={site.phoneHref} className="text-primary-600 font-semibold">{site.phone}</a>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className="ri-star-line text-3xl text-primary-600"></i>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ready to Begin?</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Request Estimate
                  </a>
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-1 px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-calendar-line"></i>
                    <span>Book Appointment</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
