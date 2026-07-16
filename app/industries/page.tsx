"use client";

import { useEffect, useState, type FormEvent } from "react";

function Brand() {
  return <span className="brand"><img src="/logo.svg" alt="SpaceChamps logo" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

const industries = [
  { icon: "▥", title: "Government & Public Sector", desc: "Supporting national mapping agencies, urban planners, and defense organizations with large-scale geospatial data for policy, planning, and infrastructure development.", capabilities: ["National cadastral mapping", "Urban planning & zoning", "Disaster response mapping", "Border & coastal monitoring", "Public infrastructure asset management"], stats: "120+ government projects delivered" },
  { icon: "♙", title: "Engineering & Consulting", desc: "Empowering engineering firms with accurate terrain data, 3D models, and survey deliverables that accelerate design and reduce field revisits.", capabilities: ["Feasibility study data", "Design-grade topography", "As-built verification", "BIM integration support", "Multi-discipline data sharing"], stats: "80+ engineering firms served" },
  { icon: "⌂", title: "Construction", desc: "Real-time progress tracking, earthwork volumetrics, and site intelligence that keeps construction projects on time and on budget.", capabilities: ["Weekly progress surveys", "Cut/fill volume reports", "Stockpile management", "Site logistics mapping", "Handover documentation"], stats: "200+ construction sites monitored" },
  { icon: "△", title: "Mining & Resources", desc: "Accurate stockpile volumetrics, pit analysis, and operational monitoring that optimize extraction and ensure compliance.", capabilities: ["Stockpile volumetrics", "Pit wall stability analysis", "Haul road monitoring", "Rehabilitation tracking", "Safety & compliance reporting"], stats: "50+ mining operations supported" },
  { icon: "♧", title: "Agriculture & Environment", desc: "Precision agriculture data, crop health assessment, and environmental impact mapping using multispectral and LiDAR sensors.", capabilities: ["NDVI crop health mapping", "Irrigation efficiency analysis", "Environmental impact studies", "Wildlife habitat surveys", "Forestry inventory & biomass"], stats: "150,000+ hectares mapped" },
  { icon: "▤", title: "Infrastructure & Utilities", desc: "Safe aerial inspection and corridor mapping for bridges, power lines, pipelines, and telecommunication networks.", capabilities: ["Power line clearance surveys", "Pipeline route mapping", "Bridge & tower inspection", "Right-of-way documentation", "Condition assessment reporting"], stats: "300+ km of corridors mapped" },
];

export default function IndustriesPage() {
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
          <p className="eyebrow">INDUSTRIES WE SERVE</p>
          <h1>Empowering Industries<br/>with <span>Geospatial Intelligence</span></h1>
          <p className="sub-lead">Trusted by <b>250+ enterprise clients</b> across six key sectors — from government agencies to private construction firms.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap">
          {industries.map((ind, idx) => (
            <div className={`page-section ${idx % 2 === 1 ? 'dark-bg' : ''}`} key={ind.title} data-reveal>
              <div className="detail-grid cols-2">
                <div>
                  <div className="card-icon" style={{marginBottom: 20}}>{ind.icon}</div>
                  <h2>{ind.title}</h2>
                  <p style={{color: 'var(--muted)', lineHeight: 1.75, marginBottom: 20, fontSize: '1.05rem'}}>{ind.desc}</p>
                  <span className="card-tag">{ind.stats}</span>
                </div>
                <div className="detail-card">
                  <h3 style={{marginBottom: 16}}>Key Capabilities</h3>
                  <ul>{ind.capabilities.map(c => <li key={c}>{c}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}

          <div className="page-cta" data-reveal>
            <p>Looking for a geospatial solution in your industry?</p>
            <div className="page-nav">
              <a href="/services">Our Services →</a>
              <a href="/technology">Our Technology →</a>
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
