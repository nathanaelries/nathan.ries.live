import React from 'react';

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
      {children}
    </h2>
  );
}

export default SectionTitle;