import { useEffect } from 'react';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import AboutValues from './components/AboutValues';
import AboutProof from './components/AboutProof';
import AboutFAQ from './components/AboutFAQ';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

function AboutWorkGallery() {
  const shots = [
    {
      src: 'https://readdy.ai/api/search-image?query=close%20up%20of%20a%20lawn%20edger%20creating%20a%20clean%20sharp%20edge%20between%20grass%20and%20concrete%20driveway%2C%20green%20lawn%2C%20residential%20yard%2C%20bright%20daylight&width=700&height=500&seq=te319_06&orientation=landscape',
      alt: 'Professional lawn edging service',
      label: 'Precision Edging',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=commercial%20riding%20mower%20cutting%20perfect%20stripes%20on%20large%20lush%20green%20residential%20lawn%20in%20Western%20Massachusetts%2C%20beautiful%20straight%20mowing%20lines%2C%20bright%20morning%20sunlight%2C%20vibrant%20healthy%20turf%2C%20no%20people%20visible%20just%20equipment&width=700&height=500&seq=gallery_mow01&orientation=landscape',
      alt: 'Lawn mowing with commercial equipment',
      label: 'Lawn Mowing',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=neatly%20trimmed%20ornamental%20hedges%20and%20shrubs%20along%20beautiful%20New%20England%20home%20foundation%2C%20professional%20hedge%20trimming%20result%2C%20crisp%20clean%20lines%2C%20flowering%20plants%2C%20well%20maintained%20garden%20bed%2C%20bright%20daylight&width=700&height=500&seq=gallery_shrub01&orientation=landscape',
      alt: 'Hedge and shrub trimming',
      label: 'Shrub Trimming',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=freshly%20installed%20dark%20mulch%20garden%20beds%20around%20trees%20and%20shrubs%20in%20residential%20landscape%20Western%20Massachusetts%2C%20clean%20defined%20edges%2C%20vibrant%20green%20plants%2C%20neat%20decorative%20border%2C%20professional%20landscaping%20result%2C%20bright%20daylight&width=700&height=500&seq=gallery_mulch01&orientation=landscape',
      alt: 'Mulch bed installation',
      label: 'Mulching & Beds',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=lawn%20care%20equipment%20trailer%20loaded%20with%20commercial%20mowers%20string%20trimmers%20and%20blowers%20parked%20on%20residential%20street%2C%20green%20branded%20truck%2C%20professional%20setup%20ready%20for%20service%2C%20New%20England%20suburban%20neighborhood%2C%20bright%20morning&width=700&height=500&seq=gallery_truck01&orientation=landscape',
      alt: 'Trimming Edge professional equipment',
      label: 'Professional Equipment',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=beautiful%20lush%20green%20lawn%20after%20professional%20landscaping%20service%20completed%2C%20perfectly%20mowed%20and%20edged%20residential%20yard%2C%20clean%20curb%20appeal%2C%20vibrant%20healthy%20grass%2C%20flowers%20along%20foundation%2C%20New%20England%20home%20exterior%2C%20bright%20summer%20day&width=700&height=500&seq=gallery_result01&orientation=landscape',
      alt: 'Completed lawn care result',
      label: 'Completed Results',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
            <i className="ri-gallery-line text-primary-600"></i>
            <span className="text-sm font-semibold text-primary-600">Our Work</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-4">
            See the Trimming Edge Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every property we service gets the same treatment — precision, care, and a clean finish that makes your home stand out in the neighborhood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {shots.map((shot) => (
            <div key={shot.label} className="group relative rounded-2xl overflow-hidden h-56">
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-sm font-semibold">{shot.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden h-64">
          <img
            src="https://readdy.ai/api/search-image?query=wide%20shot%20of%20beautifully%20completed%20lawn%20care%20on%20stunning%20New%20England%20residential%20property%2C%20perfectly%20mowed%20striped%20lawn%20crisp%20edging%20clean%20garden%20beds%20fresh%20mulch%2C%20golden%20hour%20warm%20light%2C%20vibrant%20lush%20property%2C%20neighborhood%20curb%20appeal%20at%20its%20finest&width=1600&height=600&seq=gallery_banner01&orientation=landscape"
            alt="Trimming Edge completed lawn care result"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent flex items-center">
            <div className="px-12">
              <div className="text-white font-display font-bold text-3xl mb-2">Every Property. Every Visit.</div>
              <div className="text-white/80 text-lg">We treat your lawn like it's our own.</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutWhatsDifferent() {
  const differentiators = [
    {
      icon: 'ri-user-heart-line',
      title: 'You Work Directly With the Owners',
      description: 'No call centers, no middlemen. When you call Trimming Edge, David or Amanda picks up. That direct relationship means faster answers, better service, and real accountability.',
    },
    {
      icon: 'ri-home-smile-line',
      title: 'We Live In the Community We Serve',
      description: "We're based right here in Montgomery, MA. When we drive through Westfield or Huntington, we see the lawns we care for. That local pride shows in every job we do.",
    },
    {
      icon: 'ri-award-fill',
      title: 'Perfect 5-Star Record — Every Review',
      description: "Not almost-perfect. Perfect. Every Google review we've ever received is a 5-star review. That's not luck — it's the result of genuinely caring about each customer's property.",
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Consistent Scheduling, Every Time',
      description: 'We show up on the day we say we will. Consistent scheduling builds trust, and trust is what keeps our customers coming back season after season.',
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Licensed, Insured & 100% Accountable',
      description: 'Fully licensed and insured in Massachusetts. We protect your property, your investment, and your peace of mind on every single visit.',
    },
    {
      icon: 'ri-chat-smile-2-line',
      title: 'Clear Communication, No Surprises',
      description: "We give you honest estimates, explain what's included, and communicate proactively. No hidden fees, no surprises — just straight-forward, professional service.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <i className="ri-star-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Why Customers Choose Us</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              What Makes Trimming Edge Different
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              There are a lot of lawn care companies in Western Massachusetts. Here's why homeowners and businesses across Westfield, Huntington, Russell, and Montgomery keep coming back to us — and why they refer their neighbors.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-72">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20green%20lawn%20care%20truck%20and%20branded%20equipment%20trailer%20parked%20in%20front%20of%20beautiful%20large%20well-kept%20residential%20property%20in%20Western%20Massachusetts%2C%20commercial%20mowers%20visible%2C%20clean%20professional%20setup%2C%20bright%20sunny%20day%2C%20green%20grass%20perfectly%20maintained%2C%20no%20people&width=900&height=600&seq=diff_truck01&orientation=landscape"
              alt="Trimming Edge professional equipment and service"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center space-x-3 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="ri-star-fill text-accent-500 text-sm"></i>
                  ))}
                </div>
              <span className="text-sm font-semibold text-gray-900">
                  Five-Star Google Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0 group-hover:bg-primary-600 transition-colors">
                <i className={`${item.icon} text-2xl text-primary-600 group-hover:text-white transition-colors`}></i>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutServiceArea() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <i className="ri-map-pin-line text-primary-600"></i>
              <span className="text-sm font-semibold text-primary-600">Local Experts</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Rooted in Western Massachusetts
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We're not a franchise or a big-box lawn service. We're your neighbors — based right here in Montgomery, MA, serving the communities we live in every day.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              That local connection means we understand your soil, your climate, your property needs, and your neighborhood. We're invested in making Western Massachusetts beautiful — because it's our home too.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Westfield, MA', 'Huntington, MA', 'Russell, MA', 'Montgomery, MA'].map((area) => (
                <div key={area} className="flex items-center space-x-2">
                  <i className="ri-checkbox-circle-fill text-primary-600"></i>
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>
            <Link
              to="/locations"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
            >
              View Service Area Details <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93692.45!2d-72.7858945!3d42.1768609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e0c4e1a5b5e5%3A0x1!2sWestfield%2C%20MA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trimming Edge Western MA Service Area"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <i className="ri-heart-line text-5xl text-primary-400 mb-4 block"></i>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
          Let's Take Care of Your Property
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Experience the Trimming Edge difference — personal, professional, and backed by a perfect 5-star reputation.
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
            See All Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'About Trimming Edge | Locally Owned Lawn Care Company Montgomery MA',
    description: 'Learn about Trimming Edge — a locally operated lawn care company based in Montgomery, MA. Serving Westfield, Huntington, Russell & surrounding areas with 5-star rated service.',
    keywords: 'about Trimming Edge, locally owned lawn care, Montgomery MA landscaping, local lawn care Western Massachusetts',
    canonical: '/about',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about`,
      url: `${SITE_URL}/about`,
      name: 'About Trimming Edge',
      description: 'Locally operated lawn care and landscaping company based in Montgomery, MA.',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Trimming Edge',
        foundingLocation: { '@type': 'Place', name: 'Montgomery, MA' },
        description: 'Professional lawn care and landscaping services across Western Massachusetts.',
        telephone: '+14135519653',
        url: `${SITE_URL}/`,
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutWorkGallery />
        <AboutWhatsDifferent />
        <AboutValues />
        <AboutServiceArea />
        <AboutProof />
        <AboutFAQ />
        <AboutCTA />
      </main>
      <PageFooter />
    </div>
  );
}
