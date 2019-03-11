import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginView from './Views/Login';
import Register from './Views/Register';

class App extends Component {
  state = {
    loggedIn: false,
    accountType: null,
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" render={props => <LoginView {...props} />}  />
        <Route exact path="/register" render={props => <Register {...props} />} />
        <Route />
      </Switch>
    );
  }
}

export default App;
