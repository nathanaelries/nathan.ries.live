import React from 'react';
import { Link } from 'react-router-dom';

function HeroButton() {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="rounded-md shadow w-full sm:w-auto">
      <Link
        to="/#contact"
        onClick={handleClick}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
      >
        Get in touch
      </Link>
    </div>
  );
}

export default HeroButton;