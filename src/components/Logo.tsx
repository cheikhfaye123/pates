import React from 'react';
import { Utensils } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <Utensils className="text-red-500" size={24} />
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-red-800 rounded-t-md"></div>
      </div>
      <span className="ml-3 text-2xl font-bold text-white font-script">Pasta Pals</span>
    </a>
  );
};

export default Logo;