import { cities } from '../../service-areas/serviceAreaData';

const featuredCitySlugs = ['westfield-ma', 'huntington-ma', 'russell-ma', 'montgomery-ma'];

export default function LocationsCities() {
  const featuredCities = featuredCitySlugs
    .map((slug) => cities.find((city) => city.slug === slug))
    .filter((city): city is NonNullable<typeof city> => Boolean(city));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-map-2-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Areas We Serve</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Lawn Care Across Western Massachusetts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide reliable, professional lawn care and landscaping throughout Hampden County and surrounding areas.
          </p>
        </div>

        <div className="space-y-16">
          {featuredCities.map((city, idx) => (
            <div key={city.name} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-xl">
                    <i className={`${city.icon} text-xl text-primary-600`}></i>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-gray-900">Lawn Care in {city.name}, {city.state}</h2>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{city.description}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{city.aboutText}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {city.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <i className="ri-checkbox-circle-fill text-primary-600 text-sm"></i>
                      <span className="text-sm text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={city.ctaPrimaryHref}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  {city.ctaPrimaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
                  Get a Free Quote in {city.name}
                </a>
              </div>
              <div className={`rounded-2xl overflow-hidden h-72 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={city.image}
                  alt={city.imageAlt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
