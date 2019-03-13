import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import {loadProgressBar} from "axios-progress-bar";
import axios from "axios";

// HOC Imports
import PrivateRoute from "./HOC/PrivateRoute";

// View imports
import LoginPage from "./Views/LoginPage";
import SignUpPage from "./Views/SignUpPage";
import WalletPage from "./Views/ServiceProviderViews/WalletPage";
import ShowCodePage from "./Views/ServiceProviderViews/ShowCodePage";
import TipPage from "./Views/CustomerViews/TipPage";
import Profile from "./Views/ProfilePage";
import SearchServiceProviderPage from "./Views/CustomerViews/SearchServiceProviderPage";

// CSS imports
import "axios-progress-bar/dist/nprogress.css";

class App extends Component {
  //! Data does not pursist on reloads
  state = {
    loggedIn: false,
    accountType: null,
    userId: null,
    // employeeUser: {
    //   id: 1,
    //   username: "employee",
    //   email: "employee@email.com",
    //   img_url: "https://www.fillmurray.com/640/360",
    //   account_type: "employee",
    //   balance: 100,
    //   created_at: "2019-03-12 01:06:39",
    // },
    // normalUser: {
    //   id: 3,
    //   username: "full",
    //   email: "fulluser@email.com",
    //   img_url: "http://via.placeholder.com/640x360",
    //   account_type: "customer",
    //   balance: 50,
    //   created_at: "2019-03-12 01:06:39",
    // },
    payFlow: {
      tip: 5,
    }
  };

  componentDidMount() {
    if (localStorage.getItem("userId") && localStorage.getItem("token")) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      axios
        .get(`https://tipsease.herokuapp.com/api/users/${userId}`)
        .then(res => {
          this.setState({
            ...this.state,
            loggedIn: true,
            accountType: res.data.account_type,
            userId: res.data.id,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  loginHandler = data => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.id);
    this.setState({
      loggedIn: true,
      accountType: data.account_type,
      userId: data.id,
    });
  };

  setTipHelper = tip => {
    this.setState({
      ...this.state,
      tip,
    });
  };

  render() {
    loadProgressBar();
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
            <SignUpPage
              {...props}
              loginHandler={this.loginHandler}
              accountType={this.state.accountType}
            />
          )}
        />
        <Route
          exact
          path="/wallet"
          render={props => (
            <WalletPage {...props} user={this.state.employeeUser} />
          )}
        />
        {/* <PrivateRoute exact path /> */}
        <Route
          exact
          path="/wallet/code"
          render={props => (
            <ShowCodePage
              {...props}
              user={this.state.employeeUser}
              code={"AN18"}
            />
          )}
        />
        <PrivateRoute exact path="/profile" component={props => <Profile {...props} userId={this.state.userId} />} />
        <Route
          exact
          path="/find-provider"
          render={props => (
            <SearchServiceProviderPage
              {...props}
              user={this.state.normalUser}
            />
          )}
        />
        <Route
          render={props => (
            <TipPage
              {...props}
              user={this.state.normalUser}
              tip={this.state.tip}
              setTipHelper={this.setTipHelper}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
