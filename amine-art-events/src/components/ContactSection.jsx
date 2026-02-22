import { useState } from 'react';
import { GOLD, DARK, CONTACT_EMAIL } from '../constants';
import ScrollReveal from './ScrollReveal';

const IG = 'https://www.instagram.com/amine.art.events/';
const WA = 'https://wa.me/212662115574';

export default function ContactSection() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Veuillez entrer votre nom.';
    if (!form.email.trim())   e.email   = 'Veuillez entrer votre email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Adresse email invalide.';
    if (!form.message.trim()) e.message = 'Veuillez entrer votre message.';
    return e;
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Message de ' + form.name)}&body=${encodeURIComponent('Nom: ' + form.name + '\nEmail: ' + form.email + '\n\n' + form.message)}`;
    window.location.href = mailto;
  };

  return (
    <div className="contact-section">
      <div className="contact-inner">
        <ScrollReveal direction="left">
          <div className="contact-left">
            <div className="section-label">Restez en contact</div>
            <h2>Venez célébrer avec nous</h2>
            <p>Bienvenue chez Amine Art Events. Nous transformons vos rêves en réalité. Contactez-nous pour discuter de votre prochain événement.</p>
            <div className="contact-phone">📞 +212 6 62 11 55 74</div>
            <div className="contact-socials">
              <a href={IG} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.6rem 1.1rem', borderRadius: 3, textDecoration: 'none',
                background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
                color: '#fff', fontSize: '0.7rem', letterSpacing: '0.08em',
              }}>
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
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={120}>
          <div className="contact-right">
              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <input className="form-input" placeholder="Votre nom" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  {errors.name    && <div style={{ color: '#c0392b', fontSize: '0.65rem', marginTop: '0.3rem' }}>{errors.name}</div>}
                </div>
                <div style={{ flex: 1 }}>
                  <input className="form-input" placeholder="Votre email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  {errors.email   && <div style={{ color: '#c0392b', fontSize: '0.65rem', marginTop: '0.3rem' }}>{errors.email}</div>}
                </div>
              </div>
              <div>
                <textarea className="form-input form-textarea" placeholder="Votre message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                {errors.message && <div style={{ color: '#c0392b', fontSize: '0.65rem', marginTop: '0.3rem' }}>{errors.message}</div>}
              </div>
              <button className="form-btn" onClick={handleSend}>Envoyer le message</button>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
