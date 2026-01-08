import { Star, X } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsPage() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      service: 'AC Repair',
      rating: 5,
      text: 'Amazing service! My AC stopped working in peak summer, and they fixed it within 2 hours. Very professional and reasonably priced.',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'AC compressor was not working properly, cooling was insufficient',
      solution: 'Diagnosed and replaced compressor, recharged refrigerant, tested thoroughly',
      date: '15 Dec 2024',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      service: 'Refrigerator Repair',
      rating: 5,
      text: 'The technician was extremely knowledgeable and explained everything clearly. Fixed my fridge compressor issue the same day.',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Refrigerator not cooling, making strange noise',
      solution: 'Replaced faulty compressor and refilled refrigerant gas',
      date: '10 Dec 2024',
    },
    {
      id: 3,
      name: 'Amit Patel',
      service: 'TV Repair',
      rating: 5,
      text: 'Quick response, honest pricing, and excellent work quality. My LED TV looks brand new now. Highly recommend FixIt!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'TV screen display showing lines and flickering',
      solution: 'Replaced LED backlight panel, recalibrated display settings',
      date: '8 Dec 2024',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      service: 'Cooler Service',
      rating: 4.5,
      text: 'Very impressed with their professionalism. They serviced my cooler perfectly before summer. Great team!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Cooler water leakage and motor not running properly',
      solution: 'Fixed water leakage, replaced motor bearings, cleaned and serviced',
      date: '5 Dec 2024',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      service: 'Washing Machine Repair',
      rating: 5,
      text: 'Best service experience ever. They came on time, fixed the issue quickly, and explained everything patiently. Highly satisfied!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Washing machine drum not rotating, water leakage',
      solution: 'Replaced motor, sealed water inlet valve, tested multiple cycles',
      date: '2 Dec 2024',
    },
    {
      id: 6,
      name: 'Anjali Gupta',
      service: 'Water Purifier Repair',
      rating: 5,
      text: 'Finally someone who understands water purifiers! They replaced the filters and tested water quality. Worth every penny!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Water purifier TDS showing high, poor water quality',
      solution: 'Replaced all filters, sanitized system, recalibrated TDS meter',
      date: '28 Nov 2024',
    },
    {
      id: 7,
      name: 'Deepak Verma',
      service: 'Microwave Repair',
      rating: 4.5,
      text: 'Professional service with fair pricing. My microwave is working perfectly now. Recommended to all my friends!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/8965481/pexels-photo-8965481.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Microwave not heating, magnetron weak',
      solution: 'Replaced magnetron tube, calibrated heating sensor',
      date: '25 Nov 2024',
    },
    {
      id: 8,
      name: 'Kavya Nair',
      service: 'Geyser Service',
      rating: 5,
      text: 'Excellent customer service! They explained the maintenance needed and did everything perfectly. Very reliable team!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/5632393/pexels-photo-5632393.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Geyser taking long time to heat, leaking water',
      solution: 'Replaced heating element, sealed outlet valve, flushed tank',
      date: '20 Nov 2024',
    },
    {
      id: 9,
      name: 'Rohit Desai',
      service: 'Laptop Repair',
      rating: 5,
      text: 'Fixed my laptop faster than expected. Data safety was their priority. Very trustworthy and skilled technicians!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Laptop overheating, keyboard not working',
      solution: 'Cleaned heatsink, replaced keyboard, updated drivers',
      date: '15 Nov 2024',
    },
    {
      id: 10,
      name: 'Meena Reddy',
      service: 'Ceiling Fan Repair',
      rating: 4.5,
      text: 'Quick installation and repair service. The fan runs smoothly now without any noise. Great value for money!',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeImage: 'https://images.pexels.com/photos/3912998/pexels-photo-3912998.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImage: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      problem: 'Fan making noise, blade wobbling',
      solution: 'Balanced blades, lubricated motor, tightened bearings',
      date: '10 Nov 2024',
    },
  ];

  const portfolioWorks = [
    {
      id: 1,
      title: 'AC System Overhaul & Gas Refill',
      appliance: 'Air Conditioner',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Complete AC system overhaul including gas refill, coil cleaning, and performance testing',
    },
    {
      id: 2,
      title: 'Refrigerator Compressor Replacement',
      appliance: 'Refrigerator',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Faulty compressor diagnosis and successful replacement with refrigerant refill',
    },
    {
      id: 3,
      title: 'Smart TV Display Panel Repair',
      appliance: 'Television',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'LED display panel replacement and smart system software update',
    },
    {
      id: 4,
      title: 'Washing Machine Motor & Drum Repair',
      appliance: 'Washing Machine',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Motor bearing replacement and drum seal repair with complete testing',
    },
    {
      id: 5,
      title: 'Microwave Oven Magnetron Replacement',
      appliance: 'Microwave Oven',
      image: 'https://images.pexels.com/photos/8965481/pexels-photo-8965481.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Magnetron tube replacement with heating performance optimization',
    },
    {
      id: 6,
      title: 'Water Cooler Motor & Pump Service',
      appliance: 'Water Cooler',
      image: 'https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Complete motor overhaul and pump efficiency restoration',
    },
    {
      id: 7,
      title: 'Water Purifier System Deep Cleaning',
      appliance: 'Water Purifier',
      image: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Complete filter replacement and system sanitization with quality testing',
    },
    {
      id: 8,
      title: 'Laptop Hard Drive & Display Repair',
      appliance: 'Laptop & Computer',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Data backup, SSD replacement, and display panel repair',
    },
  ];

  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 scroll-reveal">Customer Testimonials</h1>
          <p className="text-xl text-blue-100 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Real stories from real customers who trust us with their appliances
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-500 scroll-reveal group cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => setSelectedReview(review.id)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-orange-600 font-medium">{review.service}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed italic">"{review.text}"</p>

              <div className="border-t pt-4 flex items-center justify-between">
                <p className="text-xs text-gray-500">{review.date}</p>
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 scroll-reveal">Our Professional Works</h2>
          <p className="text-gray-600 mb-12 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Showcasing our expertise through completed projects and satisfied customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioWorks.map((work, idx) => (
              <div
                key={work.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-orange-500 scroll-reveal cursor-pointer group"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedPortfolio(work.id)}
              >
                <div className="relative h-40 overflow-hidden bg-gray-200">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-orange-600 border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-xs text-orange-600 font-semibold mb-1">{work.appliance}</p>
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2">{work.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedReview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-96 overflow-y-auto">
            {(() => {
              const review = reviews.find((r) => r.id === selectedReview);
              if (!review) return null;

              return (
                <div>
                  <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-gray-900">{review.name}'s Work</h2>
                    <button
                      onClick={() => setSelectedReview(null)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Problem Description</h3>
                      <p className="text-gray-600">{review.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Solution Applied</h3>
                      <p className="text-gray-600">{review.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-2">Before</p>
                        <img
                          src={review.beforeImage}
                          alt="Before"
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-2">After</p>
                        <img
                          src={review.afterImage}
                          alt="After"
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                      <p className="text-green-700 font-semibold">✓ Work Completed & Verified</p>
                      <p className="text-sm text-green-600 mt-1">{review.date}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {selectedPortfolio && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const work = portfolioWorks.find((w) => w.id === selectedPortfolio);
              if (!work) return null;

              return (
                <div>
                  <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
                    <h2 className="text-2xl font-bold text-gray-900">{work.title}</h2>
                    <button
                      onClick={() => setSelectedPortfolio(null)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <p className="text-sm text-orange-600 font-semibold mb-2">{work.appliance}</p>
                      <h3 className="font-bold text-gray-900 text-xl mb-4">{work.title}</h3>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Project Description</h4>
                      <p className="text-gray-600">{work.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 font-semibold mb-3">Before & After</p>
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-64 object-cover rounded-2xl"
                        />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 font-semibold mb-3">Project Video</p>
                        <iframe
                          width="100%"
                          height="300"
                          src={work.videoUrl}
                          title={work.title}
                          className="rounded-2xl"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                      <p className="text-green-700 font-semibold">✓ Project Completed & Verified</p>
                      <p className="text-sm text-green-600 mt-1">Professional execution with quality assurance</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
