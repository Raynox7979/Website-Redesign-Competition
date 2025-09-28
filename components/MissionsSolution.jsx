import React, { useState, useEffect, useRef } from 'react';
import { 
  Battery, 
  Brain, 
  Monitor, 
  Settings, 
  Users, 
  Award, 
  Zap,
  ChevronRight,
  Target,
  Lightbulb
} from 'lucide-react';

const MissionsSolution = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeWires, setActiveWires] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const solutions = [
    {
      id: 1,
      title: "Battery Testing",
      description: "Our systems prioritize safety, reliability, and scalability, ensuring your product delivers accurate results",
      icon: Battery,
      color: "from-emerald-500 to-teal-500",
      wireColor: "emerald"
    },
    {
      id: 2,
      title: "Data Processing",
      description: "AI analytics platform to stay informed and in control -- anytime, anywhere, from any device(PC, mobile, or cloud).",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      wireColor: "blue"
    },
    {
      id: 3,
      title: "Software",
      description: "Real-time monitoring of voltage, current, and temperature ensures optimal test performance and safety.",
      icon: Monitor,
      color: "from-purple-500 to-indigo-500",
      wireColor: "purple"
    },
    {
      id: 4,
      title: "After Sales Service",
      description: "Dedicated 24/7 support & expert on-site maintenance, along with instant assistance via helpline & chat.",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      wireColor: "orange"
    },
    {
      id: 5,
      title: "Training and Support",
      description: "On portal tutorial library to build confidence through hands-on workshops (in-person & virtually).",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      wireColor: "green"
    },
    {
      id: 6,
      title: "Quality Assurance",
      description: "Consistent high-quality output and real-time production monitoring adhere to global standards and BIS compliance.",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      wireColor: "yellow"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
            
            // Activate wires with delay
            setTimeout(() => {
              setActiveWires(prev => new Set([...prev, index]));
            }, index * 300);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const WireAnimation = ({ isActive, color, index }) => {
    const wirePathVariants = [
      "M 0,50 Q 50,10 100,50 T 200,50",
      "M 0,50 Q 50,90 100,50 T 200,50",
      "M 0,50 Q 30,20 60,50 Q 90,80 120,50 Q 150,20 180,50",
    ];
    
    return (
      <svg 
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        viewBox="0 0 200 100"
      >
        <defs>
          <linearGradient id={`wireGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgb(var(--color-${color}-400))`} stopOpacity="0" />
            <stop offset="50%" stopColor={`rgb(var(--color-${color}-400))`} stopOpacity="1" />
            <stop offset="100%" stopColor={`rgb(var(--color-${color}-400))`} stopOpacity="0" />
          </linearGradient>
          <filter id={`glow-${index}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {wirePathVariants.map((path, pathIndex) => (
          <path
            key={pathIndex}
            d={path}
            stroke={`url(#wireGradient-${index})`}
            strokeWidth="2"
            fill="none"
            filter={`url(#glow-${index})`}
            style={{
              strokeDasharray: "200",
              strokeDashoffset: isActive ? "0" : "200",
              transition: `stroke-dashoffset 2s ease-in-out ${pathIndex * 0.5}s`,
            }}
          />
        ))}
        
        {/* Neural nodes */}
        {[20, 60, 100, 140, 180].map((x, nodeIndex) => (
          <circle
            key={nodeIndex}
            cx={x}
            cy="50"
            r="3"
            fill={`rgb(var(--color-${color}-400))`}
            className={`transition-all duration-1000 ${
              isActive ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}
            style={{
              transitionDelay: `${nodeIndex * 0.2}s`
            }}
          />
        ))}
      </svg>
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Mission Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px',
            animation: 'float 20s ease-in-out infinite'
          }}></div>
        </div>

        {/* Floating Energy Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-700/50 backdrop-blur-sm rounded-full border border-emerald-400/20 text-emerald-300 text-sm font-medium font-inter mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-8 leading-tight font-inter">
              Mission
            </h2>
            
            <p className="text-xl text-emerald-100 leading-relaxed mb-8 max-w-4xl mx-auto font-inter">
              Build an ecosystem for India's manufacturing industry by converging precision, 
              reliability and accuracy via efficient testing & measurement solutions.
            </p>
            
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-emerald-900 font-semibold rounded-xl shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1 font-inter">
              <Lightbulb className="w-5 h-5 mr-2" />
              AIM
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative bg-gradient-to-br from-gray-100 to-white py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-800 mb-6 font-inter">
              Our Solutions
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isVisible = visibleItems.has(index);
              const hasActiveWires = activeWires.has(index);
              
              return (
                <div
                  key={solution.id}
                  ref={el => itemRefs.current[index] = el}
                  data-index={index}
                  className={`group relative transition-all duration-700 transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Wire Animation Background */}
                  <div className="absolute -inset-8 z-0">
                    <WireAnimation 
                      isActive={hasActiveWires} 
                      color={solution.wireColor} 
                      index={index}
                    />
                  </div>

                  {/* Main Card */}
                  <div className="relative z-10 text-center space-y-8">
                    {/* Large Icon */}
                    <div className="relative flex justify-center">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} rounded-3xl blur-2xl opacity-30 animate-pulse scale-110`}></div>
                        <div className="relative bg-emerald-700 rounded-3xl p-8 shadow-2xl">
                          <IconComponent className="w-24 h-24 text-emerald-100" />
                          
                          {/* Neural network connections */}
                          <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Large Title */}
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-emerald-800 group-hover:text-emerald-600 transition-colors duration-300 font-inter">
                        {solution.title}
                      </h3>
                      
                      <p className="text-lg text-gray-700 leading-relaxed font-inter">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-inter">
              <Zap className="w-5 h-5 mr-2" />
              DISCOVER MORE
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        :root {
          --color-emerald-400: 52, 211, 153;
          --color-blue-400: 96, 165, 250;
          --color-purple-400: 196, 181, 253;
          --color-orange-400: 251, 146, 60;
          --color-green-400: 74, 222, 128;
          --color-yellow-400: 250, 204, 21;
        }
      `}</style>
    </div>
  );
};

export default MissionsSolution;