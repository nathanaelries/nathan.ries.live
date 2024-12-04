import React from 'react';

function SkillCard({ skill }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <p className="text-base sm:text-lg font-medium text-gray-900">{skill}</p>
    </div>
  );
}

export default SkillCard;