import React from 'react';
import ExperienceList from './experience/ExperienceList';
import SectionTitle from './common/SectionTitle';
import { experiences } from '../data/experiences';

function Experience() {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        <ExperienceList experiences={experiences} />
      </div>
    </section>
  );
}

export default Experience;