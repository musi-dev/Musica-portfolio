import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Theme from './Theme';
// import Switch from '../Pages/Themeicon';

export default function Navigationbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Navbar">
            <div className="Nav-head">
                <h1>Portfolio</h1>
            </div>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation List */}
            <div className={`Nav-List ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
                    <li><a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                    <li><a href="#work" onClick={() => setMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    <Theme />
                    {/* <Switch /> */}
                </ul>
            </div>
        </div>
    )
}
