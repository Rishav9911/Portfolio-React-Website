import React from "react";
import stars from "./assets/stars.webp";
import WaviyComponent from "./Animation";

const Home = () => {

  return (
<>
<div className="parent">
    <img src={stars} id="main-img"/>
<WaviyComponent/>

<div className="headings">
<h1 className="heading-1">Rishav <span className="caste-1">Sachdeva</span></h1>
<h2 className="heading-2"><span className="caste-1">Aspiring</span> Student</h2>
<h5 className="quote"><span className="caste-1">"</span>Never stop chasing your dreams.<span className="caste-1">"</span></h5>
<div id="scroll-container">
      <div id="scroll-text">Eat. <span className="caste">Sleep.</span> Code.  <span className="caste">Repeat.</span></div>
    </div>

</div>
</div>

</>

  );
};


export default Home;
