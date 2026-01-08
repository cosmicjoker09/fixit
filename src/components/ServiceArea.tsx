import { MapPin, CheckCircle } from 'lucide-react';

export function ServiceArea() {
  const areas = [
    'Downtown', 'North Zone', 'South Zone', 'East Zone',
    'West Zone', 'Suburbs', 'Industrial Area', 'Residential Areas',
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">30km</span> Service Radius
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We cover a wide service area to ensure you get the help you need, when you need it.
              No matter where you are within our 30km radius, we'll be there fast.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-xl">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Not sure if we cover your area?</p>
                  <p className="text-blue-200 text-sm">
                    Call us now and we'll let you know immediately if we can reach you.
                    We're always expanding our service area!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-orange-500">
              <div className="aspect-square bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjgiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-30"></div>

                <div className="relative text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-48 h-48 border-4 border-orange-500/30 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-64 h-64 border-4 border-orange-500/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <p className="text-white text-2xl font-bold mt-4">30km Coverage</p>
                  <p className="text-blue-200 text-sm">Fast Response Everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
