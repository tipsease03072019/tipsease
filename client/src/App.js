import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginView from './Views/Login'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login"  />
        <Route />
        <Route />
      </Switch>
    );
  }
}

export default App;
