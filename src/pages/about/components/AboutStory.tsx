import about from '@/content/about.json';

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
              {about.storyTitle}
            </h2>
            <div className="prose prose-lg text-gray-600">
              {about.storyText.map((paragraph, index) => (
                <p key={paragraph} className={index < about.storyText.length - 1 ? 'mb-4' : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
