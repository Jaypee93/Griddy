import React from "react";
import "./Patrick.css";
import patrickImg from "../../assets/image-patrick.jpg";

const Patrick = () => {
  return (
    <div className="patrick-container">
      <div className="patrick-about">
        <img src={patrickImg} alt="patrick" className="patrick-img" />
        <div className="daniel-intro">
          <p>Patrick Abrams</p>
          <p>
            <small className="patrick-small">Verified Graduate</small>
          </p>
        </div>
      </div>
      <div className="patrick-comment">
        <h1>
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy. 
        </h1>
      </div>
      <div className="patrick-quote">
        <h3>
        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ” Kira Whittle Verified Graduate Such a life-changing experience. Highly recommended! “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
        </h3>
      </div>
    </div>
  );
};

export default Patrick;
