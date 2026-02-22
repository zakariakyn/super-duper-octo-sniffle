import { useState, useEffect, useRef, useCallback } from 'react';
import { GOLD } from '../constants';

export default function GallerySlider({ slides = [], interval = 3800 }) {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused]     = useState(false);
  const tickRef  = useRef(null);
  const touchX   = useRef(null);
  const total = slides.length;

  const go = useCallback((idx) => {
    cancelAnimationFrame(tickRef.current);
    setCurrent(idx); setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const pct = Math.min(((ts - start) / interval) * 100, 100);
      setProgress(pct);
      if (pct < 100) tickRef.current = requestAnimationFrame(step);
      else { setCurrent(c => (c + 1) % total); setProgress(0); }
    };
    tickRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(tickRef.current);
  }, [current, paused, interval, total]);

  const onTouchStart = e => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    if (touchX.current === null) return;
    const d = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(d) > 45) go((current + (d < 0 ? 1 : -1) + total) % total);
    touchX.current = null;
  };

  if (!slides.length) return null;

  return (
    <>
      {/* ══ MAIN SLIDER ══ */}
      <div
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        style={{ userSelect: 'none' }}
      >
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', background: '#111' }}>
          {slides.map((sl, i) => (
            <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === current ? 1 : 0, transition: 'opacity 0.7s ease' }}>
              <img src={sl.img} alt={sl.label || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: i === current ? 'scale(1.04)' : 'scale(1)', transition: 'transform 7s ease' }} />
            </div>
          ))}

          {slides[current].label && (
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent,rgba(0,0,0,0.65))', padding: '3rem 1.2rem 1rem', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', pointerEvents: 'none' }}>
              {slides[current].label}
            </div>
          )}

          {[{ d: -1, pos: 'left', icon: '‹' }, { d: 1, pos: 'right', icon: '›' }].map(({ d, pos, icon }) => (
            <button key={pos} onClick={e => { e.stopPropagation(); go((current + d + total) % total); }} className="gallery-arrow"
              style={{ position: 'absolute', [pos]: '0.8rem', top: '50%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', fontSize: '1.3rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', transition: 'background 0.22s', zIndex: 2 }}
              onMouseEnter={e => e.currentTarget.style.background=GOLD}
              onMouseLeave={e => e.currentTarget.style.background='rgba(0,0,0,0.45)'}
            >{icon}</button>
          ))}

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.1)' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: GOLD, transition: 'none' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.45rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {slides.map((sl, i) => (
            <div key={i} onClick={() => go(i)} style={{ flexShrink: 0, width: 66, height: 44, overflow: 'hidden', cursor: 'pointer', outline: i === current ? `2px solid ${GOLD}` : '2px solid transparent', outlineOffset: '2px', opacity: i === current ? 1 : 0.5, transition: 'all 0.22s' }}>
              <img src={sl.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        <p className="swipe-hint-mobile" style={{ textAlign: 'center', margin: '0.7rem 0 0', color: 'rgba(184,146,42,0.45)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>← Glissez →</p>
      </div>

      <style>{`
        @media(max-width:768px){.gallery-arrow{display:none!important}}
        @media(min-width:769px){.swipe-hint-mobile{display:none}}
      `}</style>
    </>
  );
}
