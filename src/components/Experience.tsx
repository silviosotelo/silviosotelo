import React from 'react';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: [
      'Led development of mission-critical applications using React and Node.js',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews',
      'Optimized database queries resulting in 30% performance improvement'
    ]
  },
  {
    id: '2',
    company: 'Digital Agency',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: [
      'Developed responsive web applications for various clients',
      'Integrated third-party APIs and payment gateways',
      'Implemented automated testing reducing bug reports by 50%',
      'Collaborated with design team to improve UX/UI'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-width">
        <h2 className="text-center mb-16">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-gray-900 mb-1">{exp.position}</h3>
                  <p className="text-[1.125rem] text-gray-600">{exp.company}</p>
                </div>
                <p className="text-primary-600 font-medium mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-3 text-gray-600">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary-600 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;