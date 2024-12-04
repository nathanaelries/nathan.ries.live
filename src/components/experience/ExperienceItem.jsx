import React from 'react';

function ExperienceItem({ experience }) {
  return (
    <div className="mb-10 border-l-4 border-indigo-600 pl-4 hover:border-indigo-700 transition-colors duration-300">
      <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
      <p className="text-gray-600">{experience.company}</p>
      <p className="text-sm text-gray-500">{experience.period}</p>
      <p className="mt-2 text-gray-700">{experience.description}</p>
    </div>
  );
}

export default ExperienceItem;