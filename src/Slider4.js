import Carousel from "react-bootstrap/Carousel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { ArrowRight } from "@mui/icons-material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Slider from "./Componenet/Slider";
import About from "./Componenet/About";
import App from "./App";
import Divider from "@mui/material/Divider";
import AOS from "aos";
import Skill from "./Componenet/Skill";
import Aboutsec from "./Componenet/Aboutsec";
import Home2 from "./Componenet/Home2";
import Nav10 from "./Componenet/Nav10";
import { useState } from "react";
import Nav11 from "./Nav11";
import { useMediaQuery, useTheme } from "@mui/material";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Intro from "./videos/whatsapp.mp4";
import { sliderData } from "./Componenet/sliderData";

import "./style.css";
// import First from "./First";
function CarouselFadeExample() {
  AOS.init();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const Gridi = {
    background: "url(./1.jpg)",
  };
  const directionButtonse = (direction) => {
    return (
      <div>
        <span aria-hidden="true" className="arrow arrow-right next">
          <ArrowRightIcon
            className="arrow arrow-right next"
            style={{
              fontSize: "49px",
              backgroundColor: "red",
              borderRadius: "29px",
              position: "relative",
              left: "0px",
              overflow: "hidden",
            }}
          />
        </span>
      </div>
    );
  };
  const directionButtonsf = (direction) => {
    return (
      <div>
        <span aria-hidden="true" className="arrow arrow-left prev">
          <ArrowLeftIcon
            style={{
              fontSize: "49px",
              backgroundColor: "red",
              borderRadius: "29px",
              position: "relative",
              right: "10px",
              overflow: "hidden",
            }}
          />
        </span>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      {/* <img className="d-block w-100" src={require("./laptop-png-6759.png")} /> */}
      <div class="thumbnail" style={{ height: "60%", overflow: "hidden" }}>
        <img
          src={require("./Componenet/screen2.png")}
          style={{ width: "90%", display: "block" }}
        />
        <div class="caption0">
          <div style={{ textAlign: "start" }}>
            <Carousel
              fade={true}
              indicators={false}
              style={{
                width: "100%",
                height: "800px",
              }}
              nextIcon={directionButtonse("Next")}
              prevIcon={directionButtonsf("Previous")}
            >
              <Carousel.Item
                style={{
                  width: "100%",
                  // overflow: "auto",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item lg={6} style={{ height: "1000px" }}>
                    <Item>
                      <div style={{ height: "1000px" }}>
                        <img
                          className="d-block w-100"
                          src={require("./123.gif")}
                          alt="First slide"
                          style={{ height: "60%" }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item lg={6}>
                    <Item>
                      <div
                        style={{
                          height: "550px",
                          textAlign: "center",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="About3"
                          style={{
                            height: "500px",
                            overflowY: "scroll",
                            overflowX: "hidden",
                          }}
                        >
                          <h1>What I Build</h1>{" "}
                          <div className="about4">
                            <h3 data-aos="fade-down" data-aos-delay="300">
                              {" "}
                              Resposive website Design
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span>your site will be Resposive </span> Responsive
                            web design (RWD) is a web development approach that
                            creates dynamic changes to the appearance of a
                            website, depending on the screen size and
                            orientation of the device being used to view it. RWD
                            is one approach to the problem of designing for the
                            multitude of devices available to customers, ranging
                            from tiny phones to huge desktop monitors.Because
                            responsive design relies on shuffling elements
                            around the page, design and development need to work
                            closely together to ensure a usable experience
                            across devices. Responsive design often turns into
                            solving a puzzle — how to reorganize elements on
                            larger pages to fit skinnier, longer pages or vice
                            versa. However, ensuring that elements fit within a
                            page is not enough. For a responsive design to be
                            successful, the design must also be usable at all
                            screen resolutions and sizes.
                          </p>{" "}
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  width: "100%",
                  // overflow: "auto",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <Grid
                    item
                    lg={6}
                    style={{ height: "1000px" }}
                    data-aos="flip-left"
                  >
                    <Item>
                      <div style={{ height: "1000px" }} data-aos="flip-left">
                        <img
                          className="d-block w-100 "
                          src={require("./Componenet/css/Data Loading Animation.gif")}
                          alt="First slide"
                          style={{ height: "60%" }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item lg={6}>
                    <Item data-aos="flip-left">
                      <div
                        style={{
                          height: "550px",
                          textAlign: "center",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="About3"
                          style={{
                            height: "500px",
                            overflowY: "scroll",
                            overflowX: "hidden",
                          }}
                        >
                          <h1>What I Build</h1>{" "}
                          <div className="about4">
                            <h3 data-aos="fade-down" data-aos-delay="300">
                              {" "}
                              Animated website Design
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span>Add Animation to site </span> Website
                            animations are moving images that a web designer
                            uses to capture visitors’ attention and often direct
                            them to take certain actions. They can be small
                            animations that draw a user’s eye to a specific
                            element, convey a marketing message, or help users
                            move through a webpage more naturally.Website
                            animation can also show the steps of a complex
                            process, create interactive elements, tell stories
                            (such as tutorials), and convey progression (such as
                            a time-bar).Website animation can also show the
                            steps of a complex process, create interactive
                            elements, tell stories (such as tutorials), and
                            convey progression (such as a time-bar) The term web
                            animation broadly covers many different methods of
                            animation, such as user interface (UI) animation,
                            CSS animation, and JavaScript animation. It can
                            refer to anything from making a button shake when
                            clicked to designing a complex digital game. At its
                            most basic though, web animation is changing a
                            property over a period of time. So while most people
                            think of animation elements in motion, it also
                            includes changing the opacity or color of an object.
                          </p>{" "}
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  width: "100%",
                  // overflow: "auto",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item lg={6} style={{ height: "1000px" }}>
                    <Item>
                      <div style={{ height: "1000px" }}>
                        <img
                          className="d-block w-100"
                          src={require("./css/ss.gif")}
                          alt="First slide"
                          style={{ height: "60%" }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item lg={6}>
                    <Item>
                      <div
                        style={{
                          height: "550px",
                          textAlign: "center",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="About3"
                          style={{
                            height: "500px",
                            overflowY: "scroll",
                            overflowX: "hidden",
                          }}
                        >
                          <h1>What I Build</h1>{" "}
                          <div className="about4">
                            <h3 data-aos="fade-down" data-aos-delay="300">
                              {" "}
                              SEO (Search engigne organization)
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span> SEO...... </span> SEO (or search engine
                            optimization) is the practice of optimizing a
                            website so that it ranks well on search engines.
                            Website design is the design and creation of a
                            website and all of its pages. If you put them
                            together, SEO web design is the design and creation
                            of a website that is optimized for search engines.
                            It covers the SEO best practices that designers need
                            to follow when building websites. Why is SEO web
                            design important? If your company website has a
                            stunning design but you can’t get any of its web
                            pages to rank in search engine results, how are
                            people going to find your website? While social
                            media and PPC ads are great for increasing traffic,
                            it’s important to find organic (read: free) ways to
                            ramp up your website traffic and get to page one of
                            the SERPs (search engine result pages). Let’s go
                            over a few of the top benefits of SEO web design.
                          </p>{" "}
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselFadeExample;
