import React from 'react';
import SkillCard from './SkillCard';

function SkillsGrid({ skills }) {
  return (
    <div className="mt-6 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  );
}

export default SkillsGrid;