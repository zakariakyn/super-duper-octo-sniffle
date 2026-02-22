import { useState, useRef, useEffect } from 'react';
import { NAV_ITEMS, GOLD, DARK } from '../constants';

const EVENT_LINKS   = [{ label: 'Soirée', page: 'soiree' }, { label: 'Mariage', page: 'mariage' }];
const SERVICE_LINKS = [
  { label: 'Éclairage', page: 'eclairage' }, { label: 'Structure', page: 'structure' },
  { label: 'Sonorisation', page: 'sonorisation' }, { label: 'Décoration', page: 'decoration' },
];

/* ─ Desktop hover dropdown ─ */
function NavItem({ label, page, isActive, hasDropdown, dropItems, navigate }) {
  const [hover, setHover] = useState(false);
  const closeTimer = useRef(null);
  const open  = () => { clearTimeout(closeTimer.current); setHover(true); };
  const close = () => { closeTimer.current = setTimeout(() => setHover(false), 140); };

  return (
    <li style={{ position: 'relative' }} onMouseEnter={hasDropdown ? open : undefined} onMouseLeave={hasDropdown ? close : undefined}>
      <a className={isActive ? 'active' : ''} onClick={() => { if (!hasDropdown) navigate(page); setHover(false); }}
        style={{ userSelect: 'none', display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer' }}>
        {label}
        {hasDropdown && <span style={{ fontSize: '0.52rem', transition: 'transform 0.2s', display: 'inline-block', transform: hover ? 'rotate(180deg)' : 'none' }}>▾</span>}
      </a>
      {hasDropdown && hover && (
        <div onMouseEnter={open} onMouseLeave={close} style={{ position: 'absolute', top: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)', background: '#fff', border: '1px solid rgba(184,146,42,0.15)', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', minWidth: 180, zIndex: 300, animation: 'dropIn 0.18s ease forwards' }}>
          <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 12, height: 6, overflow: 'hidden' }}>
            <div style={{ width: 10, height: 10, background: '#fff', border: '1px solid rgba(184,146,42,0.15)', transform: 'rotate(45deg)', margin: '3px auto 0' }} />
          </div>
          {dropItems.map(({ label: lbl, page: pg }) => (
            <div key={pg} onClick={() => { navigate(pg); setHover(false); }}
              style={{ padding: '0.8rem 1.3rem', fontSize: '0.7rem', letterSpacing: '0.12em', cursor: 'pointer', color: '#444', transition: 'all 0.18s', borderBottom: '1px solid rgba(184,146,42,0.07)', textTransform: 'uppercase' }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#444'; }}
            >{lbl}</div>
          ))}
        </div>
      )}
    </li>
  );
}

/* ─ Mobile: parent nav link + collapse sub-items ─ */
function MobileNavGroup({ parentLabel, items, navigate, close }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      {/* Row: click label or ▾ → expand/collapse sub-items */}
      <div
        onClick={() => setExpanded(e => !e)}
        role="button"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(ex => !ex); } }}
        style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(184,146,42,0.1)', cursor: 'pointer' }}>
        <div
          style={{ flex: 1, padding: '1rem 0', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: DARK, fontWeight: 500 }}>
          {parentLabel}
        </div>
        <div
          style={{ padding: '1rem 0.3rem', color: GOLD, fontSize: '0.68rem', transition: 'transform 0.25s', transform: expanded ? 'rotate(180deg)' : 'none', display: 'inline-block', userSelect: 'none' }}>
          ▾
        </div>
      </div>
      {/* Sub-items */}
      <div style={{ maxHeight: expanded ? `${items.length * 50}px` : 0, overflow: 'hidden', transition: 'max-height 0.32s ease', background: '#faf7f2' }}>
        {items.map(({ label: lbl, page }) => (
          <div key={page} onClick={() => { navigate(page); close(); }}
            style={{ padding: '0.8rem 1.4rem', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, cursor: 'pointer', borderBottom: '1px solid rgba(184,146,42,0.07)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ width: 12, height: 1, background: GOLD, display: 'inline-block', flexShrink: 0 }} />{lbl}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Nav({ currentPage, navigate, mobileOpen, setMobileOpen }) {
  const navRef = useRef(null);
  const close = () => setMobileOpen(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const h = (e) => { if (navRef.current && !navRef.current.contains(e.target)) close(); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        @keyframes dropIn { from{opacity:0;transform:translateX(-50%) translateY(-6px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
      `}</style>

      <nav ref={navRef}>
        <div className="nav-inner">
          <div className="logo-wrap" onClick={() => { navigate('home'); close(); }}>
            <span className="logo-icon">✿</span>
            <div className="logo-text">AMINE<br />ART EVENTS</div>
          </div>

          <ul className="nav-links">
            {NAV_ITEMS.map(({ label, page }) => {
              const isActive = currentPage === page
                || (page === 'events'   && ['soiree','mariage'].includes(currentPage))
                || (page === 'services' && ['eclairage','structure','sonorisation','decoration'].includes(currentPage));
              const hasDrop = page === 'events' || page === 'services';
              return (
                <NavItem key={page} label={label} page={page} isActive={isActive}
                  hasDropdown={hasDrop}
                  dropItems={page === 'events' ? EVENT_LINKS : page === 'services' ? SERVICE_LINKS : []}
                  navigate={navigate} />
              );
            })}
          </ul>

          <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : 'none', transition: 'transform 0.3s' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.25s' }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none', transition: 'transform 0.3s' }} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {mobileOpen && <div onClick={close} style={{ position: 'fixed', inset: 0, top: 60, background: 'rgba(0,0,0,0.4)', zIndex: 98 }} />}

      {/* Mobile panel */}
      <div style={{
        position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
        background: '#fff',
        maxHeight: mobileOpen ? 'calc(100dvh - 60px)' : 0,
        overflowY: mobileOpen ? 'auto' : 'hidden',
        transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
      }}>
        <div style={{ padding: '0 1.5rem 2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 0 0.8rem', borderBottom: '1px solid rgba(184,146,42,0.1)', marginBottom: '0.3rem' }}>
            <span style={{ color: GOLD, fontSize: '1.2rem' }}>✿</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: GOLD, fontSize: '0.82rem', letterSpacing: '0.22em' }}>AMINE ART EVENTS</span>
          </div>

          {/* Accueil */}
          <div onClick={() => { navigate('home'); close(); }}
            style={{ padding: '1rem 0', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: DARK, cursor: 'pointer', borderBottom: '1px solid rgba(184,146,42,0.1)', fontWeight: 500 }}>
            Accueil
          </div>

          {/* Événements: clicking label → navigate('events') + close; ▾ expands sub-items */}
          <MobileNavGroup parentLabel="Événements" items={EVENT_LINKS}   navigate={navigate} close={close} />
          <MobileNavGroup parentLabel="Services"   items={SERVICE_LINKS} navigate={navigate} close={close} />

          {[{ label: 'Témoignages', page: 'testimonials' }, { label: 'Contactez-nous', page: 'contact' }].map(({ label, page }) => (
            <div key={page} onClick={() => { navigate(page); close(); }}
              style={{ padding: '1rem 0', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: DARK, cursor: 'pointer', borderBottom: '1px solid rgba(184,146,42,0.1)', fontWeight: 500 }}>
              {label}
            </div>
          ))}

          <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1.5rem' }}>
            <a href="https://www.instagram.com/amine.art.events/" target="_blank" rel="noreferrer" style={{ fontSize: '0.65rem', color: GOLD, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Instagram</a>
            <a href="https://wa.me/212662115574" target="_blank" rel="noreferrer" style={{ fontSize: '0.65rem', color: GOLD, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>WhatsApp</a>
          </div>
        </div>
      </div>
    </>
  );
}
