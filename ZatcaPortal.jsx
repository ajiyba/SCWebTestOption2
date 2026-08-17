/* SC, E-Invoicing (ZATCA Phase 2) Compliance Solution deep-dive page */

function ZPNav() {
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

function ZPFaqItem({ q, children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <div className="fp-faq-item" data-open={open}>
      <button className="fp-faq-q" onClick={() => setOpen(!open)}><span>{q}</span><span className="plus">+</span></button>
      <div className="fp-faq-a" style={{ maxHeight: open ? (ref.current ? ref.current.scrollHeight : 400) + 'px' : 0 }}>
        <div className="fp-faq-a-inner" ref={ref}>{children}</div>
      </div>
    </div>
  );
}

function ZatcaPortalPage() {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => { document.body.setAttribute('data-theme', theme); }, [theme]);
  React.useEffect(() => { if (window.lucide) requestAnimationFrame(() => window.lucide.createIcons()); }, [theme]);

  return (
    <React.Fragment>
      <ZPNav />
      <header className="pd-hero">
        <span className="geo-motif geo-motif-lg"><span></span><span></span><span></span></span>
        <i className="bg-emblem bg-emblem-lg" data-lucide="shield-check"></i>
        <div className="wrap">
          <span className="eyebrow"><span className="ix">P/01</span>Product line</span>
          <div className="pd-hero-top">
            <div className="prod-medallion pd-medallion"><i data-lucide="shield-check"></i></div>
            <h1>E-Invoicing, ZATCA Phase 2 Compliance for Oracle Fusion</h1>
          </div>
          <p className="pd-tagline">Clearance, reporting, and cryptographic stamping, engineered, hosted, and managed.</p>
          <p style={{maxWidth:'62ch',color:'var(--fg2)',fontSize:'1rem',lineHeight:1.6,marginTop:'18px'}}>A managed integration service connecting Oracle Fusion to ZATCA's e-invoicing platform. Software Consultancy delivers the full compliance chain, invoice generation in the required format, cryptographic stamping, CSID lifecycle management, clearance and reporting submission, and long-term archival, running on Oracle Cloud Infrastructure hosted in the Kingdom, under our operational management.</p>
        </div>
      </header>

      <div className="fp-trust"><div className="wrap">
        <span><strong>Oracle Cloud Excellence Implementer</strong></span>
        <span>Hosted &amp; managed in the Kingdom of Saudi Arabia</span>
        <span>Bilingual delivery: Arabic &amp; English</span>
      </div></div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">01</span>The compliance context</span>
            <h2>Two phases. Two distinct obligations.</h2>
            <p>ZATCA's e-invoicing mandate applies to VAT-registered taxpayers resident in the Kingdom of Saudi Arabia and has been implemented in two phases. Phase 1, Generation, effective December 2021, requires taxpayers to generate invoices through a compliant electronic system in a structured format. Phase 2, Integration, effective from January 2023, rolled out in waves by taxpayer size, requires taxpayers to integrate their invoicing systems directly with ZATCA's Fatoora platform.</p>
          </div>
          <div className="fp-table-wrap"><table className="fp-table">
            <thead><tr><th>Invoice type</th><th>Applies to</th><th>Obligation</th></tr></thead>
            <tbody>
              <tr><td>Standard tax invoice</td><td>B2B and B2G</td><td>Clearance, submitted to and validated by ZATCA before the invoice is shared with the buyer</td></tr>
              <tr><td>Simplified tax invoice</td><td>B2C</td><td>Reporting, submitted to ZATCA within 24 hours of issuance</td></tr>
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}} id="architecture">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">02</span>Solution architecture</span>
            <h2>One integration. Two compliance paths.</h2>
            <p>Invoices originate in Oracle Fusion, pass through certificate onboarding and renewal, fork into the clearance or reporting path required by invoice type, rejoin for compliance checks, and archive, all hosted and managed on Oracle Cloud Infrastructure in the Kingdom.</p>
          </div>
          <div className="zp-arch-img"><img src="assets/zatca-architecture-diagram.jpg" alt="ZATCA e-invoicing architecture: Oracle Fusion through CSR/CSID onboarding, clearance and reporting paths, compliance checks, archival, to the ZATCA Fatoora Platform, hosted on OCI in Saudi Arabia" /></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">03</span>What we deliver</span>
            <h2>The full compliance chain, engineered end to end.</h2>
          </div>
          <div className="fp-cap-block">
            <h3>Invoice generation and formatting</h3>
            <ul className="prod-checklist pd-checklist">
              <li>Generation of tax invoices, simplified tax invoices, and their associated electronic notes in a format covering all details and fields required for each invoice type under ZATCA requirements</li>
              <li>Output in XML or PDF/A-3 format in line with ZATCA-specified timelines</li>
            </ul>
          </div>
          <div className="fp-cap-block">
            <h3>Cryptographic stamping</h3>
            <ul className="prod-checklist pd-checklist">
              <li>Generation of a cryptographic stamp for each tax invoice, simplified tax invoice, and associated electronic note, in accordance with ZATCA requirements</li>
            </ul>
          </div>
          <div className="fp-cap-block">
            <h3>Submission and registration</h3>
            <ul className="prod-checklist pd-checklist">
              <li>Registration of invoices and electronic notes with the e-invoicing platform within the timelines applicable to each invoice type</li>
              <li>Integration with the e-invoicing platform via API</li>
            </ul>
          </div>
          <div className="fp-cap-block">
            <h3>Archival and validation</h3>
            <ul className="prod-checklist pd-checklist">
              <li>Invoice archival and data validation across the transaction lifecycle</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">04</span>Onboarding and certification lifecycle</span>
            <h2>Compliance is not a one-time connection.</h2>
            <p>The device and certificate lifecycle must be established and maintained. Software Consultancy delivers the full sequence.</p>
          </div>
          <div className="fp-workflow">
            {[
              ['01','Onboarding request','Submit CSR and obtain Compliance CSID'],
              ['02','Onboarding request','Submit Compliance CSID and request ID, obtain Production CSID'],
              ['03','Renewal request','Submit Compliance CSID and request ID, obtain a new Production CSID'],
              ['04','Clearance','Submission of standard e-invoices and credit notes for clearance'],
              ['05','Reporting','Submission of simplified e-invoices and credit notes for reporting'],
              ['06','Validation','Compliance checks'],
              ['07','Confirmation','Successful onboarding confirmed'],
            ].map(([n,t,d]) => (
              <div className="fp-wstep" key={n}><div className="n">{n}</div><div><h4>{t}</h4><p>{d}</p></div></div>
            ))}
          </div>
          <p style={{fontSize:'.85rem',color:'var(--fg3)',marginTop:'20px'}}>CSR is a Certificate Signing Request. CSID is a Cryptographic Stamp Identifier.</p>
          <div className="fp-callout"><p><strong style={{color:'var(--fg-accent)'}}>Certificate renewal, managed.</strong> Certificates expire. Obtaining a new Production CSID before the current one lapses is part of the managed lifecycle, not an afterthought discovered at expiry when invoicing stops.</p></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">05</span>Managed hosting and operations</span>
            <h2>Hosted on Oracle Cloud Infrastructure, in the Kingdom.</h2>
            <p>The integration engine is hosted by Software Consultancy on Oracle Cloud Infrastructure, with hosting located in the Kingdom of Saudi Arabia.</p>
          </div>
          <div className="fp-table-wrap"><table className="fp-table">
            <thead><tr><th>Service</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Infrastructure management</td><td>Full IT management of the integration environment on SC's OCI tenancy</td></tr>
              <tr><td>Security operations</td><td>Security checks and ongoing maintenance</td></tr>
              <tr><td>Backup and restore</td><td>Backup and restore services for the integration environment</td></tr>
              <tr><td>Disaster recovery</td><td>Disaster recovery and high availability</td></tr>
              <tr><td>Credential management</td><td>Security and credential updates as required</td></tr>
              <tr><td>Performance optimisation</td><td>Integration performance and security optimisation</td></tr>
              <tr><td>Defect resolution</td><td>Integration bug fixing</td></tr>
              <tr><td>Reconciliation support</td><td>Support for findings reconciliation issues</td></tr>
              <tr><td>Oracle change management</td><td>Impact assessment of Oracle updates and patches on request, with corrective action where needed</td></tr>
              <tr><td>Source code delivery</td><td>Integration source code, including staging database schema, delivered to the client on request</td></tr>
              <tr><td>Data portability</td><td>Staging database dump delivered to the client on request</td></tr>
            </tbody>
          </table></div>
          <div className="fp-callout"><p><strong style={{color:'var(--fg-accent)'}}>No lock-in.</strong> Your integration source code and data, on request, at any time.</p></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">06</span>Deployment profile</span>
            <h2>What's in scope, out of the box.</h2>
          </div>
          <div className="fp-table-wrap"><table className="fp-table">
            <thead><tr><th>Parameter</th><th>Specification</th></tr></thead>
            <tbody>
              <tr><td>Oracle Fusion release</td><td>Latest release available at provisioning</td></tr>
              <tr><td>Environments</td><td>One (1) staging and one (1) production</td></tr>
              <tr><td>Hosting location</td><td>Kingdom of Saudi Arabia</td></tr>
              <tr><td>Interface languages</td><td>Arabic, English</td></tr>
              <tr><td>Support languages</td><td>Arabic, English</td></tr>
              <tr><td>Delivery model</td><td>Offshore delivery</td></tr>
              <tr><td>Typical timeline</td><td>From approximately three weeks per legal entity, subject to scope and readiness assessment</td></tr>
              <tr><td>Scaling</td><td>Per legal entity, multi-entity deployments scoped individually</td></tr>
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">07</span>Why Software Consultancy</span>
            <h2>Verifiable, not adjectival.</h2>
          </div>
          <ul className="fp-key-caps">
            <li>First Cloud Excellence Implementer (CEI) partner in the Levant and Turkey</li>
            <li>Seven Oracle Service Partner Expertise certifications, ranked 24 in the ECMEA region</li>
            <li>Oracle Cloud Excellence Board (CEB) member, one of 20 selected partners across ECMEA</li>
            <li>Oracle Expertise Program certifications across Oracle Financial Cloud, Oracle Cloud Platform Integration, Oracle HCM Global Human Resources Cloud, Oracle HCM Payroll Cloud, Oracle SCM Procurement Cloud, and Oracle HCM Workforce Management</li>
            <li>Bilingual delivery in Arabic and English</li>
            <li>Regional time-zone alignment with GCC clients</li>
            <li>Financially independent through organic growth, with no debt financing, acquisitions, or mergers</li>
            <li>Structured implementation methodology, using Oracle Unified Method or IBM Rational</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">08</span>Scope boundaries</span>
            <h2>Scoped and priced separately.</h2>
            <p>The following are not included by default.</p>
          </div>
          <div className="fp-scope-list">
            {[
              'Proof of concept work on new functionality',
              'Hardware, storage, and network procurement, and network contingency planning and testing',
              'Custom dashboards beyond the agreed scope of work or system capability',
              'Third-party web analytics integration',
              'Additional integration points beyond the defined scope',
              'Configuration, development, or customisation of modules not listed in scope',
              'Configuration, development, or customisation of PaaS extensions and integrations not listed in scope',
              'Historical data migration',
              'Data cleansing',
            ].map((s) => <div className="fp-scope-item" key={s}><div className="mark">—</div><p>{s}</p></div>)}
          </div>
          <h3 style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'1.15rem',color:'var(--fg1)',marginTop:'44px',marginBottom:'8px'}}>Client-side prerequisites</h3>
          <div className="fp-scope-list">
            {[
              'Procurement of appropriate Oracle Cloud module licences and any third-party product licences',
              'Access to required documents, data, facilities, and information',
              'Approval of deliverables within agreed timeframes',
              'Provision and configuration of third-party application integration APIs where Oracle Fusion integrates with them',
            ].map((s) => <div className="fp-scope-item" key={s}><div className="mark">—</div><p>{s}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">09</span>FAQ</span>
            <h2>Questions evaluators ask first.</h2>
          </div>
          <div>
            <ZPFaqItem q="Does this replace Oracle Fusion functionality?">No. The solution connects Oracle Fusion to ZATCA's e-invoicing platform and manages the certification, submission, and archival lifecycle.</ZPFaqItem>
            <ZPFaqItem q="Where is the integration hosted?">On Oracle Cloud Infrastructure, hosted in the Kingdom of Saudi Arabia, managed by Software Consultancy.</ZPFaqItem>
            <ZPFaqItem q="What happens when our certificates expire?">Certificate renewal is part of the managed lifecycle. Software Consultancy handles the renewal request and Production CSID reissue.</ZPFaqItem>
            <ZPFaqItem q="Do we get access to the integration source code?">Yes. Integration source code, including the staging database schema, and a staging database dump are delivered on request.</ZPFaqItem>
            <ZPFaqItem q="Can this support multiple legal entities?">The solution is scoped per legal entity. Multi-entity deployments are assessed and scoped individually.</ZPFaqItem>
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

ReactDOM.createRoot(document.getElementById('root')).render(<ZatcaPortalPage />);
