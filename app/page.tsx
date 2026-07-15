"use client";

import { useState } from "react";

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
  ["◆", "DJI Matrice", "Enterprise UAV"],
  ["◉", "Zenmuse L2 / L3", "LiDAR payloads"],
  ["△", "VTOL Systems", "Long-range drones"],
  ["⌖", "GNSS RTK", "High precision"],
  ["▦", "GIS Platforms", "Mapping & analysis"],
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

  return (
    <main>
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
        <div className="wrap about-grid">
          <div className="section-copy">
            <p className="eyebrow">ABOUT SPACECHAMPS</p>
            <h2>Precision Data.<br/>Smarter Decisions.<br/><span>Stronger Infrastructure.</span></h2>
            <p>SpaceChamps is a leading geospatial technology company specializing in drone-based LiDAR surveying, aerial mapping, and advanced GIS solutions.</p>
            <p>We transform complex terrain and infrastructure data into accurate, actionable insights that drive better planning, design, and decision-making.</p>
            <a className="button blue" href="#technology">Learn More About Us <b>→</b></a>
          </div>
          <div className="stat-grid">
            <div><i>♧</i><strong>500+</strong><small>Projects Supported</small></div>
            <div><i>♙</i><strong>250+</strong><small>Enterprise Missions</small></div>
            <div><i>✣</i><strong>50+</strong><small>Mission Configurations</small></div>
            <div><i>◴</i><strong>98.7%</strong><small>Data Quality Target</small></div>
          </div>
          <div className="about-visual">
            <div className="mini-drone"><i/><i/><b>◆</b></div>
            <div className="scan-cone"/>
            <div className="tablet"><div className="tablet-map"><i/><i/><i/></div><span>LIVE TERRAIN MODEL</span></div>
          </div>
        </div>
      </section>

      <section className="services dark-section" id="services">
        <div className="wrap services-layout">
          <div className="services-intro"><p className="eyebrow">OUR SERVICES</p><h2>Comprehensive Geospatial Solutions</h2><p>From field capture to final deliverables, one connected geospatial workflow.</p></div>
          <div className="service-grid">
            {services.map(([icon,title,text]) => <article className="service-card" key={title}><i>{icon}</i><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Request ${title}`}>→</a></article>)}
          </div>
        </div>
      </section>

      <section className="technology light-section" id="technology">
        <div className="wrap tech-layout">
          <div className="tech-heading"><p className="eyebrow">OUR TECHNOLOGY</p><h2>Advanced Equipment.<br/>Intelligent Workflows.</h2></div>
          <div className="tech-cards">{tech.map(([,title,sub],index) => <div key={title}><i className={`equipment-image equipment-${index+1}`} aria-hidden="true"/><strong>{title}</strong><small>{sub}</small></div>)}</div>
        </div>
        <div className="wrap tech-feature">
          <div className="tech-drone"><span className="rotor rleft"/><span className="rotor rright"/><i/><b>SC</b></div>
          <div className="tech-points"><div><i>⌾</i><span><b>High-accuracy sensors</b><small>Centimeter-level data</small></span></div><div><i>✣</i><span><b>AI-powered processing</b><small>Faster insights</small></span></div><div><i>⌁</i><span><b>Cloud-based workflows</b><small>Secure &amp; scalable</small></span></div><div><i>▣</i><span><b>Multi-platform delivery</b><small>Web, mobile &amp; desktop</small></span></div></div>
        </div>
      </section>

      <section className="industry-band" id="industries">
        <div className="wrap industry-layout">
          <div><p className="eyebrow">INDUSTRIES WE SERVE</p><h2>Empowering Industries<br/>with Geospatial Intelligence</h2></div>
          <div className="industry-grid">{industries.map(([icon,title,sub]) => <div key={title}><i>{icon}</i><b>{title}</b><small>{sub}</small></div>)}</div>
        </div>
      </section>

      <section className="workflow light-section" id="workflow">
        <div className="wrap workflow-layout">
          <div><p className="eyebrow">OUR WORKFLOW</p><h2>From Data to Decisions</h2></div>
          <div className="workflow-grid">{workflow.map(([num,title,text],index)=><article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><i className={`flow-image f${index+1}`}/>{index<workflow.length-1 && <b>→</b>}</article>)}</div>
        </div>
      </section>

      <section className="coverage-cta" id="coverage">
        <div className="wrap cta-grid">
          <div><p className="eyebrow">LET&apos;S WORK TOGETHER</p><h2>Ready to Elevate Your Projects<br/>with Precision Data?</h2><p>Talk to SpaceChamps about the drone and geospatial solution that fits your mission.</p><div><a className="button blue" href="mailto:info@spacechamps.com">Request a Survey</a><a className="button outline" href="#contact">Get a Consultation ↗</a></div></div>
          <div className="contact-summary" id="contact"><h3>Contact SpaceChamps</h3><a href="tel:+12025550147"><i>⌕</i> +1 (202) 555-0147</a><a href="mailto:info@spacechamps.com"><i>@</i> info@spacechamps.com</a><p><i>⌖</i> Regional operations across<br/>Africa &amp; Asia</p></div>
          <div className="world-map" aria-label="SpaceChamps coverage across Africa and Asia"><span className="africa-dot"/><span className="asia-dot"/><i>AFRICA</i><b>ASIA</b></div>
        </div>
      </section>

      <section className="map-strip">
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
