const serviceDetails = [
  {
    id: 1,
    title: 'Lawn Mowing & Maintenance',
    icon: 'ri-plant-line',
    image: '/uploads/hero-lawn-care.jpg',
    description1: 'Regular lawn mowing is the foundation of a beautiful property. Our professional crew arrives on a consistent schedule — weekly or bi-weekly — with commercial-grade equipment that delivers clean, precise cuts every time. We mow, edge, trim around obstacles, and blow off all clippings so your property looks immaculate when we leave.',
    description2: 'We adjust our cutting height based on grass type and season to promote healthy growth, reduce stress, and prevent disease. Whether you have a small residential yard in Montgomery or a large commercial property in Westfield, our team has the equipment and expertise to handle it efficiently.',
    benefits: [
      'Weekly or bi-weekly scheduled service',
      'Edging along driveways, sidewalks & beds',
      'Trimming around fences, trees & structures',
      'Cleanup and blowing of all clippings',
      'Height adjustment by season',
    ],
  },
  {
    id: 2,
    title: 'Landscape Design & Installation',
    icon: 'ri-seedling-line',
    image: '/uploads/hero-lawn-care.jpg',
    description1: 'A professionally designed landscape dramatically increases your property\'s curb appeal and market value. Our design process starts with understanding your vision, budget, and how you use your outdoor space. We then create a customized plan featuring plants native to Western Massachusetts that thrive in our climate.',
    description2: 'From planting trees and shrubs to installing stone pathways and decorative beds, our installation team brings the design to life with precision and care. We source quality plants and materials and back our work with a satisfaction guarantee.',
    benefits: [
      'Custom design consultation',
      'Plant selection suited to Western MA climate',
      'Bed creation and installation',
      'Stone pathways and hardscaping',
      'Seasonal color planting',
    ],
  },
  {
    id: 3,
    title: 'Tree & Shrub Care',
    icon: 'ri-leaf-line',
    image: '/uploads/hero-lawn-care.jpg',
    description1: 'Healthy trees and shrubs require regular attention — improper trimming can damage plants and create safety hazards. Our team is trained in proper pruning techniques that promote healthy growth, improve structure, and enhance the natural beauty of your trees and shrubs.',
    description2: 'We service all types of trees and ornamental shrubs throughout Huntington, Russell, Westfield, and Montgomery, MA. Whether it\'s routine maintenance trimming or shaping overgrown hedges, we handle every job with care and precision.',
    benefits: [
      'Seasonal pruning and shaping',
      'Hedge and shrub trimming',
      'Dead branch removal',
      'Crown thinning and shaping',
      'Storm damage cleanup',
    ],
  },
];

export default function ServiceDetails() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-focus-2-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Service Details</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            What You Can Expect From Every Visit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every service we provide is backed by our commitment to quality, reliability, and your complete satisfaction.
          </p>
        </div>

        <div className="space-y-12">
          {serviceDetails.map((svc, idx) => (
            <div
              key={svc.id}
              className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl">
                    <i className={`${svc.icon} text-2xl text-primary-600`}></i>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-gray-900">{svc.title}</h2>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{svc.description1}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{svc.description2}</p>
                <ul className="space-y-2 mb-6">
                  {svc.benefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <i className="ri-checkbox-circle-fill text-primary-600"></i>
                      <span className="text-sm text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+14135519653"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Get a Free Quote
                </a>
              </div>
              <div className={`relative rounded-2xl overflow-hidden h-80 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={svc.image}
                  alt={svc.title}
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
