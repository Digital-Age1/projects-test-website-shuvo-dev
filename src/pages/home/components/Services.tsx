import { Link } from 'react-router-dom';
import { mainServices } from '../../../mocks/services';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-service-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Our Services</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Complete <strong>Lawn Care</strong> & <strong>Landscaping Solutions</strong>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complete landscape transformations, we provide professional services that enhance your property's beauty and value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Service Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-lg">
                  <i className={`${service.icon} text-2xl text-primary-600`}></i>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
                >
                  Get Quote
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Link
            to="/contact-us"
            className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}