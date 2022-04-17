import React from "react";
import data from "../data/data.json";
import logo from "../logo.png"
const htmlRemover = /(<([^>]+)>)/gi;

export default function Header(props) {
  return (
    <div className="header">
    <nav>
        <ul className="navbar d-flex">
            <img src={logo} />
            <div className="nav-2 d-flex">
                <li>Account</li>
                <li>Help</li>
                <li><img className="profile-img" src="https://picsum.photos/200/300" /></li>
            </div>
        </ul>
    </nav>
    <h1 className="header-h1">The world's greatest fake site</h1>
    <p className="header-p">Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
    <button className="header-btn">Do something awesome</button>
</div>
  );
}
