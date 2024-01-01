
import React from "react";
import Me from "./assets/mypic.JPG";


const About = () => {
    return (
        <>
        <hr className="line"/>
            <div className="parent-about">

                <img src={Me} className="mypic" />

                <div className="write-aboutme">
                    <div className="write-para">
                     Hello there, I'm Rishav Sachdeva, 18 years old. I always have been fascinated by maths and computers since an early age and currently a second-year B.Tech student at Jaypee Institute of Information Technology. My journey in the world of technology has just begun, and I'm on a path to become a proficient software engineer.🌎
                    </div>
                    <br/>
                    <div className="write-para">
                    Aspiring to be a software engineer  who builds innovative and efficient software solutions to solve real-world problems. I'm driven by a passion for creating technology that positively impacts people's lives.One of the things I love most about software engineering is the constant learning that comes with it. New technologies and frameworks are constantly emerging, and I'm always eager to learn and stay up-to-date on the latest trends.
                    <br/>
                    </div > 
                    <div className="write-para">
                    But as life is not all about just working, I try to enjoy life to the fullest,living one day at a time . My favourite leisure activity is sketching and drawing.✍🏻
                    <br/>
                    </div>
                    <div className="write-para">
                    I'm always open to connecting  with fellow tech enthusiasts, industry professionals, and mentors. Feel free to connect with me through my Social Media handles, and let's explore opportunities to learn and grow together.🚀
                    </div>

                </div>

            </div>
        </>
    );
}
export default About;