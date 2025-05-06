import React from 'react';
import { Instagram, Facebook, BookIcon as TiktokIcon, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <p className="mt-4 max-w-xs">
              Delicious pasta crafted with love and care. 
              Made from the finest ingredients for the perfect meal.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-white hover:text-gray-200 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-gray-200 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://tiktok.com" className="text-white hover:text-gray-200 transition-colors">
                <TiktokIcon size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/locations" className="hover:underline">Locations</Link></li>
              <li><Link to="/menu" className="hover:underline">Menu</Link></li>
              <li><Link to="/news" className="hover:underline">News</Link></li>
              <li><Link to="/career" className="hover:underline">Career</Link></li>
              <li><Link to="/feedback" className="hover:underline">Feedback</Link></li>
              <li><Link to="/franchising" className="hover:underline">Franchising</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-1" size={18} />
                <span>123 Pasta Street, Food District, City</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span>+1 (234) 567-8901</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span>info@pastapals.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Pasta Pals. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;