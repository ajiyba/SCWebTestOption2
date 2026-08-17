/* SC, E-Commerce Portal deep-dive page (extends the main site design system) */

function EPNav() {
  return (
    <nav className="nav scrolled">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-cta">
          <a className="btn btn-ghost" href="SC%20Landing%20Page.html#products"><i data-lucide="arrow-left"></i> Back to Products</a>
          <a className="btn btn-primary" href="#contact" onClick={(e) => {e.preventDefault();window.dispatchEvent(new CustomEvent('sc:open-contact'));}}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </nav>);

}

function EPArrow({ dir, label }) {
  return (
    <div className="fp-arrow-lbl">
      <svg viewBox="0 0 100 12" preserveAspectRatio="none">
        {dir === 'right' ?
        <React.Fragment><line x1="2" y1="6" x2="90" y2="6" stroke="var(--accent)" strokeWidth="1.5" /><polygon points="90,1 98,6 90,11" fill="var(--accent)" /></React.Fragment> :

        <React.Fragment><line x1="98" y1="6" x2="10" y2="6" stroke="var(--accent)" strokeWidth="1.5" /><polygon points="10,1 2,6 10,11" fill="var(--accent)" /></React.Fragment>
        }
      </svg>
      <span>{label}</span>
    </div>);

}

function EPFaqItem({ q, children }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  return (
    <div className="fp-faq-item" data-open={open}>
      <button className="fp-faq-q" onClick={() => setOpen(!open)}><span>{q}</span><span className="plus">+</span></button>
      <div className="fp-faq-a" style={{ maxHeight: open ? (ref.current ? ref.current.scrollHeight : 400) + 'px' : 0 }}>
        <div className="fp-faq-a-inner" ref={ref}>{children}</div>
      </div>
    </div>);

}

function EcommercePortalPage() {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {document.body.setAttribute('data-theme', theme);}, [theme]);
  React.useEffect(() => {if (window.lucide) requestAnimationFrame(() => window.lucide.createIcons());}, [theme]);

  return (
    <div className="ep-page">
      <EPNav />
      <header className="pd-hero">
        <span className="geo-motif geo-motif-lg"><span></span><span></span><span></span></span>
        <i className="bg-emblem bg-emblem-lg" data-lucide="shopping-bag"></i>
        <div className="wrap">
          <span className="eyebrow"><span className="ix">P/03</span>Product line</span>
          <div className="pd-hero-top">
            <div className="prod-medallion pd-medallion"><i data-lucide="shopping-bag"></i></div>
            <h1>E-Commerce Portal</h1>
          </div>
          <p className="pd-tagline">A seamless digital experience for your customers, powered by Oracle Fusion.</p>
          <p style={{ maxWidth: '62ch', color: 'var(--fg2)', fontSize: '1rem', lineHeight: 1.6, marginTop: '18px' }}>A customer-facing digital platform that gives your customers direct access to the sales, financial, and account services they need, without giving them access to Oracle Fusion. Customers place orders, view and print invoices and receipts, check balances, submit payments, and manage authorised collection agents through a modern web interface, while every transaction lands cleanly inside your ERP.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">01</span>The business problem</span>
            <h2>The ERP is where the business runs. The customer cannot get into it.</h2>
            <p>Every B2B organisation running Oracle Fusion faces the same structural gap.</p>
          </div>
          <div className="fp-gate-list">
            <div className="fp-gate"><div className="dot"></div><div><h4>Orders arrive through channels the ERP cannot see</h4><p>Email, phone, WhatsApp, and PDF purchase orders are re-keyed by customer service staff. Every re-keying is an opportunity for error, and every error is a credit note.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Customer service becomes a document retrieval desk</h4><p>"Send me a copy of invoice 4471." "What's my balance?" "Has my payment been applied?" These consume the time of people hired to grow accounts.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Customers have no visibility between order and delivery</h4><p>Order status enquiries generate inbound calls that produce no revenue.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Payment submission is manual and untraceable</h4><p>Bank transfer confirmations arrive by email attachment, are matched by hand, and float in an unallocated state until someone reconciles them.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Collection logistics are informal</h4><p>Customers send third-party drivers and agents to collect goods, authorised verbally and recorded nowhere.</p></div></div>
          </div>
          <div className="fp-callout"><p>The cost is quantifiable: manual order entry, avoidable credit notes, order-to-cash delay, and a customer experience that lags every consumer platform your customers use in their personal lives.</p></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">02</span>The solution</span>
            <h2>A front end to the ERP, not a system beside it.</h2>
            <p>The E-Commerce Portal is a customer-facing digital solution that enables organisations to give their customers easy, convenient access to essential sales, financial, and account services without requiring direct access to Oracle Fusion. Fully integrated with Oracle Fusion, the portal creates a seamless connection between customers and the organisation's ERP.</p>
          </div>
          <blockquote className="fp-pull">This is not a catalogue with a checkout bolted to an ERP export.</blockquote>
          <p style={{ maxWidth: '62ch', color: 'var(--fg2)', fontSize: '.96rem' }}>Orders placed on the portal are reflected in Oracle Fusion. Payment submissions integrate with the ERP environment. Balances and documents are drawn from the financial sub-ledgers.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="architecture">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">03</span>Solution architecture</span>
            <h2>Customer, portal, and ERP, one connected flow.</h2>
          </div>
          <div className="zp-arch-img"><img src="assets/ecommerce-architecture-diagram.jpg" alt="SC E-Commerce Portal architecture: customers and franchise network write sales orders and payment submissions to Oracle Fusion Order Management and Receivables, and read invoices, receipts, balance, and account information back through the portal" /></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">04</span>Functional capability</span>
            <h2>What customers can see and do.</h2>
          </div>
          <div className="fp-cap-block">
            <h3>Account visibility and self-service</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Invoice access</td><td>View and print invoices, with full history</td></tr>
                <tr><td>Sales order visibility</td><td>View and print sales orders and track their status</td></tr>
                <tr><td>Receipt access</td><td>View and print payment receipts</td></tr>
                <tr><td>Balance enquiry</td><td>Current account position, retrieved from Oracle Fusion</td></tr>
                <tr><td>Account information management</td><td>Maintain and update account details</td></tr>
              </tbody>
            </table></div>
          </div>
          <div className="fp-cap-block">
            <h3>Transactional capability</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Online order placement</td><td>Customers create sales orders directly in the portal, reflected in Oracle Fusion for a streamlined, connected ordering experience</td></tr>
                <tr><td>Receipt payment submission</td><td>Customers initiate payment-related transactions online, integrated with the Oracle ERP environment</td></tr>
              </tbody>
            </table></div>
          </div>
          <div className="fp-cap-block">
            <h3>Fulfilment and logistics</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Third-party management</td><td>Register and manage authorised third parties acting on the customer's behalf</td></tr>
                <tr><td>Authorised pickup persons</td><td>Nominate and manage individuals permitted to collect orders</td></tr>
              </tbody>
            </table></div>
            <div className="fp-callout"><p><strong style={{ color: 'var(--fg-accent)' }}>Differentiator.</strong> Authorised-collector management is a real operational control in distribution, building materials, fuel, wholesale, and industrial supply, sectors where goods are physically collected by drivers and agents. Generic e-commerce platforms do not have it.</p></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">05</span>Key capabilities summary</span>
            <h2>At a glance.</h2>
          </div>
          <ul className="fp-key-caps">
            <li>Customer self-service without direct Oracle Fusion access</li>
            <li>Invoice, order, receipt, and balance visibility</li>
            <li>Account information management</li>
            <li>Online sales order creation integrated with Oracle Fusion</li>
            <li>Receipt payment submission integrated with Oracle ERP</li>
            <li>Third-party and authorised pickup-person management</li>
            <li>Seamless integration with Oracle Fusion</li>
            <li>Improved customer experience and operational efficiency</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">06</span>Business value</span>
            <h2>Outcomes, not features.</h2>
          </div>
          {[
          ['Order entry cost removed', 'Customer-entered orders flow to Oracle Fusion without re-keying.'],
          ['Order accuracy improved', 'Eliminating transcription eliminates transcription error, and the credit notes that follow.'],
          ['Service capacity released', 'Self-service removes routine document and balance enquiries from the service desk.'],
          ['Order-to-cash accelerated', 'Direct order capture and integrated payment submission compress the cycle.'],
          ['Collection controlled', 'Authorised third parties and pickup persons recorded and governed, not verbally agreed.'],
          ['Customer experience modernised', 'A digital channel matching what B2B buyers now expect as standard.'],
          ['ERP investment extended', 'Oracle Fusion reaches the customer without additional Fusion user licensing.']].
          map(([o, d]) => <div className="fp-value-row" key={o}><div className="outcome">{o}</div><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">07</span>Who this is for</span>
            <h2>Sector fit.</h2>
          </div>
          <div className="fp-table-wrap"><table className="fp-table">
            <thead><tr><th>Sector</th><th>Fit</th></tr></thead>
            <tbody>
              <tr><td>Distribution &amp; wholesale</td><td>High-frequency reordering, standing catalogues, third-party collection</td></tr>
              <tr><td>Manufacturing</td><td>B2B dealer and distributor networks placing recurring orders</td></tr>
              <tr><td>Building materials</td><td>Trade accounts with credit terms and driver-based collection</td></tr>
              <tr><td>Fuel &amp; energy retail</td><td>Bulk customers and commercial accounts</td></tr>
              <tr><td>Industrial supply</td><td>Long-tail catalogues with account-based ordering</td></tr>
            </tbody>
          </table></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">08</span>Scope boundaries</span>
            <h2>What the E-Commerce Portal does not do.</h2>
            <p>A trust signal, not a disclaimer, so nothing is inferred from silence.</p>
          </div>
          <div className="fp-scope-list">
            {[
            'The portal does not replace Oracle Fusion for internal finance and operations users',
            'Orders are created in the portal and processed by Oracle Fusion, order orchestration, credit checking, and fulfilment logic remain ERP-governed',
            'The portal does not maintain an independent financial ledger'].
            map((s) => <div className="fp-scope-item" key={s}><div className="mark">—</div><p>{s}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">09</span>FAQ</span>
            <h2>Questions evaluators ask first.</h2>
          </div>
          <div>
            <EPFaqItem q="Do our customers need Oracle Fusion licences?">No. That is the core of the design. Customers transact through the portal; Oracle Fusion remains internal.</EPFaqItem>
            <EPFaqItem q="Do orders placed on the portal appear in Oracle Fusion automatically?">Yes. Orders created in the portal are reflected in Oracle Fusion.</EPFaqItem>
            <EPFaqItem q="Can we control who collects our customers' orders?">Yes. Customers register authorised third parties and pickup persons through the portal, creating a recorded, governed authorisation rather than a verbal one.</EPFaqItem>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <ContactModal />
      <button className="theme-fab" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark / light mode">
        <i data-lucide={theme === 'dark' ? 'sun' : 'moon'}></i>
      </button>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<EcommercePortalPage />);