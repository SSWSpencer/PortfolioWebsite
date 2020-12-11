import React from "react";
import Me2 from "../Images/Me2.png";
import "../Styles/About.css"
import SSWS2Circle from "../Images/SSWS2-Circle.png"
import BookCircle from "../Images/Book-Circle.png"
import HobbiesCircle from "../Images/Hobbies-Circle.png"
import ComputerCircle from "../Images/Computer-Circle.png"

const AboutMe = () => {

    return(
        <div className="AboutPageWrapper">
            <div className="AboutTopBackground">
                <div className="AboutPageTop">
                    <div className="AboutPageTopText">
                        <h1>Your Next<br/>Web Developer</h1>
                        <a href="#Info">About Me</a>
                    </div>
                    <img src={Me2} />
                </div>
            </div>
            <div className="AboutList">
                <div className="AboutListTop" id="Info">
                    <div className="AboutBox" id="firstAboutBox">
                        <img src={SSWS2Circle} alt="General Info" />
                        <h3>Background</h3>
                        <p>My name is Steven Spencer, I’m a Full Stack Web Developer born and raised in Worcester Massachusetts. I’m 21 years old and have had experience with programming since I was 15 years old. I started working with Java, going on to move myself out of the general software development field to focus primarily in areas of web development, learning HTML, CSS, JavaScript, as well as multiple frameworks, libraries, and runtimes to go along with them. I have a few years of Photoshop experience, taking a few classes in them since high school, and from such I create most of the graphics on my web applications myself. After reaching a status of endorsement with Lambda School, I am looking for my first real experience in the tech field, and working on multiple personal project in meantime. </p>
                    </div>
                    <div className="AboutBox">
                        <img src={BookCircle} alt="Education"/>
                        <h3>Education</h3>
                        <p>Most of my web development education comes from my studies at Lambda School, a full-time program consisting of 55-hour weeks for 9 months, where we learned the essential fundamentals to full stack web development. My studies included HTML, CSS, and JavaScript, with primary focus on the ReactJS library and NodeJS runtime. There were multiple units of different styling techinques, using Reactstrap, Bootstrap, and Styled Components, as well as a bit of focus on pre-processing with LESS. We also had multiple units of study in areas of general computer science fundamentals, learning different types of searching and sorting algorithms in Python, as well as the pros and cons to each algorithm (focusing on their time and space complexities). </p>
                    </div>
                    <div className="AboutBox">
                        <img src={HobbiesCircle} alt="Personal Life" />
                        <h3>Personal Life</h3>
                        <p>As much as I’d love to say my life solely revolves around programming, I like to think that for at least a few hours a week I’m a normal-functioning human being. For 13 years of my life, I played ice hockey as a goaltender, which is responsible for my tendency to always put in hard work and be confident, while still being able to have a good time. Over the past few years, I’ve become an avid guitarist, always interested in learning new things and trying to create something out of nothing. From there I also built up a love-hate relationship with audio quality, striving to hear music in the most perfect setting possible, although always falling just a bit short. I’m also a self-proclaimed professional driveway mechanic, spending a lot of my free time over the past few years working on my cars and going out for track days.</p>
                    </div>
                </div>
                <hr className="divider" />
                <div className="BigAboutBox">
                    <img src={ComputerCircle} alt="Experience" />
                    <h3>Experience</h3>
                    <p>I started programming in my second year of high school, when I took an introduction to Java course. Since then, I took three more years of Java classes, and decided to move more towards the web development field. I entered Lambda School in 2020, and went on to complete the program consisting of 11 hour work days, 5 days every week, for 9 months straight. We learned to utilize many different areas of web development, building both hard and soft skills in areas of HTML, CSS, JavaScript, LESS, React, Redux, NodeJS, PostgreSQL, and Python. Towards the end of the program, I volunteered for a formal mentorship position, assisting two other students through their studies earlier into the curriculum, doing my best to help solidify their knowledge in front end ReactJS applications and back end NodeJS APIs. After my trial as a mentor ended with the school, I started working alongside the class instructors in a paid Team Lead position, in which I was assigned a group of up to 12 part-time students to facilitate the learning process to throughout their entire core curriculum. This included everything from their first HTML lessons all the way up until their last NodeJS lesson. As their core curriculum came to a close, I started to get my name out and try to get some professional experience, and my first paid project was for a gym located in Webster Massachusetts called Max Fitness, where they requested company logos, as well as a full stack website to manage their group training sessions. </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;