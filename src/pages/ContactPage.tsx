import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appliance: '',
    message: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const [formType, setFormType] = useState<'contact' | 'booking'>('contact');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`${formType === 'contact' ? 'Inquiry' : 'Appointment'} submitted! We'll contact you soon.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      appliance: '',
      message: '',
      appointmentDate: '',
      appointmentTime: '',
    });
  };

  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 scroll-reveal">Contact Us</h1>
          <p className="text-xl text-blue-100 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Reach out for expert appliance repair solutions
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all transform hover:scale-105 scroll-reveal">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">Available 24/7 for emergency support</p>
            <a href="tel:+1234567890" className="text-orange-600 font-bold hover:text-orange-700">
              +1 234 567 890
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all transform hover:scale-105 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">We respond within 24 hours</p>
            <a href="mailto:support@fixitservices.com" className="text-blue-600 font-bold hover:text-blue-700">
              support@fixitservices.com
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-500 transition-all transform hover:scale-105 scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-2">Quick messaging support</p>
            <a href="https://wa.me/1234567890" className="text-green-600 font-bold hover:text-green-700">
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 scroll-reveal">Hours of Operation</h2>

            <div className="space-y-4">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM', icon: Clock },
                { day: 'Saturday', hours: '9:00 AM - 8:00 PM', icon: Clock },
                { day: 'Sunday', hours: '10:00 AM - 6:00 PM', icon: Clock },
                { day: 'Holidays', hours: '24/7 Emergency Service', icon: Phone },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl scroll-reveal"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <item.icon className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.day}</p>
                    <p className="text-sm text-gray-600">{item.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 scroll-reveal">Follow Us</h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Facebook, label: 'Facebook', url: 'https://facebook.com', color: 'from-blue-600 to-blue-700' },
                { icon: Instagram, label: 'Instagram', url: 'https://instagram.com', color: 'from-pink-600 to-rose-700' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'from-blue-600 to-blue-800' },
                { icon: MessageSquare, label: 'WhatsApp', url: 'https://wa.me/1234567890', color: 'from-green-600 to-green-700' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className={`bg-gradient-to-br ${social.color} text-white rounded-2xl p-6 flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105 scroll-reveal`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="font-semibold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-900 to-orange-700 text-white p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 scroll-reveal">Quick & Easy Booking</h2>
              <div className="space-y-4">
                {[
                  'Select your appliance type',
                  'Choose preferred date & time',
                  'Describe the issue briefly',
                  'Confirmation via SMS/Email',
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4 scroll-reveal" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div className="bg-white text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-white/90">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setFormType('contact')}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    formType === 'contact'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  General Inquiry
                </button>
                <button
                  onClick={() => setFormType('booking')}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    formType === 'booking'
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Book Appointment
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Appliance Type</label>
                  <select
                    name="appliance"
                    value={formData.appliance}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all"
                  >
                    <option value="">Select appliance</option>
                    <option value="ac">Air Conditioner</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="tv">Television</option>
                    <option value="washing-machine">Washing Machine</option>
                    <option value="microwave">Microwave</option>
                    <option value="cooler">Cooler</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formType === 'booking' && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Time</label>
                      <input
                        type="time"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {formType === 'contact' ? 'Your Message' : 'Issue Description'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {formType === 'contact' ? 'Send Inquiry' : 'Book Appointment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
