import { GOLD, DARK, IMAGES, TESTIMONIALS } from '../constants';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function TestimonialsPage({ navigate }) {
  return (
    <div className="fade-in">
      {/* Hero with image */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMAGES.testimonials})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-sub">Amine Art Events</div>
        <h1>Témoignages</h1>
        <div className="page-hero-line" />
      </div>

      <div style={{ background: '#fff', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label">Ce qu'ils disent</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,5vw,3.5rem)', color: DARK, fontWeight: 300, marginBottom: '3rem', lineHeight: 1.05 }}>
              Meilleurs <em style={{ fontStyle: 'italic', color: GOLD }}>Vœux</em>
            </h2>
          </ScrollReveal>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-msg">"{t.message}"</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
