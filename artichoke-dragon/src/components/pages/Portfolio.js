import React from "react";

export default function Portfolio() {
    return (
        <div>
            <h3>My projects</h3>
            <div className="port" id="stone">
                <a href="https://carlygallagher.github.io/stone-martini/">
                    <h3>Sip Savvy</h3>
                </a>
                <a href="https://github.com/CarlyGallagher/stone-martini.git">
                    <h4>link to github repository</h4>
                </a>
            </div>
            <div className="port" id="honey">
                <a href="https://the-honey-comb.herokuapp.com/">
                    <h3>Honey comb</h3>
                    <a href="https://github.com/CarlyGallagher/the-honey-comb.git">
                        <h4>link to github repository</h4>
                    </a>
                </a>
            </div>
            <div className="port" id="ramen">
                <a href="https://ramen-talks.herokuapp.com/login">
                    <h3>Ramen Talks</h3>
                    <a href="https://github.com/CarlyGallagher/ramen-talks.git">
                        <h4>link to github repository</h4>
                    </a>
                </a>
            </div>
        </div>
    );
}
