import React from "react";
import "../Styles/Projects.css"
import Slider from 'infinite-react-carousel';
import Modal from "./Modal";

import SaltPhoto from "./Pictures/SaltPhoto.jpg"
import SpacePhoto from "./Pictures/SpacePhoto.jpg"
import ConwayPhoto from "./Pictures/ConwayPhoto.jpg"
import HowToPhoto from "./Pictures/HowToPhoto.jpg"
import SaverLifePhoto from "./Pictures/SaverLifePhoto.jpg"
import MaxFitPhoto from "./Pictures/MaxFitPhoto.jpg"
import DevynQuestPhoto from "./Pictures/DevynQuestPhoto.jpg"
import MoponolyPhoto from "./Pictures/MoponolyPhoto.jpg"

import SaltProjectPic from "./Pictures/SaltProjectPic.png"
import NasaProjectPic from "./Pictures/NasaProjectPic.png"
import ConwayProjectPic from "./Pictures/ConwayProjectPic.png"
import HowToProjectPic from "./Pictures/HowToProjectPic.png"
import SaverLifeProjectPic from "./Pictures/SaverLifeProjectPic.png"
import MaxFitProjectPic from "./Pictures/MaxFitProjectPic.png"
import DevynQuestProjectPic from "./Pictures/DevynQuestProjectPic.png"
import MoponolyProjectPic from "./Pictures/MoponolyProjectPic.png"

const Projects = () => {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 20000,
        duration: 2000,
        slidesToShow: 1,
        initialSlide: 1,
        pauseOnHover: true,
    }

    const modalText = {
        title: "Projects",
        topText: "This is a featured list of some of the web applications I've built. The top of the page is a featured carousel, and towards the bottom is a full list of every website I have deployed.",
        bottomText: "Each project I've made some contribution to in one way or another, and they all have links to both the deployed website and the GitHub repository."
    }

    const projArr = [
        {
            title: "Saltiest Hacker News Trolls",
            deploy: "https://saltyhacker.now.sh/",
            github: "https://github.com/Build-Week-Saltiest-Hack-News-Trolls-2/front-end",
            description: "This is a web app built using React that ranks hacker news commenters by negativity of comment sentiment, and allows users to search by username to view comments and sentiment levels of specific users.",
            myWork: "I handled authentication on this project's front end utilizing JSON Web Tokens, as well as implemented the search bar feature",
            photo: SaltPhoto,
            smallPhoto: SaltProjectPic,
        },
        {
            title: "Nasa's Astronomy Photo of the Day",
            deploy: "https://stevenspencer-nasa-apod.now.sh/",
            github: "https://github.com/SSWSpencer/nasa-photo-of-the-day",
            description: "This is a web app built using React that utilizes Nasa's APOD API, displaying a new astronomical photo for every day of the year",
            myWork: "I built the entire front end of this project in less than a day as a project for my school. It utilizes only Nasa's APOD API, and displays a new picture every day.",
            photo: SpacePhoto,
            smallPhoto: NasaProjectPic,
        },
        {
            title: "Conway's Game of Life",
            deploy: "https://gameoflife-one.vercel.app/",
            github: "https://github.com/SSWSpencer/gameoflife",
            description: "This is a rendition of the 0-player game, \"Conway's Game of Life\". It is a game where you set the initial state of cells on a board (dead or alive), and watch as the generations progress depending on the cell structure, as well as a cell's neighbors. ",
            myWork: "I built the entire front end of this project in a four day sprint as a project for my school. It utilizes no back end, and simply uses algorithms to determine the next state of the cells, and renders the board accordingly.",
            photo: ConwayPhoto,
            smallPhoto: ConwayProjectPic,
        },
        {
            title: "How To",
            deploy: "https://howtoapp.netlify.app/index.html",
            github: "https://github.com/5-2020-BW-How-To-2",
            description: "This is a React web application built around the idea of sharing life hacks. Users have the ability to create an account and log in, as well as publish life hacks for anyone in the community to see.",
            myWork: "I, as well as another student, worked on the back end of this application. We set up multiple databases using SQL for the users, passing tokens to the front end to handle authentication. We also collaborated and built a database to store the published posts, as well as providing endpoints to modify or delete posts.",
            photo: HowToPhoto,
            smallPhoto: HowToProjectPic,
        },
        {
            title: "SaverLife",
            deploy: "https://b.saverlife.dev",
            github: "https://github.com/Lambda-School-Labs/Labs25-SaverLife-TeamB-fe",
            description: "SaverLife is a nonprofit organization created to inspire, inform, and reward the millions of Americans who need help saving money, through taking a user's past financial data and creating a predicted budget for them to utilize their income.",
            myWork: "I worked remotely with a group of five other web development students to create this website for the SaverLife team. I was responsible for the mobile view of the website, creating a mobile-friendly carousel for users to see their financial data, as well as other features to facilitate the mobile experience.",
            photo: SaverLifePhoto,
            smallPhoto: SaverLifeProjectPic,
        },
        {
            title: "Max Fitness",
            deploy: "https://maxfitness.netlify.app/",
            github: "https://github.com/Max-Fitness",
            description: "Max Fitness is a gym located in Webster Massachusetts that one of my personal friends used to work for. After coming under new ownership, my friend reached out and asked if I was willing to create, design, and develop a website and logos for their company.",
            myWork: "I was tasked with creating this entire application in a span of three days. While not the most professional looking, it works entirely as requested, allowing users to view membership plans for the gym, view and sign up for group sessions, and view information about the gym. From an administrator account, you can view the users signed up for a group, perform CRUD operations on membership pricing plans and group sessions, change users' roles on the website, and change all of the text on the website.",
            photo: MaxFitPhoto,
            smallPhoto: MaxFitProjectPic,
        },
        {
            title: "DevynQuest",
            deploy: "https://js-dungeon-crawler.vercel.app/",
            github: "https://github.com/SSWSpencer/JS-Dungeon-Crawler",
            description: "DevynQuest is a game I started building exclusively in JavaScript back in July 2020. I started building it while referencing an introduction to game development with javascript tutorial video, and went off in my own direction from the actual tutorial. To date I've been busy with other work, so it's a mostly-abandoned project, however in its current state it has a primitive AI system for the red pieces, and allows the user to control the blue piece with their arrow keys.",
            myWork: "I am responsible for all of the work put into this project (except for the name 'Devyn', which I borrowed from a friend at the time because I thought putting it on my portfolio as 'abandoned dungeon crawler with no gameplay' wouldn't be the best of titles). It utilizes canvas elements in HTML5 and JavaScript, and all of the artwork was done in a matter of 15 minutes in photoshop.",
            photo: DevynQuestPhoto,
            smallPhoto: DevynQuestProjectPic,
        },
        {
            title: "Moponoly Probability",
            deploy: "https://moponoly-probability.netlify.app",
            github: "https://github.com/SSWSpencer/Moponoly-Probability",
            description: "Moponoly Probability is a simulation of a popular board game that serves to answer the question of what the most landed-on tile in the game is. According to many sources online, who use math and statistics to make their claim, the tile 14 positions after jail is most common tile to land on. This application simulates 100,000 games and reports the data of which tile is landed on how many times, to see whether the sources' claims are true or false.",
            myWork: "I built this entire application from the ground-up in JavaScript's React Library. It simulates the games on the front end, and stores the data from all executed games in the back end, and displays a global tally of how many times each tile has been landed on worldwide. It utilizes PlotlyJS to display the results in graph-form.",
            photo: MoponolyPhoto,
            smallPhoto: MoponolyProjectPic
        }
        
        
    ]

    return(
        <div className="ProjectPageWrapper">
            <div className="ProjectPageTopBackground">
                <div className="ProjectPageTop">
                    <Slider {...settings}>
                        {projArr.map(proj=>{
                            return(
                                <div className="ProjCarouselItem">
                                    <img src={proj.photo} />
                                    <div className="CarouselText">
                                        <div className="text">
                                            <h3>{proj.title}</h3>
                                            <p>{proj.description}</p>
                                            <p>{proj.myWork}</p>
                                            <div className="carouselButtons">
                                                <a href={proj.deploy}>Deployed Site</a>
                                                <a href={proj.github}>Github Repo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className="Projects">
                <div className="modalPanel">
                    <Modal content={modalText} />
                </div>
                <div className="ProjectListTop">
                    <h2>Projects Overview</h2>
                </div>
                <div className="ProjectList">
                    {projArr.map(proj=>{
                        return(
                            <div className="ProjectCard">
                                <img src={proj.smallPhoto} />
                                <div className="ProjectText">
                                    <div className="ProjectTitle">
                                        <h3>{proj.title}</h3>
                                        <div className="ProjectCardButtons">
                                            <a href={proj.deploy}>Deployed Link</a>
                                            <a href={proj.github}>Github Repo</a>
                                        </div>
                                    </div>
                                    <p>{proj.description}</p>
                                    <p>{proj.myWork}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects;