export default function AboutStory() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-primary-600 rounded-3xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-4xl font-bold text-white">5.0</div>
                  <div className="text-sm text-primary-100">Google Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">5.0</div>
                  <div className="text-sm text-primary-100">Perfect Rating</div>
                </div>
              </div>
              <p className="text-primary-100 text-sm">
                Every single review is 5 stars. That consistency is not an accident.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Trimming Edge started with a simple belief: that lawn care should be personal, professional, and consistent. David and Amanda founded the company in Montgomery, MA with a single truck, a few tools, and a commitment to treating every property like their own.
              </p>
              <p className="mb-4">
                Word spread quickly. Neighbors told neighbors. Today, Trimming Edge serves homeowners and businesses across Westfield, Huntington, Russell, Montgomery, and surrounding areas — all while maintaining the same hands-on approach that made us successful from day one.
              </p>
              <p>
                As a <strong>locally owned business</strong>, we take extra pride in proving that quality, attention to detail, and reliability are what define great lawn care — and we have built a perfect 5-star reputation to prove it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}