import "../Styles/Contact.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {

    return (
        <>
            <section className="contact">
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                    <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                </div>

                <div className="contact-body">
                    <div className="contact-left">
                        <div className="contact-card">
                            <h2>Contact Details</h2>
                            <div className="contact-item">
                                <div className="icon blue"> <a href="mailto:musicaramesh31102002@gmail.com"><FiMail /></a></div>
                                <div className="text">
                                    <h4>Email</h4>
                                    <span>musicaramesh31102002@gmail.com</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon green"><FaWhatsapp /></div>
                                <div className="text">
                                    <h4>WhatsApp</h4>
                                    <span>8610766168</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon purple">
                                    <IoLocationOutline />
                                </div>
                                <div className="text">
                                    <h4>Location</h4>
                                    <span>Salem, Tamil Nadu, India</span>
                                </div>
                            </div>
                        </div>

                        {/* CONNECT */}
                        <div className="contact-card">
                            <h2>Connect</h2>
                            <div className="socials">
                                <div className="socialss blue"><FaLinkedinIn /></div>
                                <div className="socialss gray"><FaGithub /></div>
                                <div className="socialss pink"><FaInstagram /></div>
                                <div className="socialss sky"><FaTwitter /></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="contact-right">
                        <h2>Send me a message</h2>

                        <div className="form">
                            <label>Name</label>
                            <input type="text" placeholder="Your name"/>

                            <label>Email</label>
                            <input type="email" placeholder="your@email.com" />

                            <label>Message</label>
                            <textarea placeholder="Tell me about your project..."></textarea>

                            <button className="Con-btn"><LuSend /> Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
