import { Star, Check, Tag } from 'lucide-react';
import { useState } from 'react';
import { BookingModal } from '../components/BookingModal';

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState<string>('');
  const appliances = [
    {
      id: 1,
      name: 'Air Conditioner (AC)',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional AC repair for split, window, and central air systems. Gas refill, deep cleaning, installation, and regular maintenance.',
      price: '₹599',
      originalPrice: '₹999',
      rating: 4.8,
      reviews: 245,
    },
    {
      id: 2,
      name: 'Refrigerator',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Expert refrigerator repair for single and double door models. Compressor issues, gas leaks, thermostat problems, and defrost system repairs.',
      price: '₹549',
      originalPrice: '₹899',
      rating: 4.9,
      reviews: 198,
    },
    {
      id: 3,
      name: 'Television',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Fast TV repair for LED, LCD, and Smart TVs. Display issues, sound problems, software updates, and picture quality fixes.',
      price: '₹499',
      originalPrice: '₹799',
      rating: 4.7,
      reviews: 312,
    },
    {
      id: 4,
      name: 'Washing Machine',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Comprehensive washing machine service. Motor repair, drum cleaning, water leakage fixes, electronic control board replacement.',
      price: '₹449',
      originalPrice: '₹749',
      rating: 4.8,
      reviews: 276,
    },
    {
      id: 5,
      name: 'Microwave Oven',
      image: 'https://images.pexels.com/photos/8965481/pexels-photo-8965481.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Microwave repair and maintenance. Heating element replacement, magnetron repair, turntable fixes, and sensor calibration.',
      price: '₹399',
      originalPrice: '₹699',
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 6,
      name: 'Water Cooler',
      image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Desert and air cooler service. Pump repair, motor replacement, water leakage fixes, and seasonal maintenance.',
      price: '₹349',
      originalPrice: '₹599',
      rating: 4.9,
      reviews: 189,
    },
    {
      id: 7,
      name: 'Water Purifier',
      image: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Water purifier maintenance and repair. Filter replacement, UV tube fixes, TDS control, and sanitization service.',
      price: '₹299',
      originalPrice: '₹499',
      rating: 4.7,
      reviews: 142,
    },
    {
      id: 8,
      name: 'Laptop & Computer',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Expert computer and laptop repair. Hard drive replacement, motherboard fixes, display repairs, and software troubleshooting.',
      price: '₹549',
      originalPrice: '₹899',
      rating: 4.8,
      reviews: 267,
    },
    {
      id: 9,
      name: 'Ceiling Fan',
      image: 'https://images.pexels.com/photos/3912998/pexels-photo-3912998.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Ceiling fan repair and installation. Motor repair, blade balancing, regulator fixes, and wiring replacement.',
      price: '₹249',
      originalPrice: '₹449',
      rating: 4.9,
      reviews: 201,
    },
    {
      id: 10,
      name: 'Geyser (Water Heater)',
      image: 'https://images.pexels.com/photos/5632393/pexels-photo-5632393.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Water heater service and repair. Heating element replacement, thermostat fixes, tank cleaning, and pressure valve repair.',
      price: '₹399',
      originalPrice: '₹699',
      rating: 4.8,
      reviews: 223,
    },
    {
      id: 11,
      name: 'Microwave + Dishwasher',
      image: 'https://images.pexels.com/photos/5632385/pexels-photo-5632385.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Combined kitchen appliance service. Heating systems, pump repairs, control board fixes, and comprehensive maintenance.',
      price: '₹699',
      originalPrice: '₹1199',
      rating: 4.7,
      reviews: 134,
    },
    {
      id: 12,
      name: 'Chimney & Kitchen Hood',
      image: 'https://images.pexels.com/photos/5632389/pexels-photo-5632389.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Chimney and kitchen hood repair. Filter cleaning, motor fixes, ductwork repair, and noise reduction service.',
      price: '₹349',
      originalPrice: '₹599',
      rating: 4.6,
      reviews: 98,
    },
  ];

  const amcPlans = [
    {
      name: 'Basic AMC',
      duration: '1 Year',
      price: '₹1999',
      features: [
        'Free routine maintenance (4 visits/year)',
        '20% discount on repairs',
        '24-hour emergency support',
        '1 free parts replacement',
      ],
    },
    {
      name: 'Premium AMC',
      duration: '1 Year',
      price: '₹4999',
      features: [
        'Unlimited maintenance visits',
        'Free parts replacement (up to ₹5000)',
        '50% discount on labor charges',
        'Priority support',
        'Seasonal deep cleaning',
      ],
    },
    {
      name: 'Gold AMC',
      duration: '1 Year',
      price: '₹8999',
      features: [
        'Unlimited everything',
        'Free replacement for major parts',
        'Completely free service calls',
        'VIP priority support',
        'Seasonal deep cleaning + upgrades',
        ' 50% discount on other appliances',
      ],
    },
  ];

  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 scroll-reveal">Our Services</h1>
          <p className="text-xl text-blue-100 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Complete appliance repair solutions with professional technicians and warranty coverage
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 scroll-reveal">Appliances We Repair</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appliances.map((appliance, idx) => (
            <div
              key={appliance.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-orange-500 scroll-reveal group"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={appliance.image}
                  alt={appliance.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {Math.round(((parseInt(appliance.originalPrice.replace('₹', '')) - parseInt(appliance.price.replace('₹', ''))) / parseInt(appliance.originalPrice.replace('₹', ''))) * 100)}% OFF
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{appliance.name}</h3>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(appliance.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({appliance.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{appliance.description}</p>

                <div className="border-t pt-4 mb-4">
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="text-3xl font-bold text-orange-600">{appliance.price}</span>
                    <span className="text-sm line-through text-gray-400">{appliance.originalPrice}</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold">Free consultation included</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedAppliance(appliance.name);
                    setIsBookingOpen(true);
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center scroll-reveal">
            Annual Maintenance Contracts (AMC)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amcPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 transition-all duration-300 scroll-reveal ${
                  idx === 1
                    ? 'bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-2xl transform scale-105'
                    : 'bg-white shadow-lg border-2 border-gray-200 text-gray-900'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${idx === 1 ? 'text-white/80' : 'text-gray-600'}`}>{plan.duration}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <p className={`text-sm mt-2 ${idx === 1 ? 'text-white/80' : 'text-gray-600'}`}>/year</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${idx === 1 ? 'text-white' : 'text-orange-600'}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedAppliance(plan.name);
                    setIsBookingOpen(true);
                  }}
                  className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    idx === 1
                      ? 'bg-white text-orange-600 hover:bg-gray-50'
                      : 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        appliance={selectedAppliance}
      />
    </div>
  );
}
