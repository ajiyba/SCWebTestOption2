/* SC, Manafeth Mobile App deep-dive page (extends the main site design system) */

function MFNav() {
  return (
    <nav className="nav scrolled">
      <div className="wrap nav-inner">
        <Brand />
        <div className="nav-cta">
          <a className="btn btn-ghost" href="SC%20Landing%20Page.html#products"><i data-lucide="arrow-left"></i> Back to Products</a>
          <a className="btn btn-primary" href="#contact" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('sc:open-contact')); }}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </nav>);
}

function MFFaqItem({ q, children }) {
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

function MFArchDiagram() {
  const stages = [
    { icon: 'smartphone', t: 'Manafeth Mobile App', s: 'iOS, Android, HarmonyOS, native and offline-capable' },
    { icon: 'link-2', t: 'Oracle Integration Cloud', s: 'Real-time API layer, SSO and event notifications' },
    { icon: 'database', t: 'Oracle Fusion HCM', s: 'HCM, OTL, Absence, Payroll, the single source of truth' }];

  return (
    <div className="arch-diagram">
      {stages.map((s, i) =>
      <React.Fragment key={s.t}>
          <div className="arch-node">
            <div className="arch-ic"><i data-lucide={s.icon}></i></div>
            <div className="arch-t">{s.t}</div>
            <div className="arch-s">{s.s}</div>
          </div>
          {i < stages.length - 1 && <div className="arch-arrow"><i data-lucide="arrow-left-right"></i></div>}
        </React.Fragment>
      )}
    </div>);
}

function ManafethAppPage() {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => { document.body.setAttribute('data-theme', theme); }, [theme]);
  React.useEffect(() => {
    if (!window.lucide) return;
    window.lucide.createIcons();
    const raf = requestAnimationFrame(() => window.lucide.createIcons());
    const t = setTimeout(() => window.lucide.createIcons(), 150);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, [theme]);

  return (
    <React.Fragment>
      <MFNav />
      <header className="pd-hero">
        <span className="geo-motif geo-motif-lg"><span></span><span></span><span></span></span>
        <i className="bg-emblem bg-emblem-lg" data-lucide="smartphone"></i>
        <div className="wrap">
          <span className="eyebrow"><span className="ix">P/04</span>Product line</span>
          <div className="pd-hero-top">
            <div className="prod-medallion pd-medallion"><i data-lucide="smartphone"></i></div>
            <h1>Manafeth Mobile App</h1>
          </div>
          <p className="pd-tagline">Employee self-service for the full HCM lifecycle, from Oracle Fusion to any device.</p>
          <p style={{ maxWidth: '62ch', color: 'var(--fg2)', fontSize: '1rem', lineHeight: 1.6, marginTop: '18px' }}>A native mobile application that puts Oracle Fusion HCM in every employee's pocket, attendance, absence, payroll, approvals and self-service, all read from and written back to Fusion in real time through Oracle Integration Cloud. Delivered for iOS, Android and HarmonyOS, in Arabic and English.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">01</span>The business problem</span>
            <h2>HCM self-service that stops at the desktop doesn't get used.</h2>
            <p>Field and shift-based workforces rarely sit at a desk in front of Oracle Fusion.</p>
          </div>
          <div className="fp-gate-list">
            <div className="fp-gate"><div className="dot"></div><div><h4>Attendance is recorded, not verified</h4><p>Manual or kiosk-based clock-in offers no way to confirm an employee was actually on site, and no defence against buddy-punching.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>HR becomes a routing desk</h4><p>Leave balances, payslips, and letter requests arrive by phone and email, consuming HR time that should go to policy and exceptions, not lookups.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Approvals stall outside the office</h4><p>Managers without desktop access to Fusion delay leave, expense and purchase-order approvals, backing up the whole workflow behind them.</p></div></div>
            <div className="fp-gate"><div className="dot"></div><div><h4>Policy questions repeat endlessly</h4><p>The same HR-policy questions are asked, answered, and forgotten thousands of times a year, with no consistent source of truth for the answer.</p></div></div>
          </div>
          <div className="fp-callout"><p>The result: an HCM investment that only reaches the fraction of the workforce sitting at a desk, and an HR team spending its time on transactions Oracle Fusion can already do itself.</p></div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">02</span>The solution</span>
            <h2>Oracle Fusion HCM, carried to every device.</h2>
            <p>Manafeth is fully integrated with Oracle Fusion Cloud through an integration layer built on Oracle Integration Cloud, designed for seamless, real-time data exchange in both directions.</p>
          </div>
          <blockquote className="fp-pull">The app reads from Fusion HCM and writes back to it. It does not keep its own copy of the truth.</blockquote>
          <p style={{ maxWidth: '62ch', color: 'var(--fg2)', fontSize: '.96rem' }}>Employee and manager hierarchy, attendance, absence balances, payroll and self-service data are retrieved live from Fusion HCM, OTL, Absence and Payroll. Permitted self-service updates write back to Fusion through the same API layer.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="architecture">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">03</span>Solution architecture</span>
            <h2>App, integration layer, and Fusion HCM.</h2>
          </div>
          <MFArchDiagram />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">04</span>Functional capability</span>
            <h2>What employees and managers can see and do.</h2>
          </div>
          <div className="fp-cap-block">
            <h3>Profile, attendance and absence</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Employee profile</td><td>View personal, employment and contact details from Fusion HCM; update and write back permitted self-service fields</td></tr>
                <tr><td>Attendance</td><td>GPS/geofenced clock-in and clock-out with configurable location tolerance, shift and roster-based validation, and spoofing / jailbreak detection</td></tr>
                <tr><td>Manager overrides</td><td>Authorised managers can correct punch records with mandatory justification and a full audit trail</td></tr>
                <tr><td>Absence</td><td>View leave balances and history, submit and approve leave requests per the Fusion approval hierarchy, with push notifications to approvers</td></tr>
              </tbody>
            </table></div>
          </div>
          <div className="fp-cap-block">
            <h3>Payroll and self-service</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Payroll</td><td>Detailed pay slips, compensation and tax details from Fusion Payroll, with a notification on each completed payroll run</td></tr>
                <tr><td>Self-service requests</td><td>Employment letters, bank loan letters and other requests per Fusion configuration; managers may act on behalf of employees</td></tr>
                <tr><td>Individual compensation</td><td>Compensation plans, such as bonuses and allowances, presented as distinct tiles from the integration layer</td></tr>
                <tr><td>Task list</td><td>"My tasks" view of everything assigned to the user, actionable from within the app</td></tr>
              </tbody>
            </table></div>
          </div>
          <div className="fp-cap-block">
            <h3>Approvals, dashboards and integrations</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Procurement approvals</td><td>Real-time PO approval notifications, with PO detail and attachments viewable in-app</td></tr>
                <tr><td>Role-based dashboards</td><td>Employee, manager and role-specific dashboards for attendance, approvals and workforce insights</td></tr>
                <tr><td>Third-party integrations</td><td>Ticket status from MyService and performance evaluation results from MyTracker, surfaced in the app</td></tr>
              </tbody>
            </table></div>
          </div>
          <div className="fp-cap-block">
            <h3>AI and administration</h3>
            <div className="fp-table-wrap"><table className="fp-table">
              <thead><tr><th>Capability</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>HR chatbot</td><td>Arabic/English AI chatbot scoped to a validated HR policy base and exact employee eligibility, executing transactions in conversation and escalating to a human when uncertain</td></tr>
                <tr><td>Backend administration</td><td>Admin functions embedded in Oracle Fusion, content and messaging management, and comprehensive request/response logging</td></tr>
                <tr><td>Access &amp; security</td><td>SSO and MFA via Microsoft Azure AD, TLS 1.3 in transit, device jailbreak/root detection, and encryption at rest</td></tr>
              </tbody>
            </table></div>
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
            <li>Native iOS, Android and HarmonyOS apps, plus responsive web</li>
            <li>Geofenced, spoof-resistant attendance and absence self-service</li>
            <li>Payroll, compensation and self-service requests from Fusion HCM</li>
            <li>Manager approvals for leave, procurement and self-service on the go</li>
            <li>Role-based dashboards for employees, managers and HR</li>
            <li>Arabic/English AI HR chatbot with transaction execution</li>
            <li>SSO, MFA and PDPL-aligned security controls</li>
            <li>Full Arabic RTL support, light/dark themes, offline access</li>
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
          ['HR desk load reduced', 'Attendance, absence, payroll and letter requests move to self-service, off the HR team\u2019s inbox.'],
          ['Attendance integrity assured', 'Geofencing, shift validation and device-tamper detection close the gaps manual and kiosk attendance leave open.'],
          ['Approvals unblocked', 'Managers approve leave and procurement from their phone, removing a desktop bottleneck from the workflow.'],
          ['Policy answered consistently', 'The HR chatbot answers from one validated policy source, scoped to each employee\u2019s eligibility.'],
          ['Fusion HCM reaches the whole workforce', 'Field, shift and desk-based employees all get the same self-service, without additional Fusion licensing.'],
          ['Security posture maintained', 'SSO, MFA, encryption and PDPL-aligned controls carry through from Fusion to the device.']].
          map(([o, d]) => <div className="fp-value-row" key={o}><div className="outcome">{o}</div><p>{d}</p></div>)}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">07</span>Scope boundaries</span>
            <h2>What Manafeth does not do.</h2>
            <p>A trust signal, not a disclaimer, so nothing is inferred from silence.</p>
          </div>
          <div className="fp-scope-list">
            {[
            'The app does not replace Oracle Fusion HCM for HR administrators',
            'The app does not maintain an independent employee master record, Oracle Fusion remains the source of truth',
            'Approval workflows and Oracle-validated transactions remain online-only; offline mode covers selected information and attendance queuing',
            'The app does not process transactions outside Fusion-configured approval hierarchies'].
            map((s) => <div className="fp-scope-item" key={s}><div className="mark">—</div><p>{s}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">08</span>FAQ</span>
            <h2>Questions evaluators ask first.</h2>
          </div>
          <div>
            <MFFaqItem q="Does Manafeth require a separate employee database?">No. Employee, attendance, absence and payroll data are retrieved live from Oracle Fusion HCM, OTL and Payroll, the app holds no independent copy.</MFFaqItem>
            <MFFaqItem q="Which platforms does Manafeth support?">Native apps for iOS, Android and HarmonyOS, plus a responsive web version, all backed by the same Oracle Fusion integration.</MFFaqItem>
            <MFFaqItem q="Can employees use Manafeth without a network connection?">Selected information and policies remain available offline, and attendance registration can queue and sync on reconnection. Approval workflows and Oracle-validated transactions require a connection.</MFFaqItem>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <ContactModal />
      <button className="theme-fab" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark / light mode">
        <i data-lucide={theme === 'dark' ? 'sun' : 'moon'}></i>
      </button>
    </React.Fragment>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<ManafethAppPage />);
