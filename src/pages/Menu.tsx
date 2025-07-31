import React, { useState } from 'react';
import { Leaf, Wheat } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Előételek' },
    { id: 'soups', name: 'Levesek' },
    { id: 'mains', name: 'Főételek' },
    { id: 'desserts', name: 'Desszertek' },
    { id: 'beverages', name: 'Italok' }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Körözött',
        description: 'Traditional Hungarian cheese spread with paprika, onions, and caraway seeds, served with fresh bread',
        price: 12,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Lángos',
        description: 'Deep-fried flatbread topped with sour cream, cheese, and your choice of toppings',
        price: 14,
        vegetarian: true,
        glutenFree: false
      },
      {
        name: 'Töltött Tojás',
        description: 'Deviled eggs Hungarian style with paprika, mustard, and fresh herbs',
        price: 10,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Hurka és Kolbász',
        description: 'Traditional Hungarian blood sausage and smoked sausage platter with pickles',
        price: 18,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Rántott Sajt',
        description: 'Breaded and fried cheese served with tartar sauce and cranberry jam',
        price: 16,
        vegetarian: true,
        glutenFree: false
      }
    ],
    soups: [
      {
        name: 'Gulyásleves',
        description: 'Traditional Hungarian goulash soup with beef, vegetables, and paprika',
        price: 16,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Halászlé',
        description: 'Spicy fisherman\'s soup with river fish, paprika, and vegetables',
        price: 18,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Újházi Tyúkhúsleves',
        description: 'Clear chicken soup with vegetables and homemade noodles',
        price: 14,
        vegetarian: false,
        glutenFree: false
      },
      {
        name: 'Gombaleves',
        description: 'Creamy mushroom soup with Hungarian paprika and fresh herbs',
        price: 12,
        vegetarian: true,
        glutenFree: true
      }
    ],
    mains: [
      {
        name: 'Wiener Schnitzel',
        description: 'Breaded veal cutlet served with lemon, potato salad, and lingonberry sauce',
        price: 34,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Paprikás Csirke',
        description: 'Chicken paprikash in creamy paprika sauce served with dumplings',
        price: 26,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Töltött Káposzta',
        description: 'Stuffed cabbage rolls with ground pork, rice, and paprika sauce',
        price: 24,
        vegetarian: false,
        glutenFree: true
      },
      {
        name: 'Rántott Borjúszelet',
        description: 'Breaded veal cutlet with potato salad and cucumber salad',
        price: 32,
        vegetarian: false,
        glutenFree: false
      },
      {
        name: 'Vegetáriánus Töltött Paprika',
        description: 'Vegetarian stuffed peppers with rice, vegetables, and herbs',
        price: 22,
        vegetarian: true,
        glutenFree: true
      }
    ],
    desserts: [
      {
        name: 'Kürtőskalács',
        description: 'Traditional chimney cake with cinnamon sugar and vanilla ice cream',
        price: 14,
        vegetarian: true,
        glutenFree: false
      },
      {
        name: 'Dobos Torta',
        description: 'Classic Hungarian layer cake with chocolate buttercream and caramel top',
        price: 12,
        vegetarian: true,
        glutenFree: false
      },
      {
        name: 'Somlói Galuska',
        description: 'Traditional trifle with sponge cake, chocolate sauce, and whipped cream',
        price: 13,
        vegetarian: true,
        glutenFree: false
      },
      {
        name: 'Rétes',
        description: 'Traditional strudel with apple, cherry, or poppy seed filling',
        price: 11,
        vegetarian: true,
        glutenFree: false
      },
      {
        name: 'Palacsinta',
        description: 'Hungarian crepes with jam, chocolate, or cottage cheese filling',
        price: 10,
        vegetarian: true,
        glutenFree: false
      }
    ],
    beverages: [
      {
        name: 'Hungarian Wine Selection',
        description: 'Curated Hungarian wines including Tokaj and Egri Bikavér - ask your server',
        price: 14,
        vegetarian: true,
        glutenFree: true
      },
      {
        name: 'Hungarian Coffee',
        description: 'Strong Hungarian coffee served black or with cream',
        price: 4,
        vegetarian: true,
        glutenFree: true
      },
      {
        name: 'Pálinka',
        description: 'Traditional Hungarian fruit brandy - various flavors available',
        price: 12,
        vegetarian: true,
        glutenFree: true
      },
      {
        name: 'Unicum',
        description: 'Traditional Hungarian herbal liqueur, served as digestif',
        price: 10,
        vegetarian: true,
        glutenFree: true
      },
      {
        name: 'Fröccs',
        description: 'Hungarian wine spritzer with sparkling water',
        price: 5,
        vegetarian: true,
        glutenFree: true
      },
      {
        name: 'Hungarian Mineral Water',
        description: 'Sparkling or still mineral water from Hungarian springs',
        price: 6,
        vegetarian: true,
        glutenFree: true
      }
    ]
  };

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
            Étlapunk
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Authentic Hungarian cuisine crafted with passion, tradition, and the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 mx-2 mb-4 font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'text-hungarian-red border-b-2 border-hungarian-red'
                    : 'text-gray-600 hover:text-hungarian-red'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-hungarian-red">{item.name}</h3>
                    <div className="flex gap-2">
                      {item.vegetarian && (
                        <Leaf className="text-green-600" size={16} title="Vegetarian" />
                      )}
                      {item.glutenFree && (
                        <Wheat className="text-amber-600" size={16} title="Gluten Free" />
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-2xl font-semibold text-hungarian-gold">${item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Notes */}
          <div className="mt-16 bg-warm-cream p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-hungarian-red mb-4">Menu Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="text-green-600" size={20} />
                  <span className="font-semibold">Vegetarian Options Available</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Wheat className="text-amber-600" size={20} />
                  <span className="font-semibold">Gluten-Free Options Available</span>
                </div>
                <p className="text-sm">
                  Please inform your server of any allergies or dietary restrictions. 
                  We're happy to accommodate special requests when possible.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hungarian Wine Pairing</h4>
                <p className="text-sm mb-4">
                  Our sommelier has carefully selected Hungarian wines to complement each dish. 
                  Ask your server for pairing recommendations.
                </p>
                <p className="text-sm font-medium">
                  Prices subject to change based on seasonal availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;