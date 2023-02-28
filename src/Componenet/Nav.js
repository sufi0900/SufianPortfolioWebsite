import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2";
import theme from "./theme";
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
import { ThemeProvider } from "styled-components";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import { CardGiftcard } from "@mui/icons-material";

const Nav = (props: Props) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const AppBar = styled(Paper)(() => ({
    borderRadius: "16px",
    backgroundColor: "blue",
    textAlign: "center",
    // color: "white",
    border: "5px solid red",
  }));
  const Tabs = styled(Paper)(() => ({
    // borderRadius: "16px",
    fontSize: "20px",
  }));

  const navigate = useNavigate();
  const aboutb = () => {
    navigate("/about");
  };

  const sliderb = () => {
    navigate("/skilld");
  };
  const skillb = () => {
    navigate("/skill");
  };
  const projectsb = () => {
    navigate("/projects");
  };
  const contactb = () => {
    navigate("/contact");
  };
  const btn = {
    borderRadius: "16px",
    background: "pink",
    color: "black",
    transform: "0.5s",
    transition: "0.5s",

    "&:hover": {
      color: "purple",
      background: "red",
      borderRadius: "2px",
    },
  };

  return (
    <div>
      {/* <br></br>

        <CardGiftcard
          sx={{
            width: 300,
            color: "red",
          }}
        />
        <CardGiftcard />
        <CardGiftcard />
        <Button className="">Styled with Hook API</Button>
        <Button variant="text">Text</Button>
        <Button
          variant="contained"
          style={{ background: "white", color: "black" }}
        >
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button> */}
      {/* <HideOnScroll {...props}> */}
      <AppBar>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{
                  marginLeft: "auto",
                  "& .MuiTabs-indicator": { backgroundColor: "red" },
                  // "& .MuiTab-root": { color: "black" },
                  // "& .Mui-selected": { color: "blue" },
                }}
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  label="home"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  style={{ fontSize: "18px" }}
                ></Tab>
                <Tab
                  label="about"
                  onClick={() => {
                    aboutb();
                  }}
                  style={{ fontSize: "18px" }}
                ></Tab>
                <Tab
                  label="skill"
                  onClick={() => {
                    skillb();
                  }}
                />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                style={{ color: "black" }}
              >
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
    </div>
    // </ThemeProvider>
  );
};

export default Nav;
