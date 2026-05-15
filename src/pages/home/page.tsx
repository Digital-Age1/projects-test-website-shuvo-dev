import { useSEO, SITE_URL } from '@/hooks/useSEO';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import Process from './components/Process';
import SpecialOffer from './components/SpecialOffer';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import home from '@/content/home.json';

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/`,
    name: 'Trimming Edge',
    description: 'Professional lawn care and landscaping services in Westfield, Montgomery, Russell, and Huntington, MA.',
    url: `${SITE_URL}/`,
    telephone: '+14135519653',
    priceRange: '$$',
    image: `${SITE_URL}${home.hero.image}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Montgomery',
      addressLocality: 'Montgomery',
      addressRegion: 'MA',
      postalCode: '01050',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '42.2768609',
      longitude: '-72.6358945',
    },
    areaServed: [
      { '@type': 'City', name: 'Huntington', addressRegion: 'MA' },
      { '@type': 'City', name: 'Montgomery', addressRegion: 'MA' },
      { '@type': 'City', name: 'Russell', addressRegion: 'MA' },
      { '@type': 'City', name: 'Westfield', addressRegion: 'MA' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '22' },
    contactPoint: { '@type': 'ContactPoint', telephone: '+14135519653', contactType: 'customer service', availableLanguage: 'English' },
    sameAs: ['https://www.google.com/maps/place/Trimming+Edge'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How often should I have my lawn mowed?', acceptedAnswer: { '@type': 'Answer', text: 'During peak growing season, we recommend weekly mowing to maintain optimal lawn health and appearance. In slower growth periods, bi-weekly service may be sufficient.' } },
      { '@type': 'Question', name: 'Do you offer free estimates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! We provide completely free, no-obligation estimates for all our services. Call us at (413) 551-9653 or fill out our online form.' } },
      { '@type': 'Question', name: 'Are you licensed and insured?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Trimming Edge is fully licensed, bonded, and insured to protect both our team and your property.' } },
      { '@type': 'Question', name: 'What areas do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Huntington, Montgomery, Russell, and Westfield in Western Massachusetts.' } },
    ],
  },
];

export default function HomePage() {
  useSEO({
    title: 'Lawn Care & Landscaping Montgomery MA | Trimming Edge',
    description: 'Professional lawn care & landscaping in Montgomery, Huntington, Westfield & Russell MA. Mowing, mulching, seasonal cleanups & more. 5-star rated. Call (413) 551-9653 for a free estimate.',
    keywords: 'lawn care Montgomery MA, landscaping Montgomery Massachusetts, lawn mowing Western MA, mulching services MA, seasonal cleanup Hampden County, Trimming Edge',
    canonical: '/',
    ogImage: `${SITE_URL}${home.hero.image}`,
    schemaJson: homeSchema,
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <ServiceArea />
        <Process />
        <SpecialOffer />
        <FAQ />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
