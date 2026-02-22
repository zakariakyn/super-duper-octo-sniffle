import { GOLD, DARK, CREAM, SERVICES_DATA } from '../constants';

const IG    = 'https://www.instagram.com/amine.art.events/';
const WA    = 'https://wa.me/212662115574';
const TEL   = 'tel:+212662115574';
const MAIL  = 'mailto:contact@amineartevents.ma';

const SocialIcon = ({ href, bg, ariaLabel, children }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel} style={{ display: 'inline-flex' }}>
    <div style={{ width: 38, height: 38, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.35)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
      {children}
    </div>
  </a>
);

export default function Footer({ navigate }) {
  return (
    <>
      {/* ── Pre-footer CTA band ── */}
      <div style={{
        background: `linear-gradient(135deg, ${DARK} 0%, #2d1e0a 50%, ${DARK} 100%)`,
        borderTop: `1px solid rgba(184,146,42,0.25)`,
        borderBottom: `1px solid rgba(184,146,42,0.12)`,
        padding: '3.5rem 2.5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: GOLD, marginBottom: '1rem' }}>
            Prêt à créer votre événement ?
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 300, color: CREAM, lineHeight: 1.2, marginBottom: '1.6rem' }}>
            Transformons votre <em style={{ fontStyle: 'italic', color: GOLD }}>vision</em> en réalité
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => navigate('contact')}>Nous contacter</button>
            <a href={WA} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2.2rem', border: '1.5px solid rgba(249,244,237,0.35)',
              color: CREAM, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'all 0.3s', background: 'transparent',
              fontFamily: "'Jost', sans-serif", fontWeight: 500,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.borderColor = '#25D366'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(249,244,237,0.35)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <div style={{ fontSize: '1.6rem', color: GOLD, marginBottom: '0.6rem' }}>✿</div>
              <div className="footer-brand-name">AMINE ART EVENTS</div>
              <p className="footer-brand-desc">Créateurs d'événements inoubliables à Casablanca. Chaque célébration est une œuvre d'art.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.7rem' }}>
                <SocialIcon href={IG} bg="linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" ariaLabel="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href={WA} bg="#25D366" ariaLabel="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </SocialIcon>
              </div>
            </div>

            {/* Navigation links */}
            <div className="footer-links-grid">
              <div className="footer-links-col">
                <h5>Événements</h5>
                <a onClick={() => navigate('soiree')}>Soirée</a>
                <a onClick={() => navigate('mariage')}>Mariage</a>
                <h5 style={{ marginTop: '1.4rem' }}>Pages</h5>
                <a onClick={() => navigate('testimonials')}>Témoignages</a>
                <a onClick={() => navigate('contact')}>Contactez-nous</a>
              </div>
              <div className="footer-links-col">
                <h5>Services</h5>
                {SERVICES_DATA.map(s => (
                  <a key={s.page} onClick={() => navigate(s.page)}>{s.title}</a>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="footer-links-col">
              <h5>Contact</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href={TEL} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.78rem', lineHeight: 1.5, transition: 'color 0.25s' }}
                  onMouseEnter={e => e.currentTarget.style.color = GOLD}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                  <span style={{ color: GOLD, fontSize: '0.9rem', lineHeight: 1.4, flexShrink: 0 }}>☎</span>
                  +212 6 62 11 55 74
                </a>
                <a href={MAIL} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.78rem', lineHeight: 1.5, transition: 'color 0.25s' }}
                  onMouseEnter={e => e.currentTarget.style.color = GOLD}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                  <span style={{ color: GOLD, fontSize: '0.9rem', lineHeight: 1.4, flexShrink: 0 }}>✉</span>
                  contact@amineartevents.ma
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                  <span style={{ color: GOLD, fontSize: '0.9rem', lineHeight: 1.4, flexShrink: 0 }}>⌖</span>
                  Casablanca, Maroc
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.7rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', lineHeight: 1.5 }}>
                  <span style={{ color: GOLD, fontSize: '0.9rem', lineHeight: 1.4, flexShrink: 0 }}>◷</span>
                  Lun – Sam · 9h00 – 19h00
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Amine Art Events — Tous droits réservés</div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <a href={IG} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>Instagram</a>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.6rem' }}>·</span>
              <a href={WA} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = GOLD}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
