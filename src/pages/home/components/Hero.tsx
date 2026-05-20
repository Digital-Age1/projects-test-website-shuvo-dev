import { Link } from 'react-router-dom';
import home from '@/content/home.json';
import site from '@/content/site.json';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={home.hero.image}
          alt="Professional Lawn Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center w-full">
        {/* Trust Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full mb-8">
          <i className="ri-star-fill text-accent-500 text-lg"></i>
          <span className="text-sm font-semibold text-gray-900">{home.hero.badge[0]}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{home.hero.badge[1]}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{home.hero.badge[2]}</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          {home.hero.headline}
          <br />
          <span className="text-primary-400">{home.hero.highlight}</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          {home.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/contact-us"
            className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
          >
            Get Free Estimate
          </Link>
          <a
            href={site.phoneHref}
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            {site.phone}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-white">
          <div className="flex items-center space-x-2">
            <i className="ri-shield-check-line text-2xl text-primary-400"></i>
            <span className="text-sm font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-time-line text-2xl text-primary-400"></i>
            <span className="text-sm font-medium">15+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-thumb-up-line text-2xl text-primary-400"></i>
            <span className="text-sm font-medium">100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-white"></i>
      </div>
    </section>
  );
}
