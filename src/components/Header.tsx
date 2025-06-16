import React, { useState, useEffect } from 'react';
import { Menu, X, Map, BarChart3, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-primary mr-2" />
          <h1 className={`text-xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
            Sector Success Map
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Explore Map', 'Case Studies', 'Methodology', 'About'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`${
                    scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
                  } transition-colors font-medium`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-primary mr-2" />
                <h1 className="text-xl font-bold text-primary">Sector Success Map</h1>
              </div>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            
            <ul className="space-y-6 text-center">
              {['Explore Map', 'Case Studies', 'Methodology', 'About'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-xl text-gray-700 hover:text-primary block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;