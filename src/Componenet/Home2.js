import React from "react";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import $ from "jquery";
import About from "./About";
import Loader2 from "../Loader2";
import "../style.css";

import { useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
const Home2 = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  var ReactRotatingText = require("react-rotating-text");
  AOS.init();
  $(window).on("load", function () {
    $("body").addClass("loaded");
  });

  return (
    <div className="container2 animate__animated animate__backInDown*">
      {isMatch ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <>
          <Loader2 />
        </>
      )}

      <div className="zero">
        <div className="zero2">
          <div className="one">
            {/* <br></br> */}
            <h1
              // data-aos="fade-down"
              // data-aos-duration="1000"
              // data-aos-offset="300"
              className="animate__animated animate__zoomInDown"
            >
              Hello,
              <br /> I am <span>SuFiaN MusTaFa</span>
            </h1>

            <p
              data-aos="zoom-in"
              className="animate__animated  animate__backInLeft"
            >
              I am <span>freelancer</span> & Intersted in{" "}
              <span> Web developement </span> I will be your Front end web
              developer. I will Make websites for you that will be fully
              Responsive, animated, fast, user friendly and easy to use.
              <span>
                {" "}
                I Create most of the websites on ReactJS (A JavaScript library
                for building user interfaces)
              </span>
              I like to learn new technologies related to web development.
            </p>
          </div>
          <div className="two animate__animated  animate__zoomInRight">
            <p>
              <span>
                {" "}
                Some of the technologies <br></br> i am using are:
              </span>{" "}
              <br></br>
              <ReactRotatingText
                items={[
                  " React Bootstrap",

                  " MaterialUI (React)",
                  " NextJS (ReactJS)",

                  " AOS (animate on scroll) ",

                  " Animate.css",

                  " Sanity IO",
                  " NodeJS",
                  " MogoDB",
                  " FramerMotion",
                ]}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
