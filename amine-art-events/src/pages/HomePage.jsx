import { GOLD, DARK, IMAGES, SERVICES_DATA, TESTIMONIALS } from '../constants';
import HeroSlider from '../components/HeroSlider';
import PartnersSlider from '../components/PartnersSlider';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage({ navigate }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSlider navigate={navigate} scrollToSection={scrollToSection} />
      <div style={{ height: 2, background: 'rgba(184,146,42,0.14)' }} />

      {/* ── Events — Canva overlap style ─────────────────── */}
      {/* 
        Soirée  → image LEFT  overlaps gold panel RIGHT   (odd  = default)
        Mariage → gold panel LEFT  overlaps image RIGHT   (even = reversed CSS)
        The user asked to change Mariage picture position so we force both
        to have image on LEFT by giving Mariage class "event-card force-normal"
        and overriding nth-child even rule.
      */}
      <div className="events-grid" id="events-section">
        {[
          {
            title: 'Soirée', img: IMAGES.soiree, page: 'soiree',
            text: 'Des soirées inoubliables conçues avec passion et créativité pour vous offrir une expérience unique et mémorable.',
          },
          {
            title: 'Mariage', img: IMAGES.mariage, page: 'mariage',
            text: 'Votre mariage de rêve réalisé avec élégance. Chaque détail soigneusement pensé pour que ce jour soit parfait.',
            forceNormal: true,   // ← both images on the LEFT side
          },
        ].map((ev, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className={`event-card${ev.forceNormal ? ' event-card-normal' : ''}`}>
              <div className="event-image">
                <img src={ev.img} alt={ev.title} />
              </div>
              <div className="event-info">
                <div className="event-info-label">Amine Art Events</div>
                <h3>{ev.title}</h3>
                <p>{ev.text}</p>
                {/* Prominent CTA button */}
                <button className="btn-primary" style={{ marginTop: '0.5rem' }} onClick={() => navigate(ev.page)}>
                  Découvrir {ev.title} →
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Services ── */}
      <div style={{ background: '#faf7f2', padding: '6rem 0 5rem' }} id="services-section">
        <div className="section" style={{ paddingTop: 0, paddingBottom: '2rem' }}>
          <ScrollReveal>
            <div className="section-label">Notre expertise</div>
            <div className="section-title">Nos <em>Services</em></div>
          </ScrollReveal>
        </div>
        <div className="services-grid" style={{ maxWidth: '1300px', margin: '0 auto' }}>
          {SERVICES_DATA.map((s, i) => (
            <ScrollReveal key={s.page} delay={i * 80}>
              <div className="service-card" style={{ height: '100%' }} onClick={() => navigate(s.page)}>
                <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <img src={IMAGES[s.page]} alt={s.title} className="service-img" />
                </div>
                <div className="service-title">{s.title}</div>
                <div className="service-loc">{s.location}</div>
                <div className="service-desc">{s.desc}</div>
                <span className="service-link">Découvrir →</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* ── Partners ── */}
      <ScrollReveal><PartnersSlider /></ScrollReveal>

      {/* ── Meilleurs Vœux — 3 testimonials ── */}
      <div style={{ background: '#fff', padding: '5rem 2.5rem', borderTop: '1px solid rgba(184,146,42,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Ce qu'ils disent</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 300, color: DARK, marginTop: '0.4rem' }}>
                Meilleurs <em style={{ fontStyle: 'italic', color: GOLD }}>Vœux</em>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <ScrollReveal key={i} delay={i * 90}>
                <div style={{ background: '#fff', padding: '2rem', borderLeft: `3px solid ${GOLD}`, border: '1px solid rgba(184,146,42,0.12)', borderLeft: `3px solid ${GOLD}`, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 36px rgba(0,0,0,0.09)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,0.04)'; }}
                >
                  <div style={{ color: GOLD, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1rem' }}>★★★★★</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: DARK, fontWeight: 600, marginBottom: '0.8rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.75, fontStyle: 'italic' }}>"{t.message}"</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={250}>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button className="gold-btn" onClick={() => navigate('testimonials')}>Voir tous les témoignages</button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ContactSection />
      <Footer navigate={navigate} />
    </>
  );
}
