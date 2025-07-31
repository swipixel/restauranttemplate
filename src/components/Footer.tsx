import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-hungarian-gold mb-4">Paprika House</h3>
            <p className="text-gray-300 mb-4">
              Authentic Hungarian cuisine in the heart of downtown Seattle. 
              Experience the rich flavors of Hungary with traditional recipes and locally sourced ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hungarian-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hungarian-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hungarian-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-hungarian-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-hungarian-gold" />
                <div>
                  <p>1234 Capitol Hill</p>
                  <p>Seattle, WA 98101</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-hungarian-gold" />
                <p>(206) 555-0123</p>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-hungarian-gold" />
                <p>info@paprikahouseseattle.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-hungarian-gold mb-4">Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock size={16} className="mr-3 text-hungarian-gold" />
                <div>
                  <p className="font-medium">Dinner Service</p>
                  <p className="text-gray-300">Tue-Sun: 4:00 PM - 10:00 PM</p>
                  <p className="text-gray-300 text-sm">Closed Mondays</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-300 text-sm">
                  Reservations recommended
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-hungarian-gold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe for special offers and seasonal menu updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hungarian-gold"
              />
              <button
                type="submit"
                className="w-full bg-hungarian-gold text-forest-green py-2 px-4 rounded-md font-medium hover:bg-hungarian-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Paprika House. All rights reserved. | 
            <a href="#" className="hover:text-hungarian-gold transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-hungarian-gold transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;