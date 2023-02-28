import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Contact3 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const firstRef = useRef(null);
  const emailRef = useRef(null);
  const lastRef = useRef(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gat04n6",
        "template_adfk5bp",
        form.current,
        "-KproztJDeKncI5Qu"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          firstRef.current.value = "";
          emailRef.current.value = "";
          lastRef.current.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      Contact3{" "}
      <form ref={form} onSubmit={sendEmail}>
        <label> Name </label>{" "}
        <input
          ref={firstRef}
          type="text"
          name="user_name"
          onChange={(event) => setFirstName(event.target.value)}
        />{" "}
        <label> Email </label>{" "}
        <input
          ref={emailRef}
          type="email"
          name="user_email"
          onChange={(event) => setEmail(event.target.value)}
        />{" "}
        <label> Message </label>{" "}
        <textarea
          name="message"
          ref={lastRef}
          onChange={(event) => setLastName(event.target.value)}
        />{" "}
        <input type="submit" value="Send" />
      </form>{" "}
    </div>
  );
};

export default Contact3;
