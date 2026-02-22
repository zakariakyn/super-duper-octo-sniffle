import { useState, useEffect, useRef } from 'react';
import { GOLD, IMAGES } from '../constants';

const SLIDES = [
  { img: IMAGES.heroWedding, title: 'Mariages',   sub: 'Magiques',     desc: 'Des cérémonies inoubliables' },
  { img: IMAGES.heroDecor,   title: 'Décoration', sub: 'Élégante',     desc: 'Des espaces transformés'    },
  { img: IMAGES.heroSoiree,  title: 'Soirées',    sub: 'Inoubliables', desc: 'Des moments de lumière'     },
  { img: IMAGES.heroLight,   title: 'Éclairage',  sub: 'Artistique',   desc: 'La lumière qui sublime'     },
];

export default function HeroSlider({ navigate }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading]   = useState(false);
  const touchX = useRef(null);
  const total  = SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % total), 5500);
    return () => clearInterval(t);
  }, [current]);

  const goTo = (idx) => {
    if (fading || idx === current) return;
    setFading(true);
    setTimeout(() => { setCurrent(idx); setFading(false); }, 350);
  };

  const onTouchStart = e => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = e => {
    if (!touchX.current) return;
    const d = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(d) > 50) goTo((current + (d < 0 ? 1 : -1) + total) % total);
    touchX.current = null;
  };

  const s = SLIDES[current];

  return (
    <>
      {/* Full-screen: account for fixed nav bar height */}
      <div
        style={{
          height: 'calc(100svh - var(--nav-h, 72px))',
          marginTop: 'var(--nav-h, 72px)',
          position: 'relative', overflow: 'hidden',
        }}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
      >
        {/* Background images */}
        {SLIDES.map((sl, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${sl.img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1.04)' : 'scale(1)',
            transition: 'opacity 1s ease, transform 7s ease',
          }} />
        ))}

        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.72) 100%)' }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2, height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          padding: '0 2rem',
          opacity: fading ? 0 : 1, transition: 'opacity 0.35s ease',
        }}>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.55em', textTransform: 'uppercase', color: GOLD, marginBottom: '1.2rem', fontWeight: 600 }}>
            Amine Art Events
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem,9vw,7.5rem)', color: '#fff', fontWeight: 300, lineHeight: 0.92, marginBottom: '0.12rem' }}>
            {s.title}
          </h1>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem,9vw,7.5rem)', color: GOLD, fontWeight: 300, fontStyle: 'italic', lineHeight: 0.92, marginBottom: '1.8rem' }}>
            {s.sub}
          </h1>
          <div style={{ width: 44, height: 1, background: GOLD, marginBottom: '1.3rem', opacity: 0.6 }} />
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>
            {s.desc}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => navigate('events')}>Nos Événements</button>
            <button className="btn-outline"  onClick={() => navigate('contact')}>Contactez-nous</button>
          </div>
        </div>

        {/* Arrows — desktop only */}
        {[{ d: -1, pos: 'left', icon: '‹' }, { d: 1, pos: 'right', icon: '›' }].map(({ d, pos, icon }) => (
          <button key={pos} onClick={() => goTo((current + d + total) % total)} className="hero-arrow"
            style={{ position: 'absolute', [pos]: '1.5rem', top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.22)', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', backdropFilter: 'blur(6px)' }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.borderColor = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; }}
          >{icon}</button>
        ))}

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.6rem', zIndex: 10 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? 28 : 7, height: 7, borderRadius: 4, padding: 0, background: i === current ? GOLD : 'rgba(255,255,255,0.3)', border: 'none', cursor: 'pointer', transition: 'all 0.35s' }} />
          ))}
        </div>

        {/* Counter */}
        <div style={{ position: 'absolute', bottom: '2.8rem', right: '2rem', zIndex: 10, color: 'rgba(255,255,255,0.28)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
          {String(current+1).padStart(2,'0')} / {String(total).padStart(2,'0')}
        </div>

        <style>{`
          @media (max-width: 768px) { .hero-arrow { display: none !important; } }
        `}</style>
      </div>
    </>
  );
}
