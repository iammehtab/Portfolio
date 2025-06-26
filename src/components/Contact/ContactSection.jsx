import React, { useState } from "react";
import "./Contact.css";
import "boxicons/css/boxicons.min.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false); // state to track form submission

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1018d7ca-b7bd-4f83-aca7-2257aeec3912");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSubmitted(true); // show success message
    }
  };

  return (
    <div className="contact-container" id="contact">
      {submitted ? (
        <div className="success-message">
          <i
            className="bx bx-check-circle"
            style={{ fontSize: "80px", color: "green" }}
          ></i>
          <h2>Form Submitted Successfully!</h2>
          <p>Thank you for contacting us. We will get back to you soon.</p>
        </div>
      ) : (
        <>
          <div className="on-left">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or would like to get in touch,
              <br /> please fill out the form below. We will get back to you as
              soon as possible.
            </p>

            <div className="contact-item">
              <i className="bx bx-phone"></i>
              <span>+91-8240569800</span>
            </div>

            <div className="contact-item">
              <i className="bx bx-envelope-open"></i>
              <span>mehtabalam8249@gmail.com</span>
            </div>

            <div className="contact-item">
              <i className="bx bxs-map"></i>
              <span>Pune, Maharashtra</span>
            </div>

            <div className="social-media">
              <div className="social-items">
                <a href="https://github.com/iammehtab">
                  <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" />
                </a>
              </div>
              <div className="social-items">
                <a href="https://www.linkedin.com/in/mehtab-alam-6a148025b/">
                  {" "}
                  <img src="https://img.icons8.com/?size=100&id=IXUU4h36YfmO&format=png&color=000000" />
                </a>
              </div>
              <div className="social-items">
                <img src="https://img.icons8.com/?size=100&id=43625&format=png&color=000000" />
              </div>
            </div>
          </div>
          <div className="on-right">
            <form className="contact-form" onSubmit={onSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" placeholder="Enter your name" name="name" />
              <label htmlFor="email">Your Email:</label>
              <input type="email" placeholder="Enter your email" name="email" />
              <label htmlFor="message">Write your message here</label>
              <textarea
                name="message"
                rows="8"
                placeholder="Enter your message"
              ></textarea>
              <button type="submit" className="contact-submit">
                Submit Now
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
