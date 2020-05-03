import React from "react";
import {FaLinkedin, FaEnvelopeSquare} from "react-icons/fa"

const Resume = () => {

    return(
        <div className="ResumePageWrapper">
            <div className="ResumeTitle">
                <h1>Steven Spencer</h1>
                <p>Worcester, Massachuestts, United States</p>
            </div>

            <div className="ResumeLinks">
            <p><FaLinkedin /><a href="https://www.linkedin.com/in/steven-spencer-249ab3150/">https://www.linkedin.com/in/steven-spencer-249ab3150/</a></p>
            <p><FaEnvelopeSquare /><span>steve35spencer@gmail.com</span></p>
            </div>

            <div className="ResumeSummary">
                <h2>Summary</h2>
                <ul>
                    <li>Student training in Full Stack Web Development at Lambda School</li>
                    <li>Fast learned who is able to pick up new skills quickly and efficiently</li>
                    <li>Training in React, HTML, CSS, and Javascript, with three years of Java experience</li>
                    <li>Motivated student with a sense of responsibility after over three and a half years working a a leadership position</li>
                </ul>
            </div>

            <div className="ResumeExperience">
                <h2>Experience</h2>
                <div className="ResumeExp">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQG38CNwIbTYDA/company-logo_100_100/0?e=1596672000&v=beta&t=Rq4cK6lYapFksw6ZyRp8VySwj_H3Q0M_Ni6R6l9NUk4" alt="Lambda School Logo" />
                    <div className="ResumeExpText">
                        <h6>Student</h6>
                        <p>Lambda School</p>
                        <p>Feb 2020 - Present (4 months +)</p>
                    </div>
                </div>
                <div className="ResumeExp">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUgLUNG69kOlb9eYfFnB78xLHk3gVfTY-1JpMqorcRwjX1qm8z&usqp=CAU" alt="Dunkin Donuts" />
                    <div className="ResumeExpText">
                        <h6>Shift Leader</h6>
                        <p>Dunkin Donuts</p>
                        <p>June 2016 - Feb 2020 (3 yrs 9 mos)</p>
                    </div>
                </div>
            </div>

            <div className="ResumeEducation">
                <h2>Education</h2>
                <div className="ResumeEdu">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQG38CNwIbTYDA/company-logo_100_100/0?e=1596672000&v=beta&t=Rq4cK6lYapFksw6ZyRp8VySwj_H3Q0M_Ni6R6l9NUk4" alt="Lambda School Logo" />
                    <div className="ResumeEduText">
                        <h6>Lambda School</h6>
                        <p>Full Stack Web Development</p>
                        <p>2020-2021</p>
                    </div>
                </div>
            </div>

            <div className="ResumeFooter">
                <p>Page last updated: <span>May 3, 2020</span></p>
                
            </div>
        </div>
    )
}

export default Resume;