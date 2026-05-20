import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import '../Styles/Home.css';
import { FaLaptopCode, FaBolt, FaTrophy, } from "react-icons/fa";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Web Developer", "Full Stack Enthusiast"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1600,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="Home-section">

      {/* ── LEFT COLUMN ── */}
      <div className="Home-text-container">

        {/* Badge */}
        <div className="availability-badge">
          <span className="badge-dot"></span>
          Available for work
        </div>

        {/* Headline */}
        <div className="headline-block">
          <h1 className="home-para">
            Hello, I'm <span className="text-gradient">Musica</span>
          </h1>
          <p className="typing-font">
            I'm a <span ref={typedRef} className="text-gradient"></span>
          </p>
        </div>

        {/* Bio */}
        <div className="Home-text">
          <p>
            As a skilled frontend developer with expertise in React, I create
            responsive and user-friendly web interfaces. I also have foundational
            knowledge in Node.js, Express, and MongoDB, enabling me to build
            full-stack web applications.
          </p>
        </div>

        {/* Skill tags */}
        <div className="skill-tags">
          {["React", "Node.js", "Express", "MongoDB", "HTML & CSS"].map((s) => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hero-actions">
          <button className="btn-primary">View Projects</button>
          <button className="btn-ghost">Download CV</button>
        </div>

        {/* Socials */}
        <div className="social">
          <a href="https://github.com/Musica-R" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/musica-r" className="social-link" aria-label="LinkedIn">
            <IoLogoLinkedin />
          </a>
          <a href="mailto:musicaramesh31102002@gmail.com" className="social-link" aria-label="Email">
            <IoMdMail />
          </a>
        </div>

      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="Home-img-container">

        {/* Code window */}
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot" style={{ background: "#ff5f57" }}></span>
              <span className="dot" style={{ background: "#febc2e" }}></span>
              <span className="dot" style={{ background: "#28c840" }}></span>
              <span className="code-filename">developer.js</span>
            </div>

            <pre className="code-pre">
              <code>
                <span className="cm">{"// who am i?"}</span>{"\n"}
                <span className="kw">const</span>{" "}
                <span className="var">developer</span> {"= {"}{"\n"}
                {"  "}<span className="var">name</span>:{" "}
                <span className="str">'Musica'</span>,{"\n"}
                {"  "}<span className="var">role</span>:{" "}
                <span className="str">'Frontend Developer'</span>,{"\n"}
                {"  "}<span className="var">skills</span>: [{"\n"}
                {"    "}<span className="str">'HTML'</span>,{" "}
                <span className="str">'CSS'</span>,{" "}
                <span className="str">'React'</span>,{"\n"}
                {"    "}<span className="str">'Node'</span>,{" "}
                <span className="str">'Express'</span>,{" "}
                <span className="str">'MongoDB'</span>{"\n"}
                {"  "}],{"\n"}
                {"  "}<span className="var">hardWorker</span>:{" "}
                <span className="val">true</span>,{"\n"}
                {"  "}<span className="var">openToWork</span>:{" "}
                <span className="val">true</span>,{"\n"}
                {"  "}<span className="fn">build</span>:{" "}
                <span className="kw">function</span>() {"{"}{"\n"}
                {"    "}<span className="kw">return</span>{" "}
                <span className="str">'Awesome Website'</span>;{"\n"}
                {"  "}{"}"}{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>

        {/* Stat cards */}
        <div className="stat-grid">
          {[
            { icon: <FaLaptopCode />, label: "Projects", value: "10+ Built" },
            { icon: <FaBolt />, label: "Stack", value: "Full Stack" },
            { icon: <FaGithub />, label: "GitHub", value: "Active" },
            { icon: <FaTrophy />, label: "Status", value: "Open to Work" },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-emoji">{s.icon}</span>
              <div>
                <p className="stat-label">{s.label}</p>
                <p className="stat-value">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}