import { useEffect } from 'react';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import gallery from '@/content/gallery.json';
import site from '@/content/site.json';

const INSTAGRAM_URL = gallery.social.instagramUrl;
const FACEBOOK_URL = gallery.social.facebookUrl;
const instagramPosts = gallery.socialPosts;

export default function OurWorkPage() {
  useSEO({
    title: gallery.seoTitle,
    description: gallery.seoDescription,
    keywords: gallery.seoKeywords,
    canonical: '/our-work',
    ogImage: `${SITE_URL}${gallery.ogImage}`,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/our-work`,
      url: `${SITE_URL}/our-work`,
      name: gallery.seoTitle,
      description: gallery.seoDescription,
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-gallery-line text-primary-400"></i>
              <span className="text-sm font-semibold text-primary-400">{gallery.hero.eyebrow}</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              {gallery.hero.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {gallery.hero.description}
            </p>
          </div>
        </section>

        {/* Social Gallery Header */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 rounded-2xl">
                  <i className="ri-instagram-line text-white text-2xl"></i>
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-gray-900">{gallery.social.brandName}</div>
                  <div className="text-sm text-gray-500">{gallery.social.description}</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  <i className="ri-instagram-line mr-2 text-lg"></i>
                  Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  <i className="ri-facebook-fill mr-2 text-lg"></i>
                  Facebook
                </a>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {instagramPosts.map((post, i) => (
                <a
                  key={i}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full">
                        <i className="ri-instagram-line text-gray-900 text-lg"></i>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-instagram-line text-white text-xs"></i>
                      </div>
                      <span className="text-white text-xs font-medium">trimmingedge</span>
                      <span className="text-white/60 text-xs ml-auto">{post.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-lg font-bold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <i className="ri-instagram-line mr-2 text-xl"></i>
                View All on Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                <i className="ri-facebook-fill mr-2 text-xl"></i>
                View All on Facebook
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              {gallery.cta.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {gallery.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={site.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                {gallery.cta.primaryLabel}
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {gallery.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
