"use client";

import { useEffect, useState, type FormEvent } from "react";

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
  return <span className="brand"><img src="/logo.svg" alt="SpaceChamps logo" className="brand-logo" /><b>Space<span>Champs</span></b></span>;
}

export default function Home() {
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
            {["Home","About","Services","Technology","Industries","Workflow","Coverage","Contact"].map(item => <a key={item} href={["About","Services","Technology","Industries"].includes(item) ? `/${item.toLowerCase()}` : `#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}{!["Home","Contact"].includes(item) && <span>⌄</span>}</a>)}
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
            <div className="hero-buttons"><a className="button blue" href="/services">Our Services <b>→</b></a><a className="button outline" href="#contact">Request a Survey <b>⌖</b></a></div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="drone-stage">
              <span className="pulse p1"/><span className="pulse p2"/><span className="pulse p3"/>
              <span className="drone-glow"/>
              <svg className="drone-svg" viewBox="0 0 400 400" role="img" aria-label="Survey drone with spinning rotors">
                <defs>
                  <linearGradient id="bodyTop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#2a5580" />
                    <stop offset="1" stopColor="#0c2240" />
                  </linearGradient>
                  <linearGradient id="bodyFront" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1a3d5c" />
                    <stop offset="1" stopColor="#0a1d36" />
                  </linearGradient>
                  <linearGradient id="armL" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1e4060" />
                    <stop offset="1" stopColor="#14304d" />
                  </linearGradient>
                  <linearGradient id="armR" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1e4060" />
                    <stop offset="1" stopColor="#14304d" />
                  </linearGradient>
                  <radialGradient id="propDisc" cx="50%" cy="50%">
                    <stop offset="0" stopColor="rgba(56,189,248,0.14)" />
                    <stop offset="0.55" stopColor="rgba(56,189,248,0.07)" />
                    <stop offset="1" stopColor="rgba(56,189,248,0)" />
                  </radialGradient>
                  <radialGradient id="motorRing" cx="50%" cy="45%">
                    <stop offset="0" stopColor="#2a5080" />
                    <stop offset="1" stopColor="#0f2847" />
                  </radialGradient>
                  <filter id="ledGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="domeGlow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ground shadow */}
                <ellipse cx="200" cy="238" rx="105" ry="16" fill="rgba(0,0,0,0.28)" style={{filter:'blur(12px)'}} />

                {/* Arms */}
                <g>
                  <line x1="165" y1="175" x2="90" y2="112" stroke="url(#armL)" strokeWidth="15" strokeLinecap="round" />
                  <line x1="235" y1="175" x2="310" y2="112" stroke="url(#armR)" strokeWidth="15" strokeLinecap="round" />
                  <line x1="165" y1="205" x2="90" y2="275" stroke="url(#armL)" strokeWidth="15" strokeLinecap="round" />
                  <line x1="235" y1="205" x2="310" y2="275" stroke="url(#armR)" strokeWidth="15" strokeLinecap="round" />
                  {/* Arm highlight edges */}
                  <line x1="165" y1="172" x2="90" y2="109" stroke="rgba(86,171,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="235" y1="172" x2="310" y2="109" stroke="rgba(86,171,255,0.12)" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Body */}
                <rect x="157" y="163" width="86" height="54" rx="11" fill="url(#bodyTop)" stroke="rgba(86,171,255,0.45)" strokeWidth="1.5" />
                {/* Body front face (depth) */}
                <rect x="157" y="205" width="86" height="12" rx="3" fill="url(#bodyFront)" stroke="rgba(86,171,255,0.25)" strokeWidth="0.75" />
                {/* Panel lines */}
                <line x1="167" y1="175" x2="233" y2="175" stroke="rgba(56,189,248,0.28)" strokeWidth="0.8" />
                <line x1="167" y1="203" x2="233" y2="203" stroke="rgba(56,189,248,0.2)" strokeWidth="0.6" />
                <line x1="200" y1="166" x2="200" y2="215" stroke="rgba(56,189,248,0.12)" strokeWidth="0.5" />

                {/* Sensor dome */}
                <circle cx="200" cy="188" r="11" fill="#08182e" stroke="rgba(56,189,248,0.7)" strokeWidth="1.5" />
                <circle cx="200" cy="188" r="5" fill="#0c2a4a" stroke="rgba(56,189,248,0.4)" strokeWidth="0.8" />
                <circle cx="200" cy="188" r="2.2" fill="#7dd3fc" filter="url(#domeGlow)" />

                {/* Front LEDs */}
                <rect x="161" y="168" width="5" height="5" rx="1.5" fill="#22d3ee" filter="url(#ledGlow)" />
                <rect x="234" y="168" width="5" height="5" rx="1.5" fill="#22d3ee" filter="url(#ledGlow)" />
                {/* Rear LEDs */}
                <rect x="161" y="208" width="5" height="5" rx="1.5" fill="#f43f5e" filter="url(#ledGlow)" opacity="0.85" />
                <rect x="234" y="208" width="5" height="5" rx="1.5" fill="#f43f5e" filter="url(#ledGlow)" opacity="0.85" />

                {/* Antenna */}
                <line x1="200" y1="163" x2="200" y2="144" stroke="#3a6d94" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="200" cy="142" r="3.5" fill="#22d3ee" filter="url(#ledGlow)" />

                {/* Camera gimbal */}
                <rect x="192" y="220" width="16" height="14" rx="4" fill="#0a1829" stroke="rgba(86,171,255,0.5)" strokeWidth="1.2" />
                <circle cx="200" cy="227" r="5.5" fill="#06101e" stroke="rgba(56,189,248,0.6)" strokeWidth="1.2" />
                <circle cx="200" cy="227" r="2.2" fill="#38bdf8" />

                {/* Landing gear */}
                <g stroke="#2a4a68" strokeWidth="3.5" strokeLinecap="round" fill="none">
                  <line x1="165" y1="195" x2="150" y2="232" />
                  <line x1="150" y1="232" x2="138" y2="232" />
                  <line x1="235" y1="195" x2="250" y2="232" />
                  <line x1="250" y1="232" x2="262" y2="232" />
                </g>

                {/* Motor housings */}
                <circle cx="90" cy="112" r="17" fill="url(#motorRing)" stroke="rgba(86,171,255,0.5)" strokeWidth="1.5" />
                <circle cx="90" cy="112" r="8" fill="#0a1829" stroke="rgba(86,171,255,0.3)" strokeWidth="1" />
                <circle cx="90" cy="112" r="3" fill="rgba(86,171,255,0.15)" />

                <circle cx="310" cy="112" r="17" fill="url(#motorRing)" stroke="rgba(86,171,255,0.5)" strokeWidth="1.5" />
                <circle cx="310" cy="112" r="8" fill="#0a1829" stroke="rgba(86,171,255,0.3)" strokeWidth="1" />
                <circle cx="310" cy="112" r="3" fill="rgba(86,171,255,0.15)" />

                <circle cx="90" cy="275" r="17" fill="url(#motorRing)" stroke="rgba(86,171,255,0.4)" strokeWidth="1.5" />
                <circle cx="90" cy="275" r="8" fill="#081829" stroke="rgba(86,171,255,0.25)" strokeWidth="1" />
                <circle cx="90" cy="275" r="3" fill="rgba(86,171,255,0.12)" />

                <circle cx="310" cy="275" r="17" fill="url(#motorRing)" stroke="rgba(86,171,255,0.4)" strokeWidth="1.5" />
                <circle cx="310" cy="275" r="8" fill="#081829" stroke="rgba(86,171,255,0.25)" strokeWidth="1" />
                <circle cx="310" cy="275" r="3" fill="rgba(86,171,255,0.12)" />

                {/* Propellers — 3 blades each, spinning */}
                <g className="rotor">
                  <circle cx="90" cy="112" r="52" fill="url(#propDisc)" />
                  <ellipse cx="90" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" />
                  <ellipse cx="90" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(60 90 112)" />
                  <ellipse cx="90" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(120 90 112)" />
                </g>
                <g className="rotor rev">
                  <circle cx="310" cy="112" r="52" fill="url(#propDisc)" />
                  <ellipse cx="310" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" />
                  <ellipse cx="310" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(60 310 112)" />
                  <ellipse cx="310" cy="112" rx="3.5" ry="24" fill="rgba(200,230,255,0.5)" transform="rotate(120 310 112)" />
                </g>
                <g className="rotor rev">
                  <circle cx="90" cy="275" r="52" fill="url(#propDisc)" />
                  <ellipse cx="90" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" />
                  <ellipse cx="90" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(60 90 275)" />
                  <ellipse cx="90" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(120 90 275)" />
                </g>
                <g className="rotor">
                  <circle cx="310" cy="275" r="52" fill="url(#propDisc)" />
                  <ellipse cx="310" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" />
                  <ellipse cx="310" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(60 310 275)" />
                  <ellipse cx="310" cy="275" rx="3.5" ry="24" fill="rgba(200,230,255,0.4)" transform="rotate(120 310 275)" />
                </g>
              </svg>
              <div className="drone-scan"/>
            </div>
          </div>
        </div>
        <div className="wrap proof-row">
          <div><i>⌾</i><span><b>High Accuracy</b><small>Centimeter-level precision</small></span></div>
          <div><i>◈</i><span><b>Advanced Technology</b><small>LiDAR, AI &amp; cloud processing</small></span></div>
          <div><i>◎</i><span><b>Global Reach</b><small>Projects across Southeast Asia &amp; the Middle East</small></span></div>
          <div><i>♙</i><span><b>Trusted by Leaders</b><small>Government &amp; enterprise clients</small></span></div>
        </div>
      </section>

      <section className="about light-section" id="about">
        <div className="wrap about-panel">
          <div className="about-copy" data-reveal="left">
            <p className="eyebrow">ABOUT SPACECHAMPS</p>
            <h2>Precision Data.<br/>Smarter Decisions.<br/><span>Stronger Infrastructure.</span></h2>
            <p>For over <strong>14 years</strong>, SpaceChamps has been a trusted leader in drone-based LiDAR, aerial mapping, and geospatial intelligence — empowering governments, engineering firms, and enterprises to build with confidence.</p>
            <p>Since 2012, we have completed thousands of missions across Africa and Asia, combining deep field expertise with cutting-edge hardware and AI-powered processing to capture reality at centimeter-level precision.</p>
            <p>We turn complex terrain and infrastructure data into decision-ready intelligence — accelerating planning, design, and delivery on the projects that shape our world.</p>
            <div className="about-capabilities"><span>LiDAR acquisition</span><span>Aerial mapping</span><span>GIS intelligence</span><span>3D modelling</span><span>Data processing</span></div>
            <a className="button blue" href="#technology">Explore Our Technology <b>→</b></a>
          </div>
          <div className="about-media" data-reveal="right">
            <img src="/equipment/zenmuse-l2-field.jpg" alt="Survey operator flying a LiDAR-equipped drone in mountainous terrain" loading="lazy" />
            <div className="about-photo-copy"><span>FIELD-TO-INSIGHT · EST. 2012</span><strong>Capture reality.<br/>Deliver certainty.</strong></div>
            <div className="about-quality"><i>LIVE</i><b data-count="98.7" data-decimals="1" data-suffix="%">0</b><small>Data quality target</small></div>
          </div>
        </div>
        <div className="wrap about-stats" data-reveal-group>
          <article><span>01</span><strong data-count="14" data-suffix="+">0</strong><small>Years of experience</small></article>
          <article><span>02</span><strong data-count="500" data-suffix="+">0</strong><small>Projects delivered</small></article>
          <article><span>03</span><strong data-count="250" data-suffix="+">0</strong><small>Enterprise clients</small></article>
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
          <div className="service-marquee" data-reveal>
            <div className="service-track">
              {[...services, ...services].map(([icon,title,text], i) => <article className="service-card" key={i}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
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
          <div data-reveal="left"><p className="eyebrow">LET&apos;S WORK TOGETHER</p><h2>Ready to Elevate Your Projects<br/>with <span>Precision Data?</span></h2><p>Talk to SpaceChamps about the drone and geospatial solution that fits your mission.</p><div className="cta-actions"><button type="button" className="button blue" onClick={() => { setFormStatus("idle"); setModalOpen(true); }}>Request a Survey</button></div></div>
          <div className="contact-summary" id="contact" data-reveal><h3>Contact SpaceChamps</h3><a href="tel:+6283852094053"><i>⌕</i> +62 838-5209-4053</a><a href="mailto:engwarsame16@gmail.com"><i>@</i> engwarsame16@gmail.com</a><p><i>⌖</i> Regional operations across<br/>Indonesia &amp; Qatar</p></div>
          <div className="world-map" aria-label="SpaceChamps coverage across Southeast Asia and Middle East" data-reveal="right"><span className="africa-dot"/><span className="asia-dot"/><i>SE ASIA</i><b>MIDDLE EAST</b></div>
        </div>
      </section>

      <section className="locations" id="locations" data-reveal>
        <div className="wrap">
          <div className="locations-head" data-reveal="left">
            <p className="eyebrow">OUR LOCATIONS</p>
            <h2>Regional <span>Operations</span></h2>
            <p>Serving clients across two continents with dedicated regional teams.</p>
          </div>
          <div className="locations-grid">
            <article className="location-card">
              <div className="location-map"><iframe title="SpaceChamps — Jakarta, Indonesia" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=106.8057%2C-6.2188%2C106.8257%2C-6.1988&amp;layer=mapnik&amp;marker=-6.2088%2C106.8157"/></div>
              <div className="location-info">
                <span className="location-region">ASIA</span>
                <h3>Jakarta, Indonesia</h3>
                <p>Jl. Sudirman No. 52, Jakarta Selatan 12190, Indonesia</p>
                <a href="https://www.openstreetmap.org/?mlat=-6.2088&amp;mlon=106.8157#map=15/-6.2088/106.8157" target="_blank" rel="noreferrer">Open Map ↗</a>
              </div>
            </article>
            <article className="location-card">
              <div className="location-map"><iframe title="SpaceChamps — Doha, Qatar" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=51.5010%2C25.2604%2C51.5610%2C25.3104&amp;layer=mapnik&amp;marker=25.2854%2C51.5310"/></div>
              <div className="location-info">
                <span className="location-region">ASIA</span>
                <h3>Doha, Qatar</h3>
                <p>Al Corniche Street, Doha, Qatar</p>
                <a href="https://www.openstreetmap.org/?mlat=25.2854&amp;mlon=51.5310#map=15/25.2854/51.5310" target="_blank" rel="noreferrer">Open Map ↗</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-grid">
          <div><Brand/><p>Advanced drone, LiDAR, and geospatial solutions for a smarter, more connected world.</p></div>
          <div><h4>Quick Links</h4><a href="/">Home</a><a href="/about">About Us</a><a href="/services">Services</a><a href="/technology">Technology</a></div>
          <div><h4>Industries</h4><a href="/industries">Government</a><a href="/industries">Engineering</a><a href="/industries">Construction</a><a href="/industries">Mining</a></div>
          <div><h4>Services</h4><a href="/services">LiDAR Surveys</a><a href="/services">Aerial Mapping</a><a href="/services">3D Modelling</a><a href="/services">GIS Solutions</a></div>
          <div><h4>Follow Us</h4><div className="socials"><a href="#contact" aria-label="LinkedIn">in</a><a href="#contact" aria-label="X">𝕏</a></div></div>
        </div>
        <div className="wrap copyright"><span>© 2026 SpaceChamps. All rights reserved.</span><span>Precision in every point.</span></div>
      </footer>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">✕</button>
            <h3>Request a Survey</h3>
            <p>Tell us about your project and our team will get back to you shortly.</p>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Full name" required />
              <input name="email" type="email" placeholder="Email address" required />
              <input name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Project details, location, timeline…" rows={4} required />
              <button className="button blue" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending…" : "Send Message"}</button>
              {formStatus === "sent" && <p className="form-success">✓ Thank you! Your message has been sent to our team.</p>}
              {formStatus === "error" && <p className="form-error">Something went wrong. Please email us directly at engwarsame16@gmail.com</p>}
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
