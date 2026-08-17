/* SC, Industries / References + CTA + Contact Footer */

const SECTORS = [
'Commerce & Distribution', 'Medical & Pharma Services', 'Investment & Holding Companies',
'Fintech & Banking', 'Services', 'Manufacturing', 'Semi-Government Agencies & NGOs',
'Entertainment', 'Start-ups'];


function Industries() {
  const [active, setActive] = React.useState(null);
  const matches = active ? CLIENTS.filter((c) => c.sector === active) : [];
  return (
    <section className="section" id="industries">
      <div className="wrap ind-layout">
        <div className="reveal">
          <span className="eyebrow"><span className="ix">07</span>References</span>
          <div className="ind-count">120+</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.5rem', letterSpacing: '-.02em', color: 'var(--fg1)', marginTop: '14px', lineHeight: 1.1 }}>Clients across nine sectors.</h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.6, color: 'var(--fg2)', marginTop: '14px', maxWidth: '360px' }}>From sovereign and semi-government bodies to private enterprise and start-ups, we deliver Oracle Fusion where the regulatory stakes are highest across Saudi Arabia and Jordan.</p>
        </div>
        <div>
          <div className="ind-tags reveal">
            {SECTORS.map((s) =>
            <span className={"ind-tag" + (active === s ? " active" : "")} key={s} role="button" tabIndex={0}
            onClick={() => setActive(active === s ? null : s)}
            onKeyDown={(e) => { if (e.key === 'Enter') setActive(active === s ? null : s); }}>{s}</span>
            )}
          </div>
          {active &&
          <div className="ind-matches reveal in">
              <span className="ind-matches-lbl">{matches.length ? matches.length + ' reference' + (matches.length > 1 ? 's' : '') + ' in ' + active : 'No public references yet in ' + active}</span>
              {matches.length > 0 &&
              <div className="ind-matches-grid">
                  {matches.map((c) =>
                <div className="ind-match-plate" key={c.f}><img src={"assets/clients/" + c.f + ".png"} alt={c.n} /></div>
                )}
                </div>}
            </div>}
        </div>
      </div>
    </section>);

}

function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-grid"></div>
      <div className="cta-glow"></div>
      <div className="wrap cta-inner reveal">
        <span className="eyebrow" style={{ display: 'inline-flex' }}><span className="dot"></span>Start the conversation</span>
        <h2 style={{ marginTop: '20px' }}>Ready to transform your enterprise?</h2>
        <p>Talk to our sales team for a walkthrough on our company profile, ask about your Oracle Fusion upcoming project and how we deliver it across Saudi Arabia.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href="mailto:info@sc.com.jo" onClick={(e) => {e.preventDefault();window.dispatchEvent(new CustomEvent('sc:open-contact'));}}>Book a meeting with us <i data-lucide="arrow-right"></i></a>
          <a className="btn btn-secondary" href="#services">View Our Services</a>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer" id="contact-details">
      <div className="wrap">
        <div className="contact-grid" style={{ paddingBottom: '56px' }}>
          <div className="reveal">
            <span className="eyebrow"><span className="ix">08</span>Contact</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '2.2rem', letterSpacing: '-.01em', color: 'var(--fg1)', marginTop: '16px', lineHeight: 1.05 }}>The experience you need, the guidance you can trust.</h2>
            <div className="contact-lines">
              <a href="tel:+96265814882"><i data-lucide="phone"></i>+962 6 5814882</a>
              <a href="mailto:info@sc.com.jo"><i data-lucide="mail"></i>info@sc.com.jo</a>
              <a href="https://www.sc.com.jo" target="_blank" rel="noopener"><i data-lucide="globe"></i>www.sc.com.jo</a>
            </div>
          </div>
          <div className="offices reveal">
            <div className="office">
              <span className="oc"><i data-lucide="map-pin"></i>Amman Office</span>
              <h3>Jordan</h3>
              <p>Amman, Queen Rania Street, Building No. 351, 5th Floor.</p>
            </div>
            <div className="office">
              <span className="oc"><i data-lucide="map-pin"></i>Riyadh Office</span>
              <h3>Saudi Arabia</h3>
              <p>Riyadh, Prince Turki Ibn Abdulaziz Al Awal Street, Building No. 6783.</p>
            </div>
          </div>
        </div>

        <div className="footer-top" style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}>
          <div>
            <a className="brand brand-lockup" href="#top">
              <img src="assets/sc-logo-primary.png" alt="SC Software Consultancy" />
            </a>
            <p className="footer-blurb">A specialized Oracle Fusion Cloud partner since 2016, implementation, support and vertical development for enterprise and government across Saudi Arabia and Jordan.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Fusion Implementation</a>
            <a href="#services">Support Services</a>
            <a href="#services">System Health Check</a>
            <a href="#services">Vertical Development</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#story">Our Story</a>
            <a href="#expertise">Expertise</a>
            <a href="#recognition">Recognition</a>
            <a href="#industries">References</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:info@sc.com.jo">info@sc.com.jo</a>
            <a href="tel:+96265814882">+962 6 5814882</a>
            <a href="https://www.sc.com.jo" target="_blank" rel="noopener">www.sc.com.jo</a>
          </div>
        </div>
        <div className="footer-bot">
          <span className="cp">© 2026 SC Software Consultancy. All rights reserved.</span>
          <div className="footer-regions">
            <span><i data-lucide="map-pin"></i>Amman</span>
            <span><i data-lucide="map-pin"></i>Riyadh</span>
          </div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { Industries, CTA, Footer });