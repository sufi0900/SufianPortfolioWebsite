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
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item lg={12} style={{ width: "100%" }}>
                <Item
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "280px",
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={require("./123.gif")}
                      alt="First slide"
                      style={{
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Item>
              </Grid>
              <Grid
                item
                lg={6}
                style={{ overflowY: "scroll", overflowX: "hidden" }}
              >
                <Item
                  style={{
                    height: "280px",
                  }}
                >
                  {" "}
                  <Typography
                  // style={{
                  //   height: "280px",
                  // }}
                  >
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic elopment approach
                    that creates dynamic changes to the appearance of a website,
                    depending on the screen size and orientation of the device
                    being used to view it.", of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a elopment approach that
                    creates dynamic elopment approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.", of course. Responsive web design (RWD) is a web
                    development approach that creates dynamic changes to the
                    appearance of a elopment approach that creates dynamic
                    elopment approach that creates dynamic changes to the
                    appearance of a website, depending on the screen size and
                    orientation of the device being used to view it.", of
                    course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic elopment approach
                    that creates dynamic changes to the appearance of a website,
                    depending on the screen size and orientation of the device
                    being used to view it.", of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a elopment approach that
                    creates dynamic elopment approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.", of course. Responsive web design (RWD) is a web
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
              // height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item lg={12} style={{ width: "100%" }}>
                <Item
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "280px",
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={require("./css/mobile7.gif")}
                      alt="First slide"
                      style={{
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Item>
              </Grid>
              <Grid
                item
                lg={6}
                style={{ overflowY: "scroll", overflowX: "hidden" }}
              >
                <Item
                  style={{
                    height: "280px",
                  }}
                >
                  {" "}
                  <Typography
                  // style={{
                  //   height: "280px",
                  // }}
                  >
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic elopment approach
                    that creates dynamic changes to the appearance of a website,
                    depending on the screen size and orientation of the device
                    being used to view it.", of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a elopment approach that
                    creates dynamic elopment approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.", of course. Responsive web design (RWD) is a web
                    development approach that creates dynamic changes to the
                    appearance of a elopment approach that creates dynamic
                    elopment approach that creates dynamic changes to the
                    appearance of a website, depending on the screen size and
                    orientation of the device being used to view it.", of
                    course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic elopment approach
                    that creates dynamic changes to the appearance of a website,
                    depending on the screen size and orientation of the device
                    being used to view it.", of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a elopment approach that
                    creates dynamic elopment approach that creates dynamic
                    changes to the appearance of a website, depending on the
                    screen size and orientation of the device being used to view
                    it.", of course. Responsive web design (RWD) is a web
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
              // height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item lg={12} style={{ width: "100%" }}>
                <Item
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "280px",
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={require("./css/2017 Design Trends Guide.gif")}
                      alt="First slide"
                      style={{
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Item>
              </Grid>
              <Grid
                item
                lg={6}
                style={{ overflowY: "scroll", overflowX: "hidden" }}
              >
                <Item
                  style={{
                    height: "280px",
                  }}
                >
                  {" "}
                  <Typography
                  // style={{
                  //   height: "280px",
                  // }}
                  >
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic elopment approach
                    that creates dynamic changes to the appearance of a website,
                    depending on the screen size and orientation of the device
                    being used to view it.", of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a elopment approach that
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
              // height: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item lg={12} style={{ width: "100%" }}>
                <Item
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "280px",
                    }}
                  >
                    <img
                      className="d-block w-100"
                      src={require("./css/Сomputer.gif")}
                      alt="First slide"
                      style={{
                        height: "100%",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                </Item>
              </Grid>
              <Grid
                item
                lg={6}
                style={{ overflowY: "scroll", overflowX: "hidden" }}
              >
                <Item
                  style={{
                    height: "280px",
                  }}
                >
                  {" "}
                  <Typography
                  // style={{
                  //   height: "280px",
                  // }}
                  >
                    of course. Responsive web design (RWD) is a web development
                    approach that creates dynamic changes to the appearance of a
                    elopment approach that creates dynamic elopment approach
                    that creates dynamic changes to the appearance of a website,
                    depending on the screen size and orientation of the device
                    being used to view it.", of course. Responsive web design
                    (RWD) is a web development approach that creates dynamic
                    changes to the appearance of a elopment approach that
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
        </Carousel>
      </div>
    </>
  );
}

export default CarouselFadeExample;
