import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import AboutValues from './components/AboutValues';
import AboutProof from './components/AboutProof';
import AboutFAQ from './components/AboutFAQ';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import about from '@/content/about.json';

const differentiatorIcons: Record<string, string> = {
  userHeart: 'ri-user-heart-line',
  homeSmile: 'ri-home-smile-line',
  awardFill: 'ri-award-fill',
  calendar: 'ri-calendar-check-line',
  shieldStar: 'ri-shield-star-line',
  chatSmile: 'ri-chat-smile-2-line',
};

function AboutWorkGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-gallery-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Our Work</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            {about.galleryTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {about.gallerySubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {about.galleryImages.map((shot) => (
            <div key={shot.caption} className="group relative rounded-2xl overflow-hidden h-56">
              <img
                src={shot.image}
                alt={shot.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-sm font-semibold">{shot.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden h-64">
          <img
            src={about.galleryBannerImage}
            alt={about.galleryBannerAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent flex items-center">
            <div className="px-12">
              <div className="text-white font-display font-bold text-3xl mb-2">{about.galleryBannerTitle}</div>
              <div className="text-white/80 text-lg">{about.galleryBannerText}</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutWhatsDifferent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <i className="ri-star-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Why Customers Choose Us</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              {about.differentiatorsTitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {about.differentiatorsSubtitle}
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-72">
            <img
              src={about.differentiatorsImage}
              alt={about.differentiatorsImageAlt}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="ri-star-fill text-accent-500 text-sm"></i>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  Five-Star Google Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.differentiators.map((item, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                <i className={`${differentiatorIcons[item.iconKey] || 'ri-star-line'} text-2xl text-primary-600 group-hover:text-white transition-colors`}></i>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutServiceArea() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <i className="ri-map-pin-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Local Experts</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Rooted in Western Massachusetts
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're not a franchise or a big-box lawn service. We're your neighbors - based right here in Montgomery, MA, serving the communities we live in every day.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              That local connection means we understand your soil, your climate, your property needs, and your neighborhood. We're invested in making Western Massachusetts beautiful - because it's our home too.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Westfield, MA', 'Huntington, MA', 'Russell, MA', 'Montgomery, MA'].map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <i className="ri-checkbox-circle-fill text-primary-600"></i>
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            <Link
              to="/locations"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              View Service Area Details <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.45!2d-72.7858945!3d42.1768609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e0c4e1a5b5e5%3A0x1!2sWestfield%2C%20MA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trimming Edge Western MA Service Area"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <i className="ri-heart-line text-5xl text-primary-400 mb-4 block"></i>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
          {about.ctaTitle}
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          {about.ctaText}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={about.ctaPrimaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            {about.ctaPrimaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
            {about.ctaPrimaryLabel}
          </a>
          <Link
            to={about.ctaSecondaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            {about.ctaSecondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: about.seoTitle,
    description: about.seoDescription,
    keywords: about.seoKeywords,
    canonical: '/about',
    ogImage: `${SITE_URL}${about.ogImage}`,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about`,
      url: `${SITE_URL}/about`,
      name: 'About Trimming Edge',
      description: about.seoDescription,
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Trimming Edge',
        foundingLocation: { '@type': 'Place', name: 'Montgomery, MA' },
        description: 'Professional lawn care and landscaping services across Western Massachusetts.',
        telephone: '+14135519653',
        url: `${SITE_URL}/`,
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutWorkGallery />
        <AboutWhatsDifferent />
        <AboutValues />
        <AboutServiceArea />
        <AboutProof />
        <AboutFAQ />
        <AboutCTA />
      </main>
      <PageFooter />
    </div>
  );
}
