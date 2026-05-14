import { mainServices } from '../../../mocks/services';
import { Link } from 'react-router-dom';

const serviceLinks: Record<number, string> = {
  1: '/services/lawn-mowing',
  2: '/services/landscape-design',
  3: '/services/tree-shrub-care',
  4: '/services/seasonal-cleanups',
  5: '/services/mulching-bed-maintenance',
  6: '/services/commercial-landscaping',
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-service-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">What We Offer</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Complete Lawn Care &amp; Landscaping Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From weekly lawn maintenance to complete landscape transformations — we handle every aspect of your outdoor space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-11 h-11 flex items-center justify-center bg-white rounded-xl">
                  <i className={`${service.icon} text-2xl text-primary-600`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Link
                  to={serviceLinks[service.id] ?? '/services'}
                  className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors whitespace-nowrap"
                >
                  Learn More <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see what you need? We offer custom solutions.</p>
          <a
            href="tel:+14135519653"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Call for Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
