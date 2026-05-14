export default function LocationsMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-map-pin-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Find Us</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            Our Coverage Area
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Based in Montgomery, MA — we serve the full Western Massachusetts region including Westfield, Huntington, Russell, and surrounding communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.45!2d-72.7858945!3d42.1768609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e0c4e1a5b5e5%3A0x1!2sWestfield%2C%20MA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trimming Edge Service Area Western Massachusetts"
            ></iframe>
          </div>

          {/* Area Details */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Service Areas</h3>
              <ul className="space-y-3">
                {['Westfield, MA', 'Huntington, MA', 'Russell, MA', 'Montgomery, MA (Home Base)'].map((area, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <i className="ri-map-pin-fill text-primary-600"></i>
                    <span className="text-sm text-gray-700 font-medium">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4">Not on the list? Call us — we may still service your area.</p>
            </div>

            <div className="bg-primary-600 rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-lg mb-2">Ready to Get Started?</h3>
              <p className="text-sm text-primary-100 mb-4">Call or text for a free estimate in your area.</p>
              <a
                href="tel:+14135519653"
                className="flex items-center justify-center space-x-2 px-5 py-3 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line"></i>
                <span>(413) 551-9653</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between"><span>Mon–Fri</span><span className="font-medium">8AM – 6PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium">9AM – 5PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-gray-400">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
