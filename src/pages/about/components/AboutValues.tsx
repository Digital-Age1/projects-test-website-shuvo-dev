const values = [
  {
    icon: 'ri-award-line',
    title: 'Quality First',
    description: 'We never rush. Every mow, every edge, every cleanup is done with precision and care. Your property deserves our best work — every single visit.',
  },
  {
    icon: 'ri-time-line',
    title: 'Reliability You Can Count On',
    description: 'We show up when we say we will. Consistency is at the heart of great lawn care, and our customers know they can count on us week after week.',
  },
  {
    icon: 'ri-group-line',
    title: 'Customer First, Always',
    description: 'From your first call to the finished job, we treat you like a neighbor — because you are one. Your satisfaction is not just a goal, it\'s our guarantee.',
  },
  {
    icon: 'ri-heart-3-line',
    title: 'Community Pride',
    description: 'We\'re based in Montgomery, MA and care deeply about the communities we serve. Beautiful properties make better neighborhoods — and that matters to us.',
  },
];

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
            What Guides Everything We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every decision we make — from how we schedule visits to how we communicate — comes back to these core values.
          </p>
        </div>

        {/* Visual accent image */}
        <div className="relative rounded-3xl overflow-hidden h-56 mb-12">
          <img
            src="https://readdy.ai/api/search-image?query=freshly%20mowed%20and%20edged%20lawn%20at%20golden%20hour%2C%20New%20England%20home%2C%20garden%20beds%20with%20dark%20mulch%2C%20warm%20afternoon%20light%2C%20no%20people%2C%20beautiful%20curb%20appeal&width=1600&height=500&seq=te319_07&orientation=landscape"
            alt="Trimming Edge quality lawn care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-800/40 to-transparent flex items-center">
            <div className="px-10 max-w-xl">
              <p className="text-white font-display font-bold text-2xl leading-snug">
                "We treat every property as if it were our own."
              </p>
              <p className="text-primary-200 mt-2 text-sm">— David & Amanda, Founders</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 text-center hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-primary-100 rounded-2xl mx-auto mb-5">
                <i className={`${v.icon} text-3xl text-primary-600`}></i>
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