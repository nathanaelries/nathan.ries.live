import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

function WaterRipple() {
  useEffect(() => {
    try {
      $('.hero-section').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true
      });

      // Cleanup
      return () => {
        $('.hero-section').ripples('destroy');
      };
    } catch (e) {
      console.error('jQuery Ripples plugin error:', e);
    }
  }, []);

  return null;
}

export default WaterRipple;