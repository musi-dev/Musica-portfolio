import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Home() {

  const typedRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Web Developer", "Full Stack Enthusiast"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => typed.destroy();
    
  }, []);

  return (
    <div className="Home-section">

      <div className="Home-text-container">

        <div>
          <p className="home-para">Hello , This is <span className="text-gradient">Musica</span></p>
          <p className="typing-font"> And I'm a <span ref={typedRef} className="text-gradient"></span></p>
        </div>

        <div className="Home-text">
          <p>As a skilled frontend developer with expertise in React, I create responsive and user-friendly web interfaces. I also have foundational knowledge in Node.js, Express, and MongoDB, enabling me to build full-stack web applications. I am passionate about developing efficient, modern web solutions and continuously improving my skills in both frontend and backend technologies.</p>
        </div>

        <div>
          <div className="social">
            <a href="https://github.com/Musica-R" id="social-link"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/musica-r" id="social-link"><IoLogoLinkedin /></a>
            <a href="mailto:musicaramesh31102002@gmail.com" id="social-link"><IoMdMail /></a>
          </div>
        </div>

      </div>

      <div className="Home-img-container">

        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot" style={{ color: "#ff5f56" }}></span>
              <span className="dot" style={{ color: "#ffbd2e" }}></span>
              <span className="dot" style={{ color: "#27c93f" }}></span>
            </div>
            <pre>
              <code>
                <span style={{ color: "#c586c0" }}>const</span> <span style={{ color: "#8be9fd" }}>developer</span> = {"{"}<br /><br />
                &nbsp;&nbsp;<span style={{ color: "#8be9fd" }}>name</span>: <span style={{ color: "#ce9178" }}>'Musica'</span>,<br /><br />
                &nbsp;&nbsp;<span style={{ color: "#8be9fd" }}>skills</span>: [
                <span style={{ color: "#ce9178" }}>'HTML'</span>,
                <span style={{ color: "#ce9178" }}>'CSS'</span>,
                <span style={{ color: "#ce9178" }}>'React'</span>,
                <span style={{ color: "#ce9178" }}>'Node'</span>,
                <span style={{ color: "#ce9178" }}>'Express'</span>,
                <span style={{ color: "#ce9178" }}>'MongoDB'</span>
                ],<br /><br />
                &nbsp;&nbsp;<span style={{ color: "#8be9fd" }}>hardWorker</span>: <span style={{ color: "#8be9fd" }}>true</span>,<br /><br />
                &nbsp;&nbsp;<span style={{ color: "#dcdcaa" }}>build</span>: <span style={{ color: "#c586c0" }}>function</span>() {"{"}<br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c586c0" }}>return</span> <span style={{ color: "#ce9178" }}>'Awesome Website'</span>;<br /><br />
                &nbsp;&nbsp;{"}"}<br /><br />
                {"};"}
              </code>
            </pre>
          </div>
        </div>
  
      </div>
    </div>
  )
}
