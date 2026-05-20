import pic from '../Assets/pic1.jpeg'
import "../Styles/About.css";

export default function About() {
  return (
    <div className="About-section">

      {/* Section heading */}
      <div className="section-heading">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="about-h2">About <span className="span">Me</span></h2>
        <div className="heading-line"></div>
      </div>

      {/* Main content */}
      <section className="about-container">

        {/* Photo */}
        <div className="img-wrapper">
          <div className="img-placeholder">
            <img src={pic} alt="Musica Ramesh" />
          </div>
          {/* Floating badge */}
          <div className="float-badge">
            <span className="float-badge-icon">⚡</span>
            <span>Open to Work</span>
          </div>
        </div>

        {/* Text */}
        <div className="about-text">

          <h3 className="about-role">Frontend Developer <span className="span">&</span> Full Stack Enthusiast</h3>

          <p className="about-para">
            I am <strong>Musica Ramesh</strong>, a B.E. graduate in Electronics and
            Communication Engineering with a strong passion for web development.
            I specialize in building responsive, user-friendly interfaces using
            modern technologies like React, HTML, CSS, and JavaScript.
          </p>

          <p className="about-para">
            Beyond the frontend, I have hands-on experience with Node.js, Express,
            and MongoDB — enabling me to deliver complete full-stack solutions.
            My background in C programming sharpened my problem-solving mindset
            and structured approach to building software.
          </p>

          <p className="about-para">
            I'm continuously learning and staying up-to-date with evolving web
            technologies, driven by a love for creating efficient, modern products.
          </p>

          {/* Skill pills */}
          <div className="about-skills">
            {["React", "JavaScript", "Node.js", "Express", "MongoDB", "CSS"].map((skill) => (
              <span key={skill} className="about-skill-pill">{skill}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat-box">
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat-box">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>
            <div className="stat-box">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}