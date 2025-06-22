import React from "react";
import "./About.css";
import theme2 from "../../assets/theme2.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={theme2} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Mehtab Alam, a passionate programmer from India who loves
              turning ideas into reality through code. With a strong foundation
              in web development and problem-solving, I enjoy building projects
              that are both functional and visually appealing. I'm always eager
              to learn new technologies, take on challenges, and grow as a
              developer. When I’m not coding, you’ll find me exploring new tech
              trends, editing videos, or planning my next creative project. I
              believe in consistency, curiosity, and the power of continuous
              learning.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & css</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Php</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "45%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind Css[Learning]</p>
              <hr style={{ width: "25%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-highlights">
        <div className="highlights">
          <h1> 5+</h1>
          <p> Project Completed </p>
        </div>
        <hr />
        <div className="highlights">
          <h1> Growing Developer</h1>
          <p>Always eager to learn.</p>
        </div>
        <hr />
        <div className="highlights">
          <h1> 20+ </h1>
          <p>Leetcode question solved</p>
        </div>
      </div>
    </div>
  );
};

export default About;
