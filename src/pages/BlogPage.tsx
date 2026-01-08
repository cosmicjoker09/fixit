import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: 'Summer AC Care: Keeping Cool Without Breaking the Bank',
      excerpt: 'Simple maintenance tips to keep your AC running efficiently during peak summer months.',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '20 Dec 2024',
      author: 'Rajesh Kumar',
      category: 'AC Care',
      content: 'Summer is here, and with it comes the challenge of keeping your home cool without sky-high electricity bills. Your air conditioner is working overtime, and proper maintenance is key to its longevity...',
    },
    {
      id: 2,
      title: 'Why Is Your Refrigerator Making Strange Noises?',
      excerpt: 'Understanding the sounds your fridge makes and when you need professional help.',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '18 Dec 2024',
      author: 'Amit Patel',
      category: 'Refrigerator',
      content: 'A noisy refrigerator can be alarming, but it doesn\'t always mean serious trouble. From the compressor humming to the ice maker clicking, many sounds are normal. However, some noises warrant professional attention...',
    },
    {
      id: 3,
      title: 'Water Purifier Maintenance: Ensuring Safe Drinking Water',
      excerpt: 'Complete guide to maintaining your water purifier for optimal performance.',
      image: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Dec 2024',
      author: 'Sneha Verma',
      category: 'Water Purifier',
      content: 'Your water purifier is your first line of defense against contaminants. Regular maintenance ensures it works efficiently and provides safe drinking water for your family. Here\'s everything you need to know...',
    },
    {
      id: 4,
      title: 'LED TV Display Issues: Common Problems & Solutions',
      excerpt: 'Troubleshooting guide for common LED TV display problems.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '12 Dec 2024',
      author: 'Rajesh Kumar',
      category: 'Television',
      content: 'Modern LED TVs are complex devices, but many display issues can be resolved with basic troubleshooting. From flickering screens to dead pixels, learn how to identify and fix common problems...',
    },
    {
      id: 5,
      title: 'Washing Machine Water Leakage: Causes & Fixes',
      excerpt: 'A step-by-step guide to identifying and fixing water leakage issues.',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '10 Dec 2024',
      author: 'Amit Patel',
      category: 'Washing Machine',
      content: 'Water leaking from your washing machine is more common than you think, and the causes vary widely. Before calling for repairs, understand what might be causing the leak and when DIY solutions work...',
    },
    {
      id: 6,
      title: 'Microwave Oven Safety: Tips for Proper Usage',
      excerpt: 'Essential safety guidelines for using your microwave oven.',
      image: 'https://images.pexels.com/photos/8965481/pexels-photo-8965481.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '8 Dec 2024',
      author: 'Sneha Verma',
      category: 'Kitchen Appliances',
      content: 'Microwave ovens are incredibly convenient, but improper use can be dangerous. Learn about microwave safety, what items are safe to cook, and maintenance tips to keep your microwave in top condition...',
    },
    {
      id: 7,
      title: 'Geyser Not Heating? Troubleshooting Water Heater Problems',
      excerpt: 'Common geyser problems and how to fix them quickly.',
      image: 'https://images.pexels.com/photos/5632393/pexels-photo-5632393.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '5 Dec 2024',
      author: 'Rajesh Kumar',
      category: 'Water Heater',
      content: 'A cold shower in winter is nobody\'s idea of fun. If your geyser isn\'t heating water properly, it could be due to several reasons. Discover the most common causes and effective solutions...',
    },
    {
      id: 8,
      title: 'Laptop Overheating? Here\'s How to Keep It Cool',
      excerpt: 'Prevent laptop overheating and extend the life of your device.',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2 Dec 2024',
      author: 'Amit Patel',
      category: 'Electronics',
      content: 'Laptop overheating can slow down performance and damage internal components. Learn effective cooling strategies, from simple cleaning to advanced solutions, to keep your laptop running smoothly...',
    },
    {
      id: 9,
      title: 'Ceiling Fan Making Noise? Expert Fixes',
      excerpt: 'How to diagnose and fix noisy ceiling fans.',
      image: 'https://images.pexels.com/photos/3912998/pexels-photo-3912998.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '30 Nov 2024',
      author: 'Sneha Verma',
      category: 'Home Comfort',
      content: 'A squeaking or rattling ceiling fan can drive you crazy. Most noise issues are easily fixable with basic maintenance and tightening. Learn what causes ceiling fan noise and how to fix it...',
    },
  ];

  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 scroll-reveal">Blog</h1>
          <p className="text-xl text-blue-100 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Tips, tricks, and insights from our expert technicians
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-500 scroll-reveal transform hover:scale-105 group"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                  {blog.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold py-2 px-4 rounded-xl border-2 border-orange-600 hover:bg-orange-50 transition-all duration-300 group/btn">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-orange-700 text-white rounded-3xl p-12 scroll-reveal">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Blog</h2>
            <p className="text-blue-100 mb-6">
              Get expert tips on appliance maintenance and repair delivered to your inbox weekly.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
