import React from "react";
import data from "../data/data.json";
import playBtn from "../playbtn.png"
const htmlRemover = /(<([^>]+)>)/gi;

export default function MainContent(props) {
  return (
    <div className="main-content">
      <div>
        {data.map((item) => (
          <div className="main-content-1">
            <div>
              <h2 className="video-title">{item.title}</h2>
              <p className="video-description">
                {item.description.replace(htmlRemover, "")}
              </p>
            </div>
            <div className="gradient">
              <div className="image-div">
                <a href={item.url}><img className="video" src={item.thumbnail_large} /></a>
                <a href={item.url}><img className="play-btn" src={playBtn} alt="play-button" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="main-content-2">
        <h2>Ready to have your cake and eat it too?</h2>
        <p>
          Start by designing the experience you have in mind. We'll guide you
          through each step. If your experience meets the quality standards,
          you'll hear more about what's next.
        </p>
      </div>

      <div className="main-nav">
        <ul>
          <li className="first-link">Fakesite</li>
          <li>About Us</li>
          <li>Press</li>
          <li>Policies</li>
          <li>Help</li>
        </ul>

        <ul>
          <li className="first-link">Account</li>
          <li>Edit Profile</li>
          <li>Friends</li>
          <li>Social</li>
          <li>Delete Profile</li>
        </ul>
      </div>
    </div>
  );
}
