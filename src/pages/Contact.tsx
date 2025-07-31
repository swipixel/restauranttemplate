import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Bus } from 'lucide-react';

const Contact = () => {
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
            Visit Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find us in the heart of downtown Seattle, where authentic Hungarian flavors await
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="text-hungarian-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-hungarian-red mb-2">Address</h3>
                    <p className="text-gray-700">
                      1234 Capitol Hill<br />
                      Downtown Seattle, WA 98101<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-hungarian-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-hungarian-red mb-2">Phone</h3>
                    <p className="text-gray-700">
                      Reservations: <a href="tel:+12065550123" className="hover:text-hungarian-red transition-colors">(206) 555-0123</a><br />
                      General Inquiries: <a href="tel:+12065550124" className="hover:text-hungarian-red transition-colors">(206) 555-0124</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-hungarian-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-hungarian-red mb-2">Email</h3>
                    <p className="text-gray-700">
                      Reservations: <a href="mailto:reservations@paprikahouseseattle.com" className="hover:text-hungarian-red transition-colors">reservations@paprikahouseseattle.com</a><br />
                      General: <a href="mailto:info@paprikahouseseattle.com" className="hover:text-hungarian-red transition-colors">info@paprikahouseseattle.com</a><br />
                      Events: <a href="mailto:events@paprikahouseseattle.com" className="hover:text-hungarian-red transition-colors">events@paprikahouseseattle.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-hungarian-red mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-hungarian-red mb-2">Hours</h3>
                    <div className="text-gray-700">
                      <p className="mb-2"><strong>Dinner Service</strong></p>
                      <p>Tuesday - Sunday: 4:00 PM - 10:00 PM</p>
                      <p>Closed Mondays</p>
                      <p className="mt-4 text-sm text-gray-600">
                        Kitchen closes at 9:30 PM<br />
                        Reservations recommended
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-hungarian-red mb-6">
                Our Location
              </h3>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">1234 Capitol Hill, Downtown Seattle</p>
                </div>
              </div>
              
              {/* Transportation */}
              <div className="bg-warm-cream p-6 rounded-lg">
                <h4 className="font-semibold text-hungarian-red mb-4">Getting Here</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Car className="text-hungarian-red mr-3" size={20} />
                    <div>
                      <p className="font-medium">Parking</p>
                      <p className="text-sm text-gray-600">Valet parking available evenings. Street parking and nearby garages.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bus className="text-hungarian-red mr-3" size={20} />
                    <div>
                      <p className="font-medium">Public Transit</p>
                      <p className="text-sm text-gray-600">Multiple bus routes and Link Light Rail nearby. Westlake Station is 2 blocks away.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-700 text-lg">
              Have questions about our menu, private events, or special dietary needs? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                    placeholder="(206) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="private-event">Private Event</option>
                  <option value="dietary">Dietary Restrictions/Allergies</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hungarian-red"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-hungarian-red text-white py-4 px-6 rounded-md font-medium text-lg hover:bg-hungarian-red/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;