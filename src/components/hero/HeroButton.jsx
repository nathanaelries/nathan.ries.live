import React from 'react';
import { Link } from 'react-router-dom';

function HeroButton() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <Link
        to="/#contact"
        onClick={handleContactClick}
        className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
      >
        Get in touch
      </Link>
      <a
        href="/Nathanael_Ries_Resume.pdf"
        className="flex items-center justify-center px-6 py-3 border border-indigo-400 text-base font-medium rounded-md text-indigo-100 bg-transparent hover:bg-indigo-600/20 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
        download
      >
        Download résumé
      </a>
      <a
        href="https://github.com/nathanaelries"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-6 py-3 border border-gray-500 text-base font-medium rounded-md text-gray-200 bg-transparent hover:bg-gray-700/40 md:py-4 md:text-lg md:px-8 transition-colors duration-300"
      >
        GitHub
      </a>
    </div>
  );
}

export default HeroButton;
