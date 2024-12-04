import React from 'react';
import NavLinks from './header/NavLinks';
import Logo from './header/Logo';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Logo />
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}

export default Header;