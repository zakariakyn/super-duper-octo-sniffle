import { GOLD } from '../constants';

/* SVG logo designs for each partner */
const PARTNERS = [
  {
    name: 'Luxury Events',
    svg: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <text x="60" y="18" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="13" fill="#B8922A" fontWeight="600" letterSpacing="2">LUXURY</text>
        <line x1="20" y1="24" x2="100" y2="24" stroke="#B8922A" strokeWidth="0.5" opacity="0.5"/>
        <text x="60" y="37" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="8.5" fill="#888" letterSpacing="3.5">EVENTS</text>
      </svg>
    ),
  },
  {
    name: 'Royal Flowers',
    svg: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <text x="60" y="16" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fill="#B8922A" fontStyle="italic">✿</text>
        <text x="60" y="31" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="12" fill="#333" letterSpacing="1.5">Royal Flowers</text>
        <text x="60" y="43" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="7" fill="#aaa" letterSpacing="3">MARRAKECH</text>
      </svg>
    ),
  },
  {
    name: 'Sound Pro',
    svg: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <rect x="10" y="20" width="3" height="10" rx="1.5" fill="#B8922A"/>
        <rect x="17" y="14" width="3" height="22" rx="1.5" fill="#B8922A"/>
        <rect x="24" y="18" width="3" height="14" rx="1.5" fill="#B8922A"/>
        <text x="68" y="22" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="13" fill="#222" fontWeight="500" letterSpacing="1">SOUND</text>
        <text x="68" y="36" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="10" fill="#B8922A" letterSpacing="2">PRO</text>
      </svg>
    ),
  },
  {
    name: 'Light Studio',
    svg: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <polygon points="60,6 64,17 76,17 66,24 70,35 60,28 50,35 54,24 44,17 56,17" fill="none" stroke="#B8922A" strokeWidth="1.2"/>
        <text x="60" y="46" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="7.5" fill="#666" letterSpacing="3">LIGHT STUDIO</text>
      </svg>
    ),
  },
  {
    name: 'Photo Premium',
    svg: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <rect x="35" y="12" width="50" height="26" rx="3" fill="none" stroke="#B8922A" strokeWidth="1.2"/>
        <circle cx="60" cy="25" r="7" fill="none" stroke="#B8922A" strokeWidth="1"/>
        <rect x="55" y="10" width="10" height="5" rx="2" fill="#B8922A"/>
        <text x="60" y="46" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="7" fill="#888" letterSpacing="2.5">PREMIUM</text>
      </svg>
    ),
  },
  {
    name: 'Catering Plus',
    svg: (
      <svg viewBox="0 0 120 50" width="110" height="46">
        <text x="33" y="30" textAnchor="middle" fontFamily="serif" fontSize="22" fill="#B8922A">🍽</text>
        <text x="74" y="22" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="12" fill="#333" letterSpacing="0.5">Catering</text>
        <text x="74" y="36" textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="9" fill="#B8922A" letterSpacing="3">PLUS</text>
      </svg>
    ),
  },
];

const ALL = [...PARTNERS, ...PARTNERS, ...PARTNERS];

export default function PartnersSlider() {
  return (
    <div className="partners-section">
      <div className="partners-inner">
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>Nos Partenaires</div>
        <div className="partners-track-wrap">
          <div className="partners-track">
            {ALL.map((p, i) => (
              <div key={i} className="partner-card" title={p.name}>
                {p.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
