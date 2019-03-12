import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// HOC Imports
import PrivateRoute from "./HOC/PrivateRoute";

// View imports
import LoginPage from "./Views/LoginPage";
import SignUpPage from "./Views/SignUpPage";
import WalletPage from './Views/ServiceProviderViews/WalletPage';
import ShowCodePage from './Views/ServiceProviderViews/ShowCodePage';
import TipPage from './Views/CustomerProviderViews/TipPage';

class App extends Component {
  state = {
    loggedIn: false,
    accountType: null,
    userId: null,
    employeeUser:
    {
      id: 1,
      username: "employee",
      email: "employee@email.com",
      img_url: "https://www.fillmurray.com/640/360",
      account_type: "employee",
      balance: 100,
      created_at: "2019-03-12 01:06:39"
    },
    normalUser: {
      id: 3,
      username: "full",
      email: "fulluser@email.com",
      img_url: "http://via.placeholder.com/640x360",
      account_type: "employee",
      balance: 50,
      created_at: "2019-03-12 01:06:39"
      },
    tip: null,
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

  setTip = tip => {
    this.setState({
      ...this.state,
      tip: tip
    })
  }

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
        <Route 
          exact 
          path="/wallet" 
          render={props => (
            <WalletPage {...props} user={this.state.employeeUser}  />
          )}/>
        <PrivateRoute exact path />
        <Route 
          exact
          path="/wallet/code"
          render={props => (
            <ShowCodePage {...props} user={this.state.employeeUser} code={"AN18"}/>
          )}
        />
        <Route 
          exact
          path="/tip"
          render={props => (
            <TipPage {...props} user={this.state.normalUser} tip={this.state.tip} setTip={this.setTip}/>
          )}
        />
      </Switch>
    );
  }
}

export default App;
