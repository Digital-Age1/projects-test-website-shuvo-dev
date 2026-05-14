import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-[600px]">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20landscaping%20team%20working%20on%20beautiful%20residential%20property%20with%20lawn%20mowers%20and%20equipment%2C%20friendly%20workers%20in%20uniform%2C%20well%20maintained%20green%20lawn%20and%20landscape%2C%20sunny%20day%2C%20clean%20simple%20background&width=800&height=1000&seq=about1&orientation=portrait"
                  alt="Trimming Edge Team"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-display font-bold mb-1">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <i className="ri-information-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">About Us</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Your Local <strong>Lawn Care</strong> Experts Since 2009
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Trimming Edge</strong> has been proudly serving homeowners and businesses with professional <strong>lawn care</strong> and <strong>landscaping services</strong> for over 15 years. What started as a small local operation has grown into a trusted name in the community.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced professionals is dedicated to transforming outdoor spaces into beautiful, well-maintained landscapes. We combine industry expertise with personalized service to deliver results that exceed expectations.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg flex-shrink-0">
                  <i className="ri-checkbox-circle-line text-xl text-primary-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Locally Owned & Operated</h4>
                  <p className="text-sm text-gray-600">We're part of your community and invested in its beauty.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg flex-shrink-0">
                  <i className="ri-team-line text-xl text-primary-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Experienced Professionals</h4>
                  <p className="text-sm text-gray-600">Our certified team brings expertise to every project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg flex-shrink-0">
                  <i className="ri-customer-service-line text-xl text-primary-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Customer-First Approach</h4>
                  <p className="text-sm text-gray-600">Your satisfaction is our top priority, guaranteed.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15555296227"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Us Today
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}