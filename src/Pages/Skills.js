import "../Styles/Skill.css";

import { MdOutlineCode } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
// import { FaGitAlt } from "react-icons/fa";
// import { SiPostman } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
import { FaComments, FaSyncAlt, FaClock } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const techSkills = [
    { icon: <ImHtmlFive />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <RiJavascriptFill />, label: "JavaScript" },
    { icon: <FaReact />, label: "React" },
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <FaNode />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
];

const techBars = [
    { label: "HTML / CSS", pct: 90 },
    { label: "JavaScript", pct: 70 },
    { label: "React", pct: 80 },
    { label: "Next.js", pct: 70 },
    { label: "Node / Express", pct: 70 },
    { label: "MongoDB", pct: 65 },
];

const toolSkills = [
    { label: "Git", pct: 85 },
    { label: "GitHub", pct: 82 },
    { label: "Postman", pct: 70 },
];

const softSkills = [
    {
        icon: <FaComments />,
        name: "Communication",
        desc: "Clear, concise and collaborative across teams",
    },
    {
        icon: <FaSyncAlt />,
        name: "Adaptability",
        desc: "Quick to pick up new tools and shifting priorities",
    },
    {
        icon: <FaClock />,
        name: "Time Management",
        desc: "Delivers consistently under tight deadlines",
    },
];

export default function Skills() {
    return (
        <div className="Skill">

            {/* ── Header ── */}
            <div className="Skill-header">
                <p className="skill-eyebrow">What I bring</p>
                <h2 className="about-h2">
                    My <span className="span">Skills</span>
                </h2>
            </div>

            <div className="Skill-Container">

                {/* ══ Technical Skills ══ */}
                <div className="skillbox skillbox--tech">

                    <div className="skill-flex">
                        <div className="skill-icon-wrap skill-icon-wrap--cyan">
                            <MdOutlineCode />
                        </div>
                        <h3>Technical Skills</h3>
                        <span className="skill-count">{techSkills.length} techs</span>
                    </div>

                    {/* Pill tags */}
                    <div className="box-skill">
                        {techSkills.map((s) => (
                            <span className="skill-pill" key={s.label}>
                                <span className="pill-icon">{s.icon}</span>
                                {s.label}
                            </span>
                        ))}
                    </div>

                    {/* Proficiency bars */}
                    <div className="skill-divider" />
                    <p className="bar-section-label">Proficiency</p>

                    {techBars.map((b, i) => (
                        <div className="bar-row" key={b.label}>
                            <span className="bar-label">{b.label}</span>
                            <div className="bar-track">
                                <div
                                    className="bar-fill"
                                    style={{
                                        width: `${b.pct}%`,
                                        animationDelay: `${0.1 + i * 0.12}s`,
                                    }}
                                />
                            </div>
                            <span className="bar-pct">{b.pct}%</span>
                        </div>
                    ))}
                </div>

                {/* ══ Tools & Technologies ══ */}
                <div className="skillbox skillbox--tools">

                    <div className="skill-flex">
                        <div className="skill-icon-wrap skill-icon-wrap--purple">
                            <IoColorPaletteOutline />
                        </div>
                        <h3>Tools &amp; Technologies</h3>
                        <span className="skill-count">{toolSkills.length} tools</span>
                    </div>

                    {toolSkills.map((t, i) => (
                        <div className="bar-row" key={t.label}>
                            <span className="bar-label">{t.label}</span>
                            <div className="bar-track">
                                <div
                                    className="bar-fill"
                                    style={{
                                        width: `${t.pct}%`,
                                        animationDelay: `${0.15 + i * 0.12}s`,
                                    }}
                                />
                            </div>
                            <span className="bar-pct">{t.pct}%</span>
                        </div>
                    ))}
                </div>

                {/* ══ Soft Skills ══ */}
                <div className="skillbox skillbox--soft">

                    <div className="skill-flex">
                        <div className="skill-icon-wrap skill-icon-wrap--green">
                            <LuUsers />
                        </div>
                        <h3>Soft Skills</h3>
                    </div>

                    <div className="box-skillS">
                        {softSkills.map((s) => (
                            <div className="soft-item" key={s.name}>
                                <div className="soft-icon-box">{s.icon}</div>
                                <div className="soft-text">
                                    <p className="soft-name">{s.name}</p>
                                    <p className="soft-desc">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}