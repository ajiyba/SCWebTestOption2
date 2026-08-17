/* SC, Franchise Portal deep-dive page (extends the main site design system) */

function FPNav() {
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

function FPArrow({ dir, label }) {
  return (
    <div className="fp-arrow-lbl">
      <svg viewBox="0 0 100 12" preserveAspectRatio="none">
        {dir === 'right' ? (
          <React.Fragment><line x1="2" y1="6" x2="90" y2="6" stroke="var(--accent)" strokeWidth="1.5"/><polygon points="90,1 98,6 90,11" fill="var(--accent)"/></React.Fragment>
        ) : (
          <React.Fragment><line x1="98" y1="6" x2="10" y2="6" stroke="var(--accent)" strokeWidth="1.5"/><polygon points="10,1 2,6 10,11" fill="var(--accent)"/></React.Fragment>
        )}
      </svg>
      <span>{label}</span>
    </div>
  );
}

function FPFaqItem({ q, children }) {
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

function FranchisePortalPage() {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => { document.body.setAttribute('data-theme', theme); }, [theme]);
  React.useEffect(() => { if (window.lucide) requestAnimationFrame(() => window.lucide.createIcons()); }, [theme]);

  return (
    <React.Fragment>
      <FPNav />
      <header className="pd-hero">
        <span className="geo-motif geo-motif-lg"><span></span><span></span><span></span></span>
        <i className="bg-emblem bg-emblem-lg" data-lucide="store"></i>
        <div className="wrap">
          <span className="eyebrow"><span className="ix">P/02</span>Product line</span>
          <div className="pd-hero-top">
            <div className="prod-medallion pd-medallion"><i data-lucide="store"></i></div>
            <h1>Franchise Portal</h1>
          </div>
          <p className="pd-tagline">Extend Oracle Fusion to every franchisee, without extending Oracle Fusion licences.</p>
          <p style={{maxWidth:'62ch',color:'var(--fg2)',fontSize:'1rem',lineHeight:1.6,marginTop:'18px'}}>A governed digital platform that connects a franchisor, its franchise network, and its point-of-sale estate to a single Oracle Fusion source of truth. Franchisees get real-time visibility of their balance, credit limit, invoices, receipts, and contracts. The franchisor gets controlled onboarding, enforced ordering discipline, and complete financial oversight, with every transaction executed inside Oracle Fusion, where it belongs.</p>
        </div>
      </header>

      <div className="fp-trust"><div className="wrap">
        <span><strong>Oracle Cloud Excellence Implementer</strong></span>
        <span>Jordan · Saudi Arabia · GCC</span>
        <span>Reference deployment: <strong>Manarate POS</strong></span>
      </div></div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">01</span>The business problem</span>
            <h2>Franchise networks fail commercially in predictable places.</h2>
            <p>And almost all of them are information problems before they are financial ones.</p>
          </div>
          <div className="fp-gate-list">
            <div className="fp-gate"><div className="dot"></div><div><h4>Onboarding is undisciplined</h4><p>New franchise applications arrive by email and spreadsheet. Trade licences, commercial registrations, and guarantees are collected inconsistently. There is no audit trail showing who approved what, on what evidence, and when.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Franchisees cannot see their own position</h4><p>Balance enquiries, invoice copies, and credit-limit questions come to the franchisor's finance team by phone and WhatsApp. Finance becomes a lookup service instead of a control function.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Ordering leaks outside the approved channel</h4><p>Without a system-enforced path, franchisees source outside the network, eroding margin, brand consistency, and supply agreements.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Master data drifts</h4><p>Items, prices, and customer records maintained separately in the ERP and at the point of sale diverge within weeks. Reconciliation becomes a monthly forensic exercise.</p></div></div>
          </div>
          <div className="fp-callout"><p>The result: the franchisor cannot answer basic questions, what is my true network exposure, which franchisees are over their credit limit, which contracts expire this quarter, without manual consolidation.</p></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">02</span>The solution</span>
            <h2>One non-negotiable architectural principle.</h2>
            <p>The Franchise Portal is a purpose-built web platform that sits between Oracle Fusion and the franchise network. It governs the commercial relationship between the mother company and its franchisees.</p>
          </div>
          <blockquote className="fp-pull">Oracle Fusion is the single source of truth. The portal presents; Oracle Fusion decides.</blockquote>
          <p style={{maxWidth:'62ch',color:'var(--fg2)',fontSize:'.96rem'}}>The portal does not hold a parallel ledger. It does not calculate balances. It does not create financial transactions. Every figure a franchisee sees is retrieved from Oracle Fusion, which means the number on the portal screen and the number in the general ledger cannot disagree. This is a deliberate design decision, and it is the reason the solution is auditable.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}} id="architecture">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">03</span>Solution architecture</span>
            <h2>Three systems. Non-overlapping responsibility.</h2>
            <p>The solution integrates three systems, each governing a defined part of the flow, with data direction made explicit.</p>
          </div>
          <div className="fp-arch-img"><img src="assets/franchise-architecture-diagram.jpg" alt="Oracle Fusion as single source of truth between Point of Sale and the Franchise Portal: POS writes retail transactions, discounts and receipts to Fusion; the portal reads onboarding, approvals, and visibility read-only, with an approval gate converting a prospect to a customer across the franchise network" /></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">04</span>Functional capability</span>
            <h2>What each side of the network can see and do.</h2>
          </div>
          <div className="fp-cap-block">
            <h3>Franchisee dashboard</h3>
            <p className="sub">Every franchisee receives a secure account scoped strictly to its own data.</p>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Balance</td><td>Current account position, retrieved live from Oracle Receivables</td></tr>
                <tr><td>Credit limit</td><td>Assigned limit and remaining headroom against it</td></tr>
                <tr><td>Invoices</td><td>Full invoice history with status and detail drill-down</td></tr>
                <tr><td>Receipts</td><td>Payment receipts, matched by Oracle Fusion against open invoices</td></tr>
                <tr><td>Contract details</td><td>Franchise agreement terms, dates, and commercial conditions</td></tr>
                <tr><td>Order status</td><td>Live progress of orders through the Oracle Fusion order cycle</td></tr>
                <tr><td>Notifications</td><td>Announcements, reminders, and alerts issued by the franchisor</td></tr>
                <tr><td>Document upload</td><td>Submission of supporting documentation into the franchisor's review queue</td></tr>
              </tbody>
            </table></div>
            <div className="fp-access-note">Access model: view and submit only. No franchisee can initiate, alter, or reverse a financial transaction through the portal. This is enforced architecturally, not by configuration, the portal has no transactional write path into the financial sub-ledgers.</div>
          </div>
          <div className="fp-cap-block">
            <h3>Franchisor administration dashboard</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Application approval</td><td>Review and approve franchise applications through a structured workflow</td></tr>
                <tr><td>Document review</td><td>Inspect and validate submitted documentation before approval</td></tr>
                <tr><td>Account monitoring</td><td>Oversight of every franchise account across the network</td></tr>
                <tr><td>Financial oversight</td><td>Consolidated view of balances, invoices, receipts, and orders</td></tr>
                <tr><td>Notification broadcast</td><td>Issue announcements and alerts to individual franchisees or the network</td></tr>
                <tr><td>Customer reporting</td><td>Download customer information reports from the Portal, Oracle CX, and Oracle ERP in a consistent structure, enabling direct cross-system reconciliation</td></tr>
              </tbody>
            </table></div>
            <div className="fp-callout"><p><strong style={{color:'var(--fg-accent)'}}>Differentiator.</strong> The same report structure pulled from Portal, CX, and ERP, compared directly against each other. Most franchise platforms offer no equivalent cross-system data-integrity control.</p></div>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">05</span>Franchise onboarding workflow</span>
            <h2>A governed state transition, prospect to trading customer.</h2>
            <p>No franchisee reaches trading status without passing every gate.</p>
          </div>
          <div className="fp-workflow">
            {[
              ['01','Oracle CX','Prospect creation','New franchise applicant registered as a Prospect.','Prospect record'],
              ['02','Oracle CX','Information capture','Customer information and required documentation collected.','Complete application file'],
              ['03','Franchise Portal','Submission','Application submitted into the approval workflow.','Application in review queue'],
              ['04','Franchise Portal','Review','Franchisor reviews application and supporting documents.','Approval decision with audit trail'],
              ['05','Franchise Portal','Final approval','Mother company grants final approval.','Approved application'],
              ['06','Oracle Fusion ERP','Customer creation','Franchisee created as a Customer, Prospect converts to Customer.','Active Fusion customer record'],
              ['07','Fusion → POS','Master data sync','Customer, items, and price lists distributed to the point-of-sale layer.','Trading-ready branch'],
            ].map(([n,sys,t,d,o]) => (
              <div className="fp-wstep" key={n}><div className="n">{n}</div><div><div className="sys">{sys}</div><h4>{t}</h4><p>{d}</p><div className="out">→ {o}</div></div></div>
            ))}
          </div>
          <div className="fp-callout"><p>Why this sequence matters: the franchisee does not exist as a transactable entity in Oracle Fusion until the approval workflow completes. Approval is not a status flag applied after the fact, it is the event that creates the customer. The control cannot be bypassed.</p></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">06</span>Master data synchronisation</span>
            <h2>Fusion originates. The point of sale consumes.</h2>
            <p>Following customer creation in Oracle Fusion, the master data set is synchronised to the point-of-sale layer: customer information, item master, and price lists. Oracle Fusion remains the origin and authority for all master data across the solution.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">07</span>Ordering and fulfilment</span>
            <h2>One enforced channel.</h2>
            <p>Franchisees purchase from the mother company through a single enforced channel. Independent purchasing outside the defined process is not available to them.</p>
          </div>
          <div className="fp-oflow">
            {[
              'Order initiated at the point of sale',
              'Order transmitted to Oracle Fusion for processing',
              'Oracle Fusion validates product availability against Inventory',
              'Sales Order created in Oracle Fusion Order Management',
              'Full order management cycle executes inside Oracle Fusion',
              'Invoice generated',
              'Order status surfaced to the franchisee through the portal',
            ].map((s,i) => <div className="fp-ostep" key={s}><div className="n">{String(i+1).padStart(2,'0')}</div><p>{s}</p></div>)}
          </div>
          <div className="fp-callout"><p>The control point: because ordering is channelled through Oracle Fusion, availability, pricing, credit, and commercial terms are validated by the ERP on every order. The franchisor does not rely on franchisee compliance, the system enforces it.</p></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">08</span>Financial processing</span>
            <h2>Every transaction, inside Oracle Fusion.</h2>
            <p>Invoice generation, receipt management, Oracle Receivables processing, balance tracking, and both financial and inventory accounting impact, all occur within Oracle Fusion. Oracle Fusion automatically matches invoices to receipts to maintain accurate franchisee balances.</p>
          </div>
          <div className="fp-callout"><p>Design consequence: there is no reconciliation exercise between the portal and the ERP, because there is nothing to reconcile. The portal holds no financial state of its own.</p></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">09</span>User access and security</span>
            <h2>Access scoped by design, not by configuration.</h2>
          </div>
          <div className="fp-cap-block">
            <h3>Franchisee access</h3>
            <p style={{fontSize:'.95rem',color:'var(--fg2)',maxWidth:'64ch'}}>Each franchise is provisioned with a portal account granting access only to its own balances, invoices, receipts, orders, contracts, and notifications. Data isolation between franchisees is enforced at the access layer.</p>
          </div>
          <div className="fp-cap-block">
            <h3>Franchisor access</h3>
            <p style={{fontSize:'.95rem',color:'var(--fg2)',maxWidth:'64ch'}}>Oracle Fusion is accessed directly by authorised mother-company users, typically Finance, Procurement, and IT / System Administration. The IT / System Administrator manages user access and system administration across the platform.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">10</span>Business value</span>
            <h2>Outcomes, not features.</h2>
          </div>
          {[
            ['Governed network growth','Structured onboarding with documented approval at every gate, scale the network without scaling risk.'],
            ['Finance team released','Franchisee self-service removes routine balance, invoice, and receipt enquiries from finance.'],
            ['Channel discipline enforced','System-enforced ordering closes off-channel purchasing structurally.'],
            ['One version of the truth','Portal, POS, and ERP resolve to the same Oracle Fusion data, no reconciliation exercise.'],
            ['Real-time credit control','Balance and credit-limit exposure visible to both sides, continuously.'],
            ['Audit-ready by construction','Onboarding approvals, document submissions, and transactions carry an evidenced trail.'],
            ['Faster franchisee activation','Onboarding-to-trading compressed from an email-and-spreadsheet cycle to a governed workflow.'],
          ].map(([o,d]) => <div className="fp-value-row" key={o}><div className="outcome">{o}</div><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">11</span>Scope boundaries</span>
            <h2>What the Franchise Portal does not do.</h2>
            <p>A trust signal, not a disclaimer, so nothing is inferred from silence.</p>
          </div>
          <div className="fp-scope-list">
            {[
              'The portal does not create, process, or reverse financial transactions',
              'The portal does not maintain an independent ledger or balance calculation',
              'The portal does not replace Oracle Fusion for franchisor finance users',
              'The portal does not replace the point-of-sale system for retail transactions',
              'The portal does not act as a master data authority, Oracle Fusion holds that role exclusively',
            ].map((s) => <div className="fp-scope-item" key={s}><div className="mark">—</div><p>{s}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">12</span>Technical requirements</span>
            <h2>What has to be in place.</h2>
          </div>
          <div className="fp-table-wrap"><table className="fp-table">
            <thead><tr><th>Requirement</th><th>Detail</th></tr></thead>
            <tbody>
              <tr><td>Oracle Fusion Cloud</td><td>Active subscription with Order Management, Inventory, Receivables, and customer master</td></tr>
              <tr><td>Oracle CX</td><td>Required for the prospect-stage onboarding flow</td></tr>
              <tr><td>Point of sale</td><td>Manarate POS or equivalent with a supported integration interface</td></tr>
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">13</span>FAQ</span>
            <h2>Questions evaluators ask first.</h2>
          </div>
          <div>
            <FPFaqItem q="Does the Franchise Portal require an Oracle Fusion licence for every franchisee?">No. The portal is the reason it doesn't. Franchisees access their information through the portal without holding Oracle Fusion user licences, while all data remains governed inside Fusion.</FPFaqItem>
            <FPFaqItem q="Can a franchisee change financial data through the portal?">No. The portal has no transactional write path into the financial sub-ledgers. Franchisees view information and submit documents; Oracle Fusion executes every transaction.</FPFaqItem>
            <FPFaqItem q="How does the portal stay synchronised with Oracle Fusion?">The portal retrieves data from Oracle Fusion rather than maintaining its own copy of financial state.</FPFaqItem>
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

ReactDOM.createRoot(document.getElementById('root')).render(<FranchisePortalPage />);
