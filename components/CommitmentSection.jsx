import React, { useState, useEffect, useRef } from 'react';
import { Target, Heart, Award, Zap, CheckCircle, TrendingUp } from 'lucide-react';

const CommitmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const commitmentData = {
    philosophy: {
      title: "Product Philosophy : Precision, Reliability & Accuracy",
      description: "We ensure every unit meets the highest benchmarks, empowering your business with confidence in every product. Trust us to elevate your standards and drive success",
      icon: Target,
      color: "from-emerald-500 to-teal-500"
    },
    values: {
      title: "Core Values : Innovation, Collaboration & Excellence", 
      description: "With a customer-centric approach and a passion for progress, we aim to set new standards in advancing testing & measurement solutions.",
      icon: Heart,
      color: "from-blue-500 to-cyan-500"
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0,0,0,0.03) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.03) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.03) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-left mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-800 mb-4 font-inter">
            Our Commitment
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Product Philosophy */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Icon */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${commitmentData.philosophy.color} shadow-lg mr-4`}>
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-emerald-800 leading-tight font-inter">
                  {commitmentData.philosophy.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-inter">
                  {commitmentData.philosophy.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Middle Column - Core Values */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Icon */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${commitmentData.values.color} shadow-lg mr-4`}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-emerald-800 leading-tight font-inter">
                  {commitmentData.values.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-inter">
                  {commitmentData.values.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative group">
              {/* Main Product Image Container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform group-hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="PowerTrace Testing Equipment"
                  className="w-full h-80 object-contain transition-all duration-500"
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* PowerTrace Label */}
                <div className="absolute top-2 left-2 bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span className="font-inter">POWERTRACE</span>
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="absolute top-2 right-2 space-y-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Quality Badges */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-emerald-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-800 font-inter">Certified</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-blue-200">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800 font-inter">Premium</span>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(16, 185, 129)" />
                      <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20,100 Q 100,50 180,100 Q 250,150 320,100"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                    className={`transition-all duration-2000 ${
                      isVisible ? 'stroke-dasharray-none' : 'stroke-dasharray-1000 stroke-dashoffset-1000'
                    }`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CommitmentSection;