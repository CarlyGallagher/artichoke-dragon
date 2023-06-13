import React from "react";
import resumePDF from "../../assets/resume/CarlyGallagherResume.pdf";

export default function Resume() {
    return (
        <div>
            <div id="top">
                <h2 id="skills">Skills</h2>
            </div>
            <div id="points" class="column-list">
                <ul>
                    <li>HTML 5</li>
                    <li>CSS </li>
                    <li>JavaScript</li>
                    <li>SQL/NOSQL databases</li>
                    <li>CRUD</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div id="button">
                <button type="button" class="btn btn-secondary">
                    <a className="button" href={resumePDF} download="CarlyGallagherResume.pdf">
                        View My Resume</a>
                </button>
            </div>
        </div>
    );
}
