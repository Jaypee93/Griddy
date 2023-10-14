import React from "react";
import "./Jonathan.css";
import jonathanImg from "../../assets/image-jonathan.jpg"

export default function Jonathan() {
  return (
    <div className="jonathan-container">
      <div className="jonathan-about">
        <img src={jonathanImg} alt="jonathan" className="jonathan-img" />
        <div className="jonathan-intro">
          <p>Jonathan Walters</p>
          <p>
            <small className="jonathan-small">Verified Graduate</small>
          </p>
        </div>
      </div>
      <div className="jonathan-comment">
        <h1>The team was very supportive and kept me motivated</h1>
      </div>
      <div className="jonathan-quote">
        <h3>
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I’ve made in myself. ”
        </h3>
      </div>
    </div>
  );
}


