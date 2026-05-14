import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';

const instagramPosts = [
  {
    src: 'https://readdy.ai/api/search-image?query=beautifully%20manicured%20residential%20front%20yard%20with%20fresh%20green%20lawn%2C%20colorful%20flower%20beds%2C%20trimmed%20hedges%2C%20and%20stone%20pathway%2C%20professional%20landscaping%20work%20result&width=600&height=600&seq=work1&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: 'a week ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=professional%20hedge%20trimming%20work%20showing%20perfectly%20shaped%20boxwood%20hedges%20in%20a%20residential%20garden%2C%20clean%20geometric%20lines%2C%20green%20manicured%20bushes&width=600&height=600&seq=work2&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=fresh%20mulch%20installation%20in%20flower%20beds%20with%20dark%20brown%20shredded%20hardwood%20mulch%2C%20colorful%20perennials%20and%20shrubs%2C%20neatly%20edged%20garden%20borders&width=600&height=600&seq=work3&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=commercial%20property%20landscaping%20with%20manicured%20green%20lawn%2C%20decorative%20shrubs%2C%20and%20modern%20office%20building%20entrance%2C%20professional%20grounds%20maintenance&width=600&height=600&seq=work4&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=residential%20backyard%20transformation%20with%20new%20sod%20installation%2C%20lush%20green%20grass%20lawn%2C%20trimmed%20borders%20and%20fresh%20landscaping%20work%20completed&width=600&height=600&seq=work5&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=seasonal%20fall%20cleanup%20with%20neatly%20raked%20leaves%2C%20well-maintained%20autumn%20lawn%2C%20tidy%20garden%20beds%2C%20professional%20yard%20maintenance%20in%20Western%20Massachusetts&width=600&height=600&seq=work6&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=lawn%20edging%20work%20showing%20crisp%20clean%20borders%20between%20grass%20and%20driveway%2C%20professional%20landscape%20edging%20detail%2C%20well-maintained%20residential%20property&width=600&height=600&seq=work7&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=beautiful%20residential%20front%20yard%20with%20new%20landscape%20design%20installation%2C%20colorful%20plants%2C%20decorative%20stones%2C%20and%20perfectly%20maintained%20green%20grass&width=600&height=600&seq=work8&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=bush%20trimming%20service%20result%20showing%20neatly%20pruned%20shrubs%20and%20ornamental%20bushes%20in%20a%20residential%20landscape%2C%20professional%20pruning%20work&width=600&height=600&seq=work9&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=spring%20lawn%20renovation%20with%20overseeding%2C%20fresh%20green%20grass%20growing%2C%20professional%20lawn%20care%20service%20in%20Western%20Massachusetts%20residential%20yard&width=600&height=600&seq=work10&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=large%20property%20landscape%20maintenance%20with%20wide%20open%20green%20lawn%2C%20trimmed%20trees%20and%20shrubs%2C%20professional%20commercial%20lawn%20mowing%20service%20result&width=600&height=600&seq=work11&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=residential%20property%20with%20complete%20landscape%20maintenance%2C%20green%20lawn%2C%20fresh%20mulch%20beds%2C%20trimmed%20hedges%2C%20and%20colorful%20flowers%20in%20Western%20Massachusetts&width=600&height=600&seq=work12&orientation=squarish',
    alt: 'Trimming Edge lawn care work',
    date: '3 weeks ago',
  },
];

export default function OurWorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-gallery-line text-primary-400"></i>
              <span className="text-sm font-semibold text-primary-400">Portfolio</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Our Work
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Browse our gallery of completed landscaping and lawn maintenance projects. See the quality and detail Trimming Edge brings to every local property.
            </p>
          </div>
        </section>

        {/* Instagram Feed Header */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 rounded-2xl">
                  <i className="ri-instagram-line text-white text-2xl"></i>
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-gray-900">TrimmingEdge.com</div>
                  <div className="text-sm text-gray-500">32 Posts on Instagram</div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/trimmingedge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap"
              >
                Follow Us
              </a>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {instagramPosts.map((post, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/trimmingedge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img
                    src={post.src}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 flex items-center justify-center bg-white/90 rounded-full">
                        <i className="ri-instagram-line text-gray-900 text-lg"></i>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-instagram-line text-white text-xs"></i>
                      </div>
                      <span className="text-white text-xs font-medium">trimmingedge</span>
                      <span className="text-white/60 text-xs ml-auto">{post.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://www.instagram.com/trimmingedge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-lg font-bold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <i className="ri-instagram-line mr-2 text-xl"></i>
                View All on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Want Results Like These?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Call us today for a free estimate and let us transform your property.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+14135519653"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                Call (413) 551-9653
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
