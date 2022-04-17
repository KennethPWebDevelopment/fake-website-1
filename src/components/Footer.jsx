import React from "react";
import data from "../data/data.json";
import logo from "../logo.png"
const htmlRemover = /(<([^>]+)>)/gi;

export default function Footer(props) {
  return (
    <div className="footer">
    <nav>
        <ul className="navbar d-flex">
            <img src={logo} />
            <div className="nav-2 d-flex">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Site Map</li>
            </div>
        </ul>
    </nav>
</div>
  );
}
