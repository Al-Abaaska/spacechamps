"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

function Brand() {
  return <span className="brand"><img src="/spacechamps-favicon-v2.png" alt="" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

const navItems = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Technology", "/technology"]];

const equipment = [
  { image: "/equipment/matrice-350-field.jpg", title: "DJI Matrice 350 RTK", sub: "Enterprise UAV", alt: "DJI Matrice 350 RTK flying during a mountain operation", specs: ["IP55 rated — all-weather operations", "RTK centimeter-level positioning", "55 min max flight time", "Hot-swappable dual batteries"] },
  { image: "/equipment/zenmuse-l2-field.jpg", title: "DJI Zenmuse L2", sub: "LiDAR Payload", alt: "Survey operator flying a drone with Zenmuse L2", specs: ["5 returns, 240K pts/sec", "250m effective range", "Built-in RGB camera", "Ultra-accurate LiDAR scanning"] },
  { image: "/equipment/long-endurance-vtol-field.jpg", title: "Long-Endurance VTOL", sub: "Large-Area Mapping", alt: "Long-endurance fixed-wing VTOL drone in a field", specs: ["4+ hour flight endurance", "500+ sq km per flight", "No runway required", "Autonomous launch & recovery"] },
  { image: "/equipment/trimble-r12i-field.jpg", title: "Trimble R12i", sub: "GNSS RTK Receiver", alt: "Surveyor using a Trimble R12i GNSS receiver", specs: ["IMU-based tilt compensation", "Multi-constellation tracking", "Centimeter-level accuracy", "All-weather operation"] },
  { image: "/equipment/trimble-tdc6-field.jpg", title: "Trimble TDC6", sub: "Mobile GIS", alt: "Trimble TDC6 mobile GIS data collector", specs: ["6-inch sunlight display", "Sub-meter GNSS accuracy", "5G connectivity", "Rugged IP68 rating"] },
];

const pipeline = [
  { icon: "01", title: "Mission Planning", desc: "Flight paths, ground control, and safety protocols." },
  { icon: "02", title: "Drone Deployment", desc: "Automated flights capture LiDAR, imagery, thermal." },
  { icon: "03", title: "Raw Data QC", desc: "On-site quality checks ensure complete coverage." },
  { icon: "04", title: "Cloud Processing", desc: "Automated point cloud generation & classification." },
  { icon: "05", title: "AI Analysis", desc: "ML models classify features and flag anomalies." },
  { icon: "06", title: "Deliverables", desc: "Maps, models, and reports ready for use." },
];

const aiCards = [
  { icon: "⌾", title: "Automated Classification", desc: "Machine learning models automatically classify point clouds into ground, vegetation, buildings, and infrastructure — reducing manual processing by 80%." },
  { icon: "◈", title: "Feature Extraction", desc: "AI-powered algorithms detect and measure features like road edges, building footprints, power lines, and stockpile boundaries with high precision." },
  { icon: "▣", title: "Quality Assurance", desc: "Automated QA checks validate accuracy, completeness, and consistency against project specifications before any data is delivered." },
  { icon: "✣", title: "Cloud Platform", desc: "Secure cloud-based delivery allows your team to view, measure, and share geospatial data from any device, anywhere in the world." },
];

const keywords = ["LiDAR Acquisition", "Aerial Photogrammetry", "GIS Intelligence", "3D Terrain Models", "Orthomosaic Mapping", "RTK Positioning", "Point Clouds", "Corridor Surveys", "Volumetrics", "VTOL Mapping"];

export default function TechnologyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setFormStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/engwarsame16@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "New Survey Request — SpaceChamps" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormStatus("sent");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) { els.forEach(e => e.classList.add("is-visible")); return; }
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
    els.forEach(e => obs.observe(e));
    const bar = document.getElementById("scrollProgress");
    const onScroll = () => { const doc = document.documentElement; const max = doc.scrollHeight - doc.clientHeight; if (bar) bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%"; };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <main>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
      <header className="topbar">
        <div className="wrap nav-wrap">
          <a href="/" aria-label="SpaceChamps home"><Brand /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i/><i/><i/></button>
          <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <button type="button" className="nav-action" onClick={() => { setFormStatus("idle"); setModalOpen(true); }}>Request a Survey</button>
        </div>
      </header>

      <section className="sub-hero">
        <div className="sub-orbs" aria-hidden="true"><span className="orb o1"/><span className="orb o2"/><span className="orb o3"/></div>
        <div className="wrap">
          <div className="tech-hero-grid">
            <div>
              <p className="eyebrow">OUR TECHNOLOGY</p>
              <h1>Advanced Equipment.<br/><span>Intelligent Workflows.</span></h1>
              <p className="sub-lead">Industry-leading hardware that captures reality at centimeter-level precision, powered by <b>AI-driven processing</b>.</p>
            </div>
            <div className="tech-hero-visual" aria-hidden="true">
              <div className="drone-stage" style={{ width: 280, height: 280 }}>
                <span className="drone-glow"/>
                <svg className="drone-svg" viewBox="0 0 400 400" role="img" aria-label="Survey drone">
                  <defs>
                    <linearGradient id="bodyTop2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a5580" /><stop offset="1" stopColor="#0c2240" /></linearGradient>
                    <linearGradient id="bodyFront2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a3d5c" /><stop offset="1" stopColor="#0a1d36" /></linearGradient>
                    <radialGradient id="propDisc2" cx="50%" cy="50%"><stop offset="0" stopColor="rgba(56,189,248,0.14)" /><stop offset="0.55" stopColor="rgba(56,189,248,0.07)" /><stop offset="1" stopColor="rgba(56,189,248,0)" /></radialGradient>
                    <radialGradient id="motorRing2" cx="50%" cy="45%"><stop offset="0" stopColor="#2a5080" /><stop offset="1" stopColor="#0f2847" /></radialGradient>
                    <filter id="ledGlow2" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                    <filter id="domeGlow2" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  </defs>
                  <ellipse cx="200" cy="238" rx="105" ry="16" fill="rgba(0,0,0,0.28)" style={{filter:'blur(12px)'}} />
                  <g stroke="#1e4060" strokeWidth="15" strokeLinecap="round">
                    <line x1="165" y1="175" x2="90" y2="112" /><line x1="235" y1="175" x2="310" y2="112" />
                    <line x1="165" y1="205" x2="90" y2="275" /><line x1="235" y1="205" x2="310" y2="275" />
                  </g>
                  <rect x="157" y="163" width="86" height="54" rx="11" fill="url(#bodyTop2)" stroke="rgba(86,171,255,0.45)" strokeWidth="1.5" />
                  <rect x="157" y="205" width="86" height="12" rx="3" fill="url(#bodyFront2)" stroke="rgba(86,171,255,0.25)" strokeWidth="0.75" />
                  <line x1="167" y1="175" x2="233" y2="175" stroke="rgba(56,189,248,0.28)" strokeWidth="0.8" />
                  <circle cx="200" cy="188" r="11" fill="#08182e" stroke="rgba(56,189,248,0.7)" strokeWidth="1.5" />
                  <circle cx="200" cy="188" r="5" fill="#0c2a4a" stroke="rgba(56,189,248,0.4)" strokeWidth="0.8" />
                  <circle cx="200" cy="188" r="2.2" fill="#7dd3fc" filter="url(#domeGlow2)" />
                  <rect x="161" y="168" width="5" height="5" rx="1.5" fill="#22d3ee" filter="url(#ledGlow2)" />
                  <rect x="234" y="168" width="5" height="5" rx="1.5" fill="#22d3ee" filter="url(#ledGlow2)" />
                  <line x1="200" y1="163" x2="200" y2="144" stroke="#3a6d94" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="200" cy="142" r="3.5" fill="#22d3ee" filter="url(#ledGlow2)" />
                  <rect x="192" y="220" width="16" height="14" rx="4" fill="#0a1829" stroke="rgba(86,171,255,0.5)" strokeWidth="1.2" />
                  <circle cx="200" cy="227" r="5.5" fill="#06101e" stroke="rgba(56,189,248,0.6)" strokeWidth="1.2" />
                  <circle cx="200" cy="227" r="2.2" fill="#38bdf8" />
                  {[90, 310].map(cx => [112, 275].map(cy => (
                    <g key={`${cx}-${cy}`}>
                      <circle cx={cx} cy={cy} r="17" fill="url(#motorRing2)" stroke="rgba(86,171,255,0.45)" strokeWidth="1.5" />
                      <circle cx={cx} cy={cy} r="8" fill="#0a1829" stroke="rgba(86,171,255,0.3)" strokeWidth="1" />
                    </g>
                  )))}
                  <g className="rotor"><circle cx="90" cy="112" r="52" fill="url(#propDisc2)" /><ellipse cx="90" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" /><ellipse cx="90" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(60 90 112)" /><ellipse cx="90" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(120 90 112)" /></g>
                  <g className="rotor rev"><circle cx="310" cy="112" r="52" fill="url(#propDisc2)" /><ellipse cx="310" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" /><ellipse cx="310" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(60 310 112)" /><ellipse cx="310" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(120 310 112)" /></g>
                  <g className="rotor rev"><circle cx="90" cy="275" r="52" fill="url(#propDisc2)" /><ellipse cx="90" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" /><ellipse cx="90" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(60 90 275)" /><ellipse cx="90" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(120 90 275)" /></g>
                  <g className="rotor"><circle cx="310" cy="275" r="52" fill="url(#propDisc2)" /><ellipse cx="310" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" /><ellipse cx="310" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(60 310 275)" /><ellipse cx="310" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(120 310 275)" /></g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap page-section" data-reveal>
          <div className="section-head">
            <p className="eyebrow">OUR EQUIPMENT</p>
            <h2>Industry-Leading <span>Hardware</span></h2>
            <p>Every platform and sensor in our fleet is selected for maximum accuracy, reliability, and field performance.</p>
          </div>
          <div className="showcase-grid" data-reveal-stagger>
            {equipment.map(eq => (
              <div className="showcase-card shine-sweep tilt-card" key={eq.title}>
                <div className="sc-img">
                  <img src={eq.image} alt={eq.alt} loading="lazy" />
                  <span className="sc-tag">EQUIPMENT</span>
                </div>
                <div className="sc-body">
                  <h3>{eq.title}</h3>
                  <div className="sc-sub">{eq.sub}</div>
                  <ul>{eq.specs.map(s => <li key={s}>{s}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sub-marquee" aria-hidden="true">
        <div className="sm-track">
          {[...keywords, ...keywords].map((kw, i) => <span key={i}>{kw}</span>)}
        </div>
      </div>

      <section className="page-content">
        <div className="wrap page-section" data-reveal>
          <div className="section-head" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <p className="eyebrow">PROCESSING PIPELINE</p>
            <h2>From Takeoff to <span>Delivery</span></h2>
            <p>Our end-to-end pipeline ensures quality, speed, and consistency at every stage.</p>
          </div>
          <div className="pipeline" data-reveal-stagger>
            {pipeline.map((p, i) => (
              <div className="pipe-node" key={p.icon}>
                <div className="pn-circle">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < pipeline.length - 1 && <div className="pipe-connector">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content dark-band">
        <div className="wrap page-section" data-reveal>
          <div className="section-head">
            <p className="eyebrow">AI & AUTOMATION</p>
            <h2>Intelligent <span>Processing</span></h2>
            <p>Machine learning accelerates every stage — from classification to delivery.</p>
          </div>
          <div className="ai-grid" data-reveal-stagger>
            {aiCards.map(card => (
              <div className="ai-card glow-border" key={card.title}>
                <div className="ai-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap page-cta" data-reveal>
          <div className="section-head" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 28px" }}>
            <h2>See Our Technology <span>in Action</span></h2>
            <p>Talk to SpaceChamps about the drone and geospatial solution that fits your mission.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div><Brand/><p>Advanced drone, LiDAR, and geospatial solutions for a smarter, more connected world.</p></div>
          <div><h4>Contact</h4><a href="https://wa.me/6283852094053" target="_blank" rel="noreferrer">WhatsApp · +62 838-5209-4053</a><a href="mailto:engwarsame16@gmail.com">engwarsame16@gmail.com</a><p style={{margin:"9px 0",color:"#8a9cae",fontSize:"14px"}}>Jakarta, Indonesia · Doha, Qatar</p></div>
          <div><h4>Follow Us</h4><div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">X</a></div></div>
        </div>
        <div className="wrap copyright"><span>&copy; 2026 SpaceChamps. All rights reserved.</span><span>Precision in every point.</span></div>
      </footer>

      {modalOpen && createPortal(
        <div className="modal-overlay" onClick={() => setModalOpen(false)} role="presentation">
          <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="survey-modal-title">
            <button type="button" className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">✕</button>
            <h3 id="survey-modal-title">Request a Survey</h3>
            <p>Tell us about your project and our team will get back to you shortly.</p>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Full name" required />
              <input name="email" type="email" placeholder="Email address" required />
              <input name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Project details, location, timeline..." rows={4} required />
              <button className="button blue" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending..." : "Send Message"}</button>
              {formStatus === "sent" && <p className="form-success">✓ Thank you! Your message has been sent to our team.</p>}
              {formStatus === "error" && <p className="form-error">Something went wrong. Please email us directly at engwarsame16@gmail.com</p>}
            </form>
          </div>
        </div>,
        document.body
      )}
    </main>
  );
}
