import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Users, ChefHat } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-black/70 to-black/50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Paprika House
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Authentic Hungarian dining in the heart of downtown Seattle. 
              Where traditional Magyar recipes meet locally sourced ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/reservations"
                className="bg-hungarian-red hover:bg-hungarian-red/90 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors inline-block text-center"
              >
                Make Reservation
              </Link>
              <Link 
                to="/menu"
                className="border-2 border-white text-white hover:bg-white hover:text-hungarian-red px-8 py-4 rounded-md font-medium text-lg transition-all inline-block text-center"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-6">
                A Taste of Hungary in Seattle
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Since 2010, Paprika House has been serving authentic Hungarian cuisine crafted 
                from time-honored family recipes. Our passionate team, led by Chef István Nagy, 
                creates unforgettable dining experiences using the finest local ingredients 
                and traditional Hungarian techniques.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                From our handmade spaetzle to our carefully curated Hungarian wine selection, 
                every detail reflects our commitment to bringing you the true flavors of Hungary.
              </p>
              <Link 
                to="/about"
                className="text-hungarian-red font-medium hover:text-hungarian-red/80 transition-colors"
              >
                Learn Our Story →
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing goulash" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-4">
              Why Choose Paprika House
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Experience authentic Hungarian dining with exceptional service and attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-2">Expert Chef</h3>
              <p className="text-gray-600">
                Led by Chef István Nagy with 20+ years of authentic Hungarian culinary experience
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-2">Award Winning</h3>
              <p className="text-gray-600">
                Recognized as Seattle's Best Hungarian Restaurant three years running
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                Locally sourced produce and imported Hungarian specialties for authentic flavors
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-2">Private Events</h3>
              <p className="text-gray-600">
                Perfect venue for intimate dinners, celebrations, and corporate events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-4">
              Signature Dishes
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with passion and authentic Hungarian techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Goulash" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-hungarian-red mb-2">Gulyás (Traditional Goulash)</h3>
                <p className="text-gray-600 mb-4">
                  Hearty beef stew with paprika, vegetables, and potatoes, served with fresh bread
                </p>
                <p className="text-hungarian-gold font-semibold text-lg">$28</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Schnitzel" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-hungarian-red mb-2">Wiener Schnitzel</h3>
                <p className="text-gray-600 mb-4">
                  Breaded veal cutlet served with lemon, potato salad, and lingonberry sauce
                </p>
                <p className="text-hungarian-gold font-semibold text-lg">$34</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chimney Cake" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-hungarian-red mb-2">Kürtőskalács (Chimney Cake)</h3>
                <p className="text-gray-600 mb-4">
                  Traditional sweet spiral pastry with cinnamon sugar and vanilla ice cream
                </p>
                <p className="text-hungarian-gold font-semibold text-lg">$14</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/menu"
              className="bg-hungarian-red hover:bg-hungarian-red/90 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hungarian-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready for an Unforgettable Dining Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserve your table today and discover why Paprika House is Seattle's premier Hungarian restaurant
          </p>
          <Link 
            to="/reservations"
            className="bg-hungarian-gold hover:bg-hungarian-gold/90 text-forest-green px-8 py-4 rounded-md font-medium text-lg transition-colors inline-block"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;