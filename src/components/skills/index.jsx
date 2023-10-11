import React from "react";
import "./style.scss";

import Section from "../shared/Section";
import Techicons from "../../images/tech-icons.png";
import CallToAction from "../shared/callToAction";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Skills = () => {
    return (
        <Section
            id="skills"
            background="dark"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={Techicons}
                        alt="React Js Developer"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        <ul>
                            <li>
                                <strong>Front-End Mastery:</strong> I specialize
                                in React JS, delivering seamless user
                                experiences and dynamic web applications.
                            </li>
                            <li>
                                <strong>WordPress Expertise:</strong> I craft
                                custom themes and harness the power of Elementor
                                for visually stunning websites.
                            </li>
                            <li>
                                <strong>MERN Stack Proficiency:</strong> My
                                skills extend to Node.js, npm, MongoDB, and
                                Express.js for full-stack capabilities.
                            </li>
                            <li>
                                <strong>PHP Wizardry:</strong> I'm well-versed
                                in PHP, a key ingredient for robust WordPress
                                development.
                            </li>
                        </ul>
                    </p>
                    <CallToAction
                        text="Download Cv"
                        icon={<CloudDownloadIcon />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
