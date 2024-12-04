import React from 'react';
import ExperienceItem from './ExperienceItem';

function ExperienceList({ experiences }) {
  return (
    <div className="mt-10">
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} />
      ))}
    </div>
  );
}

export default ExperienceList;