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
import CreateTodo from "../ui/components/todos/CreateTodo";
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
    formVisible: true,
    todos: ["Finish Hemployeed"]
  };

  handleToggleForm = () => {
    this.toggleForm();
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleCreateTodo = todo => {
    this.setState({ todos: this.state.todos.concat(todo) });
    this.toggleForm();
  };

  render() {
    const { formVisible, todos } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <div>
            <Navigation
              toggleForm={this.handleToggleForm}
              showButton={!formVisible}
            />
            {formVisible && <CreateTodo onCreateTodo={this.handleCreateTodo} />}
            <TodoList todos={todos} />
          </div>
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}
