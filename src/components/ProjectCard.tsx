
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  className?: string;
}

const ProjectCard = ({ title, description, image, category, className }: ProjectCardProps) => {
  return (
    <div className={cn(
      "bg-gray-800 rounded-xl overflow-hidden shadow-sm group card-hover dark:border-gray-700 border border-transparent",
      className
    )}>
      {/* Project Image */}
      <div className="relative overflow-hidden h-64">
        <div 
          className="h-full w-full bg-gray-900 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
       
      </div>
    </div>
  );
};

export default ProjectCard;
