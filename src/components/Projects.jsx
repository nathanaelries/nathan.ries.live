import React from 'react';
import SectionTitle from './common/SectionTitle';
import { projects } from '../data/projects';

function ProjectCard({ project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-white rounded-lg shadow hover:shadow-lg border border-transparent hover:border-indigo-200 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
            {project.name}
          </h3>
          {project.featured && (
            <span className="text-xs uppercase tracking-wider font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full whitespace-nowrap">
              Featured
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-medium text-indigo-700">{project.tagline}</p>
        <p className="mt-3 text-gray-700 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-4 text-sm text-indigo-600 group-hover:text-indigo-800 font-medium">
          View on GitHub →
        </span>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          A selection from{' '}
          <a
            href="https://github.com/nathanaelries"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            github.com/nathanaelries
          </a>
          , weighted toward the intersection of infrastructure and eDiscovery.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
