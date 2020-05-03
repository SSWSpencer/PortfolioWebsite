import React from "react";
import SpacePhoto from "../Pictures/SpacePhoto.jpg"

const NasaAPOD = () =>{

    return(
        <div className="ProjectWrapper">
            <div className="ProjectTitle">
                <h3>NASA's Photo of the Day</h3>
            </div>
            <div className="ProjectPhoto">
                <a href="https://stevenspencer-nasa-apod.now.sh/">Visit this site</a>
                <img src={SpacePhoto} />
            </div>
            <div className="ProjectDesc">
                <p><span>What this project is: </span>This is a simple website that uses one of NASA's APIs, displaying their Astrology Photo of the Day, as well as a description, a link to a full-resolution image, as well as copyright info for the person who took the picture. </p>
                <p><span>Why I'm showcasing this project: </span>This was the first React App I created that utilized an API call and advanced stlying techniques. Although this site is hardly a demonstration of my abilities, it was the first project I felt extremely proud of after finishing, and serves as a reminder that everybody has to start somewhere.</p>
                <p><span>What I contributed to this project: </span>This project revolves around NASA's API. I designed the entire front-end of this website, fetching the data through an API call and styling it using Reactstrap and Styled Components</p>
            </div>
        </div>
    )
}

export default NasaAPOD;