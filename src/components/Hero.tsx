import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm <span className="text-yellow-500">Abhishek Angadi</span> — I Design With Heart & Purpose.
          </h1>
          <p className="text-xl text-gray-300 max-w-lg">
            From intuitive user flows to jaw-dropping visuals, I craft digital experiences that are both beautiful and meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="relative h-[600px] perspective-1000">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-purple-500/5 rounded-3xl"></div>
          
          {/* Design Tool Logos with Enhanced 3D Floating Animation */}
          <div className="absolute top-0 left-1/4 animate-float-3d" style={{ animationDelay: "0s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-glow-pulse">
              <div className="relative">
                <img src="/logos/figma.svg" alt="Figma" className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-1/4 animate-float-3d" style={{ animationDelay: "2s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-glow-pulse">
              <div className="relative">
                <img src="/logos/miro.png" alt="Miro" className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/3 animate-float-3d" style={{ animationDelay: "4s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-glow-pulse">
              <div className="relative">
                <img src="/logos/canva.jpeg" alt="Canva" className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 right-1/3 animate-float-3d" style={{ animationDelay: "6s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 animate-glow-pulse">
              <div className="relative">
                <img src="/logos/motiff.png" alt="Motiff" className="w-16 h-16 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Decorative connecting lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-white/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 border border-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
