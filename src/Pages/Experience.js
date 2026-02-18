import "../Styles/Experience.css"

export default function Experience() {
    return (
        <div className='Experience'>
            <h1 className="about-h2">My <span className='span'>Experience</span></h1>
          
          <div className="exp-hole-card">
            <div className='exp-card'>

                {/* Junior Developer */}
                <div>
                    <div className='exp-heading'>
                        <div className="exp-wrap">
                            <h2 className='exp-h2'>Junior Web Developer</h2>
                            <h3 className='exp-h3'>MPeoples Business Solution Pvt Ltd</h3>
                        </div>
                        <p>Feb 2026 – Present</p>
                    </div>

                    <div className='exp-des'>
                        <ul>
                            <li>Developing and maintaining production-level MERN applications.</li>
                            <li>Designing scalable REST APIs with authentication (JWT) and optimized database queries.</li>
                            <li>Improving performance, fixing bugs, and deploying applications to live servers.</li>
                        </ul>
                    </div>
                </div>
            </div>

              <div className='exp-card'>
                {/* Intern */}
                <div>
                    <div className='exp-heading'>
                        <div className="exp-wrap">
                            <h2 className='exp-h2'>Full Stack Developer Intern</h2>
                            <h3 className='exp-h3'>MPeoples Business Solution Pvt Ltd</h3>
                        </div>
                        <p>Sep 2025 – Jan 2026</p>
                    </div>

                    <div className='exp-des'>
                        <ul>
                            <li>Developed full-stack web applications using React, Node.js & MongoDB.</li>
                            <li>Built REST APIs and implemented CRUD operations for dynamic data handling.</li>
                            <li>Collaborated in Agile teams to deliver responsive, scalable solutions.</li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
