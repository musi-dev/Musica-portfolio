import "../Styles/Contact.css";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import React, { useState } from "react";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        const phoneNumber = "918610766168"; // your whatsapp number with country code

        const text = `Hello Musica,%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Message: ${formData.message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappURL, "_blank");

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

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
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>

                            <button
                                type="button"
                                className="Con-btn"
                                onClick={handleSubmit}
                            >
                                <LuSend /> Send Message
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
