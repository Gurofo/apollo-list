import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";

const styles = theme => ({
  container: { minHeight: 50, display: "flex", justifyContent: "center" },
  gridItem: { paddingLeft: 16, paddingRight: 16 },
  button: {
    borderRadius: 15
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center"
  }
});

class CreateTodo extends Component {
  state = {
    description: ""
  };

  handleChange = event => {
    this.setState({ description: event.target.value });
  };

  onCreateTodo = () => {
    if (this.state.description != "") {
      this.setState({ description: "" });
      this.props.onCreateTodo(this.state.description);
    }
  };

  render() {
    const { classes } = this.props;
    const { description } = this.state;
    return (
      <form
        className={classes.container}
        onSubmit={event => event.preventDefault()}
      >
        <Grid item xs={6} className={classes.gridItem}>
          <TextField
            id="description"
            label="Description"
            className={classes.textField}
            value={description}
            onChange={this.handleChange}
            margin="dense"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={2} className={classes.buttonContainer}>
          <Button
            variant="raised"
            color="secondary"
            size="small"
            className={classes.button}
            onClick={this.onCreateTodo}
          >
            ADD
          </Button>
        </Grid>
      </form>
    );
  }
}
export default withStyles(styles)(CreateTodo);
