import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-center mb-16">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-600">
              I'm a passionate Full Stack Developer with X years of experience in building
              web applications. My journey in software development started with [Your Story].
            </p>
            <p className="text-gray-600">
              I specialize in creating responsive, user-friendly applications using
              modern technologies like React, Node.js, and TypeScript. I'm particularly
              interested in [Your Interests/Specializations].
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me [Your Hobbies/Interests].
            </p>
            <div className="pt-4">
              <a href="#contact" className="button-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;