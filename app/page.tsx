"use client";

import { useEffect, useState } from "react";

const services = [
  ["⌾", "LiDAR Data Acquisition", "High-density point clouds and precise digital elevation data."],
  ["⌁", "Topographical Surveys", "Accurate terrain, contour and engineering survey deliverables."],
  ["◇", "Aerial Photogrammetry", "High-resolution imagery, orthomosaics and 3D reconstruction."],
  ["▱", "DTM & DSM Models", "Detailed terrain and surface models for analysis and design."],
  ["▦", "Orthomosaic Mapping", "Georeferenced maps for measurable site intelligence."],
  ["↝", "Corridor Surveys", "Road, railway, pipeline and powerline route mapping."],
  ["◫", "Construction Monitoring", "Repeatable progress tracking and volumetric measurements."],
  ["△", "Mining & Quarry Surveys", "Stockpile volumes, pit analysis and operational monitoring."],
  ["♧", "Agriculture & Environment", "Crop assessment, land analysis and environmental mapping."],
  ["⌂", "Infrastructure Inspection", "Safe aerial inspection of critical structures and assets."],
  ["✣", "Long-range VTOL", "Extended-endurance missions for remote and large-scale projects."],
  ["◎", "Deployment & Support", "Mission planning, field operations and expert data support."],
];

const tech = [
  { image: "/equipment/matrice-350-field.jpg", title: "DJI Matrice 350 RTK", sub: "Enterprise UAV", alt: "DJI Matrice 350 RTK flying during a mountain operation" },
  { image: "/equipment/zenmuse-l2-field.jpg", title: "DJI Zenmuse L2", sub: "LiDAR payload", alt: "Survey operator flying a DJI drone equipped with a Zenmuse L2" },
  { image: "/equipment/long-endurance-vtol-field.jpg", title: "Long-endurance VTOL", sub: "Large-area mapping", alt: "Long-endurance fixed-wing VTOL drone in a field" },
  { image: "/equipment/trimble-r12i-field.jpg", title: "Trimble R12i", sub: "GNSS RTK receiver", alt: "Surveyor using a Trimble R12i GNSS receiver in the field" },
  { image: "/equipment/trimble-tdc6-field.jpg", title: "Trimble TDC6", sub: "Mobile GIS & field data", alt: "Trimble TDC6 mobile GIS data collector used outdoors" },
];

const industries = [
  ["▥", "Government", "Organizations"], ["♙", "Engineering", "Companies"],
  ["⌂", "Construction", "Companies"], ["△", "Mining", "Operators"],
  ["♧", "Agriculture", "Organizations"], ["▤", "Infrastructure", "Developers"],
];

const workflow = [
  ["01", "Drone Data Capture", "We plan and capture high-quality aerial data."],
  ["02", "LiDAR / Imaging", "Laser scans and imagery capture precise details."],
  ["03", "Data Processing", "Advanced processing ensures accuracy and clarity."],
  ["04", "3D Modelling", "Terrain models, maps and insights are generated."],
  ["05", "GIS Deliverables", "Actionable files arrive ready for your project."],
];

function Brand() {
  return <span className="brand"><span className="brand-glyph"><i/><i/><i/></span><b>Space<span>Champs</span></b></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const animated = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-group]"));
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setFinal = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      el.textContent = target.toFixed(decimals) + (el.dataset.suffix || "");
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      animated.forEach((element) => element.classList.add("is-visible"));
      counters.forEach(setFinal);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });

    animated.forEach((element) => observer.observe(element));

    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1700;
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCount(entry.target as HTMLElement);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => countObserver.observe(el));

    const bar = document.getElementById("scrollProgress");
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (bar) bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      countObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
      <header className="topbar">
        <div className="wrap nav-wrap">
          <a href="#home" aria-label="SpaceChamps home"><Brand /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i/><i/><i/></button>
          <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
            {["Home","About","Services","Technology","Industries","Workflow","Coverage","Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}{!["Home","Contact"].includes(item) && <span>⌄</span>}</a>)}
          </nav>
          <a className="nav-action" href="#contact">Request a Survey</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade"/>
        <div className="wrap hero-layout">
          <div className="hero-content">
            <p className="overline">GEOSPATIAL INTELLIGENCE, DELIVERED.</p>
            <h1>Advanced Drone &amp;<br/><span>LiDAR Surveying</span><br/>Solutions</h1>
            <p className="hero-lead">SpaceChamps delivers accurate, reliable, and actionable geospatial data using cutting-edge drone technology, LiDAR, and AI-powered analytics.</p>
            <div className="hero-buttons"><a className="button blue" href="#services">Our Services <b>→</b></a><a className="button outline" href="#contact">Request a Survey <b>⌖</b></a></div>
          </div>
          <div className="hero-previews" aria-label="Geospatial deliverable previews">
            <div><i className="preview pcloud"/><b>LiDAR Point Cloud</b></div>
            <div><i className="preview terrain-preview"/><b>3D Terrain Model</b></div>
            <div><i className="preview ortho"/><b>Orthomosaic Map</b></div>
          </div>
        </div>
        <div className="wrap proof-row">
          <div><i>⌾</i><span><b>High Accuracy</b><small>Centimeter-level precision</small></span></div>
          <div><i>◈</i><span><b>Advanced Technology</b><small>LiDAR, AI &amp; cloud processing</small></span></div>
          <div><i>◎</i><span><b>Global Reach</b><small>Projects across Africa &amp; Asia</small></span></div>
          <div><i>♙</i><span><b>Trusted by Leaders</b><small>Government &amp; enterprise clients</small></span></div>
        </div>
      </section>

      <section className="about light-section" id="about">
        <div className="wrap about-panel">
          <div className="about-copy" data-reveal="left">
            <p className="eyebrow">ABOUT SPACECHAMPS</p>
            <h2>Precision Data.<br/>Smarter Decisions.<br/><span>Stronger Infrastructure.</span></h2>
            <p>SpaceChamps brings drone-based LiDAR, aerial mapping, and GIS expertise into one connected geospatial workflow.</p>
            <p>We turn complex terrain and infrastructure data into precise, decision-ready intelligence for planning, design, and delivery.</p>
            <div className="about-capabilities"><span>LiDAR acquisition</span><span>Aerial mapping</span><span>GIS intelligence</span></div>
            <a className="button blue" href="#technology">Explore Our Technology <b>→</b></a>
          </div>
          <div className="about-media" data-reveal="right">
            <img src="/equipment/zenmuse-l2-field.jpg" alt="Survey operator flying a LiDAR-equipped drone in mountainous terrain" loading="lazy" />
            <div className="about-photo-copy"><span>FIELD-TO-INSIGHT</span><strong>Capture reality.<br/>Deliver certainty.</strong></div>
            <div className="about-quality"><i>LIVE</i><b data-count="98.7" data-decimals="1" data-suffix="%">0</b><small>Data quality target</small></div>
          </div>
        </div>
        <div className="wrap about-stats" data-reveal-group>
          <article><span>01</span><strong data-count="500" data-suffix="+">0</strong><small>Projects supported</small></article>
          <article><span>02</span><strong data-count="250" data-suffix="+">0</strong><small>Enterprise missions</small></article>
          <article><span>03</span><strong data-count="50" data-suffix="+">0</strong><small>Mission configurations</small></article>
          <article><span>04</span><strong data-count="98.7" data-decimals="1" data-suffix="%">0</strong><small>Data quality target</small></article>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {["LiDAR Acquisition", "Aerial Photogrammetry", "GIS Intelligence", "3D Terrain Models", "Orthomosaic Mapping", "RTK Positioning", "Point Clouds", "Corridor Surveys", "Volumetrics", "VTOL Mapping", "LiDAR Acquisition", "Aerial Photogrammetry", "GIS Intelligence", "3D Terrain Models", "Orthomosaic Mapping", "RTK Positioning", "Point Clouds", "Corridor Surveys", "Volumetrics", "VTOL Mapping"].map((kw, i) => <span key={i}>{kw}</span>)}
        </div>
      </div>

      <section className="services dark-section" id="services">
        <div className="services-orbs" aria-hidden="true"><span className="orb o1"/><span className="orb o2"/><span className="orb o3"/></div>
        <div className="wrap">
          <div className="services-intro" data-reveal="left"><p className="eyebrow">OUR SERVICES</p><h2>Comprehensive <span>Geospatial</span> Solutions</h2><p>From field capture to final deliverables, one connected geospatial workflow.</p></div>
          <div className="service-grid" data-reveal-group>
            {services.map(([icon,title,text]) => <article className="service-card" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p><a className="service-link" href="#contact" aria-label={`Request ${title}`}>Learn more <b>→</b></a></article>)}
          </div>
        </div>
      </section>

      <section className="technology light-section" id="technology">
        <div className="wrap tech-heading" data-reveal="left"><p className="eyebrow">OUR TECHNOLOGY</p><h2>Advanced Equipment.<br/><span>Intelligent Workflows.</span></h2><p>Industry-leading hardware that captures reality at centimeter-level precision.</p></div>
        <div className="wrap">
          <div className="tech-cards" data-reveal-group>{tech.map(({image,title,sub,alt}) => <article className="tech-card" key={title}><div className="tech-image"><img src={image} alt={alt} loading="lazy" /><span className="tech-tag">EQUIPMENT</span></div><div className="tech-meta"><strong>{title}</strong><small>{sub}</small></div></article>)}</div>
        </div>
        <div className="wrap tech-feature">
          <div className="tech-points" data-reveal-group><div><i>⌾</i><span><b>High-accuracy sensors</b><small>Centimeter-level data</small></span></div><div><i>✣</i><span><b>AI-powered processing</b><small>Faster insights</small></span></div><div><i>⌁</i><span><b>Cloud-based workflows</b><small>Secure &amp; scalable</small></span></div><div><i>▣</i><span><b>Multi-platform delivery</b><small>Web, mobile &amp; desktop</small></span></div></div>
        </div>
      </section>

      <section className="industry-band" id="industries">
        <div className="wrap industry-layout">
          <div data-reveal="left"><p className="eyebrow">INDUSTRIES WE SERVE</p><h2>Empowering Industries<br/>with <span>Geospatial Intelligence</span></h2></div>
          <div className="industry-grid" data-reveal-group>{industries.map(([icon,title,sub]) => <div key={title}><i>{icon}</i><b>{title}</b><small>{sub}</small></div>)}</div>
        </div>
      </section>

      <section className="workflow light-section" id="workflow">
        <div className="wrap workflow-layout">
          <div data-reveal="left"><p className="eyebrow">OUR WORKFLOW</p><h2>From Data to <span>Decisions</span></h2><p>A streamlined pipeline that turns raw aerial capture into decision-ready geospatial intelligence.</p></div>
          <div className="workflow-grid" data-reveal-group>{workflow.map(([num,title,text],index)=><article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><i className={`flow-image f${index+1}`}/>{index<workflow.length-1 && <b>→</b>}</article>)}</div>
        </div>
      </section>

      <section className="coverage-cta" id="coverage">
        <div className="wrap cta-grid">
          <div data-reveal="left"><p className="eyebrow">LET&apos;S WORK TOGETHER</p><h2>Ready to Elevate Your Projects<br/>with <span>Precision Data?</span></h2><p>Talk to SpaceChamps about the drone and geospatial solution that fits your mission.</p><div><a className="button blue" href="mailto:info@spacechamps.com">Request a Survey</a><a className="button outline" href="#contact">Get a Consultation ↗</a></div></div>
          <div className="contact-summary" id="contact" data-reveal><h3>Contact SpaceChamps</h3><a href="tel:+12025550147"><i>⌕</i> +1 (202) 555-0147</a><a href="mailto:info@spacechamps.com"><i>@</i> info@spacechamps.com</a><p><i>⌖</i> Regional operations across<br/>Africa &amp; Asia</p></div>
          <div className="world-map" aria-label="SpaceChamps coverage across Africa and Asia" data-reveal="right"><span className="africa-dot"/><span className="asia-dot"/><i>AFRICA</i><b>ASIA</b></div>
        </div>
      </section>

      <section className="map-strip" data-reveal>
        <iframe title="Representative SpaceChamps operations location" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=36.68%2C-1.38%2C36.95%2C-1.18&amp;layer=mapnik&amp;marker=-1.2864%2C36.8172"/>
        <div><p>REPRESENTATIVE LOCATION</p><h3>Nairobi, Kenya</h3><span>Placeholder until the official office address is confirmed.</span><a href="https://www.openstreetmap.org/?mlat=-1.2864&amp;mlon=36.8172#map=12/-1.2864/36.8172" target="_blank" rel="noreferrer">Open Map ↗</a></div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div><Brand/><p>Advanced drone, LiDAR, and geospatial solutions for a smarter, more connected world.</p></div>
          <div><h4>Quick Links</h4><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#technology">Technology</a></div>
          <div><h4>Industries</h4><a href="#industries">Government</a><a href="#industries">Engineering</a><a href="#industries">Construction</a><a href="#industries">Mining</a></div>
          <div><h4>Services</h4><a href="#services">LiDAR Surveys</a><a href="#services">Aerial Mapping</a><a href="#services">3D Modelling</a><a href="#services">GIS Solutions</a></div>
          <div><h4>Follow Us</h4><div className="socials"><a href="#contact">in</a><a href="#contact">▶</a><a href="#contact">𝕏</a></div></div>
        </div>
        <div className="wrap copyright"><span>© 2026 SpaceChamps. All rights reserved.</span><span>Precision in every point.</span></div>
      </footer>
    </main>
  );
}
