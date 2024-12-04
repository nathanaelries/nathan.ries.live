import React from 'react';

function About() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
        <div className="prose prose-indigo max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            I'm Nathanael, a passionate advocate for straightforward thinking and common sense in a world that often seems to overcomplicate the simple. I have a keen interest in technology, particularly how it intersects with daily life, and I'm not shy about diving into discussions about freedom, privacy, and the dynamics of digital platforms.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I enjoy critiquing the status quo, whether it's about educational systems, political narratives, or even how we manage our personal health and resources. My background gives me a unique perspective on these issues, often leading me to challenge popular opinions with a blend of humor and hard facts.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In my free time, I explore the potential of cryptocurrencies and blockchain, always looking for the next big idea that could change how we think about money and security. I'm also deeply invested in the world of open-source software and Linux, where I find both inspiration and practical solutions for everyday tech challenges.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I value resilience, both in technology and in personal life, believing that with the right approach, we can all navigate the complexities of modern life with a bit more ease and a lot less noise. My love for dogs and coffee fuels my days; they're constants in my life that bring joy and grounding amidst the digital whirlwind.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I'm here to share insights, spark conversations, and maybe even inspire a few dreams along the way. Let's keep the ideas flowing, the dreams alive, and our coffee cups full, all while advocating for open-source freedom.
          </p>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Background</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Core Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>DevOps Engineering</li>
                  <li>System Administration</li>
                  <li>Cloud Infrastructure</li>
                  <li>Security Implementation</li>
                  <li>eDiscovery Operations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interests</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Open Source Software</li>
                  <li>Linux Systems</li>
                  <li>Blockchain Technology</li>
                  <li>Digital Privacy</li>
                  <li>System Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;