import { Zap, Gift, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-16 sm:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-orange-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white transition-all duration-1000 transform hover:scale-105 hover:bg-white/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-3">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">First Time Offer</h3>
            </div>
            <p className="text-white/80 mb-4">Get 40% OFF on your first service booking</p>
            <p className="text-sm text-white/60">Use code: WELCOME40</p>
          </div>

          <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white transition-all duration-1000 transform hover:scale-105 hover:bg-white/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-delay-200`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-3">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Quick Response</h3>
            </div>
            <p className="text-white/80 mb-4">Same-day service within 2 hours of booking</p>
            <p className="text-sm text-white/60">Emergency support available 24/7</p>
          </div>

          <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white transition-all duration-1000 transform hover:scale-105 hover:bg-white/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-delay-300`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-3">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Warranty Included</h3>
            </div>
            <p className="text-white/80 mb-4">90-day warranty on all repair work</p>
            <p className="text-sm text-white/60">Hassle-free replacement guarantee</p>
          </div>
        </div>

        <div className={`bg-white rounded-3xl p-10 sm:p-12 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Book your service now and experience professional repair service with our certified technicians. Special discounts available for first-time customers!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Service Now
                </button>
                <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  Call: +1234567890
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-blue-900 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 border-2 border-blue-200">
                  <div className="text-center">
                    <p className="text-5xl font-bold text-orange-600 mb-2">40%</p>
                    <p className="text-xl text-gray-900 font-semibold mb-2">OFF</p>
                    <p className="text-gray-600">On First Service</p>
                    <p className="text-sm text-gray-500 mt-4">Code: WELCOME40</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
