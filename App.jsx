/* SC Landing — App root + Tweaks */

const SC_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "headline": "editorial",
  "backdrop": "image2",
  "wireframe": false,
  "glow": 1.0,
  "mist": 1.0
} /*EDITMODE-END*/;

const HEADLINE_OPTIONS = [
{ value: 'editorial', label: 'Tagline' },
{ value: 'transform', label: '15+ designations' },
{ value: 'delivered', label: 'Since 2016' }];


const BACKDROP_OPTIONS = [
{ value: 'image2', label: 'Cube (new)' },
{ value: 'image', label: 'Network (previous)' },
{ value: 'synthetic', label: 'Synthetic' }];


function App() {
  const [t, setTweak] = useTweaks(SC_TWEAK_DEFAULTS);

  // theme switch — suppress transitions briefly so var()-driven
  // background/color changes settle instantly (transition:all won't animate them)
  React.useEffect(() => {
    document.body.classList.add('theme-switching');
    document.body.setAttribute('data-theme', t.theme);
    const id = requestAnimationFrame(() =>
    requestAnimationFrame(() => document.body.classList.remove('theme-switching'))
    );
    return () => cancelAnimationFrame(id);
  }, [t.theme]);

  // other tweak values (CSS-driven via data-attrs / vars)
  React.useEffect(() => {
    document.body.setAttribute('data-headline', t.headline);
    document.body.setAttribute('data-backdrop', t.backdrop);
    document.body.setAttribute('data-wire', t.wireframe ? 'on' : 'off');
    document.documentElement.style.setProperty('--glow-mult', String(t.glow));
    document.documentElement.style.setProperty('--grid-mult', String(t.mist));
  }, [t.headline, t.backdrop, t.wireframe, t.glow, t.mist]);

  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'auto' });
      };
      scrollToHash();
      const t1 = setTimeout(scrollToHash, 150);
      const t2 = setTimeout(scrollToHash, 500);
      return () => {clearTimeout(t1);clearTimeout(t2);};
    }
  }, []);

  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add('in');io.unobserve(e.target);}});
    }, { threshold: 0.14 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <div className="site-bg" aria-hidden="true">
        <div className="site-bg-img"></div>
        <div className="site-bg-scrim"></div>
      </div>
      <Nav />
      <Hero />
      <Story />
      <ClientStrip />
      <Numbers />
      <Expertise />
      <Services />
      <Products />
      <Recognition />
      <Industries />
      <CTA />
      <Footer />
      <ContactModal />
      <button className="theme-fab" onClick={() => setTweak('theme', t.theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark / light mode">
        <i data-lucide={t.theme === 'dark' ? 'sun' : 'moon'}></i>
      </button>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={['light', 'dark']}
          onChange={(v) => setTweak('theme', v)} />
        
        <TweakSection label="Hero headline" />
        <TweakRadio
          label="Message"
          value={t.headline}
          options={HEADLINE_OPTIONS}
          onChange={(v) => setTweak('headline', v)} />
        
        <TweakSection label="Hero backdrop" />
        <TweakRadio
          label="Backdrop"
          value={t.backdrop}
          options={BACKDROP_OPTIONS}
          onChange={(v) => setTweak('backdrop', v)} />
        
        <TweakToggle label="Wireframe peak" value={t.wireframe}
        onChange={(v) => setTweak('wireframe', v)} />
        <TweakSlider label="Accent glow" value={t.glow} min={0.3} max={1.7} step={0.1}
        onChange={(v) => setTweak('glow', v)} />
        <TweakSlider label="Atmosphere" value={t.mist} min={0} max={1.6} step={0.1}
        onChange={(v) => setTweak('mist', v)} />
      </TweaksPanel>
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);