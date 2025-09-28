import React, { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';

const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Industry images based on the original website
  const industryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Aerospace Industry"
    },
    {
      id: 2, 
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Power Infrastructure"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
      alt: "Space Technology"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Manufacturing"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Automotive Production"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row - 3 Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {industryImages.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } hover:scale-105 hover:shadow-xl`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Middle Row - Logo + 2 Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6">
          
          {/* Left Image */}
          <div
            ref={el => itemRefs.current[3] = el}
            data-index={3}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
              visibleItems.has(3) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } hover:scale-105 hover:shadow-xl`}
            style={{
              transitionDelay: '600ms'
            }}
          >
            <img 
              src={industryImages[3].image} 
              alt={industryImages[3].alt}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Center Logo */}
          <div
            ref={el => itemRefs.current[5] = el}
            data-index={5}
            className={`flex flex-col items-center justify-center py-16 transition-all duration-700 transform ${
              visibleItems.has(5) 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: '800ms'
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative flex items-center space-x-3 bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="relative">
                  <Zap className="w-8 h-8 text-emerald-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold">
                  <span className="text-emerald-600">POWER</span>
                  <span className="text-gray-700">TRACE</span>
                </div>
              </div>
              <div className="text-center mt-3 text-gray-600 font-medium">
                Technologies
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={el => itemRefs.current[4] = el}
            data-index={4}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
              visibleItems.has(4) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } hover:scale-105 hover:shadow-xl`}
            style={{
              transitionDelay: '1000ms'
            }}
          >
            <img 
              src={industryImages[4].image} 
              alt={industryImages[4].alt}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Bottom Row - 3 Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rocket Engines */}
          <div
            ref={el => itemRefs.current[6] = el}
            data-index={6}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
              visibleItems.has(6) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } hover:scale-105 hover:shadow-xl`}
            style={{
              transitionDelay: '1200ms'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Rocket Engine Technology"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Circuit Board/Microprocessor */}
          <div
            ref={el => itemRefs.current[7] = el}
            data-index={7}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
              visibleItems.has(7) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } hover:scale-105 hover:shadow-xl`}
            style={{
              transitionDelay: '1400ms'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Circuit Board Technology"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Aircraft Technology */}
          <div
            ref={el => itemRefs.current[8] = el}
            data-index={8}
            className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-700 transform ${
              visibleItems.has(8) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } hover:scale-105 hover:shadow-xl`}
            style={{
              transitionDelay: '1600ms'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Aircraft Technology"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;