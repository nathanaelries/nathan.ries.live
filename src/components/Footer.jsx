import React from 'react';
import SocialLinks from './footer/SocialLinks';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nathanael Ries. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;