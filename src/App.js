import React from "react";
import {Routes,Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Certif from "./Certif";
import Navbar from "./Navbar";
import Work from "./Work";



const App=()=>{
return(
    <>
    <Navbar/>
   <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={<About/>}></Route>
    <Route exact path='/skills' element={<Skills/>}></Route>
    <Route exact path='/certificates' element={<Certif/>}></Route>
    <Route exact path='/work' element={<Work/>}></Route>
   </Routes>
    <Contact/>
    </>
);


}
export default App;