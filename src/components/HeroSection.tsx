import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      backgroundColor: 'bg-green-400',
      title: 'Creamy Pesto',
      description: 'Our signature pasta with fresh basil pesto',
      imageSrc: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      backgroundColor: 'bg-red-500',
      title: 'Spicy Arrabbiata',
      description: 'Perfectly spiced tomato sauce with garlic and chili',
      imageSrc: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1600',
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="pt-16 relative min-h-screen">
      {/* Background Items */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-white/10 opacity-50"></div>
        <div className="absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-white/10 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-white/10 opacity-50"></div>
      </div>
      
      {/* Slide */}
      <div
        className={`w-full min-h-screen transition-colors duration-700 ease-in-out flex items-center ${slides[currentSlide].backgroundColor}`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 text-white">
              <h1 className="text-6xl md:text-7xl font-script mb-4 animate-fadeIn">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-md animate-slideUp">
                {slides[currentSlide].description}
              </p>
              <button className="bg-white text-red-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 animate-fadeIn">
                Order Now
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative animate-slideInRight">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/20 absolute"></div>
              <div className="relative z-10">
                <img
                  src={slides[currentSlide].imageSrc}
                  alt={slides[currentSlide].title}
                  className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;