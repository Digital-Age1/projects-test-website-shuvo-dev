import { Link } from 'react-router-dom';
import gallery from '@/content/gallery.json';

const galleryImages = gallery.items;

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-image-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Our Work</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Recent Projects & Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See the quality of our <strong>lawn care</strong> and <strong>landscaping work</strong>. These are real projects from satisfied customers.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="font-display font-bold text-xl text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to transform your property?</p>
          <Link
            to="/contact-us"
            className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
