import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Zap, Shield, TrendingUp, Users, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: TrendingUp },
    { number: "50+", label: "Industry Partners", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  ];

  const features = [
    "Advanced Power Analytics",
    "Real-time Monitoring",
    "Predictive Maintenance",
    "Energy Optimization"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating Energy Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Lightning Animation */}
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <Zap className="w-16 h-16 text-yellow-400 animate-bounce" style={{animationDelay: '0.5s'}} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-700/50 backdrop-blur-sm rounded-full border border-emerald-400/20 text-emerald-300 text-sm font-medium font-inter">
              <Zap className="w-4 h-4 mr-2" />
              India's Leading Power Technology Solutions
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-inter">
                Powering the
                <span className="block bg-gradient-to-r from-yellow-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse font-inter">
                  Future of Energy
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-100 leading-relaxed font-inter">
                Advanced testing & measurement solutions for India's manufacturing industry
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center text-emerald-200 transition-all duration-500 font-inter ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-inter">
                <span className="flex items-center justify-center font-inter">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-emerald-400/50 hover:border-emerald-400 text-emerald-300 hover:text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-300 font-inter">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-emerald-700/50">
              <div className="flex items-center justify-between">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className={`text-center transition-all duration-500 font-inter ${
                        currentStat === index ? 'scale-110 text-emerald-300' : 'text-emerald-400'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2 font-inter">
                        <IconComponent className="w-5 h-5 mr-1" />
                        <div className="text-2xl font-bold font-inter">{stat.number}</div>
                      </div>
                      <div className="text-sm text-emerald-200 font-inter">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Visualization */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              {/* Main Circle - Power Core */}
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-full backdrop-blur-sm border border-emerald-400/30"></div>
                
                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-400 to-emerald-500 rounded-full shadow-2xl animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 to-emerald-400/50 rounded-full blur-md"></div>
                  <div className="relative flex items-center justify-center h-full">
                    <Zap className="w-12 h-12 text-white animate-bounce" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-8 h-8"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * 90}deg) translateY(-140px)`,
                      animation: `orbit 8s linear infinite ${index * 2}s`
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full shadow-lg animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute top-10 -left-10 bg-emerald-800/50 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20 animate-float">
                <div className="text-emerald-300 text-2xl font-bold font-inter">24/7</div>
                <div className="text-emerald-200 text-sm font-inter">Monitoring</div>
              </div>
              
              <div className="absolute bottom-10 -right-10 bg-emerald-800/50 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20 animate-float delay-1000">
                <div className="text-emerald-300 text-2xl font-bold font-inter">AI</div>
                <div className="text-emerald-200 text-sm font-inter">Powered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-emerald-400" />
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateY(-140px);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateY(-140px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;