import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function WaterRipple() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const ripplesRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    contextRef.current = ctx;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createRipple = (x, y, size = 1, speed = 1) => {
      const ripple = {
        x,
        y,
        size,
        speed,
        radius: 0,
        maxRadius: 50 * size,
        alpha: 0.5,
        lineWidth: 2 * size,
        color: 'rgba(99, 102, 241, '
      };

      ripplesRef.current.push(ripple);
    };

    const createTrail = () => {
      const dx = mousePos.current.x - prevMousePos.current.x;
      const dy = mousePos.current.y - prevMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.min(distance / 10, 2);
      
      if (distance > 5) {
        const steps = Math.floor(distance / 5);
        for (let i = 0; i < steps; i++) {
          const x = prevMousePos.current.x + (dx * i) / steps;
          const y = prevMousePos.current.y + (dy * i) / steps;
          const size = 0.5 + Math.random() * 0.5;
          createRipple(x, y, size, speed);
        }
      }

      prevMousePos.current = { ...mousePos.current };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      createTrail();

      ripplesRef.current.forEach((ripple, index) => {
        ripple.radius += ripple.speed * 2;
        ripple.alpha *= 0.98;
        
        if (ripple.alpha <= 0.01) {
          ripplesRef.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${ripple.color}${ripple.alpha})`;
        ctx.lineWidth = ripple.lineWidth * (1 - ripple.radius / ripple.maxRadius);
        ctx.stroke();
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      if (!prevMousePos.current.x && !prevMousePos.current.y) {
        prevMousePos.current = { ...mousePos.current };
      }
    };

    const handleMouseEnter = (e) => {
      handleMouseMove(e);
      if (!frameRef.current) {
        animate();
      }
    };

    const handleMouseLeave = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      ripplesRef.current = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ opacity: 0.3 }}
    />
  );
}

export default WaterRipple;