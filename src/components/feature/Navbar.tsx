import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('#')) {
      if (!isHome) {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(href.slice(1));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.getElementById(href.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#080808]/97 backdrop-blur-lg border-b border-[#1A1A1A]'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 lg:px-16 h-48 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="https://storage.readdy-site.link/project_files/02624808-1281-4360-8d72-e7a5bc1cee0d/70f36ce5-ea55-45b0-8347-6e12733ced32_jnblogo.png?v=4582c1ef63d7dd761e1f6ff933291473"
              alt="JNB Protection Group"
              className="h-44 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className="text-white/60 hover:text-white text-base font-medium uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap"
            >
              Home
            </Link>
            <button
              onClick={() => handleAnchor('#about')}
              className="text-white/60 hover:text-white text-base font-medium uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap bg-transparent border-none outline-none"
            >
              About Us
            </button>
            <button
              onClick={() => handleAnchor('#services')}
              className="text-white/60 hover:text-white text-base font-medium uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap bg-transparent border-none outline-none"
            >
              Services
            </button>
            <button
              onClick={() => handleAnchor('#contact')}
              className="text-white/60 hover:text-white text-base font-medium uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap bg-transparent border-none outline-none"
            >
              Contact
            </button>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <div className="flex items-center gap-5">
              <a
                href="tel:+17139068273"
                className="flex items-center gap-2 text-white/50 hover:text-white text-base transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill text-[#C9A84C] text-base" />
                713.906.8273
              </a>
              <button
                onClick={() => handleAnchor('#contact')}
                className="bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-heading font-bold text-base px-8 py-4 tracking-widest uppercase transition-colors cursor-pointer whitespace-nowrap border-none outline-none"
              >
                Request Service
              </button>
            </div>
            <p className="text-white/30 text-xs tracking-widest uppercase">
              State License: <span className="text-[#C9A84C]/70">C12684701</span>
            </p>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer bg-transparent border-none outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#080808] border-t border-[#1A1A1A] px-6 py-6 space-y-5">
            <img
              src="https://storage.readdy-site.link/project_files/02624808-1281-4360-8d72-e7a5bc1cee0d/70f36ce5-ea55-45b0-8347-6e12733ced32_jnblogo.png?v=4582c1ef63d7dd761e1f6ff933291473"
              alt="JNB Protection Group"
              className="h-10 w-auto object-contain mb-2"
            />
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-white/70 uppercase tracking-widest cursor-pointer"
            >
              Home
            </Link>
            <button
              onClick={() => handleAnchor('#about')}
              className="block text-sm font-medium text-white/70 uppercase tracking-widest cursor-pointer bg-transparent border-none outline-none w-full text-left"
            >
              About Us
            </button>
            <button
              onClick={() => handleAnchor('#services')}
              className="block text-sm font-medium text-white/70 uppercase tracking-widest cursor-pointer bg-transparent border-none outline-none w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => handleAnchor('#contact')}
              className="block text-sm font-medium text-white/70 uppercase tracking-widest cursor-pointer bg-transparent border-none outline-none w-full text-left"
            >
              Contact
            </button>
            <button
              onClick={() => handleAnchor('#contact')}
              className="block bg-[#C9A84C] text-black font-heading font-bold text-sm px-6 py-3 tracking-widest uppercase text-center cursor-pointer whitespace-nowrap w-full border-none outline-none"
            >
              Request Service
            </button>
          </div>
        )}
      </nav>

      {/* Mobile floating call */}
      <a
        href="tel:+17139068273"
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 flex items-center justify-center bg-[#C9A84C] text-black cursor-pointer"
        aria-label="Call JNB Protection Group"
      >
        <i className="ri-phone-fill text-2xl" />
      </a>
    </>
  );
}
