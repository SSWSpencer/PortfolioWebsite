import React, {useState} from "react";
import SSWSCircle from "../Images/SSWS-Circle.png";
import {Link, useLocation} from "react-router-dom";
import "../Styles/Nav.css"
import Media from "react-media"
import {FaBars} from "react-icons/fa";

const Nav = () => {
    const loc = useLocation();

    const [visibleNav, setVisibleNav] = useState(false)

    return(
        <>
            <Media query="(max-width:700px)" render={()=> (
                <div className="NavWrapper">
                <div className = "NavBanner" >
                    <img src={SSWSCircle} />
                    <h4>Full Stack <br/> Web Developer</h4>
                </div>
                <button id="OpenNavButton" onClick={()=> {setVisibleNav(!visibleNav)}}><FaBars /></button>
                <div className={(visibleNav) ? "NavLinks" : "hidden"}>
                    <Link id="mobileTopNav" className={`${loc.pathname === "/" ? "navSelection" : ""}`} to="/" onClick={()=> {setVisibleNav(false)}}>Home</Link>
                    <Link className={`${loc.pathname.includes("/about") ? "navSelection" : ""}`} to="/about" onClick={()=> {setVisibleNav(false)}}>About Me</Link>
                    <Link className={`${loc.pathname.includes("/downloadables") ? "navSelection" : ""}`}to="/downloadables" onClick={()=> {setVisibleNav(false)}}>Downloads</Link>
                    <Link className={`${loc.pathname.includes("/projects") ? "navSelection" : ""}`}to="/projects" onClick={()=> {setVisibleNav(false)}}>Projects</Link>
                    <Link className={`${loc.pathname.includes("/contact") ? "navSelection" : ""}`}to="/contact" onClick={()=> {setVisibleNav(false)}}>Contact</Link>
                </div>
            </div>
            )} />
            <Media query="(min-width: 701px)" render={()=>(
                <div className="NavWrapper">
                    <div className = "NavBanner" >
                        <img src={SSWSCircle} />
                        <h4>Full Stack <br/> Web Developer</h4>
                    </div>
                    <div className="NavLinks">
                        <Link className={`${loc.pathname === "/" ? "navSelection" : ""}`} to="/">Home</Link>
                        <Link className={`${loc.pathname.includes("/about") ? "navSelection" : ""}`} to="/about">About Me</Link>
                        <Link className={`${loc.pathname.includes("/downloadables") ? "navSelection" : ""}`}to="/downloadables">Downloads</Link>
                        <Link className={`${loc.pathname.includes("/projects") ? "navSelection" : ""}`}to="/projects">Projects</Link>
                        <Link className={`${loc.pathname.includes("/contact") ? "navSelection" : ""}`}to="/contact">Contact</Link>
                    </div>
                </div>
            )} />
        </>
    )
}

export default Nav;