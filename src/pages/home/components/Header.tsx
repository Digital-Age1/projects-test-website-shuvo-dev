import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import site from '@/content/site.json';

const servicesSubLinks = [
  { label: 'Lawn Mowing & Maintenance', path: '/services/lawn-mowing' },
  { label: 'Landscape Design & Installation', path: '/services/landscape-design' },
  { label: 'Tree & Shrub Care', path: '/services/tree-shrub-care' },
  { label: 'Seasonal Cleanups', path: '/services/seasonal-cleanups' },
  { label: 'Mulching & Bed Maintenance', path: '/services/mulching-bed-maintenance' },
  { label: 'Commercial Landscaping', path: '/services/commercial-landscaping' },
];

const aboutSubLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Work', path: '/our-work' },
];

const serviceAreaCities = [
  { label: 'Huntington, MA', path: '/service-areas/huntington-ma' },
  { label: 'Montgomery, MA', path: '/service-areas/montgomery-ma' },
  { label: 'Russell, MA', path: '/service-areas/russell-ma' },
  { label: 'Westfield, MA', path: '/service-areas/westfield-ma' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServiceAreasOpen, setIsMobileServiceAreasOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceAreasRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const isServicesActive = pathname.startsWith('/services');
  const isAboutActive = aboutSubLinks.some((l) => pathname === l.path);
  const isServiceAreasActive = pathname.startsWith('/service-areas');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setIsServicesOpen(false);
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setIsAboutOpen(false);
      if (serviceAreasRef.current && !serviceAreasRef.current.contains(e.target as Node)) setIsServiceAreasOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact-us');
    setIsMobileMenuOpen(false);
  };

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
      active
        ? isScrolled ? 'text-primary-600 font-semibold' : 'text-primary-300 font-semibold'
        : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'
    }`;

  const dropdownBtnClass = (active: boolean) =>
    `flex items-center space-x-1 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
      active
        ? isScrolled ? 'text-primary-600 font-semibold' : 'text-primary-300 font-semibold'
        : isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'
    }`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={site.logo}
                alt="Trimming Edge Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className={linkClass(pathname === '/')}>Home</Link>

              {/* Services */}
              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => { setIsServicesOpen((v) => !v); setIsAboutOpen(false); setIsServiceAreasOpen(false); }}
                  className={dropdownBtnClass(isServicesActive)}
                >
                  <span>Services</span>
                  <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-200 py-2 z-[100] shadow-lg">
                    <Link to="/services" onClick={() => setIsServicesOpen(false)}
                      className={`flex items-center px-4 py-2.5 text-sm font-semibold transition-colors border-b border-gray-100 mb-1 ${pathname === '/services' ? 'text-primary-600 bg-primary-50' : 'text-gray-900 hover:bg-gray-50 hover:text-primary-600'}`}>
                      <i className="ri-layout-grid-line mr-2 text-primary-500"></i>
                      All Services
                    </Link>
                    {servicesSubLinks.map((sub) => (
                      <Link key={sub.path} to={sub.path} onClick={() => setIsServicesOpen(false)}
                        className={`flex items-center px-4 py-2.5 text-sm transition-colors ${pathname === sub.path ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`}>
                        <i className="ri-arrow-right-s-line mr-1 text-gray-400"></i>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About Us */}
              <div className="relative" ref={aboutRef}>
                <button onClick={() => { setIsAboutOpen((v) => !v); setIsServicesOpen(false); setIsServiceAreasOpen(false); }}
                  className={dropdownBtnClass(isAboutActive)}>
                  <span>About Us</span>
                  <i className={`ri-arrow-down-s-line text-base transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isAboutOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl border border-gray-100 py-2 z-50">
                    {aboutSubLinks.map((sub) => (
                      <Link key={sub.path} to={sub.path} onClick={() => setIsAboutOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${pathname === sub.path ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas */}
              <div className="relative" ref={serviceAreasRef}>
                <button onClick={() => { setIsServiceAreasOpen((v) => !v); setIsServicesOpen(false); setIsAboutOpen(false); }}
                  className={dropdownBtnClass(isServiceAreasActive)}>
                  <span>Service Areas</span>
                  <i className={`ri-arrow-down-s-line text-base transition-transform ${isServiceAreasOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isServiceAreasOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl border border-gray-100 py-2 z-50">
                    <Link to="/service-areas" onClick={() => setIsServiceAreasOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-semibold transition-colors border-b border-gray-100 mb-1 ${pathname === '/service-areas' ? 'text-primary-600 bg-primary-50' : 'text-gray-900 hover:bg-gray-50 hover:text-primary-600'}`}>
                      All Service Areas
                    </Link>
                    {serviceAreaCities.map((city) => (
                      <Link key={city.path} to={city.path} onClick={() => setIsServiceAreasOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${pathname.startsWith(city.path) ? 'text-primary-600 font-semibold bg-primary-50' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`}>
                        {city.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/blog" className={linkClass(pathname.startsWith('/blog'))}>Blog</Link>
              <Link to="/contact-us" className={linkClass(pathname === '/contact-us')}>Contact Us</Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href={site.phoneHref}
                className={`flex items-center space-x-2 text-sm font-semibold transition-colors whitespace-nowrap ${isScrolled ? 'text-gray-900 hover:text-primary-600' : 'text-white hover:text-primary-300'}`}>
                <i className="ri-phone-line text-lg"></i>
                <span>{site.phone}</span>
              </a>
              <a href={site.clientLoginUrl}
                target="_blank" rel="noopener noreferrer"
                className={`flex items-center space-x-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg border transition-colors whitespace-nowrap ${isScrolled ? 'border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600' : 'border-white/40 text-white hover:border-white hover:bg-white/10'}`}>
                <i className="ri-user-line text-base"></i>
                <span>Client Login</span>
              </a>
              <Link to="/contact-us"
                className="px-6 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
                Free Estimate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-20 left-0 right-0 bg-white shadow-xl max-h-[80vh] overflow-y-auto">
            <nav className="px-4 py-6 space-y-1">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">Home</Link>

              {/* Services dropdown mobile */}
              <div>
                <button onClick={() => setIsMobileServicesOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors cursor-pointer ${isServicesActive ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-900 hover:bg-gray-50'}`}>
                  <span>Services</span>
                  <i className={`ri-arrow-down-s-line text-lg transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-3">
                    <Link to="/services"
                      onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${pathname === '/services' ? 'bg-primary-50 text-primary-600' : 'text-gray-900 hover:bg-gray-50'}`}>
                      All Services
                    </Link>
                    {servicesSubLinks.map((sub) => (
                      <Link key={sub.path} to={sub.path}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileServicesOpen(false); }}
                        className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${pathname === sub.path ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About dropdown mobile */}
              <div>
                <button onClick={() => setIsMobileAboutOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors cursor-pointer ${isAboutActive ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-900 hover:bg-gray-50'}`}>
                  <span>About Us</span>
                  <i className={`ri-arrow-down-s-line text-lg transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isMobileAboutOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-3">
                    {aboutSubLinks.map((sub) => (
                      <Link key={sub.path} to={sub.path}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileAboutOpen(false); }}
                        className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${pathname === sub.path ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas dropdown mobile */}
              <div>
                <button onClick={() => setIsMobileServiceAreasOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors cursor-pointer ${isServiceAreasActive ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-900 hover:bg-gray-50'}`}>
                  <span>Service Areas</span>
                  <i className={`ri-arrow-down-s-line text-lg transition-transform ${isMobileServiceAreasOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isMobileServiceAreasOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-3">
                    <Link to="/service-areas"
                      onClick={() => { setIsMobileMenuOpen(false); setIsMobileServiceAreasOpen(false); }}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${pathname === '/service-areas' ? 'bg-primary-50 text-primary-600' : 'text-gray-900 hover:bg-gray-50'}`}>
                      All Service Areas
                    </Link>
                    {serviceAreaCities.map((city) => (
                      <Link key={city.path} to={city.path}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileServiceAreasOpen(false); }}
                        className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${pathname.startsWith(city.path) ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                        {city.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${pathname.startsWith('/blog') ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-900 hover:bg-gray-50'}`}>
                Blog
              </Link>
              <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg transition-colors text-gray-900 hover:bg-gray-50">
                Contact Us
              </Link>

              <a href={site.clientLoginUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap mt-2">
                <i className="ri-user-line text-lg"></i>
                <span>Client Login - Pay Invoice</span>
              </a>
              <a href={site.phoneHref}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap mt-2">
                <i className="ri-phone-line text-lg"></i>
                <span>{site.phone}</span>
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a href={site.phoneHref}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
            <i className="ri-phone-line text-lg"></i>
            <span>Call Now</span>
          </a>
          <Link to="/contact-us"
            className="flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap">
            Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
