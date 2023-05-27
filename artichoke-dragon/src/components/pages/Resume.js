import React from "react";
import resumePDF from "../../assets/resume/CarlyGallagherResume.pdf";

export default function Resume() {
    return (
        <div>
            <h3>Skills</h3>
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
