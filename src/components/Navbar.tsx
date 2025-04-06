
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4", 
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm" 
          : "bg-transparent dark:bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-yellow-500">
          <span className={cn("transition-colors", theme === 'dark' ? "text-white" : "text-black")}>pixel</span>heart
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors">About</a>
          <a href="#services" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors">Services</a>
          <a href="#projects" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors">Projects</a>
          <a href="#contact" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors">Contact</a>
          
          {/* Theme toggle button */}
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme toggle button for mobile */}
         

          <button className="text-foreground dark:text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col space-y-4">
          <a href="#about" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>About</a>
          <a href="#services" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Services</a>
          <a href="#projects" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="text-foreground dark:text-white hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
