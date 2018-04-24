import React from "react";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import IconButton from "material-ui/IconButton";
import Add from "@material-ui/icons/Add";

export default (Navigation = ({ showButton, toggleForm }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Todos
      </Typography>
      {showButton && (
        <IconButton color="inherit">
          <Add onClick={toggleForm} />
        </IconButton>
      )}
    </Toolbar>
  </AppBar>
));
