import React from "react";
import "./Daniel.css";
import danielImg from "../../assets/image-daniel.jpg";
import qoute from "../../assets/bg-pattern-quotation.svg";

const Daniel = () => {
  return (
    <div className="daniel-container">
      <div className="qouteImgContainer">
        <img className="qouteImg" src={qoute} alt="qoute" />
      </div>
      <div className="daniel-about">
        <img src={danielImg} alt="daniel" className="daniel-img" />
        <div className="daniel-intro">
          <p>Daniel Clifford</p>
          <p>
            <small className="daniel-small">Verified Graduate</small>
          </p>
        </div>
      </div>
      <div className="daniel-comment">
        <h1>
          I received a job offer mid-course, and the subjects I learned were
          current, if not more so, in the company I joined. I honestly feel I
          got every penny’s worth.
        </h1>
      </div>
      <div className="daniel-quote">
        <h3>
          “ I was an EMT for many years before I joined the bootcamp. I’ve been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I’ve successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </h3>
      </div>
    </div>
  );
};

export default Daniel;
