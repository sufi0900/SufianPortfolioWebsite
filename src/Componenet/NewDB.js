import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import Abc from "./Abc";
import Abd from "./Abd";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const NewDB = () => {
  //choose the screen size

  const Item = {
    position: "fixed",
    fontSize: "34px",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  };
  const Item2 = {
    fontSize: "34px",
    position: "fixed",
    marginLeft: "-10px",
    marginTop: "13px",

    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  };
  return (
    <>
      <div
        className="container999"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <div>
          <Abd />
        </div>
        <div>
          <Abc />
        </div>
      </div>
      {/* <div id="mySidenav" className="sidenav">
        <Grid>
          <p
            href="javascript:void(0)"
            className="closebtn"
            onClick={closeNav}
            style={{ color: "white" }}
          >
            <br></br>

            <CloseIcon sx={Item2} onClick={closeNav} />
          </p>
          <br></br>
          <a href="#">About</a>
          <NavHashLink
            to="#cssd"
            activeClassName="selected"
            activeStyle={{ color: "red" }}
            // etc...
          >
            Link to Hash Fragment
          </NavHashLink>
          <Link to="/skill/new">About</Link>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </Grid>
      </div>
      <div id="main">
        <MenuIcon sx={Item} onClick={openNav} />

        <div style={{ marginLeft: "35px" }}>
          <Abc />
        </div>
      </div> */}
    </>
  );
};

export default NewDB;
