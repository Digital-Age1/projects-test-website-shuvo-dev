import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <i className="ri-mail-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Get In Touch</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Request Your Free Estimate
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours with a detailed quote for your <strong>lawn care</strong> or <strong>landscaping</strong> project.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                  <i className="ri-phone-line text-xl text-primary-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+14135519653" className="text-gray-600 hover:text-primary-600 transition-colors">
                    (413) 551-9653
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                  <i className="ri-mail-line text-xl text-primary-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@trimmingedge.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                    info@trimmingedge.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                  <i className="ri-time-line text-xl text-primary-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                <i className="ri-shield-check-line text-primary-600"></i>
                <span className="text-sm font-medium text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                <i className="ri-star-fill text-accent-500"></i>
                <span className="text-sm font-medium text-gray-700">5.0/5 Google Rating</span>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-3xl p-8 lg:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl mb-6">
              <i className="ri-file-list-3-line text-3xl text-primary-600"></i>
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Get Your Free Estimate
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Use our professional Jobber form to request a detailed quote. It only takes a few minutes and we will respond within 24 hours.
            </p>
            <Link
              to="/contact-us"
              className="px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              Request Free Estimate
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Or call us directly at <a href="tel:+14135519653" className="text-primary-600 font-semibold">(413) 551-9653</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}