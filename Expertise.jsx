/* SC, Focus Areas & Expertise (16 Oracle designations) + Recognition */

const EXPERTISE = [
{ name: 'Oracle ERP Financial Cloud', pillar: 'ERP', icon: 'banknote' },
{ name: 'Oracle SCM Procurement Cloud', pillar: 'SCM', icon: 'shopping-cart' },
{ name: 'Oracle HCM Global Human Resources Cloud', pillar: 'HCM', icon: 'users' },
{ name: 'Oracle HCM Payroll Cloud', pillar: 'HCM', icon: 'wallet' },
{ name: 'Workforce Management', pillar: 'HCM', icon: 'calendar-clock' },
{ name: 'Oracle Cloud Platform Integration', pillar: 'Technical', icon: 'link-2' },
{ name: 'Oracle Cloud OCI Data Management', pillar: 'OCI', icon: 'database' },
{ name: 'Accounting Hub', pillar: 'ERP', icon: 'book-open-check' },
{ name: 'Oracle Project Portfolio Management Cloud', pillar: 'ERP', icon: 'kanban-square' },
{ name: 'Oracle Talent Management Cloud', pillar: 'HCM', icon: 'graduation-cap' },
{ name: 'OCI Business Analytics', pillar: 'OCI', icon: 'bar-chart-3' },
{ name: 'Cloud Native Applications on Oracle Cloud', pillar: 'OCI', icon: 'boxes' },
{ name: 'Oracle Cloud OCI Migration', pillar: 'OCI', icon: 'move-right' },
{ name: 'Oracle Cloud OCI Observability & Management', pillar: 'OCI', icon: 'activity' },
{ name: 'Oracle Database to Oracle Cloud', pillar: 'Technical', icon: 'server-cog' },
{ name: 'Oracle Cloud Order Management', pillar: 'SCM', icon: 'package-check' }];


function Expertise() {
  return (
    <section className="section" id="expertise">
      <div className="wrap">
        <div className="section-lead reveal">
          <div className="section-head">
            <span className="eyebrow"><span className="ix">03</span>Focus Areas &amp; Expertise</span>
            <h2>15+ Oracle Service Partner Expertise designations.</h2>
          </div>
          <p>Each designation is an Oracle-validated Service Partner Expertise across EMEA - Middle East & North Africa, backed by 384 active certifications spanning every pillar we deliver.</p>
        </div>
        <div className="exp-band reveal">
          <span className="geo-motif geo-motif-sm"><span></span><span></span><span></span></span>
          <i className="bg-emblem bg-emblem-sm" data-lucide="shield-check"></i>
          <i data-lucide="badge-check"></i>
          <div>
            <strong style={{fontSize:'2.05rem'}}>Oracle PartnerNetwork</strong>
            <span>Not a training certificate, a partner-level designation Oracle grants only after named consultants and customer references prove delivery on that cloud service.</span>
          </div>
        </div>
        <div className="exp-grid reveal">
          {EXPERTISE.map((x, i) =>
          <div className="exp" key={x.name}>
              <span className="exp-num-bg">{String(i + 1).padStart(2, '0')}</span>
              <div className="exp-top">
                <div className="exp-shield"><i data-lucide={x.icon}></i></div>
                <span className="xn">{String(i + 1).padStart(2, '0')} / 16</span>
              </div>
              <span className="xt">{x.name}</span>
              <span className="xs">{x.pillar} · Designation</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

const AWARDS = [
{ focal: true, icon: 'award', yr: '2025 · ORACLE PARTNER AWARDS', title: 'EMEA Apps - Customer Success Partner Award', desc: 'Selected as the winner of the Oracle EMEA Applications Customer Success Partner Award, granted during Oracle AI World in Las Vegas on 13 October 2025.' },
{ icon: 'trophy', yr: '2023 · ORACLE PARTNER AWARDS', title: 'Seamless Implementation Award , Saudi Arabia', desc: 'Recognized for the Seamless Implementation Award 2023 in Saudi Arabia for excellence in Oracle Fusion delivery.' }];


function Recognition() {
  return (
    <section className="section" id="recognition" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="ix">06</span>Our Success</span>
          <h2>Recognized by Oracle, twice.</h2>
        </div>
        <div className="rec-panel reveal">
          <div className="rec-head">
            <div className="rec-stat">
              <span className="rv">02</span>
              <span className="rl">Oracle Partner Awards won since 2023, both for excellence in Fusion delivery.</span>
            </div>
            <div className="oracle-chip">
              <span className="ora-word" style={{backgroundColor:'#A92E2E'}}>ORACLE</span>
              <span className="ora-label">Partner Awards</span>
            </div>
          </div>
          <div className="awards">
            {AWARDS.map((a) =>
            <div className={"award" + (a.focal ? " focal" : "")} key={a.title}>
                <span className="geo-motif"><span></span><span></span><span></span></span>
                <i className="bg-emblem" data-lucide={a.icon}></i>
                <div className="award-top">
                  <div className="ai"><i data-lucide={a.icon}></i></div>
                  <span className="ayr">{a.yr}</span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { Expertise, Recognition });