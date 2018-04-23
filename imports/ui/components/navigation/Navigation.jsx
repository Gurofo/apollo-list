import React from "react";

import { withStyles } from "material-ui/styles";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import IconButton from "material-ui/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Add from "@material-ui/icons/Add";

import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

const styles = theme => ({
  container: {
    width: "100%",
    maxWidth: 360
  },
  toolbar: {},
  iconButton: {}
});

const Navigation = ({ classes, toggleForm }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Todos
      </Typography>
      <IconButton color="inherit">
        <Add onClick={toggleForm} />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Navigation);
