import { useState, useEffect, useRef, useCallback } from 'react';
import { GOLD } from '../constants';

export default function GallerySlider({ slides = [], interval = 3800 }) {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused]     = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const tickRef  = useRef(null);
  const touchX   = useRef(null);
  const lbTouchX = useRef(null);
  const total = slides.length;

  const go = useCallback((idx) => {
    cancelAnimationFrame(tickRef.current);
    setCurrent(idx); setProgress(0);
  }, []);

  useEffect(() => {
    if (paused || lightbox !== null) return;
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
  }, [current, paused, lightbox, interval, total]);

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = 'hidden';
    const h = (e) => {
      if (e.key === 'Escape')     setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % total);
      if (e.key === 'ArrowLeft')  setLightbox(l => (l - 1 + total) % total);
    };
    window.addEventListener('keydown', h);
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [lightbox, total]);

  const onTouchStart = e => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    if (touchX.current === null) return;
    const d = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(d) > 45) go((current + (d < 0 ? 1 : -1) + total) % total);
    touchX.current = null;
  };
  const onLbStart = e => { lbTouchX.current = e.touches[0].clientX; };
  const onLbEnd   = e => {
    if (lbTouchX.current === null) return;
    const d = e.changedTouches[0].clientX - lbTouchX.current;
    if (Math.abs(d) > 45) setLightbox(l => (l + (d < 0 ? 1 : -1) + total) % total);
    lbTouchX.current = null;
  };

  if (!slides.length) return null;

  const lb = lightbox !== null ? slides[lightbox] : null;

  return (
    <>
      {/* ══ LIGHTBOX — matches reference style ══ */}
      {lb && (
        <div
          onTouchStart={onLbStart} onTouchEnd={onLbEnd}
          onClick={e => { if (e.target === e.currentTarget) setLightbox(null); }}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(10,8,5,0.94)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Close button — top right */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '1.4rem', right: '1.8rem',
              width: 42, height: 42, borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: '1.3rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s', zIndex: 2,
            }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
          >×</button>

          {/* Counter — top left */}
          <div style={{ position: 'absolute', top: '1.7rem', left: '2rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', letterSpacing: '0.18em' }}>
            {String(lightbox + 1).padStart(2,'0')} <span style={{ color: 'rgba(255,255,255,0.2)' }}>/ {String(total).padStart(2,'0')}</span>
          </div>

          {/* Left arrow */}
          <button
            onClick={() => setLightbox(l => (l - 1 + total) % total)}
            style={{
              position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#fff', fontSize: '1.8rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 2, backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.borderColor=GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.18)'; }}
          >‹</button>

          {/* Right arrow */}
          <button
            onClick={() => setLightbox(l => (l + 1) % total)}
            style={{
              position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#fff', fontSize: '1.8rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', zIndex: 2, backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background=GOLD; e.currentTarget.style.borderColor=GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.18)'; }}
          >›</button>

          {/* Image — centred with breathing room */}
          <img
            key={lightbox}
            src={lb.img} alt={lb.label || ''}
            style={{
              maxWidth: '80vw', maxHeight: '78vh',
              objectFit: 'contain',
              boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
              display: 'block',
            }}
          />

          {/* Caption below image */}
          {lb.label && (
            <div style={{
              marginTop: '1.2rem',
              color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              {lb.label}
            </div>
          )}

          {/* Dot indicators at bottom */}
          <div style={{ position: 'absolute', bottom: '1.6rem', display: 'flex', gap: '0.5rem' }}>
            {slides.map((_, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ width: i === lightbox ? 22 : 7, height: 7, borderRadius: 4, background: i === lightbox ? GOLD : 'rgba(255,255,255,0.25)', cursor: 'pointer', transition: 'all 0.25s' }} />
            ))}
          </div>
        </div>
      )}

      {/* ══ MAIN SLIDER ══ */}
      <div
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        style={{ userSelect: 'none' }}
      >
        <div onClick={() => setLightbox(current)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', maxHeight: 'calc(100vh - var(--nav-h, 72px) - 80px)', background: '#111', cursor: 'zoom-in' }}>
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

          <div style={{ position: 'absolute', top: '0.7rem', right: '0.7rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.8)', padding: '0.3rem 0.6rem', fontSize: '0.58rem', letterSpacing: '0.12em', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}>
            ⤡ AGRANDIR
          </div>

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
