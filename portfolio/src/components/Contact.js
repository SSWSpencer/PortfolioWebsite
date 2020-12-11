import React, {useState} from "react";
import ContactPic from "../Images/Contact.png";
import "../Styles/Contact.css"
import EmailCircle from "../Images/Email-Circle.png"
import GithubCircle from "../Images/Github-Circle.png"
import LinkedInCircle from "../Images/LinkedIn-Circle.png"
import FacebookCircle from "../Images/Facebook-Circle.png"
import{ init } from 'emailjs-com';
import emailjs from "emailjs-com"
init("user_FV2TEueT25eZAhhMyj5yb");

const Contact = () => {

    const [formData, setFormData] = useState({
        from_name: "",
        phone_number: "",
        email: "",
        message: "",
    })

    const handleChanges = e =>{
        setFormData({...formData, 
        [e.target.name]: e.target.value})
    }


    const handleSubmit = e =>{
        emailjs.send("service_qnj0vk6","template_l3rphws", formData)
        .then(res=>{
            console.log(res.status, res.text)
        }).catch(err=>{
            console.log(err)
        })
        setFormData({
            from_name: "",
            phone_number: "",
            email: "",
            message: "",
        })
        alert("Your message has been sent! I'll get back to you as soon as I can!")
    }
    return(
        <div className="ContactPageWrapper">
            <div className="ContactTopBackground">
                <div className="ContactPageTop">
                    <div className="ContactPageTopText">
                        <h1>Get in Touch<br/>With Me</h1>
                        <a href="#ContactInfo">Contact Outlets</a>
                    </div>
                    <img src={ContactPic} />
                </div>
            </div>
            <div className="ContactList">
                <div className="ContactListTop" id="ContactInfo">
                    <div className="ContactBox" id="TopContactBox">
                        <a href="https://www.github.com/sswspencer" target="_blank"><img src={GithubCircle} alt="GitHub" /></a>
                        <a href="https://www.github.com/sswspencer" target="_blank"><h3>GitHub</h3></a>
                    </div>
                    <div className="ContactBox">
                        <a href="https://www.linkedin.com/in/steven-sw-spencer/" target="_blank"><img src={LinkedInCircle} alt="LinkedIn"/></a>
                        <a href="https://www.linkedin.com/in/steven-sw-spencer/" target="_blank"><h3>LinkedIn</h3></a>
                    </div>
                    <div className="ContactBox">
                        <a href="https://www.facebook.com/sswspencer/" target="_blank"><img src={FacebookCircle} alt="Facebook" /></a>
                        <a href="https://www.facebook.com/sswspencer/" target="_blank"><h3>Facebook</h3></a>
                    </div>
                </div>
                <hr className="divider" />
                <div className="BigContactBox">
                    <img src={EmailCircle} alt="Email" />
                    <h3>Send me an Email</h3>
                    <div className="EmailForm">
                        <form>
                            <div className="TopFields">
                                <input type="text" name="from_name" placeholder="Name" value={formData.from_name} onChange={handleChanges} />
                                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChanges} />
                                <input type="text" name="phone_number" placeholder="Phone (optional)" value={formData.phone_number} onChange={handleChanges} />
                            </div>
                            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChanges}/>
                            <input type="submit" id="subButton" onClick={()=>{handleSubmit()}}/>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;