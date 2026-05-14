import { Link } from 'react-router-dom';

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
              Get Your Free Estimate Today
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              No obligation, no pressure. Just honest advice and a detailed quote for your <strong>lawn care</strong> and <strong>landscaping</strong> needs.
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
                href="tel:+15555296227"
                className="px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-lg hover:bg-gray-800 transition-all shadow-xl whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                (555) 529-6227
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-[500px]">
                <img
                  src="https://readdy.ai/api/search-image?query=happy%20homeowner%20shaking%20hands%20with%20professional%20landscaper%20in%20front%20of%20beautiful%20well%20maintained%20lawn%20and%20landscape%2C%20satisfied%20customer%2C%20successful%20service%20completion%2C%20bright%20sunny%20day%2C%20clean%20simple%20background&width=800&height=1000&seq=offer1&orientation=portrait"
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