import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Todo from "./Todo";

const styles = theme => ({});

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return todos.map((todo, index) => <Todo key={index} todo={todo} />);
  }
}

export default withStyles(styles)(TodoList);
