import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToHash } from '../../hooks/useScrollToHash';
import MobileMenu from './MobileMenu';

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useScrollToHash();

  const links = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About Me' },
    { to: '/blog', text: 'Notebook' },
    { to: '/#experience', text: 'Experience' },
    { to: '/#skills', text: 'Skills' },
    { to: '/#contact', text: 'Contact' }
  ];

  const handleNavigation = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        window.location.href = to;
        return;
      }

      const element = document.querySelector(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            onClick={(e) => handleNavigation(e, link.to)}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <MobileMenu 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
          links={links} 
          onLinkClick={handleNavigation} 
        />
      </div>
    </>
  );
}

export default NavLinks;