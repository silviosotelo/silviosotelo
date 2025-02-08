import React from 'react';
import type { Skill } from '../types';

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    category: 'DevOps',
    items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux']
  },
  {
    category: 'Tools & Methods',
    items: ['Agile', 'Jest', 'Webpack', 'VS Code', 'Figma']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="card p-8 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-gray-900 mb-6">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;