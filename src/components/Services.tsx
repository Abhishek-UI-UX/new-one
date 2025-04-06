
import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Figma, 
  Layout, 
  GitBranch, 
  Layers, 
  UserSquare, 
  PenTool, 
  Palette, 
  Share2 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive interfaces that delight users and meet business goals.",
      icon: Layout
    },
    {
      title: "User Flows",
      description: "Mapping the perfect user journey for seamless product experiences.",
      icon: GitBranch
    },
    {
      title: "Wireframing & Prototyping",
      description: "Blueprinting and testing designs before development begins.",
      icon: Layers
    },
    {
      title: "Figma Expertise",
      description: "Leveraging Figma's full potential for efficient design workflows.",
      icon: Figma
    },
    {
      title: "Design Systems",
      description: "Building scalable systems that maintain consistency across products.",
      icon: UserSquare
    },
    {
      title: "Visual Identity & Branding",
      description: "Crafting memorable brand identities that stand out in the market.",
      icon: PenTool
    },
    {
      title: "Graphic Design",
      description: "Creating engaging visual assets for digital and print media.",
      icon: Palette
    },
    {
      title: "Collaborative Design",
      description: "Working with teams to bring collective creative vision to life.",
      icon: Share2
    }
  ];

  return (
    <section id="services" className="bg-gray-800 transition-colors duration-300">
      <div className="section-container">
        <h2 className="section-title text-white">How I Bring Ideas to Life</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className={index % 2 === 0 ? "border-l-4 border-yellow-500" : "border-l-4 border-purple-500"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
