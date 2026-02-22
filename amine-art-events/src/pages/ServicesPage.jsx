import { SERVICES_DATA } from '../constants';
import Footer from '../components/Footer';

export default function ServicesPage({ navigate }) {
  return (
    <div className="fade-in">
      <div className="page-hero"><h1>Services</h1></div>
      <div style={{ padding: '4rem 2rem' }}>
        <div className="services-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {SERVICES_DATA.map(s => (
            <div
              className="service-card"
              key={s.page}
              style={{ minHeight: 260 }}
              onClick={() => navigate(s.page)}
            >
              <div className="service-icon" style={{ fontSize: '2.5rem' }}>{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-loc">{s.location}</div>
              <div className="service-desc" style={{ marginTop: '0.5rem' }}>{s.desc}</div>
              <br />
              <span className="service-link">En savoir plus →</span>
            </div>
          ))}
        </div>
      </div>
      <Footer navigate={navigate} />
    </div>
  );
}
