import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'Terms of Service | Trimming Edge Lawn Care',
    description: 'Read the Terms of Service for Trimming Edge Lawn Care. Learn about our service policies, SMS consent, commercial agreements, and booking terms in Western Massachusetts.',
    keywords: 'terms of service, Trimming Edge, lawn care terms, service agreement Western MA, landscaping contract Massachusetts',
    canonical: '/terms-and-conditions',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/terms-and-conditions`,
      url: `${SITE_URL}/terms-and-conditions`,
      name: 'Terms of Service',
      description: 'Terms of Service for Trimming Edge Lawn Care.',
    },
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">

          <section>
            <div className="space-y-4 text-base leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Mowing Service</h2>
              <p>
                We mow lawns up to 6 inches. Lawns more than 6 inches are subject to overgrown mowing fees.
                Please ensure all items are picked up in the yard — toys, sticks &amp; branches, lawn chairs &amp; furniture,
                and pet waste — on the days we service your property. If pet waste is an issue, we do offer the service
                for an extra fee. Fees may apply for items and excess waste left in the yard.
              </p>
              <p>
                Quotes are valid for the next 30 days, after which values may be subject to change.
                This pricing assumes that your lawn is not overgrown beyond 6 inches, that obstacles
                (ex: large objects, cars, dogs), and debris (ex: children&apos;s toys, trash, dog poop) have been removed
                from the lawn, and that overall the lawn is in acceptable condition to complete the selected scope of work.
                If the lawn is overgrown or there is excess pet waste in the yard, it will require additional cost,
                which could delay the service.
              </p>
              <p>
                Please cancel any appointment 24 hours before your appointment date to avoid being charged for the appointment.
                Unpaid invoices will be subject to collection. A $35 late fee will be charged.
                Accounts will be charged off and sent to collections after 30 days with an additional $35 collection fee.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">SMS Consent</h3>
              <p>
                By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from Trimming Edge.
                This includes SMS messages for conversations (external). Message frequency varies. Message and data rates may apply.
                See privacy policy at{' '}
                <a href="https://www.trimmingedge.com/privacy-policy" className="text-primary-600 hover:underline" rel="nofollow">https://www.trimmingedge.com/privacy-policy</a>.
                Message HELP for help. Reply STOP to any message to opt out.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Types of SMS Communications</h3>
              <p>
                If you opt in to receive messages from Trimming Edge, you may receive texts about conversational purposes.
                Standard message rates may apply.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Message Frequency</h3>
              <p>
                You may receive approximately 1 SMS message per month.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Carrier Charges</h3>
              <p>
                Message and data rates may apply based on your mobile carrier and location.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Opt-In Methods</h3>
              <p>
                You can opt in via the following methods: We get consent verbally by asking,
                &quot;Do you agree to receive conversations (external) text messages from Trimming Edge.
                Reply STOP to opt-out; Reply HELP for support; Message &amp; data rates may apply;
                Messaging frequency may vary. Visit{' '}
                <a href="https://www.trimmingedge.com/privacy-policy" className="text-primary-600 hover:underline" rel="nofollow">https://www.trimmingedge.com/privacy-policy</a>{' '}
                to see our privacy policy and{' '}
                <a href="https://www.trimmingedge.com/terms-and-conditions" className="text-primary-600 hover:underline" rel="nofollow">https://www.trimmingedge.com/terms-and-conditions</a>{' '}
                for our Terms of Service.&quot;
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Opt-Out Instructions</h3>
              <p>
                You may opt out at any time by replying STOP to any message. To resume receiving texts, reply START.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Help</h3>
              <p>
                If you need assistance, reply HELP or contact us at{' '}
                <a href="https://www.trimmingedge.com" className="text-primary-600 hover:underline" rel="nofollow">www.TrimmingEdge.com</a>.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Disclosures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Message frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>Reply STOP to cancel.</li>
                <li>Reply HELP for assistance.</li>
                <li>Visit our website to review our <a href="https://www.trimmingedge.com/privacy-policy" className="text-primary-600 hover:underline" rel="nofollow">Privacy Policy</a> and <a href="https://www.trimmingedge.com/terms-and-conditions" className="text-primary-600 hover:underline" rel="nofollow">Terms of Service</a>.</li>
              </ul>
            </div>
          </section>

          <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-600">
              For our full <Link to="/privacy-policy" className="text-primary-600 font-semibold hover:underline">Privacy Policy</Link>, including details on data collection, cookies, embedded content, and your rights, please visit our dedicated privacy page.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: May 2026. For questions about these terms, contact us at{' '}
            <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a>.
          </p>
        </div>
      </div>

      {/* Back to Home */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors font-medium"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}