import { useState, useEffect } from 'react';
import { globalStyles } from './styles';
import { GOLD } from './constants';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import EventDetailPage from './pages/EventDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function PageLoader({ visible }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: '#0e0b07',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
      opacity: visible ? 1 : 0, pointerEvents: visible ? 'all' : 'none',
      transition: 'opacity 0.4s ease',
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: GOLD, animation: 'pulseGold 1.2s ease infinite' }}>✿</div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.72rem', color: GOLD, letterSpacing: '0.45em', textTransform: 'uppercase' }}>Amine Art Events</div>
      <div style={{ width: 140, height: 2, background: 'rgba(184,146,42,0.18)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ height: '100%', background: GOLD, animation: 'loadBar 1s ease infinite' }} />
      </div>
      <style>{`
        @keyframes pulseGold { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes loadBar { 0%{width:0%;margin-left:0} 50%{width:80%;margin-left:0} 100%{width:0%;margin-left:100%} }
      `}</style>
    </div>
  );
}

/* NAV HEIGHT — single source of truth */
const NAV_H = 72;        /* px, matches CSS nav height on desktop  */
const NAV_H_MOBILE = 60; /* px, matches CSS nav height on mobile   */

export default function App() {
  const [page, setPage]             = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [nextPage, setNextPage]     = useState(null);

  useEffect(() => {
    if (!nextPage) return;
    const t = setTimeout(() => {
      setPage(nextPage); setNextPage(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setLoading(false), 220);
    }, 480);
    return () => clearTimeout(t);
  }, [nextPage]);

  const navigate = (p) => {
    if (p === page) { setMobileOpen(false); return; }
    setMobileOpen(false);
    setLoading(true);
    setNextPage(p);
  };

  /* Pages that DON'T have their own hero — need the nav spacer div */
  const needsSpacer = page !== 'home';

  const renderPage = () => {
    switch (page) {
      case 'home':         return <HomePage navigate={navigate} />;
      case 'events':       return <EventsPage navigate={navigate} />;
      case 'services':     return <ServicesPage navigate={navigate} />;
      case 'testimonials': return <TestimonialsPage navigate={navigate} />;
      case 'contact':      return <ContactPage navigate={navigate} />;
      case 'soiree':       return <EventDetailPage title="Soirée"        navigate={navigate} />;
      case 'mariage':      return <EventDetailPage title="Mariage"       navigate={navigate} />;
      case 'eclairage':    return <ServiceDetailPage title="Éclairage"   page="eclairage"    navigate={navigate} />;
      case 'structure':    return <ServiceDetailPage title="Structure"   page="structure"    navigate={navigate} />;
      case 'sonorisation': return <ServiceDetailPage title="Sonorisation" page="sonorisation" navigate={navigate} />;
      case 'decoration':   return <ServiceDetailPage title="Décoration"  page="decoration"   navigate={navigate} />;
      default:             return <HomePage navigate={navigate} />;
    }
  };

  return (
    <>
      <style>{globalStyles}</style>
      {/* Force nav-height CSS variable for use in other components */}
      <style>{`:root { --nav-h: ${NAV_H}px; --nav-h-mobile: ${NAV_H_MOBILE}px; }`}</style>
      <PageLoader visible={loading} />
      <Nav currentPage={page} navigate={navigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      {/* Spacer that matches nav height — except on home (hero handles it) */}
      {needsSpacer && <div style={{ height: 'var(--nav-h)' }} />}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.35s ease' }}>
        {renderPage()}
      </div>
    </>
  );
}
