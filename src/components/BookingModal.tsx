import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { SubmissionAnimation } from './SubmissionAnimation';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  appliance?: string;
}

const appliances = [
  'Air Conditioner',
  'Refrigerator',
  'Television',
  'Washing Machine',
  'Microwave Oven',
  'Water Cooler',
  'Water Purifier',
  'Laptop & Computer',
  'Ceiling Fan',
  'Geyser (Water Heater)',
  'Microwave + Dishwasher',
  'Chimney & Kitchen Hood',
];

const brands: { [key: string]: string[] } = {
  'Air Conditioner': ['Voltas', 'Daikin', 'LG', 'Samsung', 'Hitachi', 'Carrier', 'Videocon', 'Other'],
  'Refrigerator': ['Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Sony', 'Panasonic', 'Other'],
  'Television': ['Samsung', 'LG', 'Sony', 'Mi', 'OnePlus', 'VU', 'Thomson', 'Other'],
  'Washing Machine': ['Samsung', 'LG', 'Whirlpool', 'Godrej', 'IFB', 'Haier', 'BPL', 'Other'],
  'Microwave Oven': ['Samsung', 'LG', 'IFB', 'Panasonic', 'Whirlpool', 'Godrej', 'Onida', 'Other'],
  'Water Cooler': ['Aquaguard', 'Kent', 'Blue Star', 'Eureka Forbes', 'Livpure', 'Pureit', 'Other'],
  'Water Purifier': ['Aquaguard', 'Kent', 'Livpure', 'Pureit', 'Bajaj', 'Blue Star', 'Other'],
  'Laptop & Computer': ['HP', 'Dell', 'Lenovo', 'ASUS', 'Apple', 'Sony', 'Acer', 'Other'],
  'Ceiling Fan': ['Orient', 'Havells', 'Crompton', 'Usha', 'Bajaj', 'Khaitan', 'Polar', 'Other'],
  'Geyser (Water Heater)': ['Bajaj', 'Havells', 'Ariston', 'Racold', 'AO Smith', 'Crompton', 'Other'],
  'Microwave + Dishwasher': ['Samsung', 'LG', 'IFB', 'Bosch', 'Whirlpool', 'Siemens', 'Other'],
  'Chimney & Kitchen Hood': ['Elica', 'Faber', 'Glen', 'Pigeon', 'Kaff', 'Hafele', 'Other'],
};

export function BookingModal({ isOpen, onClose, appliance }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appliance_type: appliance || '',
    appliance_brand: '',
    issue_description: '',
    appointment_date: '',
    appointment_time: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        appliance_type: appliance || '',
        appliance_brand: '',
        issue_description: '',
        appointment_date: '',
        appointment_time: '',
      });
    }
  }, [isOpen, appliance]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('service_bookings')
        .insert([formData]);

      if (error) throw error;

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          appliance_type: appliance || '',
          issue_description: '',
          appointment_date: '',
          appointment_time: '',
        });
        onClose();
      }, 2500);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[95vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-orange-700 text-white p-5 sm:p-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold">Book Service</h2>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all flex-shrink-0"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Appliance Type *</label>
              <select
                name="appliance_type"
                value={formData.appliance_type}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
              >
                <option value="">Select appliance</option>
                {appliances.map((app) => (
                  <option key={app} value={app}>
                    {app}
                  </option>
                ))}
              </select>
            </div>

            {formData.appliance_type && (
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Brand *</label>
                <select
                  name="appliance_brand"
                  value={formData.appliance_brand}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
                >
                  <option value="">Select brand</option>
                  {brands[formData.appliance_type]?.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Issue Description *</label>
              <textarea
                name="issue_description"
                value={formData.issue_description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all resize-none text-sm"
                placeholder="Describe the issue with your appliance..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Preferred Time *</label>
                <input
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none transition-all text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              {isSubmitting ? 'Booking...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>

      <SubmissionAnimation isVisible={showSuccess} message="Booking Confirmed!" />
    </>
  );
}
