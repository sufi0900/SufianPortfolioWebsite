import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import { Home, MailLock } from "@mui/icons-material";
import BasicPopover from "./BasicPopover";
import { NavHashLink } from "react-router-hash-link";

export default function TemporaryDrawer() {
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
  const [state, setState] = React.useState({
    // top: false,
    // left: true,
    // left: false,
    // bottom: false,
    // right: false,
  });
  const Btn = {
    overlfow: "hidden",
  };
  const Icon = {
    color: "white",
    position: "relative",
    // right: "70px",
    // marginRight: "270px",
    "&:hover": {
      color: "#AAA4AE",
    },
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "white",
      }}
      style={{ background: "pink" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ background: "pink", zIndex: "1222" }}>
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
          {/* <ListItemText primary={""} /> */}
          <NavHashLink to="#cssd">cssd</NavHashLink>{" "}
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MailLock />
          </ListItemIcon>
          <ListItemText
            primary={"SKill"}
            onClick={() => {
              skillb();
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
      <List style={{ background: "pink", zIndex: "1222" }}>
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
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {[<MenuIcon />].map((anchor) => (
        <React.Fragment sx={Icon} key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={Icon}>
            {anchor}
          </Button>
          <Drawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
