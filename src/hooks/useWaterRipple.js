import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

export function useWaterRipple(selector) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      try {
        const element = $(selector);
        if (element.length) {
          element.ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
            interactive: true
          });
          initialized.current = true;

          return () => {
            if (element.data('ripples')) {
              element.ripples('destroy');
              initialized.current = false;
            }
          };
        }
      } catch (e) {
        console.error('jQuery Ripples plugin error:', e);
      }
    }
  }, [selector]);
}