import { GOLD, GOLD_DARK, GOLD_LIGHT, CREAM, DARK, CARD_BG } from './constants';

export const globalStyles = `
  /* ─── Animations ─── */
  .fade-in { animation: fadeIn 0.8s ease forwards; }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(8px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  /* ─── Navbar ─── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(249,244,237,0.97);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(184,146,42,0.18);
    box-shadow: 0 2px 20px rgba(0,0,0,0.06);
  }
  nav .nav-inner {
    max-width: 1300px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2.5rem; height: 72px; /* --nav-h: 72px */
  }
  .logo-wrap { cursor: pointer; display: flex; align-items: center; gap: 0.6rem; }
  .logo-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.82rem; letter-spacing: 0.22em;
    color: ${GOLD}; line-height: 1.25; text-align: left;
  }
  .logo-icon { font-size: 1.6rem; color: ${GOLD}; }

  .nav-links { display: flex; gap: 2rem; list-style: none; flex-wrap: nowrap; align-items: center; }
  .nav-links a {
    font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
    color: #555; text-decoration: none; white-space: nowrap;
    transition: color 0.25s; font-weight: 500; cursor: pointer;
    position: relative; padding-bottom: 2px;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 1.5px; background: ${GOLD};
    transform: scaleX(0); transition: transform 0.3s ease;
    transform-origin: center;
  }
  .nav-links a:hover::after,
  .nav-links a.active::after { transform: scaleX(1); }
  .nav-links a:hover,
  .nav-links a.active { color: ${GOLD}; }

  .hamburger {
    display: none; flex-direction: column; gap: 5px;
    cursor: pointer; padding: 5px; background: none; border: none;
  }
  .hamburger span { width: 22px; height: 1.5px; background: ${DARK}; transition: all 0.3s; display: block; }

  .mobile-menu {
    display: none; position: fixed; top: 72px; left: 0; right: 0;
    background: #fff; padding: 0 1.5rem 1.5rem;
    border-bottom: 1px solid rgba(184,146,42,0.15); z-index: 99;
    flex-direction: column; gap: 0;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  }
  .mobile-menu.open { display: flex; }
  .mobile-menu a {
    font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;
    color: ${DARK}; text-decoration: none; padding: 0.9rem 0;
    border-bottom: 1px solid rgba(184,146,42,0.1); cursor: pointer;
    display: block;
  }

  /* ─── Buttons ─── */
  /* Primary — solid gold */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.85rem 2.2rem;
    background: ${GOLD};
    color: #fff;
    font-family: 'Jost', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500;
    border: none; cursor: pointer;
    transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 4px 20px rgba(184,146,42,0.35);
  }
  .btn-primary:hover {
    background: ${GOLD_DARK};
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(184,146,42,0.45);
  }

  /* Secondary — outlined */
  .btn-outline {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.82rem 2.2rem;
    background: transparent;
    color: ${CREAM};
    font-family: 'Jost', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500;
    border: 1.5px solid rgba(249,244,237,0.5); cursor: pointer;
    transition: all 0.3s;
  }
  .btn-outline:hover {
    background: rgba(249,244,237,0.1);
    border-color: ${CREAM};
  }

  /* Ghost — for dark sections */
  .btn-ghost {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.82rem 2.2rem;
    background: transparent;
    color: ${GOLD};
    font-family: 'Jost', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500;
    border: 1.5px solid ${GOLD}; cursor: pointer;
    transition: all 0.3s;
  }
  .btn-ghost:hover { background: ${GOLD}; color: #fff; }

  /* Text link button */
  .btn-link {
    display: inline-flex; align-items: center; gap: 0.4rem;
    background: none; border: none; cursor: pointer;
    font-family: 'Jost', sans-serif; font-size: 0.7rem;
    letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500;
    color: ${GOLD}; padding: 0;
    transition: gap 0.25s;
  }
  .btn-link:hover { gap: 0.7rem; }

  /* Hero btn (kept for backward compat) */
  .hero-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.85rem 2.2rem;
    border: 1.5px solid rgba(249,244,237,0.55); color: ${CREAM};
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    cursor: pointer; transition: all 0.3s; background: transparent;
    font-family: 'Jost', sans-serif; font-weight: 500;
  }
  .hero-btn:hover { background: rgba(249,244,237,0.12); border-color: ${CREAM}; }

  /* Gold btn (light bg) */
  .gold-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.85rem 2.2rem; background: ${GOLD}; color: #fff;
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    cursor: pointer; transition: all 0.3s; border: none;
    font-family: 'Jost', sans-serif; font-weight: 500;
    box-shadow: 0 4px 18px rgba(184,146,42,0.3);
  }
  .gold-btn:hover { background: ${GOLD_DARK}; transform: translateY(-1px); }

  /* ─── Sections ─── */
  .section { padding: 6rem 2.5rem; max-width: 1300px; margin: 0 auto; }
  .section-label {
    font-size: 0.68rem; letter-spacing: 0.45em; text-transform: uppercase;
    color: ${GOLD}; margin-bottom: 0.8rem; font-weight: 600;
    display: flex; align-items: center; gap: 0.8rem;
  }
  .section-label::before {
    content: ''; display: inline-block; width: 28px; height: 1px; background: ${GOLD};
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 6vw, 4.5rem); font-weight: 300;
    color: ${DARK}; margin-bottom: 3rem; line-height: 1.05;
  }
  .section-title em { font-style: italic; color: ${GOLD}; }

  /* ─── Page Hero ─── */
  .page-hero {
    min-height: 48vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end;
    padding: 3rem 2rem;
    position: relative; overflow: hidden;
    margin-top: 0;
  }
  .page-hero-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    filter: brightness(0.45);
  }
  .page-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(26,21,16,0.7) 0%, transparent 60%);
  }
  .page-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.6rem, 7vw, 5rem); color: ${CREAM};
    font-weight: 300; text-align: center; position: relative; z-index: 1;
    letter-spacing: 0.06em;
  }
  .page-hero-sub {
    position: relative; z-index: 1;
    font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase;
    color: rgba(249,244,237,0.55); margin-top: 0.7rem;
  }
  .page-hero-line {
    position: relative; z-index: 1;
    width: 50px; height: 1px; background: ${GOLD}; margin: 1rem 0 0;
  }

  /* ─── Events ─── */
  /* ─── Events — Canva overlap style ─── */
  .events-grid { display: flex; flex-direction: column; gap: 5rem; padding: 7rem 4vw; background: #fdfbf8; }
  .event-card {
    position: relative;
    display: grid;
    grid-template-columns: 56% 1fr;
    align-items: center;
    min-height: 380px;
  }
  .event-card:nth-child(even) { grid-template-columns: 1fr 56%; }
  .event-card:nth-child(even) .event-image { order: 2; }
  .event-card:nth-child(even) .event-info  { order: 1; margin-left: 0; margin-right: -7%; }
  .event-image {
    position: relative; overflow: hidden;
    z-index: 2;
    box-shadow: 0 20px 60px rgba(0,0,0,0.22);
    margin-right: -7%;
    aspect-ratio: 4/3;
  }
  .event-card:nth-child(even) .event-image { margin-right: 0; margin-left: -7%; box-shadow: 0 20px 60px rgba(0,0,0,0.22); }
  .event-image img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.8s ease;
  }
  .event-card:hover .event-image img { transform: scale(1.04); }
  .event-image-inner {
    width: 100%; height: 100%; min-height: 360px;
    display: flex; align-items: center; justify-content: center;
  }
  .event-info {
    background: ${CARD_BG};
    padding: 3.5rem 3rem 3.5rem 5rem;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; z-index: 1;
    min-height: 280px;
  }
  .event-card:nth-child(even) .event-info { padding: 3.5rem 5rem 3.5rem 3rem; }
  .event-info-label {
    font-size: 0.62rem; letter-spacing: 0.35em; text-transform: uppercase;
    color: rgba(249,244,237,0.55); margin-bottom: 0.8rem;
  }
  .event-info h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3rem); color: ${CREAM}; font-weight: 300;
    margin-bottom: 0.8rem; line-height: 1.1;
  }
  .event-info p { color: rgba(249,244,237,0.65); font-size: 0.8rem; line-height: 1.7; margin-bottom: 2rem; }

  /* Force image-left layout regardless of nth-child */
  .event-card.event-card-normal {
    grid-template-columns: 56% 1fr !important;
  }
  .event-card.event-card-normal .event-image {
    order: 1 !important;
    margin-right: -7% !important;
    margin-left: 0 !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.22) !important;
  }
  .event-card.event-card-normal .event-info {
    order: 2 !important;
    padding: 3.5rem 3rem 3.5rem 5rem !important;
  }

  /* ─── Services ─── */
  .services-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1px; background: rgba(184,146,42,0.15);
  }
  .service-card {
    background: ${CREAM}; padding: 2.8rem 2.2rem;
    cursor: pointer; transition: all 0.4s;
    position: relative; overflow: hidden;
  }
  .service-card::before {
    content: ''; position: absolute; inset: 0;
    background: ${CARD_BG}; transform: translateY(100%);
    transition: transform 0.45s cubic-bezier(0.4,0,0.2,1); z-index: 0;
  }
  .service-card:hover::before { transform: translateY(0); }
  .service-card > * { position: relative; z-index: 1; }
  .service-card:hover .service-title,
  .service-card:hover .service-loc,
  .service-card:hover .service-desc { color: rgba(249,244,237,0.85) !important; }
  .service-card:hover .service-link { color: ${CREAM} !important; border-color: ${CREAM} !important; }
  .service-img {
    width: 100%; aspect-ratio: 16/9; object-fit: cover;
    margin-bottom: 1.5rem; transition: transform 0.5s;
  }
  .service-card:hover .service-img { transform: scale(1.03); }
  .service-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.6rem; font-weight: 400; color: ${DARK};
    margin-bottom: 0.3rem; transition: color 0.3s;
  }
  .service-loc { font-size: 0.68rem; color: #aaa; letter-spacing: 0.08em; margin-bottom: 0.5rem; transition: color 0.3s; }
  .service-desc { font-size: 0.78rem; color: #777; margin-bottom: 1.8rem; line-height: 1.6; transition: color 0.3s; }
  .service-link {
    font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: ${GOLD}; border-bottom: 1px solid ${GOLD};
    padding-bottom: 3px; cursor: pointer; transition: all 0.3s;
    display: inline-block;
  }

  /* ─── Testimonials ─── */
  .testimonials-section { background: #faf7f2; padding: 6rem 2.5rem; border-top: 1px solid rgba(184,146,42,0.12); }
  .testimonials-inner { max-width: 1300px; margin: 0 auto; }
  .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
  .testimonial-card {
    background: #fff; padding: 2.2rem;
    border: 1px solid rgba(184,146,42,0.15);
    border-left: 3px solid ${GOLD};
    box-shadow: 0 4px 24px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .testimonial-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.1); }
  .testimonial-stars { color: ${GOLD}; font-size: 0.8rem; margin-bottom: 1rem; letter-spacing: 2px; }
  .testimonial-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem; color: ${DARK}; font-weight: 600; margin-bottom: 0.8rem;
  }
  .testimonial-msg { font-size: 0.83rem; color: #666; line-height: 1.75; font-style: italic; }

  /* ─── Contact ─── */
  .contact-section { background: #fff; padding: 6rem 2.5rem; border-top: 1px solid rgba(184,146,42,0.1); }
  .contact-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1.4fr; gap: 6rem; align-items: start;
  }
  .contact-left h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 300;
    color: ${DARK}; margin-bottom: 1.5rem; line-height: 1.15;
  }
  .contact-left p { font-size: 0.83rem; color: #777; line-height: 1.85; margin-bottom: 2rem; }
  .contact-phone {
    display: flex; align-items: center; gap: 0.8rem;
    color: ${DARK}; font-size: 0.9rem; margin-bottom: 1.5rem; font-weight: 500;
  }
  .contact-socials { font-size: 0.8rem; color: #888; display: flex; gap: 0.8rem; flex-wrap: wrap; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  .form-input {
    width: 100%; padding: 0.95rem 1.1rem;
    background: #fafafa; border: 1.5px solid #e8e4dc;
    color: ${DARK}; font-family: 'Jost', sans-serif;
    font-size: 0.82rem; outline: none; transition: border-color 0.3s;
    border-radius: 0;
  }
  .form-input::placeholder { color: #bbb; }
  .form-input:focus { border-color: ${GOLD}; background: #fff; }
  .form-textarea { resize: vertical; min-height: 150px; margin-bottom: 1rem; }
  .form-btn {
    width: 100%; padding: 1.05rem; background: ${GOLD}; color: #fff;
    border: none; font-family: 'Jost', sans-serif;
    font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500;
    cursor: pointer; transition: all 0.3s;
    box-shadow: 0 4px 18px rgba(184,146,42,0.3);
  }
  .form-btn:hover { background: ${GOLD_DARK}; box-shadow: 0 6px 24px rgba(184,146,42,0.4); }
  .form-success {
    color: ${GOLD}; text-align: center; padding: 3rem;
    border: 1.5px solid ${GOLD}; font-size: 0.9rem; letter-spacing: 0.1em;
  }

  /* ─── Footer ─── */
  footer { background: ${DARK}; padding: 4rem 2.5rem 2.5rem; }
  .footer-inner { max-width: 1300px; margin: 0 auto; }
  .footer-top {
    display: grid; grid-template-columns: 1fr 2fr; gap: 4rem;
    padding-bottom: 3rem; border-bottom: 1px solid rgba(255,255,255,0.08); margin-bottom: 2.5rem;
  }
  .footer-brand {}
  .footer-brand-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem; letter-spacing: 0.25em; color: ${GOLD}; margin-bottom: 0.8rem;
  }
  .footer-brand-desc { font-size: 0.78rem; color: rgba(255,255,255,0.45); line-height: 1.8; max-width: 240px; }
  .footer-links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
  .footer-links-col h5 {
    font-size: 0.65rem; letter-spacing: 0.35em; text-transform: uppercase;
    color: ${GOLD}; margin-bottom: 1.2rem; font-weight: 600;
  }
  .footer-links-col a {
    display: block; font-size: 0.78rem; color: rgba(255,255,255,0.5);
    text-decoration: none; margin-bottom: 0.6rem; cursor: pointer;
    transition: color 0.25s;
  }
  .footer-links-col a:hover { color: ${GOLD}; }
  .footer-bottom {
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
  }
  .footer-copy { font-size: 0.68rem; color: rgba(255,255,255,0.3); letter-spacing: 0.08em; }
  .footer-social { display: flex; gap: 0.8rem; }
  .footer-social a {
    width: 38px; height: 38px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.3s;
  }
  .footer-social a:hover { transform: scale(1.12); }

  /* ─── Detail Pages ─── */
  .detail-content { max-width: 1100px; margin: 0 auto; padding: 5rem 4vw; }
  .detail-images { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 3rem 0; }
  .img-placeholder {
    background: #2a1f0e; display: flex; align-items: center;
    justify-content: center; font-size: 3rem; overflow: hidden;
  }
  .img-placeholder img { width: 100%; height: 100%; object-fit: cover; }
  .img-placeholder.tall { min-height: 300px; }
  .img-placeholder.full { grid-column: 1 / -1; min-height: 300px; }

  /* ─── Partners strip ─── */
  .partners-section { background: #faf7f2; border-top: 1px solid rgba(184,146,42,0.12); border-bottom: 1px solid rgba(184,146,42,0.12); padding: 4rem 2.5rem; }
  .partners-inner { max-width: 1300px; margin: 0 auto; text-align: center; }
  .partners-track-wrap { overflow: hidden; margin-top: 2.5rem; position: relative; }
  .partners-track-wrap::before,
  .partners-track-wrap::after {
    content: ''; position: absolute; top: 0; bottom: 0; width: 80px; z-index: 2;
  }
  .partners-track-wrap::before { left: 0; background: linear-gradient(to right, #faf7f2, transparent); }
  .partners-track-wrap::after  { right: 0; background: linear-gradient(to left, #faf7f2, transparent); }
  .partners-track {
    display: flex; gap: 1.5rem;
    animation: scrollPartners 18s linear infinite;
    width: max-content;
  }
  .partners-track:hover { animation-play-state: paused; }
  @keyframes scrollPartners {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .partner-card {
    width: 160px; height: 90px; flex-shrink: 0;
    background: #fff; border: 1px solid rgba(184,146,42,0.18);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 0.25rem; transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 2px 14px rgba(0,0,0,0.05);
  }
  .partner-card:hover { border-color: ${GOLD}; box-shadow: 0 6px 24px rgba(184,146,42,0.22); transform: translateY(-2px); }
  .partner-card img { width: auto; height: 40px; object-fit: contain; filter: grayscale(40%); transition: filter 0.3s; }
  .partner-card:hover img { filter: grayscale(0%); }
  /* partner logo SVGs rendered inside .partner-card */

  /* ─── Gallery grid (detail pages) ─── */
  .gallery-main-img { aspect-ratio: 16/9; }
  .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-top: 2rem; }
  .gallery-item {
    overflow: hidden; aspect-ratio: 4/3; cursor: pointer; position: relative;
  }
  .gallery-item img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.5s ease;
  }
  .gallery-item:hover img { transform: scale(1.06); }

  /* ─── Responsive ─── */
  @media (max-width: 900px) {
    nav .nav-inner { height: 62px; padding: 0 1.5rem; }
    .mobile-menu { top: 62px; }
    .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
    .footer-links-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    nav .nav-inner { height: 60px; padding: 0 1.2rem; }
    :root { --nav-h-mobile: 60px; }
    .mobile-menu { top: 60px; }

    .hero-fullscreen { height: calc(100dvh); }

    .events-grid { padding: 3rem 1.5rem; gap: 3rem; }
    .event-card { grid-template-columns: 1fr !important; min-height: auto; }
    .event-card:nth-child(even) .event-image { order: 0; margin-left: 0 !important; }
    .event-card:nth-child(even) .event-info  { order: 1; margin-right: 0 !important; }
    .event-image { margin-right: 0 !important; box-shadow: 0 8px 24px rgba(0,0,0,0.15) !important; aspect-ratio: 16/9 !important; }
    .event-image-inner { min-height: 220px !important; }
    .event-info { padding: 2rem 1.5rem !important; min-height: auto; }
    .event-info { padding: 2rem 1.5rem; }
    .event-info h3 { font-size: 2rem; }

    .services-grid { grid-template-columns: 1fr 1fr; gap: 1px; }

    .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
    .contact-section { padding: 4rem 1.5rem; }
    .form-row { grid-template-columns: 1fr; }

    .testimonials-section { padding: 4rem 1.5rem; }
    .testimonials-grid { grid-template-columns: 1fr; }

    .section { padding: 3.5rem 1.5rem; }
    .section-title { margin-bottom: 2rem; }

    .detail-content { padding: 2.5rem 1.2rem; }
    .detail-images { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }

    .service-feature-row { grid-template-columns: 1fr !important; }
    .service-feature-img { min-height: 220px !important; }
    /* Canva overlap blocks on mobile */
    .overlap-wrap { grid-template-columns: 1fr !important; }
    .overlap-wrap > div:first-child,
    .overlap-wrap > div:last-child { 
      order: unset !important; 
      margin-right: 0 !important; 
      margin-left: 0 !important;
      aspect-ratio: 16/9 !important;
    }
    .overlap-wrap > div { min-height: auto !important; padding: 2rem 1.5rem !important; }

    .footer-top { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; text-align: center; }
    .footer-links-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 480px) {
    .services-grid { grid-template-columns: 1fr; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
  }
`;
