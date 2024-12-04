import { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

export function useWaterRipple(selector) {
  useEffect(() => {
    const element = $(selector);
    
    try {
      // Initialize ripple effect
      element.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true
      });

      // Cleanup function
      return () => {
        if (element.data('ripples')) {
          element.ripples('destroy');
        }
      };
    } catch (e) {
      console.error('jQuery Ripples plugin error:', e);
    }
  }, []); // Empty dependency array means this only runs once on mount
}