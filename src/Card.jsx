import React from "react";
import "./Card.css"
import Images from "./Images";

function Card(props){
    // console.log(props)
    return(
    <>
    <div className="cards">
    {/* /* picture */ }
    <div className="card">
        <Images imgsrc={props.imgsrc}></Images>
         {/* title of series(amazon.netflix)*/}
        <div className="card_info">
            <span className="card_title"> 
            {props.title} </span>

            {/* name of webseries */}
            <a href={props.wiki}>
            <h3 className="card_title">{props.sname}</h3>
            </a>

            {/* link of webseies in button */}
            
            <a href={props.link}  target="_blank">
                <button> Watch Now</button>
            </a>
        </div>
    </div>
</div>
</>
)
}
export default Card;