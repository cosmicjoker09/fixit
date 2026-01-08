import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      service: 'AC Repair',
      rating: 5,
      text: 'Amazing service! My AC stopped working in peak summer, and they fixed it within 2 hours. Very professional and reasonably priced.',
      location: 'Mumbai',
    },
    {
      name: 'Priya Sharma',
      service: 'Refrigerator Repair',
      rating: 5,
      text: 'The technician was extremely knowledgeable and explained everything clearly. Fixed my fridge compressor issue the same day.',
      location: 'Delhi',
    },
    {
      name: 'Amit Patel',
      service: 'TV Repair',
      rating: 5,
      text: 'Quick response, honest pricing, and excellent work quality. My LED TV looks brand new now. Highly recommend FixIt!',
      location: 'Bangalore',
    },
    {
      name: 'Sneha Reddy',
      service: 'Cooler Service',
      rating: 5,
      text: 'Very impressed with their professionalism. They serviced my cooler perfectly before summer. Great team!',
      location: 'Hyderabad',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      <style>{`
        @keyframes orbitFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) rotate(2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) rotate(-2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .testimonial-card-1 {
          animation: orbitFloat 6s ease-in-out infinite;
        }

        .testimonial-card-2 {
          animation: orbitFloat 7s ease-in-out infinite 0.5s;
        }

        .testimonial-card-3 {
          animation: orbitFloat 6.5s ease-in-out infinite 1s;
        }

        .testimonial-card-4 {
          animation: orbitFloat 7.5s ease-in-out infinite 1.5s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-600">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card-${index + 1} bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-500 relative group transform hover:scale-105 scroll-reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200 group-hover:text-orange-400 transition-colors" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-orange-600 font-medium">
                  {testimonial.service}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
