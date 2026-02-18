import pic from '../Assets/pic1.jpeg'
import "../Styles/About.css";

export default function About() {
  return (
    <div className="About-section">
      <h2 className="about-h2">About <span className='span'>Me</span></h2>
     
     <section className='about-container'>

        <div className="img-placeholder">
        <img src={pic} alt="img"/>
        </div>
     

        <div className="about-text">
          <p className="about-para">
            I am Musica Ramesh, a Bachelor of Engineering graduate in Electronics and Communication Engineering with a strong passion for web development. I specialize in building responsive and user-friendly web interfaces using modern front-end technologies such as HTML, CSS, JavaScript, and React.
          </p><br />
          <p className="about-para">
            In addition to front-end development, I have foundational experience in Node.js, Express, and MongoDB, enabling me to develop full-stack web applications. My background in C programming has strengthened my problem-solving abilities and structured approach to software development.
          </p><br />

          <p className="about-para">
            I am passionate about creating efficient, modern web solutions and continuously improving my skills to stay up-to-date with evolving web technologies.
          </p>
        </div>
    
       </section>
      </div>
  )
}
