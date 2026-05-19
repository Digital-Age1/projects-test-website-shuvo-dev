import about from '@/content/about.json';

const valueIcons: Record<string, string> = {
  award: 'ri-award-line',
  time: 'ri-time-line',
  group: 'ri-group-line',
  heart: 'ri-heart-3-line',
};

export default function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <i className="ri-compass-3-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Our Values</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            {about.valuesTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {about.valuesSubtitle}
          </p>
        </div>

        {/* Visual accent image */}
        <div className="relative rounded-3xl overflow-hidden h-56 mb-12">
          <img
            src={about.valuesImage}
            alt={about.valuesImageAlt}
            className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-800/40 to-transparent flex items-center">
            <div className="px-10 max-w-xl">
              <p className="text-white font-display font-bold text-2xl leading-snug">
                {about.valuesQuote}
              </p>
              <p className="text-primary-200 mt-2 text-sm">{about.valuesQuoteAttribution}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 text-center hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-5">
                <i className={`${valueIcons[v.iconKey] || 'ri-award-line'} text-3xl text-primary-600`}></i>
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 mb-3">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
