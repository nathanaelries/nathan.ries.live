import React from 'react';

function HeroContent() {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block mb-1">IT Professional</span>
        <span className="block text-indigo-600">DevOps Engineer</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Experienced IT professional specializing in DevOps practices, system administration, and infrastructure automation.
      </p>
    </div>
  );
}

export default HeroContent;