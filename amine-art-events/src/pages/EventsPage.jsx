import Footer from '../components/Footer';

const EVENTS = [
  { title: 'Soirée',  loc: 'Harmonious Park', icon: '🌟', page: 'soiree',  bg: 'linear-gradient(135deg,#1a0d05,#3d1f00)' },
  { title: 'Mariage', loc: 'Harmonious Park', icon: '💍', page: 'mariage', bg: 'linear-gradient(135deg,#0d1a1a,#003d3d)' },
];

export default function EventsPage({ navigate }) {
  return (
    <div className="fade-in">
      <div className="page-hero"><h1>Événements</h1></div>
      <div className="events-grid" style={{ marginTop: '3rem' }}>
        {EVENTS.map((ev, i) => (
          <div className="event-card" key={i}>
            <div className="event-image">
              <div className="event-image-inner" style={{ background: ev.bg, minHeight: 420 }}>
                <span style={{ fontSize: '6rem' }}>{ev.icon}</span>
              </div>
            </div>
            <div className="event-info">
              <h3>{ev.title}</h3>
              <p>{ev.loc}</p>
              <span className="en-savoir" onClick={() => navigate(ev.page)}>En savoir plus →</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '5rem' }} />
      <Footer navigate={navigate} />
    </div>
  );
}
