import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import { ApolloLink } from "apollo-link";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Grid from "material-ui/Grid";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";
import { withStyles } from "material-ui/styles";
import purple from "material-ui/colors/purple";
import lightGreen from "material-ui/colors/lightGreen";

import TodoList from "../ui/components/todos/TodoList";
import Navigation from "../ui/components/navigation/Navigation";

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache
});

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: lightGreen
  }
});

const styles = theme => ({
  container: {
    width: "100%",
    maxWidth: 360,
    background: "#ECEFF1"
  }
});
export default class App extends Component {
  state = {
    formVisible: true
  };

  handleToggleForm = () => {
    this.toggleForm();
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  render() {
    const { formVisible } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Grid container alignContent="flex-start" direction="column">
            <Navigation toggleForm={this.handleToggleForm} />
            {formVisible && <h1>TodoForm</h1>}
            <TodoList />
          </Grid>
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}
