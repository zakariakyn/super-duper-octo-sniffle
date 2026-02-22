import { useState } from 'react';
import { GOLD, DARK } from '../constants';
import ScrollReveal from './ScrollReveal';

const IG   = 'https://www.instagram.com/amine.art.events/';
const WA   = 'https://wa.me/212662115574';
const TEL  = 'tel:+212662115574';
const MAIL = 'mailto:contact@amineartevents.ma';

const INFO_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.8 10.73 19.79 19.79 0 01.74 2.18 2 2 0 012.73 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    label: 'Téléphone',
    value: '+212 6 62 11 55 74',
    href: TEL,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'contact@amineartevents.ma',
    href: MAIL,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresse',
    value: 'Casablanca, Maroc',
    href: null,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    label: 'Horaires',
    value: 'Lun – Sam · 9h00 – 19h00',
    href: null,
  },
];

const EVENT_TYPES = [
  'Mariage', 'Soirée & Gala', 'Anniversaire', 'Événement d\'entreprise', 'Autre',
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = true;
    if (!form.email.trim())   e.email   = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSend = () => {
    if (!validate()) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', type: '', message: '' });
    setErrors({});
  };

  return (
    <div className="contact-section">
      <div className="contact-inner">
        {/* ── Left: info ── */}
        <ScrollReveal direction="left">
          <div className="contact-left">
            <div className="section-label">Restez en contact</div>
            <h2>Venez célébrer<br /><em style={{ fontStyle: 'italic', color: GOLD }}>avec nous</em></h2>
            <p>Bienvenue chez Amine Art Events. Nous transformons vos rêves en réalité. Contactez-nous pour discuter de votre prochain événement.</p>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
            {INFO_ITEMS.map((item) => {
                const inner = (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '0.9rem 1.1rem',
                    background: '#faf7f2',
                    border: '1px solid rgba(184,146,42,0.12)',
                    borderLeft: `3px solid ${GOLD}`,
                    transition: 'background 0.25s, box-shadow 0.25s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#faf7f2'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <span style={{ color: GOLD, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.15rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.82rem', color: DARK, fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                );
                return item.href
                  ? <a key={item.label} href={item.href} style={{ textDecoration: 'none' }}>{inner}</a>
                  : <div key={item.label}>{inner}</div>;
              })}
            </div>

            {/* Social buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={IG} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.6rem 1.1rem', borderRadius: 3, textDecoration: 'none',
                background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
                color: '#fff', fontSize: '0.7rem', letterSpacing: '0.08em',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
                @amine.art.events
              </a>
              <a href={WA} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.6rem 1.1rem', borderRadius: 3, textDecoration: 'none',
                background: '#25D366', color: '#fff', fontSize: '0.7rem', letterSpacing: '0.08em',
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Right: form ── */}
        <ScrollReveal direction="right" delay={120}>
          <div className="contact-right">
            {sent ? (
              <div className="form-success">
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>✓</div>
                <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Message envoyé !</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.75 }}>Nous vous répondrons dans les plus brefs délais.</div>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div>
                    <input
                      className="form-input"
                      placeholder="Votre nom *"
                      value={form.name}
                      onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                      style={{ borderColor: errors.name ? '#e05c5c' : undefined }}
                    />
                  </div>
                  <div>
                    <input
                      className="form-input"
                      placeholder="Votre email *"
                      type="email"
                      value={form.email}
                      onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: false }); }}
                      style={{ borderColor: errors.email ? '#e05c5c' : undefined }}
                    />
                  </div>
                </div>
                <div className="form-row" style={{ marginBottom: '1rem' }}>
                  <input
                    className="form-input"
                    placeholder="Votre téléphone"
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                  <select
                    className="form-input"
                    aria-label="Type d'événement"
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    style={{ appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer', color: form.type ? undefined : '#bbb' }}
                  >
                    <option value="" disabled>Type d'événement</option>
                    {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Votre message *"
                  value={form.message}
                  onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: false }); }}
                  style={{ borderColor: errors.message ? '#e05c5c' : undefined }}
                />
                {Object.values(errors).some(Boolean) && (
                  <div style={{ fontSize: '0.72rem', color: '#e05c5c', marginBottom: '0.8rem', letterSpacing: '0.04em' }}>
                    Veuillez remplir les champs obligatoires (*).
                  </div>
                )}
                <button className="form-btn" onClick={handleSend}>Envoyer le message →</button>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
