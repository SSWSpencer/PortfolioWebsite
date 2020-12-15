import React from "react";
import "../Styles/Projects.css"
import Slider from 'infinite-react-carousel';
import Modal from "./Modal"

import VSTKeyPhoto from "./Pictures/VSTKeyPhoto.jpg"
import VSTKeyProjectPic from "./Pictures/VSTKeyProjectPic.png"

import SaltProjectPic from "./Pictures/SaltProjectPic.png"

const Downloadables = () => {
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
        title: "Downloads",
        topText: "This is a featured list of some of my Python Scripts. The top part of the page is a featured carousel, and the bottom is a full list of everything that is available to be downloaded.",
        bottomText: "Each project has a link to the GitHub repository, as well as a mediafire link to the actual download link. I do have plans to migrate this entire page to its own site at a later date to make the more-useful scripts easier to find by the public, however until I've got a good list built up they will stay here!"
    }

    const projArr = [
        {
            title: "VST-Key Auto Presets",
            download: "https://www.mediafire.com/file/7cdz5jzqvs2e3ti/VST-Keys.zip/file",
            github: "https://github.com/SSWSpencer/VST-Key-Auto-Presets",
            description: "Bias FX 2 is one of the most well-known guitar amp simulators/VSTs. Although coming in at a premium price of up to $300 (and sometimes more), it doesn't come with the ability to easily switch between tones without spending extra money on a MIDI controller. While running this script at the same time as Bias FX 2, it allows the user to switch between presets using only their keyboard",
            myWork: "Many people have asked for this exact functionality in the applciation, to which the developers said it wouldn't happen. I wrote this script using both the PyAutoGui and Keyboard modules in Python. The script waits for a keyboard input (1-8), and then searches the screen for the corresponding preset button, and clicks it. This allows for quick transitions between tones while mid-play.",
            photo: VSTKeyPhoto,
            smallPhoto: VSTKeyProjectPic,
        },
        
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
                                                <a href={proj.download}>MediaFire Link</a>
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
                    <Modal content={modalText}/>
                </div>
                <div className="ProjectListTop">
                    <h2>Downloads Overview</h2>
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
                                            <a href={proj.download}>MediaFire Link</a>
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

export default Downloadables;