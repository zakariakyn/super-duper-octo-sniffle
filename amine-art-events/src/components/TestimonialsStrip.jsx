import { GOLD, DARK, TESTIMONIALS } from '../constants';
import ScrollReveal from './ScrollReveal';

const THREE = TESTIMONIALS.slice(0, 3);

export default function TestimonialsStrip() {
  return (
    <div style={{ background: '#fdfbf8', padding: '5rem 2.5rem', borderTop: '1px solid rgba(184,146,42,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Ce qu'ils disent</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: DARK, marginTop: '0.5rem' }}>
              Meilleurs <em style={{ fontStyle: 'italic', color: GOLD }}>Vœux</em>
            </h2>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem' }}>
          {THREE.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div style={{ background: '#fff', padding: '2rem', borderLeft: `3px solid ${GOLD}`, borderBottom: `1px solid rgba(184,146,42,0.12)`, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.09)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; }}
              >
                <div style={{ color: GOLD, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1rem' }}>★★★★★</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: DARK, fontWeight: 600, marginBottom: '0.8rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.83rem', color: '#666', lineHeight: 1.75, fontStyle: 'italic' }}>"{t.message}"</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
