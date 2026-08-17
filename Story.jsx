/* SC, Our Story (timeline) + By the Numbers */

const MILESTONES = [
{ yr: '2016', ev: 'Founded as a specialized Oracle Fusion Cloud implementation partner.' },
{ yr: '2018', ev: 'Entered the Saudi market.' },
{ yr: '2021', ev: 'Kickstarted the regional expansion plan.' },
{ yr: '2023', ev: 'Opened the Saudi (Riyadh) branch.' },
{ yr: '2026', ev: 'TBA, 2026 achievements to be announced at year-end.', now: true }];


function Story() {
  return (
    <section className="section" id="story">
      <div className="wrap">
        <div className="section-lead reveal">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">01</span>Our Story</span>
            <h2>A decade of Oracle Fusion, built in the region.</h2>
          </div>
          <p>We started in 2016 as a specialized partner for Oracle Fusion Cloud applications. Ten years on, we run a multidisciplinary bench across ERP, HCM, Technical &amp; CX and Business Excellence, serving enterprise and government clients where the regulatory stakes are highest, with zero failed go-lives in the last 24 months.</p>
        </div>
        <div className="timeline reveal">
          {MILESTONES.map((m) =>
          <div className={"tl" + (m.now ? " now" : "")} key={m.yr}>
              <div className="yr">{m.yr}</div>
              <div className="ev">{m.ev}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

const CLIENTS = [
{ f: 'l-jockey-club', n: 'Jockey Club of Saudi Arabia', sector: 'Entertainment' },
{ f: 'l-world-defense-show', n: 'World Defense Show', sector: 'Services' },
{ f: 'l-dtvc', n: 'Dhahran Techno Valley Holding Company', sector: 'Investment & Holding Companies' },
{ f: 'l-almana', n: 'Almana', sector: 'Commerce & Distribution' },
{ f: 'l-stc-bank', n: 'STC Bank', sector: 'Fintech & Banking' },
{ f: 'l-jeeny', n: 'Jeeny', sector: 'Services' },
{ f: 'l-neoleap', n: 'Neoleap', sector: 'Fintech & Banking' },
{ f: 'l-anb', n: 'Arab National Bank', sector: 'Fintech & Banking' },
{ f: 'l-ezdihar', n: 'Ezdihar', sector: 'Investment & Holding Companies' },
{ f: 'l-emkan', n: 'EMKAN', sector: 'Fintech & Banking' },
{ f: 'l-tiqmo', n: 'Tiqmo', sector: 'Fintech & Banking' },
{ f: 'l-alrajhi-takaful', n: 'Al Rajhi Takaful', sector: 'Fintech & Banking' },
{ f: 'l-biac', n: 'BIAC', sector: 'Services' },
{ f: 'l-badael', n: 'Badael', sector: 'Commerce & Distribution' },
{ f: 'l-sarcc', n: 'SARCC', sector: 'Semi-Government Agencies & NGOs' },
{ f: 'l-aqalat', n: 'AQALAT', sector: 'Investment & Holding Companies' },
{ f: 'l-center3', n: 'Center3', sector: 'Services' },
{ f: 'l-iot2', n: 'iot2', sector: 'Services' },
{ f: 'l-hala', n: 'HALA', sector: 'Services' },
{ f: 'l-aramco-digital', n: 'Aramco Digital', sector: 'Services' },
{ f: 'l-renewable-energy', n: 'Renewable Energy Localization Company', sector: 'Manufacturing' },
{ f: 'l-riyad-capital', n: 'Riyad Capital', sector: 'Fintech & Banking' },
{ f: 'l-al-jomaih', n: 'Al Jomaih Holding', sector: 'Investment & Holding Companies' },
{ f: 'l-alrajhi-capital', n: 'Al Rajhi Capital', sector: 'Fintech & Banking' },
{ f: 'l-hassana', n: 'HASSANA', sector: 'Investment & Holding Companies' },
{ f: 'l-al-fares-1', n: 'AL-FARES', sector: 'Commerce & Distribution' },
{ f: 'l-alkhorayef', n: 'Alkhorayef', sector: 'Manufacturing' },
{ f: 'l-abdul-latif-jameel', n: 'Abdul Latif Jameel', sector: 'Commerce & Distribution' },
{ f: 'l-ftc-al-fares', n: 'FTC AL-FARES', sector: 'Commerce & Distribution' },
{ f: 'l-al-fares-2', n: 'AL-FARES', sector: 'Commerce & Distribution' },
{ f: 'l-al-fares-3', n: 'AL-FARES', sector: 'Commerce & Distribution' },
{ f: 'l-al-fares-trading', n: 'AL-FARES Trading Co', sector: 'Commerce & Distribution' },
{ f: 'l-cst', n: 'CST', sector: 'Semi-Government Agencies & NGOs' },
{ f: 'l-gerflor', n: 'Gerflor', sector: 'Manufacturing' },
{ f: 'l-golden-petrol', n: 'Golden Petrol Company', sector: 'Commerce & Distribution' },
{ f: 'l-jamjoom', n: 'Jamjoom Medicine Store', sector: 'Medical & Pharma Services' },
{ f: 'l-armah', n: 'ARMAH', sector: 'Manufacturing' },
{ f: 'l-alsafwa', n: 'ALSAFWA Cement Company', sector: 'Manufacturing' },
{ f: 'l-awi', n: 'AWI', sector: 'Manufacturing' },
{ f: 'l-arab-potash', n: 'Arab Potash', sector: 'Manufacturing' },
{ f: 'l-gosi', n: 'General Organization for Social Insurance', sector: 'Semi-Government Agencies & NGOs' },
{ f: 'l-general-entertainment', n: 'General Entertainment Authority', sector: 'Entertainment' },
{ f: 'l-gaca', n: 'General Authority of Civil Aviation', sector: 'Semi-Government Agencies & NGOs' },
{ f: 'l-public-health-authority', n: 'Public Health Authority', sector: 'Medical & Pharma Services' },
{ f: 'l-tourism-dev-fund', n: 'Tourism Development Fund', sector: 'Semi-Government Agencies & NGOs' },
{ f: 'l-king-hussein-foundation', n: 'King Hussein Foundation', sector: 'Semi-Government Agencies & NGOs' },
{ f: 'l-ewa', n: 'EWA', sector: 'Services' },
{ f: 'l-rua-alharam', n: 'Rua Alharam Almakki Co.', sector: 'Investment & Holding Companies' },
{ f: 'l-qsas', n: 'QSAS', sector: 'Semi-Government Agencies & NGOs' }];


function ClientStrip() {
  const row = CLIENTS.concat(CLIENTS);
  return (
    <section className="client-section" id="clients">
      <div className="wrap">
        <div className="client-head reveal">
          <span className="eyebrow muted"><span className="dot"></span>Selected clients</span>
          <p>Trusted by enterprise, government and start-ups across Saudi Arabia and Jordan.</p>
        </div>
      </div>
      <div className="marquee reveal" aria-label="Client logos">
        <div className="marquee-track">
          {row.map((c, i) =>
          <div className="client-plate" key={c.f + i}>
              <img src={"assets/clients/" + c.f + ".png"} alt={c.n} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

const STATS = [
{ n: '15+', k: 'Oracle expertise', d: 'Service Partner Expertise designations held across the Oracle Fusion suite.' },
{ n: '9', k: 'Sectors served', d: 'From sovereign and semi-government bodies to private enterprise and start-ups.' },
{ n: '10', sup: 'y', k: 'Of Oracle Cloud delivery', d: 'Specialized in Oracle Fusion Cloud implementation and support since 2016.' }];


function Numbers() {
  return (
    <section className="section" id="numbers" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="ix">02</span>Who We Are</span>
          <h2>Depth measured in proof, not adjectives.</h2>
          <p>A regionally embedded Oracle specialist credentialed, certified and tested on complex programs in Saudi Arabia.</p>
        </div>
        <div className="stat-grid reveal">
          {STATS.map((s) =>
          <div className="stat" key={s.k}>
              <div className="n">{s.n}{s.sup && <em>{s.sup}</em>}</div>
              <div className="k">{s.k}</div>
              <div className="d">{s.d}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { Story, Numbers, ClientStrip, CLIENTS });