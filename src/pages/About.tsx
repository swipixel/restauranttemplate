import React from 'react';
import { Award, Heart, Users, Leaf } from 'lucide-react';

const About = () => {
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
            Our Story
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A journey from the plains of Hungary to the heart of Seattle, 
            bringing authentic Hungarian flavors and traditions to our community
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-6">
                From Hungary to Seattle
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Paprika House was born from a dream to share the authentic flavors of Hungary 
                with the vibrant Seattle community. Founded in 2010 by the Nagy family, 
                our restaurant represents three generations of Hungarian culinary tradition 
                passed down through handwritten recipes and passionate storytelling.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our name, "Paprika House," reflects not only our 
                stunning location in downtown Seattle but also our philosophy of creating 
                beautiful experiences through exceptional food, warm hospitality, and 
                genuine connection with our guests.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every dish tells a story of our heritage, prepared with the same love and 
                attention to detail that has defined Hungarian cooking for centuries.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hungarian countryside" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-6">
                Meet Chef István Nagy
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Born in Budapest and trained in the finest kitchens of Hungary, 
                Chef István Nagy brings over 20 years of culinary expertise to Paprika House. 
                His passion for authentic Hungarian cuisine is matched only by his commitment 
                to using the finest local ingredients.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Chef István's philosophy centers on simplicity and quality – allowing the 
                natural flavors of premium ingredients to shine through traditional techniques. 
                His signature dishes have earned recognition from food critics and devoted 
                diners alike.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="text-hungarian-gold mr-3" size={20} />
                  <span className="text-gray-700">James Beard Award Nominee 2019, 2021</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-hungarian-gold mr-3" size={20} />
                  <span className="text-gray-700">Seattle Magazine's Chef of the Year 2020</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-hungarian-gold mr-3" size={20} />
                  <span className="text-gray-700">Wine Spectator Award of Excellence</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef István Nagy" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-hungarian-red mb-4">
              Our Values
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Paprika House
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-3">Passion</h3>
              <p className="text-gray-600">
                Every dish is prepared with genuine love and respect for Hungarian culinary traditions
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the finest ingredients and maintain the highest standards in preparation
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-3">Family</h3>
              <p className="text-gray-600">
                Creating a warm, welcoming environment where every guest feels like family
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-hungarian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-hungarian-red mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Supporting local farmers and sustainable practices to protect our environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-hungarian-red text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed opacity-90">
            "To create an authentic Hungarian dining experience that honors our heritage 
            while embracing the vibrant spirit of Seattle. We are committed to serving 
            exceptional food, providing warm hospitality, and building lasting connections 
            with our community through the universal language of great cuisine."
          </p>
          <div className="mt-8">
            <p className="text-lg italic">- The Nagy Family</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;