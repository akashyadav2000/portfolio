import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "/src/assets/Images/theme_pattern.svg";
import mail_icon from "/src/assets/Images/mail_icon.svg";
import location_icon from "/src/assets/Images/location_icon.svg";
import call_icon from "/src/assets/Images/call_icon.svg";
import tick from "/src/assets/Images/tick.png";

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Add a new state for the popup

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e332f055-d99e-4166-9fa3-93a71f728c6c");

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
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 2500);
      event.target.reset();
    }
  };

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="contact" className="contact">
        <div className="title-box">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
          {submitSuccess && (
            <div className="container">
              <div className={`popup ${isOpen ? "open-popup" : ""}`}>
                <img src={tick} alt="tick" />
                <h2>Thank You</h2>
                <p>Your details have been successfully submitted. Thanks!</p>
                <button className="button" onClick={handleClosePopup}>
                  OK
                </button>
              </div>
            </div>
          )}
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>
              I'm currently available to take on new Job opportunity , so feel free to
              send me a message about anything that you want me to work on. You
              can contact me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>Akashvinodyadav11@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+91 &nbsp; 7021117450</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /> <p>Mumbai, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-right">
            <label id="user_name">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <label id="user_email">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <label id="user_msg">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>
            <button
              type="submit"
              className="contact-submit"
              onClick={handleOpenPopup}
            >
              Submit now
            </button>
          </form>
        </div>
      </div>
      <div className='footer'>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">Designed and developed by Akash Yadav.</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
