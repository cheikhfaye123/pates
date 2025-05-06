import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, BookIcon as TiktokIcon, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-red-500 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-white font-medium">
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/locations">LOCATIONS</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/menu">MENU</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/news">NEWS</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/career">CAREER</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/feedback">FEEDBACK</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/franchising">FRANCHISING</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity border border-white rounded-md px-2">
              <button>EN</button>
            </li>
          </ul>
          <div className="flex space-x-4 ml-6">
            <a href="https://instagram.com" className="text-white hover:text-gray-200 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-200 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://tiktok.com" className="text-white hover:text-gray-200 transition-colors">
              <TiktokIcon size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-500 absolute w-full">
          <ul className="flex flex-col py-4 px-4 space-y-4 text-white">
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/locations" onClick={toggleMobileMenu}>LOCATIONS</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/menu" onClick={toggleMobileMenu}>MENU</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/news" onClick={toggleMobileMenu}>NEWS</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/career" onClick={toggleMobileMenu}>CAREER</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/feedback" onClick={toggleMobileMenu}>FEEDBACK</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity">
              <Link to="/franchising" onClick={toggleMobileMenu}>FRANCHISING</Link>
            </li>
            <li className="hover:opacity-80 transition-opacity inline-block border border-white rounded-md px-2 py-1">
              <button onClick={toggleMobileMenu}>EN</button>
            </li>
            <li className="pt-4">
              <div className="flex space-x-6">
                <a href="https://instagram.com" className="text-white hover:text-gray-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" className="text-white hover:text-gray-200 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://tiktok.com" className="text-white hover:text-gray-200 transition-colors">
                  <TiktokIcon size={20} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;