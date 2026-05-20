import { useEffect, useMemo, useState } from 'react';
import testimonialsContent from '@/content/testimonials.json';

const DEFAULT_COLOR = 'bg-emerald-500';
const ALLOWED_COLORS = new Set([
  'bg-emerald-500',
  'bg-teal-500',
  'bg-green-600',
  'bg-lime-600',
  'bg-blue-500',
  'bg-purple-500',
]);

type RawTestimonial = Partial<(typeof testimonialsContent.items)[number]>;

function getInitials(name?: string) {
  if (!name || typeof name !== 'string') return '?';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function normalizeTestimonial(testimonial: RawTestimonial) {
  const name = testimonial.name || 'Customer';
  const initials = getInitials(testimonial.name);
  const rating = Number(testimonial.rating);
  const safeRating = Number.isFinite(rating) ? Math.min(Math.max(rating, 0), 5) : 5;

  return {
    id: testimonial.id,
    name,
    location: testimonial.location || 'Google Review',
    rating: safeRating,
    text: testimonial.text || '',
    initials,
    color: testimonial.color && ALLOWED_COLORS.has(testimonial.color) ? testimonial.color : DEFAULT_COLOR,
  };
}

export default function Testimonials() {
  const testimonials = useMemo(
    () => testimonialsContent.items.map(normalizeTestimonial).filter((testimonial) => testimonial.text),
    []
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (active >= testimonials.length) setActive(0);
  }, [active, testimonials.length]);

  if (testimonials.length === 0) return null;

  const activeTestimonial = testimonials[active] || testimonials[0];

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
            {activeTestimonial.text}
          </p>
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${activeTestimonial.color} rounded-full flex items-center justify-center text-sm font-bold`}>
              {activeTestimonial.initials || getInitials(activeTestimonial.name)}
            </div>
            <div>
              <p className="font-semibold">{activeTestimonial.name}</p>
              <p className="text-sm text-primary-200">{activeTestimonial.location}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          {testimonials.map((testimonial, idx) => (
            <button
              key={`${testimonial.name || 'testimonial'}-${testimonial.id ?? idx}`}
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
