import "../Styles/Skill.css"
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
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaComments, FaSyncAlt, FaClock } from "react-icons/fa";


export default function Skills() {
    return (
        <div className='Skill'>

            <h1 className="about-h2">My <span className='span'>Skills</span></h1>

            <div className="Skill-Container">

                <div className="skillbox">
                    <div className="skill-flex"><span><MdOutlineCode style={{ color: "#2563EB" }} /></span><h3>Technical Skills</h3></div>
                    <div className="box-skill">

                        <div className="skill-space">
                            <span><ImHtmlFive /></span>
                            <span>HTML</span>
                        </div>

                        <div className="skill-space">
                            <span><FaCss3Alt /></span>
                            <span>CSS</span>
                        </div>

                        <div className="skill-space">
                            <span><RiJavascriptFill /></span>
                            <span>JavaScript</span>
                        </div>

                        <div className="skill-space">
                            <span><FaReact /></span>
                            <span>React</span>
                        </div>

                        <div className="skill-space">
                            <span><FaNode /></span>
                            <span>Node.js</span>
                        </div>

                        <div className="skill-space">
                            <span><SiExpress /></span>
                            <span>Express.js</span>
                        </div>

                        <div className="skill-space">
                            <span><SiMongodb /></span>
                            <span>MongoDB</span>
                        </div>

                    </div>

                </div>

                <div className="skillbox">
                    <div className="skill-flex"><span><IoColorPaletteOutline style={{ color: "#9333EA" }} /></span><h3>Tools & Technologies</h3></div>
                    <div className="box-skill">

                        <div className="skill-space">
                            <span><FaGitAlt /></span>
                            <span>Git</span>
                        </div>

                        <div className="skill-space">
                            <span><FaGithub /></span>
                            <span>GitHub</span>
                        </div>

                        <div className="skill-space">
                            <span><SiPostman /></span>
                            <span>Postman</span>
                        </div>

                    </div>

                </div>

                <div className="skillbox">
                    <div className="skill-flex"><span><LuUsers style={{ color: "#16A34A" }} /></span><h3>Soft Skills</h3></div>
                    <div className="box-skillS">

                        <div className="skill-space">
                            <span><FaComments /></span>
                            <span>Communication</span>
                        </div>

                        <div className="skill-space">
                            <span><FaSyncAlt /></span>
                            <span>Adaptability</span>
                        </div>

                        <div className="skill-space">
                            <span><FaClock /></span>
                            <span>Time Management</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
