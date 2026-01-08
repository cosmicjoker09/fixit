import { CheckCircle, Users, Trophy, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Professionalism() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const element = document.getElementById('professionalism-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: '5000+', text: 'Happy Customers' },
    { icon: Trophy, label: '15+', text: 'Years Experience' },
    { icon: Zap, label: '24/7', text: 'Expert Support' },
    { icon: CheckCircle, label: '100%', text: 'Satisfaction' },
  ];

  return (
    <section id="professionalism-section" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-blue-900 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img
                src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional repair service"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl backdrop-blur-md bg-white/90">
                <p className="text-sm font-bold text-gray-900">Expert Technicians</p>
                <p className="text-2xl font-bold text-orange-600">15+ Years</p>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professionalism <span className="text-orange-600">You Can Trust</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We bring years of expertise and dedication to every repair job. Our certified technicians are trained on the latest technology and committed to delivering exceptional service with complete transparency and reliability.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-orange-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 scroll-reveal-scale`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-orange-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Appointment
              </button>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
