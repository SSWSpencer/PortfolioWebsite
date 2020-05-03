import React from "react";
import SelfPortait from "./Pictures/SelfPortrait.jpg";
import {FaGithubSquare, FaLinkedin, FaFacebookSquare, FaEnvelopeSquare} from "react-icons/fa"

const HomePage = () => {

    return(
        <div className="HomePage">
            <div className="HomeTextWrapper">
                <h1>Hello, I'm Steven Spencer </h1>
                <h2>I'll be your Web Developer</h2>
                <div className="HomeIcons">
                    <a href="https://www.facebook.com/woody.spencer.1"><FaFacebookSquare /></a>
                    <a href="https://www.linkedin.com/in/steven-spencer-249ab3150/"><FaLinkedin /></a>
                    <a href="http://www.github.com/SSWSpencer"><FaGithubSquare /></a>
                    <a href="mailto:steve35spencer@gmail.com?subject=Your Title&body=Your Message"><FaEnvelopeSquare /></a>
                </div>
            </div>
            <img src={SelfPortait} alt="Steven Spencer" />
        </div>
    )
}

export default HomePage;