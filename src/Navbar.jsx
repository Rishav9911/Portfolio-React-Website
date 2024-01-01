import React, { useEffect, useState } from "react";
import {NavLink} from "react-router-dom";

const Navbar=()=>{

    return(
        <>
        <div className="navbarr " >
    <div className="nav-1">
       <NavLink exact to="/"> <h1 className="hover-underline-animation"><span className="firstname">Rishav</span> <strong className="caste">Sachdeva</strong></h1></NavLink>
    </div>
    <div>
        <ul  className="nav-2">
            <NavLink className="nav-elements"  exact to="/about">About Me</NavLink>
            <NavLink className="nav-elements" exact to='/certificates'>Certifications</NavLink>
            <NavLink className="nav-elements" exact to='/skills'>Skills</NavLink>
            <NavLink className="nav-elements" exact to='/work'>Work</NavLink>
        </ul>
    </div>
</div>
    
        </>
    );
}
export default Navbar;