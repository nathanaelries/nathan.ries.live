import React from 'react';

function ExperienceItem({ experience }) {
  const { title, company, location, period, summary, highlights } = experience;

  return (
    <div className="mb-10 border-l-4 border-indigo-600 pl-4 hover:border-indigo-700 transition-colors duration-300">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm font-medium text-gray-500">{period}</p>
      </div>
      <p className="text-gray-700 font-medium">
        {company}
        {location && <span className="text-gray-500 font-normal"> &middot; {location}</span>}
      </p>
      {summary && <p className="mt-2 text-gray-700">{summary}</p>}
      {highlights && highlights.length > 0 && (
        <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5 marker:text-indigo-500">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceItem;
