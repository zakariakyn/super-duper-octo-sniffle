import { useEffect, useRef, useState } from 'react';

/**
 * Wraps children and reveals them with animation when they scroll into view.
 * delay: ms delay before animation starts (for staggered effects)
 */
export default function ScrollReveal({ children, delay = 0, direction = 'up', style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (visible) return 'none';
    switch (direction) {
      case 'up':    return 'translateY(24px)';
      case 'down':  return 'translateY(-24px)';
      case 'left':  return 'translateX(-24px)';
      case 'right': return 'translateX(24px)';
      default:      return 'translateY(24px)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
