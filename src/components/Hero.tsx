import { Clock, CheckCircle } from 'lucide-react';

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto scroll-reveal">
          <div className="inline-flex items-center space-x-2 bg-orange-600/20 text-orange-300 px-6 py-3 rounded-full mb-6 border border-orange-500/30 hover:bg-orange-600/30 transition-all duration-300 transform hover:scale-105">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">1-2 Hour Response Time</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight scroll-reveal-left" style={{ animationDelay: '0.1s' }}>
            Fast, Reliable Appliance Repair –{' '}
            <span className="text-orange-500">Fixed Today</span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed scroll-reveal-right" style={{ animationDelay: '0.2s' }}>
            <span className="font-semibold text-orange-400">17 years</span> of trusted expertise with{' '}
            <span className="font-semibold text-orange-400">same-day service</span> guaranteed.
            We fix it right, the first time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 w-full sm:w-auto"
            >
              Book a Repair Now
            </button>
            <a
              href="tel:+1234567890"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm w-full sm:w-auto transform hover:scale-105"
            >
              Call for Emergency
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white scroll-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="w-5 h-5 text-orange-400" />
              <span className="text-sm sm:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="w-5 h-5 text-orange-400" />
              <span className="text-sm sm:text-base">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
              <CheckCircle className="w-5 h-5 text-orange-400" />
              <span className="text-sm sm:text-base">90-Day Warranty</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
