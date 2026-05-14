import { Link } from 'react-router-dom';
import { mainServices } from '../../../mocks/services';

export default function LocationsServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-map-pin-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Available Everywhere We Serve</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Full-Service Lawn Care Across All Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're in Westfield, Huntington, Russell, or Montgomery — every service we offer is available to you. No limited menus, no territory restrictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 transition-all group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                  <i className={`${service.icon} text-2xl text-primary-600 group-hover:text-white transition-colors`}></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                {['Westfield', 'Huntington', 'Russell', 'Montgomery'].map((area) => (
                  <span key={area} className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-600 rounded-3xl p-10 text-center">
          <h3 className="font-display font-bold text-3xl text-white mb-3">
            All Services. All Areas. One Trusted Team.
          </h3>
          <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
            From weekly mowing to full landscape installations — Trimming Edge brings the same 5-star quality to every corner of our service area.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14135519653"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              (413) 551-9653
            </a>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-800 text-white text-lg font-bold rounded-lg hover:bg-primary-900 transition-colors whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
