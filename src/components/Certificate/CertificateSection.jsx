import React from "react";
import "./certificate.css";
import image from "../../assets/certificate1.png";

const Certificate = () => {
  return (
    <section>
      <h2 className="certificate-title ">Certificate </h2>
      <div className="certificate-container">
        <div className="certificate-items">
          <img src={image} alt="Certificate" />
        </div>
        <div className="certificate-items">
          <img src={image} alt="Certificate" />
        </div>
        <div className="certificate-items">
          <img src={image} alt="Certificate" />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
