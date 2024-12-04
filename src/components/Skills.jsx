import React from 'react';
import SkillsGrid from './skills/SkillsGrid';
import SectionTitle from './common/SectionTitle';

function Skills() {
  const skills = [
    "DevOps Engineering",
    "System Administration",
    "Network Security",
    "Cloud Infrastructure",
    "CI/CD Pipeline Management",
    "Infrastructure as Code",
    "Container Orchestration",
    "Automation & Scripting"
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid skills={skills} />
      </div>
    </section>
  );
}

export default Skills;