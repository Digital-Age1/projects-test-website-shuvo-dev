import { Link } from 'react-router-dom';

export default function LocationsHero() {
  return (
    <section className="relative py-28 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/hero-service-areas.jpg"
          alt="Western Massachusetts Service Area — Trimming Edge"
          className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600/90 rounded-full mb-6">
            <i className="ri-map-pin-line text-white"></i>
            <span className="text-sm font-semibold text-white">Service Areas</span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Serving Westfield, Huntington, Russell &amp; Montgomery, MA
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow">
            Trimming Edge provides professional lawn care and landscaping throughout Western Massachusetts. Local, reliable, and trusted — right in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+14135519653"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-all whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              (413) 551-9653
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-map-pin-fill text-accent-400"></i>
              <span className="text-sm font-medium">4 Towns Served</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-star-fill text-accent-400"></i>
              <span className="text-sm font-medium">5.0 Google Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-shield-check-line text-primary-300"></i>
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
