import React from "react";
import { useState, useEffect } from "react";
import Spin from "./Spin";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import KitchenSinkExample from "../KitchenSinkExample";

const MyProject = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const grid = {
    backgroundColor: "white",
  };
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="asda">
          <Spin />
        </div>
      ) : (
        <div>
          <br></br>
          <br></br>
          <Box sx={{ flexGrow: 1 }}>
            <div className="about41">
              <h3>
                {/* <Link to="/skill/skilldetail" style={{ color: "orange" }}> */}{" "}
                My projects {/* </Link> */}
              </h3>
            </div>
            <Grid
              container
              spacing={2}
              padding={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item lg={3} sm={6}>
                <Item>
                  <KitchenSinkExample />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

export default MyProject;
