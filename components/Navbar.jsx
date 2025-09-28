import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import '@fontsource/inter'; // Defaults to weight 400

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="w-8 h-8 text-emerald-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xl lg:text-4xl font-inter font-bold">
              <span className="text-emerald-600 font-inter">Power</span>
              <span className="text-gray-700 font-inter">Trace</span>
            </div>
            <div className="hidden sm:block text-sm text-gray-500 font-medium font-inter">
              Technologies
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 font-medium font-inter transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => handleDropdown('products')}
                className="flex items-center text-gray-700 hover:text-emerald-600 font-medium font-inter transition-colors duration-200"
              >
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'products' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-300 ${
                activeDropdown === 'products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-4 space-y-3">
                  <a href="#energy-solutions" className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200 font-inter">
                    Energy Solutions
                  </a>
                  <a href="#power-monitoring" className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200 font-inter">
                    Power Monitoring
                  </a>
                  <a href="#smart-grid" className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200 font-inter">
                    Smart Grid Technology
                  </a>
                </div>
              </div>
            </div>
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => handleDropdown('services')}
                className="flex items-center text-gray-700 hover:text-emerald-600 font-medium font-inter transition-colors duration-200"
              >
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-300 ${
                activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="p-4 space-y-3">
                  <a href="#consulting" className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200 font-inter">
                    Energy Consulting
                  </a>
                  <a href="#installation" className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200 font-inter">
                    Installation Services
                  </a>
                  <a href="#maintenance" className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded transition-all duration-200 font-inter">
                    Maintenance & Support
                  </a>
                </div>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium font-inter transition-colors duration-200 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium font-inter transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-emerald-600 hover:text-emerald-700 font-medium font-inter transition-colors duration-200">
              Login
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium font-inter hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t">
            <a href="#home" className="block text-gray-700 hover:text-emerald-600 font-medium font-inter py-2 transition-colors duration-200">
              Home
            </a>
            <div className="space-y-2">
              <button 
                onClick={() => handleDropdown('mobile-products')}
                className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 font-medium font-inter py-2 transition-colors duration-200"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'mobile-products' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`pl-4 space-y-2 transition-all duration-300 ${
                activeDropdown === 'mobile-products' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <a href="#energy-solutions" className="block text-gray-600 hover:text-emerald-600 py-1 font-inter transition-colors duration-200">
                  Energy Solutions
                </a>
                <a href="#power-monitoring" className="block text-gray-600 hover:text-emerald-600 py-1 font-inter transition-colors duration-200">
                  Power Monitoring
                </a>
                <a href="#smart-grid" className="block text-gray-600 hover:text-emerald-600 py-1 font-inter transition-colors duration-200">
                  Smart Grid Technology
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => handleDropdown('mobile-services')}
                className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 font-medium font-inter py-2 transition-colors duration-200"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`pl-4 space-y-2 transition-all duration-300 ${
                activeDropdown === 'mobile-services' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <a href="#consulting" className="block text-gray-600 hover:text-emerald-600 py-1 font-inter transition-colors duration-200">
                  Energy Consulting
                </a>
                <a href="#installation" className="block text-gray-600 hover:text-emerald-600 py-1 font-inter transition-colors duration-200">
                  Installation Services
                </a>
                <a href="#maintenance" className="block text-gray-600 hover:text-emerald-600 py-1 font-inter transition-colors duration-200">
                  Maintenance & Support
                </a>
              </div>
            </div>
            <a href="#about" className="block text-gray-700 hover:text-emerald-600 font-medium font-inter py-2 transition-colors duration-200">
              About Us
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-emerald-600 font-medium font-inter py-2 transition-colors duration-200">
              Contact
            </a>
            <div className="pt-4 space-y-3 border-t">
              <button className="w-full text-emerald-600 hover:text-emerald-700 font-medium font-inter py-2 transition-colors duration-200">
                Login
              </button>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-2.5 rounded-lg font-medium font-inter hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;