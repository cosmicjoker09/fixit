import { Tv, Wind, Refrigerator, Fan, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const navigate = useNavigate();

  const services = [
    {
      icon: Tv,
      title: 'TV Repair',
      description: 'LED, LCD, Smart TV repairs. Display issues, sound problems, software updates.',
      features: ['All Brands', 'Same-Day Fix', 'Warranty'],
      price: '₹499',
      originalPrice: '₹799',
    },
    {
      icon: Wind,
      title: 'AC Repair',
      description: 'Split, Window, Central AC. Cooling issues, gas refill, complete servicing.',
      features: ['Gas Refill', 'Deep Clean', 'Installation'],
      price: '₹599',
      originalPrice: '₹999',
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator Repair',
      description: 'Single/Double door fridges. Cooling problems, compressor issues, defrosting.',
      features: ['Compressor', 'Gas Leak', 'Thermostat'],
      price: '₹549',
      originalPrice: '₹899',
    },
    {
      icon: Fan,
      title: 'Cooler Repair',
      description: 'Desert coolers, air coolers. Pump issues, water leakage, motor problems.',
      features: ['Motor Fix', 'Pump Replace', 'Cleaning'],
      price: '₹399',
      originalPrice: '₹699',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setVisibleCards((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-service-card]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expert <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all major home appliances with certified technicians
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-service-card
              data-index={index}
              className={`group relative scroll-reveal transition-all duration-500 ${
                visibleCards[index] ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border-2 border-transparent hover:border-orange-500 h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl mb-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 transform group-hover:scale-110">
                  <service.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-900 rounded-full group-hover:bg-orange-50 group-hover:text-orange-900 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-3xl font-bold text-orange-600">{service.price}</span>
                    <span className="text-sm line-through text-gray-400">{service.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold">Free consultation included</p>
                </div>

                <button
                  onClick={() => navigate(`/services?service=${service.title}`)}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn shadow-lg hover:shadow-xl"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
