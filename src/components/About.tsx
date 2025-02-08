import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with X years of experience in building
              web applications. My journey in software development started with [Your Story].
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I specialize in creating responsive, user-friendly applications using
              modern technologies like React, Node.js, and TypeScript. I'm particularly
              interested in [Your Interests/Specializations].
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me [Your Hobbies/Interests].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;