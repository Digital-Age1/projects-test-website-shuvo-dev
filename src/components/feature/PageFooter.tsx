import { Link } from 'react-router-dom';
import SystemStatus from '@/components/feature/SystemStatus';

export default function PageFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/uploads/logo-trimming-edge.png"
                alt="Trimming Edge Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Locally operated lawn care &amp; landscaping serving Western Massachusetts with 5-star results.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com/trimmingedgema" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Facebook">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="http://instagram.com/TrimmingEdge" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary-600 transition-colors" aria-label="Instagram">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/locations" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Locations</Link></li>
              <li><Link to="/contact-us" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">Lawn Mowing &amp; Maintenance</li>
              <li className="text-sm text-gray-400">Landscape Design</li>
              <li className="text-sm text-gray-400">Tree &amp; Shrub Care</li>
              <li className="text-sm text-gray-400">Seasonal Cleanups</li>
              <li className="text-sm text-gray-400">Mulching &amp; Edging</li>
              <li className="text-sm text-gray-400">Commercial Landscaping</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-phone-line text-primary-400 mt-1"></i>
                <a href="tel:+14135519653" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">(413) 551-9653</a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-primary-400 mt-1"></i>
                <p className="text-sm text-gray-400">Montgomery, MA 01050</p>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-time-line text-primary-400 mt-1"></i>
                <div>
                  <p className="text-sm text-gray-400">Mon–Fri: 8AM – 6PM</p>
                  <p className="text-sm text-gray-400">Sat: 9AM – 5PM</p>
                  <p className="text-sm text-gray-400">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <SystemStatus />

        <div className="pt-5 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; 2026 Trimming Edge. All rights reserved. Serving Huntington, Montgomery, Russell &amp; Westfield, MA.
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
