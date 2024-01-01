
import React, { useState } from "react";
import Gmail from "./assets/gmail-logo.png";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";


const Contact = () => {
    let newtime=new Date().toLocaleTimeString();
    const [time,setTime]=useState(newtime);
    
    const updatetime=()=>{
        let nt=new Date().toLocaleTimeString();
        setTime(nt);
    }


    setInterval(updatetime,1000);

    function contact_on()
     {
            document.getElementById("container").style.display = "block";
        
      }
      function contact_off() {
        document.getElementById("container").style.display = "none";
      }

    return (
        <>
             <hr/>

             <div className="contact-parent">
            <h1 className="contact-heading"  onClick={contact_on}>Contact Me ?</h1>
            <h1 className="timer caste">{time}</h1>
             </div>
        

            <div className="container" id="container" onClick={contact_off}>
                    <div className="reachme-btn">
                        <h1>Reach me via...</h1>
                        <h2 className="cross-btn">X</h2>
                    </div>
                <div className="parent-logo">
                <a href="mailto:rishu.sach9911@gmail.com" ><img src={Gmail} className="logos" /> </a>
                <a className="logo-child"><h1>rishu.sach9911@gmail.com</h1></a>
                </div>
                
                <div className="parent-logo">
                <a href="https://www.linkedin.com/in/rishav-sachdeva-554525248/" target="_blank" ><img src={Linkedin} className="logos" /> </a><br/>
                <a href="https://www.linkedin.com/in/rishav-sachdeva-554525248/" target="_blank"  className="logo-child" ><h1>@Rishav_Sachdeva</h1></a>
                </div>

                <div className="parent-logo">
                <a href="https://github.com/Rishav9911" target="_blank" ><img src={Github} className="logos" /> </a>
                <a href="https://github.com/Rishav9911" target="_blank"  className="logo-child" ><h1>Rishav9911</h1> </a>
                </div>
            </div>


        </>

    );
}
export default Contact;