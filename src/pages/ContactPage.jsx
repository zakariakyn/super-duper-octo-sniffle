import { IMAGES } from '../constants';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ContactPage({ navigate }) {
  return (
    <div className="fade-in">
      {/* Hero with image */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${IMAGES.contact})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-sub">Amine Art Events</div>
        <h1>Contactez-nous</h1>
        <div className="page-hero-line" />
      </div>
      <ContactSection />
      <Footer navigate={navigate} />
    </div>
  );
}
