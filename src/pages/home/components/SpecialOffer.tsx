import { Link } from 'react-router-dom';
import home from '@/content/home.json';
import site from '@/content/site.json';

export default function SpecialOffer() {
  return (
    <section className="py-24 bg-gradient-to-r from-accent-500 to-accent-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-gift-line text-white"></i>
              <span className="text-sm font-semibold text-white">Limited Time Offer</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
              {home.freeEstimate.headline}
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {home.freeEstimate.description}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg flex-shrink-0">
                  <i className="ri-checkbox-line text-white"></i>
                </div>
                <span className="text-white font-medium">Free on-site consultation and assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg flex-shrink-0">
                  <i className="ri-checkbox-line text-white"></i>
                </div>
                <span className="text-white font-medium">Detailed written quote with no hidden fees</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg flex-shrink-0">
                  <i className="ri-checkbox-line text-white"></i>
                </div>
                <span className="text-white font-medium">Expert recommendations for your property</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg flex-shrink-0">
                  <i className="ri-checkbox-line text-white"></i>
                </div>
                <span className="text-white font-medium">Flexible scheduling to fit your timeline</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact-us"
                className="px-8 py-4 bg-white text-accent-600 text-lg font-bold rounded-lg hover:bg-gray-50 transition-all shadow-xl whitespace-nowrap"
              >
                Request Free Estimate
              </Link>
              <a
                href={site.phoneHref}
                className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-lg hover:bg-gray-800 transition-all shadow-xl whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                {site.phone}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-[500px]">
                <img
                  src={home.freeEstimate.image}
                  alt="Free Estimate"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
