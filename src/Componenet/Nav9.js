import * as React from "react";
import { useState } from "react";
// import Menu from "./Menu.js";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Button, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import NewDrawer from "./NewDrawer";
import { styled } from "@mui/material/styles";
// import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BasicMenu from "./BasicMenu";
import BasicPopover from "./BasicPopover";
// import TabContext from "@mui/lab/TabContext";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
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
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const Icon = {
    color: "black",
    position: "relative",
    right: "40px",
    marginLeft: "330px",
    "&:hover": {
      color: "#AAA4AE",
    },
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
            {isMatch ? (
              <div sx={Icon}>
                <NewDrawer />
              </div>
            ) : (
              <>
                <Tabs
                  // value={value}
                  onChange={handleChange}
                  centered
                  // textColor="inherit"
                >
                  <Tab
                    value="one"
                    label="Home"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  />
                  <Tab
                    value="two"
                    label="About"
                    onClick={() => {
                      aboutb();
                    }}
                  />
                  <Tab
                    value="three"
                    label="Skill"
                    onClick={() => {
                      skillb();
                    }}
                  />
                  <Tab
                    value="three"
                    label="Project"
                    onClick={() => {
                      projectsb();
                    }}
                  />

                  <BasicPopover />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
