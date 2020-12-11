import React from "react";
import SaltPhoto from "../Pictures/SaltPhoto.jpg"

const NasaAPOD = () =>{

    return(
        <div className="ProjectWrapper">
            <div className="ProjectTitle">
                <h3>Saltiest Hacker News Trolls</h3>
            </div>
            <div className="ProjectPhoto">
                <a href="https://saltyhacker.now.sh/letmein/">Visit this site</a>
                <img src={SaltPhoto} />
            </div>
            <div className="ProjectDesc">
                <p><span>What this project is: </span>This is a website that displays some of the saltiest (most upset/angry) comments on the Hacker News media page. It allows a user to view these comments, as well as search for them via username. Upon logging in after creating an account, a user is given the option to save comments to their own personal saved list, as well as remove them.</p>
                <p><span>Why I'm showcasing this project: </span>This is the first team-built project I've worked on, with a group of 9 other student developers from different cohorts. Although the overall styling of the website can use some improvement, the functionality of the website is complete.</p>
                <p><span>What I contributed to this project: </span>In the group of 10 student developers, there were 5 data scientists, 2 back end developers, 2 front end developers, and a web UI developer. I was in charge of managing global state in the front end via Context API, as well as handling authentication. Basically that boiled down to making and handling the log in and register account requests, as well as making sure that a person had the required login token to view and utilize the saved comment list component. I also worked on giving functionality to the search bar, allowing a user to filter the list of comments down to just what they want to see.</p>
            </div>
        </div>
    )
}

export default NasaAPOD;