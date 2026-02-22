import { GOLD, DARK, CREAM, CARD_BG, IMAGES } from '../constants';
import GallerySlider from '../components/GallerySlider';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const SERVICE_META = {
  eclairage: {
    heroImg: IMAGES.eclairage, label: 'Lumière & Ambiance',
    desc: "Notre expertise en éclairage transforme chaque espace en une scène de rêve. Des jeux de lumières subtils aux effets spectaculaires, nous créons l'atmosphère parfaite.",
    slides: [
      { img: IMAGES.gal_ecl_1, label: 'Éclairage ambiant' }, { img: IMAGES.gal_ecl_2, label: 'Lumières tamisées' },
      { img: IMAGES.gal_ecl_3, label: 'Éclairage scénique' }, { img: IMAGES.gal_ecl_4, label: 'Effets lumineux' }, { img: IMAGES.gal_ecl_5, label: 'Extérieur' },
    ],
  },
  structure: {
    heroImg: IMAGES.structure, label: 'Architecture & Scène',
    desc: "Nos structures événementielles sur mesure — arches, baldaquins, podiums — créent le cadre majestueux que mérite votre célébration.",
    slides: [
      { img: IMAGES.gal_str_1, label: 'Arc floral' }, { img: IMAGES.gal_str_2, label: 'Arche mariage' },
      { img: IMAGES.gal_str_3, label: 'Tente réception' }, { img: IMAGES.gal_str_4, label: 'Podium' }, { img: IMAGES.gal_str_5, label: 'Baldaquin' },
    ],
  },
  sonorisation: {
    heroImg: IMAGES.sonorisation, label: 'Son & Musique',
    desc: "Une sonorisation de qualité professionnelle pour que chaque note, chaque discours soit entendu avec clarté. Du DJ au live, nous équipons vos événements.",
    slides: [
      { img: IMAGES.gal_son_1, label: 'Sono principale' }, { img: IMAGES.gal_son_2, label: 'Ambiance musicale' },
      { img: IMAGES.gal_son_3, label: 'Live music' }, { img: IMAGES.gal_son_4, label: 'Micros' }, { img: IMAGES.gal_son_5, label: 'Système DJ' },
    ],
  },
  decoration: {
    heroImg: IMAGES.decoration, label: 'Floral & Thématique',
    desc: "Notre équipe transforme vos espaces en tableaux vivants. Décoration florale, centres de table, arches végétales — chaque détail raconte votre histoire.",
    slides: [
      { img: IMAGES.gal_dec_1, label: 'Décoration florale' }, { img: IMAGES.gal_dec_2, label: 'Centres de table' },
      { img: IMAGES.gal_dec_3, label: 'Salle' }, { img: IMAGES.gal_dec_4, label: "Table d'honneur" }, { img: IMAGES.gal_dec_5, label: "Entrée" },
    ],
  },
};

/* Canva-style overlap block */
function OverlapBlock({ imgSrc, title, subtitle, text, reverse = false, accent }) {
  return (
    <div className="overlap-wrap" style={{
      position: 'relative', display: 'grid',
      gridTemplateColumns: reverse ? '1fr 58%' : '58% 1fr',
      alignItems: 'center', minHeight: 380,
      marginBottom: '5rem',
    }}>
      {/* Photo */}
      <div style={{
        order: reverse ? 2 : 1,
        position: 'relative', overflow: 'hidden',
        marginRight: reverse ? 0 : '-8%',
        marginLeft:  reverse ? '-8%' : 0,
        zIndex: 2, aspectRatio: '4/3',
        boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
      }}>
        <img src={imgSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s' }}
          onMouseEnter={e => e.target.style.transform='scale(1.04)'}
          onMouseLeave={e => e.target.style.transform='scale(1)'}
        />
      </div>
      {/* Gold info panel */}
      <div style={{
        order: reverse ? 1 : 2,
        background: accent || CARD_BG,
        padding: reverse ? '3rem 5rem 3rem 3rem' : '3rem 3rem 3rem 5rem',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        zIndex: 1, minHeight: 280,
      }}>
        {subtitle && <div style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(249,244,237,0.55)', marginBottom: '0.8rem' }}>{subtitle}</div>}
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.7rem,4vw,2.5rem)', color: '#fff', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem' }}>
          {title}
        </div>
        <div style={{ width: 36, height: 1, background: 'rgba(255,255,255,0.3)', marginBottom: '1.1rem' }} />
        <p style={{ fontSize: '0.82rem', color: 'rgba(249,244,237,0.65)', lineHeight: 1.8 }}>{text}</p>
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ title, page, navigate }) {
  const meta = SERVICE_META[page] || SERVICE_META.eclairage;
  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${meta.heroImg})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-sub">Services — Amine Art Events</div>
        <h1>{title}</h1>
        <div className="page-hero-line" />
      </div>

      <div className="detail-content">
        {/* Intro */}
        <ScrollReveal>
          <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: '1.8rem', marginBottom: '4rem' }}>
            <div className="section-label">{meta.label}</div>
            <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.85, maxWidth: 680 }}>{meta.desc}</p>
          </div>
        </ScrollReveal>

        {/* Canva-style overlap blocks */}
        <ScrollReveal direction="up">
          <OverlapBlock imgSrc={meta.heroImg} title={<>Qualité &amp;<br/><em style={{fontStyle:'italic',color:'rgba(249,244,237,0.8)'}}>Élégance</em></>} subtitle="Notre expertise" text="Nous mettons tout notre savoir-faire au service de votre événement pour créer des moments inoubliables avec passion et professionnalisme." />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <OverlapBlock imgSrc={meta.slides[1]?.img || meta.heroImg} title={<>Des réalisations<br/><em style={{fontStyle:'italic',color:'rgba(249,244,237,0.8)'}}>Inoubliables</em></>} subtitle="Harmonious Park" text="Chaque détail est soigné avec soin et dévouement pour transformer votre vision en une réalité qui dépasse toutes vos attentes." reverse accent="#1a1208" />
        </ScrollReveal>

        {/* Gallery */}
        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="section-label">Galerie</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: DARK, marginBottom: '1.5rem', lineHeight: 1 }}>
              Nos <em style={{ fontStyle: 'italic', color: GOLD }}>Réalisations</em>
            </h3>
          </div>
          <GallerySlider slides={meta.slides} interval={3800} />
        </ScrollReveal>
      </div>

      {/* Testimonials strip */}
      <Footer navigate={navigate} />
    </div>
  );
}
