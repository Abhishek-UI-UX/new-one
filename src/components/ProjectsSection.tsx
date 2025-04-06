
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';


const filterCategories = ['All', 'UI/UX', 'Figma', 'Branding', 'Graphic Design', 'Motiff', 'Canva'] as const;

// Define project categories
type ProjectCategory = typeof filterCategories[number];

// Sample project data
const projects = [
  {
    id: 1,
    title: "Hargharwala",
    description: "[poiuytrpo9i8uytri8u7yt",
    image: "https://hargharwala.com/wp-content/uploads/2024/02/HGW-Logo-PNG-1.png",
    categories: ["Figma", "Motiff", "Canva"], 
  }
  // {
  //   id: 2,
  //   title: "Sustainable Brand Identity",
  //   description: "Eco-friendly branding for a zero-waste company with a modern aesthetic.",
  //   image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   categories: ['Branding', 'Graphic Design']
  // },
  // {
  //   id: 3,
  //   title: "Social Network UI Kit",
  //   description: "Comprehensive component library for social media applications.",
  //   image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   categories: ['UI/UX', 'Figma']
  // },
  // {
  //   id: 4,
  //   title: "Healthcare Dashboard",
  //   description: "User-centered interface designed for medical professionals.",
  //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   categories: ['UI/UX', 'Figma']
  // },
  // {
  //   id: 5,
  //   title: "Coffee Shop Rebrand",
  //   description: "Fresh visual identity and packaging for an artisanal coffee brand.",
  //   image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   categories: ['Branding', 'Graphic Design']
  // },
  // {
  //   id: 6,
  //   title: "E-commerce Design System",
  //   description: "Scalable design system for a global online marketplace.",
  //   image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   categories: ['UI/UX', 'Figma']
  // }
];

const   ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');


  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-white">Projects I'm Proud Of</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.categories[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
