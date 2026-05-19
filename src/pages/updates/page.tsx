import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import updatesContent from '@/content/updates.json';

export default function UpdatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const page = updatesContent || {} as any;

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-radio-line text-primary-400"></i>
              <span className="text-sm font-semibold text-primary-400">Live &amp; Podcast</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              {page.heroTitle || 'Updates & DnA Show'}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {page.heroSubtitle || 'Listen to Wolf Radio live and catch up on the latest DnA Show podcast episodes on Spotify and YouTube.'}
            </p>
          </div>
        </section>

        {/* Wolf Radio Live Player */}
        <section className="py-12 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl text-white mb-2">{(page.updates && page.updates[0] && page.updates[0].title) || 'Wolf Radio — Live Stream'}</h2>
              <p className="text-gray-400 text-sm">{(page.updates && page.updates[0] && page.updates[0].excerpt) || 'Broadcasting on AM Stereo 1690 and 107.5 FM'}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Player */}
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                <iframe
                  width="100%"
                  height="296"
                  frameBorder="0"
                  src="https://live365.com/embeds/v1/player/a65204?s=xl&m=dark&c=aac"
                  title="Wolf Radio Live Player"
                  className="w-full"
                ></iframe>
              </div>
              {/* Last Played */}
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                <iframe
                  width="100%"
                  height="296"
                  frameBorder="0"
                  src="https://live365.com/embeds/v1/played/a65204?s=lg&m=dark"
                  title="Wolf Radio Last Played"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* DnA Show Podcast */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
                The DnA Show Podcast on Anchor.fm &amp; Youtube
              </h2>
              <p className="text-gray-600">Catch the latest episodes from David &amp; Amanda on your favorite platform.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Spotify */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full">
                    <i className="ri-spotify-line text-white text-sm"></i>
                  </div>
                  <span className="font-semibold text-gray-900">Listen on Spotify</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100">
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
              {/* YouTube */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full">
                    <i className="ri-youtube-line text-white text-sm"></i>
                  </div>
                  <span className="font-semibold text-gray-900">Watch on YouTube</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-100">
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

        {/* Links */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-2">More Ways to Connect</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: 'ri-radio-line', label: 'Wolf Radio Website', href: 'http://wolfradio.net/', color: 'bg-gray-900 text-white' },
                { icon: 'ri-youtube-line', label: 'YouTube Channel', href: 'https://www.youtube.com/@trimmingedge', color: 'bg-red-600 text-white' },
                { icon: 'ri-facebook-line', label: 'Facebook', href: 'https://facebook.com/trimmingedgema', color: 'bg-gray-900 text-white' },
                { icon: 'ri-instagram-line', label: 'Instagram', href: 'http://instagram.com/TrimmingEdge', color: 'bg-gradient-to-r from-pink-500 to-yellow-400 text-white' },
                { icon: 'ri-linkedin-line', label: 'LinkedIn', href: 'https://www.linkedin.com/company/trimmingedge', color: 'bg-gray-900 text-white' },
                { icon: 'ri-article-line', label: 'Blog', href: '/', color: 'bg-primary-600 text-white' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center space-x-3 px-5 py-4 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer ${item.color}`}
                >
                  <i className={`${item.icon} text-xl`}></i>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              {page.ctaTitle || 'Need Lawn Care Services?'}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {page.ctaText || "While you're listening, let us take care of your property."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={page.ctaPrimaryHref || 'tel:+14135519653'}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2"></i>
                {page.ctaPrimaryLabel || 'Call (413) 551-9653'}
              </a>
              <Link
                to={page.ctaSecondaryHref || '/services'}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                {page.ctaSecondaryLabel || 'View Our Services'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
