import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/feature/PageHeader';
import PageFooter from '../../components/feature/PageFooter';

export default function HistoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logos = [
    {
      src: 'https://readdy.ai/api/search-image?query=vintage%20retro%20logo%20design%20featuring%20a%20classic%20lawnmower%20and%20text%20reading%20Trimming%20Edge%20Lawn%20Care%20on%20a%20warm%20tan%20and%20black%20color%20scheme%2C%20nostalgic%20branding%20illustration&width=600&height=400&seq=logo1&orientation=landscape',
      alt: 'Early Trimming Edge Lawn Care logo with a lawn mower on a black and tan background.',
      caption: 'Trimming Edge Lawn Care — Early Logo',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=landscape%20company%20logo%20design%20with%20lawnmower%20icon%2C%20wolf%20silhouette%20and%20text%20Trimming%20Edge%20Lawn%20Care%2C%20combined%20brand%20identity%20for%20radio%20and%20lawn%20service%2C%20vintage%20style%20illustration&width=600&height=400&seq=logo2&orientation=landscape',
      alt: 'Combined logo with Trimming Edge Lawn Care text, a lawnmower icon, and wolf background.',
      caption: 'Trimming Edge + Wolf Radio Combined Logo',
    },
    {
      src: 'https://readdy.ai/api/search-image?query=radio%20station%20logo%20featuring%20a%20fierce%20detailed%20wolf%20head%20in%20profile%2C%20classic%20broadcast%20media%20branding%20with%20bold%20typography%2C%20vintage%20retro%20style%20design&width=600&height=400&seq=logo3&orientation=landscape',
      alt: 'Logo for Wolf Radio featuring a wolf\'s head.',
      caption: 'Wolf Radio — Classic Logo',
    },
  ];

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
              The History of Wolf Radio &amp; Wolf Enterprise
            </h1>
            <p className="text-lg text-gray-400">
              From radio waves to lawn care — the DnA story of David &amp; Amanda.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                We have been through some changes. Starting in Radio back in 1996 as{' '}
                <a href="https://wolfradio.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                  Wolf Radio
                </a>{' '}
                (<em>Wolf Radio LLC</em>). We also became Wolf Enterprise when my wife Amanda and I started the radio show the DnA Show.
              </p>
              <p>
                (DnA stands for David &amp; Amanda) This show focused on technology and computer repair. I also make, on-site house calls for repairing computers. Amanda also started her Pet Sitting business{' '}
                <a href="http://wolfiespetcare.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                  Wolfie&apos;s Pet Care
                </a>
                . However with the ever changing technology world, where people no longer fix computers like they use to, it is time we go in a new direction. With that the launch of:{' '}
                <Link to="/" className="text-primary-600 hover:underline font-medium">
                  Trimming Edge Lawn Care.
                </Link>
              </p>
              <p>
                Wolf Radio has returned. We are still broadcasting at AM Stereo 1690 and 107.5 FM. The Stream has Returned to{' '}
                <Link to="/wolf-radio" className="text-primary-600 hover:underline font-medium">WolfRadio.net</Link>{' '}
                as well as under the About tab on this site.{' '}
                <Link to="/updates" className="text-primary-600 hover:underline font-medium">Listen Here</Link>
              </p>
              <p>
                Trimming Edge Lawn Care now has their own blog at{' '}
                <Link to="/" className="text-primary-600 hover:underline font-medium">TrimmingEdge.com/blog</Link>
              </p>
              <p>
                For now I am still doing IT and Computer Work under the{' '}
                <a href="http://wolf-radio.net/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                  Wolf Enterprise
                </a>{' '}
                name.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
                <h3 className="font-display font-bold text-lg text-gray-900">Payment Information</h3>
                <p className="text-sm text-gray-600">Please make checks to Wolf Enterprise out to <strong>Wolf Radio LLC</strong></p>
                <p className="text-sm text-gray-600">All checks for the Lawn Care Service should be made out to: <strong>Trimming Edge Lawn Care LLC</strong></p>
                <p className="text-sm text-gray-600">All Checks to Wolfies Pet Care or pet services should be made out to: <strong>Wolfies Pet Care</strong></p>
              </div>

              <blockquote className="border-l-4 border-primary-500 pl-6 italic text-gray-600 bg-primary-50/40 py-4 pr-4 rounded-r-xl">
                <a href="https://www.bible.com/bible/111/COL.3.23.NIV" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline font-medium not-italic block mb-1">
                  Colossians 3:23
                </a>
                Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Logo History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 mb-3">
                A History of Our Logos Over the Years
              </h2>
              <p className="text-gray-600">From Wolf Radio to Trimming Edge — our brand has evolved alongside our journey.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {logos.map((logo) => (
                <div key={logo.caption} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 transition-all">
                  <div className="h-48 flex items-center justify-center bg-gray-900 p-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-gray-700 text-center">{logo.caption}</p>
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
                  History of the Text Wolf /\0!0/\
                </h2>
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    In the Wolf Radio Logo there is /\0!0/\ Placed above the W. This started back when I was about 5 or 6 years old doing code programming. I came up with this text logo that can show in the DOS command line prompt. I set my programs to run the command line prompt and the command line to look like this:
                  </p>
                  <div className="text-center font-mono text-primary-400 text-lg py-2">
                    /\0!0/\ Give me a Command C:\&gt;
                  </div>
                  <p>
                    If you adjust the Eyes and nose to look like the image below you can see the resemblance of the face of a Wolf.
                  </p>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="bg-gray-800 rounded-xl p-6 inline-block">
                    <img
                      src="https://readdy.ai/api/search-image?query=playful%20ASCII%20art%20wolf%20face%20design%20with%20wide%20eyes%20and%20triangular%20ears%2C%20stylized%20text%20art%20characters%20on%20a%20dark%20background%2C%20retro%20computing%20aesthetic%20typography%20art&width=600&height=400&seq=textWolf&orientation=landscape"
                      alt="Stylized text art characters resembling a playful wolf-like face on a dark background"
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
              Ready to Work With Us?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              From radio to lawn care — we bring the same passion and dedication to everything we do.
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
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white text-lg font-bold rounded-lg hover:bg-primary-800 transition-colors whitespace-nowrap"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
