import React from "react";
export default function Jumbotron(props){

	return (
		<div className="card m-5">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);


};

// Jumbotron.propTypes = {

// 	title: PropTypes.string,
// 	description: PropTypes.string,
// 	buttonLabel: PropTypes.string,
// 	buttonURL: PropTypes.string,
// };

// ReactDOM.render(
// 	<Jumbotron
// 		
// 	/>,

// 	document.querySelector("#app")
// );
