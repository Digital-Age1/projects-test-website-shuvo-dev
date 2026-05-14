import { whyChooseUs } from '../../../mocks/services';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-star-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Why Choose Us</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Your Trusted <strong>Lawn Care</strong> Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional service and results that exceed your expectations every time.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-6">
                <i className={`${benefit.icon} text-3xl text-primary-600`}></i>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}