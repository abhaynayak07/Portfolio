import React, { useEffect, useRef } from "react";

const BackgroundStars = () => {
  const canvasRef = useRef(null);
  const layers = [];
  const LAYER_CONFIG = [
    { count: 150, base: 0.15, drift: 0.1 },
    { count: 120, base: 0.3, drift: 0.2 },
    { count: 70,  base: 0.55, drift: 0.3 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // CREATE LAYERS
    LAYER_CONFIG.forEach(({ count, base, drift }) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (1 - 0.1) + 0.1,
          baseSpeed: base,
          drift,
          offset: Math.random() * 1000,
        });
      }
      layers.push(stars);
    });

    // VELOCITY SYSTEM (CAPPED)
    let lastScrollY = window.scrollY;
    let velocity = 0;
    const MAX_VELOCITY = 4; // ⭐ LIMIT THE SPEED BOOST
    const SMOOTHING = 0.1; // ⭐ smooth slow-down

    const handleScroll = () => {
      const y = window.scrollY;
      velocity = (y - lastScrollY);
      lastScrollY = y;

      // apply velocity clamp
      if (velocity > MAX_VELOCITY) velocity = MAX_VELOCITY;
      if (velocity < -MAX_VELOCITY) velocity = -MAX_VELOCITY;
    };

    window.addEventListener("scroll", handleScroll);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // gradually reduce velocity when not scrolling
      velocity *= (1 - SMOOTHING);

      layers.forEach((stars, index) => {
        ctx.fillStyle = "white";

        stars.forEach((star) => {
          // BASE SPEED + a tiny velocity effect
          const parallaxBoost = velocity * (0.15 + index * 0.08);

          star.y += star.baseSpeed + parallaxBoost;

          // ORGANIC SIDE DRIFT
          star.x += Math.sin((star.offset + star.y) * 0.001) * star.drift;

          // LOOPING
          if (star.y > canvas.height) star.y = 0;
          if (star.y < 0) star.y = canvas.height;

          if (star.x > canvas.width) star.x = 0;
          if (star.x < 0) star.x = canvas.width;

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundStars;
