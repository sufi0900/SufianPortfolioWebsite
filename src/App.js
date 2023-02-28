import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componenet/Navbar";
import Home2 from "./Componenet/Home2";
import { ProSidebarProvider } from "react-pro-sidebar";

import "./Componenet/meenu.jpeg";
import Aboutsec from "./Componenet/Aboutsec";
import Slider from "./Componenet/Slider";
import Skill from "./Componenet/Skill";
import MyProject from "./Componenet/MyProject";
import Footer from "./Componenet/Footer";
import Contact5 from "./Componenet/Contact5";
import "./Loader2";
import Skilldetail from "./Componenet/Skilldetail";
// import Menu2 from "./Componenet/Menu2";
import First from "./First";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ContentLoader, { Facebook } from "react-content-loader";
import { useState, CSSProperties, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import NavBarReal from "./Componenet/NavBarReal";
import Nav9 from "./Componenet/Nav9";
import theme from "./Componenet/theme";
import IndividualIntervalsExample from "./Componenet/IndividualIntervalsExample";
import { ThemeProvider, CssBaseline } from "@mui/material";
import BasicMenu from "./Componenet/BasicMenu";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SideBar from "./Componenet/SideBar";
import ResponsiveDrawer from "./Componenet/ResponsiveDrawer";
import NewDB from "./Componenet/NewDB";
import Abd from "./Componenet/Abd";
import NewDA from "./Componenet/NewDA";
import ListA from "./Componenet/ListA";
import Ali from "./Ali";
import Button from "react-bootstrap/Button";
import BootSt from "./BootSt";
import New3 from "./Componenet/New3";
import New4 from "./Componenet/New4";
import Last from "./Componenet/Last";
// import { Carousel } from "react-bootstrap";

const App = () => {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  let [color, setColor] = useState("#ffffff");
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  if (process.env.NODE_ENV !== "development") console.log = () => {};
  console.log = console.warn = console.error = () => {};

  // Look ma, no error!
  console.error("Something bad happened.");
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <div>
          <Nav9 />
          <Routes>
            <Route exact path="/" element={<First />}></Route>
            <Route path="/about" element={<Aboutsec />}></Route>
            <Route path="/slider" element={<Slider />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/projects" element={<MyProject />}></Route>
            <Route path="/contact" element={<Contact5 />}></Route>
            <Route path="/footer" element={<NewDA />}></Route>
            <Route path="/skill" element={<Skilldetail />}></Route>
            <Route path="/skill/skilldetail" element={<NewDB />}></Route>
            <Route path="/skillb" element={<Ali />}></Route>
            <Route path="/skillc" element={<New3 />}></Route>
            <Route path="/projects/projectdetail" element={<New4 />}></Route>
            <Route
              path="/skilla"
              element={<IndividualIntervalsExample />}
            ></Route>
          </Routes>
        </div>
      </>
      <div style={{ position: "sticky" }}>
        <Last />
      </div>
    </ThemeProvider>
  );
};

export default App;
