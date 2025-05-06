import React from 'react';
import { Award, Utensils, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-green-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-[400px] h-[400px] rounded-full bg-white/20 absolute top-4 left-4"></div>
              <img 
                src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Fresh pasta with sauce" 
                className="w-[400px] h-[400px] object-cover rounded-full relative z-10 border-8 border-white shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-6xl md:text-7xl font-script text-white mb-8">Our Pasta Story</h2>
            <p className="text-white text-xl mb-12 leading-relaxed">
              Pasta Pals was born from a passion for authentic, delicious pasta that brings people together. 
              We source only the finest ingredients and craft each dish with care to ensure you experience 
              the perfect pasta every time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300">
                <Award className="text-white mx-auto mb-4" size={48} />
                <h3 className="text-white text-2xl font-bold mb-3">Quality</h3>
                <p className="text-white/90 text-lg">Only the finest ingredients</p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300">
                <Utensils className="text-white mx-auto mb-4" size={48} />
                <h3 className="text-white text-2xl font-bold mb-3">Authentic</h3>
                <p className="text-white/90 text-lg">Traditional recipes</p>
              </div>
              
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center transform hover:scale-105 transition-transform duration-300">
                <Clock className="text-white mx-auto mb-4" size={48} />
                <h3 className="text-white text-2xl font-bold mb-3">Fresh</h3>
                <p className="text-white/90 text-lg">Made fresh daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;