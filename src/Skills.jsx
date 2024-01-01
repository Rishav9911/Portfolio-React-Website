
import React from "react";
import skill from "./assets/skills.png";


const Skills=()=>{
    return(
        <>
         <hr className="line"/>
        <h1 className="skills-heading">My Technical Skills</h1>
        <img src={skill} className="skills-pic"/>
        </>
    );
}
export default Skills;