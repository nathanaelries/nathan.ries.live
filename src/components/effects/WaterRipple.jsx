import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

function WaterRipple() {
  const containerRef = useRef(null);

  useEffect(() => {
    const $container = $(containerRef.current);
    
    try {
      $container.ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.08,
        interactive: true,
        crossOrigin: ''
      });

      // Create periodic ripples
      const createRipple = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const x = Math.random() * width;
        const y = Math.random() * height;
        $container.ripples('drop', x, y, 20, 0.08);
      };

      // Create initial ripples
      createRipple();
      
      // Create periodic ripples
      const interval = setInterval(createRipple, 3000);

      // Handle window resize
      const handleResize = () => {
        $container.ripples('destroy');
        $container.ripples({
          resolution: 512,
          dropRadius: 20,
          perturbance: 0.08,
          interactive: true,
          crossOrigin: ''
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
        $container.ripples('destroy');
      };
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-auto"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
        zIndex: 0
      }}
    />
  );
}

export default WaterRipple;