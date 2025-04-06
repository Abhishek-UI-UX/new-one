
import React, { useState } from 'react';
import { 
  Send, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Dribbble,
  Heart
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white">
      <div className="section-container">
        <h2 className="section-title">Let's Create Something Beautiful Together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-300">
                Have a project in mind or just want to chat about design? I'd love to hear from you!
              </p>
              
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Where I'm based</h4>
                <p className="text-gray-300">San Francisco, California</p>
                <p className="text-gray-300 mt-4">Available for remote work worldwide</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Connect on social media</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors border border-gray-700">
                  <Instagram className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors border border-gray-700">
                  <Twitter className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors border border-gray-700">
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors border border-gray-700">
                  <Dribbble className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
