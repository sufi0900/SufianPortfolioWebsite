import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import About from "./About";
import NewDA from "./NewDA";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ProgressBar from "react-bootstrap/ProgressBar";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Button } from "react-bootstrap";
import { useMediaQuery, useTheme } from "@mui/material";
import "../style.css";
const New4 = () => {
  //   const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const progress = {
    width: "100%",
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <br></br>
        <br></br>
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              backgroundColor: "#add8e6",
              fontSize: "27px",
              borderRadius: "8px",
              width: "100%",
              color: "blue",
            }}
          >
            {" "}
            <br></br>
            Visit This Website...
            <br></br>
            <br></br>
          </h1>
          <Grid
            item
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Item className="gira1">
              <div className="grial1">
                <span>
                  <img
                    src={require("./awkum.png")}
                    alt="sufi"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </span>
              </div>

              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                className="gri2"
              >
                {" "}
                <span
                  className="grid091 gri09"
                  //   style={{
                  //     position: "relative",
                  //     right: "20px",
                  //     fontSize: "22px",
                  //     display: "inline-block",
                  //     borderRadius: "20px",
                  //   }}
                >
                  <h1
                    style={{
                      backgroundColor: "#add8e6",
                      fontSize: "27px",
                      borderRadius: "8px",
                    }}
                  >
                    University Website
                  </h1>
                  This was my first website, I have created it for my university
                  MCS (2022-2024)
                </span>
              </div>
              <br></br>
              <br></br>
            </Item>
            <br></br>
            <br></br>
          </Grid>
          <Divider></Divider>
          <Grid
            item
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Item className="gira1">
              <div
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                className="gri2"
              >
                {" "}
                <span
                  className="grid091 gri091"
                  //   style={{
                  //     position: "relative",
                  //     right: "20px",
                  //     fontSize: "22px",
                  //     display: "inline-block",
                  //     borderRadius: "20px",
                  //   }}
                >
                  This website i just created to gain confidence in web
                  development, after learning some basic and advance of HTML5
                  and CSS3 I decided to make this website
                  <h1
                    style={{
                      backgroundColor: "#add8e6",
                      fontSize: "27px",
                      borderRadius: "8px",
                    }}
                  >
                    Visit This Website...
                  </h1>
                </span>
              </div>
              <div
                // style={{
                //   width: "60%",
                //   borderRadius: "20px",
                //   border: "2px solid biege",
                // }}
                className="grial1"
              >
                <span>
                  <img
                    src={require("../awkum.gif")}
                    alt="sufi"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                </span>
              </div>
              <br></br>
              <br></br>
            </Item>
            <br></br>
            <br></br>
          </Grid>
        </Grid>{" "}
        <br></br>
        <br></br>
        <br></br>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid Item style={{ width: "80%" }}>
            <Item>
              <h1
                style={{
                  backgroundColor: "#add8e6",
                  fontSize: "27px",
                  //   borderRadius: "8px",
                  color: "white",
                }}
              >
                {" "}
                More About this Project{" "}
              </h1>
              <h5 style={{ textAlign: "start" }}>
                This is pure HTML coding website. In our summer vacation of
                first semester I decided to build a website for our 2 year MCS
                Study program. It is not an easy task to build a full responsive
                website as it took me more than one month to complete this
                website and I have faced so many challenges and learned so many
                things about web development in bulilding this Website.
              </h5>
              <h2
                style={{
                  backgroundColor: "#add8e6",
                  fontSize: "27px",
                  borderRadius: "8px",
                }}
              >
                {" "}
                Technolgies i used to create this website{" "}
              </h2>
              <List sx={{ bgcolor: "background.paper" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./HTML5_Logo_512.png")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>

                  <ProgressBar animated now={90} style={progress} label="90%" />
                  <ListItemText primary="HTML5" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./HTML5_Logo_512.png")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./cs2.webp")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./jj.png")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./nn.png")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./rr.webp")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./xx.png")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./rr.webp")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      style={{
                        height: "70px",
                        width: "50px",
                        background: "none",
                      }}
                    >
                      <img
                        className="i-swing"
                        src={require("./rr.webp")}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Avatar>
                  </ListItemAvatar>
                  <ProgressBar animated now={50} style={progress} label="50%" />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default New4;
