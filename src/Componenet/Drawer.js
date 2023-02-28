import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Home, MailLock } from "@mui/icons-material";

const DrawerComp = () => {
  const List = styled(Paper)(({ theme }) => ({
    width: 250,
    height: 200,
    backgroundColor: "Blue",
    color: "white",
  }));
  const [openDrawer, setOpenDrawer] = useState(false);
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
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ zIndex: 1222 }}
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
            <ListItemText
              primary={"About"}
              onClick={() => {
                aboutb();
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
