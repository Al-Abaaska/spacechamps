"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

function Brand() {
  return <span className="brand"><img src="/spacechamps-favicon-v2.png" alt="" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

const navItems = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Technology", "/technology"]];

const categories = [
  { icon: "⌾", num: "01", title: "Survey & Data Capture", desc: "Precision aerial data acquisition using the latest drone and sensor technology.", count: "4 services" },
  { icon: "▱", num: "02", title: "Mapping & Analysis", desc: "Advanced processing and modelling to turn raw data into actionable intelligence.", count: "4 services" },
  { icon: "✣", num: "03", title: "Specialized Solutions", desc: "Expert platforms and support for complex, large-scale, and specialized projects.", count: "4 services" },
];

const services = [
  { icon: "⌾", title: "LiDAR Data Acquisition", desc: "High-density point clouds and precise digital elevation data captured from aerial and terrestrial platforms.", features: ["Centimeter-level accuracy", "Dense point cloud generation", "Multi-return LiDAR scanning", "Real-time kinematic positioning"], use: "Terrain modelling · Forestry · Corridors" },
  { icon: "◇", title: "Aerial Photogrammetry", desc: "High-resolution imagery, orthomosaics, and 3D reconstruction from structured aerial surveys.", features: ["Sub-centimeter ground resolution", "RGB & multispectral capture", "Structure-from-Motion processing", "True ortho generation"], use: "Site surveys · Progress monitoring" },
  { icon: "▱", title: "Topographical Surveys", desc: "Accurate terrain, contour, and engineering survey deliverables for design and construction teams.", features: ["Detailed contour maps", "Cross-section profiles", "Engineering-grade accuracy", "CAD/GIS integration"], use: "Road design · Site planning" },
  { icon: "▦", title: "DTM & DSM Models", desc: "Detailed terrain and surface models for analysis, design, and volumetric calculations.", features: ["Digital Terrain Models", "Digital Surface Models", "TIN generation", "Slope & aspect analysis"], use: "Flood modelling · Mining volumes" },
  { icon: "↝", title: "Corridor Surveys", desc: "Road, railway, pipeline, and powerline route mapping with consistent accuracy along long stretches.", features: ["Linear project optimization", "Right-of-way mapping", "Clearance analysis", "As-built documentation"], use: "Transport · Utilities · Oil & gas" },
  { icon: "◫", title: "Construction Monitoring", desc: "Repeatable progress tracking and volumetric measurements throughout the project lifecycle.", features: ["Scheduled flight plans", "Progress overlays", "Cut/fill volume reports", "Stakeholder dashboards"], use: "Construction sites · Infrastructure" },
  { icon: "△", title: "Mining & Quarry Surveys", desc: "Stockpile volumes, pit analysis, and operational monitoring for mining operations.", features: ["Stockpile volumetrics", "Pit wall analysis", "Haul road monitoring", "Safety compliance"], use: "Open-pit mines · Quarries" },
  { icon: "♧", title: "Agriculture & Environment", desc: "Crop health assessment, land analysis, and environmental mapping with multispectral data.", features: ["NDVI crop health indices", "Irrigation analysis", "Environmental impact mapping", "Wildlife habitat surveys"], use: "Precision agriculture · Environment" },
  { icon: "⌂", title: "Infrastructure Inspection", desc: "Safe aerial inspection of critical structures and assets — reducing risk and downtime.", features: ["Visual & thermal inspection", "Defect documentation", "3D asset models", "Condition reporting"], use: "Bridges · Towers · Pipelines" },
  { icon: "✣", title: "Long-Endurance VTOL", desc: "Extended-endurance missions for remote and large-area projects using fixed-wing VTOL platforms.", features: ["4+ hour flight endurance", "Large area coverage", "Remote site access", "Minimal ground infrastructure"], use: "Regional mapping · Remote sites" },
  { icon: "▣", title: "Orthomosaic Mapping", desc: "Georeferenced maps for measurable, decision-ready site intelligence at any scale.", features: ["Georeferenced output", "Measurable pixels", "Multi-temporal comparison", "Cloud-hosted delivery"], use: "Agriculture · Construction · Mining" },
  { icon: "◎", title: "Deployment & Support", desc: "Mission planning, field operations, and expert data support from start to finish.", features: ["Mission planning & logistics", "Field team deployment", "Data QA & delivery", "Technical consulting"], use: "Any project requiring expert support" },
];

const process = [
  { num: "01", title: "Plan", desc: "Flight paths, ground control, and safety protocols designed for your site." },
  { num: "02", title: "Capture", desc: "Automated drone flights collect LiDAR, imagery, and thermal data." },
  { num: "03", title: "Process", desc: "AI-powered cloud pipeline generates point clouds, models, and maps." },
  { num: "04", title: "Deliver", desc: "Final deliverables in your preferred formats — ready for immediate use." },
];

const keywords = ["LiDAR Acquisition", "Aerial Photogrammetry", "GIS Intelligence", "3D Terrain Models", "Orthomosaic Mapping", "RTK Positioning", "Point Clouds", "Corridor Surveys", "Volumetrics", "VTOL Mapping"];

export default function ServicesPage() {
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
          <p className="eyebrow">OUR SERVICES</p>
          <h1>Comprehensive <span>Geospatial</span> Solutions</h1>
          <p className="sub-lead">From field capture to final deliverables — <b>12 specialized services</b> covering the full data lifecycle.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap page-section" data-reveal>
          <div className="svc-cat-grid" data-reveal-stagger>
            {categories.map(cat => (
              <div className="svc-cat-card glow-border" key={cat.num}>
                <div className="card-icon" style={{marginBottom:16}}>{cat.icon}</div>
                <div className="cat-num">{cat.num}</div>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="cat-count">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap page-section" data-reveal>
          <div className="section-head">
            <p className="eyebrow">SURVEY & DATA CAPTURE</p>
            <h2>Precision <span>Aerial Acquisition</span></h2>
          </div>
          <div className="detail-grid cols-2" data-reveal-stagger>
            {services.slice(0, 4).map(s => (
              <div className="svc-card shine-sweep" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-features">{s.features.map(f => <li key={f}>{f}</li>)}</ul>
                <span className="svc-use">{s.use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content dark-band">
        <div className="wrap page-section" data-reveal>
          <div className="section-head">
            <p className="eyebrow">MAPPING & ANALYSIS</p>
            <h2>From Data to <span>Intelligence</span></h2>
          </div>
          <div className="detail-grid cols-2" data-reveal-stagger>
            {services.slice(4, 8).map(s => (
              <div className="svc-card shine-sweep" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-features">{s.features.map(f => <li key={f}>{f}</li>)}</ul>
                <span className="svc-use">{s.use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap page-section" data-reveal>
          <div className="section-head">
            <p className="eyebrow">SPECIALIZED SOLUTIONS</p>
            <h2>Expert Platforms & <span>Support</span></h2>
          </div>
          <div className="detail-grid cols-2" data-reveal-stagger>
            {services.slice(8, 12).map(s => (
              <div className="svc-card shine-sweep" key={s.title}>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svc-features">{s.features.map(f => <li key={f}>{f}</li>)}</ul>
                <span className="svc-use">{s.use}</span>
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
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>A Streamlined <span>Process</span></h2>
            <p>From planning to delivery — four steps to decision-ready geospatial intelligence.</p>
          </div>
          <div className="process-flow" data-reveal-stagger>
            {process.map(p => (
              <div className="process-step" key={p.num}>
                <div className="ps-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="wrap page-cta" data-reveal>
          <div className="section-head" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 28px" }}>
            <h2>Need a Custom <span>Geospatial Solution?</span></h2>
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
