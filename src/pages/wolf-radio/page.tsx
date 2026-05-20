import { useEffect } from 'react';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import wolfRadioContent from '../../content/wolfRadio.json';

const stationFactIcons: Record<string, string> = {
  broadcast: 'ri-broadcast-line',
  global: 'ri-global-line',
};

export default function WolfRadioPage() {
  useSEO({
    title: wolfRadioContent.seoTitle,
    description: wolfRadioContent.seoDescription,
    canonical: '/wolf-radio',
    ogImage: wolfRadioContent.ogImage,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/wolf-radio`,
      url: `${SITE_URL}/wolf-radio`,
      name: wolfRadioContent.seoTitle,
      description: wolfRadioContent.seoDescription,
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSection = wolfRadioContent.sections[0];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-radio-2-line text-primary-400"></i>
              <span className="text-sm font-semibold text-primary-400">Live Radio</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              {wolfRadioContent.heroTitle}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {wolfRadioContent.heroSubtitle}
            </p>
          </div>
        </section>

        {/* Live Player Section */}
        <section className="py-12 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Live Player */}
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">{wolfRadioContent.liveLabel}</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-700">
                  <iframe
                    width="450"
                    height="316"
                    frameBorder="0"
                    src="https://live365.com/embeds/v1/player/a65204?s=md&m=dark&c=aac"
                    title="Wolf Radio Live Player"
                  ></iframe>
                </div>
              </div>
              {/* Last Played */}
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-4">
                  <i className="ri-history-line text-gray-400"></i>
                  <span className="text-white font-semibold text-sm">{wolfRadioContent.lastPlayedLabel}</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-700">
                  <iframe
                    width="450"
                    height="316"
                    frameBorder="0"
                    src="https://live365.com/embeds/v1/played/a65204?s=md&m=dark"
                    title="Wolf Radio Last Played"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Wolf Radio */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
                  <i className="ri-information-line text-primary-600"></i>
                  <span className="text-sm font-semibold text-primary-600">{wolfRadioContent.aboutEyebrow}</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                  {wolfRadioContent.introTitle}
                </h2>
                <div
                  className="text-gray-600 leading-relaxed mb-6 space-y-4"
                  dangerouslySetInnerHTML={{ __html: aboutSection.body }}
                />
                <div className="space-y-3">
                  {wolfRadioContent.stationFacts.map((item) => (
                    <div key={item.label} className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-primary-100 rounded-lg">
                        <i className={`${stationFactIcons[item.iconKey] || 'ri-broadcast-line'} text-primary-600`}></i>
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 rounded-3xl p-8 text-center">
                <div className="text-6xl font-display font-black text-primary-400 mb-2">{wolfRadioContent.textLogo}</div>
                <p className="text-gray-400 text-sm mb-6">{wolfRadioContent.textLogoCaption}</p>
                <a
                  href={wolfRadioContent.externalLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  {wolfRadioContent.externalLinkLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DnA Show Podcast */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
                {wolfRadioContent.podcastTitle}
              </h2>
              <p className="text-gray-600">{wolfRadioContent.podcastSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full">
                    <i className="ri-spotify-line text-white text-sm"></i>
                  </div>
                  <span className="font-semibold text-gray-900">{wolfRadioContent.spotifyLabel}</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    src="https://open.spotify.com/embed/show/1GO891irBI7Evx2hUnGyFy?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="DnA Show on Spotify"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                    <i className="ri-youtube-line text-white text-sm"></i>
                  </div>
                  <span className="font-semibold text-gray-900">{wolfRadioContent.youtubeLabel}</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    width="100%"
                    height="352"
                    src="https://www.youtube.com/embed/videoseries?si=VgqL6M7beIwetE5D&list=PLlZLd_tasE5LFyE7S1r3a6Ncu6PjbfRgn"
                    title="DnA Show YouTube Playlist"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              {wolfRadioContent.ctaTitle}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {wolfRadioContent.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={wolfRadioContent.cta.primaryHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                {wolfRadioContent.cta.primaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
                {wolfRadioContent.cta.primaryLabel}
              </a>
              <Link
                to={wolfRadioContent.cta.secondaryHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {wolfRadioContent.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
