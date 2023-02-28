import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <div>
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.300470715256!2d71.97675405026192!3d34.06181102457913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38decd2395a97d01%3A0x590c12437b405a30!2sPAF%20Academy%20Asghar%20Khan!5e0!3m2!1sen!2s!4v1666977409467!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 3 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xaykpapk"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
