import { Link } from 'react-router-dom';
import { processSteps } from '../../../mocks/services';

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-route-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">How It Works</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting started with professional <strong>lawn care</strong> is easy. Here's how we work together to transform your outdoor space.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200"></div>

          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                {/* Step Number */}
                <div className="w-16 h-16 flex items-center justify-center bg-primary-600 text-white text-2xl font-bold rounded-2xl mx-auto mb-6 shadow-lg">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-6">
                  <i className={`${step.icon} text-3xl text-primary-600`}></i>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (mobile only) */}
              {index < processSteps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <i className="ri-arrow-down-line text-3xl text-primary-300"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact-us"
            className="px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg whitespace-nowrap"
          >
            Start Your Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}