import { useState } from 'react';

const testimonials = [
  {
    quote: 'Trimming Edge completely transformed our yard. David and Amanda are incredibly reliable and the results speak for themselves. Best lawn care service we have ever used.',
    author: 'Sarah M.',
    location: 'Westfield, MA',
  },
  {
    quote: 'Professional, punctual, and they actually care about your property. Our lawn has never looked better. Highly recommend to anyone in Western MA.',
    author: 'Mike R.',
    location: 'Russell, MA',
  },
  {
    quote: 'I have used many lawn services over the years, but Trimming Edge is on another level. Attention to detail is unmatched and they always go above and beyond.',
    author: 'Jennifer K.',
    location: 'Montgomery, MA',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-primary-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
              <i className="ri-star-fill text-yellow-400 text-sm mr-1"></i>
              <span className="text-sm font-semibold text-white">5.0</span>
            </div>
            <span className="text-sm font-semibold text-white/80">Google Reviews</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            What Our Customers Say
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Every review is 5 stars. Real customers, real results — across Westfield, Huntington, Russell &amp; Montgomery, MA.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm mb-8">
          <i className="ri-double-quotes-l text-4xl text-primary-400 mb-4"></i>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            {testimonials[active].quote}
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
              {testimonials[active].author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{testimonials[active].author}</p>
              <p className="text-sm text-primary-200">{testimonials[active].location}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === active ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}