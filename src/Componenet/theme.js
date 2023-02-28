import { createTheme } from "@mui/material/styles";
import { blue, pink, red } from "@mui/material/colors";
// import Button from "@mui/material/Button";

import { Tab } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: blue,
    background: "",
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          color: "black",
          textTransform: "initial",
          transition: "0.1s",
          "&:hover": {
            background: "red",
            borderRadius: "7px ",
          },
          // "&:focus": {
          //   background: "red",
          //   border: "2px solid white",
          //   borderRadius: "20px ",
          // },
          // "&:selected": {
          //   border: "2px solid red",
          //   fontsize: "25px",
          // },
          // "&:active": {
          //   border: "2px solid red",
          //   fontsize: "25px",
          // },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: "red",
          transition: "0.1s",
          "&:hover": {
            background: "white",
            borderRadius: "13px ",
          },
        },
        indicator: {
          display: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "beige",
          color: "black",
          alignItems: "center",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          marginTop: "-10px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: "white",
          backgroundColor: "white",
          zIndex: "1000",

          "&:hover": {
            background: "none",
            backgroundColor: "white",
          },
        },
      },
    },

    // MuiIconButton: {
    //   styleOverrides: {
    //     root: {
    //       color: "white",
    //       border: "2px solid black",
    //       borderRadius: "10px",
    //       "&:hover": {
    //         background: "none",
    //         width: "10px",
    //         fontSize: "10px",
    //       },
    //     },
    //   },
    // },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          // color: "red",
          PointerEvent: "none",
          "&:hover": {
            backgroundColor: "none",
            // backgroundColor: "transparent",
            textDecoration: "none",
            background: "none",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "green",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {},
        secondary: {
          color: "blue",
          fontSize: "20px",
        },
        primary: {
          fontSize: "20px",
        },
      },
    },
  },
});
export default theme;
