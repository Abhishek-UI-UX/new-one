
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-yellow-500">
              <span className="text-white">pixel</span>heart
            </a>
            <p className="mt-2 text-gray-400 max-w-sm">
              Designing beautiful, functional, and meaningful digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-8 mb-4">
              <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</a>
              <a href="#projects" className="text-gray-400 hover:text-yellow-500 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</a>
            </div>
            
            <div className="flex items-center text-gray-400">
              <p>Made with</p>
              <Heart className="h-4 w-4 mx-1 text-yellow-500" />
              <p>in Figma</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Alex Designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
