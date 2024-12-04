import { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

export function useWaterRipple(selector) {
  useEffect(() => {
    try {
      $(selector).ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        interactive: true
      });

      return () => {
        const element = $(selector);
        if (element.data('ripples')) {
          element.ripples('destroy');
        }
      };
    } catch (e) {
      console.error('jQuery Ripples plugin error:', e);
    }
  }, [selector]);
}