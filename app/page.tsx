"use client";

import { useState } from "react";

const services = [
  { n: "01", title: "LiDAR surveying", text: "High-density point clouds and precise elevation data for engineering-grade decisions.", meta: "Point clouds · DTM · DSM" },
  { n: "02", title: "Aerial mapping", text: "Survey-ready orthomosaics and photogrammetric reconstruction across complex sites.", meta: "Orthomosaic · 3D mesh" },
  { n: "03", title: "Topographical surveys", text: "Detailed terrain, contour and land intelligence for planning and design teams.", meta: "Contours · GNSS control" },
  { n: "04", title: "Infrastructure inspection", text: "Safer, repeatable inspection of corridors, structures and industrial assets.", meta: "Road · Rail · Power" },
  { n: "05", title: "Mining intelligence", text: "Stockpile volumes, pit progression and operational terrain analysis at speed.", meta: "Volumes · Progress" },
  { n: "06", title: "Long-range VTOL", text: "Large-area missions for remote projects where endurance and access matter.", meta: "BVLOS-ready · Remote" },
];

const projects = [
  { type: "CORRIDOR", title: "Highway alignment intelligence", stat: "240 km", theme: "p1" },
  { type: "MINING", title: "Volumetric site monitoring", stat: "±3 cm", theme: "p2" },
  { type: "AGRICULTURE", title: "Regional crop assessment", stat: "18,600 ha", theme: "p3" },
];

const workflow = [
  ["01", "Mission planning", "Scope, risk, control and flight design."],
  ["02", "Data acquisition", "LiDAR and high-resolution imagery capture."],
  ["03", "Processing", "Point-cloud classification and reconstruction."],
  ["04", "GIS analysis", "Spatial interpretation for project teams."],
  ["05", "Delivery", "Models, maps, reports and ready-to-use data."],
];

const technology = {
  "UAV platforms": [["PLATFORM", "DJI Matrice systems"], ["ENDURANCE", "Long-range VTOL"], ["POSITIONING", "RTK / PPK GNSS"], ["MISSIONS", "Large-area capture"]],
  Sensors: [["LIDAR", "Zenmuse L2 · L3"], ["IMAGING", "High-resolution RGB"], ["RETURNS", "Multi-return capture"], ["OUTPUT", "Dense point clouds"]],
  Processing: [["MODELS", "DTM · DSM · 3D mesh"], ["MAPPING", "Orthomosaic & contours"], ["ANALYSIS", "GIS-ready datasets"], ["QUALITY", "Survey-grade QA"]],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTech, setActiveTech] = useState<keyof typeof technology>("UAV platforms");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="SpaceChamps home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>SPACE<span>CHAMPS</span></span>
        </a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[["About","about"],["Services","services"],["Technology","technology"],["Industries","industries"],["Projects","projects"],["Coverage","coverage"]].map(([label,id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <b>↗</b></a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="terrain" aria-hidden="true"><div/><div/><div/><div/></div>
        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Geospatial intelligence · Africa &amp; Asia</div>
            <h1>See the terrain.<br/><em>Know what&apos;s next.</em></h1>
            <p>High-precision LiDAR surveying, aerial mapping and 3D geospatial intelligence for the projects shaping tomorrow.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#services">Explore capabilities <b>↗</b></a>
              <a className="btn ghost" href="#contact">Request a survey</a>
            </div>
            <div className="signal-row"><span>LiDAR</span><span>GNSS</span><span>GIS</span><span>PHOTOGRAMMETRY</span><span>VTOL</span></div>
          </div>
          <div className="scan-panel" aria-label="Live terrain scan visualization">
            <div className="scan-top"><span><i/> LIVE TERRAIN SCAN</span><b>SC-24.611°</b></div>
            <div className="scan-view">
              <div className="cross x1"/><div className="cross x2"/>
              <div className="drone"><span>◆</span><i/><i/></div>
              <div className="beam" />
              <div className="topography t1"/><div className="topography t2"/><div className="topography t3"/>
              <div className="scanline" />
              <div className="coord c1">34° 12&apos; 06.4&quot; E</div><div className="coord c2">ALT 142.8 M</div>
            </div>
            <div className="scan-data"><div><small>ACCURACY</small><strong>± 2.4 <i>cm</i></strong></div><div><small>POINT DENSITY</small><strong>240 <i>pts/m²</i></strong></div><div><small>STATUS</small><strong className="good">NOMINAL</strong></div></div>
          </div>
        </div>
        <div className="hero-foot shell"><span>Scroll to explore</span><i/><div><b>AFRICA</b> 04:22:08 &nbsp;·&nbsp; <b>ASIA</b> 09:22:08</div></div>
      </section>

      <section className="intro shell" id="about">
        <div className="section-tag">01 / THE COMPANY</div>
        <div className="intro-grid">
          <h2>Ground truth,<br/><em>elevated.</em></h2>
          <div>
            <p className="lead">SpaceChamps unites professional surveying expertise with advanced airborne systems to turn complex terrain into clear, actionable intelligence.</p>
            <p>From a single construction site to a cross-country corridor, our survey engineers, pilots and GIS specialists deliver dependable data built for real-world decisions.</p>
            <a className="text-link" href="#technology">Discover our technology <b>→</b></a>
          </div>
        </div>
        <div className="metrics">
          <div><strong>±2<sup>cm</sup></strong><span>Survey-grade<br/>accuracy</span></div>
          <div><strong>2</strong><span>Continents<br/>of operation</span></div>
          <div><strong>10k<sup>+</sup></strong><span>Hectares mapped<br/>at scale</span></div>
          <div><strong>360°</strong><span>Project intelligence<br/>from field to finish</span></div>
        </div>
      </section>

      <section className="coverage" id="coverage">
        <div className="shell coverage-grid">
          <div className="coverage-copy">
            <div className="section-tag light">02 / REGIONAL REACH</div>
            <h2>One connected<br/><em>operating field.</em></h2>
            <p>Supporting governments, engineering teams and industry leaders with field-ready operations across Africa and Asia.</p>
            <ul><li>Remote-area deployment</li><li>Large-scale mapping</li><li>Local project coordination</li><li>International data standards</li></ul>
          </div>
          <div className="map" role="img" aria-label="SpaceChamps operations across Africa and Asia">
            <div className="map-grid"/>
            <div className="continent africa"><b>AFRICA</b><span>ACTIVE REGION</span></div>
            <div className="continent asia"><b>ASIA</b><span>ACTIVE REGION</span></div>
            <div className="route r1"/><div className="route r2"/>
            <i className="pin pin1"/><i className="pin pin2"/><i className="pin pin3"/><i className="pin pin4"/><i className="pin pin5"/>
            <div className="map-note"><span>●</span> MULTI-REGION OPERATIONS</div>
          </div>
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="section-head"><div><div className="section-tag">03 / CAPABILITIES</div><h2>Precision from<br/><em>every angle.</em></h2></div><p>A complete geospatial service stack—from airborne capture to decision-ready engineering deliverables.</p></div>
        <div className="service-grid">
          {services.map((s) => <article className="service-card" key={s.n}><span>{s.n}</span><div className="service-icon"><i/><i/><i/></div><h3>{s.title}</h3><p>{s.text}</p><small>{s.meta}</small><b>↗</b></article>)}
        </div>
      </section>

      <section className="technology" id="technology">
        <div className="shell tech-grid">
          <div className="tech-copy">
            <div className="section-tag light">04 / TECHNOLOGY</div>
            <h2>Built for the<br/><em>hardest terrain.</em></h2>
            <p>Enterprise UAV platforms and advanced sensing systems configured for accuracy, range and dependable field performance.</p>
            <div className="tech-tabs">{(Object.keys(technology) as Array<keyof typeof technology>).map((tab)=><button key={tab} className={activeTech === tab ? "active" : ""} onClick={()=>setActiveTech(tab)}>{tab}</button>)}</div>
            <div className="specs">{technology[activeTech].map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>)}</div>
          </div>
          <div className="uav-stage">
            <div className="radar"><i/><i/><i/></div>
            <div className="uav"><i className="arm a1"/><i className="arm a2"/><i className="arm a3"/><i className="arm a4"/><span className="motor m1"/><span className="motor m2"/><span className="motor m3"/><span className="motor m4"/><b>SC</b><em/></div>
            <div className="uav-label l1">01 <b>RTK POSITIONING</b></div><div className="uav-label l2">02 <b>L2 LiDAR PAYLOAD</b></div><div className="uav-label l3">03 <b>OMNIDIRECTIONAL SENSING</b></div>
          </div>
        </div>
      </section>

      <section className="process shell">
        <div className="section-head"><div><div className="section-tag">05 / HOW WE WORK</div><h2>From flight plan to<br/><em>field intelligence.</em></h2></div><p>A controlled, transparent workflow that keeps quality visible at every stage.</p></div>
        <div className="timeline">{workflow.map((w) => <div key={w[0]}><span>{w[0]}</span><i/><h3>{w[1]}</h3><p>{w[2]}</p></div>)}</div>
      </section>

      <section className="industries" id="industries">
        <div className="shell">
          <div className="section-tag light">06 / INDUSTRIES</div>
          <div className="industry-title"><h2>Intelligence that moves<br/><em>industries forward.</em></h2><div className="industry-list">{["Infrastructure & construction","Mining & resources","Agriculture & environment","Energy & utilities","Government & urban planning"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><i>↗</i></div>)}</div></div>
        </div>
      </section>

      <section className="projects shell" id="projects">
        <div className="section-head"><div><div className="section-tag">07 / SELECTED MISSIONS</div><h2>Data with a<br/><em>destination.</em></h2></div><p>Representative mission profiles engineered for safer, faster and more confident project delivery.</p></div>
        <div className="project-grid">{projects.map((p)=><article className={`project ${p.theme}`} key={p.title}><div className="project-visual"><div className="contours"/><div className="project-scan"/><span>{p.stat}</span></div><small>{p.type}</small><h3>{p.title}</h3><a href="#contact">View mission profile →</a></article>)}</div>
      </section>

      <section className="value">
        <div className="shell value-grid"><div><div className="section-tag light">WHY SPACECHAMPS</div><h2>Advanced technology.<br/>Accurate data.<br/><em>Better decisions.</em></h2></div><div className="checks">{["High-precision surveying","Faster field acquisition","Reduced project exposure","Safe drone operations","Engineering-ready outputs","Remote-area capability","Advanced LiDAR systems","Professional GIS expertise"].map(x=><div key={x}><span>✓</span>{x}</div>)}</div></div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-panel">
          <div><div className="section-tag light">START A PROJECT</div><h2>Bring your project<br/><em>into focus.</em></h2><p>Tell us where you&apos;re working and what you need to know. Our geospatial team will help shape the right mission.</p><div className="contact-detail"><span>REGIONAL COVERAGE</span><b>Africa · Asia</b></div><div className="contact-detail"><span>GENERAL ENQUIRIES</span><b>projects@spacechamps.com</b></div></div>
          {submitted ? <div className="form-success" role="status" aria-live="polite"><span>✓</span><h3>Project brief received.</h3><p>Thank you. A SpaceChamps geospatial specialist will review your requirements and respond shortly.</p><button type="button" onClick={()=>setSubmitted(false)}>Send another enquiry →</button></div> : <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}>
            <label>Name<input required placeholder="Your full name" /></label>
            <label>Work email<input required type="email" placeholder="name@company.com" /></label>
            <div className="form-row"><label>Region<select defaultValue=""><option value="" disabled>Select region</option><option>Africa</option><option>Asia</option><option>Other</option></select></label><label>Service<select defaultValue=""><option value="" disabled>Select capability</option><option>LiDAR surveying</option><option>Aerial mapping</option><option>Infrastructure inspection</option><option>Other</option></select></label></div>
            <label>Project overview<textarea placeholder="Location, site size, deliverables and timeline…" /></label>
            <button className="btn primary" type="submit">Request a consultation <b>↗</b></button>
          </form>}
        </div>
      </section>

      <footer>
        <div className="shell footer-grid"><div><a className="brand" href="#home"><span className="brand-mark"><i/><i/><i/></span><span>SPACE<span>CHAMPS</span></span></a><p>Advanced drone and geospatial solutions powering smarter development across Africa and Asia.</p></div><div><span>CAPABILITIES</span><a href="#services">LiDAR surveying</a><a href="#services">Aerial mapping</a><a href="#services">Infrastructure inspection</a></div><div><span>COMPANY</span><a href="#about">About</a><a href="#projects">Projects</a><a href="#coverage">Coverage</a></div><div><span>CONNECT</span><a href="#contact">Email</a><a href="#contact">LinkedIn ↗</a><a href="#contact">Request a survey</a></div></div>
        <div className="shell footer-bottom"><span>© 2026 SPACECHAMPS. ALL RIGHTS RESERVED.</span><span>PRECISION IN EVERY POINT.</span></div>
      </footer>
    </main>
  );
}
