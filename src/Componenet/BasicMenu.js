import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useState } from "react";
import BasicPopover from "./BasicPopover";
const BasicMenu = () => {
  // const [anchorEl, setAnchorEl] =
  //   (React.useState < HTMLButtonElement) | (null > null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // setAnchorEl(null);
  };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} style={{ boxShadow: "none" }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            // inputProps={{ "aria-label": "Without label" }}
            style={{
              boxShadow: "none",
              // border: "3px solid red",
              // background: "red",
            }}
          >
            <MenuItem value="">
              <em style={{ border: "none" }}>None</em>
            </MenuItem>
            <MenuItem value={10} style={{ background: "white" }}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <BasicPopover />
      <select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>
    </div>
  );
};

export default BasicMenu;
