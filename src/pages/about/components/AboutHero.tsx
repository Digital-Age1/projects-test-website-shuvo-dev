import { Link } from 'react-router-dom';
import about from '@/content/about.json';

export default function AboutHero() {
  return (
    <section className="relative py-28 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src={about.heroImage}
          alt="Trimming Edge Professional Lawn Care"
          className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600/90 rounded-full mb-6">
            <i className="ri-heart-line text-white"></i>
            <span className="text-sm font-semibold text-white">About Trimming Edge</span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6 leading-tight">
            {about.heroTitle}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow">
            {about.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={about.heroPrimaryHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-all whitespace-nowrap"
            >
              {about.heroPrimaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
              {about.heroPrimaryLabel}
            </a>
            <Link
              to={about.heroSecondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              {about.heroSecondaryLabel}
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-star-fill text-accent-400"></i>
              <span className="text-sm font-medium">5.0 Google Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-shield-check-line text-primary-300"></i>
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-heart-line text-primary-300"></i>
              <span className="text-sm font-medium">Locally Owned Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
