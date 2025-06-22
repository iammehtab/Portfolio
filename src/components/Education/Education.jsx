import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="edu-title">Education</h2>
      <div className="education-grid">
        <div className="edu-card">
          <h3>10th Board</h3>
          <p>G.D Birla Center For Education(I.C.S.E)</p>
          <span>2020</span>
        </div>
        <div className="edu-card">
          <h3>12th Commerce</h3>
          <p>Anglo Urdu English Boy's school</p>
          <span>2022</span>
        </div>
        <div className="edu-card">
          <h3>BCA Graduation</h3>
          <p>SPPU, Pune</p>
          <span>2022-2025</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
