import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';
import { useSEO, SITE_URL } from '@/hooks/useSEO';
import about from '@/content/about.json';

export default function HistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: about.historySeoTitle,
    description: about.historySeoDescription,
    canonical: '/history',
    ogImage: `${SITE_URL}${about.historyOgImage}`,
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <i className="ri-history-line text-primary-400"></i>
              <span className="text-sm font-semibold text-primary-400">Our Story</span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              {about.historyHeroTitle}
            </h1>
            <p className="text-lg text-gray-400">
              {about.historyHeroSubtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <h2 className="font-display font-bold text-3xl text-gray-900">{about.historyIntroTitle}</h2>
              <p>{about.historyParagraphs[0]}</p>
              <p>
                {about.historyParagraphs[1]}{' '}
                <a href="http://wolfiespetcare.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                  Wolfie&apos;s Pet Care
                </a>
              </p>
              <p>
                {about.historyParagraphs[2]}{' '}
                <Link to="/wolf-radio" className="text-primary-600 hover:underline font-medium">WolfRadio.net</Link>{' '}
                <Link to="/updates" className="text-primary-600 hover:underline font-medium">Listen Here</Link>
              </p>
              <p>
                {about.historyParagraphs[3]}{' '}
                <Link to="/blog" className="text-primary-600 hover:underline font-medium">TrimmingEdge.com/blog</Link>
              </p>
              <p>
                {about.historyParagraphs[4]}{' '}
                <a href="http://wolf-radio.net/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                  Wolf Enterprise
                </a>
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
                <h3 className="font-display font-bold text-lg text-gray-900">{about.paymentTitle}</h3>
                {about.paymentItems.map((item) => (
                  <p key={item} className="text-sm text-gray-600">{item}</p>
                ))}
              </div>

              <blockquote className="border-l-4 border-primary-500 pl-6 italic text-gray-600 bg-primary-50/40 py-4 pr-4 rounded-r-xl">
                <a href={about.historyQuoteHref} target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline font-medium not-italic block mb-1">
                  {about.historyQuoteSource}
                </a>
                {about.historyQuoteText}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Logo History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
                {about.timelineTitle}
              </h2>
              <p className="text-gray-600">{about.timelineSubtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {about.timelineItems.map((logo) => (
                <div key={logo.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 transition-all">
                  <div className="h-48 flex items-center justify-center bg-gray-900 p-4">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-700 text-center">{logo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Text Wolf History */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-3xl overflow-hidden">
              <div className="p-8 text-white">
                <h2 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-center">
                  {about.milestonesTitle}
                </h2>
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  {about.milestones.map((milestone) => (
                    <p key={milestone}>{milestone}</p>
                  ))}
                  <div className="text-center font-mono text-primary-400 text-lg py-2">
                    {about.textWolfPrompt}
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="bg-gray-800 rounded-xl p-6 inline-block">
                    <img
                      src={about.textWolfImage}
                      alt={about.textWolfImageAlt}
                      className="max-w-xs mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              {about.historyCtaTitle}
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              {about.historyCtaText}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={about.historyCtaPrimaryHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 text-lg font-bold rounded-lg hover:bg-primary-50 transition-colors whitespace-nowrap"
              >
                {about.historyCtaPrimaryHref.startsWith('tel:') && <i className="ri-phone-line mr-2"></i>}
                {about.historyCtaPrimaryLabel}
              </a>
              <Link
                to={about.historyCtaSecondaryHref}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white text-lg font-bold rounded-lg hover:bg-primary-800 transition-colors whitespace-nowrap"
              >
                {about.historyCtaSecondaryLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
