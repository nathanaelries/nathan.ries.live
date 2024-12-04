import React from 'react';
import ExperienceItem from './experience/ExperienceItem';
import SectionTitle from './common/SectionTitle';

function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Various Organizations",
      period: "2018 - Present",
      description: "Architecting and maintaining cloud infrastructure, implementing CI/CD pipelines, and managing containerized applications. Specializing in infrastructure automation, monitoring solutions, and security best practices."
    },
    {
      title: "eDiscovery Specialist",
      company: "Multiple Law Firms",
      period: "2016 - 2018",
      description: "Led eDiscovery operations and digital forensics investigations, managing large-scale data processing and analysis. Implemented automated workflows for document review and metadata extraction, significantly improving processing efficiency."
    },
    {
      title: "Systems Administrator",
      company: "Various Clients",
      period: "2014 - 2016",
      description: "Managed enterprise systems and network infrastructure, implemented security protocols, and provided technical solutions for complex IT challenges."
    }
  ];

  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-10">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;