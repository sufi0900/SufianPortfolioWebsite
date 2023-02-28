import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import ProgressBar from "react-bootstrap/ProgressBar";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Button } from "react-bootstrap";

export default function FolderList() {
  const progress = {
    width: "100px",
  };
  return (
    <Box>
      <>
        <style type="text/css">
          {`   
.btns {
background-color: red;
color: white;

}

.btn-xxl {
padding: 1rem 1.5rem;
font-size: 1.5rem;
}
.btn-secondary{       background-color: pink;}
.progress-bar{  background-color: blue;  }


}

`}
        </style>
      </>

      <List sx={{ bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
              style={{ height: "70px", width: "50px", background: "none" }}
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
    </Box>
  );
}
