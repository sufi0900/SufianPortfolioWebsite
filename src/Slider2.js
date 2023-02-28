import Carousel from "react-bootstrap/Carousel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
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
import MyProject from "./Componenet/MyProject";
import Footer from "./Componenet/Footer";
import Skilldetail from "./Componenet/Skilldetail";
import Last from "./Componenet/Last";
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
              fontSize: "49px",
              backgroundColor: "red",
              borderRadius: "29px",
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
            }}
          />
        </span>
      </div>
    );
  };

  return (
    <>
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
                    <Skill />
                    <Last />
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
          <div class="thumbnail" style={{ height: "60%" }}>
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
                    <About />
                    <Skill />
                    <MyProject />
                    <Footer />
                    <Last />
                  </>
                )}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          {/* <div style={{ display: "block" }} className="mobiletab"> */}

          {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
          <h1 style={{ background: "#54b3d6", color: "white", width: "100%" }}>
            Mobile view (Iphone)
          </h1>
          <div class="thumbnail2 ">
            <img
              src={require("./css/iphone-6-png-34205.png")}
              style={{ width: "100%", display: "block" }}
            />

            <div class="caption3">
              <div>
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
          <h1 style={{ background: "#54b3d6", color: "white", width: "100%" }}>
            Mobile view (Type: Android)
          </h1>
          <br></br>
          <div class="thumbnail">
            {/* <div></div> */}
            <img
              src={require("./css/mobile3.gif")}
              style={{ width: "30%", display: "block" }}
            />
            <div class="caption4">
              {/* <img
                  src={require("./css/tablet.gif")}
                  style={{ width: "60%", display: "block" }}
                // /> */}
            </div>
          </div>
          <hr></hr>
          <h1 style={{ background: "#54b3d6", color: "white", width: "100%" }}>
            Tablet View(Vertical)
          </h1>
          <br></br>
          <div class="thumbnail">
            <img
              src={require("./css/mobile5.gif")}
              style={{ width: "40%", display: "block" }}
            />
            <div class="caption4">
              {/* <img
                  src={require("./css/tablet.gif")}
                  style={{ width: "60%", display: "block" }}
                // /> */}
            </div>
          </div>
          <Divider></Divider>
          <br></br>
          <br></br>
          <h1 style={{ background: "#54b3d6", color: "white", width: "100%" }}>
            Tablet View(Horziental)
          </h1>
          <br></br>
          <div class="thumbnail">
            <img
              src={require("./css/tablet-16333.png")}
              style={{ width: "60%", display: "block" }}
            />
            <div class="caption4">
              {/* <img
                  src={require("./css/tablet.gif")}
                  style={{ width: "60%", display: "block" }}
                // /> */}
              {/* // <Home2 />
                // <About />
                // <Skill /> */}
              <Video
                autoPlay
                loop
                muted
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {
                  // Do stuff
                }}
              >
                <source src={Intro} type="video/webm" />
              </Video>
            </div>
          </div>
          <Divider></Divider>
          <br></br>
          <br></br>
          <div class="thumbnail">
            <img
              src={require("./css/mobile6.gif")}
              style={{ width: "30%", display: "block" }}
            />
            <div class="caption4"></div>
          </div>
          <Divider></Divider>
          <br></br>
          <br></br>
          <div class="thumbnail">
            <img
              src={require("./css/mobile7.gif")}
              style={{ width: "90%", display: "block" }}
            />
            <div class="caption4"></div>
          </div>
          <Divider></Divider>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default CarouselFadeExample;
