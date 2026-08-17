/* SC, "Book a meeting" contact modal */

const INDUSTRIES = ['Commerce & Distribution','Medical & Pharma Services','Investment & Holding Companies','Fintech & Banking','Services','Manufacturing','Semi-Government Agencies & NGOs','Entertainment','Start-ups','Other'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function dateOnly(d) { const c = new Date(d); c.setHours(0,0,0,0); return c; }
function localYMD(d) {
  const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), day = String(d.getDate()).padStart(2,'0');
  return y + '-' + m + '-' + day;
}
function fmtDate(d) { return d.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' }); }
function randomTime() {
  const hour = 10 + Math.floor(Math.random() * 7); // 10..16
  const mins = [0,15,30,45];
  const m = mins[Math.floor(Math.random() * mins.length)];
  return { hour, m };
}
function fmtTime(hour, m) {
  const period = hour >= 12 ? 'PM' : 'AM';
  let h12 = hour % 12; if (h12 === 0) h12 = 12;
  return h12 + ':' + String(m).padStart(2,'0') + ' ' + period;
}
function generateSlots(pickedDateStr) {
  if (!pickedDateStr) return [];
  const today = dateOnly(new Date());
  const picked = dateOnly(new Date(pickedDateStr + 'T00:00:00'));
  let candidates = [-1,0,1].map((o) => { const d = new Date(picked); d.setDate(d.getDate() + o); return d; });
  let valid = candidates.filter((d) => d >= today);
  let extra = 2;
  while (valid.length < 3 && extra <= 10) {
    const d = new Date(picked); d.setDate(d.getDate() + extra);
    if (d >= today && !valid.some((v) => v.getTime() === d.getTime())) valid.push(d);
    extra++;
  }
  valid.sort((a,b) => a - b);
  return valid.slice(0,3).map((d) => {
    const { hour, m } = randomTime();
    return { key: localYMD(d), label: fmtDate(d) + ' · ' + fmtTime(hour, m) + ' (KSA time)' };
  });
}

function ContactModal() {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', position:'', company:'', email:'', phone:'', message:'' });
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    const h = () => { setOpen(true); setSubmitted(false); setErrors({}); };
    window.addEventListener('sc:open-contact', h);
    return () => window.removeEventListener('sc:open-contact', h);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && window.lucide) requestAnimationFrame(() => window.lucide.createIcons());
  }, [open, submitted]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!open) return null;

  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); setErrors((er) => ({ ...er, [k]: null })); };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your full name.';
    if (!form.position.trim()) er.position = 'Please enter your position.';
    if (!form.company.trim()) er.company = 'Please enter your company name.';
    if (!form.email.trim()) er.email = 'Please enter your email.';
    else if (!EMAIL_RE.test(form.email.trim())) er.email = 'Please enter a valid email address.';
    return er;
  };

  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) setSubmitted(true);
    else {
      const firstKey = Object.keys(er)[0];
      const el = document.getElementById('cf-' + firstKey);
      if (el) el.focus();
    }
  };
  const close = () => setOpen(false);

  return (
    <div className="contact-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="contact-modal" role="dialog" aria-modal="true">
        <button className="contact-modal-close" onClick={close} aria-label="Close"><i data-lucide="x"></i></button>

        {!submitted &&
        <React.Fragment>
          <span className="eyebrow muted"><span className="dot"></span>Book a meeting</span>
          <h3>Let's talk about your Oracle Fusion project.</h3>
          <p className="sub">Tell us a bit about you and your organization, a member of our team will get back to you shortly.</p>
          <form onSubmit={submit} noValidate>
            <div className="cf-grid">
              <div className={"cf-field" + (errors.name ? " has-error" : "")}>
                <label htmlFor="cf-name">Full name</label>
                <input id="cf-name" value={form.name} onChange={set('name')} placeholder="Jane Doe" aria-invalid={!!errors.name} />
                {errors.name && <span className="cf-error">{errors.name}</span>}
              </div>
              <div className={"cf-field" + (errors.position ? " has-error" : "")}>
                <label htmlFor="cf-position">Position</label>
                <input id="cf-position" value={form.position} onChange={set('position')} placeholder="IT Director" aria-invalid={!!errors.position} />
                {errors.position && <span className="cf-error">{errors.position}</span>}
              </div>
              <div className={"cf-field" + (errors.company ? " has-error" : "")}>
                <label htmlFor="cf-company">Company name</label>
                <input id="cf-company" value={form.company} onChange={set('company')} placeholder="Acme Holding" aria-invalid={!!errors.company} />
                {errors.company && <span className="cf-error">{errors.company}</span>}
              </div>
              <div className={"cf-field" + (errors.email ? " has-error" : "")}>
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" aria-invalid={!!errors.email} />
                {errors.email && <span className="cf-error">{errors.email}</span>}
              </div>
              <div className="cf-field">
                <label htmlFor="cf-phone">Phone (optional)</label>
                <input id="cf-phone" value={form.phone} onChange={set('phone')} placeholder="+966 5X XXX XXXX" />
              </div>
              <div className="cf-field full">
                <label htmlFor="cf-message">What would you like to discuss?</label>
                <textarea id="cf-message" value={form.message} onChange={set('message')} placeholder="A short note on your project or question." />
              </div>
            </div>
            <div className="cf-actions">
              <a className="btn btn-secondary" href="#" onClick={(e) => { e.preventDefault(); close(); }}>Cancel</a>
              <button type="submit" className="btn btn-primary">Submit request <i data-lucide="arrow-right"></i></button>
            </div>
          </form>
        </React.Fragment>
        }

        {submitted &&
        <div className="cf-success">
          <div className="ic"><i data-lucide="check"></i></div>
          <h3>Thank you for contacting us.</h3>
          <p>We've received your request, a member of our team will get back to you shortly.</p>
          <button className="btn btn-primary" onClick={close}>Close</button>
        </div>
        }
      </div>
    </div>);

}

Object.assign(window, { ContactModal });
