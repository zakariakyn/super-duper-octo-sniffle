import { useState } from 'react';
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

/* ─── Wedding photo grid ─── */
function WeddingMosaicGrid({ navigate }) {
  const [hovering, setHovering] = useState(null);
  const items = [
    { img: IMAGES.mariage,   span: 'wide', label: 'La Cérémonie' },
    { img: IMAGES.gal_str_2, span: 'tall', label: 'Arche florale' },
    { img: IMAGES.gal_dec_2, span: '',     label: "Table d'honneur" },
    { img: IMAGES.gal_dec_3, span: '',     label: 'Réception' },
    { img: IMAGES.gal_dec_1, span: 'wide', label: 'Décoration' },
  ];
  return (
    <div style={{ marginBottom: '4rem' }}>
      <ScrollReveal>
        <div className="section-label">Moments Capturés</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: DARK, marginBottom: '1.5rem' }}>
          Notre <em style={{ fontStyle: 'italic', color: GOLD }}>Galerie Mariage</em>
        </h3>
      </ScrollReveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto', gap: '0.5rem' }}>
        {items.map((item, i) => (
          <div key={i}
            style={{
              gridColumn: item.span === 'wide' ? 'span 2' : 'span 1',
              gridRow: item.span === 'tall' ? 'span 2' : 'span 1',
              overflow: 'hidden', position: 'relative', cursor: 'zoom-in',
              minHeight: item.span === 'tall' ? 400 : 220,
            }}
            onMouseEnter={() => setHovering(i)}
            onMouseLeave={() => setHovering(null)}
          >
            <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', transform: hovering === i ? 'scale(1.05)' : 'scale(1)' }} />
            <div style={{ position: 'absolute', inset: 0, background: `rgba(0,0,0,${hovering === i ? 0.35 : 0.15})`, transition: 'background 0.4s', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: hovering === i ? 1 : 0, transition: 'opacity 0.3s' }}>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Wedding video embed placeholder ─── */
function WeddingVideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ marginBottom: '4rem' }}>
      <ScrollReveal>
        <div className="section-label">Cinéma de Mariage</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: DARK, marginBottom: '1.5rem' }}>
          Votre Histoire en <em style={{ fontStyle: 'italic', color: GOLD }}>Images</em>
        </h3>
      </ScrollReveal>

      {/* Video cover with play button */}
      <div
        onClick={() => setPlaying(true)}
        style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', cursor: 'pointer', background: '#0a0807' }}
      >
        <img src={IMAGES.mariage} alt="Wedding video" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: playing ? 0 : 0.7, transition: 'opacity 0.5s' }} />

        {!playing && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {/* Gold play circle */}
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 12px rgba(184,146,42,0.2)', transition: 'transform 0.3s', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.8rem', color: '#fff', marginLeft: '4px' }}>▶</span>
            </div>
            <p style={{ color: '#fff', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Voir le film</p>
          </div>
        )}

        {playing && (
          /* Replace src with real YouTube embed or video URL */
          <div style={{ position: 'absolute', inset: 0, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', border: `2px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: GOLD, fontSize: '1.4rem' }}>✿</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', letterSpacing: '0.2em', textAlign: 'center', maxWidth: 280 }}>
              Intégrez ici l'URL de votre vidéo YouTube ou Vimeo pour activer la lecture.
            </p>
            <button onClick={() => setPlaying(false)} style={{ background: 'none', border: `1px solid rgba(255,255,255,0.3)`, color: '#fff', padding: '0.5rem 1.2rem', fontSize: '0.65rem', letterSpacing: '0.15em', cursor: 'pointer' }}>
              Fermer
            </button>
          </div>
        )}
      </div>

      <p style={{ fontSize: '0.72rem', color: '#aaa', marginTop: '0.8rem', textAlign: 'center', letterSpacing: '0.1em' }}>
        Films de mariage cinématiques • Séances photos • Souvenirs éternels
      </p>
    </div>
  );
}

export default function EventDetailPage({ title, navigate }) {
  const meta = EVENT_META[title] || EVENT_META['Soirée'];
  const isWedding = title === 'Mariage';

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

        {/* ─── Wedding-only sections ─── */}
        {isWedding && (
          <>
            <WeddingMosaicGrid navigate={navigate} />
            <WeddingVideoSection />
          </>
        )}

        {/* Gallery slider */}
        <ScrollReveal>
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="section-label">Galerie</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: DARK, marginBottom: '1.5rem' }}>
              {isWedding ? <>Album <em style={{ fontStyle: 'italic', color: GOLD }}>de Mariage</em></> : <>Moments <em style={{ fontStyle: 'italic', color: GOLD }}>Capturés</em></>}
            </h3>
          </div>
          <GallerySlider slides={meta.slides} interval={4000} />
        </ScrollReveal>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
