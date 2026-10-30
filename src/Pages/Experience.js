import "../Styles/Experience.css"

export default function Experience() {
    return (
        <div className='Experience'>
            <div className="exp-title-wrap">
                <span className="exp-label">Career Path</span>
                <h1 className="about-h2">My <span className='span'>Experience</span></h1>
                <p className="exp-subtitle">Building production-grade applications from the ground up</p>
            </div>

            <div className="exp-timeline">

                {/* Timeline line */}
                <div className="timeline-line"></div>

                {/* Junior Developer */}
                <div className="timeline-item timeline-item--left">
                    <div className="timeline-dot">
                        <div className="dot-inner"></div>
                    </div>
                    <div className="exp-card">
                        <div className="card-glow"></div>
                        <div className="card-badge">Current Role</div>
                        <div className="card-header">
                            <div className="card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <div className="card-title-group">
                                <h2 className='exp-h2'>Junior Web Developer</h2>
                                <h3 className='exp-h3'>MPeoples Business Solution Pvt Ltd</h3>
                            </div>
                        </div>
                        <div className="card-date">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Jan 2026 – Present
                        </div>

                        <div className='exp-des'>
                            <ul>
                                <li>Developing and maintaining production-level MERN applications.</li>
                                <li>Designing scalable REST APIs with authentication (JWT) and optimized database queries.</li>
                                <li>Improving performance, fixing bugs, and deploying applications to live servers.</li>
                            </ul>
                        </div>
                        
                        <div className="card-tags">
                            <span className="tag">MERN Stack</span>
                            <span className="tag">REST API</span>
                            <span className="tag">JWT</span>
                            <span className="tag">Deployment</span>
                        </div>
                    </div>
                </div>

                {/* Intern */}
                <div className="timeline-item timeline-item--right">
                    <div className="timeline-dot">
                        <div className="dot-inner"></div>
                    </div>
                    <div className="exp-card">
                        <div className="card-glow"></div>
                        <div className="card-header">
                            <div className="card-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <div className="card-title-group">
                                <h2 className='exp-h2'>Full Stack Developer Intern</h2>
                                <h3 className='exp-h3'>MPeoples Business Solution Pvt Ltd</h3>
                            </div>
                        </div>
                        <div className="card-date">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Sep 2025 – Jan 2026
                        </div>
                        <div className='exp-des'>
                            <ul>
                                <li>Developed full-stack web applications using React, Node.js & MongoDB.</li>
                                <li>Built REST APIs and implemented CRUD operations for dynamic data handling.</li>
                                <li>Collaborated in Agile teams to deliver responsive, scalable solutions.</li>
                            </ul>
                        </div>
                        <div className="card-tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDB</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}