import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center 
                      bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-width px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center animate-fade-up">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r 
                       from-primary-600 to-primary-800 mb-6">
            Silvio Sotelo
          </h1>
          <p className="text-[1.5rem] leading-[2rem] text-gray-600 mb-8">
            Full Stack Developer & Oracle APEX Specialist
          </p>
          <p className="text-[1.125rem] leading-[1.75rem] text-gray-600 max-w-2xl mx-auto mb-12">
            Passionate about creating elegant solutions to complex problems. 
            Specialized in React, Node.js, and modern web technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 
                       rounded-lg transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 
                       rounded-lg transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 
                       rounded-lg transition-all duration-200"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;