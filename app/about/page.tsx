"use client";

import { useEffect, useState, type FormEvent } from "react";

function Brand() {
  return <span className="brand"><img src="/logo.svg" alt="SpaceChamps logo" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

export default function AboutPage() {
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
          <p className="eyebrow">ABOUT SPACECHAMPS</p>
          <h1>Precision Data.<br/>Smarter Decisions.<br/><span>Stronger Infrastructure.</span></h1>
          <p className="sub-lead">For over <b>14 years</b>, SpaceChamps has been a trusted leader in drone-based LiDAR, aerial mapping, and geospatial intelligence — empowering governments, engineering firms, and enterprises to build with confidence.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap">
          <div className="page-section" data-reveal>
            <h2>Our <span>Story</span></h2>
            <p>Founded in 2012, SpaceChamps began with a simple mission: make high-precision geospatial data accessible and actionable for the projects that shape our world. What started as a small team of survey engineers and drone pilots has grown into a trusted geospatial intelligence partner serving clients across Southeast Asia and the Middle East.</p>
            <p>Since our founding, we have completed thousands of missions — capturing centimeter-level data with LiDAR, photogrammetry, and GNSS technologies. Our team combines deep field expertise with cutting-edge hardware and AI-powered processing to deliver decision-ready intelligence faster than traditional methods.</p>
            <p>We turn complex terrain and infrastructure data into clear, actionable deliverables — accelerating planning, design, and delivery for governments, enterprises, and engineering firms worldwide.</p>
          </div>

          <div className="page-section" data-reveal>
            <div className="stat-row">
              <div className="stat-item"><strong>14+</strong><small>Years of experience</small></div>
              <div className="stat-item"><strong>500+</strong><small>Projects delivered</small></div>
              <div className="stat-item"><strong>250+</strong><small>Enterprise clients</small></div>
              <div className="stat-item"><strong>98.7%</strong><small>Data quality target</small></div>
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>Our <span>Mission</span></h2>
            <p>To deliver the most accurate, reliable, and actionable geospatial data — empowering organizations to plan smarter, build faster, and operate with confidence using drone technology, LiDAR, and AI-powered analytics.</p>
          </div>

          <div className="page-section" data-reveal>
            <h2>Our <span>Values</span></h2>
            <div className="value-grid">
              <div className="value-card"><i>⌾</i><strong>Precision</strong><small>Centimeter-level accuracy in every dataset we deliver.</small></div>
              <div className="value-card"><i>◈</i><strong>Innovation</strong><small>Continuously adopting the latest hardware and AI workflows.</small></div>
              <div className="value-card"><i>♙</i><strong>Reliability</strong><small>Consistent quality and on-time delivery for every project.</small></div>
              <div className="value-card"><i>◎</i><strong>Partnership</strong><small>We work alongside our clients as an extension of their team.</small></div>
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>Our <span>Capabilities</span></h2>
            <div className="detail-grid cols-3">
              <div className="detail-card"><div className="card-icon">⌁</div><h3>LiDAR Acquisition</h3><p>High-density point clouds and precise digital elevation data from aerial and terrestrial platforms.</p></div>
              <div className="detail-card"><div className="card-icon">◇</div><h3>Aerial Mapping</h3><p>High-resolution orthomosaics, 3D reconstruction, and georeferenced site intelligence.</p></div>
              <div className="detail-card"><div className="card-icon">▦</div><h3>3D Modelling</h3><p>Detailed terrain and surface models for analysis, design, and volumetric calculations.</p></div>
              <div className="detail-card"><div className="card-icon">▣</div><h3>GIS Intelligence</h3><p>Decision-ready spatial data integrated into your existing GIS and CAD workflows.</p></div>
              <div className="detail-card"><div className="card-icon">✣</div><h3>AI Processing</h3><p>Automated point cloud classification, feature extraction, and quality assurance.</p></div>
              <div className="detail-card"><div className="card-icon">↝</div><h3>Field Operations</h3><p>Expert mission planning, field deployment, and on-site support worldwide.</p></div>
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>Why <span>SpaceChamps</span></h2>
            <div className="detail-grid cols-2">
              <div className="detail-card"><h3>14+ Years of Field Expertise</h3><p>Since 2012, we have operated in diverse environments — from urban infrastructure corridors to remote mining sites and mountainous terrain.</p></div>
              <div className="detail-card"><h3>Cutting-Edge Hardware</h3><p>We deploy DJI Matrice 350 RTK, Zenmuse L2 LiDAR, long-endurance VTOL platforms, and Trimble GNSS receivers for maximum accuracy.</p></div>
              <div className="detail-card"><h3>AI-Powered Processing</h3><p>Our cloud-based pipeline automates point cloud classification, orthomosaic generation, and quality assurance — delivering results faster.</p></div>
              <div className="detail-card"><h3>Global Project Delivery</h3><p>With operations in Indonesia, Qatar, and beyond, we bring local knowledge and international standards to every engagement.</p></div>
            </div>
          </div>

          <div className="page-cta" data-reveal>
            <p>Ready to work with a trusted geospatial partner?</p>
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
