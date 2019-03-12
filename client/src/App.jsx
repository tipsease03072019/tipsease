import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Custom Components
import PrivateRoute from './HOC/PrivateRoute'

// Views
import LoginPage from './Views/LoginPage';
import SignUpPage from './Views/SignUpPage';

class App extends Component {
  state = {
    loggedIn: false,
    accountType: null,
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" render={props => <LoginPage {...props} />}  />
        <Route exact path="/signup" render={props => <SignUpPage {...props} />} />
        <PrivateRoute />
        <Route />
      </Switch>
    );
  }
}

export default App;
