interface CityAboutProps {
  cityName: string;
  state: string;
  description: string;
  title: string;
  secondaryText: string;
  highlights: string[];
}

export default function CityAbout({ cityName, state, description, title, secondaryText, highlights }: CityAboutProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-5 border border-gray-100">
              <i className="ri-map-pin-2-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Serving {cityName}, {state}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {description}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {secondaryText}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <i className="ri-checkbox-circle-fill text-primary-600"></i>
                  <span className="text-sm font-medium text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'ri-star-fill', value: '5.0', label: 'Google Rating' },
              { icon: 'ri-shield-check-line', value: '100%', label: 'Licensed & Insured' },
              { icon: 'ri-heart-line', value: 'Women', label: 'Owned & Operated' },
              { icon: 'ri-time-line', value: 'Same Week', label: 'Scheduling' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-50 rounded-xl mx-auto mb-3">
                  <i className={`${stat.icon} text-2xl text-primary-600`}></i>
                </div>
                <div className="font-display font-bold text-2xl text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
