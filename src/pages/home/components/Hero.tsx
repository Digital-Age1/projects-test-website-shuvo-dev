import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20perfectly%20manicured%20residential%20lawn%20and%20landscape%20with%20vibrant%20green%20grass%20beautiful%20trees%20and%20professional%20landscaping%20design%2C%20bright%20natural%20lighting%2C%20modern%20home%20exterior%2C%20clean%20minimalist%20background%20with%20soft%20bokeh%20effect&width=1920&height=1080&seq=hero1&orientation=landscape"
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
          <span className="text-sm font-semibold text-gray-900">5.0/5 Google Rating</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">5-Star Rated</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">Locally Owned</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Transform Your Outdoor Space
          <br />
          <span className="text-primary-400">With Expert Care</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Professional <strong>lawn care</strong> and <strong>landscaping services</strong> in Westfield, Huntington, Russell &amp; Montgomery, MA. Licensed, insured, and trusted by homeowners and businesses across Western Massachusetts.
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
            href="tel:+14135519653"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            (413) 551-9653
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