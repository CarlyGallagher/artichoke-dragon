import React from "react";

export default function Portfolio() {
    return (
        <div>
            <h3>My projects</h3>
            <div className="port" id="stone">
                <a href="https://carlygallagher.github.io/stone-martini/">
                <img src={require("../../assets/sip.jpeg")} alt="sip-savvy" />
                    <h3>Sip Savvy</h3>
                </a>
                <a href="https://github.com/CarlyGallagher/stone-martini.git">
                    <h4>link to github repository</h4>
                </a>
            </div>
            <div className="port" id="honey">
                <a href="https://the-honey-comb.herokuapp.com/">
                <img src={require("../../assets/honey.jpeg")} alt="honey-comb" />
                    <h3>Honey comb</h3>
                    <a href="https://github.com/CarlyGallagher/the-honey-comb.git">
                        <h4>link to github repository</h4>
                    </a>
                </a>
            </div>
            <div className="port" id="ramen">
                <a href="https://ramen-talks.herokuapp.com/login">
                <img src={require("../../assets/techblog.jpeg")} alt="techblog" />
                    <h3>Ramen Talks</h3>
                    <a href="https://github.com/CarlyGallagher/ramen-talks.git">
                        <h4>link to github repository</h4>
                    </a>
                </a>
            </div>
                        <div className="port" id="front">
                <a href="https://front-yard-free-loaders.herokuapp.com/">
                <img src={require("../../assets/frontyard.png")} alt="frontyard" />
                    <h3>Front Yard Free Loaders</h3>
                    <a href="https://github.com/CarlyGallagher/front-yard.git">
                        <h4>link to github repository</h4>
                    </a>
                </a>
            </div>
        </div>
    );
}
