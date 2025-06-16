import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1593617761943-9099951a0769?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Export Growth <span className="text-accent">Success Stories</span>
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore how countries around the world transformed their economies through strategic sector development and rapid export growth
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-accent hover:bg-accent-dark text-primary font-semibold py-3 px-8 rounded-md transition-colors">
            Explore the Map
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-md transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
      
      <a 
        href="#explore-map" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDownCircle className="h-10 w-10" />
      </a>
    </section>
  );
};

export default Hero;