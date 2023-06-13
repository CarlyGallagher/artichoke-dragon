import React from "react";

export default function Portfolio() {
    return (
        <div>
            <h3 className="title">My projects</h3>
            <div className="container1">
                <div className="polaroid" id="stone">
                    <a href="https://carlygallagher.github.io/stone-martini/"><img src={require("../../assets/sip.jpeg")} alt="sip-savvy" /></a>
                    <div className="container2">
                        <a href="https://carlygallagher.github.io/stone-martini/">Sip savvy</a>
                        <a href="https://github.com/CarlyGallagher/stone-martini.git">link to repository</a>
                    </div>
                </div>
                <div className="polaroid" id="honey">
                    <a href="https://the-honey-comb.herokuapp.com/"><img src={require("../../assets/honey.jpeg")} alt="honey-comb" /></a>
                    <div className="container2">
                        <a href="https://the-honey-comb.herokuapp.com/">Honey Comb</a>
                        <a href="https://github.com/CarlyGallagher/the-honey-comb.git">link to repository</a>
                    </div>
                </div>
                <div className="polaroid" id="ramen">
                    <a href="https://ramen-talks.herokuapp.com/login"><img src={require("../../assets/techblog.jpeg")} alt="techblog" /></a>
                    <div className="container2">
                        <a href="https://ramen-talks.herokuapp.com/login">Tech Blog</a>
                        <a href="https://github.com/CarlyGallagher/ramen-talks.git">link to repository</a>
                    </div>
                </div>
                <div className="polaroid" id="front">
                    <a href="https://front-yard-free-loaders.herokuapp.com/"><img src={require("../../assets/frontyard.png")} alt="frontyard" /></a>
                    <div className="container2">
                        <a href="https://front-yard-free-loaders.herokuapp.com/">Front Yard Free-Loaders</a>
                        <a href="https://github.com/CarlyGallagher/front-yard.git">link to repository</a>
                    </div>
                </div>
            </div>
        </div >
    );
}
