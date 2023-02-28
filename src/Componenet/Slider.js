import { useState, useEffect } from "react";
import { sliderData } from "./sliderData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./1.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";

import "../style.css";
import Slider4 from "../Slider4";
const Slider = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  AOS.init();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 18000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    // <div className="slider001">
    <Grid className="slider0">
      {/* <img src={require("./tv-11228.png")} alt="" /> */}
      {/* <div class="thumbnail text-center">
        <img
          src={require("./css/The Content Collective - Monthly Social + Blog Post Club.png")}
          style={{ width: "100%", display: "block", height: "100vh" }}
        />

        <div class="caption">
          <p style={{ color: "black" }}></p>
        </div>
      </div> */}
      <ArrowCircleLeftIcon
        className="arrow arrow-left prev"
        onClick={prevSlide}
        style={{
          fontSize: "40px",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      />

      <ArrowCircleRightIcon
        className="arrow arrow-right next"
        onClick={nextSlide}
        style={{
          fontSize: "40px",
          backgroundColor: "white",
          borderRadius: "20px",
          hover: true,
        }}
      />

      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slidez current" : "slidez"}
            key={index}
          >
            <div></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "auto",
              }}
            >
              <Grid
                container
                className="five"
                style={{ width: "98%", height: "auto" }}
              >
                {index === currentSlide && (
                  // <div style={{ display: "flex", justifyContent: "center" }}>
                  <Grid container spacing={1} className="gridd">
                    <Grid
                      item
                      lg={6}
                      sm={12}
                      sx={{
                        display: {
                          xs: "none",
                          lg: "block",
                          xl: "block",
                          sm: "none",
                          md: "none",
                        },
                      }}
                    >
                      <Item>
                        <div className="nonee">
                          <img
                            data-aos="zoom-in-right"
                            data-aos-delay="700"
                            src={slide.image}
                            alt="website"
                            style={{ height: "500px" }}
                          />
                        </div>
                      </Item>
                    </Grid>
                    <Grid item lg={6} sm={12}>
                      <Item>
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
                              {slide.heading}
                            </h3>{" "}
                          </div>
                          <p data-aos="fade-up" data-aos-delay="500">
                            <span>{slide.span} </span> {slide.desc}
                          </p>{" "}
                        </div>
                      </Item>
                    </Grid>
                    {/* <div className="about4"> */}
                    {/* </div> */}
                  </Grid>
                )}
              </Grid>
            </div>
          </div>
        );
      })}
    </Grid>
  );
};

export default Slider;
