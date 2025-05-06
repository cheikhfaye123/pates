import React from 'react';
import { useNavigate } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  isNew?: boolean;
};

const ProductSection: React.FC = () => {
  const navigate = useNavigate();
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Tomato & Basil',
      description: 'Classic pasta with fresh tomatoes and aromatic basil',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600',
      isNew: true
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Delicious Pasta</h2>
          <div className="w-24 h-1 bg-red-500 mb-6"></div>
          <p className="text-gray-600 text-center max-w-xl">
            Made with love and the finest ingredients, our pasta dishes are sure to delight your taste buds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold uppercase py-1 px-2 rounded-full">
                    New
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-script text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => navigate('/menu')}
            className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-all transform hover:scale-105"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;