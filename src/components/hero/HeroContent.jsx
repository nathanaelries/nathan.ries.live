import React from 'react';

function HeroContent() {
  return (
    <div className="text-center lg:text-left">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
        Tullahoma, TN &middot; Open to Remote
      </p>
      <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        <span className="block mb-1">Where infrastructure</span>
        <span className="block text-indigo-400">meets eDiscovery.</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl font-semibold text-gray-200">
        Infrastructure &amp; DevOps Engineer &middot; eDiscovery Platform Specialist
      </p>
      <p className="mt-3 text-base text-gray-300 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
        7+ years in systems administration. 13+ years in eDiscovery. I build,
        deploy, and harden large-scale eDiscovery platforms on AWS, Linux,
        Docker, and PostgreSQL. I replace proprietary tools with
        infrastructure-as-code and self-hosted open-source.
      </p>
    </div>
  );
}

export default HeroContent;
