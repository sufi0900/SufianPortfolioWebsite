import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FileDownloadDoneOutlinedIcon from "@mui/icons-material/FileDownloadDoneOutlined";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { Picture } from "react-responsive-picture";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Button from "react-bootstrap/Button";
// import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import "animate.css";
import ListA from "./ListA";
import { useMediaQuery, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ProgressBar from "react-bootstrap/ProgressBar";
import ThemeProvider from "react-bootstrap/ThemeProvider";
// import { Button } from "react-bootstrap";
// import Spin from "./Spin";
import Button from "react-bootstrap/Button";

const About = (props: Props) => {
  <>
    <style type="text/css">
      {`   
.progress-bar {

color:red;}
.btns {
  background-color: red;
  color: white;
  
  }

`}
    </style>
  </>;
  const progress = {
    width: "100%",
    height: "50px",
    borderRadius: "40px",
    color: "white",

    // background: "white",
  };

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  AOS.init();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <div>
        <div className="About001" id="About">
          <div className="About">
            <Grid container spacing={2}>
              <Grid item lg={6} sm={12}>
                <Item>
                  <div className="About1">
                    <h1 data-aos="zoom-in" data-aos-delay="200">
                      About Me
                    </h1>
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="400"
                      style={{ overflow: "hidden" }}
                    >
                      <span>Who am i and how i got here</span> Hello! My name is
                      Sufian Mustafa and I enjoy creating things that live on
                      the internet. My interest in web development started when
                      i attend my first web fundamental class from a professor
                      of my university. From that day i started learn everything
                      about web development and now i am expert in many things
                      related to web development. <br></br>
                      <br></br>
                      <span>What am I currently doing </span> I am still working
                      and learning new technologies along with i am doing
                      freelancing. A big part of my everyday spend on doing
                      research on new web technologies. I like to learn new
                      technologies <br></br>
                      Here are a few technologies I’ve been working with
                      recently
                      <br></br>
                      <ul>
                        <li className="a-sigh">
                          <FileDownloadDoneOutlinedIcon
                            style={{ color: "blue", marginTop: "3px" }}
                          />
                          HTML
                        </li>
                        <li className="i-swings">
                          {" "}
                          <FileDownloadDoneOutlinedIcon
                            style={{ color: "blue" }}
                          />
                          CSS
                        </li>
                        {"   "}
                        <li className="i-swings">
                          <FileDownloadDoneOutlinedIcon
                            style={{ color: "blue" }}
                          />
                          Javascript(ES5)
                        </li>
                        {"   "}
                        <li className="i-swings">
                          <FileDownloadDoneOutlinedIcon
                            style={{ color: "blue" }}
                          />
                          ReactJS
                        </li>
                        {"   "}
                        <li className="i-swings">
                          <FileDownloadDoneOutlinedIcon
                            style={{ color: "blue" }}
                          />
                          Bootstrap
                        </li>
                      </ul>
                    </p>
                  </div>
                  <List sx={{ bgcolor: "background.paper" }}>
                    <ListItem>
                      <ProgressBar
                        animated
                        now={90}
                        style={progress}
                        label="90%"
                        variant="prgo"
                      />
                      <h1>FrontEnd</h1>
                    </ListItem>

                    <ListItem>
                      <ProgressBar
                        animated
                        now={50}
                        style={progress}
                        label="40%"
                        variant="warning"
                      />
                      <h1>BackEnd</h1>
                    </ListItem>
                  </List>
                </Item>
              </Grid>
              {/* {isMatch ? (
                <div>
                  <div>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item sm={12}>
                          <Item>
                            <img
                              src={require("./sufi2.jpeg")}
                              alt="sufi"
                              style={{ height: "auto", width: "100%" }}
                            />
                            <ListA
                              style={{
                                height: "auto",
                                width: "100%",
                              }}
                            /> */}
              {/* </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </div>
              ) : (
                <> */}
              <Grid item lg={6} sm={12} style={{ overflow: "auto" }}>
                <Item>
                  <div className="About2" style={{ overflow: "auto" }}>
                    <div
                      className="image-area"
                      data-aos="zoom-in-down"
                      data-aos-offset="400"
                      data-aos-delay="300"
                    >
                      <div className="img-wrapper">
                        <img src={require("./sufi2.jpeg")} alt="sufi" />
                        <h2>SuFiaN MusTaFa</h2>
                      </div>
                    </div>
                  </div>
                  <br></br>

                  <Container maxWidth="sm">
                    <Grid item lg={12} sm={12}>
                      <ListA />
                    </Grid>
                  </Container>
                </Item>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
