import { useState, useRef } from 'react';
import { GOLD, CARD_BG, CREAM } from '../constants';

export default function ImageSlider({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const total = slides.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  /* ── Touch handlers ── */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      touchDeltaX.current < 0 ? next() : prev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const getVisible = () => {
    if (total === 0) return [];
    return [-1, 0, 1].map((offset) => {
      const idx = (current + offset + total) % total;
      return { ...slides[idx], offset };
    });
  };

  const visible = getVisible();

  return (
    <>
      <style>{`
        .slider-wrap {
          position: relative;
          padding: 1rem 0 0.5rem;
          overflow: hidden;
          user-select: none;
          -webkit-user-select: none;
        }
        .slider-track {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          padding: 0.5rem 4rem;
        }
        .slide-item {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease;
        }
        .slide-item.center {
          transform: scale(1.04);
          box-shadow: 0 12px 40px rgba(0,0,0,0.45);
          opacity: 1;
          cursor: default;
        }
        .slide-item.side {
          transform: scale(0.94);
          opacity: 0.65;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .slide-item.side:hover { opacity: 0.85; }
        .slide-content {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          font-size: 3rem; pointer-events: none;
        }
        .slide-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.72));
          padding: 1.5rem 0.8rem 0.7rem;
          color: ${CREAM}; font-size: 0.72rem; letter-spacing: 0.08em;
          font-family: 'Jost', sans-serif; pointer-events: none;
        }
        .slide-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: ${GOLD}; pointer-events: none;
        }

        /* Desktop arrows */
        .slider-arrow {
          position: absolute; top: 50%; transform: translateY(-60%);
          width: 44px; height: 44px; border-radius: 50%;
          background: ${CARD_BG}; border: none; cursor: pointer;
          color: ${CREAM}; font-size: 1.3rem;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          transition: background 0.3s; z-index: 10;
        }
        .slider-arrow:hover { background: #a07830; }
        .slider-arrow.left  { left: 0; }
        .slider-arrow.right { right: 0; }

        /* Dots */
        .slider-dots {
          display: flex; justify-content: center;
          gap: 0.5rem; margin-top: 1.5rem;
        }
        .slider-dot {
          height: 8px; border-radius: 4px; border: none;
          cursor: pointer; transition: all 0.3s; padding: 0;
        }

        /* Swipe hint on mobile */
        .swipe-hint {
          display: none;
          text-align: center;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(184,146,42,0.6);
          margin-top: 0.6rem;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .slider-track {
            grid-template-columns: 1fr;
            padding: 0.5rem 1.5rem;
          }
          .slide-item.side { display: none; }
          .slide-item.center {
            transform: scale(1);
            box-shadow: 0 6px 24px rgba(0,0,0,0.3);
          }
          /* Hide arrows on mobile — use swipe instead */
          .slider-arrow { display: none; }
          .swipe-hint { display: block; }
        }
      `}</style>

      <div
        className="slider-wrap"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Desktop arrows only */}
        <button className="slider-arrow left" onClick={prev}>‹</button>

        <div className="slider-track">
          {visible.map(({ bg, icon, label, offset }, i) => (
            <div
              key={i}
              className={`slide-item ${offset === 0 ? 'center' : 'side'}`}
              style={{ background: bg || '#2a1f0e' }}
              onClick={() => offset !== 0 && setCurrent((current + offset + total) % total)}
            >
              <div className="slide-content">{icon}</div>
              {offset === 0 && <div className="slide-bar" />}
              {label && <div className="slide-label">{label}</div>}
            </div>
          ))}
        </div>

        <button className="slider-arrow right" onClick={next}>›</button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className="slider-dot"
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8,
                background: i === current ? GOLD : 'rgba(184,146,42,0.3)',
              }}
            />
          ))}
        </div>

        {/* Swipe hint — mobile only */}
        <div className="swipe-hint">← Glissez pour naviguer →</div>
      </div>
    </>
  );
}
