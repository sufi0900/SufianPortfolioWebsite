import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./Viewport";

const Navigation = () => {
  const { y_top } = WindowView();
  const { pathname } = useLocation();
  let timer = 0;

  //NAVI WITH WIDTH 800px
  useEffect(() => {
    const links = document.querySelectorAll(".link-con .navi-link");

    if (pathname !== "/") {
      timer = 100;
    }

    //TOGGLE LINK ACTIVE
    links.forEach((link, i) => {
      link.addEventListener("click", () => {
        //SMOOTH SCROLL
        const targetId = link.getAttribute("name");
        const duration = 1000;
        setTimeout(() => {
          SmoothScroll({ targetId, duration });
          timer = 0;
        }, timer);
      });
    });
  }, []);

  //TOGGLE NAV BACKGROUND COLOR
  useEffect(() => {
    const navigation = document.querySelector("nav");

    if (y_top > 0) {
      navigation.classList.add("bg-light");
    } else {
      navigation.classList.remove("bg-light");
    }
  }, [y_top]);

  return (
    <>
      <nav>
        <div className="link-con">
          <Link to="/" className="navi-link" name="home">
            home
          </Link>
          <Link to="/about" className="navi-link" name="whats-new">
            what's new
          </Link>
          <Link to="/skill" className="navi-link" name="rules-payment">
            rules & payment
          </Link>
          <Link to="/" className="navi-link" name="contact">
            contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
