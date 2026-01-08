import { Award, Users, MapPin, Zap } from 'lucide-react';

export function TrustBar() {
  const stats = [
    { icon: Award, label: '17+ Years Experience', value: '2008-2025' },
    { icon: Users, label: '4 Expert Techs', value: 'Certified' },
    { icon: MapPin, label: '30km Coverage', value: 'Wide Area' },
    { icon: Zap, label: 'Same-Day Service', value: '1-2 Hours' },
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-900 text-white rounded-xl mb-3 group-hover:bg-orange-600 transition-colors duration-300">
                <stat.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
