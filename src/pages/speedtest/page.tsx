import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';

export default function SpeedtestPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-speed-line text-primary-400"></i>
              <span className="text-sm font-semibold text-primary-400">Network Tools</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Network Speed Test
            </h1>
            <p className="text-lg text-gray-400">
              Test your internet speed — brought to you by Trimming Edge Technology &amp; DnA Technology.
            </p>
          </div>
        </section>

        {/* Speed Test Embed */}
        <section className="py-10 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Link
                to="/technology"
                className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors whitespace-nowrap"
              >
                <i className="ri-arrow-left-line mr-1"></i>
                Back to Technology Services
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-black">
              <iframe
                width="100%"
                height="650px"
                className="block w-full"
                style={{ border: 0 }}
                src="https://trimming-edge.speedtestcustom.com/"
                title="Trimming Edge Network Speed Test"
                allow="fullscreen"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://trimming-edge.speedtestcustom.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full border border-gray-700 hover:bg-gray-800 transition"
              >
                Open Speed Test
              </a>
            </div>
            <p className="text-gray-400 text-xs text-center mt-4">
              All trademarks of Ookla, LLC, including Speedtest®, are used under license.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
                About DnA Technology
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                In addition to lawn care, David also provides IT and computer repair services under the Wolf Enterprise name. This speed test tool is provided as a free resource for the community.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'ri-computer-line', title: 'IT Support', desc: 'On-site house calls for computer repair and technology solutions.' },
                { icon: 'ri-wifi-line', title: 'Network Help', desc: 'Diagnose your internet speed and connectivity issues with this free tool.' },
                { icon: 'ri-tools-line', title: 'Tech Solutions', desc: 'Wolf Enterprise provides technology services for home and small business.' },
              ].map((item) => (
                <div key={item.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 rounded-xl mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-primary-600`}></i>
                  </div>
                  <h3 className="font-display font-bold text-base text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Need Lawn Care or Tech Help?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Whether it&apos;s your lawn or your computer — we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+14135519653"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-primary-50 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                Call (413) 551-9653
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white text-lg font-bold rounded-lg hover:bg-primary-800 transition-colors whitespace-nowrap"
              >
                View Lawn Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
