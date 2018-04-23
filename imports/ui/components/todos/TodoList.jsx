import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

const todos = [{ _id: 1, name: "Finish hemployeed" }];

const styles = theme => ({});

class TodoList extends Component {
  render() {
    return <h1>TodoList</h1>;
  }
}

export default withStyles(styles)(TodoList);
