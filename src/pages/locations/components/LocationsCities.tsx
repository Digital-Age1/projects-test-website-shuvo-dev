const cities = [
  {
    name: 'Westfield, MA',
    description1: 'Westfield is our largest service area and a community we\'re proud to help keep beautiful. From historic residential neighborhoods near downtown to newer developments on the outskirts, Trimming Edge provides consistent, professional lawn care throughout the Westfield area.',
    description2: 'Our Westfield customers rely on us for weekly lawn mowing, seasonal cleanups, mulching, edging, and landscape maintenance. Whether you\'re a homeowner on Court Street or managing a commercial property on Western Ave, we\'ve got you covered.',
    icon: 'ri-building-2-line',
    highlights: ['Residential lawn mowing', 'Commercial property maintenance', 'Seasonal cleanups', 'Landscape design'],
    image: '/uploads/hero-lawn-care.jpg',
  },
  {
    name: 'Huntington, MA',
    description1: 'Huntington\'s rural charm and rolling landscapes are some of the most beautiful in Western Massachusetts. Our team regularly services properties throughout Huntington, providing the attentive care that rural and semi-rural properties require.',
    description2: 'From large residential lots to hobby farms needing regular maintenance, Trimming Edge has the equipment and experience to handle Huntington properties of all sizes. We know the area and understand the demands of lawn care in this part of Massachusetts.',
    icon: 'ri-landscape-line',
    highlights: ['Large lot maintenance', 'Rural property care', 'Tree & shrub trimming', 'Fall cleanup'],
    image: '/uploads/hero-lawn-care.jpg',
  },
  {
    name: 'Russell, MA',
    description1: 'Russell, MA is a small close-knit community where neighbors notice the details. Trimming Edge has built a reputation in Russell for showing up reliably and doing exceptional work that enhances neighborhood curb appeal.',
    description2: 'Our Russell customers appreciate the personal touch — they often deal directly with David and Amanda, not a call center. That direct relationship means better communication, more customized service, and results you\'ll be proud of.',
    icon: 'ri-home-heart-line',
    highlights: ['Residential lawn care', 'Hedge & shrub trimming', 'Mulching & bed maintenance', 'Spring & fall cleanup'],
    image: '/uploads/hero-lawn-care.jpg',
  },
  {
    name: 'Montgomery, MA',
    description1: 'Montgomery is our home base. As a locally owned and operated business headquartered in Montgomery, we take special pride in serving our own neighbors. You might even see our truck parked nearby — because we live here too.',
    description2: 'Montgomery\'s quiet, wooded properties benefit from our careful approach to tree and shrub maintenance, seasonal cleanups, and regular lawn care. We understand the specific needs of properties in this part of Hampden County.',
    icon: 'ri-map-pin-2-line',
    highlights: ['Home base community', 'Wooded lot maintenance', 'Tree & shrub care', 'Full-service lawn care'],
    image: '/uploads/hero-lawn-care.jpg',
  },
];

export default function LocationsCities() {
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
          {cities.map((city, idx) => (
            <div key={city.name} className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-xl">
                    <i className={`${city.icon} text-xl text-primary-600`}></i>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-gray-900">Lawn Care in {city.name}</h2>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{city.description1}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{city.description2}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {city.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <i className="ri-checkbox-circle-fill text-primary-600 text-sm"></i>
                      <span className="text-sm text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="tel:+14135519653"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Get a Free Quote in {city.name.split(',')[0]}
                </a>
              </div>
              <div className={`rounded-2xl overflow-hidden h-72 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={city.image}
                  alt={`Lawn care in ${city.name}`}
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
