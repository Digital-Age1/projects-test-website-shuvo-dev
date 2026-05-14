import { Link } from 'react-router-dom';

export default function AboutProof() {
  return (
    <section className="bg-primary-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Proof That We Deliver
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                        five-star reviews on Google and counting. Here is what people across Western Massachusetts say about working with Trimming Edge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: 'Absolutely incredible service. David and Amanda treat our property like it is their own. The edging is crisp, the lawn is perfectly manicured, and they are always on time.',
              author: 'Melissa T.',
              location: 'Westfield, MA',
            },
            {
              quote: 'We have been using Trimming Edge for over a year now and could not be happier. Professional, reliable, and our yard has never looked better. Worth every penny.',
              author: 'James L.',
              location: 'Huntington, MA',
            },
            {
              quote: 'After trying three other lawn services, we finally found Trimming Edge. They are the first company that actually listened to what we wanted and delivered exactly that.',
              author: 'Rachel H.',
              location: 'Russell, MA',
            },
          ].map((t) => (
            <div key={t.author} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
              </div>
              <p className="text-white/90 mb-4 leading-relaxed">{t.quote}</p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-primary-200">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-white/10 rounded-full px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold">5.0</div>
              <div className="text-sm text-primary-100">Google Rating</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">5.0</div>
              <div className="text-sm text-primary-100">Google Rating</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-primary-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}