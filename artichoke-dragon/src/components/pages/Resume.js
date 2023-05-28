import React from "react";
import resumePDF from "../../assets/resume/CarlyGallagherResume.pdf";

export default function Resume() {
    return (
        <div>
            <div id="top">
            <h2 id="skills">Skills</h2>
            <h3 id="resume">Resume</h3>
            </div>
            <ul>
                <li>HTML 5</li>
                <li>CSS </li>
                <li>JavaScript</li>
                <li>SQL/NOSQL databases</li>
                <li>Crud</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
            <button className="button">
            <a className="button" href={resumePDF} download="CarlyGallagherResume.pdf">
                Download My Resume</a>
            </button>
        </div>
    );
}
