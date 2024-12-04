import React from 'react';

function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="h-8 w-auto"
        src="/images/logo.png"
        alt="Nathanael Ries"
      />
      <span className="ml-2 text-xl font-bold text-gray-900">Nathanael Ries</span>
    </div>
  );
}

export default Logo;