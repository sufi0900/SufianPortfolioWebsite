import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Home, MailLock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import BasicPopover from "./BasicPopover";
import DrawerComp from "./Drawer";
import NewDrawer from "./NewDrawer";
import NewDrawer2 from "./NewDrawer2";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const aboutb = () => {
    navigate("/about");
  };

  const sliderb = () => {
    navigate("/skilld");
  };

  const projectsb = () => {
    navigate("/projects");
  };
  const contactb = () => {
    navigate("/contact");
  };
  const skillb = () => {
    navigate("/skill");
  };
  const [value, setValue] = useState();

  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const Iconbtn = {
    position: "fixed",
    color: "black",
    marginLeft: 100,

    background: "white",
    zIndex: "100",
    width: "10px",
    fontSize: "10px",
    borderRadius: "10px",
    border: "2px solid black",
    "&:hover": {
      color: "black",
      background: "red",
    },
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {isMatch ? (
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "-159px" }}>
                <NewDrawer2 />
              </div>
              <div
                style={{
                  marginLeft: "-122px",
                  position: "relative",
                  left: "170px",
                }}
              >
                <NewDrawer />
              </div>
            </div>
          ) : (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 82,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>

              <Tabs
                // value={value}
                // onChange={handleChange}
                centered
                sx={{ marginRight: -12 }}
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

                <BasicPopover />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isMatch ? (
        <h1></h1>
      ) : (
        <>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose} sx={Iconbtn}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>

            <List>
              <br></br>

              <ListItemButton>
                <ListItemIcon>
                  <MailLock />
                </ListItemIcon>
                <ListItemText
                  primary={"About"}
                  onClick={() => {
                    aboutb();
                  }}
                />

                <ListItemIcon>
                  <MailLock />
                </ListItemIcon>
                <ListItemText
                  primary={"About"}
                  onClick={() => {
                    aboutb();
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MailLock />
                </ListItemIcon>
                <ListItemText
                  primary={"About"}
                  onClick={() => {
                    aboutb();
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MailLock />
                </ListItemIcon>
                <ListItemText
                  primary={"About"}
                  onClick={() => {
                    aboutb();
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <MailLock />
                </ListItemIcon>
                <ListItemText
                  primary={"About"}
                  onClick={() => {
                    aboutb();
                  }}
                />
              </ListItemButton>
            </List>
          </Drawer>
        </>
      )}
    </Box>
  );
}
