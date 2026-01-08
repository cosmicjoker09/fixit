import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance_type: '',
    issue_description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('booking_inquiries')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        appliance_type: '',
        issue_description: '',
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit booking. Please call us directly.');
      console.error('Booking error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <section id="booking" className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 sm:p-12 text-center border-2 border-green-500">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Booking Received!
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for choosing FixIt. Our team will contact you within 30 minutes
              to confirm your appointment.
            </p>
            <a
              href="tel:+1234567890"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Us for Immediate Service
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-orange-600">Repair</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll get back to you within 30 minutes
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-10 shadow-xl border-2 border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="appliance_type" className="block text-sm font-semibold text-gray-700 mb-2">
              Appliance Type *
            </label>
            <select
              id="appliance_type"
              name="appliance_type"
              required
              value={formData.appliance_type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
            >
              <option value="">Select an appliance</option>
              <option value="TV">TV / Television</option>
              <option value="AC">Air Conditioner (AC)</option>
              <option value="Refrigerator">Refrigerator / Fridge</option>
              <option value="Cooler">Cooler / Air Cooler</option>
              <option value="Washing Machine">Washing Machine</option>
              <option value="Microwave">Microwave Oven</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="issue_description" className="block text-sm font-semibold text-gray-700 mb-2">
              Issue Description *
            </label>
            <textarea
              id="issue_description"
              name="issue_description"
              required
              value={formData.issue_description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
              placeholder="Please describe the issue you're experiencing..."
            ></textarea>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Booking Request</span>
              </>
            )}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Or call us directly at{' '}
            <a href="tel:+1234567890" className="font-bold text-orange-600 hover:underline">
              +91 XXXXX XXXXX
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
