import { Link } from 'react-router-dom';

export default function ServicesHero() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20green%20lawn%20in%20front%20of%20a%20classic%20New%20England%20home%2C%20perfectly%20mowed%20stripes%2C%20blue%20sky%2C%20summer%2C%20wide%20angle%2C%20no%20people%2C%20curb%20appeal%2C%20bright%20sunlight&width=1920&height=800&seq=te319_01&orientation=landscape"
          alt="Professional Lawn Care Services"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600/90 rounded-full mb-6">
            <i className="ri-leaf-line text-white"></i>
            <span className="text-sm font-semibold text-white">Professional Services</span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Lawn Care &amp; Landscaping Services in Western MA
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow">
            Expert lawn maintenance, landscape design, tree care, and seasonal cleanup serving Westfield, Huntington, Russell &amp; Montgomery, MA. Licensed, insured, and locally owned.
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
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
            >
              Get Free Estimate
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
