import { Link } from 'react-router-dom';

export default function ServicesIncludes() {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
              What Is Included With Every Service?
            </h2>
            <div className="space-y-4 mb-8">
              {[
                'Complete mowing with professional-grade equipment',
                'Precision string trimming along all edges and obstacles',
                'Full debris cleanup and blowing to leave your property spotless',
                'Complimentary property inspection during every visit',
                'Photo documentation of completed work when requested',
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <i className="ri-check-line text-primary-400 mt-0.5"></i>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-primary-50 transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Get Started Today
            </Link>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold">5.0</div>
                <div className="text-xs text-primary-100">Star Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold">5.0</div>
                <div className="text-xs text-primary-100">Perfect Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold">6</div>
                <div className="text-xs text-primary-100">Towns Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold">100%</div>
                <div className="text-xs text-primary-100">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}