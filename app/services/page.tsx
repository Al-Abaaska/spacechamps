"use client";

import { useEffect, useState, type FormEvent } from "react";

function Brand() {
  return <span className="brand"><img src="/logo.svg" alt="SpaceChamps logo" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

const services = [
  { icon: "⌁", title: "LiDAR Data Acquisition", desc: "High-density point clouds and precise digital elevation data captured from aerial and terrestrial platforms.", features: ["Centimeter-level accuracy", "Dense point cloud generation", "Multi-return LiDAR scanning", "Real-time kinematic positioning"], use: "Terrain modelling, forestry, corridor mapping, flood analysis" },
  { icon: "◇", title: "Aerial Photogrammetry", desc: "High-resolution imagery, orthomosaics, and 3D reconstruction from structured aerial surveys.", features: ["Sub-centimeter ground resolution", "RGB & multispectral capture", "Structure-from-Motion processing", "True ortho generation"], use: "Site surveys, progress monitoring, environmental assessment" },
  { icon: "▱", title: "Topographical Surveys", desc: "Accurate terrain, contour, and engineering survey deliverables for design and construction teams.", features: ["Detailed contour maps", "Cross-section profiles", "Engineering-grade accuracy", "CAD/GIS integration"], use: "Road design, site planning, earthwork calculations" },
  { icon: "▦", title: "DTM & DSM Models", desc: "Detailed terrain and surface models for analysis, design, and volumetric calculations.", features: ["Digital Terrain Models", "Digital Surface Models", "TIN generation", "Slope & aspect analysis"], use: "Flood modelling, mining volumes, urban planning" },
  { icon: "◫", title: "Orthomosaic Mapping", desc: "Georeferenced maps for measurable, decision-ready site intelligence at any scale.", features: ["Georeferenced output", "Measurable pixels", "Multi-temporal comparison", "Cloud-hosted delivery"], use: "Agriculture, construction, mining, infrastructure" },
  { icon: "↝", title: "Corridor Surveys", desc: "Road, railway, pipeline, and powerline route mapping with consistent accuracy along long stretches.", features: ["Linear project optimization", "Right-of-way mapping", "Clearance analysis", "As-built documentation"], use: "Transport, utilities, oil & gas pipelines" },
  { icon: "◫", title: "Construction Monitoring", desc: "Repeatable progress tracking and volumetric measurements throughout the project lifecycle.", features: ["Scheduled flight plans", "Progress overlays", "Cut/fill volume reports", "Stakeholder dashboards"], use: "Construction sites, infrastructure projects" },
  { icon: "△", title: "Mining & Quarry Surveys", desc: "Stockpile volumes, pit analysis, and operational monitoring for mining operations.", features: ["Stockpile volumetrics", "Pit wall analysis", "Haul road monitoring", "Safety compliance"], use: "Open-pit mines, quarries, aggregate operations" },
  { icon: "♧", title: "Agriculture & Environment", desc: "Crop health assessment, land analysis, and environmental mapping with multispectral data.", features: ["NDVI & crop health indices", "Irrigation analysis", "Environmental impact mapping", "Wildlife habitat surveys"], use: "Precision agriculture, environmental compliance" },
  { icon: "⌂", title: "Infrastructure Inspection", desc: "Safe aerial inspection of critical structures and assets — reducing risk and downtime.", features: ["Visual & thermal inspection", "Defect documentation", "3D asset models", "Condition reporting"], use: "Bridges, towers, pipelines, buildings" },
  { icon: "✣", title: "Long-Endurance VTOL", desc: "Extended-endurance missions for remote and large-area projects using fixed-wing VTOL platforms.", features: ["4+ hour flight endurance", "Large area coverage", "Remote site access", "Minimal ground infrastructure"], use: "Regional mapping, remote infrastructure, border surveys" },
  { icon: "◎", title: "Deployment & Support", desc: "Mission planning, field operations, and expert data support from start to finish.", features: ["Mission planning & logistics", "Field team deployment", "Data QA & delivery", "Technical consulting"], use: "Any project requiring expert geospatial support" },
];

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
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group] > *"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) { els.forEach(e => e.classList.add("is-visible")); return; }
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
    els.forEach(e => obs.observe(e));
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      <header className="topbar">
        <div className="wrap nav-wrap">
          <a href="/" aria-label="SpaceChamps home"><Brand /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i/><i/><i/></button>
          <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
            {[["Home","/"],["About","/about"],["Services","/services"],["Technology","/technology"],["Industries","/industries"]].map(([label, href]) => <a key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="nav-action" href="#contact">Request a Survey</a>
        </div>
      </header>

      <section className="sub-hero">
        <div className="wrap">
          <a href="/" className="back-link">← Back to Home</a>
          <p className="eyebrow">OUR SERVICES</p>
          <h1>Comprehensive <span>Geospatial</span> Solutions</h1>
          <p className="sub-lead">From field capture to final deliverables — one connected geospatial workflow. <b>12 specialized services</b> covering the full data lifecycle.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap">
          <div className="page-section" data-reveal>
            <h2>Survey & <span>Data Capture</span></h2>
            <p>Precision aerial data acquisition using the latest drone and sensor technology.</p>
            <div className="detail-grid cols-2">
              {services.slice(0, 4).map(s => (
                <div className="detail-card" key={s.title}>
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>{s.features.map(f => <li key={f}>{f}</li>)}</ul>
                  <span className="card-tag">{s.use}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>Mapping & <span>Analysis</span></h2>
            <p>Advanced processing and modelling to turn raw data into actionable intelligence.</p>
            <div className="detail-grid cols-2">
              {services.slice(4, 8).map(s => (
                <div className="detail-card" key={s.title}>
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>{s.features.map(f => <li key={f}>{f}</li>)}</ul>
                  <span className="card-tag">{s.use}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>Specialized <span>Solutions</span></h2>
            <p>Expert platforms and support for complex, large-scale, and specialized projects.</p>
            <div className="detail-grid cols-2">
              {services.slice(8, 12).map(s => (
                <div className="detail-card" key={s.title}>
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>{s.features.map(f => <li key={f}>{f}</li>)}</ul>
                  <span className="card-tag">{s.use}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="page-cta" data-reveal>
            <p>Need a custom geospatial solution for your project?</p>
            <div className="page-nav">
              <a href="/technology">Our Technology →</a>
              <a href="/industries">Industries We Serve →</a>
              <button type="button" className="button blue" onClick={() => { setFormStatus("idle"); setModalOpen(true); }}>Request a Survey</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div><Brand/><p>Advanced drone, LiDAR, and geospatial solutions for a smarter, more connected world.</p></div>
          <div><h4>Quick Links</h4><a href="/">Home</a><a href="/about">About Us</a><a href="/services">Services</a><a href="/technology">Technology</a></div>
          <div><h4>Industries</h4><a href="/industries">Government</a><a href="/industries">Engineering</a><a href="/industries">Construction</a><a href="/industries">Mining</a></div>
          <div><h4>Services</h4><a href="/services">LiDAR Surveys</a><a href="/services">Aerial Mapping</a><a href="/services">3D Modelling</a><a href="/services">GIS Solutions</a></div>
          <div><h4>Follow Us</h4><div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="X">X</a></div></div>
        </div>
        <div className="wrap copyright"><span>&copy; 2026 SpaceChamps. All rights reserved.</span><span>Precision in every point.</span></div>
      </footer>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">x</button>
            <h3>Request a Survey</h3>
            <p>Tell us about your project and our team will get back to you shortly.</p>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Full name" required />
              <input name="email" type="email" placeholder="Email address" required />
              <input name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Project details, location, timeline..." rows={4} required />
              <button className="button blue" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending..." : "Send Message"}</button>
              {formStatus === "sent" && <p className="form-success">Thank you! Your message has been sent to our team.</p>}
              {formStatus === "error" && <p className="form-error">Something went wrong. Please email us directly at engwarsame16@gmail.com</p>}
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
