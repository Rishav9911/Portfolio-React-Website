
import React from "react";
import Card from "./Card";
import Certificate_1 from "./assets/certif-1.png";
import Certificate_2 from "./assets/certif-2.png";
import Certificate_4 from "./assets/certif-4.png";



const Certif=()=>{
    return(
      <>
       <hr className="line"/>
      <div className="container-2">
     <Card imgsrc={Certificate_1} title="I'm thrilled to share my recent accomplishment completing the Responsive Web Design certification from freeCodeCamp. This journey has been a profound learning experience that has reshaped my perspective on web design and development.
Throughout this certification, I dove deep into the world of responsive web design. From mastering HTML and CSS to understanding the intricacies of CSS Flexbox and CSS Grid, I've developed a strong foundation that enables me to craft websites that adapt seamlessly to any screen size. "/>

     <Card imgsrc={Certificate_2} title="Embarking on a new journey with the IBM Full Stack Software Developer Course on Coursera !! 👨‍💻🌐 Earned my certificate in Introduction to HTML, CSS, and JavaScript by IBM 🚀.
      From crafting visually stunning websites with CSS to adding dynamic functionality with JavaScript, this course has been an enlightening journey."/>
      </div>

      <h1 className="certif-heading">
       Explore my Linkedin for more!!
      </h1>


      <div className="container-2">

     <Card imgsrc={Certificate_4} title="🍂 Celebrating a fruitful October! 🎉 Just wrapped up #hacktoberfest2023 , and I'm thrilled to have successfully completed the challenge by submitting four meaningful pull requests and becoming part of Hacktoberfest hall of fame 2023. 🚀 It was a fantastic journey of contributing to open-source projects and collaborating with the global developer community. "/>
      </div>


      </>
    );
}
export default Certif;