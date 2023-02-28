import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Home } from "@mui/icons-material";
import { ListItemButton } from "@mui/material";
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Show Basic info"
        />
      </FormGroup>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Basic Info
      </Typography>
      <Grid container spacing={2} sx={{ display: "flex", overflow: "auto" }}>
        <Grid item xs={6} md={6} sm={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              alignContent: "space-between",
              gap: "60px",
            }}
          >
            {/* <List>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  secondary={secondary ? "SuFian Mustafa" : null}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  secondary={secondary ? "this is home" : null}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText
                  primary={"Home"}
                  secondary={secondary ? "this is home" : null}
                />
              </ListItemButton>
            </List> */}
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Full Name"}
                    secondary={secondary ? "SuFian Mustafa" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Age"}
                    secondary={secondary ? "26" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Country"}
                    secondary={secondary ? "Pakistan" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Religion"}
                    secondary={secondary ? "Muslim" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Interst"}
                    secondary={secondary ? "Web Development" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Expierenece"}
                    secondary={secondary ? "1year+" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Phone Number"}
                    secondary={secondary ? "+923177652064" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Email"}
                    secondary={secondary ? "sufianmustafa0900@gmail.com" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Facebook"}
                    secondary={secondary ? "Link" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
