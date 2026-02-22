import { GOLD, DARK, CARD_BG, IMAGES } from '../constants';
import GallerySlider from '../components/GallerySlider';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

/* Wedding-specific curated images */
const WEDDING_GALLERY = [
  { img: IMAGES.mariage,    label: 'Cérémonie'       },
  { img: IMAGES.gal_str_2,  label: 'Arche de mariage'},
  { img: IMAGES.gal_dec_2,  label: "Table d'honneur" },
  { img: IMAGES.gal_dec_3,  label: 'Salle de réception'},
  { img: IMAGES.gal_ecl_1,  label: 'Éclairage romantique'},
  { img: IMAGES.gal_dec_4,  label: 'Mise en scène'   },
  { img: IMAGES.gal_str_5,  label: 'Baldaquin'       },
  { img: IMAGES.gal_dec_1,  label: 'Décoration florale'},
];

const SOIREE_GALLERY = [
  { img: IMAGES.gal_ecl_5,  label: 'Soirée de gala'    },
  { img: IMAGES.gal_son_2,  label: 'Ambiance musicale'  },
  { img: IMAGES.gal_dec_1,  label: 'Décoration florale' },
  { img: IMAGES.gal_ecl_3,  label: 'Éclairage artistique'},
  { img: IMAGES.gal_str_1,  label: 'Scène principale'   },
];

const EVENT_META = {
  Soirée: {
    img: IMAGES.soiree, label: 'Gala & Célébrations',
    desc: "Nous créons des soirées inoubliables qui dépassent toutes les attentes. De l'éclairage à la décoration, chaque détail est pensé pour vous offrir une expérience unique.",
    slides: SOIREE_GALLERY,
  },
  Mariage: {
    img: IMAGES.mariage, label: 'Mariages & Célébrations',
    desc: "Votre jour le plus précieux mérite la perfection. Notre équipe orchestre chaque instant de votre mariage avec une attention extraordinaire aux détails.",
    slides: WEDDING_GALLERY,
  },
};

/* Canva-style overlap block */
function OverlapBlock({ imgSrc, title, text, reverse = false, accent, cta, onCta }) {
  return (
    <div className="overlap-wrap" style={{
      position: 'relative', display: 'grid',
      gridTemplateColumns: reverse ? '1fr 58%' : '58% 1fr',
      alignItems: 'center', minHeight: 380, marginBottom: '4rem',
    }}>
      <div style={{
        order: reverse ? 2 : 1,
        position: 'relative', overflow: 'hidden',
        marginRight: reverse ? 0 : '-8%', marginLeft: reverse ? '-8%' : 0,
        zIndex: 2, aspectRatio: '4/3', boxShadow: '0 24px 60px rgba(0,0,0,0.22)',
      }}>
        <img src={imgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s' }}
          onMouseEnter={e => e.target.style.transform='scale(1.04)'}
          onMouseLeave={e => e.target.style.transform='scale(1)'} />
      </div>
      <div style={{
        order: reverse ? 1 : 2, background: accent || CARD_BG,
        padding: reverse ? '3rem 5rem 3rem 3rem' : '3rem 3rem 3rem 5rem',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1, minHeight: 280,
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.7rem,4vw,2.5rem)', color: '#fff', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem' }}>{title}</div>
        <div style={{ width: 36, height: 1, background: 'rgba(255,255,255,0.3)', marginBottom: '1.1rem' }} />
        <p style={{ fontSize: '0.82rem', color: 'rgba(249,244,237,0.65)', lineHeight: 1.8, marginBottom: cta ? '1.8rem' : 0 }}>{text}</p>
        {cta && <button className="btn-outline" style={{ alignSelf: 'flex-start' }} onClick={onCta}>{cta}</button>}
      </div>
    </div>
  );
}

export default function EventDetailPage({ title, navigate }) {
  const meta = EVENT_META[title] || EVENT_META['Soirée'];

  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${meta.img})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-sub">Événements — Amine Art Events</div>
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

        {/* Canva overlap blocks */}
        <ScrollReveal direction="up">
          <OverlapBlock imgSrc={meta.img}
            title={<>Une expérience<br/><em style={{fontStyle:'italic',color:'rgba(249,244,237,0.8)'}}>Unique</em></>}
            text="Faites confiance à Amine Art Events pour transformer votre vision en réalité. Chaque moment est soigneusement orchestré."
            cta="Nous contacter" onCta={() => navigate('contact')}
          />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <OverlapBlock imgSrc={meta.slides[1]?.img || meta.img}
            title={<>Des souvenirs<br/><em style={{fontStyle:'italic',color:'rgba(249,244,237,0.8)'}}>Éternels</em></>}
            text="Des moments précieux immortalisés dans la mémoire de vos invités. Nous créons des ambiances qui restent gravées pour toujours."
            reverse accent="#1a1208"
          />
        </ScrollReveal>

        {/* Gallery slider */}
        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="section-label">Galerie</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: DARK, marginBottom: '1.5rem' }}>
              Moments <em style={{ fontStyle: 'italic', color: GOLD }}>Capturés</em>
            </h3>
          </div>
          <GallerySlider slides={meta.slides} interval={4000} />
        </ScrollReveal>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
