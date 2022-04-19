import React from "react";
import data from "../data/data.json";
import logo from "../logo.png"
const htmlRemover = /(<([^>]+)>)/gi;

export default function Header(props) {
  return (
    <div className="header">

<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#"><img src={logo} /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto nav-2 d-flex">
      <li class="nav-item">
        <a class="nav-link" href="#">Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Help</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><img className="profile-img" src="https://picsum.photos/200/300" /></a>
      </li>
    </ul>
  </div>
</nav>
    {/* <nav>
        <ul className="navbar d-flex">
            <img src={logo} />
            <div className="nav-2 d-flex">
                <li>Account</li>
                <li>Help</li>
                <li><img className="profile-img" src="https://picsum.photos/200/300" /></li>
            </div>
        </ul>
    </nav> */}
    <div className="header-h1-div">
      <h1 className="header-h1">The world's greatest fake site</h1>
      <p className="header-p">Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
    <button className="header-btn">Do something awesome</button>
    </div>
</div>
  );
}
