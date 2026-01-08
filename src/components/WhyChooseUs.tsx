import { Shield, Clock, ThumbsUp, Wrench, DollarSign, Phone } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: '17 years of proven track record with thousands of satisfied customers.',
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: '1-2 hour response time. We arrive on time, every time.',
    },
    {
      icon: ThumbsUp,
      title: 'Quality Guaranteed',
      description: '90-day warranty on all repairs. We stand behind our work.',
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Certified professionals with extensive training and experience.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees. You know the cost before we start.',
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Emergency repairs available anytime, day or night.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-600">FixIt</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another repair service. We're your trusted partner in home appliance care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
