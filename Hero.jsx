/* SC Landing, Nav + Cinematic Hero (Pixila / Prestige inspired) */

function Brand() {
  const onProductPage = typeof window !== 'undefined' && window.location.pathname.toLowerCase().includes('product.html');
  const href = onProductPage ? 'SC%20Landing%20Page.html#top' : '#top';
  return (
    <a className="brand brand-lockup" href={href}>
      <img src="assets/sc-logo-primary.png" alt="SC Software Consultancy" />
    </a>);

}

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  const links = [
    { href: '#story', label: 'Story' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#services', label: 'Services' },
    { href: '#products', label: 'Products' },
    { href: '#industries', label: 'Industries' }];

  return (
    <nav className={"nav" + (scrolled || menuOpen ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-links">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <div className="nav-cta">
          <a className="btn btn-ghost" href="#services">View Our Services</a>
          <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.dispatchEvent(new CustomEvent('sc:open-contact')); }}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
        </div>
        <button className={"menu-btn" + (menuOpen ? " open" : "")} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={"nav-mobile" + (menuOpen ? " open" : "")}>
        {links.map((l) => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.dispatchEvent(new CustomEvent('sc:open-contact')); }}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
      </div>
    </nav>);

}

/* ---- wireframe peak: a perspective mesh rising into a faceted summit ---- */
function buildMesh() {
  const cols = 30,rows = 15;
  const cx = 700,horizon = 150,bottom = 730,peakH = 440,meshW = 1850;
  const pts = [];
  for (let j = 0; j < rows; j++) {
    const tr = j / (rows - 1);
    const w = 0.10 + (1.18 - 0.10) * Math.pow(tr, 1.45);
    const baseY = horizon + (bottom - horizon) * tr;
    const rowW = Math.exp(-Math.pow(tr - 0.44, 2) / (2 * 0.05));
    const row = [];
    for (let i = 0; i < cols; i++) {
      const nx = i / (cols - 1) - 0.5;
      const hx = Math.exp(-(nx * nx) / (2 * 0.05)) +
      0.40 * Math.exp(-Math.pow(nx + 0.30, 2) / (2 * 0.014)) +
      0.46 * Math.exp(-Math.pow(nx - 0.27, 2) / (2 * 0.016));
      const noise = Math.sin(i * 1.7 + j * 0.9) * 6 + Math.cos(i * 0.6 - j * 1.3) * 5;
      const x = cx + nx * meshW * w;
      const y = baseY - peakH * hx * rowW - noise * rowW;
      row.push({ x, y, tr, ridge: Math.min(1, hx) });
    }
    pts.push(row);
  }
  const lines = [];
  const seg = (a, b) => {
    const tr = (a.tr + b.tr) / 2;
    const ridge = (a.ridge + b.ridge) / 2;
    const op = (0.05 + 0.40 * tr) * (0.5 + 0.5 * Math.min(1, ridge + 0.35));
    const crim = ridge > 0.5;
    return {
      x1: a.x.toFixed(1), y1: a.y.toFixed(1), x2: b.x.toFixed(1), y2: b.y.toFixed(1),
      op: (crim ? op + 0.12 : op).toFixed(3), crim,
      sw: crim ? 1.15 : 0.9
    };
  };
  const dots = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const a = pts[j][i];
    if (i < cols - 1) lines.push(seg(a, pts[j][i + 1]));
    if (j < rows - 1) lines.push(seg(a, pts[j + 1][i]));
    if (a.ridge > 0.85 && a.tr > 0.2 && a.tr < 0.7) {
      dots.push({ x: a.x.toFixed(1), y: a.y.toFixed(1), r: (1.4 + a.ridge).toFixed(2) });
    }
  }
  return { lines, dots };
}

function WireMesh() {
  const { lines, dots } = React.useMemo(buildMesh, []);
  return (
    <svg className="cine-mesh" viewBox="0 0 1400 760" fill="none" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <g className="cine-mesh-lines">
        {lines.map((l, k) =>
        <line key={k} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
        className={l.crim ? "mlr" : "ml"} strokeOpacity={l.op} strokeWidth={l.sw} />
        )}
      </g>
      {dots.map((d, k) =>
      <circle key={"d" + k} className="mdot" cx={d.x} cy={d.y} r={d.r} opacity="0.85" />
      )}
    </svg>);

}

function Hero() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), 40);
    return () => clearTimeout(t);
  }, []);
  return (
    <header className={"cine" + (ready ? " hero-ready" : "")} id="top">
      <div className="cine-bg">
        <div className="cine-photoimg"></div>
        <div className="cine-sky"></div>
        <div className="cine-mist"></div>
        <div className="cine-grid"></div>
        <WireMesh />
        <div className="cine-vignette"></div>
      </div>

      <div className="cine-watermark" aria-hidden="true">FUSION</div>

      <div className="cine-rail" data-stagger="5">
        <span className="lbl">Scroll</span>
        <span className="ln"></span>
      </div>

      <div className="cine-inner">
        <span className="cine-eyebrow" data-stagger="1">Oracle Fusion Partner · Implementation · Support · Verticals</span>
        <div className="hl-set cine-title" data-stagger="2">
          <h1 data-hl="editorial" style={{fontSize:'clamp(2.4rem,5.6vw,4.6rem)'}}>The experience you need,<br />the guidance you can <span className="accent" style={{fontFamily:'Madelyn'}}>trust.</span></h1>
          <h1 data-hl="transform">15+ Oracle expertise areas.<br /><span className="accent">One partner.</span></h1>
          <h1 data-hl="delivered">A decade of Oracle Cloud delivery,<br /><span className="accent">since 2016.</span></h1>
        </div>
        <p className="cine-sub" data-stagger="3">We implement, support and extend Oracle Fusion Cloud, and build the vertical portals and automations enterprise and government clients use to run their business. A specialized Oracle Service Partner since 2016.</p>
        <div className="cine-cta" data-stagger="4">
          <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('sc:open-contact')); }}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
          <a className="btn btn-secondary" href="#services">View Our Services</a>
        </div>
        <div className="cine-meta" data-stagger="5">
          <span>Oracle Service Partner since 2016</span>
          <span>15+ expertise areas</span>
          <span>EMEA · MENA</span>
        </div>
      </div>

      <div className="cine-bottom">
        <span className="lab">Enterprise &amp; Government</span>
        <a className="cine-chev" href="#story" aria-label="Scroll to story"><i data-lucide="chevron-down"></i></a>
        <span className="lab"><i data-lucide="map-pin"></i> Amman · Riyadh</span>
      </div>
    </header>);

}

Object.assign(window, { Brand, Nav, Hero });