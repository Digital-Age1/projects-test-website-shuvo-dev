import { Link } from 'react-router-dom';

export default function AboutHero() {
  return (
    <section className="relative py-28 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=green%20lawn%20mowing%20truck%20and%20trailer%20parked%20in%20front%20of%20a%20residential%20home%20in%20Massachusetts%2C%20summer%2C%20blue%20sky%2C%20clean%20driveway%2C%20no%20people%2C%20professional%20equipment&width=1920&height=800&seq=te319_04&orientation=landscape"
          alt="Trimming Edge Professional Lawn Care"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600/90 rounded-full mb-6">
            <i className="ri-heart-line text-white"></i>
            <span className="text-sm font-semibold text-white">About Trimming Edge</span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Locally Owned Lawn Care in Western MA
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow">
            Trimming Edge is a family-operated lawn care company based in Montgomery, MA — built on hard work, local pride, and a perfect 5-star reputation.
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
              View Our Services
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
