import React from "react";
import Grid from "@mui/material/Grid";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItem from "@mui/material/ListItem";
import ListA from "./ListA";
import NewDA from "./NewDA";
import "./F2.css";
import {
  AdbOutlined,
  Facebook,
  Home,
  HomeMax,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Instagram, List } from "react-content-loader";
import Last from "./Last";
const Footer = () => {
  return (
    // <div>
    <>
      <footer
        className="new_footer_area bg_color"
        style={{ backgroundColor: "white" }}
      >
        {/* <Grid style={{ backgroundColor: "white" }}>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon color="secondary" fab icon="github" />
              </a>
            </div>
          </section>
        </Grid> */}
        <h3 style={{ textAlign: "center" }}>
          {" "}
          Look Like You Reach The End, Thanks For visiting....!
        </h3>

        <div className="new_footer_top">
          <div className="container45">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p style={{ zIndex: "55", fontSize: "18px", width: "110%" }}>
                    Feel free to contact me. The website has been created in
                    ReactJS, other technologies i used are HTML5, CSS3, React
                    Bootstrap, MaterialUI, Framermotion, AOS, AnimateCSS. It
                    took me Weeks to complete my porfolio Website
                  </p>
                  {/* <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    noValidate="true"
                    _lpchecked={1}
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control memail"
                      placeholder="Email"
                    />
                    <button className="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
                    <p
                      className="mchimp-errmessage"
                      style={{ display: "none" }}
                    />
                    <p
                      className="mchimp-sucmessage"
                      style={{ display: "none" }}
                    />
                  </form> */}
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6"> */}
              {/* <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                > */}
              {/* <h3 className="f-title f_600 t_color f_size_18">Download</h3> */}
              {/* <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Android App</a>
                    </li>
                    <li>
                      <a href="#">ios App</a>
                    </li>
                    <li>
                      <a href="#">Desktop</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">My tasks</a>
                    </li>
                  </ul> */}
              {/* </div> */}
              {/* </div> */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon">
                    <a href="#" className="fab fa-facebook">
                      {" "}
                      <Facebook />{" "}
                    </a>
                    <a href="#" className="fab fa-twitter">
                      {" "}
                      <Twitter />{" "}
                    </a>
                    <a href="#" className="fab fa-linkedin">
                      {" "}
                      <LinkedIn />{" "}
                    </a>
                    <a href="#" className="fab fa-pinterest">
                      {" "}
                      <WhatsApp />
                    </a>
                  </div>
                  <br></br>
                  {/* <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4"> */}
                  {/* <h6 className="text-uppercase fw-bold mb-4">Contact</h6> */}
                  <p>
                    <MDBIcon color="secondary" icon="home" className="me-2" />
                    New York, NY 10012, US
                  </p>
                  <p>
                    <MDBIcon
                      color="secondary"
                      icon="envelope"
                      className="me-3"
                    />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                    + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon color="secondary" icon="print" className="me-3" />{" "}
                    + 01 234 567 89
                  </p>
                  {/* </MDBCol> */}
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="footer_bg">
            <div
            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   padding: "5px",
            //   alignItems: "center",
            //   textAlign: "center",
            //   overflow: "none",
            //   backgroundColor: "none",

            // }}
            >
              {" "}
              {/* <div> </div>
            <div>
              <AdbOutlined></AdbOutlined> About
            </div> */}
            </div>

            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
        {/* <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <i className="icon_heart" /> in{" "}
                <a href="http://cakecounter.com" target="_blank">
                  CakeCounter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}

        {/* <Last /> */}
        {/* </MDBFooter> */}
      </footer>
    </>
  );
};

export default Footer;
