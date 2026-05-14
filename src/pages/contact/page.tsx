import { useEffect, useRef } from 'react';
import PageHeader from '@/components/feature/PageHeader';
import PageFooter from '@/components/feature/PageFooter';
import BusinessHours from './components/BusinessHours';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

export default function ContactPage() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: 'Contact Trimming Edge | Free Lawn Care Estimate Montgomery MA',
    description: 'Contact Trimming Edge for a free lawn care or landscaping estimate. Serving Westfield, Huntington, Russell & Montgomery MA. Call (413) 551-9653 or fill out our online form.',
    keywords: 'contact Trimming Edge, free lawn care estimate, landscaping quote Western MA, lawn care Montgomery MA',
    canonical: '/contact-us',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact-us`,
      url: `${SITE_URL}/contact-us`,
      name: 'Contact Trimming Edge',
      description: 'Request a free lawn care or landscaping estimate from Trimming Edge.',
      mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Trimming Edge',
        telephone: '+14135519653',
        email: 'info@trimmingedge.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Montgomery',
          addressRegion: 'MA',
          postalCode: '01050',
          addressCountry: 'US',
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '17:00' },
        ],
      },
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject Jobber embed stylesheet
    const existingLink = document.querySelector('link[href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
      link.media = 'screen';
      document.head.appendChild(link);
    }

    // Inject Jobber embed script
    const existingScript = document.querySelector('script[src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
      script.setAttribute('clienthub_id', 'da2b824e-c9bb-44de-96ad-55e97fa0a147-2247163');
      script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/da2b824e-c9bb-44de-96ad-55e97fa0a147/public/work_request/embedded_work_request_form?form_id=2247163');
      document.body.appendChild(script);
    }

    // Inject weatherwidget.io script
    const existingWeatherScript = document.querySelector('script[src="https://weatherwidget.io/js/widget.min.js"]');
    if (!existingWeatherScript) {
      const weatherScript = document.createElement('script');
      weatherScript.id = 'weatherwidget-io-js';
      weatherScript.src = 'https://weatherwidget.io/js/widget.min.js';
      document.body.appendChild(weatherScript);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=beautifully%20manicured%20residential%20lawn%20and%20garden%20with%20lush%20green%20grass%2C%20professional%20landscaping%2C%20vibrant%20flower%20beds%2C%20clean%20garden%20edging%2C%20warm%20golden%20hour%20sunlight%2C%20suburban%20home%20exterior%2C%20inviting%20outdoor%20space%2C%20no%20people%20visible%2C%20warm%20natural%20tones&width=1920&height=600&seq=te_contact_hero_v1&orientation=landscape"
              alt="Contact Trimming Edge Landscaping"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 to-black/50"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-mail-line text-white"></i>
              <span className="text-sm font-semibold text-white">Get In Touch</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
              Request Your Free Estimate
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Fill out the form below and we will get back to you within 24 hours with a detailed quote for your lawn care or landscaping project.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-6">
                  Contact Trimming Edge
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are here to help with all your lawn care and landscaping needs. Reach out by phone, or fill out the form to request your free estimate.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                      <i className="ri-phone-line text-xl text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+14135519653" className="text-gray-600 hover:text-primary-600 transition-colors">
                        (413) 551-9653
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                      <i className="ri-mail-line text-xl text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@trimmingedge.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                        info@trimmingedge.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                      <i className="ri-map-pin-line text-xl text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">Montgomery, MA 01050</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl flex-shrink-0">
                      <i className="ri-time-line text-xl text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <i className="ri-shield-check-line text-primary-600"></i>
                    <span className="text-sm font-medium text-gray-700">Licensed &amp; Insured</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <i className="ri-star-fill text-accent-500"></i>
                    <span className="text-sm font-medium text-gray-700">5.0/5 Google Rating</span>
                  </div>
                </div>

                {/* Live Open/Closed Widget */}
                <BusinessHours />
              </div>

              {/* Jobber Form */}
              <div className="bg-gray-50 rounded-3xl p-6 lg:p-8">
                <div
                  id="da2b824e-c9bb-44de-96ad-55e97fa0a147-2247163"
                  ref={formContainerRef}
                  className="w-full"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Widget */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                <i className="ri-sun-cloudy-line text-white"></i>
                <span className="text-sm font-semibold text-white">Local Weather</span>
              </div>
              <h2 className="font-display font-bold text-3xl text-white mb-2">
                Montgomery, MA Forecast
              </h2>
              <p className="text-white/60">
                Check conditions before scheduling your outdoor service
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <a
                className="weatherwidget-io"
                href="https://forecast7.com/en/42d29n72d86/01050/?unit=us"
                data-label_1="Trimming Edge"
                data-label_2="Montgomery, MA"
                data-font="Arial Black"
                data-icons="Climacons Animated"
                data-mode="Current"
                data-days="3"
                data-theme="dark"
                data-basecolor=""
                data-textcolor="#fcfdfc"
                data-highcolor="#fe002a"
                data-lowcolor="#6f82ff"
                data-suncolor="#fe842a"
                data-cloudcolor="#adadad"
                data-raincolor="#0690ee"
                data-snowcolor="#fffff6"
              >
                MONTGOMERY Montgomery, MA
              </a>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-0">
          <div className="w-full h-80">
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
        </section>
      </main>
      <PageFooter />
    </div>
  );
}