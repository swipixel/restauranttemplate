import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  if (submitted) {
    return (
      <div className="pt-28 min-h-screen bg-cream flex items-center justify-center">
        <div className="bg-white p-12 rounded-lg shadow-xl text-center max-w-md">
          <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
          <h2 className="text-3xl font-serif font-bold text-burgundy mb-4">
            Reservation Confirmed!
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you for your reservation. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="bg-cream p-4 rounded-md text-left">
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Guests:</strong> {formData.guests}</p>
          </div>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-burgundy text-white px-6 py-2 rounded-md hover:bg-burgundy/90 transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hungarian-red to-hungarian-red/90">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Reservations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Secure your table for an unforgettable Hungarian dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-serif font-bold text-hungarian-red mb-6">
                  Make a Reservation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                      placeholder="(206) 555-0123"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline mr-2" size={16} />
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline mr-2" size={16} />
                        Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline mr-2" size={16} />
                        Guests *
                      </label>
                      <select
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                      placeholder="Allergies, celebrations, seating preferences, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-hungarian-red text-white py-4 px-6 rounded-md font-medium text-lg hover:bg-hungarian-red/90 transition-colors"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </div>

              {/* Info Panel */}
              <div className="bg-hungarian-red text-white p-8 lg:p-12">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Reservation Information
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Dinner Service</h4>
                    <p className="text-white/90">Tuesday - Sunday: 4:00 PM - 10:00 PM</p>
                    <p className="text-white/90 text-sm">Closed Mondays</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Group Reservations</h4>
                    <p className="text-white/90">
                      For parties of 10 or more, please call us directly at (206) 555-0123 
                      to discuss special arrangements.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                    <p className="text-white/90">
                      Please provide at least 2 hours notice for cancellations. 
                      Same-day cancellations may incur a fee for large parties.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Private Events</h4>
                    <p className="text-white/90">
                      Paprika House offers private dining experiences for special occasions. 
                      Contact us to discuss custom menus and arrangements.
                    </p>
                  </div>

                  <div className="bg-white/10 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p className="text-white/90 text-sm">
                      Call us at (206) 555-0123 or email reservations@paprikahouseseattle.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;