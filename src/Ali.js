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
import "./style.css";
// import First from "./First";
function CarouselFadeExample() {
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
              fontSize: "40px",
              backgroundColor: "blue",
              borderRadius: "20px",
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
              fontSize: "40px",
              backgroundColor: "blue",
              borderRadius: "20px",
            }}
          />
        </span>
      </div>
    );
  };

  return (
    <>
      <div
        style={{
          width: "99%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Carousel
          fade
          variant="dark"
          indicators={false}
          style={{
            width: "90%",
          }}
          nextIcon={directionButtonse("Next")}
          prevIcon={directionButtonsf("Previous")}
          className="fives"
        >
          <Carousel.Item
            style={{
              width: "100%",
              // height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={
                {
                  // width: "82%",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // textAlign: "center",
                }
              }
            >
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={require("./1.jpg")}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <Typography
                    style={{
                      height: "500px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic changes to the
                    appearance of a website, depending on the screen size andive
                    years, we’ll likely need to design for a number of
                    additional inventions. When will the madness stop? It won’t,
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    website, depending on the screen size and orientation of the
                    device being used to view it.Almost every new client these
                    days wants a mobile version of their website. It’s
                    practically essential after all: one design for the
                    BlackBerry, another for the iPhone, the iPad, netbook,
                    Kindle — and all screen resolutions must be compatible, too.
                    In the next five years, we’ll likely need to design for a
                    number of additional inventions. When will the madness stop?
                    It won’t, of course. Responsive web design (RWD) is a web
                    development approach that creates dynamic changes to the
                    appearance of a elopment approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.",
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Carousel.Item>
          <Carousel.Item
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                width: "92%",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // textAlign: "center",
              }}
            >
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={require("./3.jpg")}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <Typography
                    style={{
                      height: "500px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    is a web development approach that creates dynamic changes
                    to the appearance of a website, depending on the screen size
                    and orientation of the device being used to view it.Almost
                    every new client these days wants a mobile version of their
                    website. It’s practically essential after all: one design
                    for the BlackBerry, another for the iPhone, the iPad,
                    netbook, Kindle — and all screen resolutions must be
                    compatible, too. In the next five years, we’ll likely need
                    to design for a number of additional inventions. When will
                    the madness stop? It won’t, of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.",
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Carousel.Item>
          <Carousel.Item
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                width: "92%",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // textAlign: "center",
              }}
            >
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={require("./sufi2.jpeg")}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <Typography
                    style={{
                      height: "500px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    desc: "Almost every new client these days wants a mobile
                    version of their website. It’s practically essential after
                    all: one design for the BlackBerry, another for the iPhone,
                    the iPad, netbook, Kindle — and all screen resolutions must
                    be compatible, too. In the next five years, we’ll likely
                    need to design for a number of additional inventions. When
                    will the madness stop? It won’t, of course. Responsive web
                    design (RWD) is a web development approach that creates
                    dynamic changes to the appearance of a website, depending on
                    the screen size and orientation of the device being used to
                    view it.Almost every new client these days wants a mobile
                    version of their website. It’s practically essential after
                    all: one design for the BlackBerry, another for the iPhone,
                    the iPad, netbook, Kindle — and all screen resolutions must
                    be compatible, too. In the next five years, we’ll likely
                    need to design for a number of additional inventions. When
                    will the madness stop? It won’t, of course. Responsive web
                    design (RWD) is a web development approach that creates
                    dynamic changes to the appearance of a website, depending on
                    the screen size and orientation of the device being used to
                    view it.Almost every new client these days wants a mobile
                    version of their website. It’s practically essential after
                    all: one design for the BlackBerry, another for the iPhone,
                    the iPad, netbook, Kindle — and all screen resolutions must
                    be compatible, too. In the next five years, we’ll likely
                    need to design for a number of additional inventions. When
                    will the madness stop? It won’t, of course. Responsive web
                    design (RWD) is a web development approach that creates
                    dynamic changes to the appearance of a website, depending on
                    the screen size and orientation of the device being used to
                    view it.",
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Carousel.Item>
        </Carousel>
      </div>
      {isMatch ? (
        <div
          style={{
            width: "99%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <Carousel
            fade
            variant="dark"
            indicators={false}
            style={{
              width: "88%",
              overflow: "hidden",
            }}
            nextIcon={directionButtonse("Next")}
            prevIcon={directionButtonsf("Previous")}
            className="fives"
          >
            <Carousel.Item
              style={{
                width: "100%",
                // height: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                style={
                  {
                    // width: "82%",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // textAlign: "center",
                  }
                }
              >
                <Grid item lg={12}>
                  <Item>
                    <div style={{ height: "280px" }}>
                      <img
                        className="d-block w-100"
                        src={require("./123.gif")}
                        alt="First slide"
                        style={{
                          height: "100%",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      />
                    </div>
                  </Item>
                </Grid>
                <Grid item lg={6}>
                  <Item>
                    {" "}
                    <Typography
                      style={{
                        height: "280px",
                        overflowY: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      of course. Responsive web design (RWD) is a web
                      development approach that creates dynamic changes to the
                      appearance of a elopment approach that creates dynamic
                      elopment approach that creates dynamic changes to the
                      appearance of a website, depending on the screen size and
                      orientation of the device being used to view it.",
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Carousel.Item>
            <Carousel.Item
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  width: "92%",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // textAlign: "center",
                }}
              >
                <Grid item lg={12}>
                  <Item>
                    <div style={{ height: "280px" }}>
                      <img
                        className="d-block w-100"
                        src={require("./css/Data Loading Animation.gif")}
                        alt="First slide"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                    {/* <div style={{ height: "280px" }}>
                      <img
                        className="d-block w-100"
                        src={require("./css/Data Loading Animation.gif")}
                        alt="First slide"
                        style={{ overflow: "hidden" }}
                      />
                    </div> */}
                    {/* <img
                      className="d-block w-100"
                      src={require("./3.jpg")}
                      alt="First slide"
                      style={{ height: "280px", width: "100%" }}
                    /> */}
                  </Item>
                </Grid>
                <Grid item lg={6}>
                  <Item>
                    {" "}
                    <Typography
                      style={{
                        height: "280px",
                        overflowY: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      is a web development approach that creates dynamic changes
                      to the appearance of a website, depending on the screen
                      size and orientation of the device being used to view
                      it.Almost changes to the appearance of a website,
                      depending on the screen size and orientation of the device
                      being used to view it.",
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Carousel.Item>
            <Carousel.Item
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  width: "92%",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // textAlign: "center",
                }}
              >
                <Grid item lg={6}>
                  <Item>
                    <div style={{ height: "280px" }}>
                      <img
                        className="d-block w-100"
                        src={require("./css/2017 Design Trends Guide.gif")}
                        alt="First slide"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </Item>
                </Grid>
                <Grid item lg={6}>
                  <Item>
                    {" "}
                    <Typography
                      style={{
                        height: "280px",
                        overflowY: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      desc: "Almost every new client these days wants a mobile
                      version of their website. It’s practically essential after
                      all: one design for the BlackBerry, another for the ve web
                      design (RWD) is a web development approach that creates
                      dynamic changes to the appearance of a website, depending
                      on the screen size and orientation of the device being
                      used to view it.",
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Carousel.Item>
          </Carousel>
        </div>
      ) : (
        <>
          <div class="thumbnail" style={{ height: "60%", overflow: "hidden" }}>
            <img
              src={require("./css/The Content Collective - Monthly Social + Blog Post Club.png")}
              style={{ width: "90%", display: "block" }}
            />
            <div class="caption0">
              <div style={{ textAlign: "start" }}>
                <Carousel
                  fade
                  variant="dark"
                  indicators={false}
                  style={{
                    width: "90%",
                  }}
                  nextIcon={directionButtonse("Next")}
                  prevIcon={directionButtonsf("Previous")}
                  // className="fives"
                >
                  <Carousel.Item
                    style={{
                      width: "100%",
                      height: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item lg={6}>
                        <Item>
                          <div style={{ height: "800px" }}>
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
                          {" "}
                          <Typography
                            style={{
                              height: "800px",
                              overflowY: "scroll",
                              overflowX: "hidden",
                            }}
                          >
                            of course. Responsive web design (RWD) is a web
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to view it.",
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Carousel.Item>
                  <Carousel.Item
                    style={{
                      width: "100%",
                      // height: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item lg={6}>
                        <Item>
                          <div style={{ height: "800px" }}>
                            <img
                              className="d-block w-100"
                              src={require("./css/Data Loading Animation.gif")}
                              alt="First slide"
                              style={{ height: "60%" }}
                            />
                          </div>
                        </Item>
                      </Grid>
                      <Grid item lg={6}>
                        <Item>
                          {" "}
                          <Typography
                            style={{
                              height: "800px",
                              overflowY: "scroll",
                              overflowX: "hidden",
                            }}
                          >
                            of course. Responsive web design (RWD) is a web
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to view it.",
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Carousel.Item>
                  <Carousel.Item
                    style={{
                      width: "100%",
                      // height: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item lg={6}>
                        <Item>
                          <div style={{ height: "800px" }}>
                            <img
                              className="d-block w-100"
                              src={require("./css/2017 Design Trends Guide.gif")}
                              alt="First slide"
                              style={{ height: "60%" }}
                            />
                          </div>
                        </Item>
                      </Grid>
                      <Grid item lg={6}>
                        <Item>
                          {" "}
                          <Typography
                            style={{
                              height: "800px",
                              overflowY: "scroll",
                              overflowX: "hidden",
                            }}
                          >
                            of course. Responsive web design (RWD) is a web
                            development approach that creates dynamic changes to
                            the appearance of a elopment approach that creates
                            creen size and orientation of the device being used
                            to view it.",
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </>
      )}
      <Grid
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   textAlign: "center",
      // }}
      >
        <br></br>
        <br></br>
        <br></br>
        <Grid
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   alignItems: "center",
          //   textAlign: "center",
          // }}
          className="grid09"
        >
          <div
            class="tablet"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            <Home2 />

            <div class="content"></div>
          </div>
          <br></br>
          <div
            class="smartphone"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            <img src={require("./awkum.gif")} />
            <div class="content"></div>
          </div>
        </Grid>
      </Grid>

      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          width: "100%",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <div class="thumbnail">
            <img
              src={require("./pc5.png")}
              style={{ width: "100%", display: "block" }}
            />
            <div class="caption">
              <div style={{ textAlign: "start" }}>
                {isMatch ? (
                  <Home2 />
                ) : (
                  <>
                    <Nav11 />
                  </>
                )}
              </div>
              {/* </p> */}
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="thumbnail ">
            <img
              src={require("./css/The Content Collective - Monthly Social + Blog Post Club.png")}
              style={{ width: "100%", display: "block" }}
            />
            <div class="caption2">
              <div style={{ textAlign: "start" }}>
                {isMatch ? (
                  <Home2 />
                ) : (
                  <>
                    <Nav11 />
                  </>
                )}
              </div>
            </div>
          </div>
          <div class="thumbnail ">
            <img
              src={require("./css/iphone-6-png-34205.png")}
              style={{ width: "100%", display: "block" }}
            />
            <div class="caption3">
              <div style={{ textAlign: "start" }}>
                {/* {isMatch ? (
                  <Home2 />
                ) : (
                  <>
                    <Nav11 />
                  </>
                )} */}
                {/* <img src={require("./3")} /> */}
                <Video
                  autoPlay
                  loop
                  muted
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster="http://sourceposter.jpg"
                  onCanPlayThrough={() => {
                    // Do stuff
                  }}
                >
                  <source src={Intro} type="video/webm" />
                  {/* <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src="http://source.vtt"
                    default
                  /> */}
                </Video>
              </div>
            </div>
          </div>
          <div class="thumbnail ">
            <img
              src={require("./css/tablet-16306.png")}
              style={{ width: "60%", display: "block" }}
            />
            <div class="caption4">
              <div style={{ textAlign: "start" }}>
                {isMatch ? (
                  <Home2 />
                ) : (
                  <>
                    <Nav11 />
                  </>
                )}
                {/* <img src={require("./3")} /> */}
                {/* <Video
                  autoPlay
                  loop
                  muted
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster="http://sourceposter.jpg"
                  onCanPlayThrough={() => {
                    // Do stuff
                  }}
                >
                  <source src={Intro} type="video/webm" />
                  <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src="http://source.vtt"
                    default
                  />
                </Video> */}
                {/* <img src={require("./css/tablet.gif")} /> */}
                <Nav11 />
              </div>
            </div>
          </div>
          <div class="thumbnail ">
            <img
              src={require("./css/tablet.gif")}
              style={{ width: "60%", display: "block" }}
            />
            <div class="caption4">
              <div style={{ textAlign: "start" }}></div>
            </div>
          </div>
          <hr></hr>
          <div class="thumbnail ">
            <img
              src={require("./css/mobile3.gif")}
              style={{ width: "60%", display: "block" }}
            />
            <div class="caption4">
              <div style={{ textAlign: "start" }}></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel
          fade
          variant="dark"
          indicators={false}
          touch={false}
          wrap={false}
          slide={false}
          keyboard={false}
          style={{
            width: "90%",
            overflow: "hidden",
          }}
          nextIcon={directionButtonse("Next")}
          prevIcon={directionButtonsf("Previous")}
          className="fives"
        >
          <Carousel.Item
            style={{
              width: "100%",
              // height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={
                {
                  // width: "82%",
                  // display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  // textAlign: "center",
                }
              }
            >
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={require("./1.jpg")}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <Typography
                    style={{
                      height: "500px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic changes to the
                    appearance of a website, depending on the screen size andive
                    years, we’ll likely need to design for a number of
                    additional inventions. When will the madness stop? It won’t,
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    website, depending on the screen size and orientation of the
                    device being used to view it.Almost every new client these
                    days wants a mobile version of their website. It’s
                    practically essential after all: one design for the
                    BlackBerry, another for the iPhone, the iPad, netbook,
                    Kindle — and all screen resolutions must be compatible, too.
                    In the next five years, we’ll likely need to design for a
                    number of additional inventions. When will the madness stop?
                    It won’t, of course. Responsive web design (RWD) is a web
                    development approach that creates dynamic changes to the
                    appearance of a elopment approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.",
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Carousel.Item>
          <Carousel.Item
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                width: "92%",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // textAlign: "center",
              }}
            >
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={require("./3.jpg")}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <Typography
                    style={{
                      height: "500px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    is a web development approach that creates dynamic changes
                    to the appearance of a website, depending on the screen size
                    and orientation of the device being used to view it.Almost
                    every new client these days wants a mobile version of their
                    website. It’s practically essential after all: one design
                    for the BlackBerry, another for the iPhone, the iPad,
                    netbook, Kindle — and all screen resolutions must be
                    compatible, too. In the next five years, we’ll likely need
                    to design for a number of additional inventions. When will
                    the madness stop? It won’t, of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.",
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Carousel.Item>
          <Carousel.Item
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={2}
              style={{
                width: "92%",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // textAlign: "center",
              }}
            >
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <img
                    className="d-block w-100"
                    src={require("./sufi2.jpeg")}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                </Item>
              </Grid>
              <Grid item lg={6}>
                <Item>
                  {" "}
                  <Typography
                    style={{
                      height: "500px",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    }}
                  >
                    desc: "Almost every new client these days wants a mobile
                    version of their website. It’s practically essential after
                    all: one design for the BlackBerry, another for the iPhone,
                    the iPad, netbook, Kindle — and all screen resolutions must
                    be compatible, too. In the next five years, we’ll likely be
                    compatible, too. In the next five years, we’ll likely need
                    to design for a number of additional inventions. When will
                    the madness stop? It won’t, depending on the screen size and
                    orientation of the device being used to view it.",
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselFadeExample;
