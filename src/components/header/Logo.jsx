import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Logo() {
  const location = useLocation();

  const handleClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link 
      to="/" 
      className="flex-shrink-0 flex items-center"
      onClick={handleClick}
    >
      <img
        className="h-8 w-auto"
        src="/images/logo.png"
        alt="Nathanael Ries"
      />
      <span className="ml-2 text-xl font-bold text-gray-900">Nathanael Ries</span>
    </Link>
  );
}

export default Logo;