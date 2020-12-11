import React from "react";
import HowToPhoto from "../Pictures/HowToPhoto.jpg"

const HowTo = () =>{

    return(
        <div className="ProjectWrapper">
            <div className="ProjectTitle">
                <h3>How To</h3>
            </div>
            <div className="ProjectPhoto">
                <a href="https://howtoapp.netlify.app/index.html">Visit this site</a>
                <img src={HowToPhoto} />
            </div>
            <div className="ProjectDesc">
                <p><span>What this project is: </span>This is a React web application built around the idea of sharing life hacks. Users have the ability to create an account and log in, as well as publish life hacks for anyone in the community to see.</p>
                <p><span>Why I'm showcasing this project: </span>This application was built with a team of eight web development students in a week. The front end and back end were both built entirely by members of the group, and everything on it works exactly how we planned.</p>
                <p><span>What I contributed to this project: </span>I, as well as another student, worked on the back end of this application. We set up multiple databases using SQL for the users, passing tokens to the front end to handle authentication. We also collaborated and built a database to store the published posts, as well as providing endpoints to modify or delete posts.</p>
            </div>
        </div>
    )
}

export default HowTo;