import { Link } from 'react-router-dom';
import SystemStatus from '@/components/feature/SystemStatus';
import site from '@/content/site.json';
import navigation from '@/content/navigation.json';
import servicesContent from '@/content/services.json';

const socialIconClass: Record<string, string> = {
  facebook: 'ri-facebook-fill',
  instagram: 'ri-instagram-line',
};

export default function PageFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src={site.logo}
                alt={`${site.businessName} Logo`}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {site.footerDescription}
            </p>
            <div className="flex items-center space-x-4">
              {site.socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary-600 transition-colors" aria-label={link.label}>
                  <i className={`${socialIconClass[link.iconKey] || 'ri-links-line'} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.main.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {servicesContent.items.map((service) => (
                <li key={service.title} className="text-sm text-gray-400">{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-primary-400 mt-1"></i>
                <a href={site.phoneHref} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">{site.phone}</a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-primary-400 mt-1"></i>
                <p className="text-sm text-gray-400">{site.location}</p>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-time-line text-primary-400 mt-1"></i>
                <div>
                  {site.shortHours.map((line) => (
                    <p key={line} className="text-sm text-gray-400">{line}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <SystemStatus />

        <div className="pt-5 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {site.copyrightText}
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
