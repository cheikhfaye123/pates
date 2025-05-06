import React from 'react';

const FranchisingPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Franchising Opportunities</h1>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">Join the Pasta Pals family and start your own successful pasta restaurant!</p>
          <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-all transform hover:scale-105">
            Request Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default FranchisingPage;