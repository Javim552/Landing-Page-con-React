
import React from "react";




export default function Card (props){


	
return (
    <div className="card m-3">
    <img src= {props.imageUrl} className="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title"> {props.title} </h5>
      <p className="card-text">{props.description}</p>
      <a href= {props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
    </div>
  </div>
);}

 

// Card.ropTypes = {
// 	title: PropType.string,
// 	imageUrl: PropType.string,
// 	description: PropType.string,
// 	buttonUrl: PropType.string,
// 	buttonLabel: PropType.string,
// 	BootstrapCard: PropType.string,
// };







