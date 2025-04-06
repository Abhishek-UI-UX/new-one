
import React from 'react';
import { Heart, Coffee, Lightbulb } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-800 text-white">
      <div className="section-container">
        <h2 className="section-title text-white">A Designer Who Cares About the Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="bg-gray-700 p-8 rounded-xl shadow-sm card-hover">
            <Heart className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Design with Purpose</h3>
            <p className="text-gray-300">
              Every pixel I place has intentionality behind it. I believe good design solves real problems.
            </p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-xl shadow-sm card-hover">
            <Coffee className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Caffeine & Creativity</h3>
            <p className="text-gray-300">
              Fueled by curiosity and coffee, I'm constantly exploring new design trends and techniques.
            </p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-xl shadow-sm card-hover">
            <Lightbulb className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Problem Solver</h3>
            <p className="text-gray-300">
              I approach each project as a puzzle to solve, with users at the center of every solution.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-700 p-8 rounded-xl">
          <p className="text-xl text-center text-gray-300 italic">
            "I'm a Figma-loving, caffeine-fueled creative who's passionate about UI/UX design, brand storytelling, and pixel-perfect graphic art. My mission? To solve problems through empathy, color, and clean lines — all while keeping users at the heart of every design."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
