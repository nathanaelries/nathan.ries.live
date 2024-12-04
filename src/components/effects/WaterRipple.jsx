import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

function WaterRipple() {
  useEffect(() => {
    const $hero = $('.hero-section');
    
    try {
      $hero.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        imageUrl: null,
        interactive: true,
        crossOrigin: ''
      });

      // Create ripple effect every few seconds
      const interval = setInterval(() => {
        const x = Math.random() * $hero.outerWidth();
        const y = Math.random() * $hero.outerHeight();
        const dropRadius = 20;
        const strength = 0.04 + Math.random() * 0.04;

        $hero.ripples('drop', x, y, dropRadius, strength);
      }, 3000);

      // Handle window resize
      const handleResize = () => {
        $hero.ripples('destroy');
        $hero.ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.04,
          imageUrl: null,
          interactive: true,
          crossOrigin: ''
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(interval);
        $hero.ripples('destroy');
      };
    } catch (e) {
      console.error(e);
    }
  }, []);

  return null;
}

export default WaterRipple;