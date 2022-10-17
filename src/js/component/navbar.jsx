import React from "react";

export default function Navbar(props){

  return(
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">{props.active}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{props.link}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">{props.disabled}</a>
  </li>
</ul>)


}

// Navbar.propTypes = {
//     active: PropType.string,
//     link: PropType.string,
//     disabled: PropType.string
//  }

//  ReactDOM.render(
// 	<Navbar ></Navbar>,document.querySelector("#app")
// );