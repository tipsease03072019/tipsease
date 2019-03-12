import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// HOC Imports
import PrivateRoute from "./HOC/PrivateRoute";

// View imports
import LoginPage from "./Views/LoginPage";
import SignUpPage from "./Views/SignUpPage";

class App extends Component {
  state = {
    loggedIn: false,
    accountType: null,
    userId: null,
  };

  // Handle updating top level state on login we need redux
  loginHandler = data => {
    localStorage.setItem("token", data.token);
    this.setState({
      loggedIn: true,
      accountType: data.account_type,
      userId: data.id
    });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/login"
          render={props => (
            <LoginPage {...props} loginHandler={this.loginHandler} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <SignUpPage {...props} loginHandler={this.loginHandler} />
          )}
        />
        <Route exact path="/wallet" />
        <PrivateRoute exact path />
        <Route  />
      </Switch>
    );
  }
}

export default App;
