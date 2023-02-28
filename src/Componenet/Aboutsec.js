import React from "react";

import About from "./About";
import Slider from "./Slider";
import Ali from "../Ali";
import Slider2 from "../Slider2";
import Slider3 from "../Slider3";
import Slider4 from "../Slider4";

import { useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import Spin from "./Spin";
const Aboutsec = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  let [color, setColor] = useState("#ffffff");
  return (
    <div>
      {loading ? (
        <div className="asda">
          <Spin />
        </div>
      ) : (
        <div>
          <About />
          <br></br>

          {isMatch ? (
            <Slider3 />
          ) : (
            <>
              {/* <Slider /> */}
              <Slider4 />
            </>
          )}

          <br></br>
          <Slider2 />
        </div>
      )}
    </div>
  );
};

export default Aboutsec;
