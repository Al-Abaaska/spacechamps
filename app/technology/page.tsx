"use client";

import { useEffect, useState, type FormEvent } from "react";

function Brand() {
  return <span className="brand"><img src="/logo.svg" alt="SpaceChamps logo" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

const equipment = [
  { image: "/equipment/matrice-350-field.jpg", title: "DJI Matrice 350 RTK", sub: "Enterprise UAV", alt: "DJI Matrice 350 RTK flying during a mountain operation", specs: ["IP55 rated for all-weather operations", "RTK centimeter-level positioning", "55 min max flight time", "Hot-swappable dual batteries"] },
  { image: "/equipment/zenmuse-l2-field.jpg", title: "DJI Zenmuse L2", sub: "LiDAR Payload", alt: "DJI Zenmuse L2 LiDAR payload in the field", specs: ["5 returns, 240K pts/sec", "250m effective range", "Built-in RGB camera", "Ultra-accurate LiDAR"] },
  { image: "/equipment/long-endurance-vtol-field.jpg", title: "Long-Endurance VTOL", sub: "Large-Area Mapping", alt: "Long-endurance fixed-wing VTOL drone in a field", specs: ["4+ hour flight endurance", "500+ sq km coverage per flight", "No runway required", "Autonomous launch & recovery"] },
  { image: "/equipment/trimble-r12i-field.jpg", title: "Trimble R12i", sub: "GNSS RTK Receiver", alt: "Surveyor using a Trimble R12i GNSS receiver", specs: ["IMU-based tilt compensation", "Multi-constellation tracking", "Centimeter-level accuracy", "All-weather operation"] },
  { image: "/equipment/trimble-tdc6-field.jpg", title: "Trimble TDC6", sub: "Mobile GIS", alt: "Trimble TDC6 mobile GIS data collector", specs: ["6-inch sunlight display", "Sub-meter GNSS accuracy", "5G connectivity", "Rugged IP68 rating"] },
];

const pipeline = [
  { num: "01", title: "Mission Planning", desc: "Flight paths, ground control, and safety protocols are planned for optimal data capture." },
  { num: "02", title: "Drone Deployment", desc: "Automated or manual drone flights capture aerial LiDAR, photogrammetry, and thermal data." },
  { num: "03", title: "Raw Data QC", desc: "On-site quality checks ensure complete, accurate coverage before leaving the field." },
  { num: "04", title: "Cloud Processing", desc: "Data is uploaded to our cloud pipeline for automated point cloud generation and classification." },
  { num: "05", title: "AI Analysis", desc: "Machine learning models classify features, extract measurements, and flag anomalies." },
  { num: "06", title: "Deliverables", desc: "Final maps, models, and reports are delivered in your preferred formats — ready for use." },
];

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
          <p className="eyebrow">OUR TECHNOLOGY</p>
          <h1>Advanced Equipment.<br/><span>Intelligent Workflows.</span></h1>
          <p className="sub-lead">Industry-leading hardware that captures reality at centimeter-level precision, powered by <b>AI-driven processing</b>.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap">
          <div className="page-section" data-reveal>
            <h2>Our <span>Equipment</span></h2>
            <p>Every platform and sensor in our fleet is selected for maximum accuracy, reliability, and field performance.</p>
            <div className="detail-grid cols-2" data-reveal-group>
              {equipment.map(eq => (
                <div className="detail-card" key={eq.title}>
                  <div className="tech-image" style={{marginBottom: 18}}>
                    <img src={eq.image} alt={eq.alt} loading="lazy" />
                    <span className="tech-tag">EQUIPMENT</span>
                  </div>
                  <h3>{eq.title}</h3>
                  <p style={{marginBottom: 10, color: 'var(--accent)', fontSize: '.85rem', fontWeight: 600}}>{eq.sub}</p>
                  <ul>{eq.specs.map(s => <li key={s}>{s}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>Processing <span>Pipeline</span></h2>
            <p>From drone takeoff to final deliverables — our end-to-end pipeline ensures quality, speed, and consistency.</p>
            <div className="detail-grid cols-3">
              {pipeline.map(p => (
                <div className="detail-card" key={p.num}>
                  <div className="card-icon">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="page-section" data-reveal>
            <h2>AI & <span>Automation</span></h2>
            <div className="detail-grid cols-2">
              <div className="detail-card"><div className="card-icon">⌾</div><h3>Automated Classification</h3><p>Machine learning models automatically classify point clouds into ground, vegetation, buildings, and infrastructure — reducing manual processing by 80%.</p></div>
              <div className="detail-card"><div className="card-icon">◈</div><h3>Feature Extraction</h3><p>AI-powered algorithms detect and measure features like road edges, building footprints, power lines, and stockpile boundaries.</p></div>
              <div className="detail-card"><div className="card-icon">▣</div><h3>Quality Assurance</h3><p>Automated QA checks validate accuracy, completeness, and consistency against project specifications before delivery.</p></div>
              <div className="detail-card"><div className="card-icon">✣</div><h3>Cloud Platform</h3><p>Secure cloud-based delivery allows your team to view, measure, and share geospatial data from any device, anywhere.</p></div>
            </div>
          </div>

          <div className="page-cta" data-reveal>
            <p>Want to see our technology in action?</p>
            <div className="page-nav">
              <a href="/services">Our Services →</a>
              <a href="/about">About SpaceChamps →</a>
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
