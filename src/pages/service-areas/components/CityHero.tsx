interface CityHeroProps {
  cityName: string;
  state: string;
}

export default function CityHero({ cityName, state }: CityHeroProps) {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20lush%20green%20residential%20lawn%20in%20a%20small%20New%20England%20town%2C%20perfectly%20mowed%20grass%2C%20mature%20trees%20lining%20the%20street%2C%20classic%20colonial%20homes%2C%20summer%20afternoon%20golden%20light%2C%20Massachusetts%20neighborhood%2C%20wide%20angle%2C%20no%20people%2C%20professional%20landscaping%2C%20vibrant%20green%20turf&width=1920&height=800&seq=te_cityhero_01&orientation=landscape"
          alt={`Lawn Care in ${cityName}, ${state}`}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
            <i className="ri-map-pin-line text-white text-sm"></i>
            <span className="text-sm font-semibold text-white">{state} Service Area</span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white mb-4 leading-tight">
            Lawn Care in {cityName}, {state}
          </h1>
          <p className="text-xl text-white/90 max-w-xl mb-8 leading-relaxed drop-shadow">
            Professional lawn care &amp; landscaping services in {cityName}. Locally owned, family-operated, 5-star rated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+14135519653"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              (413) 551-9653
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              Free Estimate
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-star-fill text-yellow-400"></i>
              <span className="text-sm font-medium">5.0 Google Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-shield-check-line text-primary-300"></i>
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <i className="ri-heart-line text-primary-300"></i>
              <span className="text-sm font-medium">Locally Owned Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
