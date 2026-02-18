import "../Styles/Project.css"
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import image1 from "../Assets/Netflix.png";
import image2 from "../Assets/Doctorwebsite.png";
import image4 from "../Assets/GymWeb.png";
import image5 from "../Assets/Sareewebsite.png";
import image6 from "../Assets/RegisterForm.png";
import image7 from "../Assets/Youtube.png";

export default function Project() {

  const projects = {
    title: "Featured Projects",
    subtitle: "A selection of my recent work, ranging from web applications to design systems.",
    items: [
      {
        badge: "Web App",
        title: "Saree E-Commerce Website",
        description: "A full-stack saree shopping platform built with Next.js, featuring product listings, cart functionality, secure checkout, user authentication, and admin product management.",
        tech: ["Next.js", "MongoDB", "Razorpay"],
        github: "https://github.com/Musica-R",
        live: "https://e-commerce-three-beta-43.vercel.app/"
      },
      {
        badge: "Website",
        title: "Gym & Fitness Website",
        description: "A responsive gym website showcasing membership plans, trainer details, workout programs, and contact forms with a modern UI design.",
        tech: ["React", "CSS"],
        github: "https://github.com/Musica-R",
        live: "https://muscleforgegym-musi.netlify.app/"
      },
      {
        badge: "Portfolio",
        title: "Doctor Portfolio Website",
        description: "A professional portfolio website for a medical practitioner featuring services offered, appointment booking section, patient testimonials, clinic details, and contact information with a clean and accessible design.",
        tech: ["React", "CSS"],
        github: "https://github.com/Musica-R",
        live: "https://doctor-portfolio-navy.vercel.app/"
      },
      {
        badge: "Web App",
        title: "User Registration System",
        description: "A full-stack user registration system with form validation, secure data storage, and backend API integration. Users can register, and their details are stored and managed efficiently in a MongoDB database.",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/Musica-R",
        live: "https://form-registration-login-123.netlify.app/"
      },
      {
        badge: "Clone Project",
        title: "Netflix Clone",
        description: "A front-end clone of Netflix with movie browsing UI, responsive layout, and interactive design built using pure HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Musica-R",
        live: "https://musinewproject.netlify.app/"
      },
      {
        badge: "Clone Project",
        title: "YouTube Clone",
        description: "A YouTube-inspired video streaming interface built with React, featuring video listing, search functionality, and responsive design.",
        tech: ["React", "CSS"],
        github: "https://github.com/Musica-R",
        live: "https://project-youtubeclone-123.netlify.app/"
      }
    ],
    button: "View Details"
  };

  const images = [image5, image4, image2, image6, image1, image7];

  return (
    <div className='Project'>
      <h1 className="about-h2 for-mar">Latest  <span className='span'>Projects</span></h1>


      <section className="featured">
        <div className="featured-wrapper">

          <div className="projects-grid">
            {projects.items.map((project, index) => (
              <div className="project-card" key={index}>

                {/* image-container */}
                <div className="project-image">
                  <span className="project-badge">{project.badge}</span>
                  <img src={images[index]} alt={project.title} />

                  <div className="project-overlay">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                      <FaGithub />
                    </a>

                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-icon">
                      <FiExternalLink />
                    </a>
                  </div>

                </div>

                {/* body-container */}
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((techItem, i) => (
                      <span key={i}>{techItem}</span>
                    ))}
                  </div>

                  <button className="details-btn">{projects.button}</button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
