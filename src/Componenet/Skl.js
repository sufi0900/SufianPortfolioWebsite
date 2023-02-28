import React from "react";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import SideDrawer from "./SideDrawer";
import "./Animte.css";
import { Link, useNavigate } from "react-router-dom";
import DrawerComp from "./Drawer";
import { alpha } from "@mui/material/styles";
import RecommendIcon from "@mui/icons-material/Recommend";
const Skl = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: "blue",
    borderRadius: "16px",
    background: "pink",

    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    "&:hover": {
      background: "green",
    },
    // color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();
  const aboutb = () => {
    navigate("/about");
  };

  const sxStylea = {
    color: "purple",
    "&:hover": {
      color: "red",
    },
  };
  return (
    <div>
      Skl
      <div>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>

        {/* <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <h1 class="headline">
          Widgeasdt Inc
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="animate__animated animate__backInDown"> lorem</h2> asd
          asd asd asd asd asd asd asd asd
        </h1>
        <h1>animateOut</h1>
      </ScrollAnimation> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <React.Fragment> */}

        {/* <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  label="about"
                  onClick={() => {
                    aboutb();
                  }}
                ></Tab>
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar> */}
        {/* </React.Fragment> */}
        <div className="wqe animate__animatedd animate__zoomIna">
          {" "}
          <h1 className="asdd">
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
            MusTaFa
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </h1>
          <RecommendIcon sx={sxStylea} />
          <RecommendIcon />
          <RecommendIcon />
          <Grid container spacing={2}>
            <Grid item lg={4} xs={12} className="grid">
              <Item
                style={inlineStylea}
                style={{
                  color: "black",
                  backgroundColor: "#fff5d7",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                }}
              >
                xs=8 SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN
                MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa
                SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN
                MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN MusTaFa
                {/* <img src={require("./tv-11228.png")} alt="" /> */}
              </Item>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Item>
                xs=8 SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN
                MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa
                SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN
                MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                SuFiaN MusTaFa
              </Item>
            </Grid>

            <Grid item lg={4} xs={6} sm={4} md={6}>
              <Item>
                {" "}
                loremasd loremasdads
                <h1>
                  xs=8 SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                  SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa
                  SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa
                  SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN
                  MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                  SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN MusTaFa
                </h1>
              </Item>
            </Grid>
            <Grid item lg={6} xs={6} sm={4} md={6}>
              <Item>
                xs=8
                <h3>
                  xs=8 SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                  SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa
                  SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN MusTaFa
                  SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN SuFiaN
                  MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa
                  SuFiaN SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN MusTaFa SuFiaN
                  MusTaFa SuFiaN MusTaFa
                </h3>
              </Item>
            </Grid>
            <Grid
              item
              xs
              zeroMinWidth
              lg={5}
              minWidth={0}
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                minWidth: "0",
              }}
            >
              <Item>
                xs=8
                <h3>
                  adada1 I am in learning phase of the material-ui and I am
                  facing an issue that I am not able to float the grid content
                  into right side. I tried alignItems="flex-start"
                  justify="flex-end" direction="row" in the container grid but
                  not succeed and also tried css float:right property. I go
                  through the answer of stackoverflow question but it not work
                  for me. My Code is below and codesandbox link
                </h3>
                <img
                  src={require("./tv-11228.png")}
                  alt=""
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "100px",
                  }}
                />
              </Item>
            </Grid>
          </Grid>
          <br></br>
          {/* <Grid2 container spacing={2}>
          <Grid2 item lg={10} xs={6} sm={4} md={2}>
            <Item>
              <h3>
                adada1 I am in learning phase of the material-ui and I am facing
                an issue that I am not able to float the grid content into right
                side. I tried alignItems="flex-start" justify="flex-end"
                direction="row" in the container grid but not succeed and also
                tried css float:right property. I go through the answer of
                stackoverflow question but it not work for me. My Code is below
                and codesandbox link
              </h3>
            </Item>
          </Grid2>
        </Grid2> */}
          <div>
            <motion.button
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
            />

            <p>11221asda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skl;
