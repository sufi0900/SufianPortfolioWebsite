import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import ListBar from "./ListBar";
import ListBar2 from "./ListBar2";
import ListA from "./ListA";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skill = () => {
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
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <div className="six">
      {loading ? (
        <div className="asda">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      ) : (
        <div>
          {/* <div className="skills1"> */}
          {/* <div className="container1s"> */}
          <br></br>
          <br></br>
          <br></br>
          {/* <div className="about41">
            <h3>
              <Link to="/skill/skilldetail" style={{ color: "orange" }}>
                {" "}
                My Skills{" "}
              </Link>
            </h3>
          </div> */}
          <Grid
            container
            spacing={2}
            padding={2}
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Grid item lg={8} sm={12} style={{ width: "100%" }}>
              <Item style={{ width: "100%" }}>
                <div className="about41">
                  <h3>
                    <Link to="/skill/skilldetail" style={{ color: "orange" }}>
                      {" "}
                      My Skills{" "}
                    </Link>
                  </h3>
                </div>
                <ListBar style={{ width: "100%" }} />
              </Item>
            </Grid>

            <Grid item lg={4} sm={12}>
              <Item>
                <div className="About21">
                  <div className="wrapper0">
                    <img
                      src={require("./sufi12.jpeg")}
                      alt="sufian Mustafa"
                      style={{
                        height: "auto",
                        width: "240px",
                        border: "1px solid red",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <div>
                    <Typography>
                      I have high skills in developing and i like to create
                      websites that live on Internet. I like to learn more and
                      more about web development and want go more deep in web
                      developing & i always search and learn new technologies.
                      The best thing about me that i like is problem solving. On
                      the Initial Stages of web development I have face so many
                      challenges and without any expert help i solved my every
                      problem.
                    </Typography>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
    // </Box>
  );
};

export default Skill;
