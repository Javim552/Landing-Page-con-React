import React from "react";

//include images into your bundle

import Card from "./card.jsx"
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"



 const Home = () =>{

	return ( 
	
		<div className = "container">
			<Navbar active = "active" link = "link" disabled = "disabled "/>
			<Jumbotron
				title="Welcome to react"
				description="React is the most popular rendering library in the world"
				buttonLabel="Go to the official website"
				buttonURL="https://reactjs.org/"
			/>

			<div className="d-flex">
				<Card  
				title="Bob Dylan"
				imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
				description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
				buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				buttonLabel="Go to wikipedia"
				/>
				<Card
				title="Bob Dylan"
				imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
				description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
				buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				buttonLabel="Go to wikipedia"
				
				/>
				<Card
				title="Bob Dylan"
				imageUrl="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
				description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
				buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				buttonLabel="Go to wikipedia"
				
				/>

			</div>
			
		</div>
	)
} 


export default Home;
