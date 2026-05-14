import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import { useSEO, SITE_URL } from '@/hooks/useSEO';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'Privacy Policy | Trimming Edge Lawn Care',
    description: 'Read the Privacy Policy for Trimming Edge Lawn Care. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, Trimming Edge, data protection, lawn care privacy',
    canonical: '/privacy-policy',
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/privacy-policy`,
      url: `${SITE_URL}/privacy-policy`,
      name: 'Privacy Policy',
      description: 'Privacy Policy for Trimming Edge Lawn Care.',
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <div className="bg-primary-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
            <div className="space-y-4 text-base leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p>
                Our website address is: <strong>https://TrimmingEdge.com</strong><br />
                Trimming Edge Lawn Care<br />
                Phone: <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a>
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Comments</h3>
              <p>
                When visitors leave comments on the site we collect the data shown in the comments form,
                and also the visitor&apos;s IP address and browser user agent string to help spam detection.
                An anonymized string created from your email address (also called a hash) may be provided
                to the Gravatar service to see if you are using it. The Gravatar service privacy policy
                is available here:{' '}
                <a href="https://automattic.com/privacy/" className="text-primary-600 hover:underline" rel="nofollow">https://automattic.com/privacy/</a>.
                After approval of your comment, your profile picture is visible to the public in the context of your comment.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Media</h3>
              <p>
                If you upload images to the website, you should avoid uploading images with embedded
                location data (EXIF GPS) included. Visitors to the website can download and extract any
                location data from images on the website.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Cookies</h3>
              <p>
                If you leave a comment on our site you may opt-in to saving your name, email address
                and website in cookies. These are for your convenience so that you do not have to fill
                in your details again when you leave another comment. These cookies will last for one year.
              </p>
              <p>
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies.
                This cookie contains no personal data and is discarded when you close your browser.
              </p>
              <p>
                When you log in, we will also set up several cookies to save your login information and your screen display choices.
                Login cookies last for two days, and screen options cookies last for a year. If you select &quot;Remember Me&quot;,
                your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
              </p>
              <p>
                If you edit or publish an article, an additional cookie will be saved in your browser.
                This cookie includes no personal data and simply indicates the post ID of the article you just edited.
                It expires after 1 day.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Embedded Content from Other Websites</h3>
              <p>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.).
                Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                These websites may collect data about you, use cookies, embed additional third-party tracking,
                and monitor your interaction with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged in to that website.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Who We Share Your Data With</h3>
              <p>
                If you request a password reset, your IP address will be included in the reset email.
                We do not share your data with third parties for marketing purposes.
                Trimming Edge will not sell, rent, or share the collected mobile numbers.
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
                All the above categories exclude text messaging originator opt-in data and consent;
                this information will not be shared with any third parties.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">How Long We Retain Your Data</h3>
              <p>
                If you leave a comment, the comment and its metadata are retained indefinitely.
                This is so we can recognize and approve any follow-up comments automatically instead of
                holding them in a moderation queue. For users that register on our website (if any),
                we also store the personal information they provide in their user profile.
                All users can see, edit, or delete their personal information at any time
                (except they cannot change their username). Website administrators can also see and edit that information.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">What Rights You Have Over Your Data</h3>
              <p>
                If you have an account on this site, or have left comments, you can request to receive
                an exported file of the personal data we hold about you, including any data you have provided to us.
                You can also request that we erase any personal data we hold about you.
                This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Data Collection for SMS</h3>
              <p>
                We will collect your name, email address, mailing address, and mobile phone number when you sign up for SMS updates.
                The information will be collected via the website contact form, email, rental agreement, or third-party reservation systems.
                We use your data solely for sending updates, promotions, and reminders related to our products or services.
                We protect your data with secure storage measures to prevent unauthorized access.
                We retain your information as long as you are subscribed to our SMS service. You may request deletion at any time.
              </p>
              <p>
                <strong>MESSAGE AND DATA RATES MAY APPLY.</strong> Your mobile carrier may charge fees for sending or receiving text messages,
                especially if you do not have an unlimited texting or data plan. Messages are recurring, and message frequency varies.
              </p>
              <p>
                Contact Trimming Edge Lawn Care at <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a> or{' '}
                <a href="mailto:info@trimmingedge.com" className="text-primary-600 hover:underline">info@trimmingedge.com</a> for HELP or to STOP receiving messages.
                You can opt out of the SMS list at any time by texting, emailing, or replying STOP or UNSUBSCRIBE to{' '}
                <a href="mailto:info@trimmingedge.com" className="text-primary-600 hover:underline">info@trimmingedge.com</a> or{' '}
                <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a>.
                After unsubscribing, you will receive a final SMS to confirm you have unsubscribed and we will remove
                your number from our list within 24 hours.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Location Data</h3>
              <p>
                We may collect and share anonymous location data. To customize our service for you,
                we and our partners may collect, use, and share precise location data, including the real-time
                geographic location of your computer or device. This location data is collected anonymously
                in a form that does not personally identify you and is used only to provide and improve our service.
                We may obtain your consent on your first use of the service.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Access &amp; Deletion</h3>
              <p>
                You can request to see or delete your personal data. You can sign into your account to see or delete
                any personally identifiable information we have stored, such as your name, address, email or phone number.
                You can also contact us by email to request to see or delete this information.
                We may keep data indefinitely. You may ask to have your data deleted at any time by calling our office at{' '}
                <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a>.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Sharing</h3>
              <p>
                We do not share personal information with anyone for any reason, unless requested by law enforcement.
                We never use your information for marketing or sell information for any reason.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Ad Tracking</h3>
              <p>
                Ad companies collect anonymous data. You can opt out. Ad companies may use and collect anonymous data
                about your interests to customize content and advertising here and in other sites and applications.
                Interest and location data may be linked to your device, but is not linked to your identity.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Vendors</h3>
              <p>
                Service providers access data on our behalf. In order to serve you, we may share your personal
                and anonymous information with other companies, including vendors and contractors. Their use
                of information is limited to these purposes, and subject to agreements that require them to keep
                the information confidential. Our vendors provide assurance that they take reasonable steps to safeguard
                the data they hold on our behalf, although data security cannot be guaranteed.
              </p>
              <p>
                Analytics companies may access anonymous data (such as your IP address or device ID) to help us
                understand how our services are used. They use this data solely on our behalf. They do not share it
                except in aggregate form; no data is shared as to any individual user.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Special Situations</h3>
              <p>
                Special situations may require disclosure of your data. To operate the service, we also may make
                identifiable and anonymous information available to third parties in these limited circumstances:
                (1) with your express consent, (2) when we have a good faith belief it is required by law,
                (3) when we have a good faith belief it is necessary to protect our rights or property,
                or (4) to any successor or purchaser in a merger, acquisition, liquidation, dissolution or sale of assets.
                Your consent will not be required for disclosure in these cases, but we will attempt to notify you,
                to the extent permitted by law to do so.
              </p>

              <h3 className="font-semibold text-gray-900 mt-6 mb-2">Policy Changes</h3>
              <p>
                Our privacy policy may change from time to time. Please check back here for updated information.
                Contact Trimming Edge Lawn Care at <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a> for HELP or to STOP receiving messages.
                You can opt out of the SMS list at any time by texting or replying STOP or UNSUBSCRIBE to{' '}
                <a href="tel:+14135519653" className="text-primary-600 hover:underline">(413) 551-9653</a>.
                After unsubscribing, we will remove your number from our list within 24 hours.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: May 2026. For questions about this privacy policy, contact us at{' '}
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
      </main>
      <PageFooter />
    </div>
  );
}