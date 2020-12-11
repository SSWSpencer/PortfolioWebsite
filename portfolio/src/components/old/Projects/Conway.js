import React from "react";
import ConwayPhoto from "../Pictures/ConwayPhoto.jpg"

const HowTo = () =>{

    return(
        <div className="ProjectWrapper">
            <div className="ProjectTitle">
                <h3>Conway's Game of Life</h3>
            </div>
            <div className="ProjectPhoto">
                <a href="https://gameoflife-one.vercel.app/game-of-life">Visit this site</a>
                <img src={ConwayPhoto} />
            </div>
            <div className="ProjectDesc">
                <p><span>What this project is: </span>This is a rendition of the 0-player game, "Conway's Game of Life". It is a game where you set the initial state of cells on a board (dead or alive), and watch as the generations progress depending on the cell structure, as well as a cell's neighbors. </p>
                <p><span>Why I'm showcasing this project: </span>This is a web application designed in React, completed in 1 week. It was the first assigned long-term project in my Computer Science studies, and it required me to learn and think of new ways of handling a problem. It utilizes React, JavaScript, and native CSS to render the cells dynamically, and displays them appropriately. </p>
                <p><span>What I contributed to this project: </span>Besides a few algorithms I had to search for on StackOverflow and some other websites, I designed this entire application in React, without utilizing a back end.</p>
            </div>
        </div>
    )
}

export default HowTo;