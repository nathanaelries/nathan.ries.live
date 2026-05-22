import React from 'react';
import SectionTitle from './common/SectionTitle';
import { skillCategories } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{cat.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm bg-indigo-50 text-indigo-900 px-3 py-1 rounded-full border border-indigo-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
