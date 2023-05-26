import React from "react";
import resumePDF from "../../assets/resume/CarlyGallagherResume.pdf";

export default function Resume() {
    return (
        <div>
            <h3>Resume</h3>
            <button className="button">
            <a className="button" href={resumePDF} download="CarlyGallagherResume.pdf"></a>
                download Resume
            </button>
        </div>
    );
}
