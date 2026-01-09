import { Phone, Wrench, Menu, X as CloseIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeight = isScrolled ? 'h-14' : 'h-20';
  const roundedness = isScrolled ? 'rounded-full' : 'rounded-none';
  const marginX = isScrolled ? 'mx-4' : 'mx-0';
  const bgClass = isScrolled
    ? 'bg-white/90 backdrop-blur-xl shadow-2xl'
    : 'bg-white/80 backdrop-blur-md';

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerHeight} ${bgClass} ${marginX} ${roundedness} ${isScrolled ? 'top-4' : 'top-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-300 hover:opacity-80">
              <div className={`bg-gradient-to-br from-blue-900 to-blue-700 p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-100'}`}>
                <Wrench className="w-6 h-6 text-white" />
              </div>
              {!isScrolled && (
                <span className="text-2xl font-bold text-blue-900 transition-opacity duration-300">
                  Fix<span className="text-orange-600">It</span>
                </span>
              )}
            </Link>

            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-xs lg:text-sm group relative whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4">
              <a
                href="tel:+1234567890"
                className={`bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold flex items-center space-x-1 md:space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isScrolled
                    ? 'px-3 py-2 rounded-full text-xs md:text-sm'
                    : 'px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base'
                }`}
              >
                <Phone className={`transition-all duration-300 ${isScrolled ? 'w-4 h-4' : 'w-4 md:w-5 h-4 md:h-5'}`} />
                <span className={isScrolled ? 'hidden' : 'hidden md:inline'}>Call Now</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
              >
                {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl p-4 mt-2 mx-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="h-20"></div>
    </>
  );
}
