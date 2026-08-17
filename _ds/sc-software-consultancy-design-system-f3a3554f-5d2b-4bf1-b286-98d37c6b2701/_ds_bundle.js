/* @ds-bundle: {"format":3,"namespace":"SCSoftwareConsultancyDesignSystem_f3a355","components":[],"sourceHashes":{"ui_kits/landing/App.jsx":"f277df48a800","ui_kits/landing/Hero.jsx":"b905b467497a","ui_kits/landing/Sections.jsx":"a60131581b70","ui_kits/landing/Services.jsx":"bfa6b513342a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SCSoftwareConsultancyDesignSystem_f3a355 = window.SCSoftwareConsultancyDesignSystem_f3a355 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/landing/App.jsx
try { (() => {
/* SC Landing — App root */

function App() {
  React.useEffect(() => {
    // icons
    if (window.lucide) window.lucide.createIcons();
    // scroll reveals
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.14
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "divider"
  })), /*#__PURE__*/React.createElement(WhySC, null), /*#__PURE__*/React.createElement(Industries, null), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
/* SC Landing — Nav + Hero */

function Brand({
  light
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/sc-cube-mark.png",
    alt: "SC Software Consultancy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a"
  }, "Software Consultancy"), /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, "Oracle Fusion \xB7 GCC")));
}
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#why"
  }, "Why SC"), /*#__PURE__*/React.createElement("a", {
    href: "#industries"
  }, "Industries"), /*#__PURE__*/React.createElement("a", {
    href: "#insights"
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "#services"
  }, "View Our Services"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#contact"
  }, "Talk to an Expert ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })))));
}
function HeroStat({
  n,
  l
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hstat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, l));
}
function Hero() {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), 40);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "hero" + (ready ? " hero-ready" : ""),
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-stagger": "1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Oracle Fusion Cloud \xB7 GCC"), /*#__PURE__*/React.createElement("h1", {
    "data-stagger": "2"
  }, "Oracle Fusion,", /*#__PURE__*/React.createElement("br", null), "delivered with", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "regional precision.")), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    "data-stagger": "3"
  }, "We implement and run Oracle Fusion Cloud for enterprise and government across Saudi Arabia, the UAE and Jordan \u2014 localized for ZATCA, GOSI and Mudad from day one."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    "data-stagger": "4"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#contact"
  }, "Talk to an Expert ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-secondary",
    href: "#services"
  }, "View Our Services")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats",
    "data-stagger": "5"
  }, /*#__PURE__*/React.createElement(HeroStat, {
    n: "Oracle",
    l: "Certified Partner"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    n: "Deloitte",
    l: "ME Subcontractor"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    n: "19",
    l: "Industries Served"
  }), /*#__PURE__*/React.createElement(HeroStat, {
    n: "3",
    l: "GCC Markets"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual",
    "data-stagger": "6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cube-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cube-halo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "orbit",
    style: {
      width: '300px',
      height: '300px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orbit",
    style: {
      width: '430px',
      height: '430px',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("img", {
    className: "cube-img",
    src: "assets/sc-cube-mark.png",
    alt: "SC cube cluster"
  }), /*#__PURE__*/React.createElement("div", {
    className: "badge-float"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "badge-check"
  }), /*#__PURE__*/React.createElement("span", null, "Oracle Partner")), /*#__PURE__*/React.createElement("div", {
    className: "chip-cluster"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ttl"
  }, "KSA Localization"), /*#__PURE__*/React.createElement("div", {
    className: "rowx"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reg"
  }, "ZATCA"), /*#__PURE__*/React.createElement("span", {
    className: "reg"
  }, "GOSI"), /*#__PURE__*/React.createElement("span", {
    className: "reg"
  }, "Mudad")))))));
}
Object.assign(window, {
  Brand,
  Nav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
/* SC Landing — Industries + Trust + CTA + Footer */

const INDUSTRIES = ['Government & Public Sector', 'Banking & Financial Services', 'Oil & Gas', 'Utilities & Energy', 'Telecommunications', 'Healthcare', 'Retail & Distribution', 'Manufacturing', 'Construction & Real Estate', 'Education', 'Transportation & Logistics', 'Hospitality & Tourism', 'Professional Services', 'Insurance', 'Pharmaceuticals', 'Automotive', 'Aviation', 'Agriculture', 'Non-Profit & NGOs'];
function Industries() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "industries"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap ind-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Industries"), /*#__PURE__*/React.createElement("div", {
    className: "ind-count"
  }, "19"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.9rem',
      letterSpacing: '-.02em',
      color: '#EEF0F2',
      marginTop: '14px',
      lineHeight: 1.1
    }
  }, "Sectors transformed across the GCC."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      lineHeight: 1.6,
      color: 'var(--silver-400)',
      marginTop: '14px',
      maxWidth: '360px'
    }
  }, "From sovereign government programs to private enterprise, SC delivers Oracle Fusion where the regulatory stakes are highest.")), /*#__PURE__*/React.createElement("div", {
    className: "ind-tags reveal"
  }, INDUSTRIES.map(i => /*#__PURE__*/React.createElement("span", {
    className: "ind-tag",
    key: i
  }, i)))));
}
function LogoPlate({
  name,
  red
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "logo-plate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark" + (red ? " r" : "")
  }), /*#__PURE__*/React.createElement("span", null, name));
}
function Trust() {
  return /*#__PURE__*/React.createElement("section", {
    className: "trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow muted",
    style: {
      justifyContent: 'center',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Trusted across the region"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: '16px'
    }
  }, "Trusted by enterprise across KSA, UAE and Jordan.")), /*#__PURE__*/React.createElement("div", {
    className: "trust-row reveal"
  }, /*#__PURE__*/React.createElement(LogoPlate, {
    name: "Oracle",
    red: true
  }), /*#__PURE__*/React.createElement(LogoPlate, {
    name: "Deloitte"
  }), /*#__PURE__*/React.createElement(LogoPlate, {
    name: "LEAP",
    red: true
  }), /*#__PURE__*/React.createElement(LogoPlate, {
    name: "Govt KSA"
  }), /*#__PURE__*/React.createElement(LogoPlate, {
    name: "Enterprise"
  })), /*#__PURE__*/React.createElement("p", {
    className: "trust-note reveal"
  }, "Placeholder trust signals \u2014 replace with client & partner marks. SC co-exhibits with Oracle at LEAP.")));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap cta-inner reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Start the conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: '20px'
    }
  }, "Ready to transform your enterprise?"), /*#__PURE__*/React.createElement("p", null, "Talk to a certified Oracle Fusion consultant about your ERP, HCM or localization program \u2014 and how SC delivers it in the GCC."), /*#__PURE__*/React.createElement("div", {
    className: "cta-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary",
    href: "#contact"
  }, "Talk to an Expert ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-secondary",
    href: "#services"
  }, "View Our Services"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/sc-cube-mark.png",
    alt: "SC"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.02rem',
      color: '#EEF0F2'
    }
  }, "Software Consultancy"), /*#__PURE__*/React.createElement("span", {
    className: "b",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.5rem',
      letterSpacing: '.32em',
      textTransform: 'uppercase',
      color: 'var(--crimson-400)',
      marginTop: '4px'
    }
  }, "Oracle Fusion \xB7 GCC"))), /*#__PURE__*/React.createElement("p", {
    className: "footer-blurb"
  }, "Enterprise Oracle Fusion Cloud implementation, managed services and KSA localization for government and private sector across the GCC.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Oracle Fusion ERP"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Oracle Fusion HCM"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Oracle Fusion SCM"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "Managed Services"), /*#__PURE__*/React.createElement("a", {
    href: "#services"
  }, "KSA Localization")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#why"
  }, "Why SC"), /*#__PURE__*/React.createElement("a", {
    href: "#industries"
  }, "Industries"), /*#__PURE__*/React.createElement("a", {
    href: "#insights"
  }, "Insights"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Partnerships")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Talk to an Expert"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Request a Proposal"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "careers@sc.example"))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cp"
  }, "\xA9 2026 SC Software Consultancy. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "footer-regions"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), "Riyadh"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), "Amman"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), "Abu Dhabi")))));
}
Object.assign(window, {
  Industries,
  Trust,
  CTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Services.jsx
try { (() => {
/* SC Landing — Services strip + Why SC */

const SERVICES = [{
  num: '01',
  icon: 'database',
  tag: 'Finance · Procurement · Projects',
  title: 'Oracle Fusion ERP',
  desc: 'A single cloud for finance, procurement and project management — implemented, integrated and run.'
}, {
  num: '02',
  icon: 'users',
  tag: 'HR · Payroll · Talent',
  title: 'Oracle Fusion HCM',
  desc: 'Core HR, payroll and talent management, localized for KSA labour and wage protection.'
}, {
  num: '03',
  icon: 'truck',
  tag: 'Supply Chain · Inventory',
  title: 'Oracle Fusion SCM',
  desc: 'End-to-end supply chain, logistics and inventory orchestration across the region.'
}, {
  num: '04',
  icon: 'line-chart',
  tag: 'Planning · Close · EPM',
  title: 'Oracle Fusion EPM',
  desc: 'Enterprise performance management — planning, consolidation and a faster financial close.'
}, {
  num: '05',
  icon: 'headset',
  tag: 'Post Go-Live · AMS',
  title: 'Managed Services',
  desc: 'Continuous support, optimization and upgrades after go-live, with regional SLAs.'
}, {
  num: '06',
  icon: 'shield-check',
  tag: 'ZATCA · GOSI · Mudad',
  title: 'KSA Localization',
  desc: 'Regulatory compliance engineered into every implementation, from e-invoicing to wage protection.'
}];
function ServiceCard({
  s
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "svc-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, s.num), /*#__PURE__*/React.createElement("div", {
    className: "svc-ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon
  })), /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, s.tag), /*#__PURE__*/React.createElement("h3", null, s.title), /*#__PURE__*/React.createElement("p", null, s.desc));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Oracle Fusion Cloud"), /*#__PURE__*/React.createElement("h2", null, "Six pillars, one platform."), /*#__PURE__*/React.createElement("p", null, "We deliver the full Oracle Fusion Cloud suite \u2014 and keep it running. From ERP to localization, every engagement is led by certified consultants embedded in the region.")), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid reveal"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.num,
    s: s
  })))));
}
const DIFFERENTIATORS = [{
  icon: 'badge-check',
  title: 'Oracle Certified Partner',
  desc: 'A recognised Oracle implementation partner — credentialed across the Fusion Cloud suite.',
  focal: true
}, {
  icon: 'handshake',
  title: 'Deloitte ME Subcontractor',
  desc: 'Trusted to deliver government Oracle Fusion programs under Deloitte Middle East (UAE / Abu Dhabi).'
}, {
  icon: 'layers',
  title: '19 Industries',
  desc: 'Cross-sector delivery — from government and banking to oil & gas, healthcare and utilities.'
}, {
  icon: 'shield-check',
  title: 'KSA Localization Depth',
  desc: 'ZATCA e-invoicing, GOSI and Mudad compliance built in, not bolted on.'
}];
function WhyCard({
  d
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "why-card" + (d.focal ? " focal" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": d.icon
  })), /*#__PURE__*/React.createElement("h3", null, d.title), /*#__PURE__*/React.createElement("p", null, d.desc));
}
function WhySC() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Why SC"), /*#__PURE__*/React.createElement("h2", null, "Depth, not breadth for its own sake."), /*#__PURE__*/React.createElement("p", null, "SC is not a generic IT firm. We are a regionally embedded Oracle specialist that competes on expertise, regulatory know-how and enterprise credibility.")), /*#__PURE__*/React.createElement("div", {
    className: "why-grid reveal"
  }, DIFFERENTIATORS.map(d => /*#__PURE__*/React.createElement(WhyCard, {
    key: d.title,
    d: d
  })))));
}
Object.assign(window, {
  Services,
  WhySC
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Services.jsx", error: String((e && e.message) || e) }); }

})();
