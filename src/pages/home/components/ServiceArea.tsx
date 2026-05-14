import { serviceAreas } from '../../../mocks/services';

export default function ServiceArea() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <i className="ri-map-pin-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Service Areas</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Proudly Serving Your Community
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide professional <strong>lawn care</strong> and <strong>landscaping services</strong> throughout the region. Our local team knows the area and is committed to keeping your community beautiful.
            </p>

            {/* Service Areas List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <i className="ri-checkbox-circle-fill text-primary-600"></i>
                  <span className="text-sm text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Don't see your area listed? Contact us to confirm we service your location.
            </p>

            <a
              href="tel:+14135519653"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Call to Confirm Service
            </a>
          </div>

          {/* Map Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.45!2d-72.7858945!3d42.1768609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e0c4e1a5b5e5%3A0x1!2sWestfield%2C%20MA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Trimming Edge Service Area - Western Massachusetts"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}