import React from "react";
import NasaProjectPic from "./Pictures/NasaProjectPic.png";

const AboutMe = () => {

    return(
        <div className="AboutWrapper">
            <div className="AboutHeader">
                <h3>You're probably wondering, "Who is this person? Why am I on their website? In what way will this person benefit me or my business?"</h3>
            </div>
            <div className="AboutTopInfo">
                <div className ="AboutBox">
                    <h4>About Me</h4>
                    <div className="AboutBoxText">
                        <p>I am Steven Spencer. I am a Web Developer, currently studying at Lambda School (Web29 Cohort). I was born and raised in Worcester Massachusetts (Think of Boston, but slightly smaller and located about 40 miles west)</p>
                        <p>I was born in 1999, growing up in one of the biggest eras of technological improvements, and have spent most of my free time in life around computers.</p>
                        <p>Starting in my second year of high school (2014), I started getting more acquainted with the programming/development aspect of technology, and started my career in learning Java.</p>
                        <p>Fast forward to February of 2020, I started my studies in HTML, CSS(/Less), Javascript, and React</p>
                    </div>
                </div>
                <div className ="AboutBox">
                    <h4>Java</h4>
                    <div className="AboutBoxText">
                        <p>Java was the first programming langauge I found myself comfortable using. Starting in a high school class in 2014, I developed small command-line based applications.</p>
                        <p>In later years, I went on to start developing more graphically-based applications in the form of minigame clones, such as Battleship, Connect Four, and Tic-Tac-Toe</p>
                        <p>While my Java experience hasn't continued much past that, the general concepts have stuck with me and have facilitated my education in Javascript</p>
                    </div>
                </div>
            </div>

            <div className="AboutMidInfo">
                <div className ="AboutBox">
                    <h4>HTML</h4>
                    <div className="AboutBoxText">
                        <p>Learning HTML came extremely easy to me. I started learning in early 2020, and expecting similarities to Java, I studied (what little of) everything I knew at the time, and was prepared for a large learning curve.</p>
                        <p>And while there was definitely a learning curve, I found learning a markup language (as opposed to a typical programming language) to be extremely straightforward.</p>
                        <p>HTML gives me the ability to give structure to a website, and arrage it into a well-organized looking project.</p>
                    </div>
                </div>
                <div className ="AboutBox">
                    <h4>CSS(/Less)</h4>
                    <div className="AboutBoxText">
                        <p>Similar to HTML, learning CSS came extremely easy to me. With CSS, I have the ability to turn regular HTML into a professionally-designed website.</p>
                        <p>If you think of HTML as the frame and structure of a house, CSS would be design and appearance of it. It is a style sheet language that I've studied alongside HTML, to give my work a stunning appearance.</p>
                        <p>I also have experience with Less, a CSS-extention, which allows me to be able to organize stylings in an easier-to-comprehend way, allowing easier future edits.</p>
                    </div>
                </div>
            </div>

            <div className="AboutBotInfo">
                <div className ="AboutBox">
                    <h4>Javascript</h4>
                    <div className="AboutBoxText">
                        <p>Sticking to the house metaphor described previously, Javascript would be the electrical components to a house. Javascript is the first ("real") programming language I've studied since my time with Java.</p>
                        <p>While it's not the same language as Java, the slight similarities have aided my learning experience by a large margin.</p>
                        <p>Using Javascript, I am able to take a website, and add functionality to it that wouldn't be possible in regular HTML and CSS. </p>
                    </div>
                </div>
                <div className ="AboutBox"> 
                    <h4>React JS</h4>
                    <div className="AboutBoxText">
                        <p>Out of the three previous languages I've studied, React is definitely the one I am most confident in myself with. It utilizes both HTML and Javascript elements, and combines them into one easy-to-understand language.</p>
                        <p>React allows me to be able to work on both the HTML and the Javascript of a website in one file. On top of that, there are dependencies that allow functionality to a project that can't be done in regular Javascript.</p>
                        <p>Using React, I am able to create a website that has seamless transition between pages, and an overall more-professional looking design.</p>
                    </div>
                </div>
            </div>

            <div className="AboutWork" id="PreviousWork">
                <div className="AboutWorkHeader">
                    <h4>Previous Work</h4>
                    <p>Here is a grouping of all of the projects I am most proud of developing/playing a role in the development of.</p>
                    <p>This section will be updated periodically to include more content, check back often!</p>
                </div>

                <div className="AboutWorkContent"> {/*Note to future self, put example work in this div, wrapped in <div className="AboutWorkBox">    [CONTENT]    </div>*/}


                    <a href="https://stevenspencer-nasa-apod.now.sh/"><div className="AboutWorkBox">
                        <img src={NasaProjectPic} />
                        <p>NASA's Photo of the Day</p>
                    </div></a>

                    


                </div>
            </div>
        </div>
    )
}

export default AboutMe;