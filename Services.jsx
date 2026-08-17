/* SC, Services + Products */

const SERVICES = [
  { num:'01', icon:'layers', tag:'ERP · HCM · SCM · CX · OCI', title:'Oracle Fusion Implementation', desc:'Fusion rollouts that ship on the calendar week, not the calendar quarter, ERP, HCM, SCM, CX and OCI, backed by tested delivery accelerators.', bullets:['Fit-gap analysis and target-state design in weeks, not months','Pre-built configuration packs for Financials, HCM, SCM, Payroll','Cutover rehearsals, typically 3 to 5 before go-live'] },
  { num:'02', icon:'headset', tag:'Tier 1–4 · SLA · Continuous', title:'Support Services', desc:'Managed Fusion support from consultants who answer in your stack-trace, SLA-aligned tickets and a continuous improvement backlog.', bullets:['Tier-1 through Tier-4 application support, one team','OIC integration monitoring and recovery on a 24/5 watch','Monthly release review against the Oracle roadmap'] },
  { num:'03', icon:'box', tag:'ZATCA II · Franchise · B2B', title:'Vertical Development', desc:'Portals and extensions built for the way your industry moves, ZATCA II e-invoicing, franchise management, B2B commerce.', bullets:['ZATCA II e-invoicing portal, Phase-2 compliant for KSA','Franchise Portal, outlet onboarding, royalties, reporting','B2B E-Commerce Portal, catalogues priced from Fusion in real time'] },
  { num:'04', icon:'zap', tag:'OIC · Dashboards · Bots', title:'Automation & Analytics', desc:'A library of integrations, dashboards and OIC flows that turn weeks of plumbing into hours.', bullets:['120+ prebuilt dashboards across Finance, HCM, SCM, Procurement','28 prebuilt OIC integrations to government platforms','Automated reconciliations: bank, intercompany, GR/IR, AP/AR'] },
  { num:'05', icon:'stethoscope', tag:'Assessment · Roadmap · Optimization', title:'System Health Check', desc:'A structured audit of your Fusion instance, configuration, performance, security and adoption, with a prioritized remediation roadmap.', bullets:['Configuration and customization audit against Oracle best practice','Performance, security and access review','Prioritized roadmap of quick wins and long-term fixes'] },
  { num:'06', icon:'bot', tag:'Agents · Oracle AI · OIC', title:'Agentic AI Service', desc:'AI agents that act inside Oracle Fusion, not another chat window bolted on the side, but reasoning and transactions grounded in your ledger and your policies.', bullets:['Agents scoped to Fusion data and role-based access, no open-ended access','Task execution across Finance, HCM and Procurement workflows, with human approval gates','Every agent action logged, auditable and reversible through Oracle Fusion'] },
];

function ServiceCard({ s }) {
  return (
    <div className="svc-card">
      <span className="num">{s.num}</span>
      <div className="svc-ic"><i data-lucide={s.icon}></i></div>
      <span className="tag">{s.tag}</span>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <ul className="svc-list">
        {s.bullets.map(b => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="ix">04</span>Our Services</span>
          <h2>Implementation, support, development.</h2>
          <p>We specialize in the implementation of all Oracle Fusion modules, providing expert consultation for implementation, customization, development and support.</p>
        </div>
        <div className="svc-grid reveal">
          {SERVICES.map(s => <ServiceCard key={s.num} s={s} />)}
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  { id:'zatca', ix:'P/01', k:'ZATCA II Portal', icon:'shield-check', tagline:'Phase-2 e-invoicing, cleared to the regulator from Fusion.', items:['Direct integration with Fusion AR / AP / Inventory','Exception console for tax teams, no SQL required','Audit ledger for every clearance, retry and rejection'], metric:{v:'1.2M',l:'Invoices / month at line-rate'} },
  { id:'franchise', ix:'P/02', k:'Franchise Portal', icon:'store', tagline:'Franchisee onboarding, royalties, and reporting, out of one console.', items:['Multi-tenant franchisee onboarding with KYC','Royalty calculation engine tied to the Fusion ledger','Outlet-level P&L visible to franchisee and franchisor'], metric:{v:'400+',l:'Outlets supported by deployed clients'} },
  { id:'b2b', ix:'P/03', k:'B2B E-Commerce Portal', icon:'shopping-bag', tagline:'Customer-specific catalogues, priced from Fusion in real time.', items:['Customer-specific catalogue and price-list rendering','Real-time stock availability across warehouses','Self-service order tracking, returns and reorder'], metric:{v:'24/7',l:'Self-service order capture'} },
  { id:'manafeth', ix:'P/04', k:'Manafeth Mobile App', icon:'smartphone', tagline:'Employee self-service for the full HCM lifecycle, from Oracle Fusion to any device.', items:['Attendance, absence and payroll self-service synced with Fusion HCM','Role-based dashboards and an Arabic/English HR chatbot','Native iOS, Android and HarmonyOS apps with SSO and offline support'], metric:{v:'3',l:'Native platforms, iOS, Android, HarmonyOS'} },
];

const REPOS = [
  { ix:'R/01', k:'Dashboards & Reports Repository', icon:'layout-dashboard', tagline:'Predefined dashboards and OTBI reports across every Fusion module we deliver.', metric:{v:'120+',l:'Dashboards and reports, version-controlled'} },
  { ix:'R/02', k:'Government Platforms Integration Repository', icon:'link-2', tagline:'Prebuilt OIC integrations, ZATCA, GOSI, Mudad, MOL / Qiwa, SADAD.', metric:{v:'28',l:'Prebuilt OIC integrations'} },
];

function Products() {
  return (
    <section className="section" id="products" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="ix">05</span>Our Products</span>
          <h2>Built on Oracle. Tuned for the region.</h2>
          <p>Our portfolio covers Oracle Cloud applications and complementary custom solutions that streamline operations, improve visibility and support strategic decisions. Released, supported and roadmapped like any other software.</p>
        </div>
        <div className="prod-bands reveal">
          {PRODUCTS.map((p,i) => (
            <a className="prod-band" key={p.k} href={p.id === 'zatca' ? "ZATCA%20Compliance%20Solution.html" : p.id === 'franchise' ? "Franchise%20Portal%20-%20Enterprise.html" : p.id === 'b2b' ? "E-Commerce%20Portal.html" : p.id === 'manafeth' ? "Manafeth%20Mobile%20App.html" : "product.html?id=" + p.id}>
              <span className="geo-motif"><span></span><span></span><span></span></span>
              <i className="bg-emblem" data-lucide={p.icon}></i>
              <div className="prod-band-main">
                <span className="prod-band-num">{p.ix.split('/')[1]}</span>
                <div className="prod-band-top">
                  <div className="prod-medallion"><i data-lucide={p.icon}></i></div>
                  <div>
                    <span className="pk">{p.ix} · Product line</span>
                    <h3>{p.k}</h3>
                  </div>
                </div>
                <p className="prod-band-tagline">{p.tagline}</p>
                <ul className="prod-checklist">
                  {p.items.map(it => <li key={it}>{it}</li>)}
                </ul>
                <span className="prod-band-more">View architecture &amp; client references <i data-lucide="arrow-right"></i></span>
              </div>
              <div className="prod-band-side">
                <span className="pv">{p.metric.v}</span>
                <span className="pl">{p.metric.l}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="repo-panel reveal">
          {REPOS.map(r => (
            <div className="repo-tile" key={r.k}>
              <div className="repo-ic"><i data-lucide={r.icon}></i></div>
              <div>
                <div className="rk">{r.ix} · Accelerator</div>
                <div className="rv">{r.metric.v}</div>
                <div className="rl">{r.k}, {r.tagline}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Products });
