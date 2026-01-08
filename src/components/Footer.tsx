import { Phone, Mail, MapPin, Clock, Wrench } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Fix<span className="text-orange-500">It</span>
              </span>
            </div>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Your trusted partner for fast, reliable appliance repair with 17 years of excellence.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-blue-200 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#booking" className="text-blue-200 hover:text-white transition-colors">
                  Book a Repair
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+1234567890" className="text-blue-200 hover:text-white transition-colors">
                    +91 XXXXX XXXXX
                  </a>
                  <p className="text-xs text-blue-300">24/7 Hotline</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:support@fixit.com" className="text-blue-200 hover:text-white transition-colors">
                    support@fixit.com
                  </a>
                  <p className="text-xs text-blue-300">Email Support</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-200">30km Service Radius</p>
                  <p className="text-xs text-blue-300">All Major Areas</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-1 text-blue-200 text-sm">
              <li>Downtown Area</li>
              <li>North Zone</li>
              <li>South Zone</li>
              <li>East Zone</li>
              <li>West Zone</li>
              <li>Suburban Areas</li>
              <li>Industrial Zone</li>
              <li>& More...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-blue-200 text-sm text-center sm:text-left">
              &copy; {currentYear} FixIt. All rights reserved. | Licensed & Insured
            </p>
            <div className="flex space-x-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
