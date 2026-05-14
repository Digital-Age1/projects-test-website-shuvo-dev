import { Link } from 'react-router-dom';
import { services, serviceIcons, serviceDescriptions } from '@/mocks/serviceAreas';

interface CityServiceGridProps {
  citySlug: string;
  cityName: string;
  state: string;
}

export default function CityServiceGrid({ citySlug, cityName, state }: CityServiceGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-list-check-2 text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Our Services in {cityName}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Everything We Offer in {cityName}, {state}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From weekly lawn mowing to full commercial landscaping — we bring 5-star quality to every property in {cityName}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/service-areas/${citySlug}/${service.slug}`}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl border border-gray-200 group-hover:border-primary-300 group-hover:bg-primary-100 transition-all flex-shrink-0">
                  <i className={`${serviceIcons[service.slug] || 'ri-leaf-line'} text-xl text-primary-600`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors mb-1">
                    {service.label}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {serviceDescriptions[service.slug]}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-primary-600 text-sm font-semibold">
                <span>Learn More</span>
                <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
