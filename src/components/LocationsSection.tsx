import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

const LocationsSection: React.FC = () => {
  const locations: Location[] = [
    {
      id: 1,
      name: 'Downtown',
      address: '123 Main Street, City Center',
      phone: '+1 (234) 567-8901',
      hours: 'Mon-Sun: 11:00 - 22:00',
      image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      name: 'Westside Mall',
      address: '456 Shopping Ave, West District',
      phone: '+1 (234) 567-8902',
      hours: 'Mon-Sun: 10:00 - 21:00',
      image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      name: 'Eastside Plaza',
      address: '789 Food Court St, East Side',
      phone: '+1 (234) 567-8903',
      hours: 'Mon-Sun: 11:00 - 22:00',
      image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Find Us</h2>
          <div className="w-24 h-1 bg-red-500 mb-6"></div>
          <p className="text-gray-600 text-center max-w-xl">
            Visit one of our locations and experience the taste of Pasta Pals in person.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{location.name}</h3>
                
                <div className="flex items-start mb-3">
                  <MapPin className="text-red-500 mr-3 flex-shrink-0 mt-1" size={18} />
                  <p className="text-gray-600">{location.address}</p>
                </div>
                
                <div className="flex items-center mb-3">
                  <Phone className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <p className="text-gray-600">{location.phone}</p>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-red-500 mr-3 flex-shrink-0" size={18} />
                  <p className="text-gray-600">{location.hours}</p>
                </div>
                
                <button className="w-full mt-6 bg-red-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-600 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;