import React from "react";

const Card=(props)=>{
    return(
<>
<div >
<img src={props.imgsrc} className="certif "/>
<h3 className="card">{props.title}</h3>
</div>

</>
    );

}
export default Card;