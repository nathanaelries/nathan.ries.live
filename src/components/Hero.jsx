import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroButton from './hero/HeroButton';
import HeroImage from './hero/HeroImage';
import WaterRipple from './effects/WaterRipple';

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden hero-section">
      <WaterRipple />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-6 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <HeroContent />
            <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
              <HeroButton />
            </div>
          </main>
        </div>
        <HeroImage />
      </div>
    </div>
  );
}

export default Hero;