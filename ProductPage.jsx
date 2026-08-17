/* SC, Individual product detail page (architecture, design, references) */

const PRODUCT_DETAILS = {
  zatca: {
    ix: 'P/01', icon: 'shield-check', name: 'ZATCA II Portal',
    tagline: 'Phase-2 e-invoicing, cleared to the regulator from Fusion.',
    region: 'Saudi Arabia', metric: { v: '1.2M', l: 'Invoices / month at line-rate' },
    overview: 'A clearance and reporting portal layered on Oracle Fusion. ZATCA II Phase-2 compliant, with a queue that drains to the regulator at line-rate and a console for tax teams to handle exceptions without touching SQL.',
    bullets: [
      'Phase-2 (clearance + reporting) certified flow',
      'Direct integration with Fusion AR / AP / Inventory',
      'Exception console for tax teams, no SQL required',
      'Audit ledger for every clearance, retry, and rejection',
    ],
    diagram: [
      { icon:'database', t:'Fusion AR / AP / Inventory', s:'Source ledger & transactions' },
      { icon:'shield-check', t:'ZATCA II Portal Engine', s:'Invoice generation & signing' },
      { icon:'list-checks', t:'Exception Console', s:'Tax team review & retry' },
      { icon:'landmark', t:'ZATCA Regulator API', s:'Clearance & reporting' },
    ],
    clients: ['almana','saudi-filter','alrashed-steel','alrashed-cement'],
  },
  franchise: {
    ix: 'P/02', icon: 'store', name: 'Franchise Portal',
    tagline: 'Extend Oracle Fusion to every franchisee, without extending Oracle Fusion licences.',
    region: 'GCC', metric: { v: '1', l: 'Source of truth across portal, POS, and ERP' },
    overview: 'A governed digital platform connecting a franchisor, its franchise network, and its point-of-sale estate to a single Oracle Fusion source of truth. Franchisees get real-time visibility of their balance, credit limit, invoices, receipts, and contracts. The franchisor gets controlled onboarding, enforced ordering discipline, and complete financial oversight, with every transaction executed inside Oracle Fusion, where it belongs. The portal presents; Oracle Fusion decides, it holds no parallel ledger and creates no financial transactions.',
    bullets: [
      'Franchisee self-service: balance, credit limit, invoices, receipts, and contracts, retrieved live from Oracle Fusion',
      'Governed onboarding: structured approval workflow from prospect to trading customer, with a full audit trail',
      'Channel discipline: orders route through Oracle Fusion, which validates availability, pricing, and credit on every order',
      'Master data sync: customer, item, and price-list data flows from Fusion to the point-of-sale layer, Fusion remains the sole authority',
      'Three-source reporting: customer information reports pulled from the Portal, Oracle CX, and Oracle ERP in a consistent structure for direct reconciliation',
      'No parallel ledger: the portal has no transactional write path into the financial sub-ledgers',
    ],
    diagram: [
      { icon:'user-plus', t:'Prospect & Onboarding', s:'Oracle CX capture → Portal approval workflow' },
      { icon:'store', t:'Franchise Portal', s:'Governance & visibility layer' },
      { icon:'database', t:'Oracle Fusion Cloud', s:'System of record, Order Mgmt, Inventory, Receivables' },
      { icon:'monitor-smartphone', t:'Point of Sale', s:'Reference: Manarate POS' },
    ],
    scope: [
      'Does not create, process, or reverse financial transactions',
      'Does not maintain an independent ledger or balance calculation',
      'Does not replace Oracle Fusion for franchisor finance users',
      'Does not replace the point-of-sale system for retail transactions',
      'Does not act as a master data authority, Oracle Fusion holds that role exclusively',
    ],
    clients: ['golden-petrol'],
  },
  b2b: {
    ix: 'P/03', icon: 'shopping-bag', name: 'B2B E-Commerce Portal',
    tagline: 'Customer-specific catalogues, priced from Fusion in real time.',
    region: 'EMEA · MENA', metric: { v: '24/7', l: 'Self-service order capture' },
    overview: 'A B2B commerce front-end for industries with negotiated price lists and contract terms. Orders flow into Fusion; quotes, credit, and stock visibility flow back out.',
    bullets: [
      'Customer-specific catalogue and price-list rendering',
      'Real-time stock availability across warehouses',
      'Quote-to-order with credit and approvals from Fusion',
      'Self-service order tracking, returns, and reorder',
    ],
    diagram: [
      { icon:'shopping-bag', t:'B2B Storefront', s:'Customer self-service' },
      { icon:'tags', t:'Catalogue & Pricing Engine', s:'Priced live from Fusion' },
      { icon:'file-check-2', t:'Quote-to-Order Workflow', s:'Credit & approvals' },
      { icon:'warehouse', t:'Warehouse Stock Sync', s:'Real-time availability' },
    ],
    clients: ['dussur','alrajhi-takaful','saudi-filter'],
  },
};

function ProductNav() {
  return (
    <nav className="nav scrolled">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-cta">
          <a className="btn btn-ghost" href="SC%20Landing%20Page.html#products"><i data-lucide="arrow-left"></i> Back to Products</a>
          <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('sc:open-contact')); }}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </nav>
  );
}

function ArchDiagram({ stages }) {
  return (
    <div className="arch-diagram">
      {stages.map((s, i) => (
        <React.Fragment key={s.t}>
          <div className="arch-node">
            <div className="arch-ic"><i data-lucide={s.icon}></i></div>
            <div className="arch-t">{s.t}</div>
            <div className="arch-s">{s.s}</div>
          </div>
          {i < stages.length - 1 && <div className="arch-arrow"><i data-lucide="chevron-right"></i></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProductPage() {
  const [id, setId] = React.useState(null);
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setId(params.get('id') || 'zatca');
  }, []);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    if (window.lucide) requestAnimationFrame(() => window.lucide.createIcons());
  }, [id, theme]);

  if (!id) return null;
  const p = PRODUCT_DETAILS[id] || PRODUCT_DETAILS.zatca;

  return (
    <React.Fragment>
      <ProductNav />
      <header className="pd-hero">
        <span className="geo-motif geo-motif-lg"><span></span><span></span><span></span></span>
        <i className="bg-emblem bg-emblem-lg" data-lucide={p.icon}></i>
        <div className="wrap">
          <span className="eyebrow"><span className="ix">{p.ix}</span>Product line</span>
          <div className="pd-hero-top">
            <div className="prod-medallion pd-medallion"><i data-lucide={p.icon}></i></div>
            <h1>{p.name}</h1>
          </div>
          <p className="pd-tagline">{p.tagline}</p>
          <div className="pd-hero-meta">
            <span><i data-lucide="map-pin"></i>{p.region}</span>
            <span className="pd-metric"><strong>{p.metric.v}</strong> {p.metric.l}</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-lead">
            <div className="section-head">
              <span className="eyebrow"><span className="ix">01</span>Overview</span>
              <h2>What {p.name} does.</h2>
            </div>
            <p>{p.overview}</p>
          </div>
          <ul className="prod-checklist pd-checklist">
            {p.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">02</span>Solution Architecture</span>
            <h2>How it fits into Fusion.</h2>
            <p>A simplified view of the data flow, from source ledger through the portal to the external system it clears against.</p>
          </div>
          <ArchDiagram stages={p.diagram} />
        </div>
      </section>

      {p.scope && (
        <section className="section" style={{paddingTop:0}}>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow"><span className="ix">03</span>Scope boundaries</span>
              <h2>What {p.name} does not do.</h2>
            </div>
            <ul className="prod-checklist pd-checklist pd-scope">
              {p.scope.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">{p.scope ? '04' : '03'}</span>References</span>
            <h2>Clients currently running {p.name}.</h2>
          </div>
          <div className="pd-clients">
            {p.clients.map((c) => (
              <div className="pd-client-plate" key={c}>
                <img src={"assets/clients/" + c + ".png"} alt={c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <ContactModal />
      <button className="theme-fab" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark / light mode">
        <i data-lucide={theme === 'dark' ? 'sun' : 'moon'}></i>
      </button>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProductPage />);
