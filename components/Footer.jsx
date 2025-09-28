import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MapPin, 
  Zap, 
  Linkedin, 
  Twitter, 
  Instagram,
  Mail,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#linkedin",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter, 
      href: "#twitter",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      href: "#instagram", 
      label: "Instagram",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-50 to-white py-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 60px 60px'
        }}></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Company Information */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Company Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Zap className="w-8 h-8 text-emerald-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-emerald-600 font-inter">
                  Powertrace Technologies
                </h3>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-inter">Contact</p>
                  <a 
                    href="tel:9406043519" 
                    className="text-lg text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200 font-inter"
                  >
                    9406043519
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-inter">Address</p>
                  <address className="text-lg text-gray-700 not-italic leading-relaxed font-inter">
                    H1A/20, Sector-63, Noida,<br />
                    Gautam Buddha Nagar,<br />
                    Noida, UP, India, 201301
                  </address>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500 mb-3 font-inter">Connect with us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-3 bg-gray-100 hover:bg-emerald-50 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color} group`}
                    >
                      <IconComponent className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform duration-200 font-inter" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Equipment Image */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative group">
              <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="PowerTrace Testing Equipment Array"
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Equipment Labels */}
                <div className="absolute top-8 left-8 space-y-2">
                  {Array.from({length: 5}).map((_, index) => (
                    <div 
                      key={index}
                      className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-semibold transform transition-all duration-300 font-inter"
                      style={{
                        transform: `translateY(${index * 35}px) rotate(-90deg)`,
                        transformOrigin: 'left center'
                      }}
                    >
                      POWERTRACE
                    </div>
                  ))}
                </div>

                {/* Status Indicators */}
                <div className="absolute top-4 right-4 space-y-2">
                  {Array.from({length: 4}).map((_, index) => (
                    <div 
                      key={index}
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{
                        backgroundColor: ['#10b981', '#f59e0b', '#3b82f6', '#ef4444'][index],
                        animationDelay: `${index * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-emerald-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 font-inter">Active</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-emerald-100">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-800 font-inter">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 font-inter">© Copyright 2025 |</span>
              <span className="text-sm font-semibold text-emerald-600 font-inter">Powertrace Technologies</span>
              <span className="text-sm text-gray-500 font-inter">All Rights Reserved</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#privacy" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors duration-200 font-inter">
                Privacy Policy
              </a>
              <span className="text-gray-300 font-inter">|</span>
              <a href="#terms" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors duration-200 font-inter">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;