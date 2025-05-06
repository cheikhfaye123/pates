import React from 'react';

const MenuPage: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Tomato & Basil',
      description: 'Classic pasta with fresh tomatoes and aromatic basil',
      price: '$7.95',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      name: 'Truffle Mushrooms',
      description: 'Luxurious pasta with wild mushrooms and truffle oil',
      price: '$9.50',
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      name: 'Mac & Cheese',
      description: 'Creamy blend of premium cheeses with elbow macaroni',
      price: '$8.50',
      image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      name: 'Carbonara',
      description: 'Traditional carbonara with pancetta and pecorino',
      price: '$8.95',
      image: 'https://images.pexels.com/photos/5175515/pexels-photo-5175515.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      name: 'Parmesan Chicken',
      description: 'Breaded chicken cutlet with parmesan and marinara',
      price: '$9.95',
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      name: 'Creamy Aglio-Olio',
      description: 'Garlic, olive oil, and cream sauce with parsley',
      price: '$8.95',
      image: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 7,
      name: 'Pastitsio',
      description: 'Greek-style baked pasta with ground meat and béchamel',
      price: '$10.95',
      image: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Menu</h1>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-script text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-500">{item.price}</span>
                  <button 
                    className="bg-red-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-600 transition-colors"
                    onClick={() => alert('Item added to cart!')}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;