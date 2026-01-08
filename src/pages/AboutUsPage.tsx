import { Users, Award, Briefcase, Heart } from 'lucide-react';

export default function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Founder & Lead Technician',
      experience: '17 years',
      image: 'https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Started as an LG service engineer with 9 years of experience. Built FixIt from passion for quality service and customer satisfaction.',
      projects: '2400+',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Service Manager',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Expert in customer relations and service coordination. Ensures every customer gets top-notch service with timely delivery.',
      projects: '1800+',
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Technical Lead',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Specializes in complex appliance repairs and diagnostics. Trained on latest technology and equipment.',
      projects: '2100+',
    },
    {
      id: 4,
      name: 'Sneha Verma',
      role: 'Customer Care Lead',
      experience: '6 years',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Dedicated to customer satisfaction and feedback. Available 24/7 to support and assist with any service queries.',
      projects: '950+',
    },
  ];

  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 scroll-reveal">About Us</h1>
          <p className="text-xl text-blue-100 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            A journey of passion, expertise, and commitment to excellence
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-reveal">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <p>
              FixIt was born from a passion for excellence that began in childhood. Our founder, Rajesh Kumar, was always fascinated by how things work. This curiosity led him to pursue a career in appliance repair, starting as a service engineer at LG.
            </p>
            <p>
              For 9 years, he worked at LG, mastering the complexities of various appliances and learning the importance of timely, quality service. Every repair was an opportunity to learn, every customer interaction a lesson in service excellence.
            </p>
            <p>
              In 2007, with experience and confidence, he took a bold step and joined a private service company as a Hired Service Engineer for 2 years. This experience taught him the value of entrepreneurship and the potential for personalized, customer-focused service.
            </p>
            <p>
              Year on year, his project portfolio grew. The demand for his expertise increased, and so did the complexity of the problems he tackled. Self-servicing projects became more frequent, and the vision of FixIt was crystallized.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 text-center scroll-reveal border-2 border-blue-200 hover:border-orange-500 transition-all hover:scale-105">
            <div className="text-4xl font-bold text-orange-600 mb-2">17+</div>
            <p className="text-gray-900 font-semibold">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 text-center scroll-reveal border-2 border-blue-200 hover:border-orange-500 transition-all hover:scale-105" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-orange-600 mb-2">7000+</div>
            <p className="text-gray-900 font-semibold">Satisfied Customers</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 text-center scroll-reveal border-2 border-blue-200 hover:border-orange-500 transition-all hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-orange-600 mb-2">8000+</div>
            <p className="text-gray-900 font-semibold">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 text-center scroll-reveal border-2 border-blue-200 hover:border-orange-500 transition-all hover:scale-105" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <p className="text-gray-900 font-semibold">Customer Satisfaction</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-12 scroll-reveal">Our Journey</h2>

        <div className="space-y-6 mb-16">
          <div className="relative pl-8 border-l-4 border-orange-600 scroll-reveal">
            <div className="absolute -left-3 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2007 - Foundation Year</h3>
              <p className="text-gray-600">Started as a service engineer at a private company. Built foundational skills and customer base. Completed 150+ projects in the first year.</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-4 border-orange-600 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -left-3 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2010 - Growth Phase</h3>
              <p className="text-gray-600">Expanded services to multiple appliances. Hired first team member. Annual projects increased to 500+. Recognition from leading brands.</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-4 border-orange-600 scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -left-3 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2015 - Expansion Era</h3>
              <p className="text-gray-600">Established FixIt as a brand. Launched 24/7 customer support. Crossed 3000+ satisfied customers. Introduced AMC plans.</p>
            </div>
          </div>

          <div className="relative pl-8 border-l-4 border-orange-600 scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -left-3 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2024 - Present Excellence</h3>
              <p className="text-gray-600">Serving 7000+ customers with 8000+ completed projects. 98% satisfaction rate. Trusted by families across the city. Continuous innovation in service delivery.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-12 scroll-reveal">Our Team</h2>

        <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border-2 border-gray-100">
          <img
            src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Team"
            className="w-full h-96 object-cover rounded-2xl mb-8 scroll-reveal"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-orange-500 scroll-reveal group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-2">{member.role}</p>

                <div className="flex items-center space-x-2 mb-3 text-gray-600 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>{member.experience}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-orange-600">{member.projects}</p>
                  <p className="text-xs text-gray-600">Projects Completed</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center scroll-reveal border-2 border-blue-200 hover:border-orange-500 transition-all hover:scale-105">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Passion</h3>
            <p className="text-gray-600 text-sm">Driven by love for quality work and customer satisfaction</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center scroll-reveal border-2 border-orange-200 hover:border-orange-500 transition-all hover:scale-105" style={{ animationDelay: '0.1s' }}>
            <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">Commitment to highest standards in every repair</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center scroll-reveal border-2 border-blue-200 hover:border-orange-500 transition-all hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">Building lasting relationships with our customers</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center scroll-reveal border-2 border-orange-200 hover:border-orange-500 transition-all hover:scale-105" style={{ animationDelay: '0.3s' }}>
            <Briefcase className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600 text-sm">Deep knowledge built over 17 years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
