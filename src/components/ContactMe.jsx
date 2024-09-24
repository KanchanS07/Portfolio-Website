// import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    
    <div className="contactus-form-container" id="contactme">
      <div className="container">
        <h1 className="contactus-heading">Contact me</h1>

        <h3 className="contactus-sub-heading">
          Questions, thoughts, or just want to say hello?
        </h3>

        <div className="contactus-form-container">
          <form className="form" action="">
            <div className="formfield-container">
              <input
                className="formfield"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />

              <input
                className="formfield"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />

              <input
                className="formfield"
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
              />

              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="formfield formfield-textarea"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <div>
              <button type="submit" className="red-btn" id="submit-btn">
                Send Message{" "}
                <i className="submit-icon fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
