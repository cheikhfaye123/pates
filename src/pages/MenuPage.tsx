import React from 'react';

const MenuPage: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Tomato & Basil',
      description: 'Classic pasta with fresh tomatoes and aromatic basil',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      name: 'Truffle Mushrooms',
      description: 'Luxurious pasta with wild mushrooms and truffle oil',
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      name: 'Mac & Cheese',
      description: 'Creamy blend of premium cheeses with elbow macaroni',
      image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      name: 'Carbonara',
      description: 'Traditional carbonara with pancetta and pecorino',
      image: 'https://images.pexels.com/photos/5175515/pexels-photo-5175515.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      name: 'Parmesan Chicken',
      description: 'Breaded chicken cutlet with parmesan and marinara',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 6,
      name: 'Creamy Aglio-Olio',
      description: 'Garlic, olive oil, and cream sauce with parsley',
      image: 'https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 7,
      name: 'Pastitsio',
      description: 'Greek-style baked pasta with ground meat and béchamel',
      image: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1600'
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
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;