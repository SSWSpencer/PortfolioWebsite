import React, {useState} from "react";
import Me from "../Images/Me.png";
import HTMLCircle from "../Images/HTML-Circle.png"; 
import CSSCircle from "../Images/CSS-Circle.png";
import JSCircle from "../Images/JS-Circle.png";
import PythonCircle from "../Images/Python-Circle.png";
import JavaCircle from "../Images/Java-Circle.png";
import PhotoshopCircle from "../Images/Photoshop-Circle.png";
import GitCircle from "../Images/Git-Circle.png";
import LessCircle from "../Images/Less-Circle.png";
import NodeCircle from "../Images/Node-Circle.png";
import PostgresCircle from "../Images/Postgres-Circle.png";
import ReactCircle from "../Images/React-Circle.png";
import ReduxCircle from "../Images/Redux-Circle.png";
import Slider from 'infinite-react-carousel';
import "../Styles/HomePage.css"
import Media from "react-media";

const HomePage = () => {
    const [carouselVisible, setCarouselVisible] = useState(true);

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        duration: 3000,
        slidesToShow: 5,
        initialSlide: 1,
        pauseOnHover: false,
    }

    const makeCarouselVisible = () =>{
        setCarouselVisible(true)
        localStorage.setItem("carousel", "true")
    }

    const hideCarousel = () =>{
        setCarouselVisible(false)
        localStorage.setItem("carousel", "false")
    }

    return(
        <div className="HomePageWrapper">
            <div className = "HomePageTopBackground">
                <div className="HomePageTop">
                    <div className="HPTopText">
                        <h1>Steven S.W <br/> Spencer</h1>
                        <a href="#Skills">Technical Abilities</a>
                    </div>
                    <img src={Me} alt="Steven SW Spencer"/>
                </div>
            </div>
            <Media query="(min-width: 1025px)" render={()=> (
                <>
                    <div className={carouselVisible ? "Skills" : "Skills Hidden"} id="Skills">
                        <h3 className="TAHead">Technical Abilities</h3>
                        <p onClick={()=>{hideCarousel()}}>Switch to a list view</p>
                        <Slider {...settings}>
                            <div className="HomePageBox">
                                <img src={GitCircle} alt="Git" />
                                <h3>Git</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={HTMLCircle} alt="HTML"/>
                                <h3>HTML</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={CSSCircle} alt="CSS" />
                                <h3>CSS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={LessCircle} alt="LESS" />
                                <h3>LESS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JSCircle} alt="JavaScript" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={ReactCircle} alt="ReactJS" />
                                <h3>ReactJS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={ReduxCircle} alt="Redux" />
                                <h3>Redux</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={NodeCircle} alt="NodeJS" />
                                <h3>NodeJS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PostgresCircle} alt="PostgreSQL" />
                                <h3>PostgreSQL</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JSCircle} alt="JavaScript" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PythonCircle} alt="Python" />
                                <h3>Python</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JavaCircle} alt="Java" />
                                <h3>Java</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PhotoshopCircle} alt="Adobe Photoshop" />
                                <h3>Adobe Photoshop</h3>
                            </div>
                        </Slider>
                    </div>
                    <div className={carouselVisible ? "Skills Hidden" : "Skills"} id="Skills">
                        <h3 className="TAHead">Technical Abilities</h3>
                        <p onClick={()=>{makeCarouselVisible()}}>Switch back to the carousel</p>
                        <div className="SkillList">
                            <div className="HomePageBox">
                                <img src={GitCircle} alt="Git" />
                                <h3>Git</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={HTMLCircle} alt="HTML"/>
                                <h3>HTML</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={CSSCircle} alt="CSS" />
                                <h3>CSS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={LessCircle} alt="LESS" />
                                <h3>LESS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JSCircle} alt="JavaScript" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={ReactCircle} alt="ReactJS" />
                                <h3>ReactJS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={ReduxCircle} alt="Redux" />
                                <h3>Redux</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={NodeCircle} alt="NodeJS" />
                                <h3>NodeJS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PostgresCircle} alt="PostgreSQL" />
                                <h3>PostgreSQL</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JSCircle} alt="JavaScript" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PythonCircle} alt="Python" />
                                <h3>Python</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JavaCircle} alt="Java" />
                                <h3>Java</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PhotoshopCircle} alt="Adobe Photoshop" />
                                <h3>Adobe Photoshop</h3>
                            </div>
                        </div>
                    </div>
                </>
            )} />
            <Media query="(max-width: 1024px)" render={()=> (
                <div className="Skills" id="Skills">
                        <h3 className="TAHead">Technical Abilities</h3>
                        <div className="SkillList">
                            <div className="HomePageBox">
                                <img src={GitCircle} alt="Git" />
                                <h3>Git</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={HTMLCircle} alt="HTML"/>
                                <h3>HTML</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={CSSCircle} alt="CSS" />
                                <h3>CSS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={LessCircle} alt="LESS" />
                                <h3>LESS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JSCircle} alt="JavaScript" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={ReactCircle} alt="ReactJS" />
                                <h3>ReactJS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={ReduxCircle} alt="Redux" />
                                <h3>Redux</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={NodeCircle} alt="NodeJS" />
                                <h3>NodeJS</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PostgresCircle} alt="PostgreSQL" />
                                <h3>PostgreSQL</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JSCircle} alt="JavaScript" />
                                <h3>JavaScript</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PythonCircle} alt="Python" />
                                <h3>Python</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={JavaCircle} alt="Java" />
                                <h3>Java</h3>
                            </div>
                            <div className="HomePageBox">
                                <img src={PhotoshopCircle} alt="Adobe Photoshop" />
                                <h3>Adobe Photoshop</h3>
                            </div>
                        </div>
                    </div>
            )} />
        </div>
    )
}

export default HomePage;