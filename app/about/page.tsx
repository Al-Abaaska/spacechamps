"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

function Brand() {
  return <span className="brand"><img src="/spacechamps-favicon-v2.png" alt="" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

const navItems = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Technology", "/technology"]];

const milestones = [
  { year: "2012", title: "SpaceChamps Founded", desc: "Started with a small team of survey engineers and drone pilots passionate about precision data." },
  { year: "2015", title: "First International Expansion", desc: "Expanded operations beyond domestic markets, taking on projects across multiple regions." },
  { year: "2018", title: "LiDAR Technology Adoption", desc: "Integrated advanced LiDAR sensors and RTK positioning for centimeter-level accuracy." },
  { year: "2021", title: "AI-Powered Processing Pipeline", desc: "Launched our cloud-based AI processing platform for automated classification and feature extraction." },
  { year: "2024", title: "500+ Projects Milestone", desc: "Crossed 500 delivered projects with a 98.7% data quality target across all engagements." },
  { year: "2026", title: "14 Years of Excellence", desc: "Today, SpaceChamps serves 250+ enterprise clients across Southeast Asia and the Middle East." },
];

const keywords = ["LiDAR Acquisition", "Aerial Photogrammetry", "GIS Intelligence", "3D Terrain Models", "Orthomosaic Mapping", "RTK Positioning", "Point Clouds", "Corridor Surveys", "Volumetrics", "VTOL Mapping"];

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
      const res = await fetch("https://formsubmit.co/ajax/Info@spacechamps.com", {
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
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) { els.forEach(e => e.classList.add("is-visible")); counters.forEach(el => { const t = parseFloat(el.dataset.count || "0"); const d = parseInt(el.dataset.decimals || "0"); el.textContent = t.toFixed(d) + (el.dataset.suffix || ""); }); return; }
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
    els.forEach(e => obs.observe(e));
    const runCount = (el: HTMLElement) => { const target = parseFloat(el.dataset.count || "0"); const decimals = parseInt(el.dataset.decimals || "0"); const suffix = el.dataset.suffix || ""; const dur = 1700; const start = performance.now(); const step = (now: number) => { const p = Math.min((now - start) / dur, 1); const eased = 1 - Math.pow(1 - p, 3); el.textContent = (target * eased).toFixed(decimals) + suffix; if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
    const countObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { runCount(e.target as HTMLElement); countObs.unobserve(e.target); } }); }, { threshold: 0.6 });
    counters.forEach(el => countObs.observe(el));
    const bar = document.getElementById("scrollProgress");
    const onScroll = () => { const doc = document.documentElement; const max = doc.scrollHeight - doc.clientHeight; if (bar) bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%"; };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { obs.disconnect(); countObs.disconnect(); window.removeEventListener("scroll", onScroll); };
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
          <p className="eyebrow">ABOUT SPACECHAMPS</p>
          <h1>Precision Data.<br/>Smarter Decisions.<br/><span>Stronger Infrastructure.</span></h1>
          <p className="sub-lead">For over <b>14 years</b>, SpaceChamps has been a trusted leader in drone-based LiDAR, aerial mapping, and geospatial intelligence.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap page-section" data-reveal>
          <div className="stat-row" data-reveal-stagger>
            <div className="stat-item count-glow"><strong data-count="14" data-suffix="+">0</strong><small>Years of experience</small></div>
            <div className="stat-item count-glow"><strong data-count="500" data-suffix="+">0</strong><small>Projects delivered</small></div>
            <div className="stat-item count-glow"><strong data-count="250" data-suffix="+">0</strong><small>Enterprise clients</small></div>
            <div className="stat-item count-glow"><strong data-count="98.7" data-decimals="1" data-suffix="%">0</strong><small>Data quality target</small></div>
          </div>
        </div>

        <div className="wrap page-section" data-reveal>
          <div className="story-grid">
            <div className="story-copy">
              <div className="section-head">
                <p className="eyebrow">OUR STORY</p>
                <h2>From a Small Team to a <span>Trusted Partner</span></h2>
              </div>
              <p>Founded in <strong>2012</strong>, SpaceChamps began with a simple mission: make high-precision geospatial data accessible and actionable for the projects that shape our world.</p>
              <p>What started as a small team of survey engineers and drone pilots has grown into a trusted geospatial intelligence partner serving clients across <strong>Southeast Asia</strong> and the <strong>Middle East</strong>.</p>
              <p>Today, we combine deep field expertise with cutting-edge hardware and AI-powered processing — capturing reality at centimeter-level precision and turning it into decision-ready intelligence.</p>
            </div>
            <div className="story-img-wrap">
              <img src="/equipment/zenmuse-l2-field.jpg" alt="Survey operator flying a LiDAR-equipped drone in mountainous terrain" loading="lazy" />
              <div className="img-badge">
                <span>FIELD-TO-INSIGHT · EST. 2012</span>
                <strong>Capture reality. Deliver certainty.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-content dark-band">
        <div className="wrap page-section" data-reveal>
          <div className="section-head" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 48px" }}>
            <p className="eyebrow">OUR JOURNEY</p>
            <h2>A <span>14-Year</span> Legacy of Precision</h2>
            <p>Key milestones in our mission to make geospatial intelligence accessible and actionable.</p>
          </div>
          <div className="timeline">
            {milestones.map(m => (
              <div className="tl-item" key={m.year}>
                <div className="tl-dot"/>
                <div className="tl-card shine-sweep">
                  <div className="tl-year">{m.year}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-content">
        <div className="wrap page-section" data-reveal>
          <div className="mission-quote">
            <p>To deliver the most <span>accurate</span>, <span>reliable</span>, and <span>actionable</span> geospatial data — empowering organizations to plan smarter, build faster, and operate with confidence.</p>
          </div>
        </div>

        <div className="wrap page-section" data-reveal>
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow">WHAT DRIVES US</p>
            <h2>Our Core <span>Values</span></h2>
          </div>
          <div className="value-grid" data-reveal-stagger>
            <div className="value-card glow-border"><i>⌾</i><strong>Precision</strong><small>Centimeter-level accuracy in every dataset we deliver.</small></div>
            <div className="value-card glow-border"><i>◈</i><strong>Innovation</strong><small>Continuously adopting the latest hardware and AI workflows.</small></div>
            <div className="value-card glow-border"><i>♙</i><strong>Reliability</strong><small>Consistent quality and on-time delivery for every project.</small></div>
            <div className="value-card glow-border"><i>◎</i><strong>Partnership</strong><small>We work alongside our clients as an extension of their team.</small></div>
          </div>
        </div>
      </section>

      <div className="sub-marquee" aria-hidden="true">
        <div className="sm-track">
          {[...keywords, ...keywords].map((kw, i) => <span key={i}>{kw}</span>)}
        </div>
      </div>

      <section className="page-content">
        <div className="wrap page-cta" data-reveal>
          <div className="section-head" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 28px" }}>
            <h2>Ready to Work with a <span>Trusted Partner?</span></h2>
            <p>Talk to SpaceChamps about the drone and geospatial solution that fits your mission.</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div><Brand/><p>Advanced drone, LiDAR, and geospatial solutions for a smarter, more connected world.</p></div>
          <div><h4>Contact</h4><a href="https://wa.me/6283852094053" target="_blank" rel="noreferrer">WhatsApp · +62 838-5209-4053</a><a href="mailto:Info@spacechamps.com">Info@spacechamps.com</a><p style={{margin:"9px 0",color:"#8a9cae",fontSize:"14px"}}>Jakarta, Indonesia · Doha, Qatar</p></div>
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
              {formStatus === "error" && <p className="form-error">Something went wrong. Please email us directly at Info@spacechamps.com</p>}
            </form>
          </div>
        </div>,
        document.body
      )}
    </main>
  );
}
